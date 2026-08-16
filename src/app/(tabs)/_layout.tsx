import { Tabs } from 'expo-router';
import { SymbolView } from 'expo-symbols';

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
      <Tabs.Screen
        name="index"
        options={{
          title: t('navigation.home'),
          tabBarIcon: ({ focused }) => (
            <SymbolView
              name={focused ? 'house.fill' : 'house'}
              tintColor={focused ? '#000000' : '#666666'}
              size={23}
              weight={focused ? 'semibold' : 'regular'}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="news"
        options={{
          title: t('navigation.news'),
          tabBarIcon: ({ focused }) => (
            <SymbolView
              name={focused ? 'newspaper.fill' : 'newspaper'}
              tintColor={focused ? '#000000' : '#666666'}
              size={23}
              weight={focused ? 'semibold' : 'regular'}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="exchange"
        options={{
          title: t('navigation.exchange'),
          tabBarIcon: ({ focused }) => (
            <SymbolView
              name="arrow.left.arrow.right"
              tintColor={focused ? '#000000' : '#666666'}
              size={23}
              weight={focused ? 'semibold' : 'regular'}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="services"
        options={{
          title: t('navigation.services'),
          tabBarIcon: ({ focused }) => (
            <SymbolView
              name={focused ? 'square.grid.2x2.fill' : 'square.grid.2x2'}
              tintColor={focused ? '#000000' : '#666666'}
              size={23}
              weight={focused ? 'semibold' : 'regular'}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: t('navigation.profile'),
          tabBarIcon: ({ focused }) => (
            <SymbolView
              name={focused ? 'person.fill' : 'person'}
              tintColor={focused ? '#000000' : '#666666'}
              size={23}
              weight={focused ? 'semibold' : 'regular'}
            />
          ),
        }}
      />

      {/* Gold is intentionally hidden from the bottom navigation */}
      <Tabs.Screen
        name="gold"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}