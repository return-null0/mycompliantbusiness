-- CreateEnum
CREATE TYPE "common"."Scope" AS ENUM ('FEDERAL', 'STATE', 'CITY');

-- CreateEnum
CREATE TYPE "common"."QuestionKind" AS ENUM ('BOOL', 'NUMBER', 'TEXT', 'SELECT', 'MULTI');

-- CreateEnum
CREATE TYPE "common"."Category" AS ENUM ('EMPLOYMENT', 'SAFETY', 'TAX', 'LICENSING', 'ACCESSIBILITY', 'ENVIRONMENT', 'PRIVACY', 'OTHER');

-- CreateEnum
CREATE TYPE "common"."Severity" AS ENUM ('REQUIRED', 'RECOMMENDED');

-- CreateEnum
CREATE TYPE "common"."RuleStatus" AS ENUM ('DRAFT', 'ACTIVE', 'DEPRECATED');

-- CreateTable
CREATE TABLE "common"."Topic" (
    "id" SERIAL NOT NULL,
    "scope" "common"."Scope" NOT NULL,
    "number" INTEGER NOT NULL,
    "title" TEXT,
    "stateCode" TEXT,
    "cityName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Topic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "common"."Question" (
    "id" SERIAL NOT NULL,
    "topicId" INTEGER NOT NULL,
    "scope" "common"."Scope" NOT NULL,
    "kind" "common"."QuestionKind" NOT NULL,
    "code" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "help" TEXT,
    "options" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "weight" INTEGER NOT NULL DEFAULT 0,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "common"."Obligation" (
    "id" SERIAL NOT NULL,
    "topicId" INTEGER NOT NULL,
    "scope" "common"."Scope" NOT NULL,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "category" "common"."Category" NOT NULL,
    "severity" "common"."Severity" NOT NULL DEFAULT 'REQUIRED',
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "stateCode" TEXT,
    "cityName" TEXT,
    "citation" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Obligation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "common"."Rule" (
    "id" SERIAL NOT NULL,
    "topicId" INTEGER NOT NULL,
    "scope" "common"."Scope" NOT NULL,
    "obligationId" INTEGER NOT NULL,
    "status" "common"."RuleStatus" NOT NULL DEFAULT 'ACTIVE',
    "effectiveFrom" TIMESTAMP(3) NOT NULL,
    "effectiveTo" TIMESTAMP(3),
    "predicate" JSONB NOT NULL,
    "output" JSONB,
    "triggers" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "priority" INTEGER NOT NULL DEFAULT 100,
    "notes" TEXT,
    "stateCode" TEXT,
    "cityName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Rule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "common"."AnswerAudit" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "scope" "common"."Scope" NOT NULL,
    "topicNumber" INTEGER NOT NULL,
    "questionCode" TEXT NOT NULL,
    "valueJson" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AnswerAudit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Topic_scope_stateCode_cityName_idx" ON "common"."Topic"("scope", "stateCode", "cityName");

-- CreateIndex
CREATE UNIQUE INDEX "Topic_scope_number_stateCode_cityName_key" ON "common"."Topic"("scope", "number", "stateCode", "cityName");

-- CreateIndex
CREATE INDEX "Question_topicId_idx" ON "common"."Question"("topicId");

-- CreateIndex
CREATE UNIQUE INDEX "Question_scope_code_key" ON "common"."Question"("scope", "code");

-- CreateIndex
CREATE INDEX "Obligation_topicId_idx" ON "common"."Obligation"("topicId");

-- CreateIndex
CREATE UNIQUE INDEX "Obligation_scope_code_stateCode_cityName_key" ON "common"."Obligation"("scope", "code", "stateCode", "cityName");

-- CreateIndex
CREATE INDEX "Rule_topicId_idx" ON "common"."Rule"("topicId");

-- CreateIndex
CREATE INDEX "Rule_scope_status_effectiveFrom_idx" ON "common"."Rule"("scope", "status", "effectiveFrom");

-- CreateIndex
CREATE INDEX "AnswerAudit_sessionId_scope_topicNumber_idx" ON "common"."AnswerAudit"("sessionId", "scope", "topicNumber");

-- AddForeignKey
ALTER TABLE "common"."Question" ADD CONSTRAINT "Question_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "common"."Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "common"."Obligation" ADD CONSTRAINT "Obligation_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "common"."Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "common"."Rule" ADD CONSTRAINT "Rule_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "common"."Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "common"."Rule" ADD CONSTRAINT "Rule_obligationId_fkey" FOREIGN KEY ("obligationId") REFERENCES "common"."Obligation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
