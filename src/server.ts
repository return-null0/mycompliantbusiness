import path from "node:path";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import api from "./routes/api.js";                    // << your api router (the long file you shared)
import { ensureSession } from "./middleware/ensureSession.js";

const app = express();
app.set("trust proxy", true); // behind Railway/NGINX

// --- CORS (safe defaults) ---
// If frontend and API are same origin, you can delete this whole CORS block.
// If they’re on different origins, set ORIGIN to your FE URL and keep credentials:true.
const ORIGIN = process.env.ORIGIN || ""; // e.g. https://your-frontend.example
if (ORIGIN) {
  app.use(
    cors({
      origin: ORIGIN,
      credentials: true,
    })
  );
}

// --- core middleware ---
app.use(cookieParser());
app.use(express.json());

// --- static frontend (/static/app.js) ---
const staticDir = path.join(process.cwd(), "frontend", "dist");
app.use(
  "/static",
  express.static(staticDir, {
    setHeaders(res, filePath) {
      if (filePath.endsWith(".js")) res.type("application/javascript; charset=utf-8");
    },
    maxAge: "1y",
    etag: false,
  })
);

// --- Health before API ---
app.get("/api/health", (_req, res) => {
  res.json({ ok: true, ts: new Date().toISOString() });
});

// --- Debug: environment + Prisma visibility (optional) ---
app.get("/api/debug/env", async (_req, res) => {
  res.json({
    COMMON_DATABASE_URL: !!process.env.COMMON_DATABASE_URL,
    SESSIONS_DATABASE_URL: !!process.env.SESSIONS_DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV || "undefined",
  });
});

// --- Mount API (IMPORTANT) ---
// ensureSession *creates or refreshes* the session cookie, so it’s OK to run before all API routes.
app.use("/api", ensureSession, api);

// --- index.html shell ---
app.get("/", (_req, res) => {
  res.setHeader("Cache-Control", "no-store");
  res.sendFile(path.join(process.cwd(), "frontend", "index.html"));
});

// --- errors ---
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error("API error:", err);
  res.status(500).json({ error: "Internal Error", detail: String(err?.message || err) });
});

// --- 404 ---
app.use((_req, res) => res.status(404).send("Not found"));

const PORT = Number(process.env.PORT || 3000);
app.listen(PORT, () => {
  console.log(`Server http://0.0.0.0:${PORT}`);
  console.log(`Try: curl -i "http://127.0.0.1:${PORT}/api/health"`);
});