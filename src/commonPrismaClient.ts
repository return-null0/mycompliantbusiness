import { PrismaClient } from "../generated/common/index.js";

// Avoid multiple instances in dev (hot reload)
const globalForPrisma = globalThis as unknown as {
  commonPrisma?: PrismaClient;
};

export const commonPrisma =
  globalForPrisma.commonPrisma ??
  new PrismaClient({
    datasources: {
      db: { url: process.env.COMMON_DATABASE_URL! },
    },
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.commonPrisma = commonPrisma;
}