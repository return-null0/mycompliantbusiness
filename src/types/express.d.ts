// types/express.d.ts
import "express-serve-static-core";
declare module "express-serve-static-core" {
  interface Request {
    sessionId?: string;
  }
}