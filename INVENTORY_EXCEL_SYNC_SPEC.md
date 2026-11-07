# Inventory Excel Sync Specification (Admin)

## Goal
Update website stock from periodic physical-store Excel files even when source names/categories differ from website naming.

## Accepted files
- `.xlsx` (primary)
- `.csv` (fallback)

## Required columns in source feed
- `source_product_name`
- `source_category`
- `source_sku` (if available)
- `quantity_available`
- `snapshot_at` (optional; defaults to upload time)

## Mapping strategy
1. Direct match by `source_sku` if present and mapped.
2. Otherwise map by (`source_product_name`, `source_category`) via `InventorySourceMap`.
3. If multiple internal matches: mark row as conflict.
4. If no match: mark row as unmapped; do not apply quantity.

## Admin workflow
1. Upload file in Admin > Inventory Sync.
2. System creates `InventorySyncBatch` and parses rows.
3. Dry-run shows:
   - matched rows
   - unmapped rows
   - conflicts
   - invalid quantities
4. Admin resolves unmapped/conflict rows by selecting internal SKU.
5. Admin approves batch.
6. System applies approved rows atomically:
   - writes `InventorySnapshot`
   - writes `InventoryMovement` adjustment with reason `SYNC_BATCH`
   - updates sellable quantity
7. Batch status becomes `APPLIED` with summary and actor audit.

## Safety rules
- Missing product rows in source file must not auto-zero inventory.
- Negative quantity rejected unless explicit adjustment mode is enabled.
- Duplicate source rows for same key in one batch are blocked.
- Re-applying same batch ID is idempotent (no double application).
- If feed is stale beyond policy, checkout can be restricted by guardrail.

## Scheduling
- Manual trigger always available.
- Optional scheduled sync frequency: every 24h (default draft).
- Alert on failed sync or stale snapshot threshold breach.

## Data structures (logical)
- `InventorySourceMap(id, sourceSku, sourceName, sourceCategory, internalVariantId, status)`
- `InventorySyncBatch(id, fileName, checksum, uploadedBy, uploadedAt, status)`
- `InventorySyncRow(id, batchId, sourceFields..., mappedVariantId, proposedQty, status, issueCode)`
- `InventorySnapshot(id, variantId, locationId, qty, snapshotAt, sourceBatchId)`

## Acceptance checks
- Unmapped rows never change inventory.
- Approved rows update ATS correctly.
- Concurrent uploads do not cause double-apply.
- Full batch audit available for finance/support review.
