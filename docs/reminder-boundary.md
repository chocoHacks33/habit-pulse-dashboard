# Reminder Boundary Behavior

Reminder windows use an inclusive start and exclusive end.

A reminder at the start time is eligible; one exactly at the end time belongs to the next window. This keeps adjacent windows deterministic and prevents duplicate reminders.