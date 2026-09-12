# Import duplicate handling

Imports are merged by stable habit ID and calendar date.

- Exact duplicates are skipped and reported as already present.
- Conflicting values require an explicit user choice before replacement.
- Invalid rows are rejected individually with a reason and row reference.
- A summary reports added, skipped, replaced, and rejected rows.

An import must never silently replace a newer local note or completion state.