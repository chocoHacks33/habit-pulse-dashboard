export function completionInsight(done, target) {
  if (target <= 0) return 'Set a weekly target to start tracking progress.';
  if (done >= target) return 'Target reached — keep the rhythm going.';
  const remaining = target - done;
  return `${remaining} ${remaining === 1 ? 'day' : 'days'} left to reach this target.`;
}
