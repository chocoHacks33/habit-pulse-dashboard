# Weekly Rollup Boundaries

Weekly metrics group check-ins using the configured week start, not the browser's locale defaults.

## Boundary rules

- A check-in exactly at the start boundary belongs to the new week.
- A check-in exactly at the end boundary belongs to the prior week only when its timestamp is before the next boundary.
- Convert timestamps to the dashboard timezone before deriving the calendar date.
- Empty weeks remain represented with zero values so charts do not imply missing data.

These rules keep totals, streaks, and trend points consistent.