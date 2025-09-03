/*
  Warnings:

  - You are about to drop the `SessionAnswer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SessionAnswerObligation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "sessions"."SessionAnswer" DROP CONSTRAINT "SessionAnswer_sessionId_fkey";

-- DropForeignKey
ALTER TABLE "sessions"."SessionAnswerObligation" DROP CONSTRAINT "SessionAnswerObligation_answerId_fkey";

-- DropForeignKey
ALTER TABLE "sessions"."SessionAnswerObligation" DROP CONSTRAINT "SessionAnswerObligation_sessionId_fkey";

-- DropTable
DROP TABLE "sessions"."SessionAnswer";

-- DropTable
DROP TABLE "sessions"."SessionAnswerObligation";

-- CreateTable
CREATE TABLE "sessions"."Answer" (
    "id" SERIAL NOT NULL,
    "sessionId" TEXT NOT NULL,
    "scope" "sessions"."Scope" NOT NULL,
    "questionId" INTEGER NOT NULL,
    "questionCode" TEXT NOT NULL,
    "topicId" INTEGER,
    "value" JSONB NOT NULL,
    "valueNumber" DOUBLE PRECISION,
    "valueBool" BOOLEAN,
    "valueText" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Answer_sessionId_idx" ON "sessions"."Answer"("sessionId");

-- CreateIndex
CREATE INDEX "Answer_scope_questionId_idx" ON "sessions"."Answer"("scope", "questionId");

-- CreateIndex
CREATE INDEX "Answer_valueNumber_idx" ON "sessions"."Answer"("valueNumber");

-- CreateIndex
CREATE INDEX "Answer_valueBool_idx" ON "sessions"."Answer"("valueBool");

-- CreateIndex
CREATE INDEX "Answer_valueText_idx" ON "sessions"."Answer"("valueText");

-- CreateIndex
CREATE UNIQUE INDEX "Answer_sessionId_questionCode_key" ON "sessions"."Answer"("sessionId", "questionCode");

-- AddForeignKey
ALTER TABLE "sessions"."Answer" ADD CONSTRAINT "Answer_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "sessions"."Session"("id") ON DELETE CASCADE ON UPDATE CASCADE;
