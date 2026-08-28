export function reminderCopy(hour) {
  const value = Number(hour);
  if (!Number.isFinite(value) || value < 0 || value > 23) return 'Choose a reminder time';
  const period = value >= 12 ? 'PM' : 'AM';
  const displayHour = value % 12 || 12;
  return 'Reminder at ' + displayHour + ':00 ' + period;
}
