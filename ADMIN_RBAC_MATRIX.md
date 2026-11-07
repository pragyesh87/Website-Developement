# Admin RBAC Matrix (Draft)

| Action | Support | Fulfillment | Catalog Editor | Finance | Owner |
|---|---|---|---|---|---|
| Upload inventory file | ✅ | ✅ | ✅ | ✅ | ✅ |
| Resolve mapping conflicts | ❌ | ✅ | ✅ | ✅ | ✅ |
| Approve inventory sync batch | ❌ | ✅ | ❌ | ✅ | ✅ |
| Create coupon policy | ❌ | ❌ | ✅ | ✅ | ✅ |
| Approve manual coupon redemption | ✅ | ❌ | ❌ | ✅ | ✅ |
| Create customer credit request | ✅ | ❌ | ❌ | ✅ | ✅ |
| Approve credit > threshold | ❌ | ❌ | ❌ | ✅ | ✅ |
| Approve return request | ✅ | ✅ | ❌ | ✅ | ✅ |
| Mark returned item as restock/scrap | ❌ | ✅ | ❌ | ✅ | ✅ |
| Export customer LTV report | ❌ | ❌ | ❌ | ✅ | ✅ |
| Override blocked action | ❌ | ❌ | ❌ | ❌ | ✅ |

## Notes
- High-risk actions must write immutable audit entries.
- Thresholds for maker-checker approvals are policy-configurable.
- Owner MFA is mandatory for override actions.
