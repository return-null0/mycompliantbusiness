// src/server.ts
import path from "node:path";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import { api } from "./routes/api.js";
import { ensureSession } from "./middleware/ensureSession.js";

const app = express();

// Trust Railway/Proxy so req.secure & x-forwarded-proto are respected
app.set("trust proxy", true);

// Middlewares
app.use(cookieParser());
app.use(express.json());

// If you front your app from a custom domain, you can keep same-origin fetches.
// CORS is only needed when you’re hitting the API from *another* origin.
if (process.env.CORS_ORIGIN) {
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN.split(","),
      credentials: true,
    })
  );
}

// Static frontend (/static/app.js, etc.)
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

// --- DEBUG endpoints BEFORE API (handy while diagnosing) ---
app.get("/api/_debug/env", (_req, res) => {
  res.json({
    NODE_ENV: process.env.NODE_ENV,
    COMMON_DATABASE_URL: !!process.env.COMMON_DATABASE_URL,
    SESSIONS_DATABASE_URL: !!process.env.SESSIONS_DATABASE_URL,
    COOKIE_NAME: process.env.SESSION_COOKIE_NAME ?? "sid",
  });
});

// Mount API with session middleware (this is key)
app.use("/api", ensureSession, api);

// Simple health check
app.get("/api/health", (_req, res) => {
  res.json({ ok: true, ts: new Date().toISOString() });
});

// Frontend HTML
app.get("/", (_req, res) => {
  const indexPath = path.join(process.cwd(), "frontend", "index.html");
  res.setHeader("Cache-Control", "no-store");
  res.sendFile(indexPath);
});

// 404 fallback
app.use((_req, res) => res.status(404).send("Not found"));

const PORT = Number(process.env.PORT || 3000);
app.listen(PORT, () => {
  console.log(`Server http://0.0.0.0:${PORT}`);
  console.log(`Try: curl -i "http://127.0.0.1:${PORT}/api/health"`);
});