import "dotenv/config";
import { PrismaClient } from "../generated/common/index.js";

const globalForPrisma = globalThis as unknown as { _common?: PrismaClient };

function redact(u?: string) {
  if (!u) return undefined;
  return u.replace(/:\/\/([^:]+):[^@]+@/, "://$1:***@");
}

const url = process.env.COMMON_DATABASE_URL!;
if (!url) {
  console.error("[commonPrisma] MISSING COMMON_DATABASE_URL");
}

export const commonPrisma =
  globalForPrisma._common ??
  new PrismaClient({
    datasources: { db: { url } },
    log: process.env.NODE_ENV === "production" ? ["warn", "error"] : ["query", "info", "warn", "error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma._common = commonPrisma;
}

console.log("[commonPrisma] using", redact(url));
export default commonPrisma;