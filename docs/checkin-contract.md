# Check-in Event Contract

A check-in records one habit completion for one calendar day.

## Required fields

- `habitId`: stable habit identifier.
- `date`: local calendar date in `YYYY-MM-DD`.
- `completed`: boolean completion state.

Dates should be interpreted in the user's local timezone. Repeated submissions for the same habit and date should replace the prior state rather than create duplicate history rows.
