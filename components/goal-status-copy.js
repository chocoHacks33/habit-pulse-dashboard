export function goalStatusCopy(percent) {
  if (percent >= 100) return 'Goal complete — keep the momentum going.';
  if (percent >= 75) return 'Almost there — one more strong day.';
  if (percent >= 40) return 'Good progress — keep your routine visible.';
  return 'A small check-in today can restart your rhythm.';
}
