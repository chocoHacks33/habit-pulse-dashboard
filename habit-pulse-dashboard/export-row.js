export function exportRow(habit) {
  return { id: String(habit.id ?? ""), name: String(habit.name ?? ""), completed: Boolean(habit.completed), category: String(habit.category ?? "Uncategorized") };
}
