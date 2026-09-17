# Offline Check-in Recovery

A check-in created without a network connection remains locally durable and visibly pending.

## Recovery behavior

- Assign a stable event identifier before queuing the check-in.
- Retry with backoff when connectivity returns.
- Treat a repeated event identifier as already applied.
- Keep failed events inspectable instead of silently discarding them.

The UI should distinguish saved locally, syncing, and confirmed states.