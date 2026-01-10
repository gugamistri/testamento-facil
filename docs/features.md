Testamento Digital - Technical Architecture (MVP)
Features (MVP)
1. Landing Page & Lead Conversion
Public-facing marketing site with educational content, social proof, pricing calculator, and integrated appointment booking. Includes blog/CMS for SEO content about estate planning in Brazil.
Tech Involved
Next.js 16.1 (App Router, SSG for blog)
Tailwind CSS + shadcn/ui
Cal.com embedded widget (or Calendly iframe)
MDX for blog content
Resend/Postmark for transactional emails
Main Requirements
Static generation for SEO (getStaticProps for blog)
Lighthouse score >90 (Core Web Vitals)
Analytics integration (PostHog/Plausible)
A/B testing capability for CTAs
LGPD-compliant cookie consent
Multi-language support (pt-BR primary, future en/es)

2. Appointment Scheduling & CRM
Lead capture workflow with pre-consultation questionnaire, automated email sequences, and lightweight CRM for consultant workflow management.
Tech Involved
Cal.com (self-hosted via Coolify) OR Calendly embed
Hono backend (webhook handlers)
PostgreSQL (leads table)
BullMQ (email automation jobs)
Notion API or Airtable API (external CRM sync)
Main Requirements
Webhook consumption from Cal.com (booking.created, booking.cancelled)
Email templates with dynamic data (Handlebars/React Email)
Follow-up sequence: D+1, D+3, D+7 after no-show/no-purchase
Consultant dashboard: view upcoming calls, lead context, notes
Integration with Zoom/Google Meet via Cal.com
Track conversion funnel: Lead → Consultation → Sale

3. Testament Creation Wizard (Onboarding)
Multi-step form for asset inventory (real estate, vehicles, bank accounts, crypto, digital assets) with document uploads, beneficiary management, and intelligent validation.
Tech Involved
Next.js App Router (server actions for autosave)
Zustand (form state persistence)
TanStack Query (optimistic updates)
React Hook Form + Zod validation
MinIO (document uploads - PDFs, images)
Drizzle ORM (draft testament versioning)
Main Requirements
Auto-save every 30s (debounced server action)
File upload: chunked for files >5MB, virus scanning (ClamAV container)
CPF validation (checksum algorithm + Serasa API for verification)
Legitimate heir calculation (50% rule validation)
Progress tracking (7-step wizard state machine)
Draft recovery on session timeout
Mobile-responsive (80% desktop, 20% mobile usage expected)
Accessibility: WCAG 2.1 AA compliance

4. Video Validation (Forensic Proof)
Scheduled video conferencing session with platform lawyer for testament declaration recording, with encrypted storage and blockchain timestamping.
Tech Involved
Daily.co (WebRTC API) OR Jitsi Meet (self-hosted)
FFmpeg (server-side recording, H.264 encoding)
OpenSSL (AES-256-GCM encryption)
MinIO (encrypted video storage)
Polygon blockchain (via Ethers.js)
AWS KMS or HashiCorp Vault (key management)
Main Requirements
Recording at 1080p/30fps (Opus audio codec)
Real-time transcription (optional: Whisper API for audit trail)
Lawyer-side checklist validation (ID verification, mental capacity assessment)
Video encryption before storage (encrypt-then-upload)
SHA-256 hash of video file + metadata recorded on Polygon
IPFS storage consideration (future: decentralized backup)
Bandwidth optimization: adaptive bitrate streaming
Fallback: if recording fails mid-session, allow resume/re-record

5. ICP-Brasil Digital Signature
Integration with Brazilian digital certificate authorities for legally-binding signature collection on generated testament PDF.
Tech Involved
Soluti/Valid/Serpro SDKs (REST API + OAuth2)
PDFKit or Puppeteer (PDF generation from form data)
Node.js crypto module (SHA-256 hashing)
PostgreSQL (signature event logging)
Main Requirements
Generate testament PDF with legal formatting (Art. 1.876 CC compliance)
User redirects to certificadora, returns with signed PDF
Webhook validation: signature authenticity check
Compare hash(signed_pdf) === hash(blockchain_record)
Email delivery of signed copy (encrypted zip with password via SMS)
Support for cloud certificates (e-CPF A3 in cloud HSM)
Retry mechanism if signature fails (user can re-attempt 3x)

6. Cryptographic Custody (Shamir Secret Sharing)
Testament encryption using AES-256 with master key split into 3 shares (AWS KMS, lawyer portal, death monitoring trigger) requiring 2-of-3 for decryption.
Tech Involved
secrets.js-grempe library (Shamir's implementation)
AWS KMS (share #1 storage in HSM)
PostgreSQL encrypted column (share #2, lawyer's key)
Redis (share #3, triggered by death API)
OpenSSL for AES-256-GCM encryption
Main Requirements
Key generation: cryptographically random 256-bit key
Shamir split: threshold=2, total=3
Share #1: stored in AWS KMS (ap-southeast-1 + us-east-1 replicas)
Share #2: encrypted with lawyer's password (Argon2 hashed), stored in DB
Share #3: activated only when death API confirms + manual override
Encryption envelope: encrypt testament PDF, store ciphertext in MinIO
Decryption ceremony: require 2FA from lawyer + API trigger event
Audit log: every decryption attempt (successful or failed) logged immutably
Geographic backup: replicate encrypted testament to AWS S3 Glacier (São Paulo region)

7. Blockchain Registration (Immutability Proof)
Record cryptographic hash of testament + metadata on Polygon blockchain for tamper-proof audit trail with public verification.
Tech Involved
Ethers.js v6
Polygon Mumbai testnet (MVP) → Polygon mainnet (production)
Infura or Alchemy (RPC provider)
Solidity smart contract (simple event emitter)
PostgreSQL (tx_hash storage)
Main Requirements
Smart contract: registerTestament(bytes32 hash, uint256 timestamp) emits event
Gas optimization: batch multiple registrations in single tx (future)
Store transaction hash for public verification link
Frontend: link to PolygonScan explorer for user verification
Fallback: if blockchain tx fails, queue retry (max 3 attempts)
Cost management: ~$0.01/tx, monitor gas prices
Future: migrate to zkEVM for lower costs

8. Death Monitoring Service (API Integration)
Automated daily polling of death registry APIs (Serasa/CRC) to detect client death and trigger testament unsealing workflow.
Tech Involved
BullMQ (scheduled jobs: cron 0 2 * * * - 2am daily)
Axios (API client for Serasa/Boa Vista)
PostgreSQL (monitoring state: last_checked, status)
Redis (rate limiting, API response caching)
Twilio/MessageBird (SMS notifications)
Main Requirements
Daily CPF batch query (all active clients)
Rate limiting: max 100 req/min to death API
Retry logic: exponential backoff if API timeout
Webhook support: subscribe to death registry webhooks (future)
Multi-layer validation:
Layer 1: API returns "deceased"
Layer 2: Send email/SMS, wait 48h for response
Layer 3: Cross-check with second API (SIM/SEADE)
Layer 4: Manual lawyer review (upload death certificate scan)
Trigger unsealing only after all 4 layers pass
False positive prevention: require death certificate PDF upload
Monitoring dashboard: Bull Board for job status

9. Dead Man's Switch (Proof of Life)
Semi-annual email/SMS prompts for clients to confirm they're alive, with escalating alerts if no response received.
Tech Involved
BullMQ (scheduled jobs: every 6 months per client)
PostgreSQL (last_checkin timestamp)
Resend/Postmark (email delivery)
Twilio (SMS delivery)
Next.js API route (checkin webhook)
Main Requirements
Job scheduling: individual cron per client (anniversary of signup + 6 months)
Secure token: HMAC-signed URL with 7-day expiration
Email template: "Click here to confirm you're active"
Escalation:
D+0: First email/SMS
D+7: Second reminder
D+14: Phone call attempt (manual ops)
D+30: Flag as "attention" (don't trigger unsealing yet)
One-click checkin: validates token, updates timestamp, resets schedule
Manual checkin button in dashboard (bypasses schedule)
Analytics: track response rate, optimize cadence

10. Beneficiary Portal (Post-Death Access)
Secure area for validated beneficiaries to access their inheritance details, digital asset instructions, and lawyer contact after testament unsealing.
Tech Involved
Next.js (separate /beneficiary route)
JWT with short TTL (7 days)
PostgreSQL (beneficiary table)
MinIO (serve decrypted testament PDF)
2FA via TOTP (authenticator app) or SMS
Main Requirements
Magic link authentication: email with one-time token
KYC validation: upload ID + proof of address before full access
Reveal secrets progressively:
Basic info (% inheritance) immediately
Sensitive data (passwords, crypto seeds) after 2FA + lawyer approval
"Reveal password" UI: shows for 30s, no screenshot allowed (watermark overlay)
Lawyer approval workflow for crypto/NFT transfers
Document download: encrypted PDF with beneficiary-specific password
Session timeout: 15 minutes idle
Audit trail: log every secret reveal (IP, timestamp, device)

11. Payment & Subscription Management
Recurring billing for annual testament maintenance with support for Brazilian payment methods (PIX, boleto, credit card).
Tech Involved
Stripe (international cards) + Asaas or Pagar.me (PIX/boleto)
BullMQ (renewal reminder jobs)
PostgreSQL (subscriptions table)
Webhooks (payment.succeeded, payment.failed)
Main Requirements
One-time payment: R$ 1.500 (testament creation)
Recurring: R$ 1.000/year (auto-renew)
Payment methods: credit card (Stripe), PIX (Asaas), boleto (Asaas)
Dunning management: retry failed payments 3x over 10 days
Renewal reminders: D-60, D-30, D-7
Grace period: 30 days after expiration before service suspension
Proration: if user upgrades mid-cycle
Invoice generation: PDF via Puppeteer
Webhook security: validate signatures (Stripe HMAC, Asaas hash)

12. Admin Dashboard (Lawyer & Operations)
Internal panel for lawyers to review testament drafts, approve video validations, manage key shares, and monitor death triggers.
Tech Involved
Next.js (separate /admin route with RBAC)
TanStack Table (data grid for testaments/clients)
React Hook Form (lawyer notes, approvals)
PostgreSQL views (aggregated reports)
Bull Board (job monitoring)
Main Requirements
Role-based access: Lawyer (read/approve), Admin (full access), Ops (monitoring only)
Testament review queue: pending video validation, pending signature
Key management: lawyer can input password to unlock share #2
Death trigger review: manual override to approve/reject unsealing
Client support: view full testament history, add notes
Analytics: conversion rates, MRR, churn, LTV
Export: CSV of clients, testaments, payments

System Diagram
graph TB
    subgraph "Client Applications"
        WEB[Next.js Web App<br/>React 19 + Tailwind]
        ADMIN[Admin Dashboard<br/>Lawyer Portal]
        BENEF[Beneficiary Portal<br/>Post-Death Access]
    end

    subgraph "API Layer"
        HONO[Hono API Server<br/>Node.js 20 + TypeScript]
        AUTH[JWT Auth Service<br/>Argon2 Password Hash]
    end

    subgraph "Core Services"
        CRYPTO[Encryption Service<br/>AES-256 + Shamir SSS]
        BLOCKCHAIN[Blockchain Service<br/>Ethers.js + Polygon]
        PDF[PDF Generator<br/>Puppeteer/PDFKit]
        VIDEO[Video Recording<br/>Daily.co + FFmpeg]
    end

    subgraph "Background Jobs"
        BULL[BullMQ Job Queue<br/>Redis-backed]
        DEATH[Death Monitor Worker<br/>Daily API Polling]
        DMS[Dead Man's Switch<br/>6-month Scheduler]
        EMAIL[Email Worker<br/>Resend/Postmark]
        SMS[SMS Worker<br/>Twilio]
    end

    subgraph "External Integrations"
        ICP[ICP-Brasil Certifiers<br/>Soluti/Valid/Serpro]
        DEATH_API[Death Registry APIs<br/>Serasa/CRC/ARPEN]
        CAL[Cal.com<br/>Scheduling]
        PAYMENT[Payment Gateways<br/>Stripe + Asaas]
        NOTION[Notion/Airtable<br/>CRM Sync]
    end

    subgraph "Data Layer"
        PG[(PostgreSQL<br/>Neon/Self-hosted)]
        REDIS[(Redis 7<br/>Cache + Queue)]
        MINIO[MinIO S3<br/>Document Storage]
        KMS[AWS KMS<br/>HSM Key Storage]
    end

    subgraph "Infrastructure"
        COOLIFY[Coolify<br/>Docker Orchestration]
        CADDY[Caddy<br/>Reverse Proxy + SSL]
        SENTRY[Sentry<br/>Error Tracking]
    end

    WEB --> HONO
    ADMIN --> HONO
    BENEF --> HONO
    HONO --> AUTH
    HONO --> CRYPTO
    HONO --> BLOCKCHAIN
    HONO --> PDF
    HONO --> VIDEO
    HONO --> PG
    HONO --> REDIS
    HONO --> MINIO
    HONO --> BULL

    BULL --> DEATH
    BULL --> DMS
    BULL --> EMAIL
    BULL --> SMS

    DEATH --> DEATH_API
    DMS --> EMAIL
    DMS --> SMS

    HONO --> ICP
    HONO --> CAL
    HONO --> PAYMENT
    HONO --> NOTION

    CRYPTO --> KMS
    CRYPTO --> PG
    BLOCKCHAIN --> DEATH
    
    PDF --> MINIO
    VIDEO --> MINIO

    PAYMENT -.webhook.-> HONO
    DEATH_API -.webhook.-> HONO
    CAL -.webhook.-> HONO

    COOLIFY --> WEB
    COOLIFY --> HONO
    COOLIFY --> BULL
    CADDY --> WEB
    CADDY --> HONO

    HONO --> SENTRY


List of Technical/Architecture Consideration Questions
Security & Compliance
Key Escrow: If AWS KMS fails (service outage), how do we ensure share #1 is still accessible? Should we implement multi-cloud redundancy (AWS KMS + Google Cloud KMS)?


LGPD Compliance: Where/how do we store audit logs of data access? Do we need a separate immutable log database (append-only) for compliance?


Encryption Key Rotation: How often should we rotate the master encryption key? What's the re-encryption strategy for existing testaments?


Lawyer Key Management: If the "master lawyer" leaves the company or dies, how do we rotate share #2? Do we need a "key ceremony" with multiple lawyers (m-of-n multisig)?


Penetration Testing: When should we schedule first pentest? What's the budget ($5k-15k typical)?


Data Residency: Must all data stay in Brazil (São Paulo region) for LGPD? Or can we use US/EU regions with proper DPAs?



Scalability & Performance
Death Monitoring Scale: If we have 10,000 clients, that's 10k API calls/day to death registries. What's the rate limit? Do we need to batch queries or get dedicated API access?


Video Storage Costs: 1080p video at 30min = ~2GB per testament. 1,000 clients = 2TB. MinIO on VPS or migrate to S3 Glacier for cold storage?


Database Sharding: At what point do we need to shard PostgreSQL? (100k+ testaments?) Is Neon serverless sufficient or should we plan for self-hosted with Citus/PgBouncer?


Redis Memory: BullMQ jobs + cache. How much RAM needed? 2GB sufficient for MVP or should we allocate 4GB+?


CDN Strategy: Should we use CloudFront/Cloudflare for static assets (PDFs, images) or is Caddy caching sufficient?



Reliability & Disaster Recovery
Backup Strategy:


PostgreSQL: automated daily snapshots? How long to retain (7 days? 30 days?)?
MinIO: replicate to S3 Glacier? 3-2-1 backup rule compliance?
Failover Plan: If primary VPS goes down, what's RTO (Recovery Time Objective)? Do we need multi-region setup or is daily backup restoration acceptable?


Blockchain Dependency: If Polygon RPC provider (Infura/Alchemy) goes down, can we queue transactions for later? How long can we buffer?


Death API SLA: If Serasa API is down for >72h (per your fallback spec), what's the manual process? Do lawyers manually check death registries?



Development & DevOps
Monorepo vs Polyrepo: Should we split frontend/backend into separate repos or keep as monorepo (Turborepo/pnpm workspaces)?


Environment Parity: How many environments? (local, staging, production?) Do we need a separate "sandbox" for ICP-Brasil integration testing?


Secrets Management: Where do we store API keys? (GitHub Secrets for CI/CD, but runtime? Coolify env vars? HashiCorp Vault?)


Database Migrations: Drizzle migrations in CI/CD or manual? How do we handle rollbacks?


Feature Flags: Do we need LaunchDarkly/PostHog feature flags for gradual rollouts (e.g., blockchain registration)?


Monitoring & Alerting: Beyond Sentry, do we need:


Uptime monitoring (UptimeRobot, BetterStack)?
APM (Application Performance Monitoring - New Relic, DataDog)?
Log aggregation (Loki, Grafana)?

External Integration Risks
ICP-Brasil Certification: Have you confirmed pricing per signature? Some certificadoras charge R$ 50-200/signature. Do we absorb this cost or pass to user?


Death API Contracts: Do Serasa/Boa Vista require minimum contract terms (annual commitment)? What's the per-query cost? (R$ 0.10-0.50 typical)


Cal.com Self-Hosting: If we self-host, who manages updates/security patches? Or is Calendly embed simpler for MVP?


Payment Gateway Fallback: If Stripe webhook fails (downtime), do we poll the API manually? What's the reconciliation process?


Video Recording Reliability: Daily.co SLA? If recording fails mid-session, can user reschedule for free or do we charge again?



Product & UX
Mobile App Priority: You mentioned "mobile-friendly" but not native apps. What % of users will access via mobile? Should we invest in PWA (Progressive Web App) capabilities?


Offline Support: Should the testament wizard support offline mode (IndexedDB cache) for areas with poor connectivity?


Multi-Language: Primary is pt-BR. When (if ever) do we add English/Spanish? Does this affect database schema (i18n fields)?


Beneficiary Onboarding: When beneficiary receives notification, do they need to create account? Or is magic-link one-time access sufficient?



Cost Optimization
Current Stack Cost Estimate (Monthly):


Hetzner VPS (CPX31): €13 (~R$ 75)
Neon Postgres (Pro): $19 (~R$ 100)
MinIO storage: included in VPS
Blockchain (Polygon): ~$5/month (500 transactions)
Total infra: ~R$ 200/month
At 1,000 clients:


Death API calls: R$ 150/month (1k queries/day × R$ 0.15)
ICP signatures: R$ 0 (passed to user)
Video storage (2TB): R$ 300/month (S3 Glacier)
Email/SMS: R$ 100/month (Resend + Twilio)
Total: ~R$ 750/month
Gross Margin: R$ 1,000 annual fee → R$ 83/month per client. With 1k clients = R$ 83k/month revenue vs R$ 750 cost = 99% margin (excluding salaries/ops). This seems sustainable?


Break-even: At what client count do we need to upgrade from single VPS to multi-server setup? (Probably 5k-10k clients)



Legal & Regulatory
Data Retention: Testament must be kept for how long after client death? (5 years for tax purposes? 10 years for litigation?) Does this affect storage strategy?


Cross-Border: If client moves abroad or has assets in multiple countries, how does this affect legal validity? Do we need multi-jurisdiction support?


Smart Contract Audit: Before mainnet deployment, should we get the Solidity contract audited? (Cost: $3k-10k)


Insurance: Do we need Errors & Omissions (E&O) insurance for lawyers on platform? Cyber insurance for data breaches?


