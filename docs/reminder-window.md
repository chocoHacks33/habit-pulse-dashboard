# Reminder Window Semantics

Reminder windows are local-time intervals. The start is inclusive and the end is exclusive, so a window from `09:00` to `17:00` includes 09:00 but not 17:00.

Overnight windows are represented explicitly (for example, `22:00` to `07:00`) and must not be compared as ordinary same-day numeric ranges. Quiet hours take precedence over reminders.
