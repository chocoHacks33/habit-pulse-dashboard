export function momentumScore(completed, scheduled) {
  if (!Number.isFinite(completed) || !Number.isFinite(scheduled) || scheduled <= 0) return 0;
  return Math.max(0, Math.min(100, Math.round((completed / scheduled) * 100)));
}
