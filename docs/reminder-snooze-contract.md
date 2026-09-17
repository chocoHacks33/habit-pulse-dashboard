# Reminder Snooze Contract

Snoozing a reminder defers one delivery without changing the recurring schedule.

## Contract

- Store the snooze expiry in the user's configured timezone.
- Do not create a second recurring reminder when a snooze is active.
- Show the next delivery time after snoozing.
- Expired snoozes are cleared when the reminder is evaluated.

A disabled reminder cannot be snoozed and should explain why the action is unavailable.