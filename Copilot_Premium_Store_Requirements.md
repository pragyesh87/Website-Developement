# Premium Merchandise Store — Copilot Development Specification
Version: 1.0 | 7 November 2026 | Owner: Pragyesh Shrivastava
Status: Proposed requirements; business rules marked provisional require owner approval.

## 1. Mission and boundaries
Build a real, premium, mobile-first Indian ecommerce application, not a visual-only prototype. Develop locally on a Mac first, with no live payments, messages or courier bookings. Later deploy to the owner's domain. Sell the owner's legally permitted merchandise; allow future categories and brands without rebuilding.
Use jockey.in as a reference for apparel navigation, filters, product variants, size selection, product storytelling, cart and pincode serviceability. Create an original identity and layout, not a pixel clone. Do not copy source code, logos, photography, descriptions or imply this is Jockey's official site. Only use approved supplier assets or owner-created licensed assets. Seller identity and approval records are launch gates.
Long-term group structure: main domain for an umbrella website; fashion.<owner-domain> for retail; consulting.<owner-domain> or a main-site services page later. Domains are placeholders, not purchased/configured resources. Do not share customer accounts, consent or money balances across independent businesses at launch.

## 2. Non-negotiable operating principles
- Owner controls repository, database, deployment, domain, payment merchant account and courier account.
- Prefer maintained open-source libraries and portable deployment; no required paid Shopify apps or mandatory proprietary SaaS.
- Do not promise zero recurring costs, guaranteed profit, immediate Google indexing or production security solely because code passes tests.
- No fake reviews, scarcity, customer counts, discounts, crossed-out prices or fabricated admin revenue.
- Use integer paise for INR money; defined line-level tax/discount rounding; never binary floats for ledger calculations.
- UTC timestamps in storage, Asia/Kolkata display, immutable order price/tax snapshots.
- No secrets in Git, browser bundles or logs. No real customer data in local fixtures.

## 3. Proposed stack and architecture
Decision proposal, not a claim that this is the only appropriate stack:
- TypeScript; Next.js App Router for server-rendered storefront, admin and server APIs.
- PostgreSQL for production and local development; Prisma migrations; Tailwind CSS and accessible UI components.
- PostgreSQL-backed jobs/outbox initially, avoiding Redis and a separate search service unless measurements justify them.
- PostgreSQL full-text/trigram search initially. Local filesystem media adapter in development; S3-compatible object storage adapter in production.
- Mature authentication library; verified email flow with local mail capture, secure sessions; add SMS only if approved. Admin MFA.
- Vitest unit/integration tests; Playwright browser tests; Docker Compose for local PostgreSQL, app and local mail service.
- Modular monolith: Catalog, Inventory, Pricing/Tax, Checkout, Orders, Payments, Shipping, Accounts, Credits, Promotions, Referrals, Content, Reporting.
- Provider interfaces for payment, shipping, email/SMS and storage, with deterministic local implementations.
- Persisted database is authoritative; localStorage is not an order database, authentication system or wallet ledger.
Before implementation, document dependency versions, maintenance/security status and license review. Prefer smallest maintained solution; use an established commerce core if architecture review shows materially lower risk, but avoid incompatible duplicate order engines.

## 4. Design direction
Modern premium apparel, not a cluttered discount marketplace. Warm white/ivory backgrounds, charcoal typography, restrained accent, generous spacing and consistent cards. Licensed or bundled fonts; strong contrast; modest animations respecting reduced-motion preference.
Mobile-first bottom sheets for filters, sticky product add-to-bag, clear size guide, nonintrusive cart drawer. Keyboard navigation, visible focus, readable errors, screen-reader labels and WCAG 2.2 AA target.
Deliver design tokens for colors, typography, spacing, radii, elevation and motion; reusable components and empty/loading/error states. Optimize imagery; reserve dimensions to avoid layout shifts. No autoplay video, flashing rewards or intrusive first-visit popup.
Review homepage, listing, product detail, checkout and account designs before full backend build. Placeholders must be clearly placeholders and replaceable through admin.

## 5. Page and navigation inventory
Public: homepage; gender/category collections; all products; search; brand collections; product detail; size/fit guides; wishlist; cart; checkout; payment result; track order; contact/help; about seller; delivery; returns/exchanges; privacy; terms; rewards/referrals terms; accessibility; editorial guides; 404/410 pages.
Account: overview, orders, order detail, invoice, tracking, return request, addresses, preferences, store-credit ledger, rewards pending/available, referrals, milestone progress, communication preferences, data requests and account security.
Admin: dashboard, catalog/variants/media, collections/content, inventory, import reconciliation, orders, returns/refunds, customers, reward settings, prepaid liabilities, promotions, referral review, shipping exceptions, tax settings, financial exports, audit log and staff roles.
Guest checkout supported; rewards attach to a verified account. Guest order access requires a secure single-use or expiring verification flow, not knowing an order number alone.

## 6. Catalog and variant requirements
Parent product plus variant per style/color/size/pack. Unique internal SKU, optional valid EAN, material code, brand, HSN, tax category, effective dates, supplier, purchase-cost basis, MRP, selling price and applicable restrictions.
Product content: title, slug, descriptions, fabric, fit, care, features, pack quantity, exact images by color, size chart, image rights/provenance, dimensions/weight, SEO fields and related products.
Separate retail pack from ordering box quantity and units of measure. Never multiply purchase quantities twice. Assorted packs must be honestly labelled; do not display a guaranteed color when contents vary.
Filters: gender, category, product type, size, color, price, fit, fabric, availability and approved collections. Product cards show real availability and price; variant selection drives correct imagery, stock, price and tax preview.
Product page: gallery/zoom, swatches, size selection, size guide, stock messaging, pincode estimate, price with tax disclosure, return eligibility, credit estimate, wishlist and approved recommendations. Do not preselect an unavailable size.
Bulk CSV/XLSX import: mapping preview, required-field validation, unit normalization, duplicates and conflict queue, dry-run report, reversible batch ID and provenance. Do not silently infer zero stock from absent rows. Preserve old codes with explicit mapping approval.

## 7. Inventory and offline-store integration
Stock movements per SKU/location: opening, receipt, sale, reservation, release, return inspection, damage and adjustment. Available-to-sell = sellable on hand minus active reservations and other allocations. Reserve atomically with expiry; release on unpaid cancellation/timeout.
Support CSV import from the physical store first. Store snapshot date/time and stale-data warning; block overselling-sensitive checkout when data freshness fails configured limits. Do not claim real-time POS sync until an actual integration exists.
Keep authoritative source and reconciliation rules explicit; maintain an online allocation/safety buffer when offline sales can happen between syncs. Multiple simultaneous buyers of last unit cannot both succeed.
Return stock becomes available only after inspection. Audit all manual adjustments with actor/reason; require elevated approval for large adjustments.

## 8. Pricing, GST and commercial calculation
Use effective-dated HSN/tax rules and confirmed taxable-value thresholds; seed current apparel 5%/18% rules only after review. Do not hardcode printed-MRP-only rate selection or apply today's rates retrospectively to historical invoices. Non-apparel categories require their own HSN review.
Store list price, customer discount, taxable value, shipping allocation, tax basis, output tax and cost/ITC eligibility separately. IGST versus CGST/SGST determined from actual supply facts and reviewed invoice logic.
Tax-inclusive selling price must be decomposed correctly. Vouchers, purchased credits and promotional discounts may have different accounting/tax treatment; require reviewed examples rather than generic subtraction.
Contribution = realized revenue excluding output tax - actual COGS excluding recoverable input tax - payment costs - shipping subsidy - packaging - promotions/referrals/reward costs - expected returns/chargebacks.
Do not treat GST as simply 5%/18% of profit. Do not treat customer top-ups as product revenue or multiply headline margin by all past sales and call it actual profit.
Persist order-level and line-level snapshots; issue invoice/credit-note exports with reviewed numbering and GST fields. Historical invoices remain unchanged after catalog-price edits.

## 9. Cart and checkout
Server recalculates all prices, discounts, taxes, reward eligibility, stock and shipping; never trust browser totals. Show subtotal, discounts, taxes included, shipping, principal-credit use, promotional-credit use and external balance clearly before payment.
Pincode and address validation; guest/account flow; explicit policy acknowledgment where required. Order creation and retry are idempotent. Prevent duplicate orders after refresh or double tap.
Configurable prepaid-only launch; COD disabled until approved. If COD enabled later, define fees, eligibility, verification, RTO costs and reward settlement.
Checkout reserves stock and credit atomically. On payment failure/expiry, release reservations safely. A late successful payment after stock expiry must enter a review/refund path, not create negative stock.

## 10. Payments and refunds
Integrate one owner-selected Indian gateway, e.g. Razorpay, behind a provider interface; this is a placeholder selection, not an account authorization. Hosted/provider-controlled payment fields only; never collect/store raw card numbers or CVV.
Separate local mock, provider sandbox and live credentials. Validate server-side signatures, webhook source/signature and payment amount/currency/merchant/order association. Browser redirect alone cannot mark an order paid.
Payment events: initiated, authorized, captured, failed, cancelled, partially refunded, refunded, disputed. Deduplicate webhooks, handle out-of-order events and retries, reconcile settlements and record fees/tax separately. Fulfillment occurs only under approved captured-payment rules.
Partial refunds must allocate item discounts, tax and payment tenders correctly. Return external principal via gateway/source as applicable, restore spent store credit according to original tender and reverse only the corresponding earned bonus. No forced promotional-credit refund for a gateway-paid purchase.
Split payment means part credit + part gateway, not arbitrary multiple gateway-card payments. Tests must cover webhook-before-redirect, timeout, duplicate capture event and refund retry.

## 11. Credits/wallet: separate principal from promotions
Customer UI may say Store Credit, with distinct balances: purchased principal, promotional bonus available, promotional bonus pending and refund credit. Each has explicit rules. No cash-out, peer transfer, interest promise or third-party spending.
Prototype paid top-ups locally; disable live paid top-ups by default until the owner obtains gateway approval and legal/tax review. Do not automatically extend the balance to future independent consulting or other businesses. Closed-loop scope depends on actual issuing entity and accepted services, not merely shared branding/domain.
Ledger: immutable balanced journal entries, journal ID, event/idempotency key, customer, balance bucket, debit/credit amount, source order/payment/refund, status and reversal link. Cached balance must reconcile to ledger; no editable balance field as source of truth. Handle concurrent debits with database transactions/locking. Daily reconciliation and admin liability export.
A principal top-up is a liability/funding event, not sales revenue. Promotional commitment is tracked separately; separate accounting views for accrued reward cost and redemption, avoiding double counting. Prevent negative available balances and enforce outstanding-balance/load/transaction caps approved for the launch.
Version policy terms and show customer acceptance. Account closure, disputes and source refunds follow reviewed rules; no blanket promise that all balances are non-refundable. No silent expiration or retroactive devaluation.

## 12. Proposed reward rules — configurable and require confirmation
Carry forward the owner's earlier preferences as editable draft defaults, not irrevocable commitments:
- Purchase reward: 5% of eligible merchandise value excluding GST, after discounts, on orders meeting an INR 2,500 minimum. Owner must confirm whether threshold itself is inclusive or exclusive of GST; live feature stays off until set.
- Eligible reward base excludes shipping, tax, top-ups, cancellations, returns and the portion paid with promotional credits. Prevent spending bonus from earning bonus again. Principal-credit-funded purchases may earn if policy allows and contribution limits pass.
- Standard items: pending until delivery plus the configured return window, initially 7 days only if final approved policy permits. Non-returnable hygiene items: eligible on delivery, subject to defective/wrong-item and statutory remedies. Rules are line-level for mixed orders.
- Pending credits release by a durable job. Partial returns reverse proportionately; do not erase unrelated credits. If a previously spent award must be reversed, use a disclosed recovery/debt review policy, never create an unauthorized charge.
- Earlier preference: no expiry on reward credit. Preserve this default unless owner changes before accepting customers; never introduce expiry retroactively.
- Top-up promotion draft: 3% extra promotional credit for approved funding methods, e.g. 1,000 principal + 30 bonus. Method eligibility comes from verified gateway data or audited cash receipt, not browser input.
- Paid top-up bonuses become available only after verified funding and risk checks. Cash loads require staff receipt, audit and appropriate approval.
- Do not award ordinary purchase rewards when buying credit; top-up is not a merchandise sale.
- Prevent recursive top-ups, credit-to-credit loading, bonus withdrawal and top-up/refund bonus arbitrage.
Configurable bonus redemption cap, item exclusions, minimum external contribution, per-user/campaign budget and combination policy. Proposed cap such as 20% is a design option requiring approval, not an assumed owner rule. Publish restrictions before funding or earning.

## 13. Referrals, redemption codes and milestones
Referrals: unique account-linked code; configurable first-order incentive for friend and referrer, disabled until amounts/budgets approved. Qualifying referred purchase must be delivered, meet net eligible minimum and survive return window. No self-referrals or top-up-only qualification. Duplicate address/device signals trigger review rather than automatically blocking genuine households; collect proportionate data.
Use unique constraints for one award per qualifying event. Refund/cancellation proportionately reverses associated qualification/credit under published terms. Audit overrides and referral fraud decisions.
Coupons: fixed/percentage/free-shipping types; user eligibility, product exclusions, min/max spend, caps, expiry, total/per-customer limits, combination rules, audit history and unguessable private codes. Server enforces usage atomically.
Lifetime qualifying spend: delivered retained merchandise value excluding GST after discounts; exclude top-ups, shipping and returns. Prevent counting imported duplicate bills. Show pending and confirmed progress separately. Historical physical-store purchases require verified customer mapping and consent, not phone-number-only automatic account ownership.
Milestone engine: configurable thresholds including INR 100,000. Guaranteed credit/gift options initially; repeatable or once-only behavior explicit. Snapshot policy at qualification; unique customer+milestone+cycle event. Partial return can move progress back; published reversal policy handles issued benefit without repeated awards. Random spin-wheel mechanics are out of scope until separately reviewed and approved.

## 14. Profitability guardrails
No promise that loyalty is automatically profitable. Simulate full redemption, 5% purchase reward, 3% top-up bonus where applicable, referral subsidy, coupons, gateway fees and shipping before enabling a campaign.
Admin defines minimum contribution threshold and per-campaign/customer budgets. Include estimated liabilities in campaign economics; reward stacking cannot silently bypass limits. Warn or block new offers below limits; do not withdraw already-promised customer benefits retroactively.
Provide clear examples with real tax/cost inputs; 5% reward on pre-tax eligible value is not identical to 5% of tax-inclusive MRP. The store's earlier approximate 26.9% contribution was before ecommerce fulfillment, rewards and additional costs; never use it as a guaranteed online net margin.

## 15. Customer account and privacy
Detailed but proportionate profile: verified identifiers, addresses, optional preferences/size notes, order history, invoices, returns, credit ledger, referral status and lifetime progress. Birthday optional with explicit purpose. Do not request Aadhaar, card data or unnecessary sensitive identity details.
Separate transactional notices from optional marketing consent; capture consent provenance, support unsubscribe and preference changes. No automatic marketing opt-in.
Document retention, deletion/export requests and required accounting-record retention. Server enforces object-level authorization; one customer cannot fetch another's addresses/orders/ledger. Redact personal information in logs and support views. Cross-service profile sharing requires a separate future decision.

## 16. Shipping and returns
One selected provider/aggregator adapter; examples Shiprocket or direct courier, selection pending. Pincode serviceability, rate/ETA lookup, package weights, label generation, AWB, pickup, tracking and delivery updates.
Server verifies webhook signatures or uses supported authentication; rejects unauthorized events, deduplicates and handles stale/out-of-order status. Only trusted delivery events release rewards.
States for NDR, RTO, lost, damaged and partial shipments; configurable manual review and customer notifications. Return/exchange approval with eligibility by SKU, reason/photos where appropriate, inspection, restock/scrap and financial/reward reversal. Replacements linked to original order; no double counting revenue or loyalty spend.
Shipping failures must not lose paid orders. Queue retries and expose an operations worklist.

## 17. SEO and discovery requirements
Indexable product/category content must be server-rendered and readable without client execution. Unique stable URLs, descriptive titles/meta, canonical tags, proper 200/301/404/410 statuses, semantic headings, descriptive alt text and internal links.
Publish event: validate required product data, commit DB changes, invalidate relevant caches, update sitemap entry/lastmod, update collection links and queue Merchant Center feed export. Target immediate public availability of published content; Google indexing speed is not an acceptance guarantee.
Dynamic XML sitemaps, robots.txt, Product/ProductGroup/Offer and BreadcrumbList structured data matching visible content and actual availability; real reviews only. Generate validated feed with price/stock/tax/shipping consistency.
Use actual Search Console ownership verification after launch; staged noindex removed only on approved production. Do not use Google's general Indexing API as a product-indexing shortcut.
Prevent indexing account/cart/checkout/admin, internal search and uncontrolled filter combinations. Use canonical/noindex strategy without blocking crawlers from seeing needed noindex directives. Protect nonpublic systems with authentication, not robots alone.
Temporary out-of-stock pages stay useful and truthful; permanent discontinuations reviewed for replacement redirect or 410, not redirected en masse to homepage. Slug-change history creates 301 redirects. No false ratings/schema or thin duplicate AI-generated pages.
Offline/staging has authentication and noindex; nothing should be expected to index before public launch.
Performance targets under a documented mobile test: LCP <=2.5s, INP <=200ms, CLS <=0.1 at p75 once real-user data exists. Lab checks are development proxies, not invented field results.

## 18. Administration and reporting
Roles: owner, catalog editor, fulfillment, customer support and finance. Least privilege; support cannot issue arbitrary credits or export the full database. Owner MFA; sensitive actions audited and optionally require second approval.
Reports: realized revenue/tax, COGS, gateway fees, shipping, returns, coupons, reward obligations, referral cost and contribution; distinguish estimates from actuals. Customer balances and liabilities reconcile to ledger. Cash-flow view separates top-ups, sales, refunds and settlement timing.
Inventory sell-through, stock age from receipts, contribution by SKU, size gaps, reorder suggestions with stated assumptions. No guessed profitability if unit costs are missing. Customer lifetime spend distinct from lifetime contribution/CLV estimates.
Exports CSV/XLSX with date/time basis, permissions and audit. Do not import unrelated customer personal data by default.

## 19. Security, reliability and data operations
Secure HttpOnly cookies, CSRF protection where applicable, input/schema validation, parameterized database access, output escaping, rate limits, secure headers and file-upload content/size checks. Admin files private; product media public only after validation. Dependency scanning and secret scanning in CI.
Idempotent financial actions, append-only audit, database constraints and transactional outbox prevent duplicate credits, overselling and lost jobs. Rate-limit login, coupon enumeration, referrals and top-up attempts.
Backup database and media to a separate location; proposed daily backup and 30-day retention, with RPO/RTO approved by owner. Demonstrate restoration before live money. Restore tests include order/payment/wallet reconciliation. Document single-server outage risk and scaling upgrade path.
Monitor failed jobs, payment mismatch, oversold stock, duplicate events, ledger imbalance, backup failure and webhook errors. Alert provider adapter and budget limits, no mandatory paid monitoring SaaS.

## 20. Local/offline-first development
Interpret offline as localhost development, not a POS app processing real payments without internet. After dependency installation, core demos run without external APIs: mock gateway/shipping, local email, seeded assets and deterministic test data.
README includes Mac prerequisites, environment template, install, migration, seed, local start, tests and reset. Docker Compose plus documented development command; one clean-machine walkthrough must succeed. Distinct production and mock secrets; mock payments must be impossible in production.
Seed diverse products: single/assorted packs, multiple colors/sizes, out-of-stock, low stock, 5% and reviewed 18% tax examples, non-returnable and returnable items. Demo customers, failed/delivered/returned orders, all credit buckets, referral and milestone examples.
Production build check in CI. Never mark providers integrated based only on fake success screens.

## 21. Acceptance tests and launch gates
A. Browse/search/filter and select correct variant on mobile and desktop; accessible keyboard checkout.
B. Two customers race for last stock unit: at most one confirmed allocation.
C. Tampered browser price/coupon/tax rejected; all authoritative math server-side.
D. Repeated payment webhook causes one payment posting, one stock deduction and one award.
E. Delayed successful payment after reservation expiry enters review without overselling.
F. 1,000 top-up posts 1,000 principal +30 bonus only once when approved, never as product revenue; no cash-out path.
G. Mixed returnable/non-returnable order releases reward at correct line-level times; partial returns and split-tender refunds conserve money and reverse only corresponding benefits.
H. Two simultaneous credit spends cannot exceed available balance; ledger reconciles after retry/refund.
I. Self-referral blocked/reviewed; legitimate duplicate household handled fairly; one qualifying milestone award per cycle.
J. Product publication updates public page, canonical, sitemap and feed; no promise of immediate Google inclusion.
K. Customer cannot view another's data; unauthorized staff cannot change prices/credits or export customers.
L. Live gateway sandbox end-to-end, signature failure tests, courier sandbox/manual fallback and backup-restore pass before production keys.
M. Financial test fixtures with explicit rounding reconcile invoice, principal, promotional credit, gateway payment, refund and ledger totals to the paise.
N. Unmatched CSV products or absent snapshot rows cannot silently become zero inventory; import approval audit works.
O. Profitability guardrail prevents an unapproved stacked campaign; existing promised credits still honored.
Launch requires owner approval of brand selling rights/assets, legal entity/policies, tax rules, reward terms, gateway/top-up approval, security review, restore drill and real support/refund workflow. No launch triggered by deployment alone.

## 22. Build sequence and deliverables
Phase 0: decision register, data model, threat model, financial examples, design system and dependency/license list.
Phase 1: local storefront, catalog, inventory, CSV import, admin and simulated checkout with tests.
Phase 2: accounts, orders, real ledger, promotional rewards, coupons, referrals and guaranteed milestones in local mode.
Phase 3: gateway and shipping sandbox, partial refunds, transactional notices, SEO feeds and reporting.
Phase 4: paid principal/top-up flow behind flags after approvals; staging, security/performance/accessibility and restore checks.
Phase 5: limited live pilot, daily reconciliation, monitoring and controlled roll-out. No automatic bulk messaging or campaign spend.
Deliver source, migrations, seed, env example, API contract, architecture/schema diagrams, test suite, CI, import templates, Dockerfiles, operations/backup/rollback guides, campaign simulation, provider cost inventory and admin manual. Every feature has status: implemented/tested, mock/local only, blocked by decision, or future. Never describe a placeholder as finished.

## 23. Recurring-cost discipline
Report required versus optional costs without inventing quotes: domain renewal, hosting, database/media backup, transactional email/SMS, payment fees, courier charges and software/security maintenance. Free tiers require commercial-use/limit review and a documented exit path. No paid service sign-up, subscription, cloud deployment, courier booking or real financial transaction without approval.
Self-hosting can reduce app subscriptions but creates maintenance responsibility; zero recurring expense is not a production requirement. Keep an upgrade plan rather than designing distributed microservices prematurely.

## 24. Copilot execution instruction
Act as senior full-stack architect, commerce engineer, UX designer and QA engineer. Read this specification and create a numbered implementation backlog. First return proposed architecture, schema, policy ambiguities and phase-one acceptance plan. Do not ask me to approve every small coding choice; choose conservative documented defaults for reversible technical decisions. Block live financial/legal policy decisions until approved.
Implement one reviewable phase/PR at a time with tests and migration notes. Do not overwrite existing work, expose secrets, scrape assets, deploy live or change production data without explicit approval. Start with Phase 0 and Phase 1 only. For every PR include screenshots, test results, limitations and exact next steps. Do not claim the complete commerce platform is finished until acceptance tests are demonstrably passed.

## Evidence informing this brief
- Jockey reference storefront: https://www.jockey.in (retrieved 7 November 2026; text inspection only, not a full screenshot/accessibility audit).
- Google merchant listing guidance: https://developers.google.com/search/docs/appearance/structured-data/merchant-listing
- Google product data guidance: https://developers.google.com/search/docs/specialty/ecommerce/share-your-product-data-with-google
- RBI PPI master directions: https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12156
These inform constraints, not a certification of legal compliance. Proposed technical/policy requirements are design recommendations, not claims about implemented software.
