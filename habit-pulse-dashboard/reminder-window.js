export function reminderWindow(hour) {
  if (!Number.isInteger(hour) || hour < 0 || hour > 23) return "anytime";
  if (hour < 12) return "morning";
  if (hour < 18) return "afternoon";
  return "evening";
}
