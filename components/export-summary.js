export function formatHabitSummary({ completed, total, streak }) {
  const percent = total ? Math.round((completed / total) * 100) : 0;
  return `Habit Pulse: ${completed}/${total} complete (${percent}%), ${streak}-day streak.`;
}
