// src/server.ts
import "dotenv/config";
import express, { type Request, type Response, type NextFunction } from "express";
import path from "node:path";
import cookieParser from "cookie-parser";
import { ensureSession } from "./middleware/ensureSession.js";
import ReactNode from "react";
import { obligationMeta } from "./routes/obligationMeta.js";

// ✅ Your combined router that already has /questions, /answers, /obligations
import { api } from "./routes/api.js";

const app = express();

app.use("/static", express.static(path.join(process.cwd(), "frontend", "dist")));

app.get("/", (_req, res) => {
  res.sendFile(path.join(process.cwd(), "frontend", "index.html"));
});
app.set("trust proxy", 1); // trust first proxy (Railway, Vercel, etc)
app.use(express.json());
app.use(cookieParser());
app.use(ensureSession);

// Quick health & session checks
app.get("/api/health", (_req, res) => res.json({ ok: true }));
app.get("/api/session", (req, res) => res.json({ sessionId: req.sessionId ?? null }));

app.use("/api/obligation-meta", obligationMeta);
// ✅ Mount ALL API endpoints
app.use("/api", api);

// Serve frontend (index.html + any assets in /frontend)
const frontendPath = path.join(process.cwd(), "frontend");
app.use(express.static(frontendPath));
app.get("/", (_req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// Error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

const PORT = Number(process.env.PORT) || 8080;          // use Railway's PORT
const HOST = "0.0.0.0";                                  // bind to all interfaces

app.listen(PORT, HOST, () => {
  console.log(`Server http://${HOST}:${PORT}`);
  console.log(`Try: curl "http://127.0.0.1:${PORT}/api/health"`);
  console.log(`Try: curl "http://127.0.0.1:${PORT}/api/questions?scope=FEDERAL"`);
});

// (optional) graceful shutdown (helps Railway stop cleanly)
process.on("SIGTERM", () => {
  console.log("Received SIGTERM, shutting down…");
  process.exit(0);
});