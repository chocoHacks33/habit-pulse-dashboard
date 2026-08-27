export function calendarCell(date, completed = false) {
  const value = new Date(date);
  return { date: value.toISOString().slice(0, 10), completed: Boolean(completed), ariaLabel: `${completed ? "Completed" : "Not completed"} ${value.toDateString()}` };
}
