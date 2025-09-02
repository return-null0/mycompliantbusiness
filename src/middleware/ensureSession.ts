import type { Request, Response, NextFunction } from "express";
import sessionPrisma from "../sessionPrismaClient.js"; // <-- NOT from generated/
import { COOKIE_NAME, SESSION_TTL_DAYS, expiryDate, ttlMs } from "../sessionConstants.js";

export async function ensureSession(req: Request, res: Response, next: NextFunction) {
  try {
    const sid = typeof req.cookies?.[COOKIE_NAME] === "string" ? (req.cookies[COOKIE_NAME] as string) : undefined;

    if (sid) {
      const s = await sessionPrisma.session.findUnique({ where: { id: sid } });
      if (s) {
        await sessionPrisma.session.update({ where: { id: s.id }, data: { expiresAt: expiryDate(SESSION_TTL_DAYS) } });
        req.sessionId = s.id;
        return next();
      }
    }

    const created = await sessionPrisma.session.create({
      data: { expiresAt: expiryDate(SESSION_TTL_DAYS) },
      select: { id: true },
    });

    res.cookie(COOKIE_NAME, created.id, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: ttlMs(SESSION_TTL_DAYS),
      secure: false, // true in prod over HTTPS
      path: "/",
    });

    req.sessionId = created.id;
    return next();
  } catch (err) {
    return next(err);
  }
}