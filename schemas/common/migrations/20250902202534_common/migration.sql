/*
  Warnings:

  - A unique constraint covering the columns `[scope,location,code]` on the table `Obligation` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[scope,location,code]` on the table `Question` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "common"."Obligation_scope_code_key";

-- DropIndex
DROP INDEX "common"."Question_scope_code_key";

-- DropIndex
DROP INDEX "common"."Rule_scope_status_effectiveFrom_idx";

-- AlterTable
ALTER TABLE "common"."Obligation" ADD COLUMN     "location" TEXT;

-- AlterTable
ALTER TABLE "common"."Question" ADD COLUMN     "location" TEXT;

-- AlterTable
ALTER TABLE "common"."Rule" ADD COLUMN     "location" TEXT;

-- CreateIndex
CREATE INDEX "Obligation_scope_location_idx" ON "common"."Obligation"("scope", "location");

-- CreateIndex
CREATE UNIQUE INDEX "Obligation_scope_location_code_key" ON "common"."Obligation"("scope", "location", "code");

-- CreateIndex
CREATE INDEX "Question_scope_location_idx" ON "common"."Question"("scope", "location");

-- CreateIndex
CREATE UNIQUE INDEX "Question_scope_location_code_key" ON "common"."Question"("scope", "location", "code");

-- CreateIndex
CREATE INDEX "Rule_scope_location_status_effectiveFrom_idx" ON "common"."Rule"("scope", "location", "status", "effectiveFrom");
