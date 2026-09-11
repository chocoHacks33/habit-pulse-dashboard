# Loading and retry copy

Loading states should explain what the dashboard is doing without implying that data has been lost.

- Initial load: “Loading your habits…”
- Refresh: “Refreshing your dashboard…”
- Recoverable failure: “We couldn’t refresh this view. Try again.”
- Empty result after a successful load: use the empty-state guidance, not an error message.

Retry actions should preserve the selected date and active filters.
