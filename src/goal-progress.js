export function goalProgress(current, goal) {
  const target = Number(goal);
  if (!Number.isFinite(target) || target <= 0) return 0;
  return Math.min(100, Math.round(((Number(current) || 0) / target) * 100));
}
