# Phase 0 — Proposed Architecture (v0.1)

## 1) Scope now
This proposal covers Phase 0 and Phase 1 only:
- Local-first development
- Storefront + catalog + inventory import + admin + simulated checkout
- No live payment/courier/production deployment

## 2) Baseline stack
- Runtime: Node.js 22 LTS
- Language: TypeScript 5.x
- Framework: Next.js 15 (App Router)
- UI: Tailwind CSS + Radix primitives + custom accessible components
- DB: PostgreSQL 16
- ORM: Prisma 6
- Validation: Zod
- Auth: Auth.js (email/password + email verification, local mail capture)
- Testing: Vitest + Playwright
- Local infra: Docker Compose (app + postgres + mailhog)

## 3) Monolith module boundaries
- `catalog`: products, variants, media, attributes, collections
- `inventory`: stock snapshots, movements, reservations
- `inventory-sync`: Excel ingestion, mapping, dry-run, approvals, reconciliation jobs
- `pricing-tax`: price books, tax categories, line-calculation engine (paise)
- `checkout`: cart, address, shipping estimate (mock), order draft
- `orders`: immutable order snapshots, status timeline
- `accounts`: customer profile, addresses, preferences, auth
- `promotions`: coupons, usage policy, approval workflows, audit
- `returns`: return requests, review outcomes, restock/scrap decisions
- `credits`: manual credits/debits with maker-checker approval
- `analytics`: geo landing metrics, sales/LTV rollups, cohort reporting
- `content`: homepage/collection banners and static CMS blocks
- `admin`: catalog + inventory + imports + order operations

## 4) Key design rules
- Integer paise everywhere for money
- UTC in DB, Asia/Kolkata formatting in UI
- Server-authoritative cart totals; browser totals are display only
- No secrets in repo/logs/client bundles
- Idempotent writes for order placement and reservation calls

## 5) Data model (high-level)
Core entities for Phase 1:
- `Product`, `ProductVariant`, `ProductMedia`, `Collection`, `CollectionItem`
- `InventoryLocation`, `InventoryMovement`, `InventoryReservation`
- `InventorySourceMap` (supplier name/category -> internal SKU/category)
- `InventorySnapshot`, `InventorySyncBatch`, `InventorySyncRow`, `InventorySyncIssue`
- `TaxCategory`, `PriceList`, `PriceListItem`
- `Customer`, `Address`, `Session`
- `Cart`, `CartLine`
- `Order`, `OrderLine`, `OrderTaxSnapshot`, `OrderStatusEvent`
- `ImportBatch`, `ImportRow`, `ImportIssue`
- `Coupon`, `CouponRedemption`, `CouponApproval`
- `StoreCreditLedger`, `StoreCreditApproval`
- `ReturnRequest`, `ReturnReview`, `ReturnDisposition`
- `GeoVisitEvent`, `SalesFactDaily`, `CustomerLtvSnapshot`

## 6) Local provider interfaces
- `PaymentProvider`: mock only in Phase 1
- `ShippingProvider`: pincode/rate ETA mock only
- `MailProvider`: MailHog SMTP local
- `StorageProvider`: local filesystem adapter

## 7) Suggested repository layout
- `apps/web` Next.js storefront + account + admin routes
- `packages/domain` business rules/calculation engines
- `packages/db` Prisma schema + migrations + seed
- `packages/test` shared fixtures and helpers

## 8) Initial security posture
- HttpOnly secure cookies in non-local env
- CSRF on state-changing routes
- Zod validation on all API payloads
- Role checks in server actions/API routes
- Rate limits for auth and coupon-like endpoints

## 9) Delivery checkpoints
- C0: project bootstrap, docker, lint/test pipeline
- C1: catalog schema + admin CRUD + seeded data
- C2: listing/PDP variant selection and stock visibility
- C3: cart + server recalculation + tax snapshots
- C4: import pipeline dry-run + approval + inventory write
- C5: simulated checkout + order creation + reservation handling
- C6: Excel inventory sync with mapping + mismatch queue + stale-feed guardrail
- C7: admin approval rules for coupons/manual credits/returns with audit trail
- C8: analytics dashboard for geo traffic, item sales, AOV and lifetime billing
