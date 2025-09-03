-- ==========================================================
-- SESSIONS SCHEMA: Tiny test seed (one session, a few answers + links)
-- Matches schemas/sessions/schema.prisma (answerId REQUIRED on link)
-- ==========================================================

BEGIN;

-- Clean (dev only)
TRUNCATE TABLE sessions."SessionAnswerObligation", sessions."SessionAnswer", sessions."Session"
RESTART IDENTITY CASCADE;

-- 1) Create a session (expires in 180 days)
INSERT INTO sessions."Session" ("id","expiresAt","createdAt","updatedAt")
VALUES ('devsession_1', NOW() + INTERVAL '180 days', NOW(), NOW());

-- 2) Insert some answers for that session
-- FED_EMP_COUNT = 12
INSERT INTO sessions."SessionAnswer" (
  "sessionId","scope","questionId","questionCode","topicNumber",
  "value","valueNumber","valueBool","valueText","createdAt","updatedAt"
)
VALUES (
  'devsession_1','FEDERAL'::sessions."Scope",
  (SELECT q.id FROM common."Question" q WHERE q.code='FED_EMP_COUNT' AND q.scope='FEDERAL'),
  'FED_EMP_COUNT',1,
  '12',12.0,NULL,NULL,NOW(),NOW()
)
RETURNING id INTO TEMP TABLE _a1;

-- FED_HAS_GROUP_HEALTH = true
INSERT INTO sessions."SessionAnswer" (
  "sessionId","scope","questionId","questionCode","topicNumber",
  "value","valueNumber","valueBool","valueText","createdAt","updatedAt"
)
VALUES (
  'devsession_1','FEDERAL'::sessions."Scope",
  (SELECT q.id FROM common."Question" q WHERE q.code='FED_HAS_GROUP_HEALTH' AND q.scope='FEDERAL'),
  'FED_HAS_GROUP_HEALTH',3,
  'true',NULL,true,NULL,NOW(),NOW()
)
RETURNING id INTO TEMP TABLE _a2;

-- 3) Link obligations that should be active given those answers (manual for seed)
-- I-9 (any employees >= 1) -> link to first answer
INSERT INTO sessions."SessionAnswerObligation" (
  "sessionId","answerId","scope","obligationId","obligationCode",
  "ruleId","active","firstAppliedAt","lastEvaluatedAt","createdAt","updatedAt"
)
SELECT
  'devsession_1',
  (SELECT id FROM _a1),
  'FEDERAL'::sessions."Scope",
  o.id, o.code,
  r.id, TRUE, NOW(), NOW(), NOW(), NOW()
FROM common."Obligation" o
JOIN common."Rule" r ON r.obligationId = o.id
WHERE o.code='FED_I9' AND o.scope='FEDERAL'
ORDER BY r.priority ASC
LIMIT 1;

-- OSHA recordkeeping (employees >= 11) -> link to first answer
INSERT INTO sessions."SessionAnswerObligation" (
  "sessionId","answerId","scope","obligationId","obligationCode",
  "ruleId","active","firstAppliedAt","lastEvaluatedAt","createdAt","updatedAt"
)
SELECT
  'devsession_1',
  (SELECT id FROM _a1),
  'FEDERAL'::sessions."Scope",
  o.id, o.code,
  r.id, TRUE, NOW(), NOW(), NOW(), NOW()
FROM common."Obligation" o
JOIN common."Rule" r ON r.obligationId = o.id
WHERE o.code='FED_OSHA_RECORDKEEPING' AND o.scope='FEDERAL'
ORDER BY r.priority ASC
LIMIT 1;

-- COBRA (group health true & employees >= 20) -> our headcount is 12, so SKIP COBRA for this sample
-- Add other links similarly as needed…

-- Cleanup temp tables
DROP TABLE IF EXISTS _a1;
DROP TABLE IF EXISTS _a2;

COMMIT;