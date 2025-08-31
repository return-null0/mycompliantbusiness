# Compliance Engine — Work in Progress

This repo is an experimental compliance evaluation engine.
Goal: ingest US federal, state, and city obligations, evaluate them against business facts, and return scoped compliance “cards” grouped by jurisdiction.

⸻

# Current Progress
## Session-backed API (TypeScript + Express):
	•	Middleware ensureSession creates and refreshes a DB-backed session for every browser/API request (sid cookie).
	•	Routes under /api:
	•	GET /api/items → list items scoped to session
	•	POST /api/items → create item scoped to session
	•	POST /api/reset → clear all session data
	•	GET /api/session → return current session ID
	•	Modular structure (middleware/, routes/, db/, lib/).
## Database setup:
	•	Local Postgres running via Docker.
	•	Prisma migrations applied, tables Session and Item working.
	•	Sessions expire with sliding TTL (default 180 days).
## Prisma schema structure (planned, partly stubbed):
	•	federal/, states/, cities/ each with their own schema.prisma, client output, and DATABASE_URL.
	•	Models share a common shape (Agency, Source, Obligation, Rule, RuleCitation).
	•	No cross-relations: each layer is independent.
## TypeScript layer:
	•	Shared @compliance/common package in progress:
	•	enums (Category, Severity, RuleStatus, SourceKind)
	•	fact types (normalized input data)
	•	predicate types (rule evaluation functions)
## Hosting / infra:
	•	Running with Dockerized Postgres.
	•	API builds & runs via TSX, ready for deployment on low-cost PaaS (Render, Railway, etc.).

⸻

# End Goals
## Evaluation flow:
	1.	Normalize input facts (locations, workforce, sales, industry).
	2.	Evaluate federal rules → return matching compliance cards.
	3.	For each operating state → evaluate state rules.
	4.	For each operating city → evaluate city rules.
	5.	Prefilter by triggers (keywords stored on rules), then evaluate predicates.
	6.	Group results by jurisdiction and attach because[] + official links.
## Seeds (example datasets):
	•	Federal: I-9, FLSA, OSHA 1904 (≥10), ADA (Title I ≥15 / Title III customer-facing), IRS basics.
	•	States: unemployment (UI/SUTA), income tax withholding, sales tax vendor, food permits, portal links.
	•	Cities: business license/tax certificate, local food permit, fire/sign permits.



### 
NOTE: remember prisma migrate to apply the postgres table definitions from prisma
into a postgres server (preferably dockerized)