// src/sessionPrisma.js
import "dotenv/config";
import { PrismaClient } from "../generated/sessions/index.js"; // adjust if your output differs

// Avoid multiple clients in dev (hot-reload) by caching on globalThis
const globalForPrisma = globalThis;

const sessionPrisma = 
  globalForPrisma._sessionPrisma ??
  new PrismaClient({
    datasources: {
      db: { url: process.env.DATABASE_URL },
    },
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma._sessionPrisma = sessionPrisma;
}

export { sessionPrisma };
export default sessionPrisma;