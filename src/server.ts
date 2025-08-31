// server.ts
import express from "express";
import path from "node:path";
import cookieParser from "cookie-parser";
import { ensureSession } from "./middleware/ensureSession.js";
import { api } from "./routes/api.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(ensureSession);

app.use(express.static(path.join(process.cwd(), "frontend")));

app.use("/api", api);

app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(3000, () => console.log("API on http://localhost:3000"));