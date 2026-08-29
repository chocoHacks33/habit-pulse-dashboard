# Weekly Goal Data Contract

A weekly goal record uses `id`, `label`, `completed`, and `target`.

- `target` is a non-negative integer.
- `completed` is clamped to the range `0..target` for display.
- A zero target is displayed as `Not started`, never as a division-by-zero percentage.
- The dashboard may add `weekStart` as an ISO local date (`YYYY-MM-DD`).
