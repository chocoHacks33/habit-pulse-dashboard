# Export timezone behavior

Exports use the dashboard's configured local timezone for calendar dates.

- Date-only fields remain date-only and are not shifted through UTC.
- Timestamp fields include an explicit offset when time is available.
- A generated export records the timezone identifier in its metadata.
- Re-importing an export must preserve the original calendar date.

Consumers should not infer a different timezone from the browser locale alone.