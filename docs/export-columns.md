# Export columns

CSV exports use stable column names: `habit_id`, `habit_name`, `date`, `completed`, and `note`. `completed` is serialized as `true` or `false`; dates use ISO `YYYY-MM-DD` form. Consumers should ignore unknown future columns to remain forward compatible.