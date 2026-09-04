# Week-start boundary

The dashboard treats Monday as the first day of a reporting week. A week key is the ISO date for that Monday, and ranges are inclusive of Monday through Sunday.

When a date is missing or invalid, callers should show a validation message instead of silently assigning it to the current week.
