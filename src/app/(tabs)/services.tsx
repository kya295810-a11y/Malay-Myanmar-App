import React from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';

import { useTranslation } from '@/locales';
import { useAppTheme } from '@/theme/provider';

export default function ServicesScreen() {
  const { t } = useTranslation();
  const { theme } = useAppTheme();

  const styles = createStyles(theme);

  const sections = [
    {
      title: t('screens.services.sections.directory'),
      icon: 'grid-outline' as const,
    },
    {
      title: t('screens.services.sections.filters'),
      icon: 'options-outline' as const,
    },
    {
      title: t('screens.services.sections.expansion'),
      icon: 'add-circle-outline' as const,
    },
  ];

  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={['top']}
    >
      <StatusBar
        style={theme.statusBarStyle}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text style={styles.eyebrow}>
              SERVICES
            </Text>

            <Text style={styles.title}>
              {t('screens.services.title')}
            </Text>

            <Text style={styles.description}>
              {t('screens.services.description')}
            </Text>
          </View>

          <View style={styles.headerIcon}>
            <Ionicons
              name="grid-outline"
              size={23}
              color={theme.colors.primary}
            />
          </View>
        </View>

        {/* =====================================================
            SERVICE CARDS
        ===================================================== */}

        <View style={styles.sectionList}>
          {sections.map((section, index) => (
            <Pressable
              key={`${section.title}-${index}`}
              style={({ pressed }) => [
                styles.card,
                pressed && styles.pressed,
              ]}
            >
              <View style={styles.iconBox}>
                <Ionicons
                  name={section.icon}
                  size={22}
                  color={theme.colors.primary}
                />
              </View>

              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>
                  {section.title}
                </Text>

                <Text style={styles.cardSubtitle}>
                  {index === 0
                    ? 'Explore available services'
                    : index === 1
                      ? 'Find what you need quickly'
                      : 'More services coming soon'}
                </Text>
              </View>

              <Ionicons
                name="chevron-forward"
                size={18}
                color={theme.colors.textMuted}
              />
            </Pressable>
          ))}
        </View>

        {/* =====================================================
            COMING SOON
        ===================================================== */}

        <View style={styles.infoCard}>
          <View style={styles.infoIcon}>
            <Ionicons
              name="sparkles-outline"
              size={20}
              color={theme.colors.secondary}
            />
          </View>

          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>
              More services coming soon
            </Text>

            <Text style={styles.infoText}>
              We are preparing more useful services
              for the Malaysia–Myanmar community.
            </Text>
          </View>
        </View>

        <View style={styles.bottomSpace} />
      </ScrollView>
    </SafeAreaView>
  );
}

/* =============================================================
   STYLES
============================================================= */

const createStyles = (theme: any) =>
  StyleSheet.create({
    /* =========================================================
       SCREEN
    ========================================================= */

    safeArea: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },

    content: {
      paddingHorizontal: 20,
      paddingTop: 12,
      paddingBottom: 90,
    },

    /* =========================================================
       HEADER
    ========================================================= */

    header: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginBottom: 28,
    },

    headerText: {
      flex: 1,
      paddingRight: 18,
    },

    eyebrow: {
      color: theme.colors.primary,
      fontSize: 10,
      fontWeight: '800',
      letterSpacing: 1.5,
      marginBottom: 5,
    },

    title: {
      color: theme.colors.text,
      fontSize: 30,
      lineHeight: 36,
      fontWeight: '800',
      letterSpacing: -0.7,
    },

    description: {
      color: theme.colors.textMuted,
      fontSize: 14,
      lineHeight: 20,
      marginTop: 7,
    },

    headerIcon: {
      width: 48,
      height: 48,
      borderRadius: 16,

      backgroundColor: theme.colors.primarySoft,

      alignItems: 'center',
      justifyContent: 'center',

      borderWidth: 1,
      borderColor: theme.colors.border,
    },

    /* =========================================================
       SERVICE LIST
    ========================================================= */

    sectionList: {
      gap: 12,
    },

    card: {
      minHeight: 82,

      flexDirection: 'row',
      alignItems: 'center',

      backgroundColor: theme.colors.surface,

      borderWidth: 1,
      borderColor: theme.colors.border,

      borderRadius: 20,

      paddingHorizontal: 14,
      paddingVertical: 13,

      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: theme.isDark ? 0.18 : 0.05,
      shadowRadius: 8,

      elevation: theme.isDark ? 2 : 2,
    },

    iconBox: {
      width: 48,
      height: 48,
      borderRadius: 15,

      backgroundColor: theme.colors.primarySoft,

      alignItems: 'center',
      justifyContent: 'center',

      marginRight: 13,
    },

    cardContent: {
      flex: 1,
      paddingRight: 8,
    },

    cardTitle: {
      color: theme.colors.text,

      fontSize: 16,
      lineHeight: 21,

      fontWeight: '700',
    },

    cardSubtitle: {
      color: theme.colors.textMuted,

      fontSize: 11,
      lineHeight: 16,

      marginTop: 3,
    },

    /* =========================================================
       INFO CARD
    ========================================================= */

    infoCard: {
      flexDirection: 'row',
      alignItems: 'center',

      marginTop: 24,

      padding: 16,

      backgroundColor: theme.colors.elevated,

      borderWidth: 1,
      borderColor: theme.colors.border,

      borderRadius: 20,
    },

    infoIcon: {
      width: 42,
      height: 42,
      borderRadius: 14,

      backgroundColor:
        theme.isDark
          ? 'rgba(103,210,188,0.14)'
          : 'rgba(14,139,114,0.10)',

      alignItems: 'center',
      justifyContent: 'center',

      marginRight: 12,
    },

    infoContent: {
      flex: 1,
    },

    infoTitle: {
      color: theme.colors.text,

      fontSize: 14,
      fontWeight: '700',
    },

    infoText: {
      color: theme.colors.textMuted,

      fontSize: 11,
      lineHeight: 16,

      marginTop: 3,
    },

    /* =========================================================
       PRESS
    ========================================================= */

    pressed: {
      opacity: 0.7,

      transform: [
        {
          scale: 0.985,
        },
      ],
    },

    /* =========================================================
       BOTTOM
    ========================================================= */

    bottomSpace: {
      height: 50,
    },
  });