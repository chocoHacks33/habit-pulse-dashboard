# History pagination

History views should load the newest page first and request older records with an exclusive cursor. The cursor must encode the last record’s stable timestamp and identifier so records with equal timestamps are not skipped or duplicated.

## Acceptance criteria

- Loading another page preserves the current sort order.
- Repeated requests with the same cursor are idempotent.
- An empty page ends pagination cleanly.
