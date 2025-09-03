-- ========== CALIFORNIA (CA) ==========
-- Obligations
INSERT INTO "Obligation"
  ("scope","location","code","title","category","severity","citation","description","createdAt","updatedAt")
VALUES
  ('STATE','CA','CA_NEW_HIRE_REPORT','California New Hire Reporting','EMPLOYMENT','REQUIRED',
   'https://edd.ca.gov/en/Payroll_Taxes/New_Hire_Reporting/',
   'Report newly hired and rehired employees to the California EDD within 20 days.',NOW(),NOW()),
  ('STATE','CA','CA_MIN_WAGE_POSTER','California Minimum Wage Poster','EMPLOYMENT','REQUIRED',
   'https://www.dir.ca.gov/IWC/MinimumWageOrder.pdf',
   'Post current California Minimum Wage notice conspicuously at the workplace.',NOW(),NOW()),
  ('STATE','CA','CA_PAID_SICK_LEAVE_NOTICE','California Paid Sick Leave Notice','EMPLOYMENT','REQUIRED',
   'https://www.dir.ca.gov/dlse/paid_sick_leave.htm',
   'Provide required paid sick leave notice and comply with accrual/use rules.',NOW(),NOW()),
  ('STATE','CA','CA_WC_POSTER','California Workers’ Compensation Notice','EMPLOYMENT','REQUIRED',
   'https://www.dir.ca.gov/dwc/Employer.htm',
   'Post the “Notice to Employees” about workers’ compensation benefits.',NOW(),NOW()),
  ('STATE','CA','CA_SH_TRAINING','CA Sexual Harassment Prevention Training (>=5 employees)','EMPLOYMENT','REQUIRED',
   'https://calcivilrights.ca.gov/shpt/',
   'Employers with 5+ employees must provide sexual harassment prevention training.',NOW(),NOW())
ON CONFLICT ("scope","code") DO NOTHING;

-- Rules (simple predicate: apply when state employee count >= 1, except where threshold specified)
-- CA_NEW_HIRE_REPORT
INSERT INTO "Rule"("scope","location","obligationId","status","effectiveFrom","predicate","createdAt","updatedAt")
SELECT 'STATE','CA', o.id, 'ACTIVE', NOW(),
       '{"all":[{"fact":"STATE_EMP_COUNT","op":">=","value":1}]}'::jsonb, NOW(), NOW()
FROM "Obligation" o WHERE o.scope='STATE' AND o.location='CA' AND o.code='CA_NEW_HIRE_REPORT';

-- CA_MIN_WAGE_POSTER
INSERT INTO "Rule"("scope","location","obligationId","status","effectiveFrom","predicate","createdAt","updatedAt")
SELECT 'STATE','CA', o.id, 'ACTIVE', NOW(),
       '{"all":[{"fact":"STATE_EMP_COUNT","op":">=","value":1}]}'::jsonb, NOW(), NOW()
FROM "Obligation" o WHERE o.scope='STATE' AND o.location='CA' AND o.code='CA_MIN_WAGE_POSTER';

-- CA_PAID_SICK_LEAVE_NOTICE
INSERT INTO "Rule"("scope","location","obligationId","status","effectiveFrom","predicate","createdAt","updatedAt")
SELECT 'STATE','CA', o.id, 'ACTIVE', NOW(),
       '{"all":[{"fact":"STATE_EMP_COUNT","op":">=","value":1}]}'::jsonb, NOW(), NOW()
FROM "Obligation" o WHERE o.scope='STATE' AND o.location='CA' AND o.code='CA_PAID_SICK_LEAVE_NOTICE';

-- CA_WC_POSTER
INSERT INTO "Rule"("scope","location","obligationId","status","effectiveFrom","predicate","createdAt","updatedAt")
SELECT 'STATE','CA', o.id, 'ACTIVE', NOW(),
       '{"all":[{"fact":"STATE_EMP_COUNT","op":">=","value":1}]}'::jsonb, NOW(), NOW()
FROM "Obligation" o WHERE o.scope='STATE' AND o.location='CA' AND o.code='CA_WC_POSTER';

-- CA_SH_TRAINING (threshold 5+)
INSERT INTO "Rule"("scope","location","obligationId","status","effectiveFrom","predicate","createdAt","updatedAt")
SELECT 'STATE','CA', o.id, 'ACTIVE', NOW(),
       '{"all":[{"fact":"STATE_EMP_COUNT","op":">=","value":5}]}'::jsonb, NOW(), NOW()
FROM "Obligation" o WHERE o.scope='STATE' AND o.location='CA' AND o.code='CA_SH_TRAINING';

-- ========== NEW YORK (NY) ==========
INSERT INTO "Obligation"
  ("scope","location","code","title","category","severity","citation","description","createdAt","updatedAt")
VALUES
  ('STATE','NY','NY_NEW_HIRE_REPORT','New York New Hire Reporting','EMPLOYMENT','REQUIRED',
   'https://www.tax.ny.gov/bus/wt/newhire.htm',
   'Report newly hired and rehired employees to New York within 20 days.',NOW(),NOW()),
  ('STATE','NY','NY_MIN_WAGE_POSTER','New York Minimum Wage / Labor Law Posters','EMPLOYMENT','REQUIRED',
   'https://dol.ny.gov/posters',
   'Post required New York labor law notices, including minimum wage posters.',NOW(),NOW()),
  ('STATE','NY','NY_PAID_SICK_LEAVE','New York Paid Sick Leave','EMPLOYMENT','REQUIRED',
   'https://www.ny.gov/programs/new-york-paid-sick-leave',
   'Provide paid sick leave consistent with NY law (amount varies by employer size).',NOW(),NOW()),
  ('STATE','NY','NY_SH_POLICY_TRAINING','NY Sexual Harassment Policy & Training','EMPLOYMENT','REQUIRED',
   'https://www.ny.gov/programs/combating-sexual-harassment-workplace',
   'All employers must adopt a compliant policy and provide annual training.',NOW(),NOW()),
  ('STATE','NY','NY_WC_POSTER','New York Workers’ Compensation Notice','EMPLOYMENT','REQUIRED',
   'https://www.wcb.ny.gov/content/main/Employers/Employers.jsp',
   'Post proof of workers’ compensation coverage and other required notices.',NOW(),NOW())
ON CONFLICT ("scope","code") DO NOTHING;

-- Rules (>=1 employee unless noted otherwise)
INSERT INTO "Rule"("scope","location","obligationId","status","effectiveFrom","predicate","createdAt","updatedAt")
SELECT 'STATE','NY', o.id, 'ACTIVE', NOW(),
       '{"all":[{"fact":"STATE_EMP_COUNT","op":">=","value":1}]}'::jsonb, NOW(), NOW()
FROM "Obligation" o WHERE o.scope='STATE' AND o.location='NY' AND o.code='NY_NEW_HIRE_REPORT';

INSERT INTO "Rule"("scope","location","obligationId","status","effectiveFrom","predicate","createdAt","updatedAt")
SELECT 'STATE','NY', o.id, 'ACTIVE', NOW(),
       '{"all":[{"fact":"STATE_EMP_COUNT","op":">=","value":1}]}'::jsonb, NOW(), NOW()
FROM "Obligation" o WHERE o.scope='STATE' AND o.location='NY' AND o.code='NY_MIN_WAGE_POSTER';

INSERT INTO "Rule"("scope","location","obligationId","status","effectiveFrom","predicate","createdAt","updatedAt")
SELECT 'STATE','NY', o.id, 'ACTIVE', NOW(),
       '{"all":[{"fact":"STATE_EMP_COUNT","op":">=","value":1}]}'::jsonb, NOW(), NOW()
FROM "Obligation" o WHERE o.scope='STATE' AND o.location='NY' AND o.code='NY_PAID_SICK_LEAVE';

INSERT INTO "Rule"("scope","location","obligationId","status","effectiveFrom","predicate","createdAt","updatedAt")
SELECT 'STATE','NY', o.id, 'ACTIVE', NOW(),
       '{"all":[{"fact":"STATE_EMP_COUNT","op":">=","value":1}]}'::jsonb, NOW(), NOW()
FROM "Obligation" o WHERE o.scope='STATE' AND o.location='NY' AND o.code='NY_SH_POLICY_TRAINING';

INSERT INTO "Rule"("scope","location","obligationId","status","effectiveFrom","predicate","createdAt","updatedAt")
SELECT 'STATE','NY', o.id, 'ACTIVE', NOW(),
       '{"all":[{"fact":"STATE_EMP_COUNT","op":">=","value":1}]}'::jsonb, NOW(), NOW()
FROM "Obligation" o WHERE o.scope='STATE' AND o.location='NY' AND o.code='NY_WC_POSTER';

-- ========== TEXAS (TX) ==========
INSERT INTO "Obligation"
  ("scope","location","code","title","category","severity","citation","description","createdAt","updatedAt")
VALUES
  ('STATE','TX','TX_NEW_HIRE_REPORT','Texas New Hire Reporting','EMPLOYMENT','REQUIRED',
   'https://portal.cs.oag.state.tx.us/wps/portal/NHR/home',
   'Report newly hired and rehired employees to the Texas OAG within 20 days.',NOW(),NOW()),
  ('STATE','TX','TX_POSTERS_TWC','Texas Workforce Commission Required Posters','EMPLOYMENT','REQUIRED',
   'https://www.twc.texas.gov/businesses/posters-workplace',
   'Post required TWC labor law posters (e.g., Payday Law, Child Labor).',NOW(),NOW()),
  ('STATE','TX','TX_PAYDAY_NOTICE','Texas Payday Law Notice','EMPLOYMENT','REQUIRED',
   'https://www.twc.texas.gov/job-seekers/texas-payday-law',
   'Comply with Texas Payday Law and provide applicable postings/information.',NOW(),NOW()),
  ('STATE','TX','TX_WC_NOTICE','Texas Workers’ Compensation Coverage Notice','EMPLOYMENT','REQUIRED',
   'https://www.tdi.texas.gov/wc/employer/employers.html',
   'Post required notices regarding workers’ compensation coverage or non-coverage.',NOW(),NOW())
ON CONFLICT ("scope","code") DO NOTHING;

-- Rules (>=1 employee)
INSERT INTO "Rule"("scope","location","obligationId","status","effectiveFrom","predicate","createdAt","updatedAt")
SELECT 'STATE','TX', o.id, 'ACTIVE', NOW(),
       '{"all":[{"fact":"STATE_EMP_COUNT","op":">=","value":1}]}'::jsonb, NOW(), NOW()
FROM "Obligation" o WHERE o.scope='STATE' AND o.location='TX' AND o.code='TX_NEW_HIRE_REPORT';

INSERT INTO "Rule"("scope","location","obligationId","status","effectiveFrom","predicate","createdAt","updatedAt")
SELECT 'STATE','TX', o.id, 'ACTIVE', NOW(),
       '{"all":[{"fact":"STATE_EMP_COUNT","op":">=","value":1}]}'::jsonb, NOW(), NOW()
FROM "Obligation" o WHERE o.scope='STATE' AND o.location='TX' AND o.code='TX_POSTERS_TWC';

INSERT INTO "Rule"("scope","location","obligationId","status","effectiveFrom","predicate","createdAt","updatedAt")
SELECT 'STATE','TX', o.id, 'ACTIVE', NOW(),
       '{"all":[{"fact":"STATE_EMP_COUNT","op":">=","value":1}]}'::jsonb, NOW(), NOW()
FROM "Obligation" o WHERE o.scope='STATE' AND o.location='TX' AND o.code='TX_PAYDAY_NOTICE';

INSERT INTO "Rule"("scope","location","obligationId","status","effectiveFrom","predicate","createdAt","updatedAt")
SELECT 'STATE','TX', o.id, 'ACTIVE', NOW(),
       '{"all":[{"fact":"STATE_EMP_COUNT","op":">=","value":1}]}'::jsonb, NOW(), NOW()
FROM "Obligation" o WHERE o.scope='STATE' AND o.location='TX' AND o.code='TX_WC_NOTICE';