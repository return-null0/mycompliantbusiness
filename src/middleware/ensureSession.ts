// src/middleware/ensureSession.ts
import type { Request, Response, NextFunction } from "express";
import sessionPrisma from "../sessionPrismaClient.js";
import { COOKIE_NAME, SESSION_TTL_DAYS, expiryDate, ttlMs } from "../sessionConstants.js";

const isProd = process.env.NODE_ENV === "production";
const sameSiteEnv = (process.env.COOKIE_SAMESITE || "lax").toLowerCase();
const sameSite: "lax" | "none" = sameSiteEnv === "none" ? "none" : "lax";

function shouldBeSecure(req: Request) {
  // honor proxy header if present
  const xfProto = String(req.headers["x-forwarded-proto"] || "").split(",")[0].trim().toLowerCase();
  const viaProxyHttps = xfProto === "https";
  // In production, force secure (required for SameSite=None cookies to work reliably)
  return isProd ? true : (req.secure || viaProxyHttps);
}

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

        // refresh cookie on each hit (keeps Max-Age rolling)
        res.cookie(COOKIE_NAME, s.id, {
          httpOnly: true,
          sameSite,
          secure: sameSite === "none" ? true : shouldBeSecure(req),
          maxAge: ttlMs(SESSION_TTL_DAYS),
          path: "/",
        });

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
      sameSite,
      secure: sameSite === "none" ? true : shouldBeSecure(req),
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