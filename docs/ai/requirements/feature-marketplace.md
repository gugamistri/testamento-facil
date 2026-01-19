---
phase: requirements
title: Requirements & Problem Understanding - Marketplace Ecosystem
description: Define the marketplace structure for Clients, Lawyers, Partners, and Management.
---

# Requirements & Problem Understanding - Marketplace Ecosystem

## Problem Statement
**What problem are we solving?**

- **Trust Gap**: Clients need assurance that their digital will is legally sound and will be executed.
- **Complexity**: Creating a legally binding digital will involves multiple stakeholders (lawyers, witnesses, institutional partners).
- **Scalability**: For TrustVault to grow, it needs a decentralized network of legal professionals and institutional partners rather than a monolithic service.
- **Coordination**: There's currently no structured way to connect clients with vetted lawyers, reward partners for referrals, and manage the entire lifecycle from a centralized admin panel.

## Goals & Objectives
**What do we want to achieve?**

- **Decentralized Legal Validation**: Connect clients with certified lawyers for 1-on-1 video consultations.
- **Incentivized Growth**: Create a "Partner" role (OAB, Councils) that brings in lawyers and clients in exchange for benefits.
- **Role-Based Access Control (RBAC)**: Distinct dashboards for Clients, Lawyers, Partners, and Management.
- **Payment Integration**: Secure payment handling via third-party (e.g., Stripe) for client service fees.
- **Reputation System**: Peer-to-peer rating and review system between Clients and Lawyers to ensure quality and trust.
- **End-to-End Workflow**: From onboarding (client) to validation (lawyer) to tracking (partner) to oversight (admin).

- **Non-goals**: 
    - Automated commission payouts: The system will generate reports/statements, but actual transfers to partners will be handled manually/offline in this phase.
    - Full-scale CRM: We are not building a complete legal CRM, just a specialized marketplace.

## User Stories & Use Cases
**How will users interact with the solution?**

- **As a Client**, I want to browse/be assigned a specialized lawyer and see their ratings so that I can choose a professional I trust.
- **As a Client**, I want to provide feedback and a rating after my session so that I can help improve the community standards.
- **As a Client**, I want a support form to report issues (e.g., lawyer no-show) so that my process is not delayed.
- **As a Lawyer**, I want to manage my availability and conduct "Legal Mode" video calls so that I can earn fees by providing official validations.
- **As a Partner (OAB/Council)**, I want to invite lawyers to the platform and see a report of my impact so that I can verify my earned benefits.
- **As an Admin**, I want to monitor all sessions, verify lawyer credentials, and process payment reports for partners.

## Success Criteria
**How will we know when we're done?**

- Four distinct authentication/authorization scopes implemented.
- Functional Stripe integration for client payments.
- Evaluation system (1-5 stars + text feedback) active on both sides.
- Report generation module for Partners (showing referral conversions).
- Support/Contact form for resolution of session conflicts.
- Centralized management dashboard with audit logs.

## Constraints & Assumptions
**What limitations do we need to work within?**

- **Legality**: Must comply with LGPD (Brazil) and specific OAB regulations regarding advertising and fees.
- **Security**: "Legal Mode" calls must be encrypted and recorded for forensic proof.
- **Connectivity**: Assumes participants have stable internet (min 5Mbps) for video sessions.
- **Infrastructure**: Assumes Clerk supports metadata for RBAC and Stripe handles PCI compliance.

## Questions & Open Items
**What do we still need to clarify?**

- Specific metrics for the Partner reports (Conversion rate? Total volume?).
- Integration with external OAB databases for lawyer verification.
- Storage costs and retention policies for "Legal Mode" video recordings.
- Resolution policy: What happens if a session is cancelled 5 minutes before? (Refund rules).
