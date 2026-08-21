# Focus session model

A focus session records intentional time spent on a habit. The minimum fields are:

```json
{"habitId":"morning-walk","startedAt":"2026-08-21T08:00:00Z","endedAt":"2026-08-21T08:25:00Z","minutes":25}
```

`minutes` is derived from the timestamps and should be capped at 24 hours to prevent malformed imports from inflating dashboard metrics.