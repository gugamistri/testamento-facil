# Background Jobs & Workers

## Technology
- **Library:** BullMQ
- **Storage:** Redis
- **Monitoring:** Bull Board (accessible via `/admin/queues` in dev)

## Implementation Rules
1. **Naming:** Queues must be named by domain (e.g., `email-queue`, `image-processing`).
2. **Retries:** Every job must have a backoff strategy (exponential by default).
3. **Idempotency:** Workers must check if a job was already processed to avoid duplicates.
4. **Sandboxed Workers:** Run workers in separate processes if the task is CPU-intensive.

## Tooling
- Use the script `execution/utils/create_job.py` to test pushing messages to Redis.