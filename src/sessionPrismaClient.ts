import "dotenv/config";
import { PrismaClient } from "../generated/sessions/index.js";

const globalForPrisma = globalThis as unknown as { _session?: PrismaClient };

function redact(u?: string) {
  if (!u) return undefined;
  return u.replace(/:\/\/([^:]+):[^@]+@/, "://$1:***@");
}

const url = process.env.SESSIONS_DATABASE_URL!;
if (!url) {
  console.error("[sessionPrisma] MISSING SESSIONS_DATABASE_URL");
}

export const sessionPrisma =
  globalForPrisma._session ??
  new PrismaClient({
    datasources: { db: { url } },
    log: process.env.NODE_ENV === "production" ? ["warn", "error"] : ["query", "info", "warn", "error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma._session = sessionPrisma;
}

console.log("[sessionPrisma] using", redact(url));
export default sessionPrisma;