# Check-in timezone rules

The dashboard should display check-in dates in the user’s selected timezone. Store event timestamps in UTC, convert them only at the presentation boundary, and use the same timezone for day boundaries, streak calculations, and weekly summaries.

## Acceptance criteria

- A check-in near midnight is assigned to the correct local day.
- Exported timestamps remain unambiguous ISO 8601 values.
- The selected timezone is visible wherever a date range is shown.
