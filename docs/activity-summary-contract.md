# Activity summary contract

The dashboard activity summary describes recent check-ins without exposing raw storage details.

## Fields

- `date`: ISO calendar date for the activity.
- `completed`: number of habits completed that day.
- `scheduled`: number of habits scheduled that day.
- `completionRate`: `completed / scheduled`, or `null` when nothing was scheduled.

When there is no activity, return an empty list and let the UI provide the empty-state message.