import "dotenv/config";
import { PrismaClient } from "../generated/sessions/index.js"; // generated client exports PrismaClient

const globalForPrisma = globalThis as unknown as { _sessionPrisma?: PrismaClient };

export const sessionPrisma =
  globalForPrisma._sessionPrisma ??
  new PrismaClient({
    datasources: { db: { url: process.env.SESSIONS_DATABASE_URL! } },
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma._sessionPrisma = sessionPrisma;
}

export default sessionPrisma;