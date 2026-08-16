import Constants from 'expo-constants';
import { z } from 'zod';

const envSchema = z.object({
  EXPO_PUBLIC_API_TIMEOUT_MS: z.coerce.number().positive().default(10000),
  EXPO_PUBLIC_API_URL: z.string().url().optional().or(z.literal('')),
  EXPO_PUBLIC_APP_ENV: z.enum(['development', 'staging', 'production']).default('development'),
});

const parsedEnv = envSchema.safeParse({
  EXPO_PUBLIC_API_TIMEOUT_MS: process.env.EXPO_PUBLIC_API_TIMEOUT_MS,
  EXPO_PUBLIC_API_URL: process.env.EXPO_PUBLIC_API_URL,
  EXPO_PUBLIC_APP_ENV: process.env.EXPO_PUBLIC_APP_ENV,
});

if (!parsedEnv.success) {
  throw new Error(`Invalid Expo public environment configuration: ${parsedEnv.error.message}`);
}

export const env = {
  ...parsedEnv.data,
  appVersion: Constants.expoConfig?.version ?? '0.0.0',
};

export type AppEnvironment = typeof env;
