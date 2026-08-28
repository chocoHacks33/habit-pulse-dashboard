export function statusClass(completed, target) {
  if (completed === target && target > 0) return 'is-complete';
  if (completed > 0) return 'is-started';
  return 'is-empty';
}
