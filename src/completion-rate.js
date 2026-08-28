export function completionRate(completed, total) {
  if (!Number.isFinite(total) || total <= 0) return 0;
  const safeCompleted = Math.min(Math.max(Number(completed) || 0, 0), total);
  return Math.round((safeCompleted / total) * 100);
}
