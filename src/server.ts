// src/server.ts
import "dotenv/config";
import express, { type Request, type Response, type NextFunction } from "express";
import path from "node:path";
import cookieParser from "cookie-parser";
import { ensureSession } from "./middleware/ensureSession.js";

// ✅ Your combined router that already has /questions, /answers, /obligations
import { api } from "./routes/api.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(ensureSession);

// Quick health & session checks
app.get("/api/health", (_req, res) => res.json({ ok: true }));
app.get("/api/session", (req, res) => res.json({ sessionId: req.sessionId ?? null }));

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

const port = Number(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log(`Server http://localhost:${port}`);
  console.log(`Try: curl "http://localhost:${port}/api/health"`);
  console.log(`Try: curl "http://localhost:${port}/api/questions?scope=FEDERAL"`);
});