export function toIsoDate(date) {
  return new Date(date).toISOString().slice(0, 10);
}

export function isSameDay(left, right) {
  return toIsoDate(left) === toIsoDate(right);
}
