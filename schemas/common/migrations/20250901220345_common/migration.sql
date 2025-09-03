/*
  Warnings:

  - You are about to drop the column `cityName` on the `Obligation` table. All the data in the column will be lost.
  - You are about to drop the column `stateCode` on the `Obligation` table. All the data in the column will be lost.
  - You are about to drop the column `tags` on the `Obligation` table. All the data in the column will be lost.
  - You are about to drop the column `active` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `help` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `tags` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `weight` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `notes` on the `Rule` table. All the data in the column will be lost.
  - You are about to drop the column `output` on the `Rule` table. All the data in the column will be lost.
  - You are about to drop the column `priority` on the `Rule` table. All the data in the column will be lost.
  - You are about to drop the column `topicId` on the `Rule` table. All the data in the column will be lost.
  - You are about to drop the column `triggers` on the `Rule` table. All the data in the column will be lost.
  - You are about to drop the column `cityName` on the `Topic` table. All the data in the column will be lost.
  - You are about to drop the column `stateCode` on the `Topic` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[scope,code]` on the table `Obligation` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[scope,number]` on the table `Topic` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "common"."Obligation" DROP CONSTRAINT "Obligation_topicId_fkey";

-- DropForeignKey
ALTER TABLE "common"."Question" DROP CONSTRAINT "Question_topicId_fkey";

-- DropForeignKey
ALTER TABLE "common"."Rule" DROP CONSTRAINT "Rule_topicId_fkey";

-- DropIndex
DROP INDEX "common"."Obligation_scope_code_stateCode_cityName_key";

-- DropIndex
DROP INDEX "common"."Rule_topicId_idx";

-- DropIndex
DROP INDEX "common"."Topic_scope_number_stateCode_cityName_key";

-- DropIndex
DROP INDEX "common"."Topic_scope_stateCode_cityName_idx";

-- AlterTable
ALTER TABLE "common"."Obligation" DROP COLUMN "cityName",
DROP COLUMN "stateCode",
DROP COLUMN "tags",
ALTER COLUMN "topicId" DROP NOT NULL,
ALTER COLUMN "citation" DROP NOT NULL;

-- AlterTable
ALTER TABLE "common"."Question" DROP COLUMN "active",
DROP COLUMN "help",
DROP COLUMN "tags",
DROP COLUMN "weight",
ALTER COLUMN "topicId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "common"."Rule" DROP COLUMN "notes",
DROP COLUMN "output",
DROP COLUMN "priority",
DROP COLUMN "topicId",
DROP COLUMN "triggers";

-- AlterTable
ALTER TABLE "common"."Topic" DROP COLUMN "cityName",
DROP COLUMN "stateCode";

-- CreateIndex
CREATE UNIQUE INDEX "Obligation_scope_code_key" ON "common"."Obligation"("scope", "code");

-- CreateIndex
CREATE INDEX "Rule_obligationId_idx" ON "common"."Rule"("obligationId");

-- CreateIndex
CREATE UNIQUE INDEX "Topic_scope_number_key" ON "common"."Topic"("scope", "number");

-- AddForeignKey
ALTER TABLE "common"."Question" ADD CONSTRAINT "Question_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "common"."Topic"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "common"."Obligation" ADD CONSTRAINT "Obligation_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "common"."Topic"("id") ON DELETE SET NULL ON UPDATE CASCADE;
