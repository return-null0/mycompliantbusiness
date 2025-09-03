// src/routes/api.ts
import { Router } from "express";
import { commonPrisma } from "../commonPrismaClient.js";
import { sessionPrisma } from "../sessionPrismaClient.js";
import type { Scope } from "../../generated/common/index.js";
import { asScope } from "../types/api.js";

// If your middleware uses a cookie name, keep it consistent here.
const COOKIE_NAME = process.env.SESSION_COOKIE_NAME ?? "sid";

export const api = Router();

/* ------------------------------------------------------------------ */
/* Helpers */
/* ------------------------------------------------------------------ */

/** Normalize location from query based on scope. Returns:
 *  - FEDERAL  -> null
 *  - STATE    -> uppercase two-letter code ("" if absent)
 *  - CITY     -> trimmed city name ("" if absent)
 */
function getLocationFromQuery(scope: Scope, q: any): string | null {
  // Back-compat: accept ?location=... if passed
  const rawFallback = q.location ? String(q.location).trim() : "";

  if (scope === "FEDERAL") return null;

  if (scope === "STATE") {
    // Prefer explicit ?state=CA, otherwise fallback to ?location=CA
    const s = String(q.state ?? rawFallback).trim().toUpperCase();
    return s || "";
  }

  // CITY
  const c = String(q.city ?? rawFallback).trim();
  return c || "";
}

/** Tiny predicate DSL evaluator */
type PredicateLeaf =
  | { fact: string; op: "==" | "!="; value: unknown }
  | { fact: string; op: ">=" | ">" | "<=" | "<"; value: number }
  | { fact: string; op: "in"; value: unknown[] }
  | { fact: string; op: "contains"; value: unknown };

type PredicateNode =
  | { all: Predicate[] } // AND
  | { any: Predicate[] }; // OR

type Predicate = PredicateLeaf | PredicateNode;

type Facts = Record<string, unknown>;

function evalPredicate(p: Predicate, facts: Facts): boolean {
  if ("all" in p) return p.all.every((c) => evalPredicate(c, facts));
  if ("any" in p) return p.any.some((c) => evalPredicate(c, facts));

  // leaf
  const { fact, op, value } = p as PredicateLeaf;
  const actual = facts[fact];

  switch (op) {
    case "==":
      return actual === value;
    case "!=":
      return actual !== value;
    case ">=":
      return typeof actual === "number" && actual >= (value as number);
    case ">":
      return typeof actual === "number" && actual > (value as number);
    case "<=":
      return typeof actual === "number" && actual <= (value as number);
    case "<":
      return typeof actual === "number" && actual < (value as number);
    case "in":
      return Array.isArray(value) && value.includes(actual);
    case "contains":
      return Array.isArray(actual)
        ? actual.includes(value)
        : typeof actual === "string"
        ? actual.includes(String(value))
        : false;
    default:
      return false;
  }
}

/* ------------------------------------------------------------------ */
/* Session routes */
/* ------------------------------------------------------------------ */

/** GET /api/session  -> { sessionId } */
api.get("/session", async (req, res) => {
  res.json({ sessionId: req.sessionId ?? null });
});

/** POST /api/session/new -> create a fresh session & set cookie */
api.post("/session/new", async (req, res, next) => {
  try {
    const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30); // ~30 days
    const s = await sessionPrisma.session.create({
      data: { expiresAt },
      select: { id: true },
    });

    res.cookie(COOKIE_NAME, s.id, {
      httpOnly: true,
      sameSite: "lax",
      secure: false, // set true behind HTTPS
      expires: expiresAt,
      path: "/",
    });

    res.json({ sessionId: s.id });
  } catch (e) {
    next(e);
  }
});

/* ------------------------------------------------------------------ */
/* Questions */
/* ------------------------------------------------------------------ */

/**
 * GET /api/questions?scope=FEDERAL|STATE|CITY[&state=CA|&city=Seattle]
 * Filters by scope + location (location is NULL for FEDERAL).
 */
api.get("/questions", async (req, res, next) => {
  try {
    const scope = asScope(req.query.scope ?? "FEDERAL");
    const loc = getLocationFromQuery(scope, req.query);

    // For STATE/CITY, require a location
    if (scope !== "FEDERAL" && !loc) {
      return res.json([]); // no location chosen yet => no questions
    }

    const rows = await commonPrisma.question.findMany({
      where: {
        scope,
        location: scope === "FEDERAL" ? null : loc,
      },
      select: { id: true, code: true, kind: true, prompt: true },
      orderBy: [{ id: "asc" }],
    });

    res.json(
      rows.map((r) => ({
        id: r.id,
        code: r.code,
        kind: r.kind as "NUMBER" | "BOOL" | "TEXT",
        prompt: r.prompt,
      }))
    );
  } catch (e) {
    next(e);
  }
});

/* ------------------------------------------------------------------ */
/* Answers */
/* ------------------------------------------------------------------ */

/**
 * GET /api/answers
 * Returns all answers for the current session.
 */
api.get("/answers", async (req, res, next) => {
  try {
    const sessionId = req.sessionId!;
    const rows = await sessionPrisma.answer.findMany({
      where: { sessionId },
      orderBy: [{ updatedAt: "desc" }, { id: "desc" }],
    });

    res.json(
      rows.map((r) => ({
        id: r.id,
        sessionId: r.sessionId,
        scope: r.scope,
        questionId: r.questionId,
        questionCode: r.questionCode,
        value: r.value as unknown,
        valueNumber: r.valueNumber ?? null,
        valueBool: r.valueBool ?? null,
        valueText: r.valueText ?? null,
        createdAt: r.createdAt.toISOString(),
        updatedAt: r.updatedAt.toISOString(),
      }))
    );
  } catch (e) {
    next(e);
  }
});

/**
 * POST /api/answers
 * Body: { scope: "FEDERAL"|"STATE"|"CITY", questionId: number, questionCode: string, answer: unknown }
 * Upserts by (sessionId, questionCode). Stores JSON value + typed projections.
 */
api.post("/answers", async (req, res, next) => {
  try {
    const sessionId = req.sessionId!;
    const {
      scope: rawScope,
      questionId,
      questionCode,
      answer,
    }: {
      scope: Scope | string;
      questionId: number;
      questionCode: string;
      answer: unknown;
    } = req.body ?? {};

    const scope = asScope(rawScope ?? "FEDERAL");
    if (!questionId || !questionCode) {
      return res
        .status(400)
        .json({ error: "Missing questionId or questionCode" });
    }

    // projections on typed columns
    const projections: Record<string, unknown> = {};
    if (typeof answer === "number") projections.valueNumber = answer;
    if (typeof answer === "boolean") projections.valueBool = answer;
    if (typeof answer === "string") projections.valueText = answer;

    const upserted = await sessionPrisma.answer.upsert({
      where: { sessionId_questionCode: { sessionId, questionCode } },
      update: {
        value: answer as any,
        ...projections,
        questionId,
        scope,
      },
      create: {
        sessionId,
        scope,
        questionId,
        questionCode,
        value: answer as any,
        ...projections,
      },
      select: { id: true },
    });

    res.json({ ok: true, id: upserted.id });
  } catch (e) {
    next(e);
  }
});

/* ------------------------------------------------------------------ */
/* Obligation meta */
/* ------------------------------------------------------------------ */

/**
 * GET /api/obligation-meta?scope=... [&state=..|&city=..]
 * Returns compact card metadata for obligations in that scope+location.
 */
api.get("/obligation-meta", async (req, res, next) => {
  try {
    const scope = asScope(req.query.scope ?? "FEDERAL");
    const loc = getLocationFromQuery(scope, req.query);

    if (scope !== "FEDERAL" && !loc) return res.json([]);

    const rows = await commonPrisma.obligation.findMany({
      where: {
        scope,
        location: scope === "FEDERAL" ? null : loc,
      },
      select: { code: true, title: true, description: true, citation: true },
      orderBy: [{ code: "asc" }],
    });

    res.json(rows);
  } catch (e) {
    next(e);
  }
});

/* ------------------------------------------------------------------ */
/* Obligations (computed) */
/* ------------------------------------------------------------------ */

/**
 * GET /api/obligations?scope=FEDERAL|STATE|CITY[&state=CA|&city=Seattle]
 * Evaluates rules for the requested scope+location using session answers.
 */
api.get("/obligations", async (req, res, next) => {
  try {
    const sessionId = req.sessionId!;
    const scope = asScope(req.query.scope ?? "FEDERAL");
    const loc = getLocationFromQuery(scope, req.query);

    // If STATE/CITY without a location, return empty set (UI will prompt to choose one)
    if (scope !== "FEDERAL" && !loc) {
      return res.json({ sessionId, obligations: [] });
    }

    // 1) Build facts from this session's answers
    const answers = await sessionPrisma.answer.findMany({
      where: { sessionId },
      orderBy: [{ id: "asc" }],
    });

    const facts: Facts = {};
    for (const a of answers) {
      facts[a.questionCode] =
        a.valueNumber ?? a.valueBool ?? a.valueText ?? (a.value as unknown);
    }

    // 2) Load active rules+obligations for this scope + location
    const now = new Date();
    const rules = await commonPrisma.rule.findMany({
      where: {
        scope,
        status: "ACTIVE",
        effectiveFrom: { lte: now },
        OR: [{ effectiveTo: null }, { effectiveTo: { gte: now } }],
        obligation: {
          location: scope === "FEDERAL" ? null : loc,
        },
      },
      select: {
        id: true,
        predicate: true,
        obligation: { select: { id: true, code: true } },
      },
      orderBy: [{ id: "asc" }],
    });

    // 3) Evaluate predicates
    const out: { obligationId: number; obligationCode: string; ruleId: number }[] =
      [];
    for (const r of rules) {
      if (!r.obligation) continue;
      const pred = (r.predicate ?? { all: [] }) as Predicate;
      const ok = evalPredicate(pred, facts);
      if (ok) {
        out.push({
          obligationId: r.obligation.id,
          obligationCode: r.obligation.code,
          ruleId: r.id,
        });
      }
    }

    res.json({ sessionId, obligations: out });
  } catch (e) {
    next(e);
  }
});

export default api;