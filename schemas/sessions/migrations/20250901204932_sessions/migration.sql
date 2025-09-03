-- CreateEnum
CREATE TYPE "sessions"."Scope" AS ENUM ('FEDERAL', 'STATE', 'CITY');

-- CreateTable
CREATE TABLE "sessions"."Session" (
    "id" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions"."SessionAnswer" (
    "id" SERIAL NOT NULL,
    "sessionId" TEXT NOT NULL,
    "scope" "sessions"."Scope" NOT NULL,
    "questionId" INTEGER NOT NULL,
    "questionCode" TEXT NOT NULL,
    "topicNumber" INTEGER NOT NULL,
    "value" JSONB NOT NULL,
    "valueNumber" DOUBLE PRECISION,
    "valueBool" BOOLEAN,
    "valueText" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SessionAnswer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions"."SessionAnswerObligation" (
    "id" SERIAL NOT NULL,
    "sessionId" TEXT NOT NULL,
    "answerId" INTEGER NOT NULL,
    "scope" "sessions"."Scope" NOT NULL,
    "obligationId" INTEGER NOT NULL,
    "obligationCode" TEXT NOT NULL,
    "ruleId" INTEGER,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "firstAppliedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastEvaluatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SessionAnswerObligation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Session_expiresAt_idx" ON "sessions"."Session"("expiresAt");

-- CreateIndex
CREATE INDEX "SessionAnswer_sessionId_idx" ON "sessions"."SessionAnswer"("sessionId");

-- CreateIndex
CREATE INDEX "SessionAnswer_sessionId_questionId_idx" ON "sessions"."SessionAnswer"("sessionId", "questionId");

-- CreateIndex
CREATE UNIQUE INDEX "SessionAnswer_sessionId_questionCode_key" ON "sessions"."SessionAnswer"("sessionId", "questionCode");

-- CreateIndex
CREATE UNIQUE INDEX "SessionAnswer_sessionId_questionId_key" ON "sessions"."SessionAnswer"("sessionId", "questionId");

-- CreateIndex
CREATE INDEX "SessionAnswerObligation_sessionId_active_lastEvaluatedAt_idx" ON "sessions"."SessionAnswerObligation"("sessionId", "active", "lastEvaluatedAt");

-- CreateIndex
CREATE INDEX "SessionAnswerObligation_sessionId_obligationCode_idx" ON "sessions"."SessionAnswerObligation"("sessionId", "obligationCode");

-- CreateIndex
CREATE INDEX "SessionAnswerObligation_answerId_idx" ON "sessions"."SessionAnswerObligation"("answerId");

-- AddForeignKey
ALTER TABLE "sessions"."SessionAnswer" ADD CONSTRAINT "SessionAnswer_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "sessions"."Session"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessions"."SessionAnswerObligation" ADD CONSTRAINT "SessionAnswerObligation_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "sessions"."Session"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessions"."SessionAnswerObligation" ADD CONSTRAINT "SessionAnswerObligation_answerId_fkey" FOREIGN KEY ("answerId") REFERENCES "sessions"."SessionAnswer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
