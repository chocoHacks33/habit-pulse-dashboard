export function weekStart(date, weekStartsOn = 1) {
  const result = new Date(date);
  if (Number.isNaN(result.getTime())) throw new TypeError('Expected a valid date.');
  const offset = (result.getDay() - weekStartsOn + 7) % 7;
  result.setDate(result.getDate() - offset);
  result.setHours(0, 0, 0, 0);
  return result;
}
