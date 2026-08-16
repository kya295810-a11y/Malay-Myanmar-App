# Architecture

## Purpose

This Expo project is a frontend foundation shell for a future application serving Myanmar workers and the Myanmar community in Malaysia. The current goal is architectural readiness, not final product design.

## Principles

- Keep the mobile app separate from backend and database concerns.
- Prefer simple scalable modules over early complexity.
- Treat server state, local UI state, and secure session state differently.
- Avoid fake APIs and misleading placeholder business data.

## High-level flow

```text
Expo App
  -> Expo Router navigation shell
  -> Feature modules
  -> Shared services and stores
  -> Secure Backend API
  -> PostgreSQL
```

## Frontend layers

- `src/app`: Expo Router entrypoints and route groups.
- `src/components`: shared UI primitives and screen-state components.
- `src/features`: feature-specific types and hooks.
- `src/services`: API client, auth storage, and backend-facing service functions.
- `src/store`: persisted settings state and authentication session state.
- `src/theme`: tokens and theme provider for light, dark, and system modes.
- `src/locales`: translations and localization setup.

## Navigation

The current route group is `(tabs)` with placeholder routes for:

- Home
- News
- Exchange
- Gold
- Services
- Profile

This keeps navigation expandable without binding business logic to route files.

## State strategy

- UI and preferences: Zustand with AsyncStorage persistence.
- Server data: TanStack Query with offline-first defaults.
- Sensitive session tokens: Expo SecureStore, never AsyncStorage.

## Offline readiness

- Query defaults use `offlineFirst`.
- Connectivity hook is prepared through NetInfo.
- Feature modules can surface stale-data and retry states later without changing architecture.

## What comes next

The next implementation stage should focus on premium screen design and real backend contracts, not on changing the app shell.
