import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import api from "./routes/api.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

// Mount API
app.use("/api", api);

// Serve static frontend assets
const frontendDir = path.join(process.cwd(), "frontend");
app.use("/static", express.static(path.join(frontendDir, "dist"), { 
  setHeaders: (res, filePath) => {
    if (filePath.endsWith(".js")) res.setHeader("Content-Type", "application/javascript");
  }
}));

// Fallback: index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendDir, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});