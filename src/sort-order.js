export function sortByCompletion(a, b) {
  return (Number(b.completed) || 0) - (Number(a.completed) || 0) || String(a.name || '').localeCompare(String(b.name || ''));
}
