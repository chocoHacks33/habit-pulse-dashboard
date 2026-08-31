# Reminder window semantics

Reminder windows are inclusive local-time ranges. A reminder scheduled for `21:00` may be delivered from 21:00 through 21:59 local time. Store the user's timezone alongside the schedule so daylight-saving transitions do not shift the intended hour.