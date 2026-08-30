export function createReminderWindow(startMinute, endMinute) {
  if (!Number.isInteger(startMinute) || !Number.isInteger(endMinute)) {
    throw new TypeError('Reminder bounds must be integer minutes.');
  }
  if (startMinute < 0 || endMinute > 1439 || startMinute > endMinute) {
    throw new RangeError('Reminder window must fit within one day.');
  }
  return { startMinute, endMinute };
}
