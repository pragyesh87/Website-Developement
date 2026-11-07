# Decision Register (Initial)

| ID | Decision | Default | Status | Reversible |
|---|---|---|---|---|
| D-001 | Framework | Next.js App Router | Proposed | Medium |
| D-002 | DB | PostgreSQL 16 + Prisma | Proposed | Low |
| D-003 | Money storage | Integer paise | Locked | No |
| D-004 | Time standard | UTC storage + IST display | Locked | No |
| D-005 | Auth | Auth.js with email verify | Proposed | Medium |
| D-006 | Payment integration | Mock only in Phase 1 | Locked | Yes |
| D-007 | Shipping integration | Mock only in Phase 1 | Locked | Yes |
| D-008 | Search | PostgreSQL text/trigram initial | Proposed | Yes |
| D-009 | Media storage local dev | Filesystem adapter | Proposed | Yes |
| D-010 | Top-up flow | Feature flagged OFF | Locked | Yes |
| D-011 | COD at launch | Disabled | Proposed | Yes |
| D-012 | Rewards | Configurable draft rules only | Locked | Yes |
| D-013 | Inventory sync format | `.xlsx` primary + `.csv` fallback | Proposed | Yes |
| D-014 | Inventory mapping | Explicit source-to-internal mapping table | Locked | No |
| D-015 | Sync apply mode | Approval-gated atomic batch apply | Locked | No |
| D-016 | Admin credit controls | Maker-checker + reason code mandatory | Proposed | Yes |
| D-017 | Return controls | Manual approval with disposition states | Proposed | Yes |
| D-018 | Geo analytics granularity | Country/state/city (no precise GPS) | Proposed | Yes |
| D-019 | LTV calculation basis | Delivered retained merchandise value | Proposed | Yes |

## Notes
- Any legal/financial policy in `POLICY_AMBIGUITIES.md` remains blocked until explicit owner approval.
- Technical defaults may proceed if reversible and documented.
