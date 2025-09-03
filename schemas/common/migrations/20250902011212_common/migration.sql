/*
  Warnings:

  - You are about to drop the column `topicId` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the `Topic` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "common"."Obligation" DROP CONSTRAINT "Obligation_topicId_fkey";

-- DropForeignKey
ALTER TABLE "common"."Question" DROP CONSTRAINT "Question_topicId_fkey";

-- DropIndex
DROP INDEX "common"."Question_topicId_idx";

-- AlterTable
ALTER TABLE "common"."Question" DROP COLUMN "topicId";

-- DropTable
DROP TABLE "common"."Topic";
