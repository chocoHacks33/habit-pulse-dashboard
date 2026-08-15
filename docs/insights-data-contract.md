# Habit insights data contract

The dashboard's insight cards should consume a stable record with `label`, `value`, `trend`, and optional `description` fields. Keeping this shape documented lets future data sources replace the sample data without changing the presentation layer.

Example:

```json
{"label":"Weekly completion","value":82,"trend":"up","description":"Compared with last week"}
```