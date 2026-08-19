export function formatPercent(done, target) {
  if (!Number.isFinite(done) || !Number.isFinite(target) || target <= 0) return '0%';
  return String(Math.round(Math.max(0, done) / target * 100)) + '%';
}
