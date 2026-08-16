import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

import { AppProviders } from '@/components/common/app-providers';
import { useAppBootstrap } from '@/hooks/use-app-bootstrap';
import { useAppTheme } from '@/theme/provider';

SplashScreen.preventAutoHideAsync().catch(() => {
  // Ignore repeated calls during Fast Refresh.
});

function RootNavigator() {
  const { theme } = useAppTheme();

  return (
    <>
      <StatusBar style={theme.statusBarStyle} />
      <Stack
        screenOptions={{
          animation: theme.motion.navigationAnimation,
          contentStyle: {
            backgroundColor: theme.colors.background,
          },
          headerShown: false,
        }}
      />
    </>
  );
}

function AppBootstrapper() {
  const isReady = useAppBootstrap();

  useEffect(() => {
    if (isReady) {
      SplashScreen.hideAsync().catch(() => {
        // Ignore splash hide race conditions during development.
      });
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return <RootNavigator />;
}

export default function RootLayout() {
  return (
    <AppProviders>
      <AppBootstrapper />
    </AppProviders>
  );
}
