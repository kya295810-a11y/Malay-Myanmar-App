import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { runOnJS } from 'react-native-reanimated';

import { useTranslation } from '@/locales';
import { useAppTheme } from '@/theme/provider';

const TAB_ORDER = [
  'index',
  'news',
  'exchange',
  'services',
  'profile',
] as const;

function SwipeableTabScreen({
  children,
  route,
  navigation,
}: {
  children: React.ReactNode;
  route: { name: string };
  navigation: {
    jumpTo: (name: string) => void;
  };
}) {
  const currentIndex = TAB_ORDER.indexOf(
    route.name as (typeof TAB_ORDER)[number]
  );

  const goToTab = (direction: 'left' | 'right') => {
    const nextIndex =
      direction === 'left'
        ? currentIndex + 1
        : currentIndex - 1;

    if (
      nextIndex >= 0 &&
      nextIndex < TAB_ORDER.length
    ) {
      navigation.jumpTo(TAB_ORDER[nextIndex]);
    }
  };

  const swipeGesture = Gesture.Pan()
    .activeOffsetX([-30, 30])
    .failOffsetY([-20, 20])
    .onEnd((event) => {
      const { translationX, velocityX } = event;

      const shouldSwipe =
        Math.abs(translationX) > 70 ||
        Math.abs(velocityX) > 500;

      if (!shouldSwipe) {
        return;
      }

      if (translationX < 0) {
        runOnJS(goToTab)('left');
      } else {
        runOnJS(goToTab)('right');
      }
    });

  return (
    <GestureDetector gesture={swipeGesture}>
      {children}
    </GestureDetector>
  );
}

export default function TabsLayout() {
  const { theme } = useAppTheme();
  const { t } = useTranslation();

  return (
    <Tabs
      screenLayout={({ children, route, navigation }) => (
        <SwipeableTabScreen
          route={route}
          navigation={navigation}
        >
          {children}
        </SwipeableTabScreen>
      )}

      screenOptions={{
        headerShown: false,

        sceneStyle: {
          backgroundColor: theme.colors.background,
        },

        // Smooth movement when switching tabs.
        animation: 'shift',

        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#666666',

        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500',
          letterSpacing: -0.1,
        },

        tabBarItemStyle: {
          paddingTop: 4,
        },

        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0,
          height: 78,
          paddingTop: 7,
          paddingBottom: 8,
        },
      }}
    >
      {/* HOME */}
      <Tabs.Screen
        name="index"
        options={{
          title: t('navigation.home'),

          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={
                focused
                  ? 'home'
                  : 'home-outline'
              }
              color={color}
              size={23}
            />
          ),
        }}
      />

      {/* NEWS */}
      <Tabs.Screen
        name="news"
        options={{
          title: t('navigation.news'),

          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={
                focused
                  ? 'newspaper'
                  : 'newspaper-outline'
              }
              color={color}
              size={23}
            />
          ),
        }}
      />

      {/* EXCHANGE */}
      <Tabs.Screen
        name="exchange"
        options={{
          title: t('navigation.exchange'),

          tabBarIcon: ({ color }) => (
            <Ionicons
              name="swap-horizontal"
              color={color}
              size={23}
            />
          ),
        }}
      />

      {/* SERVICES */}
      <Tabs.Screen
        name="services"
        options={{
          title: t('navigation.services'),

          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={
                focused
                  ? 'grid'
                  : 'grid-outline'
              }
              color={color}
              size={23}
            />
          ),
        }}
      />

      {/* PROFILE */}
      <Tabs.Screen
        name="profile"
        options={{
          title: t('navigation.profile'),

          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={
                focused
                  ? 'person'
                  : 'person-outline'
              }
              color={color}
              size={23}
            />
          ),
        }}
      />

      {/* GOLD - hidden */}
      <Tabs.Screen
        name="gold"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}