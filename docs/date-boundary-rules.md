# Date Boundary Rules

Habit completion dates are interpreted in the user's local calendar day. Weekly summaries use an explicit `weekStart` value rather than the browser's implicit timezone conversion.

When a week crosses a month or year boundary, labels should use the start and end dates so the range remains unambiguous. A configured Monday week start must not silently change when the browser locale changes.
