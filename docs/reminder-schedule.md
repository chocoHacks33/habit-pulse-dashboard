# Reminder schedule

A reminder has a local `time`, a `days` array, and an `enabled` flag. Disabled reminders remain stored but produce no notifications. Schedules are evaluated in the user's local timezone. Quiet hours suppress delivery without deleting the scheduled occurrence; the dashboard should show the next eligible delivery time so the state is explainable.