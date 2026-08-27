export function trendDirection(current, previous) {
  if (!Number.isFinite(current) || !Number.isFinite(previous) || current === previous) return "steady";
  return current > previous ? "up" : "down";
}
