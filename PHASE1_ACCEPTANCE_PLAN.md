# Phase 1 Acceptance Plan (Local Mode)

## Objective
Deliver a testable local ecommerce foundation for storefront + catalog + inventory + simulated checkout.

## Functional acceptance
1. Catalog browse
- Collection pages load server-side with filters: gender/category/size/color/price/availability.
- Product cards reflect real variant availability and selling price.

2. Product detail behavior
- Variant selection updates images, stock and tax-inclusive price preview.
- Unavailable size is never preselected.

3. Inventory correctness
- `available_to_sell = sellable_on_hand - active_reservations - allocations`.
- Reservation expiry releases inventory automatically.

4. CSV import safety
- Dry-run report with required-field and duplicate checks.
- Unmatched rows do not silently set inventory to zero.

5. Cart and checkout simulation
- Server recalculates totals and tax on each mutation.
- Tampered client values rejected.
- Idempotent order placement key prevents duplicate order creation.

6. Inventory Excel sync workflow
- Admin uploads `.xlsx/.csv` inventory feed.
- Supplier names/categories are resolved through explicit mapping table.
- Unmapped rows are queued for resolution and do not auto-zero stock.
- Approved sync updates quantity snapshot atomically and writes audit logs.

7. Admin approval controls
- Coupon redemptions can be configured as auto-approved or manual-review.
- Manual customer credit changes require reason code and privileged role.
- Return requests require review outcome and stock disposition decision.

8. Analytics and reporting baseline
- Landing events capture geo at country/state/city level (privacy-safe).
- Dashboard shows visits, item-level sales, purchase amount and lifetime billing.
- Metrics are date-range filterable and exportable by authorized staff.

## Non-functional acceptance
9. Accessibility baseline
- Keyboard navigation for listing/PDP/cart/checkout.
- Visible focus + labels + meaningful form errors.

10. Money and rounding
- All monetary values as integer paise.
- Deterministic line-level rounding tests.

11. Observability and audit
- Order/status events persisted.
- Import approvals and inventory adjustments audited with actor/reason.
- Coupon/credit/return approvals audited with before/after snapshots.

## Automated test targets
- Unit: tax/discount decomposition engine and ATS calculations.
- Integration: reservation concurrency and idempotent order create.
- Integration: inventory sync idempotency + mapping mismatch behavior.
- Integration: approval RBAC for coupons/credits/returns.
- E2E: browse -> PDP variant -> cart -> simulated checkout -> order confirm.
- E2E: admin upload inventory -> resolve mapping -> approve -> quantity update.

## Exit criteria for Phase 1
- All above tests pass in CI.
- Seed data includes low stock, OOS, mixed tax categories and assorted-pack examples.
- Seed data includes supplier-name mismatches and mapping-resolution examples.
- README can bootstrap on clean macOS machine.
