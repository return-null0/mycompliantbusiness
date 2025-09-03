/*
  Warnings:

  - You are about to drop the column `questionId` on the `SessionAnswer` table. All the data in the column will be lost.
  - You are about to drop the column `topicNumber` on the `SessionAnswer` table. All the data in the column will be lost.
  - You are about to drop the column `obligationId` on the `SessionAnswerObligation` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "sessions"."SessionAnswer_sessionId_questionId_idx";

-- DropIndex
DROP INDEX "sessions"."SessionAnswer_sessionId_questionId_key";

-- AlterTable
ALTER TABLE "sessions"."SessionAnswer" DROP COLUMN "questionId",
DROP COLUMN "topicNumber";

-- AlterTable
ALTER TABLE "sessions"."SessionAnswerObligation" DROP COLUMN "obligationId";
