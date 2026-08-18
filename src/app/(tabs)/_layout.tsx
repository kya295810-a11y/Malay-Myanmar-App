import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

import { useTranslation } from '@/locales';
import { useAppTheme } from '@/theme/provider';

export default function TabsLayout() {
  const { theme } = useAppTheme();
  const { t } = useTranslation();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        sceneStyle: {
          backgroundColor: theme.colors.background,
        },

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
              name={focused ? 'home' : 'home-outline'}
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
              name={focused ? 'newspaper' : 'newspaper-outline'}
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
              name={focused ? 'grid' : 'grid-outline'}
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
              name={focused ? 'person' : 'person-outline'}
              color={color}
              size={23}
            />
          ),
        }}
      />

      {/* GOLD - hidden from bottom navigation */}
      <Tabs.Screen
        name="gold"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}