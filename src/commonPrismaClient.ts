import "dotenv/config";
import { PrismaClient } from "../generated/common/index.js";

const globalForPrisma = globalThis as unknown as { _commonPrisma?: PrismaClient };

function buildUrl() {
  const base = process.env.COMMON_DATABASE_URL || process.env.DATABASE_URL;
  if (!base) {
    throw new Error("Missing DATABASE_URL (or COMMON_DATABASE_URL) in environment");
  }
  return `${base}${base.includes("?") ? "&" : "?"}schema=common`;
}

export const commonPrisma =
  globalForPrisma._commonPrisma ??
  new PrismaClient({
    datasources: { db: { url: buildUrl() } },
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma._commonPrisma = commonPrisma;
}

export default commonPrisma;