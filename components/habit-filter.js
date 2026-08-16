export function filterHabits(habits, query = '') {
  const needle = query.trim().toLowerCase();
  if (!needle) return habits;
  return habits.filter(({ name, category = '' }) =>
    `${name} ${category}`.toLowerCase().includes(needle)
  );
}
