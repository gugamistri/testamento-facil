---
phase: testing
title: Testing Strategy - Marketplace Ecosystem
description: Define test cases for all profiles and critical legal workflows.
---

# Testing Strategy - Marketplace Ecosystem

## Test Coverage Goals
**What level of testing do we aim for?**

- **Auth Scopes**: 100% coverage of route protection.
- **Video Capture**: Validation across Chrome, Safari, and Firefox.
- **Referrals**: Integrity check for referral benefit calculation logic.

## Unit Tests
**What individual components need testing?**

### Referral Engine
- [ ] Test case 1: Benefit calculation for single lawyer referral.
- [ ] Test case 2: Benefit calculation for client referral tier.
- [ ] Test case 3: Handling of expired/invalid referral codes.

### RBAC Middleware
- [ ] Test case 1: Redirect unauthenticated user to /login.
- [ ] Test case 2: Redirect Client trying to access /admin to /403.
- [ ] Test case 3: Allow Admin to access all dashboards (Global View).

## Integration Tests
**How do we test component interactions?**

- [ ] Successful scheduling flow (Client -> DB -> Lawyer Dashboard).
- [ ] Video session record & upload flow (Browser -> API -> Blob Storage).
- [ ] Partner dashboard population after a successful referral conversion.

## End-to-End Tests
**What user flows need validation?**

- [ ] Complete Journey: Client registers via Partner link -> Pays -> Schedules -> Lawyer Validates -> Admin Approves.

## Manual Testing
**What requires human validation?**

- **Video Quality**: Clarity of legal validation calls.
- **UI/UX Dashboards**: Clarity for users with less technical experience (e.g., Partners).
- **Mobile Compatibility**: Checking dashboard views on mobile devices.
