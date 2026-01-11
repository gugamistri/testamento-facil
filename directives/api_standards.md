# API & Data Standards

## Protocol
- **RESTful:** Use standard HTTP verbs (GET, POST, PUT, DELETE).
- **Format:** Always JSON.

## Endpoint Naming
- Use plural nouns: `/api/v1/users`, `/api/v1/products`.

## Success & Error Responses
- **200/201:** Standard success.
- **400:** Validation errors (return field-specific messages).
- **401/403:** Auth issues.
- **500:** Internal errors (log detail, return generic message).

## Testing
- Every new endpoint must have a `.http` file in `tests/api/` for quick verification.