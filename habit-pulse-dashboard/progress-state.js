export function progressState(percent) {
  if (!Number.isFinite(percent) || percent <= 0) return "not-started";
  if (percent >= 100) return "complete";
  return "in-progress";
}
