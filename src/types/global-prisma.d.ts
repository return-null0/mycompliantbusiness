// src/types/global-prisma.d.ts
import type { PrismaClient } from "../../generated/sessions";

// Declare the global cache slot used by the JS wrapper
declare global {
  // eslint-disable-next-line no-var
  var _sessionPrisma: PrismaClient | undefined;
}
export {};