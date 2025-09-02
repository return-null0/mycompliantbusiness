// src/routes/api.ts
import { Router } from "express";
import { commonPrisma } from "../commonPrismaClient.js";
import { sessionPrisma } from "../sessionPrismaClient.js";
import type { Scope } from "../../generated/common/index.js";
import { asScope } from "../types/api.js";

// -----------------------------
// Minimal API types (match current schema: NO topicId)
// -----------------------------

export type QuestionDTO = {
  id: number;
  code: string;
  kind: "NUMBER" | "BOOL" | "TEXT";
  prompt: string;
};
export type QuestionsResponse = QuestionDTO[];

export type AnswerRow = {
  id: number;
  sessionId: string;
  scope: Scope;
  questionId: number;
  questionCode: string;
  value: unknown;
  valueNumber: number | null;
  valueBool: boolean | null;
  valueText: string | null;
  createdAt: string;
  updatedAt: string;
};
export type AnswersResponse = AnswerRow[];

export type ComputedObligation = {
  obligationId: number;
  obligationCode: string;
  ruleId: number;
};
export type ObligationsResponse = {
  sessionId: string;
  obligations: ComputedObligation[];
};

// -----------------------------
// Tiny predicate DSL (typed)
// -----------------------------
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

  const { fact, op, value } = p;
  const actual = facts[fact];

  switch (op) {
    case "==": return actual === value;
    case "!=": return actual !== value;
    case ">=": return typeof actual === "number" && actual >= value;
    case ">":  return typeof actual === "number" && actual > (value as number);
    case "<=": return typeof actual === "number" && actual <= value;
    case "<":  return typeof actual === "number" && actual < (value as number);
    case "in": return Array.isArray(value) && value.includes(actual);
    case "contains":
      return Array.isArray(actual)
        ? actual.includes(value)
        : typeof actual === "string"
        ? actual.includes(String(value))
        : false;
    default:   return false;
  }
}

// -----------------------------
// Router
// -----------------------------
export const api = Router();

/**
 * GET /api/questions?scope=FEDERAL|STATE|CITY
 * Pull questions from common DB (no topicId).
 */
api.get("/questions", async (req, res, next) => {
  try {
    const scope = asScope(req.query.scope ?? "FEDERAL");

    const rows = await commonPrisma.question.findMany({
      where: { scope },
      select: { id: true, code: true, kind: true, prompt: true },
      orderBy: [{ id: "asc" }],
    });

    const out: QuestionsResponse = rows.map((r) => ({
      id: r.id,
      code: r.code,
      // cast enum to string literal union the frontend expects
      kind: r.kind as unknown as "NUMBER" | "BOOL" | "TEXT",
      prompt: r.prompt,
    }));

    res.json(out);
  } catch (e) {
    next(e);
  }
});

/**
 * GET /api/answers
 * Returns all answers for the current session (from sessions.Answer).
 */
api.get("/answers", async (req, res, next) => {
  try {
    const sessionId = req.sessionId!;
    const rows = await sessionPrisma.answer.findMany({
      where: { sessionId },
      orderBy: [{ updatedAt: "desc" }, { id: "desc" }],
    });

    const out: AnswersResponse = rows.map((r) => ({
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
    }));

    res.json(out);
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
      scope?: Scope | string;
      questionId: number;
      questionCode: string;
      answer: unknown;
    } = req.body ?? {};

    const scope = asScope(rawScope ?? "FEDERAL");
    if (!questionId || !questionCode) {
      return res.status(400).json({ error: "Missing questionId or questionCode" });
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

/**
 * GET /api/obligations?scope=FEDERAL|STATE|CITY
 * Evaluates common.Rule predicates against session's Answers and returns applicable obligations.
 */
api.get("/obligations", async (req, res, next) => {
  try {
    const sessionId = req.sessionId!;
    const scope = asScope(req.query.scope ?? "FEDERAL");

    // 1) Build facts from this session's answers
    const answers = await sessionPrisma.answer.findMany({
      where: { sessionId },
      orderBy: [{ id: "asc" }],
    });

    const facts: Facts = {};
    for (const a of answers) {
      // Use questionCode as the fact key
      facts[a.questionCode] =
        a.valueNumber ?? a.valueBool ?? a.valueText ?? (a.value as unknown);
    }

    // 2) Load active rules+obligations for this scope
    const now = new Date();
    const rules = await commonPrisma.rule.findMany({
      where: {
        scope,
        status: "ACTIVE",
        effectiveFrom: { lte: now },
        OR: [{ effectiveTo: null }, { effectiveTo: { gte: now } }],
      },
      select: {
        id: true,
        predicate: true,
        obligation: { select: { id: true, code: true } },
      },
      orderBy: [{ id: "asc" }],
    });

    // 3) Evaluate predicates
    const obligations: ComputedObligation[] = [];
    for (const r of rules) {
      if (!r.obligation) continue;
      const pred = (r.predicate ?? { all: [] }) as Predicate;
      const ok = evalPredicate(pred, facts);
      if (ok) {
        obligations.push({
          obligationId: r.obligation.id,
          obligationCode: r.obligation.code,
          ruleId: r.id,
        });
      }
    }

    const payload: ObligationsResponse = { sessionId, obligations };
    res.json(payload);
  } catch (e) {
    next(e);
  }
});

export default api;