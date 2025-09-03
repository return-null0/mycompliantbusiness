BEGIN;

-- Clean slate (order matters: Rule depends on Obligation)
TRUNCATE TABLE "Rule" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "Obligation" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "Question" RESTART IDENTITY CASCADE;

-- ============================
-- QUESTIONS
-- ============================
INSERT INTO "Question" ("scope","code","kind","prompt","createdAt","updatedAt") VALUES
  ('FEDERAL','FED_EMP_COUNT','NUMBER','How many W-2 employees do you have?',NOW(),NOW()),
  ('FEDERAL','FED_FTE_COUNT','NUMBER','Roughly how many full-time equivalents (FTEs) did you average last year?',NOW(),NOW()),
  ('FEDERAL','FED_HAS_GROUP_HEALTH','BOOL','Do you sponsor a group health plan for employees?',NOW(),NOW()),
  ('FEDERAL','FED_IS_FEDERAL_CONTRACTOR','BOOL','Are you a covered federal contractor/sub-contractor?',NOW(),NOW()),
  ('FEDERAL','FED_HAS_NONEXEMPT','BOOL','Do you have any non-exempt (hourly) employees?',NOW(),NOW()),
  ('FEDERAL','FED_PAID_1500_WAGES_QTR','BOOL','Did you pay $1,500 or more in wages in any calendar quarter this year or last year?',NOW(),NOW()),
  ('FEDERAL','FED_EVERIFY_ENROLLED','BOOL','Are you currently enrolled in E-Verify?',NOW(),NOW()),
  ('FEDERAL','FED_POST_EPPA','BOOL','Do you post the EPPA notice?',NOW(),NOW()),
  ('FEDERAL','FED_POST_USERRA','BOOL','Do you provide the USERRA “Your Rights Under USERRA” notice?',NOW(),NOW());

-- ============================
-- OBLIGATIONS  (note: no topicId column)
-- ============================
INSERT INTO "Obligation"
  ("scope","code","title","category","severity","citation","description","createdAt","updatedAt")
VALUES
  ('FEDERAL','FED_I9','Form I-9 Employment Eligibility Verification','EMPLOYMENT','REQUIRED',
   'https://www.uscis.gov/i-9','Verify identity & work authorization for every employee.',NOW(),NOW()),
  ('FEDERAL','FED_FORM_941','Form 941 – Employer’s Quarterly Federal Tax Return','TAX','REQUIRED',
   'https://www.irs.gov/forms-pubs/about-form-941','Report and remit federal payroll taxes.',NOW(),NOW()),
  ('FEDERAL','FED_TITLE_VII','Title VII anti-discrimination coverage','EMPLOYMENT','REQUIRED',
   'https://www.eeoc.gov/statutes/title-vii-civil-rights-act-1964','Prohibits discrimination based on protected classes.',NOW(),NOW()),
  ('FEDERAL','FED_ADA','ADA reasonable accommodation duties','EMPLOYMENT','REQUIRED',
   'https://www.eeoc.gov/statutes/americans-disabilities-act-1990','Provide reasonable accommodations unless undue hardship.',NOW(),NOW()),
  ('FEDERAL','FED_COBRA','COBRA continuation coverage','EMPLOYMENT','REQUIRED',
   'https://www.dol.gov/general/topic/health-plans/cobra','Offer continuation of group health coverage after qualifying events.',NOW(),NOW()),
  ('FEDERAL','FED_FMLA','FMLA employer coverage (50+)','EMPLOYMENT','REQUIRED',
   'https://www.dol.gov/agencies/whd/fmla','Up to 12 weeks unpaid, job-protected leave for eligible employees.',NOW(),NOW()),
  ('FEDERAL','FED_ACA_ALE','ACA Applicable Large Employer (50+ FTE)','EMPLOYMENT','REQUIRED',
   'https://www.irs.gov/affordable-care-act/employers/aca-information-for-applicable-large-employers-ales','Offer affordable coverage / report annually.',NOW(),NOW()),
  ('FEDERAL','FED_EEO1','EEO-1 Component 1 workforce reporting','EMPLOYMENT','REQUIRED',
   'https://www.eeoc.gov/employers/eeo-1-data-collection','Annual demographic workforce report.',NOW(),NOW()),
  ('FEDERAL','FED_FLSA_MIN_OT','FLSA minimum wage and overtime compliance','EMPLOYMENT','REQUIRED',
   'https://www.dol.gov/agencies/whd/flsa','Pay minimum wage and OT 1.5× > 40 hrs for non-exempt.',NOW(),NOW()),
  ('FEDERAL','FED_FLSA_POSTER','FLSA “Employee Rights” poster','EMPLOYMENT','REQUIRED',
   'https://www.dol.gov/agencies/whd/posters/flsa','Display required FLSA poster.',NOW(),NOW()),
  ('FEDERAL','FED_OSHA_RECORDKEEPING','OSHA injury/illness recordkeeping','SAFETY','REQUIRED',
   'https://www.osha.gov/recordkeeping','Maintain OSHA logs if generally >10 employees (industry exceptions).',NOW(),NOW()),
  ('FEDERAL','FED_OSHA_300A_POST','OSHA 300A annual summary posting','SAFETY','REQUIRED',
   'https://www.osha.gov/recordkeeping','Post OSHA 300A Summary Feb 1–Apr 30.',NOW(),NOW()),
  ('FEDERAL','FED_FUTA_940','Form 940 — Federal Unemployment (FUTA) Tax','TAX','REQUIRED',
   'https://www.irs.gov/forms-pubs/about-form-940','File Form 940 annually if FUTA thresholds met.',NOW(),NOW()),
  ('FEDERAL','FED_EVERIFY_USE','E-Verify participation requirements','EMPLOYMENT','REQUIRED',
   'https://www.e-verify.gov/employers','Follow E-Verify rules / display required notices if enrolled or required.',NOW(),NOW()),
  ('FEDERAL','FED_EPPA_POSTER','EPPA (Polygraph Protection) poster','EMPLOYMENT','REQUIRED',
   'https://www.dol.gov/agencies/whd/posters/eppa','Most private employers must post the EPPA notice.',NOW(),NOW()),
  ('FEDERAL','FED_USERRA_NOTICE','USERRA employee rights notice','EMPLOYMENT','REQUIRED',
   'https://www.dol.gov/agencies/vets/programs/userra/USERRA-Your-Rights','Provide the “Your Rights Under USERRA” notice.',NOW(),NOW());

-- ============================
-- RULES (predicates use Question.code facts)
-- ============================

-- I-9 (>= 1 employee)
INSERT INTO "Rule" ("scope","obligationId","status","effectiveFrom","predicate","createdAt","updatedAt")
SELECT 'FEDERAL', o.id, 'ACTIVE', NOW(),
       '{"all":[{"fact":"FED_EMP_COUNT","op":">=","value":1}]}'::jsonb, NOW(), NOW()
FROM "Obligation" o WHERE o.code='FED_I9' AND o.scope='FEDERAL';

-- 941 (>= 1 employee)
INSERT INTO "Rule" ("scope","obligationId","status","effectiveFrom","predicate","createdAt","updatedAt")
SELECT 'FEDERAL', o.id, 'ACTIVE', NOW(),
       '{"all":[{"fact":"FED_EMP_COUNT","op":">=","value":1}]}'::jsonb, NOW(), NOW()
FROM "Obligation" o WHERE o.code='FED_FORM_941' AND o.scope='FEDERAL';

-- Title VII (>= 15 employees)
INSERT INTO "Rule" ("scope","obligationId","status","effectiveFrom","predicate","createdAt","updatedAt")
SELECT 'FEDERAL', o.id, 'ACTIVE', NOW(),
       '{"all":[{"fact":"FED_EMP_COUNT","op":">=","value":15}]}'::jsonb, NOW(), NOW()
FROM "Obligation" o WHERE o.code='FED_TITLE_VII' AND o.scope='FEDERAL';

-- ADA (>= 15 employees)
INSERT INTO "Rule" ("scope","obligationId","status","effectiveFrom","predicate","createdAt","updatedAt")
SELECT 'FEDERAL', o.id, 'ACTIVE', NOW(),
       '{"all":[{"fact":"FED_EMP_COUNT","op":">=","value":15}]}'::jsonb, NOW(), NOW()
FROM "Obligation" o WHERE o.code='FED_ADA' AND o.scope='FEDERAL';

-- COBRA (group health AND >= 20 employees)
INSERT INTO "Rule" ("scope","obligationId","status","effectiveFrom","predicate","createdAt","updatedAt")
SELECT 'FEDERAL', o.id, 'ACTIVE', NOW(),
       '{
          "all":[
            {"fact":"FED_HAS_GROUP_HEALTH","op":"==","value":true},
            {"fact":"FED_EMP_COUNT","op":">=","value":20}
          ]
        }'::jsonb, NOW(), NOW()
FROM "Obligation" o WHERE o.code='FED_COBRA' AND o.scope='FEDERAL';

-- FMLA (>= 50 employees)
INSERT INTO "Rule" ("scope","obligationId","status","effectiveFrom","predicate","createdAt","updatedAt")
SELECT 'FEDERAL', o.id, 'ACTIVE', NOW(),
       '{"all":[{"fact":"FED_EMP_COUNT","op":">=","value":50}]}'::jsonb, NOW(), NOW()
FROM "Obligation" o WHERE o.code='FED_FMLA' AND o.scope='FEDERAL';

-- ACA ALE (FTE >= 50)
INSERT INTO "Rule" ("scope","obligationId","status","effectiveFrom","predicate","createdAt","updatedAt")
SELECT 'FEDERAL', o.id, 'ACTIVE', NOW(),
       '{"all":[{"fact":"FED_FTE_COUNT","op":">=","value":50}]}'::jsonb, NOW(), NOW()
FROM "Obligation" o WHERE o.code='FED_ACA_ALE' AND o.scope='FEDERAL';

-- EEO-1 (>= 100 employees)
INSERT INTO "Rule" ("scope","obligationId","status","effectiveFrom","predicate","createdAt","updatedAt")
SELECT 'FEDERAL', o.id, 'ACTIVE', NOW(),
       '{"all":[{"fact":"FED_EMP_COUNT","op":">=","value":100}]}'::jsonb, NOW(), NOW()
FROM "Obligation" o WHERE o.code='FED_EEO1' AND o.scope='FEDERAL';

-- EEO-1 (federal contractor AND >= 50 employees)
INSERT INTO "Rule" ("scope","obligationId","status","effectiveFrom","predicate","createdAt","updatedAt")
SELECT 'FEDERAL', o.id, 'ACTIVE', NOW(),
       '{
          "all":[
            {"fact":"FED_IS_FEDERAL_CONTRACTOR","op":"==","value":true},
            {"fact":"FED_EMP_COUNT","op":">=","value":50}
          ]
        }'::jsonb, NOW(), NOW()
FROM "Obligation" o WHERE o.code='FED_EEO1' AND o.scope='FEDERAL';

-- FLSA min wage/OT (>= 1 employee AND has non-exempt)
INSERT INTO "Rule" ("scope","obligationId","status","effectiveFrom","predicate","createdAt","updatedAt")
SELECT 'FEDERAL', o.id, 'ACTIVE', NOW(),
       '{
          "all":[
            {"fact":"FED_EMP_COUNT","op":">=","value":1},
            {"fact":"FED_HAS_NONEXEMPT","op":"==","value":true}
          ]
        }'::jsonb, NOW(), NOW()
FROM "Obligation" o WHERE o.code='FED_FLSA_MIN_OT' AND o.scope='FEDERAL';

-- FLSA poster (>= 1 employee)
INSERT INTO "Rule" ("scope","obligationId","status","effectiveFrom","predicate","createdAt","updatedAt")
SELECT 'FEDERAL', o.id, 'ACTIVE', NOW(),
       '{"all":[{"fact":"FED_EMP_COUNT","op":">=","value":1}]}'::jsonb, NOW(), NOW()
FROM "Obligation" o WHERE o.code='FED_FLSA_POSTER' AND o.scope='FEDERAL';

-- OSHA recordkeeping (>= 11 employees)
INSERT INTO "Rule" ("scope","obligationId","status","effectiveFrom","predicate","createdAt","updatedAt")
SELECT 'FEDERAL', o.id, 'ACTIVE', NOW(),
       '{"all":[{"fact":"FED_EMP_COUNT","op":">=","value":11}]}'::jsonb, NOW(), NOW()
FROM "Obligation" o WHERE o.code='FED_OSHA_RECORDKEEPING' AND o.scope='FEDERAL';

-- OSHA 300A posting (>= 11 employees)
INSERT INTO "Rule" ("scope","obligationId","status","effectiveFrom","predicate","createdAt","updatedAt")
SELECT 'FEDERAL', o.id, 'ACTIVE', NOW(),
       '{"all":[{"fact":"FED_EMP_COUNT","op":">=","value":11}]}'::jsonb, NOW(), NOW()
FROM "Obligation" o WHERE o.code='FED_OSHA_300A_POST' AND o.scope='FEDERAL';

-- FUTA 940 (paid >= $1,500 wages in a quarter)
INSERT INTO "Rule" ("scope","obligationId","status","effectiveFrom","predicate","createdAt","updatedAt")
SELECT 'FEDERAL', o.id, 'ACTIVE', NOW(),
       '{"all":[{"fact":"FED_PAID_1500_WAGES_QTR","op":"==","value":true}]}'::jsonb, NOW(), NOW()
FROM "Obligation" o WHERE o.code='FED_FUTA_940' AND o.scope='FEDERAL';

-- E-Verify (enrolled OR is federal contractor)
INSERT INTO "Rule" ("scope","obligationId","status","effectiveFrom","predicate","createdAt","updatedAt")
SELECT 'FEDERAL', o.id, 'ACTIVE', NOW(),
       '{
          "any":[
            {"fact":"FED_EVERIFY_ENROLLED","op":"==","value":true},
            {"fact":"FED_IS_FEDERAL_CONTRACTOR","op":"==","value":true}
          ]
        }'::jsonb, NOW(), NOW()
FROM "Obligation" o WHERE o.code='FED_EVERIFY_USE' AND o.scope='FEDERAL';

-- EPPA poster (>= 1 employee)
INSERT INTO "Rule" ("scope","obligationId","status","effectiveFrom","predicate","createdAt","updatedAt")
SELECT 'FEDERAL', o.id, 'ACTIVE', NOW(),
       '{"all":[{"fact":"FED_EMP_COUNT","op":">=","value":1}]}'::jsonb, NOW(), NOW()
FROM "Obligation" o WHERE o.code='FED_EPPA_POSTER' AND o.scope='FEDERAL';

-- USERRA notice (>= 1 employee)
INSERT INTO "Rule" ("scope","obligationId","status","effectiveFrom","predicate","createdAt","updatedAt")
SELECT 'FEDERAL', o.id, 'ACTIVE', NOW(),
       '{"all":[{"fact":"FED_EMP_COUNT","op":">=","value":1}]}'::jsonb, NOW(), NOW()
FROM "Obligation" o WHERE o.code='FED_USERRA_NOTICE' AND o.scope='FEDERAL';

COMMIT;