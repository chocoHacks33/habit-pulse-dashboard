export function validateHabit(habit) {
  return Boolean(habit && typeof habit.name === 'string' && habit.name.trim() &&
    Number.isInteger(habit.done) && habit.done >= 0 &&
    Number.isInteger(habit.target) && habit.target > 0 && habit.done <= habit.target);
}
