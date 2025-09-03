// src/routes/obligationMeta.ts
import { Router } from "express";
import { commonPrisma } from "../commonPrismaClient.js";
import { asScope } from "../types/api.js";

export const obligationMeta = Router();

/**
 * GET /api/obligation-meta?scope=FEDERAL|STATE|CITY
 * Returns obligation metadata (title, description, citation) for the given scope.
 */
obligationMeta.get("/", async (req, res, next) => {
  try {
    const scope = asScope(req.query.scope ?? "FEDERAL");

    const rows = await commonPrisma.obligation.findMany({
      where: { scope },
      select: {
        code: true,
        title: true,
        description: true,
        citation: true,
      },
      orderBy: { id: "asc" },
    });

    res.json(rows);
  } catch (err) {
    next(err);
  }
});