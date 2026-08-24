# Focus session contract

A focus session records intentional work toward a habit without changing the habit's completion state.

## Fields

- `id`: stable string identifier.
- `habitId`: identifier of the related habit.
- `startedAt`: ISO 8601 start timestamp.
- `endedAt`: ISO 8601 end timestamp, or `null` while active.
- `durationMinutes`: completed duration in whole minutes.
- `note`: optional short reflection.

## Lifecycle

Create a session when the timer starts, update `endedAt` and `durationMinutes` when it stops, and retain the record when a day is archived. A session with a missing end time is active and should not count toward completed focus totals.