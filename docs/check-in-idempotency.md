# Check-in idempotency

A check-in represents one habit completion for one calendar date.

- The stable identity is the pair of habit ID and local calendar date.
- Repeating the same submission must leave the stored completion count unchanged.
- The UI should acknowledge an existing completion instead of showing a second success event.
- Imports should use the same identity rule before merging records.

This keeps retries safe when a user refreshes or submits from a slow connection.