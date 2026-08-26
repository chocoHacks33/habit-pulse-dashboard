# Dashboard events

The UI can report these stable events to analytics or a local activity log:

- `habit_viewed`: a habit card enters the visible list.
- `habit_checked`: a completion is recorded, with `habit` and `date`.
- `summary_shared`: the weekly summary is copied or exported.

Event payloads should omit free-form notes and remain local by default.