// src/server.ts
import path from "node:path";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { api } from "./routes/api.js";           // ensure you mount your API
import { ensureSession } from "./middleware/ensureSession.js";

const app = express();
app.set("trust proxy", true);

// CORS: allow your FE origin(s); comma-separate in env if multiple
const corsOrigins = (process.env.CORS_ORIGIN ?? "").split(",").map(s => s.trim()).filter(Boolean);
app.use(cors({
  origin: corsOrigins.length ? corsOrigins : true, // true = reflect request origin (dev convenience)
  credentials: true
}));

app.use(cookieParser());
app.use(express.json());

// static assets
const staticDir = path.join(process.cwd(), "frontend", "dist");
app.use("/static", express.static(staticDir, {
  setHeaders(res, filePath) {
    if (filePath.endsWith(".js")) res.type("application/javascript; charset=utf-8");
  },
  maxAge: "1y",
  etag: false
}));

// API (session middleware first)
app.use("/api", ensureSession, api);

// index.html
app.get("/", (_req, res) => {
  const indexPath = path.join(process.cwd(), "frontend", "index.html");
  res.setHeader("Cache-Control", "no-store");
  res.sendFile(indexPath);
});

app.get("/api/health", (_req, res) => res.json({ ok: true, ts: new Date().toISOString() }));

app.use((_req, res) => res.status(404).send("Not found"));

const PORT = Number(process.env.PORT || 3000);
app.listen(PORT, () => {
  console.log(`Server http://0.0.0.0:${PORT}`);
  console.log(`Try: curl "http://127.0.0.1:${PORT}/api/health"`);
});