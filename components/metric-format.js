export function formatMetric(value, suffix = '') {
  const number = Number(value);
  if (!Number.isFinite(number)) return '—';
  return `${new Intl.NumberFormat().format(number)}${suffix}`;
}
