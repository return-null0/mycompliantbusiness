# Compliance Engine — super-short README

# Prisma schemas:
We use three independent Prisma projects (federal, states, cities), each with its own schema.prisma, client output, and DATABASE_URL. Models are similar across layers (Agency, Source, Obligation, Rule, RuleCitation), with enums duplicated inside each schema so datasets remain fully decoupled. No cross-dataset relations.

## TypeScript layer (shared):
Create a tiny @compliance/common package exporting shared TS enums (Category, Severity, RuleStatus, SourceKind), fact types (the input shape you evaluate), and rule predicate types. Your application logic always imports these TS enums/types—keeping code consistent, even though each Prisma schema defines its own DB enums separately.

## Evaluation idea (short):
	1.	Normalize facts (locations, workforce, sales, industry).
	2.	Load federal rules → evaluate predicates → collect cards.
	3.	For each operating/sales state, load state rules; for each operating city, load city rules.
	4.	Prefilter by triggers (string[] stored on each rule), then evaluate; group output by jurisdiction; include because[] and 1–2 official links.

# Repo sketch:
```
packages/
  federal/ (prisma, client, seed)
  states/  (prisma, client, seed)
  cities/  (prisma, client, seed)
  common/  (src/enums.ts, facts.ts, rules.ts)
apps/
  api/     (uses three clients + common types)
```

## Minimal commands:
```
pnpm -F @compliance/federal prisma migrate dev && pnpm -F @compliance/federal prisma generate
pnpm -F @compliance/states  prisma migrate dev && pnpm -F @compliance/states  prisma generate
pnpm -F @compliance/cities  prisma migrate dev && pnpm -F @compliance/cities  prisma generate
```

# Seeds (keep tiny):
	•	Federal: I-9, FLSA, OSHA 1904 (>=10), ADA (Title I ≥15 / Title III customer-facing), IRS basics.
	•	State (per state): UI/SUTA, withholding, sales tax vendor, portal link, food permit if applicable.
	•	City: business license/tax cert, local food permit, fire/sign permits.

# API (single endpoint):
POST /evaluate → returns { federal: [...], states: {NY:[...]}, cities: {NYC:[...]} }.

# When you come back:
Think “three isolated Prisma datasets + one shared TS types package,” a tiny predicate evaluator, and per-jurisdiction packs you can extend fast.