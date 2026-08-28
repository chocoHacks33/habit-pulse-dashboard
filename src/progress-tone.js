export function progressTone(percent) {
  const value = Number(percent) || 0;
  if (value >= 100) return 'success';
  if (value >= 60) return 'steady';
  if (value > 0) return 'starting';
  return 'neutral';
}
