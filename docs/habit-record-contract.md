# Habit record contract

A habit record uses the fields below so dashboard widgets can share one predictable shape.

- `id`: stable string identifier.
- `name`: user-facing habit name.
- `category`: optional grouping label.
- `completed`: boolean for the selected day.
- `streak`: non-negative number of consecutive completed days.
