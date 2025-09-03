/*
  Warnings:

  - You are about to drop the column `topicId` on the `Obligation` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "common"."Obligation_topicId_idx";

-- AlterTable
ALTER TABLE "common"."Obligation" DROP COLUMN "topicId";
