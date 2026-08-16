import { useCallback } from 'react';
import { create } from 'zustand';

import { AuthSession, AuthStatus, AuthTokens } from '@/features/auth/types';
import { clearTokens, getStoredTokens, saveTokens } from '@/services/auth/token-storage';

type AuthState = {
  hydrated: boolean;
  session: AuthSession | null;
  status: AuthStatus;
  clearSession: () => Promise<void>;
  hydrateSession: () => Promise<void>;
  setSession: (session: AuthSession, tokens: AuthTokens) => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
  clearSession: async () => {
    await clearTokens();
    set({
      session: null,
      status: 'anonymous',
    });
  },
  hydrateSession: async () => {
    const tokens = await getStoredTokens();

    set({
      hydrated: true,
      session: tokens
        ? {
            expiresAt: null,
            user: null,
          }
        : null,
      status: tokens ? 'refreshing' : 'anonymous',
    });
  },
  hydrated: false,
  session: null,
  setSession: async (session, tokens) => {
    await saveTokens(tokens);
    set({
      session,
      status: 'authenticated',
    });
  },
  status: 'anonymous',
}));

export function useHydrateAuthSession() {
  const hydrateSession = useAuthStore((state) => state.hydrateSession);

  return useCallback(async () => {
    await hydrateSession();
  }, [hydrateSession]);
}
