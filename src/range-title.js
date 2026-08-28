export function rangeTitle(start, end) {
  const first = new Date(start);
  const last = new Date(end);
  if (Number.isNaN(first.getTime()) || Number.isNaN(last.getTime())) return '';
  return first.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) + ' – ' + last.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}
