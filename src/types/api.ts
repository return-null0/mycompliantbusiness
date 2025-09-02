// Shared API types for frontend + backend
import type { Scope } from "../../generated/common/index.js";

export type Question = {
  id: number;
  topicId: number;
  code: string;
  kind: "NUMBER" | "BOOL" | "TEXT";
  prompt: string;
  help?: string | null;
};

export function asScope(value: any): Scope {
  if (value === "FEDERAL" || value === "STATE" || value === "CITY") {
    return value;
  }
  throw new Error("Invalid scope: " + value);
}


export type QuestionResponse = Question[];

// Represents one answer row from SessionAnswer
export type SessionAnswer = {
  id: number;
  sessionId: string;
  scope: string;
  topicNumber: number;
  questionId: number;
  questionCode: string;
  value: any;
  valueNumber?: number | null;
  valueBool?: boolean | null;
  valueText?: string | null;
  createdAt: string;
  updatedAt: string;
};