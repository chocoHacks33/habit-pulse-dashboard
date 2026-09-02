# Import Error Guidance

CSV import errors should identify the row and the recovery action.

- Missing `habitId`: “Row N needs a habit ID.”
- Invalid date: “Row N uses a date like YYYY-MM-DD.”
- Invalid completion value: “Row N must use true or false for completion.”
- Duplicate date: “Row N repeats an existing check-in; keep the latest row.”

Do not expose raw parser stack traces in the dashboard.
