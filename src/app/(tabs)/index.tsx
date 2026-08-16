import React, { useState } from 'react';
import { SymbolView } from 'expo-symbols';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';

const LIGHT = {
  background: '#F4F6F8',
  surface: '#FFFFFF',
  navy: '#172F5F',
  navyLight: '#24498A',
  text: '#17263D',
  muted: '#6B7C93',
  blue: '#087CFF',
  border: '#D9E0E8',
  soft: '#F4F7FA',
};

const DARK = {
  background: '#0B111A',
  surface: '#121A26',
  navy: '#172F5F',
  navyLight: '#24498A',
  text: '#F5F7FA',
  muted: '#94A3B8',
  blue: '#3B8DFF',
  border: '#263447',
  soft: '#192332',
};

export default function HomeScreen() {
  const router = useRouter();

  const [isDark, setIsDark] = useState(false);

  const colors = isDark ? DARK : LIGHT;

  const userName = 'Kyaw San Lin';

  const styles = createStyles(colors);

  const toggleTheme = () => {
    setIsDark((current) => !current);
  };

  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={['top']}
    >
      <StatusBar
        style={isDark ? 'light' : 'dark'}
      />

      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >

          {/* =====================================================
              WELCOME
          ===================================================== */}

          <View style={styles.header}>
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcome}>
                Welcome
              </Text>

              <Text style={styles.userName}>
                {userName}
              </Text>
            </View>

            {/* =================================================
                LIGHT / DARK ICON BUTTON
            ================================================= */}

            <Pressable
              onPress={toggleTheme}
              accessibilityRole="button"
              accessibilityLabel={
                isDark
                  ? 'Switch to light mode'
                  : 'Switch to dark mode'
              }
              style={({ pressed }) => [
                styles.themeButton,
                isDark && styles.themeButtonDark,
                pressed && styles.pressed,
              ]}
            >
              <SymbolView
                name={
                  isDark
                    ? 'moon.fill'
                    : 'sun.max.fill'
                }
                size={19}
                tintColor={
                  isDark
                    ? '#FFFFFF'
                    : '#111827'
                }
                weight="semibold"
              />
            </Pressable>
          </View>

          {/* =====================================================
              KUALA LUMPUR
          ===================================================== */}

          <View style={styles.locationCard}>

            <View style={styles.locationCircle}>
              <Text style={styles.buildingIcon}>
                ▥
              </Text>
            </View>

            <View style={styles.locationText}>
              <Text style={styles.locationTitle}>
                Kuala Lumpur
              </Text>

              <Text style={styles.locationSubtitle}>
                Malaysia 🇲🇾
              </Text>
            </View>

          </View>

          {/* =====================================================
              EXCHANGE RATE
          ===================================================== */}

          <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>
              Exchange Rate
            </Text>

            <Pressable
              onPress={() => router.push('/exchange')}
              hitSlop={10}
            >
              <Text style={styles.seeAll}>
                See All
              </Text>
            </Pressable>

          </View>

          <Pressable
            onPress={() => router.push('/exchange')}
            style={({ pressed }) => [
              styles.exchangeCard,
              pressed && styles.cardPressed,
            ]}
          >

            {/* MYR → MMK */}

            <View style={styles.currencyRow}>

              {/* MYR */}

              <View style={styles.currencySide}>

                <Text style={styles.flag}>
                  🇲🇾
                </Text>

                <View>
                  <Text style={styles.currencyCode}>
                    MYR
                  </Text>

                  <Text style={styles.currencyName}>
                    Malaysian Ringgit
                  </Text>
                </View>

              </View>

              {/* ARROW */}

              <Text style={styles.exchangeArrow}>
                →
              </Text>

              {/* MMK */}

              <View style={styles.currencySide}>

                <Text style={styles.flag}>
                  🇲🇲
                </Text>

                <View>
                  <Text style={styles.currencyCode}>
                    MMK
                  </Text>

                  <Text style={styles.currencyName}>
                    Myanmar Kyat
                  </Text>
                </View>

              </View>

            </View>

            {/* DIVIDER */}

            <View style={styles.divider} />

            {/* RATE */}

            <View style={styles.rateRow}>

              <Text style={styles.rate}>
                1.00
              </Text>

              <Text style={styles.equal}>
                =
              </Text>

              <Text style={styles.rate}>
                463.50
              </Text>

            </View>

            <Text style={styles.updated}>
              Last updated: 10:30 AM
            </Text>

          </Pressable>

          {/* =====================================================
              LATEST NEWS
          ===================================================== */}

          <View
            style={[
              styles.sectionHeader,
              styles.newsHeader,
            ]}
          >

            <Text style={styles.sectionTitle}>
              Latest News
            </Text>

            <Pressable
              onPress={() => router.push('/news')}
              hitSlop={10}
            >
              <Text style={styles.seeAll}>
                See All
              </Text>
            </Pressable>

          </View>

          {/* =====================================================
              NEWS CARD 1
          ===================================================== */}

          <Pressable
            onPress={() => router.push('/news')}
            style={({ pressed }) => [
              styles.newsCard,
              pressed && styles.cardPressed,
            ]}
          >

            <View style={styles.newsIconBox}>

              <SymbolView
                name="newspaper.fill"
                size={21}
                tintColor={colors.blue}
                weight="medium"
              />

            </View>

            <View style={styles.newsContent}>

              <Text style={styles.newsCategory}>
                Malaysia
              </Text>

              <Text
                style={styles.newsTitle}
                numberOfLines={2}
              >
                Malaysia latest news and updates
              </Text>

              <Text style={styles.newsTime}>
                Today, 09:30 AM
              </Text>

            </View>

            <SymbolView
              name="chevron.right"
              size={16}
              tintColor={colors.muted}
              weight="medium"
            />

          </Pressable>

          {/* =====================================================
              NEWS CARD 2
          ===================================================== */}

          <Pressable
            onPress={() => router.push('/exchange')}
            style={({ pressed }) => [
              styles.newsCard,
              pressed && styles.cardPressed,
            ]}
          >

            <View style={styles.newsIconBox}>

              <SymbolView
                name="arrow.left.arrow.right"
                size={21}
                tintColor={colors.blue}
                weight="medium"
              />

            </View>

            <View style={styles.newsContent}>

              <Text style={styles.newsCategory}>
                Exchange
              </Text>

              <Text
                style={styles.newsTitle}
                numberOfLines={2}
              >
                Ringgit strengthens against major currencies
              </Text>

              <Text style={styles.newsTime}>
                Today, 08:15 AM
              </Text>

            </View>

            <SymbolView
              name="chevron.right"
              size={16}
              tintColor={colors.muted}
              weight="medium"
            />

          </Pressable>

          {/* =====================================================
              BOTTOM SPACE
          ===================================================== */}

          <View style={styles.bottomSpace} />

        </ScrollView>
      </View>
    </SafeAreaView>
  );
}


/* =============================================================
   STYLES
============================================================= */

const createStyles = (
  colors: typeof LIGHT,
) =>
  StyleSheet.create({

    /* =========================================================
       ROOT
    ========================================================= */

    safeArea: {
      flex: 1,
      backgroundColor: colors.background,
    },

    container: {
      flex: 1,
      backgroundColor: colors.background,
    },

    content: {
      paddingHorizontal: 20,
      paddingTop: 8,
      paddingBottom: 30,
    },

    /* =========================================================
       HEADER
    ========================================================= */

    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',

      marginBottom: 22,
    },

    welcomeContainer: {
      flex: 1,
      paddingRight: 12,
    },

    welcome: {
      color: colors.text,

      fontSize: 21,
      lineHeight: 27,

      fontWeight: '700',

      letterSpacing: -0.3,
    },

    userName: {
      color: colors.text,

      fontSize: 16,
      lineHeight: 22,

      fontWeight: '500',

      marginTop: 3,
    },

    /* =========================================================
       LIGHT / DARK ICON BUTTON
    ========================================================= */

    themeButton: {
      width: 44,
      height: 44,

      borderRadius: 22,

      backgroundColor: colors.surface,

      borderWidth: 1,
      borderColor: colors.border,

      alignItems: 'center',
      justifyContent: 'center',

      shadowColor: '#000000',

      shadowOffset: {
        width: 0,
        height: 2,
      },

      shadowOpacity: 0.08,
      shadowRadius: 5,

      elevation: 3,
    },

    themeButtonDark: {
      backgroundColor: '#17212F',
      borderColor: '#334155',
    },

    pressed: {
      opacity: 0.7,

      transform: [
        {
          scale: 0.94,
        },
      ],
    },

    /* =========================================================
       KUALA LUMPUR
    ========================================================= */

    locationCard: {
      height: 150,

      borderRadius: 22,

      backgroundColor: colors.navy,

      overflow: 'hidden',

      justifyContent: 'center',
      alignItems: 'center',

      marginBottom: 34,

      borderWidth: 1,
      borderColor: colors.navyLight,
    },

    locationCircle: {
      position: 'absolute',

      width: 118,
      height: 118,

      borderRadius: 59,

      backgroundColor: colors.navyLight,

      alignItems: 'center',
      justifyContent: 'center',

      top: 18,

      left: '50%',

      marginLeft: -59,
    },

    buildingIcon: {
      color: '#FFFFFF',

      fontSize: 58,

      fontWeight: '700',
    },

    locationText: {
      position: 'absolute',

      left: 18,
      bottom: 17,
    },

    locationTitle: {
      color: '#FFFFFF',

      fontSize: 21,
      lineHeight: 26,

      fontWeight: '700',
    },

    locationSubtitle: {
      color: '#E7EDF8',

      fontSize: 15,
      lineHeight: 21,

      marginTop: 1,
    },

    /* =========================================================
       SECTION HEADER
    ========================================================= */

    sectionHeader: {
      flexDirection: 'row',

      alignItems: 'center',
      justifyContent: 'space-between',

      marginBottom: 13,
    },

    sectionTitle: {
      color: colors.text,

      fontSize: 20,
      lineHeight: 26,

      fontWeight: '700',

      letterSpacing: -0.25,
    },

    seeAll: {
      color: colors.blue,

      fontSize: 14,

      fontWeight: '600',
    },

    /* =========================================================
       EXCHANGE CARD
    ========================================================= */

    exchangeCard: {
      backgroundColor: colors.surface,

      borderRadius: 19,

      borderWidth: 1,
      borderColor: colors.border,

      paddingHorizontal: 17,
      paddingTop: 17,
      paddingBottom: 16,

      marginBottom: 27,
    },

    currencyRow: {
      flexDirection: 'row',

      alignItems: 'center',
      justifyContent: 'space-between',
    },

    currencySide: {
      flex: 1,

      flexDirection: 'row',

      alignItems: 'center',
    },

    flag: {
      fontSize: 24,

      marginRight: 10,
    },

    currencyCode: {
      color: colors.text,

      fontSize: 17,
      lineHeight: 21,

      fontWeight: '700',
    },

    currencyName: {
      color: colors.muted,

      fontSize: 11,
      lineHeight: 16,

      marginTop: 1,
    },

    exchangeArrow: {
      color: colors.text,

      fontSize: 28,

      fontWeight: '400',

      marginHorizontal: 7,
    },

    divider: {
      height: 1,

      backgroundColor: colors.border,

      marginTop: 16,
      marginBottom: 13,
    },

    rateRow: {
      flexDirection: 'row',

      alignItems: 'center',
      justifyContent: 'center',
    },

    rate: {
      color: colors.text,

      fontSize: 29,
      lineHeight: 35,

      fontWeight: '700',

      letterSpacing: -0.6,
    },

    equal: {
      color: colors.muted,

      fontSize: 25,
      lineHeight: 30,

      marginHorizontal: 9,

      fontWeight: '500',
    },

    updated: {
      color: colors.muted,

      textAlign: 'center',

      fontSize: 11,

      marginTop: 7,
    },

    /* =========================================================
       NEWS
    ========================================================= */

    newsHeader: {
      marginBottom: 13,
    },

    newsCard: {
      flexDirection: 'row',

      alignItems: 'center',

      backgroundColor: colors.surface,

      borderRadius: 18,

      borderWidth: 1,
      borderColor: colors.border,

      minHeight: 92,

      paddingHorizontal: 11,
      paddingVertical: 11,

      marginBottom: 11,
    },

    newsIconBox: {
      width: 52,
      height: 52,

      borderRadius: 15,

      backgroundColor: colors.soft,

      alignItems: 'center',
      justifyContent: 'center',

      marginRight: 12,
    },

    newsContent: {
      flex: 1,

      paddingRight: 8,
    },

    newsCategory: {
      color: colors.blue,

      fontSize: 11,
      lineHeight: 15,

      fontWeight: '700',

      marginBottom: 2,
    },

    newsTitle: {
      color: colors.text,

      fontSize: 14,
      lineHeight: 18,

      fontWeight: '600',
    },

    newsTime: {
      color: colors.muted,

      fontSize: 10,
      lineHeight: 14,

      marginTop: 4,
    },

    cardPressed: {
      opacity: 0.75,

      transform: [
        {
          scale: 0.99,
        },
      ],
    },

    bottomSpace: {
      height: 24,
    },
  });