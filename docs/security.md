# Security

## Non-negotiable rules

- Do not place private API keys, database credentials, or service secrets in the Expo app.
- Do not connect the Expo app directly to PostgreSQL.
- Do not store access tokens or refresh tokens in AsyncStorage.
- Do not log sensitive values to the console.

## Current foundation

- Public runtime configuration is read from `EXPO_PUBLIC_*` variables only.
- Authentication tokens are reserved for Expo SecureStore.
- API requests run through a centralized client with auth header injection, timeout, and normalized error handling.
- Logging helpers are structured to support redaction and development-only output.

## Future backend expectations

- Short-lived access tokens and rotating refresh tokens
- Server-side token revocation and session expiration
- Request validation and authorization on every protected route
- Rate limiting and audit logging for sensitive actions
- Signed media/file access where relevant

## Mobile implementation guidance

- Keep auth state in a dedicated store.
- Treat profile or preference data separately from secure session data.
- Redact personally identifiable data from logs and crash diagnostics where possible.
- Review third-party SDKs carefully before adding them.
