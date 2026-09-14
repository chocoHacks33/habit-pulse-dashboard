# Document import preview limits

Set safe row-count, file-size, and preview truncation guidance for imports.

## Scope

- Keep the behavior deterministic and explainable in the interface.
- Preserve existing historical records when applying the rule.
- Pair implementation changes with focused tests and accessible status copy.

## Review checklist

- [ ] Product behavior matches this contract.
- [ ] Empty, boundary, and error states are covered.
- [ ] Documentation and UI labels use the same terminology.
