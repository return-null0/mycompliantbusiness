import "dotenv/config";
import { PrismaClient } from "../generated/sessions/index.js";

const globalForPrisma = globalThis as unknown as { _sessionPrisma?: PrismaClient };

function buildUrl() {
  // Prefer an explicit var if set, else default to DATABASE_URL
  const base = process.env.SESSIONS_DATABASE_URL || process.env.DATABASE_URL;
  if (!base) {
    throw new Error("Missing DATABASE_URL (or SESSIONS_DATABASE_URL) in environment");
  }
  return `${base}${base.includes("?") ? "&" : "?"}schema=sessions`;
}

export const sessionPrisma =
  globalForPrisma._sessionPrisma ??
  new PrismaClient({
    datasources: { db: { url: buildUrl() } },
  });

// cache the client in dev to prevent "too many connections" on hot reload
if (process.env.NODE_ENV !== "production") {
  globalForPrisma._sessionPrisma = sessionPrisma;
}

export default sessionPrisma;