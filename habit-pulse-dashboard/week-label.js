export function weekLabel(date, locale = "en-US") {
  const value = new Date(date);
  if (Number.isNaN(value.getTime())) return "Invalid date";
  return new Intl.DateTimeFormat(locale, { weekday: "short", month: "short", day: "numeric" }).format(value);
}
