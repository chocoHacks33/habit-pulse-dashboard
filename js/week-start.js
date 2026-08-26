export function weekStart(date, weekStartsOn = 1) {
  const value = new Date(date);
  const day = value.getDay();
  const offset = (day - weekStartsOn + 7) % 7;
  value.setDate(value.getDate() - offset);
  value.setHours(0, 0, 0, 0);
  return value;
}
