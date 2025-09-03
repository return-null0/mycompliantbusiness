/* =========================
   NEW YORK (NY)
   ========================= */
BEGIN;

INSERT INTO "Question" ("scope","location","code","kind","prompt","createdAt","updatedAt") VALUES
('STATE','NY','NY_EMP_COUNT','NUMBER','How many employees do you have in New York?',NOW(),NOW()),
('STATE','NY','NY_HAS_HEALTH_PLAN','BOOL','Do you provide group health insurance to NY employees?',NOW(),NOW());

INSERT INTO "Obligation" ("scope","location","code","title","category","severity","citation","description","createdAt","updatedAt") VALUES
('STATE','NY','NY_MIN_WAGE','New York Minimum Wage','EMPLOYMENT','REQUIRED','https://dol.ny.gov/minimum-wage','Pay the NY minimum wage (varies by region/industry).',NOW(),NOW()),
('STATE','NY','NY_UI','New York Unemployment Insurance','TAX','REQUIRED','https://dol.ny.gov/unemployment-insurance-employers','Register and contribute to NY UI; file required reports.',NOW(),NOW()),
('STATE','NY','NY_WITHHOLDING','NY State Income Tax Withholding','TAX','REQUIRED','https://www.tax.ny.gov/bus/emp/withholding_tax.htm','Register and withhold NY wage income tax; file returns.',NOW(),NOW()),
('STATE','NY','NY_PSL','NY Paid Sick Leave','EMPLOYMENT','REQUIRED','https://dol.ny.gov/paid-sick-leave','Provide sick leave accrual per NY PSL law.',NOW(),NOW()),
('STATE','NY','NY_POSTERS','Required NY Workplace Posters','EMPLOYMENT','REQUIRED','https://dol.ny.gov/posters','Display required state labor law posters.',NOW(),NOW());

INSERT INTO "Rule" ("scope","location","obligationId","status","effectiveFrom","predicate","createdAt","updatedAt")
SELECT 'STATE','NY',o.id,'ACTIVE',NOW(),'{"all":[{"fact":"NY_EMP_COUNT","op":">=","value":1}]}'::jsonb,NOW(),NOW()
FROM "Obligation" o WHERE o.location='NY';

COMMIT;

/* =========================
   CALIFORNIA (CA)
   ========================= */
BEGIN;

INSERT INTO "Question" ("scope","location","code","kind","prompt","createdAt","updatedAt") VALUES
('STATE','CA','CA_EMP_COUNT','NUMBER','How many employees do you have in California?',NOW(),NOW()),
('STATE','CA','CA_HAS_HEALTH_PLAN','BOOL','Do you provide health coverage to CA employees?',NOW(),NOW());

INSERT INTO "Obligation" ("scope","location","code","title","category","severity","citation","description","createdAt","updatedAt") VALUES
('STATE','CA','CA_MIN_WAGE','California Minimum Wage','EMPLOYMENT','REQUIRED','https://www.dir.ca.gov/dlse/MinimumWage.htm','Pay CA minimum wage; some localities set higher rates.',NOW(),NOW()),
('STATE','CA','CA_UI','California Unemployment Insurance (EDD)','TAX','REQUIRED','https://edd.ca.gov/','Register for UI with EDD; file/pay payroll taxes.',NOW(),NOW()),
('STATE','CA','CA_WITHHOLDING','CA Personal Income Tax Withholding','TAX','REQUIRED','https://www.ftb.ca.gov/','Withhold CA PIT and file returns.',NOW(),NOW()),
('STATE','CA','CA_PSL','CA Paid Sick Leave','EMPLOYMENT','REQUIRED','https://www.dir.ca.gov/dlse/paid_sick_leave.htm','Provide accrued paid sick leave statewide (locals may require more).',NOW(),NOW()),
('STATE','CA','CA_POSTERS','Required CA Workplace Posters','EMPLOYMENT','REQUIRED','https://www.dir.ca.gov/wpnodb.html','Display required state posters (DLSE/DIR).',NOW(),NOW());

INSERT INTO "Rule" ("scope","location","obligationId","status","effectiveFrom","predicate","createdAt","updatedAt")
SELECT 'STATE','CA',o.id,'ACTIVE',NOW(),'{"all":[{"fact":"CA_EMP_COUNT","op":">=","value":1}]}'::jsonb,NOW(),NOW()
FROM "Obligation" o WHERE o.location='CA';

COMMIT;

/* =========================
   TEXAS (TX)  (no state wage income tax)
   ========================= */
BEGIN;

INSERT INTO "Question" ("scope","location","code","kind","prompt","createdAt","updatedAt") VALUES
('STATE','TX','TX_EMP_COUNT','NUMBER','How many employees do you have in Texas?',NOW(),NOW()),
('STATE','TX','TX_HAS_HEALTH_PLAN','BOOL','Do you provide health coverage to TX employees?',NOW(),NOW());

INSERT INTO "Obligation" ("scope","location","code","title","category","severity","citation","description","createdAt","updatedAt") VALUES
('STATE','TX','TX_MIN_WAGE','Texas Minimum Wage (federal floor)','EMPLOYMENT','REQUIRED','https://www.twc.texas.gov/','Texas uses the federal minimum wage; comply with posting.',NOW(),NOW()),
('STATE','TX','TX_UI','Texas Unemployment Insurance (TWC)','TAX','REQUIRED','https://www.twc.texas.gov/','Register with TWC and pay UI tax.',NOW(),NOW()),
('STATE','TX','TX_POSTERS','Required TX Workplace Notices','EMPLOYMENT','REQUIRED','https://www.twc.texas.gov/businesses/posters-employers-must-display','Display required state/federal notices.',NOW(),NOW());

INSERT INTO "Rule" ("scope","location","obligationId","status","effectiveFrom","predicate","createdAt","updatedAt")
SELECT 'STATE','TX',o.id,'ACTIVE',NOW(),'{"all":[{"fact":"TX_EMP_COUNT","op":">=","value":1}]}'::jsonb,NOW(),NOW()
FROM "Obligation" o WHERE o.location='TX';

COMMIT;

/* =========================
   FLORIDA (FL) (no state wage income tax)
   ========================= */
BEGIN;

INSERT INTO "Question" ("scope","location","code","kind","prompt","createdAt","updatedAt") VALUES
('STATE','FL','FL_EMP_COUNT','NUMBER','How many employees do you have in Florida?',NOW(),NOW()),
('STATE','FL','FL_HAS_HEALTH_PLAN','BOOL','Do you provide health coverage to FL employees?',NOW(),NOW());

INSERT INTO "Obligation" ("scope","location","code","title","category","severity","citation","description","createdAt","updatedAt") VALUES
('STATE','FL','FL_MIN_WAGE','Florida Minimum Wage','EMPLOYMENT','REQUIRED','https://floridajobs.org/','Pay Florida minimum wage (indexed).',NOW(),NOW()),
('STATE','FL','FL_REEMPLOY','Florida Reemployment Tax','TAX','REQUIRED','https://floridarevenue.com/','Register and file reemployment (UI) tax.',NOW(),NOW()),
('STATE','FL','FL_POSTERS','Required FL Workplace Posters','EMPLOYMENT','REQUIRED','https://floridajobs.org/office-directory/division-of-workforce-services/workforce-programs/wage-and-hour/required-posters','Display required state/federal posters.',NOW(),NOW());

INSERT INTO "Rule" ("scope","location","obligationId","status","effectiveFrom","predicate","createdAt","updatedAt")
SELECT 'STATE','FL',o.id,'ACTIVE',NOW(),'{"all":[{"fact":"FL_EMP_COUNT","op":">=","value":1}]}'::jsonb,NOW(),NOW()
FROM "Obligation" o WHERE o.location='FL';

COMMIT;

/* =========================
   ILLINOIS (IL)
   ========================= */
BEGIN;

INSERT INTO "Question" ("scope","location","code","kind","prompt","createdAt","updatedAt") VALUES
('STATE','IL','IL_EMP_COUNT','NUMBER','How many employees do you have in Illinois?',NOW(),NOW()),
('STATE','IL','IL_HAS_HEALTH_PLAN','BOOL','Do you provide health coverage to IL employees?',NOW(),NOW());

INSERT INTO "Obligation" ("scope","location","code","title","category","severity","citation","description","createdAt","updatedAt") VALUES
('STATE','IL','IL_MIN_WAGE','Illinois Minimum Wage','EMPLOYMENT','REQUIRED','https://labor.illinois.gov/','Pay the Illinois minimum wage; localities may exceed.',NOW(),NOW()),
('STATE','IL','IL_UI','Illinois Unemployment Insurance (IDES)','TAX','REQUIRED','https://www2.illinois.gov/ides/','Register and contribute to IL UI.',NOW(),NOW()),
('STATE','IL','IL_WITHHOLDING','Illinois Income Tax Withholding','TAX','REQUIRED','https://tax.illinois.gov/','Withhold IL income tax; file/pay returns.',NOW(),NOW()),
('STATE','IL','IL_PLAWA','Paid Leave for All Workers (IL)','EMPLOYMENT','REQUIRED','https://labor.illinois.gov/paidleave.html','Provide up to 40 hours of earned paid leave annually.',NOW(),NOW()),
('STATE','IL','IL_POSTERS','Required IL Workplace Posters','EMPLOYMENT','REQUIRED','https://labor.illinois.gov/employer-posters.html','Display required state posters.',NOW(),NOW());

INSERT INTO "Rule" ("scope","location","obligationId","status","effectiveFrom","predicate","createdAt","updatedAt")
SELECT 'STATE','IL',o.id,'ACTIVE',NOW(),'{"all":[{"fact":"IL_EMP_COUNT","op":">=","value":1}]}'::jsonb,NOW(),NOW()
FROM "Obligation" o WHERE o.location='IL';

COMMIT;