# Document export date format

Exports use ISO calendar dates in UTC-independent form (YYYY-MM-DD) and reserve an empty value for an unknown date rather than inventing a local timezone.

## Review notes

- Confirm the behavior is represented in the UI or data contract.
- Keep empty and error states explicit.
- Add a focused test when this rule becomes executable.
