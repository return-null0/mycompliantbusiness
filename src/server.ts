import path from "node:path";
import express from "express";
import cookieParser from "cookie-parser";

// session middleware + API router
import { ensureSession } from "./middleware/ensureSession.js";
import { api } from "./routes/api.js";

const app = express();
app.set("trust proxy", true);

// Core middleware
app.use(cookieParser());
app.use(express.json());

// Static frontend (/static/app.js served from frontend/dist)
const staticDir = path.join(process.cwd(), "frontend", "dist");
app.use(
  "/static",
  express.static(staticDir, {
    setHeaders(res, filePath) {
      if (filePath.endsWith(".js")) {
        res.type("application/javascript; charset=utf-8");
      }
    },
    maxAge: "1y",
    etag: false
  })
);

// API (session cookie required here)
app.use("/api", ensureSession, api);

// Root HTML (no-cache to avoid stale HTML)
app.get("/", (_req, res) => {
  const indexPath = path.join(process.cwd(), "frontend", "index.html");
  res.setHeader("Cache-Control", "no-store");
  res.sendFile(indexPath);
});

// Health
app.get("/api/health", (_req, res) => {
  res.json({ ok: true, ts: new Date().toISOString() });
});

// 404 fallback
app.use((_req, res) => {
  res.status(404).send("Not found");
});

const PORT = Number(process.env.PORT || 3000);
app.listen(PORT, () => {
  console.log(`Server http://0.0.0.0:${PORT}`);
  console.log(`Try: curl "http://127.0.0.1:${PORT}/api/health"`);
});