## Import error categories

Imports distinguish malformed rows, duplicate records, unsupported dates, and missing habit identifiers. Each category should report the affected row number and a recovery hint. A failed row must not prevent valid rows from being previewed.