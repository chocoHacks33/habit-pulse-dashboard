export function sortHabits(habits, order = 'name') {
  return [...habits].sort((a, b) => order === 'progress' ? (b.done / b.target) - (a.done / a.target) : a.name.localeCompare(b.name));
}
