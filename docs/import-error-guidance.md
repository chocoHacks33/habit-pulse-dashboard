# Import error guidance

Show the first actionable problem and keep the original file untouched.

- Missing `habits` array: `This file does not contain a habit list.`
- Invalid date: `Use dates in YYYY-MM-DD format.`
- Duplicate id: `Each habit needs a unique id.`
- Unsupported version: `This export was made by a newer dashboard version.`

Messages should explain how to fix the file rather than exposing parser internals.