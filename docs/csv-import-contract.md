# CSV import contract

The first row must contain these columns: `id`, `name`, `targetPerWeek`, and `archived`.

`targetPerWeek` is an integer from 1 to 7. `archived` accepts `true` or `false` case-insensitively. Blank names and duplicate IDs are rejected before any records are written. Unknown columns are ignored so exports can carry extra metadata safely.