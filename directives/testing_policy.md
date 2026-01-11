# Testing & Quality Assurance

## Layer 3 (Execution Scripts)
- All scripts in `execution/` must have a corresponding test in `tests/scripts/`.

## Frontend
- **Unit:** Vitest for utility functions.
- **E2E:** Playwright for critical user flows (Login, Checkout, CRUD).

## Requirement
- Code will not be considered "Done" until `npm run test` or `pytest` passes with 0 errors.