# Add offline sync conflict rules

Define deterministic conflict handling when offline check-ins reconnect.

## Scope

- Keep the behavior deterministic and explainable in the interface.
- Preserve existing historical records when applying the rule.
- Pair implementation changes with focused tests and accessible status copy.

## Review checklist

- [ ] Product behavior matches this contract.
- [ ] Empty, boundary, and error states are covered.
- [ ] Documentation and UI labels use the same terminology.
