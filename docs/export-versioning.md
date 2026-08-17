# Export Compatibility

Exported records include a `schemaVersion` string. New optional fields do not require a version change; renamed or removed fields require a new major version. Importers should ignore unknown fields.