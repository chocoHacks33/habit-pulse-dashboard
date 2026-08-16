export function weeklyGoalCard(completed, target) {
  const safeTarget = Math.max(1, target);
  const percent = Math.min(100, Math.round((completed / safeTarget) * 100));
  return { completed, target: safeTarget, percent, label: `${completed} of ${safeTarget} habits` };
}
