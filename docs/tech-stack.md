🎨 Frontend
Framework: Next.js 16.1 (App Router, standalone build)
UI: React 19.2 + Tailwind CSS + shadcn/ui
State: Zustand + TanStack Query v5
Linguagem: TypeScript (strict mode)
⚙️ Backend
Framework: Hono (Node.js 20)
Database: Neon Postgres (serverless) OU PostgreSQL 16 (self-hosted)
ORM: Drizzle ORM
Auth: JWT + Argon2
Cache: Redis 7 (self-hosted) OU Upstash Redis
Jobs: BullMQ + Bull Board (dashboard)
Storage: MinIO (S3-compatible)
🤖 AI/LLM
Gateway: LiteLLM (unified API + fallbacks + load balancing)
Orquestração: LangGraph (multi-agent workflows)
Modelos (via LiteLLM):
Primary: Claude Sonnet 4.5 (chat) + Haiku 4.5 (code/healing)
Fallback: OpenAI GPT-4o-mini / Llama 3.1 (Together.ai)
Observability: LangSmith (opcional, debug de agentes)
Scraping: Puppeteer + LiteLLM Vision
🚀 Infraestrutura
Hosting: VPS (Hetzner CPX31 - 4vCPU, 8GB RAM, €13/mês)
Deploy: Docker + Coolify
Reverse Proxy: Caddy (via Coolify)
Containerização: Docker Compose
🛠️ DevOps
Package Manager: pnpm
Linting: Biome
Monitoring: Sentry (errors)
CI/CD: GitHub Actions (lint + type-check)
