# AI Orchestration & Models

## Framework: LangGraph
- **Pattern:** State Graph. Every agent must receive a `State` object and return a partial update.
- **Workflow:** Prioritize multi-agent delegation. If a task is complex, the "Router Agent" must break it down.
- **Persistence:** Use `MemorySaver` for thread-level checkpoints.

## Model Strategy (via LiteLLM)
- **Primary Chat:** `gemini-3.0-flash` .
- **Coding/Self-Healing:** `claude-4-5-sonnet`.
- **Fallbacks:** 1. `claude-4-5-sonnet` (for logic fallback).
  2. `gemini-3.0-flash` (for high-volume processing).

## Observability
- **Langfuse** Enabled for all agentic traces. Tag traces with `project-name`.

**Rule:** If a model returns a malformed JSON 3 times, the Orchestrator must switch to a larger model for "Self-Healing".