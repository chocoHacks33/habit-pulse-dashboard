# Export Null Handling

Exports should distinguish an unavailable value from an intentional zero.

Use an empty field for unavailable optional metadata, `0` for measured zero, and a stable column order for every exported row. Do not stringify null-like values as the word “null”.