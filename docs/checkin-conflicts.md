## Check-in conflict handling

When a check-in is edited from multiple views, the latest confirmed event wins only after its timestamp and habit identifier are validated. The interface should surface a retry action when a save cannot be reconciled, and it must not silently discard the user's note.