# Export field definitions

CSV and JSON exports should preserve these stable fields: `id`, `name`, `frequency`, `createdAt`, `completedOn`, and `archived`.

Dates use ISO 8601 calendar-date strings where no time is needed. Unknown optional values should be empty in CSV and `null` in JSON.