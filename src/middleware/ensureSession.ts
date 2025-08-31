// middleware/ensureSession.ts
import { NextFunction, Request, Response } from "express";
import {sessionPrisma} from "../sessionPrismaClient.js";

// lib/session.ts
export const SESSION_COOKIE = "sid";
export const SESSION_TTL_DAYS = 180;

export function expiryDate(days: number): Date {
  return new Date(Date.now() + days * 24 * 60 * 60 * 1000);
}
export function expiryMs(days: number): number {
  return days * 24 * 60 * 60 * 1000;
}

export async function ensureSession(req: Request, res: Response, next: NextFunction) {
  try {
    const sid = req.cookies?.[SESSION_COOKIE] as string | undefined;

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

    res.cookie(SESSION_COOKIE, created.id, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: expiryMs(SESSION_TTL_DAYS),
    });

    req.sessionId = created.id;
    next();
  } catch (err) {
    next(err);
  }
}