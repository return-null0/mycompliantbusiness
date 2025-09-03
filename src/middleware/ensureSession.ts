// src/middleware/ensureSession.ts
import type { Request, Response, NextFunction } from "express";
import sessionPrisma from "../sessionPrismaClient.js";
import { COOKIE_NAME, SESSION_TTL_DAYS, expiryDate, ttlMs } from "../sessionConstants.js";

export async function ensureSession(req: Request, res: Response, next: NextFunction) {
  try {
    const sid = typeof req.cookies?.[COOKIE_NAME] === "string" ? (req.cookies[COOKIE_NAME] as string) : undefined;

    if (sid) {
      const s = await sessionPrisma.session.findUnique({ where: { id: sid } });
      if (s) {
        await sessionPrisma.session.update({
          where: { id: s.id },
          data: { expiresAt: expiryDate(SESSION_TTL_DAYS) },
        });
        req.sessionId = s.id;
        return next();
      }
    }

    const created = await sessionPrisma.session.create({
      data: { expiresAt: expiryDate(SESSION_TTL_DAYS) },
      select: { id: true },
    });

    const sameSiteHeader = (process.env.COOKIE_SAMESITE?.toLowerCase() === "none" ? "none" : "lax") as
      | "lax"
      | "strict"
      | "none";

    res.cookie(COOKIE_NAME, created.id, {
      httpOnly: true,
      sameSite: sameSiteHeader,
      secure: req.secure || req.headers["x-forwarded-proto"] === "https",
      maxAge: ttlMs(SESSION_TTL_DAYS),
      path: "/",
    });

    req.sessionId = created.id;
    return next();
  } catch (err) {
    console.error("[ensureSession] failed", err);
    return res.status(500).json({ error: "session-initialize-failed" });
  }
}