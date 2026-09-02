# Reminder Window

A reminder window contains:

- `start`: local time in `HH:mm`.
- `end`: local time in `HH:mm`.
- `days`: selected weekday numbers from 0 through 6.

If the end time is earlier than the start time, treat the window as crossing midnight. Display the user's local timezone alongside scheduled reminders.
