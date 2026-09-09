# Export filename convention

Generated exports use `habit-pulse-<range>-<date>.csv`, where `<range>` is `daily`, `weekly`, or `custom`, and `<date>` is the local export date in `YYYY-MM-DD` format. User-provided labels must be sanitized before becoming filenames.

## Acceptance criteria

- Filenames are stable for the same range and export date.
- Path separators and control characters are removed.
- The file extension remains `.csv`.
