import { createContext, PropsWithChildren, useContext, useMemo } from 'react';
import { useColorScheme } from 'react-native';

import { useSettingsStore } from '@/store/settings-store';
import { AppTheme } from '@/theme/types';
import {
  darkColors,
  darkShadows,
  lightColors,
  lightShadows,
  radius,
  spacing,
  typography,
} from '@/theme/tokens';

const ThemeContext = createContext<{ theme: AppTheme } | null>(null);

export function AppThemeProvider({ children }: PropsWithChildren) {
  const systemScheme = useColorScheme();
  const themePreference = useSettingsStore((state) => state.themePreference);
  const prefersReducedMotion = useSettingsStore((state) => state.prefersReducedMotion);

  const theme = useMemo<AppTheme>(() => {
    const resolvedScheme =
      themePreference === 'system' ? (systemScheme === 'dark' ? 'dark' : 'light') : themePreference;
    const isDark = resolvedScheme === 'dark';

    return {
      colors: isDark ? darkColors : lightColors,
      isDark,
      motion: {
        navigationAnimation: prefersReducedMotion ? 'none' : 'fade',
        prefersReducedMotion,
      },
      radius,
      shadows: isDark ? darkShadows : lightShadows,
      spacing,
      statusBarStyle: isDark ? 'light' : 'dark',
      typography,
    };
  }, [prefersReducedMotion, systemScheme, themePreference]);

  return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>;
}

export function useAppTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useAppTheme must be used inside AppThemeProvider.');
  }

  return context;
}
