# Export null values

CSV exports use an empty field for an absent optional value. They do not serialize JavaScript `null`, `undefined`, or the string `N/A`; this keeps exports stable for spreadsheet and import consumers.
