export function chartPoint(value, index, total) {
  const count = Math.max(Number(total) || 0, 1);
  return { x: Math.round((index / (count - 1 || 1)) * 100), y: Math.max(0, Math.min(100, Number(value) || 0)) };
}
