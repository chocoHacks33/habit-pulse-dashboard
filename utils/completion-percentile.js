export function completionPercentile(done, target) {
  if (!Number.isFinite(done) || !Number.isFinite(target) || target <= 0) return 0;
  return Math.max(0, Math.min(100, Math.round((done / target) * 100)));
}
