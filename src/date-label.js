export function formatDashboardDate(value, locale = 'en-US') {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Unknown date';
  return new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format(date);
}
