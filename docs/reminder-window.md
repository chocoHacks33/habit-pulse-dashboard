# Reminder window semantics

Reminder windows use the user’s local timezone. A window is inclusive at its start and exclusive at its end, so adjacent windows do not overlap.

If a reminder is scheduled outside the selected window, retain the schedule but show the next eligible local time rather than silently dropping it.