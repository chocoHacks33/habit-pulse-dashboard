# Weekly rollup semantics

Weekly metrics summarize daily records using the dashboard's configured week start.

- A record belongs to the week containing its local calendar date.
- Completion rate uses eligible habit-day opportunities as the denominator.
- Empty weeks remain representable so charts do not silently compress time.
- The displayed range is inclusive of both boundary dates.

Rollups should be deterministic for the same records and week-start setting.