import path from "node:path";
import express from "express";
import cookieParser from "cookie-parser";

// If you already have API routes, import and mount them here:
// import { api } from "./routes/api.js";

const app = express();

// Make sure Express trusts proxy (Railway/NGINX/etc.)
app.set("trust proxy", true);

// Basic middleware
app.use(cookieParser());
app.use(express.json());

// Serve the bundled frontend at /static
// Maps: /static/app.js  -> project/frontend/dist/app.js
const staticDir = path.join(process.cwd(), "frontend", "dist");
app.use(
  "/static",
  express.static(staticDir, {
    // Let the .js be served as JS (Express does this by extension, but we’re explicit)
    setHeaders(res, filePath) {
      if (filePath.endsWith(".js")) {
        res.type("application/javascript; charset=utf-8");
      }
    },
    // Feel free to tweak caching. Index will be no-cache, but static JS can be long-lived.
    maxAge: "1y",
    etag: false
  })
);

// If you have API routes, mount them before the HTML:
// app.use("/api", api);

// Serve index.html for the app shell
app.get("/", (_req, res) => {
  const indexPath = path.join(process.cwd(), "frontend", "index.html");
  res.setHeader("Cache-Control", "no-store"); // avoid stale HTML
  res.sendFile(indexPath);
});

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ ok: true, ts: new Date().toISOString() });
});

// 404 fallback (optional)
app.use((_req, res) => {
  res.status(404).send("Not found");
});

const PORT = Number(process.env.PORT || 3000);
app.listen(PORT, () => {
  console.log(`Server http://0.0.0.0:${PORT}`);
  console.log(`Try: curl "http://127.0.0.1:${PORT}/api/health"`);
});