# Import Preview Validation

The import preview is a safety boundary before records enter the local habit store.

## Required checks

- Show the number of rows detected and the number that can be imported.
- Identify missing habit names, invalid dates, and duplicate check-ins by row.
- Keep rejected rows visible so the user can correct the source file.
- Do not write any data until the user confirms the preview.

## Confirmation contract

Confirmation should report the final accepted and skipped counts and preserve the original file name for audit context.