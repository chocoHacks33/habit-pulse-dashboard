export function streakCopy(days) {
  if (!Number.isFinite(days) || days <= 0) return "Start a streak today";
  return `${days} day${days === 1 ? "" : "s"} in a row`;
}
