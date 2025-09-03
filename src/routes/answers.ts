// src/routes/answers.ts
import { Router } from "express";
import { PrismaClient as CommonClient } from "../../generated/common/index.js";
import { PrismaClient as SessionsClient } from "../../generated/sessions/index.js";

const commonPrisma = new CommonClient();
const sessionPrisma = new SessionsClient();

export const answers = Router();

/** ---- predicate evaluator ---- */
export type PredicateLeaf =
  | { fact: string; op: "==" | "!="; value: unknown }
  | { fact: string; op: ">=" | ">" | "<=" | "<"; value: number }
  | { fact: string; op: "in"; value: unknown[] }
  | { fact: string; op: "contains"; value: unknown };
export type PredicateNode = { all: Predicate[] } | { any: Predicate[] };
export type Predicate = PredicateLeaf | PredicateNode;

export function evalPredicate(p: Predicate, facts: Record<string, unknown>): boolean {
  if ("all" in p) return p.all.every(x => evalPredicate(x, facts));
  if ("any" in p) return p.any.some(x => evalPredicate(x, facts));
  const { fact, op, value } = p as any;
  const actual = facts[fact];
  switch (op) {
    case "==": return actual === value;
    case "!=": return actual !== value;
    case ">=": return typeof actual === "number" && actual >= value;
    case ">":  return typeof actual === "number" && actual > value;
    case "<=": return typeof actual === "number" && actual <= value;
    case "<":  return typeof actual === "number" && actual < value;
    case "in": return Array.isArray(value) && value.includes(actual);
    case "contains":
      return Array.isArray(actual) ? actual.includes(value)
           : typeof actual === "string" ? actual.includes(String(value))
           : false;
    default: return false;
  }
}


