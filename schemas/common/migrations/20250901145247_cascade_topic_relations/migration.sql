/*
  Warnings:

  - The values [SELECT,MULTI] on the enum `QuestionKind` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `options` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `cityName` on the `Rule` table. All the data in the column will be lost.
  - You are about to drop the column `stateCode` on the `Rule` table. All the data in the column will be lost.
  - You are about to drop the `AnswerAudit` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `updatedAt` on table `Obligation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Question` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title` on table `Topic` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "common"."QuestionKind_new" AS ENUM ('NUMBER', 'BOOL', 'TEXT');
ALTER TABLE "common"."Question" ALTER COLUMN "kind" TYPE "common"."QuestionKind_new" USING ("kind"::text::"common"."QuestionKind_new");
ALTER TYPE "common"."QuestionKind" RENAME TO "QuestionKind_old";
ALTER TYPE "common"."QuestionKind_new" RENAME TO "QuestionKind";
DROP TYPE "common"."QuestionKind_old";
COMMIT;

-- AlterTable
ALTER TABLE "common"."Obligation" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "common"."Question" DROP COLUMN "options",
ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "common"."Rule" DROP COLUMN "cityName",
DROP COLUMN "stateCode";

-- AlterTable
ALTER TABLE "common"."Topic" ALTER COLUMN "title" SET NOT NULL;

-- DropTable
DROP TABLE "common"."AnswerAudit";
