# Missing days in trend charts

Trend series preserve every day in the selected range, including days without records.

- A missing day is represented by a stable date label and an empty value.
- Empty values must not be rendered as zero unless the metric explicitly defines zero.
- Tooltips should explain that no data was recorded.
- The chart keeps chronological spacing across missing days.

This prevents gaps in activity from being mistaken for completed zero-value days.