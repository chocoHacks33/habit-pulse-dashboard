# Activity log schema

The dashboard records one event per habit completion.

| Field | Type | Meaning |
|---|---|---|
| `habitId` | string | Stable habit identifier. |
| `completedOn` | `YYYY-MM-DD` | Local calendar date of completion. |
| `source` | `manual` \| `import` | How the event entered the dashboard. |
| `recordedAt` | ISO timestamp | When the event was saved. |

Dates are local-day values; consumers must not convert `completedOn` through UTC.