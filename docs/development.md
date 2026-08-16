# Development Workflow

## Setup

1. Install dependencies with `npm install`.
2. Copy `.env.example` to a local `.env` file.
3. Set `EXPO_PUBLIC_API_URL` to your development backend.
4. Start the app with `npm run start`.

## Quality checks

- `npm run lint`
- `npm run typecheck`
- `npx expo-doctor`

Run these before committing changes to shared branches.

## Environment model

- `development`: local backend, debugging enabled.
- `staging`: pre-production backend and QA validation.
- `production`: live backend only with public-safe variables in Expo config.

## Team conventions

- Keep route files thin.
- Put backend calls in `src/services`.
- Keep feature contracts in `src/features`.
- Use the theme provider instead of hardcoded colors.
- Use localized strings instead of scattering literal UI copy.
