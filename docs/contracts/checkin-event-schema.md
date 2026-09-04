# Check-in event schema

A check-in event contains `habitId`, `date`, and `completed`. `date` uses `YYYY-MM-DD` and `completed` is a boolean. Producers should preserve the original habit identifier and reject unknown fields at import boundaries.
