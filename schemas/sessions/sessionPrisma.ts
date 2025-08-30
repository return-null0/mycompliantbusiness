// db/sessionPrisma.ts
import "dotenv/config";
import { PrismaClient as GeneratedSessionPrisma } from "../../generated/sessions/client"; // adjust if your output differs

// Helpful alias for autocomplete/readability
export type SessionPrismaClient = GeneratedSessionPrisma;

// Avoid multiple clients in dev (hot-reload) by caching on globalThis
const globalForSessionPrisma = globalThis as unknown as {
  _sessionPrisma?: SessionPrismaClient;
};

export const sessionPrisma: SessionPrismaClient =
  globalForSessionPrisma._sessionPrisma ??
  new GeneratedSessionPrisma({
    // Pass URL explicitly so we never depend on Prisma’s env path discovery
    datasources: {
      db: { url: process.env.DATABASE_URL! },
    },
  });

if (process.env.NODE_ENV !== "production") {
  globalForSessionPrisma._sessionPrisma = sessionPrisma;
}