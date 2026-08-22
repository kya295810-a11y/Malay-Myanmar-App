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
import type { AppTheme } from '@/theme/types';

export default function ProfileScreen() {
  const { t } = useTranslation();
  const { theme } = useAppTheme();

  const styles = createStyles(theme);

  const sections = [
    {
      title: t('screens.profile.sections.preferences'),
      icon: 'settings-outline' as const,
      subtitle: 'Customize your app experience',
    },
    {
      title: t('screens.profile.sections.session'),
      icon: 'person-circle-outline' as const,
      subtitle: 'Manage your account and session',
    },
    {
      title: t('screens.profile.sections.privacy'),
      icon: 'shield-checkmark-outline' as const,
      subtitle: 'Privacy and security settings',
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
            PROFILE HEADER
        ===================================================== */}

        <View style={styles.profileHeader}>
          <View style={styles.avatar}>
            <Ionicons
              name="person"
              size={30}
              color={theme.colors.primary}
            />
          </View>

          <View style={styles.profileInfo}>
            <Text style={styles.eyebrow}>
              PROFILE
            </Text>

            <Text style={styles.name}>
              Kyaw San Lin
            </Text>

            <Text style={styles.description}>
              {t('screens.profile.description')}
            </Text>
          </View>
        </View>

        {/* =====================================================
            ACCOUNT & SETTINGS
        ===================================================== */}

        <Text style={styles.sectionTitle}>
          Account & Settings
        </Text>

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
                  {section.subtitle}
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
            APPEARANCE
        ===================================================== */}

        <Text style={styles.sectionTitle}>
          Appearance
        </Text>

        <View style={styles.appearanceCard}>
          <View style={styles.appearanceIcon}>
            <Ionicons
              name={
                theme.isDark
                  ? 'moon'
                  : 'sunny'
              }
              size={21}
              color={theme.colors.primary}
            />
          </View>

          <View style={styles.appearanceContent}>
            <Text style={styles.appearanceTitle}>
              {theme.isDark
                ? 'Dark Mode'
                : 'Light Mode'}
            </Text>

            <Text style={styles.appearanceSubtitle}>
              {theme.isDark
                ? 'Dark appearance is currently active'
                : 'Light appearance is currently active'}
            </Text>
          </View>

          <View
            style={[
              styles.modeBadge,
              {
                backgroundColor:
                  theme.colors.primarySoft,
              },
            ]}
          >
            <Text
              style={[
                styles.modeBadgeText,
                {
                  color:
                    theme.colors.primary,
                },
              ]}
            >
              {theme.isDark
                ? 'DARK'
                : 'LIGHT'}
            </Text>
          </View>
        </View>

        {/* =====================================================
            PRIVACY
        ===================================================== */}

        <View style={styles.privacyCard}>
          <View style={styles.privacyIcon}>
            <Ionicons
              name="shield-checkmark-outline"
              size={20}
              color={theme.colors.success}
            />
          </View>

          <View style={styles.privacyContent}>
            <Text style={styles.privacyTitle}>
              Your privacy matters
            </Text>

            <Text style={styles.privacyText}>
              Your preferences and personal settings
              are managed securely within the app.
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

const createStyles = (theme: AppTheme) =>
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
       PROFILE HEADER
    ========================================================= */

    profileHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 8,
      marginBottom: 30,
    },

    avatar: {
      width: 70,
      height: 70,
      borderRadius: 35,

      backgroundColor:
        theme.colors.primarySoft,

      borderWidth: 1,
      borderColor:
        theme.colors.border,

      alignItems: 'center',
      justifyContent: 'center',

      marginRight: 15,
    },

    profileInfo: {
      flex: 1,
    },

    eyebrow: {
      color: theme.colors.primary,

      fontSize: 10,
      fontWeight: '800',

      letterSpacing: 1.5,

      marginBottom: 4,
    },

    name: {
      color: theme.colors.text,

      fontSize: 25,
      lineHeight: 31,

      fontWeight: '800',

      letterSpacing: -0.5,
    },

    description: {
      color: theme.colors.textMuted,

      fontSize: 12,
      lineHeight: 18,

      marginTop: 4,
    },

    /* =========================================================
       SECTION TITLE
    ========================================================= */

    sectionTitle: {
      color: theme.colors.text,

      fontSize: 18,
      lineHeight: 24,

      fontWeight: '700',

      marginBottom: 12,
    },

    /* =========================================================
       SETTINGS
    ========================================================= */

    sectionList: {
      marginBottom: 29,
    },

    card: {
      minHeight: 80,

      flexDirection: 'row',
      alignItems: 'center',

      backgroundColor:
        theme.colors.surface,

      borderWidth: 1,
      borderColor:
        theme.colors.border,

      borderRadius: 19,

      paddingHorizontal: 13,
      paddingVertical: 12,

      marginBottom: 11,

      shadowColor: '#000000',

      shadowOffset: {
        width: 0,
        height: 3,
      },

      shadowOpacity:
        theme.isDark ? 0.16 : 0.04,

      shadowRadius: 8,

      elevation: 2,
    },

    iconBox: {
      width: 48,
      height: 48,

      borderRadius: 15,

      backgroundColor:
        theme.colors.primarySoft,

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

      fontSize: 15,
      lineHeight: 20,

      fontWeight: '700',
    },

    cardSubtitle: {
      color: theme.colors.textMuted,

      fontSize: 11,
      lineHeight: 16,

      marginTop: 3,
    },

    /* =========================================================
       APPEARANCE
    ========================================================= */

    appearanceCard: {
      minHeight: 78,

      flexDirection: 'row',
      alignItems: 'center',

      backgroundColor:
        theme.colors.surface,

      borderWidth: 1,
      borderColor:
        theme.colors.border,

      borderRadius: 19,

      paddingHorizontal: 13,
      paddingVertical: 12,

      marginBottom: 28,
    },

    appearanceIcon: {
      width: 46,
      height: 46,

      borderRadius: 14,

      backgroundColor:
        theme.colors.primarySoft,

      alignItems: 'center',
      justifyContent: 'center',

      marginRight: 12,
    },

    appearanceContent: {
      flex: 1,
    },

    appearanceTitle: {
      color: theme.colors.text,

      fontSize: 14,
      fontWeight: '700',
    },

    appearanceSubtitle: {
      color: theme.colors.textMuted,

      fontSize: 10,
      lineHeight: 15,

      marginTop: 3,
    },

    modeBadge: {
      borderRadius: 10,

      paddingHorizontal: 9,
      paddingVertical: 6,
    },

    modeBadgeText: {
      fontSize: 9,
      fontWeight: '800',

      letterSpacing: 0.6,
    },

    /* =========================================================
       PRIVACY
    ========================================================= */

    privacyCard: {
      flexDirection: 'row',
      alignItems: 'center',

      backgroundColor:
        theme.colors.elevated,

      borderWidth: 1,
      borderColor:
        theme.colors.border,

      borderRadius: 19,

      padding: 15,
    },

    privacyIcon: {
      width: 42,
      height: 42,

      borderRadius: 14,

      backgroundColor:
        theme.isDark
          ? 'rgba(111,211,164,0.14)'
          : 'rgba(33,122,87,0.10)',

      alignItems: 'center',
      justifyContent: 'center',

      marginRight: 12,
    },

    privacyContent: {
      flex: 1,
    },

    privacyTitle: {
      color: theme.colors.text,

      fontSize: 13,
      fontWeight: '700',
    },

    privacyText: {
      color: theme.colors.textMuted,

      fontSize: 10,
      lineHeight: 15,

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