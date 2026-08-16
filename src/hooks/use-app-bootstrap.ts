import * as SystemUI from 'expo-system-ui';
import { useEffect, useState } from 'react';

import { useHydrateAuthSession } from '@/store/auth-store';
import { useSettingsStore } from '@/store/settings-store';
import { useAppTheme } from '@/theme/provider';

export function useAppBootstrap() {
  const [isReady, setIsReady] = useState(false);
  const hydrateSettings = useSettingsStore((state) => state.hydrate);
  const hydrateAuthSession = useHydrateAuthSession();
  const { theme } = useAppTheme();

  useEffect(() => {
    let isMounted = true;

    async function bootstrap() {
      await hydrateSettings();
      await hydrateAuthSession();

      if (isMounted) {
        setIsReady(true);
      }
    }

    bootstrap().catch(() => {
      if (isMounted) {
        setIsReady(true);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [hydrateAuthSession, hydrateSettings]);

  useEffect(() => {
    SystemUI.setBackgroundColorAsync(theme.colors.background).catch(() => {
      // Ignore system UI failures on unsupported targets.
    });
  }, [theme.colors.background]);

  return isReady;
}
