// routes/api.ts
import { Router } from "express";
import {sessionPrisma} from "../schemas/sessions/sessionPrisma";

export const api = Router();

api.get("/items", async (req, res, next) => {
  try {
    const sessionId = req.sessionId!;
    const items = await sessionPrisma.item.findMany({
      where: { sessionId },
      orderBy: { createdAt: "desc" },
    });
    res.json(items);
  } catch (e) { next(e); }
});

api.post("/items", async (req, res, next) => {
  try {
    const sessionId = req.sessionId!;
    const { title, data } = req.body ?? {};
    const created = await sessionPrisma.item.create({
      data: { sessionId, title: String(title ?? "Untitled"), data: data ?? {} },
    });
    res.json(created);
  } catch (e) { next(e); }
});

api.post("/reset", async (req, res, next) => {
  try {
    const sessionId = req.sessionId!;
    await sessionPrisma.$transaction([
      sessionPrisma.item.deleteMany({ where: { sessionId } }),
    ]);
    res.json({ ok: true });
  } catch (e) { next(e); }
});

api.get("/session", (req, res) => {
  res.json({ sessionId: req.sessionId });
});