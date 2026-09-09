# Reminder preference contract

Reminder settings consist of `enabled`, a local `time`, and an IANA `timezone`. A disabled reminder retains its saved time so re-enabling it does not reset the user’s preference.

## Acceptance criteria

- Invalid timezone values fall back to the account timezone.
- Local times are validated as `HH:mm`.
- Saving preferences does not create duplicate reminders.
