const STATUS_LABELS = Object.freeze({
  complete: 'Complete',
  partial: 'Partially complete',
  missed: 'Missed',
  upcoming: 'Upcoming'
});

export function statusLabel(status) {
  return STATUS_LABELS[status] ?? 'Unknown status';
}
