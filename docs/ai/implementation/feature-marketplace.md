---
phase: implementation
title: Implementation Guide - Marketplace Ecosystem
description: Guidelines for implementing role-specific dashboards and secure video workflows.
---

# Implementation Guide - Marketplace Ecosystem

## Development Setup
**How do we get started?**

- Ensure Clerk environment variables are set for Role-Based metadata.
- Install video processing libraries (e.g., RecordRTC or similar for client-side recording).
- Set up local database migrations for new schema entities.

## Code Structure
**How is the code organized?**

- `apps/web/src/app/(dashboards)/`: Grouped layouts for `client/`, `lawyer/`, `partner/`, and `admin/`.
- `apps/web/src/components/marketplace/`: Shared UI components (scheduling, referral cards).
- `packages/shared/legal/`: Core logic for forensic hash generation and legal validation rules.

## Implementation Notes
**Key technical details to remember:**

### Phase 1: Foundation (Completed)
- **Database**: Updated `User` model with `role`, added `LawyerProfile`, `PartnerProfile`, `LegalSession`, `Review`, `Referral`.
- **RBAC Middleware**: Implemented strict role-based route protection in `middleware.ts`. Redirects unauthorized users to `/dashboard`.
- **Dashboards**: Created modular `DashboardShell` accepting `role` prop. Scaffolded `/lawyer` and `/partner` routes.

### Role Redirection
- Use a `middleware.ts` logic to check `user.publicMetadata.role` and redirect after login.

### Legal Mode Video
- **Capture**: Use MediaRecorder API with specific MIME types (e.g., video/webm).
- **Metadata**: Inject a "Watermark" or data overlay with ID, Lat/Long, and Clock during the stream.
- **Upload**: Small chunks (blobs) to S3/Cloud Storage to avoid data loss if connection drops.

### Partner Referrals
- Generate a unique `referralCode` per Partner.
- Use a persistent cookie for 30 days to track attribution even if registration happens later.

## Security Notes
**What security measures are in place?**

- **Dashboard Isolation**: Strict 403 checks for cross-role route access.
- **Legal Mode Encryption**: Recordings are encrypted at rest with keys held in the Custody Vault.
- **Audit Logs**: Every access to a Client's dossier by a Lawyer or Partner must be logged.
