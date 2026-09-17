# Export Integrity Checks

Exports should be self-describing and safe to re-import.

## Checks before download

- Include a schema version and generated-at timestamp.
- Preserve stable habit identifiers and ISO dates.
- Emit explicit empty values instead of shifting columns.
- Verify that every check-in references an exported habit.

The download action should surface a clear error if validation fails.