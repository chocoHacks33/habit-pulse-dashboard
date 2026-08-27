export function emptyMessage(filter = "all") {
  return filter === "completed" ? "No completed habits yet." : filter === "active" ? "All habits are complete." : "Add your first habit to begin tracking.";
}
