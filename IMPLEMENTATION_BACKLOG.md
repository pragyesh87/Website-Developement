# Numbered Implementation Backlog (Phase 0 & 1)

## Phase 0 — foundation and decisions
1. Create decision register + assumptions log.
2. Finalize dependency/license/security baseline list.
3. Define design tokens (color/typography/spacing/radius/motion).
4. Draft architecture and module boundaries.
5. Draft ERD and money/tax rounding conventions.
6. Create threat model and sensitive-data flow map.
7. Define policy flags (rewards/top-up/COD/referrals).
8. Define acceptance matrix + traceability to requirements.
9. Write clean-machine local bootstrap checklist.

## Phase 1 — local storefront + operations core
10. Bootstrap monorepo (apps/web + packages/domain/db/test).
11. Setup Docker Compose (postgres + mailhog + app profile).
12. Implement Prisma schema and initial migrations.
13. Seed catalog/inventory/tax demo fixtures.
14. Build admin catalog CRUD (product/variant/media/collections).
15. Build listing/search/filter pages with SSR.
16. Build PDP with variant-aware media/price/stock.
17. Implement cart service with server-side recalculation.
18. Implement inventory reservations with expiry worker.
19. Implement simulated checkout + order snapshot persistence.
20. Implement CSV import dry-run/approve/reconcile flow.
21. Add role-based access for owner/editor/fulfillment/support.
22. Add audit logs for inventory/manual admin actions.
23. Add unit/integration tests for money/tax/inventory logic.
24. Add Playwright E2E journey for checkout simulation.
25. Publish Phase 1 report: screenshots, test output, known limits.
26. Build inventory source-mapping table (supplier name/category to internal SKU/category).
27. Add Excel upload parser (.xlsx/.csv), template validation and dry-run mismatch report.
28. Implement approval queue for inventory sync batches (review -> approve -> apply).
29. Add scheduled/manual sync jobs with snapshot timestamp and stale-data guardrail.
30. Add admin coupon redemption review rules (auto, manual, blocked states).
31. Add maker-checker workflow for manual customer credits/debits with reason codes.
32. Add return approval workflow (requested -> approved/rejected -> inspected -> restock/scrap).
33. Add per-customer control panel actions: credit adjustment, coupon override, return decision.
34. Build analytics event capture for geo landing (country/state/city) with privacy-safe IP handling.
35. Build daily marts for item sales, AOV, repeat rate, and lifetime billing.
36. Create admin dashboards for geo traffic, top items, cohort spend, and customer LTV.
37. Add RBAC permissions for finance/support/ops approvals and export actions.
38. Add automated tests for idempotent sync application and approval authorization boundaries.

## Out of scope for now
- Live gateway, live courier booking, paid top-up production flow, mass campaigns.
