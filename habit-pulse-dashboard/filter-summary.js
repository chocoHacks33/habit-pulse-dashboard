export function filterSummary(total, visible, filter = "all") {
  const noun = visible === 1 ? "habit" : "habits";
  if (filter === "all") return `${visible} ${noun}`;
  return `${visible} of ${total} ${noun} shown`;
}
