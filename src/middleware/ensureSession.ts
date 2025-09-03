// src/middleware/ensureSession.ts
import type { Request, Response, NextFunction } from "express";
import sessionPrisma from "../sessionPrismaClient.js";
import { COOKIE_NAME, SESSION_TTL_DAYS, expiryDate, ttlMs } from "../sessionConstants.js";

// Assume server.ts has: app.set("trust proxy", true)
const isProd = process.env.NODE_ENV === "production";
const sameSiteEnv = (process.env.COOKIE_SAMESITE || "lax").toLowerCase() as "lax" | "none";
const sameSite: "lax" | "none" = sameSiteEnv === "none" ? "none" : "lax";

function shouldBeSecure(req: Request) {
  // In production behind a proxy, treat as secure if the proxy says so
  const viaProxyHttps = req.headers["x-forwarded-proto"] === "https";
  return isProd ? true : (req.secure || viaProxyHttps === "https");
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

        // Refresh cookie Max-Age on each valid hit (optional but nice)
        res.cookie(COOKIE_NAME, s.id, {
          httpOnly: true,
          sameSite,
          secure: sameSite === "none" ? true : shouldBeSecure(req), // SameSite=None requires secure
          maxAge: ttlMs(SESSION_TTL_DAYS),
          path: "/",
        });

        req.sessionId = s.id;
        return next();
      }
    }

    // Create a new session
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