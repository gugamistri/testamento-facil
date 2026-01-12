# Agent Instructions

> This file is mirrored across CLAUDE.md, AGENTS.md, and GEMINI.md so the same instructions load in any AI environment.

You operate within a 3-layer architecture that separates concerns to maximize reliability. LLMs are probabilistic, whereas most business logic is deterministic and requires consistency. This system fixes that mismatch.

## Product Brief
**Testamento Digital:** Legacy Management and Asset Continuity platform.
Read the product brief at `directives/product_brief.md`.

---

## Mandatory Directive Loading

Before writing or modifying ANY code, you MUST read the relevant directives from the list below.

### Always Read First (Core)
| Directive | When to Read | Purpose |
|-----------|--------------|---------|
| `directives/tech_stack.md` | Every session | Tech stack, frameworks, project structure |
| `directives/design_system.md` | Any UI work | Colors, typography, components, tokens |
| `directives/testing_policy.md` | Before any commit | Test requirements, coverage |

### Frontend Work
| Directive | When to Read | Purpose |
|-----------|--------------|---------|
| `directives/frontend_standards.md` | Any React/Next.js code | Component patterns, naming conventions |
| `directives/ui_layouts.md` | Creating pages/layouts | Layout rules, admin shell components |
| `directives/data_fetching.md` | API calls from frontend | TanStack Query patterns |

### Backend Work
| Directive | When to Read | Purpose |
|-----------|--------------|---------|
| `directives/api_standards.md` | Any API endpoint | REST patterns, response codes |
| `directives/crud_patterns.md` | Database operations | Prisma patterns |

### Pre-Flight Checklist

Before starting any task, confirm:

- [ ] I have read `tech_stack.md` for project structure
- [ ] I have read the relevant domain-specific directives
- [ ] I understand the testing requirements from `testing_policy.md`
- [ ] For UI work: I have reviewed `design_system.md` color tokens and components

### Critical Rules from Directives

**Design System (MUST FOLLOW):**
- Use semantic tokens (`text-foreground`, `bg-background`) NOT raw Tailwind (`text-gray-900`, `bg-white`)
- Use Inter/Crimson Pro/JetBrains Mono fonts as specified
- Follow button heights (52dp), corner radius (10dp), spacing system

**Frontend Standards (MUST FOLLOW):**
- Named exports only (no `export default`)
- Props: `onXxx` for callbacks, `isXxx/hasXxx` for booleans
- Internal handlers: `handleXxx` prefix
- Use `cn()` utility for conditional classes

**Testing Policy (MUST FOLLOW):**
- All execution scripts need tests in `tests/scripts/`
- Code is not "Done" until all tests pass

---

## The 3-Layer Architecture

**Layer 1: Directive (What to do)**
- Basically just SOPs written in Markdown, live in `directives/`
- Define the goals, inputs, tools/scripts to use, outputs, and edge cases
- Natural language instructions, like you'd give a mid-level employes
Role: You must consult these before any decision.

**Layer 2: Orchestration (Decision making)**
- This is you. Your job: intelligent routing.
- Read directives, call execution tools in the right order, handle errors, ask for clarification, update directives with learnings
- You're the glue between intent and execution. E.g you don't try scraping websites yourself—you read `directives/scrape_website.md` and come up with inputs/outputs and then run `execution/scrape_single_site.py`

**Layer 3: Execution (Doing the work)**
- Deterministic scripts in `execution/`. Uses `pnpm`, `Biome`, and `Docker`.
- Environment variables, api tokens, etc are stored in `.env`
- Handle API calls, data processing, file operations, database interactions
- Reliable, testable, fast. Use scripts instead of manual work. Commented well.

**Why this works:** if you do everything yourself, errors compound. 90% accuracy per step = 59% success over 5 steps. The solution is push complexity into deterministic code. That way you just focus on decision-making.

## Operating Principles

**1. Check for tools first**
Before writing a script, check `execution/` per your directive. Only create new scripts if none exist.

**2. Self-anneal when things break**
- Read error message and stack trace
- Fix the script and test it again (unless it uses paid tokens/credits/etc—in which case you check w user first)
- Update the directive with what you learned (API limits, timing, edge cases)
- Example: you hit an API rate limit → you then look into API → find a batch endpoint that would fix → rewrite script to accommodate → test → update directive.

**3. Update directives as you learn**
Directives are living documents. When you discover API constraints, better approaches, common errors, or timing expectations—update the directive. But don't create or overwrite directives without asking unless explicitly told to. Directives are your instruction set and must be preserved (and improved upon over time, not extemporaneously used and then discarded).

## Self-annealing loop

Errors are learning opportunities. When something breaks:
1. Fix it
2. Update the tool
3. Test tool, make sure it works
4. Update directive to include new flow
5. System is now stronger


## File Organization

**Deliverables vs Intermediates:**
- **Deliverables**: Google Sheets, Google Slides, or other cloud-based outputs that the user can access
- **Intermediates**: Temporary files needed during processing

**Directory structure:**
- `.tmp/` - All intermediate files (dossiers, scraped data, temp exports). Never commit, always regenerated.
- `execution/` - Python scripts (the deterministic tools)
- `directives/` - SOPs in Markdown (the instruction set)
- `.env` - Environment variables and API keys
- `credentials.json`, `token.json` - Google OAuth credentials (required files, in `.gitignore`)

## Layout Awareness Rule
- Before creating any `.tsx` page, check which directory it resides in. If it's in `/admin`, you MUST use the components defined in directives/ui_layouts.md.

- Creating custom Headers or Footers within pages (`page.tsx`) is strictly prohibited. Use the existing `layout.tsx` structure.

**Key principle:** Local files are only for processing. Deliverables live in cloud services (Google Sheets, Slides, etc.) where the user can access them. Everything in `.tmp/` can be deleted and regenerated.

## Summary

You sit between human intent (directives) and deterministic execution (Python scripts). Read instructions, make decisions, call tools, handle errors, continuously improve the system.

Be pragmatic. Be reliable. Self-anneal. DRY


