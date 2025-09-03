# Compliance Q&A App

### A full-stack app that guides businesses through compliance questions and shows computed obligations.

## Overview
	•	Scopes:
	•	Federal (no location)
	•	State (requires a state code like NY, CA)
	•	City (requires a city choice like New York, Boston, Portland)
## Flow:
	1.	User selects a scope (and a location if required).
	2.	Questions load for that scope/location.
	3.	As the user answers, obligations are computed and displayed with titles, descriptions, and citations.
	4.	When all questions for the current scope/location are answered, the UI shows a completion banner.
	•	Sessioning:
	•	Each run is tied to a session ID.
	•	“Start new session” clears all answers and resets progress.

## Frontend
	•	main.tsx — orchestrates scope selection, question/answer flow, obligation rendering.
	•	interfaceElements.tsx — shared UI components (cards, buttons, selects, inputs, layout).

## Key behaviors:
	•	Lazy loading: Federal metadata loads on boot; State/City metadata loads only after a location is chosen.
	•	Progress tracking: Only counts answers belonging to the active scope/location.
	•	Completion UI: Navigation hides when all questions are answered; obligations remain visible.

## API Contract
	•	GET /api/session, POST /api/session/new
	•	GET /api/questions?scope=...&location=...
	•	GET /api/answers, POST /api/answers
	•	GET /api/obligations?scope=...&location=...
	•	GET /api/obligation-meta?scope=...&location=...

### All endpoints are scope/location-aware. STATE and CITY must filter by both.

## Data Model (essentials)
	•	Question: scope, location?, code, kind, prompt
	•	Obligation: scope, location?, code, title, citation, description
	•	Rule: JSON predicates keyed by Question.code (e.g. NY_EMP_COUNT >= 1).
	•	Answers: session-scoped responses.

## Extending
	•	Add new states or cities by inserting Questions, Obligations, and Rules with a matching location.
	•	Update dropdowns (stateCode or CITY_OPTIONS) to expose them in the UI.

⸻
