const STATUS_LABELS = {
  complete: 'Complete',
  in_progress: 'In progress',
  upcoming: 'Upcoming'
};

export function statusLabel(status) {
  return STATUS_LABELS[status] ?? 'Not started';
}
