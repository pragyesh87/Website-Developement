# Admin Rules + Analytics Specification

## 1) Coupon redemption approvals

### Coupon policy modes
- `AUTO_APPROVE`: redeem instantly if eligibility passes.
- `MANUAL_APPROVE`: hold redemption as `PENDING_REVIEW`.
- `BLOCKED`: always reject.

### Rule inputs
- customer risk score (optional draft)
- order value threshold
- first-order only / repeat customers
- category exclusions
- per-customer usage cap

### Admin actions
- Approve
- Reject with reason
- Force allow (owner/finance role only)

### Audit requirements
- actor, timestamp, before/after state, reason note, linked order/cart

## 2) Manual credits per customer

### Credit types
- goodwill credit
- service recovery credit
- promo adjustment
- debit correction (privileged)

### Control model
- maker-checker for adjustments above threshold
- mandatory reason code
- optional note visible to customer
- immutable ledger entry; no direct balance overwrite

### Permissions
- support: draft request
- finance: approve/reject
- owner: override with mandatory comment

## 3) Return approval workflow

### States
`REQUESTED -> UNDER_REVIEW -> APPROVED|REJECTED -> RECEIVED -> INSPECTED -> RESTOCKED|SCRAPPED -> REFUNDED`

### Rules
- eligibility by SKU/category and delivery date
- non-returnable items route to exception policy only
- photo requirement configurable by reason
- inventory released only on inspection + restock decision

## 4) Analytics and monitoring

### Geo landing metrics
- capture: country, state, city, device class, referrer, campaign tags
- source: privacy-safe IP geolocation + request metadata
- no precise GPS collection by default

### Commerce metrics
- visits
- conversion rate
- AOV (average order value)
- item-level units/revenue
- repeat purchase rate
- lifetime billing per customer

### Dashboards (admin)
- Geo traffic heat table (country/state/city)
- Top products by units/revenue
- Customer spend ranking and LTV segments
- Coupon approval/rejection trends
- Returns approval and disposition trends

### Privacy controls
- aggregate analytics by default
- role-restricted access to customer-level data
- configurable retention and export audit log

## 5) Suggested DB extensions
- `CouponApproval`
- `StoreCreditApproval`
- `ReturnReview`
- `GeoVisitEvent`
- `CustomerLtvSnapshot`
- `AnalyticsDailyFact`

## 6) Minimum test matrix
- unauthorized user cannot approve credits/coupons/returns
- one coupon approval event per request (idempotent)
- return approval does not auto-restock without inspection
- geo events aggregate correctly by city/state/country
- lifetime billing excludes cancelled/refunded merchandise
