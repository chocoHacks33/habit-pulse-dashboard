export function buildStreakCalendar(days) {
  return days.map((day) => ({
    date: day.date,
    completed: Boolean(day.completed),
    intensity: day.completed ? Math.min(4, (day.count || 1)) : 0,
  }));
}
