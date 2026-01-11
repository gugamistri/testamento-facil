# Infrastructure & Deployment
## Infrastructure
- **Storage:** Minio (S3-compatible)
- **Cache:** Redis
- **OS:** Ubuntu + Docker.
- **Management:** Coolify (Self-hosted).

## Containerization
- **Docker Compose:** Every project must have a `docker-compose.yml` defining `app`, `db` (Postgres), `redis` (BullMQ), and `worker`.
- **Reverse Proxy:** Managed by Coolify (Caddy). Caddy must handle SSL (Auto-HTTPS).

## Deployment Flow
1. IA writes code → Pushes to GitHub.
2. GitHub Actions runs Lint/Type-check.
3. Coolify detects push → Rebuilds Docker image → Blue/Green Deploy.