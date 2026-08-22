import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { useAppTheme } from '@/theme/provider';
import type { ThemeColors } from '@/theme/types';

/* ============================================================
   TYPES
============================================================ */

type NewsType = 'photo' | 'video';

type NewsItem = {
  id: string;
  category: string;
  title: string;
  time: string;
  image: string;
  type: NewsType;
};

/* ============================================================
   TEMPORARY NEWS DATA
   ------------------------------------------------------------
   Later this will come from ADMIN / DATABASE.
   Maximum 10 latest news items.
============================================================ */

const NEWS_DATA: NewsItem[] = [
  {
    id: '1',
    category: 'Malaysia',
    title:
      'Malaysia latest news and important updates from across the country',
    time: '2 hours ago',
    image:
      'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=90',
    type: 'photo',
  },
  {
    id: '2',
    category: 'Malaysia',
    title:
      'Kuala Lumpur sees continued development as the city prepares for new changes',
    time: '4 hours ago',
    image:
      'https://images.unsplash.com/photo-1508964942454-1a56651d54ac?auto=format&fit=crop&w=1200&q=90',
    type: 'photo',
  },
  {
    id: '3',
    category: 'Business',
    title:
      'Ringgit movement draws attention as regional markets continue to change',
    time: '6 hours ago',
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=90',
    type: 'photo',
  },
  {
    id: '4',
    category: 'World',
    title:
      'Global markets continue to react to important international developments',
    time: 'Yesterday',
    image:
      'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=90',
    type: 'video',
  },
  {
    id: '5',
    category: 'Technology',
    title:
      'New technology trends are changing the way people live and work',
    time: 'Yesterday',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=90',
    type: 'photo',
  },
  {
    id: '6',
    category: 'Malaysia',
    title:
      'New initiatives bring opportunities and support communities across Malaysia',
    time: '2 days ago',
    image:
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=90',
    type: 'photo',
  },
  {
    id: '7',
    category: 'Business',
    title:
      'Businesses prepare for another changing market and new opportunities',
    time: '2 days ago',
    image:
      'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=1200&q=90',
    type: 'video',
  },
  {
    id: '8',
    category: 'World',
    title:
      'Important international developments that everyone should know about',
    time: '3 days ago',
    image:
      'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=90',
    type: 'photo',
  },
  {
    id: '9',
    category: 'Malaysia',
    title:
      'Weather conditions and travel updates you should know this week',
    time: '3 days ago',
    image:
      'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&w=1200&q=90',
    type: 'photo',
  },
  {
    id: '10',
    category: 'Technology',
    title:
      'Digital services continue to grow across Malaysia and the region',
    time: '4 days ago',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=90',
    type: 'video',
  },
];

/* ============================================================
   NEWS SCREEN
============================================================ */

export default function NewsScreen() {
  const { width, height } = useWindowDimensions();

  /* ==========================================================
     GLOBAL THEME
     ----------------------------------------------------------
     Uses the same theme provider as Home.
  ========================================================== */

  const { theme } = useAppTheme();

  const styles = createStyles(theme.colors);

  /* ==========================================================
     RESPONSIVE IMAGE HEIGHT
  ========================================================== */

  const imageHeight =
    height <= 700
      ? 112
      : height <= 780
        ? 128
        : 142;

  const horizontalPadding = 18;

  const contentWidth = width - horizontalPadding * 2;

  /* ==========================================================
     NEWS CARD
  ========================================================== */

  const renderNewsCard = ({
    item,
  }: {
    item: NewsItem;
  }) => {
    return (
      <Pressable
        style={({ pressed }) => [
          styles.newsCard,
          pressed && styles.cardPressed,
        ]}
        onPress={() => {}}
      >
        {/* ====================================================
            IMAGE
        ==================================================== */}

        <View
          style={[
            styles.imageContainer,
            {
              height: imageHeight,
            },
          ]}
        >
          <Image
            source={{ uri: item.image }}
            style={styles.newsImage}
            resizeMode="cover"
          />

          <View style={styles.imageOverlay} />

          {/* CATEGORY */}

          <View style={styles.imageCategory}>
            <Text
              style={styles.imageCategoryText}
              allowFontScaling={false}
              numberOfLines={1}
            >
              {item.category}
            </Text>
          </View>

          {/* VIDEO */}

          {item.type === 'video' && (
            <View style={styles.videoButton}>
              <Ionicons
                name="play"
                size={16}
                color="#FFFFFF"
              />
            </View>
          )}

          {/* BOOKMARK */}

          <Pressable
            style={styles.imageBookmark}
            hitSlop={8}
            onPress={() => {}}
          >
            <Ionicons
              name="bookmark-outline"
              size={18}
              color="#FFFFFF"
            />
          </Pressable>
        </View>

        {/* ====================================================
            CONTENT
        ==================================================== */}

        <View style={styles.newsContent}>
          <Text
            style={styles.newsTitle}
            numberOfLines={3}
            ellipsizeMode="tail"
            allowFontScaling={false}
          >
            {item.title}
          </Text>

          {/* META */}

          <View style={styles.metaRow}>
            <View style={styles.timeContainer}>
              <Ionicons
                name="time-outline"
                size={12}
                color={theme.colors.textMuted}
              />

              <Text
                style={styles.time}
                numberOfLines={1}
                allowFontScaling={false}
              >
                {item.time}
              </Text>
            </View>

            {item.type === 'video' && (
              <View style={styles.videoLabel}>
                <Ionicons
                  name="videocam-outline"
                  size={12}
                  color={theme.colors.primary}
                />

                <Text
                  style={styles.videoLabelText}
                  allowFontScaling={false}
                >
                  Video
                </Text>
              </View>
            )}
          </View>
        </View>
      </Pressable>
    );
  };

  /* ==========================================================
     SCREEN
  ========================================================== */

  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={['top']}
    >
      {/* GLOBAL STATUS BAR */}

      <StatusBar style={theme.statusBarStyle} />

      <View style={styles.container}>
        {/* ====================================================
            HEADER
        ==================================================== */}

        <View style={styles.header}>
          <Text
            style={styles.title}
            allowFontScaling={false}
          >
            News
          </Text>

          <View style={styles.headerActions}>
            {/* SEARCH */}

            <Pressable
              style={({ pressed }) => [
                styles.headerButton,
                pressed && styles.buttonPressed,
              ]}
              hitSlop={6}
              onPress={() => {}}
            >
              <Ionicons
                name="search-outline"
                size={21}
                color={theme.colors.text}
              />
            </Pressable>

            {/* NOTIFICATION */}

            <Pressable
              style={({ pressed }) => [
                styles.headerButton,
                pressed && styles.buttonPressed,
              ]}
              hitSlop={6}
              onPress={() => {}}
            >
              <Ionicons
                name="notifications-outline"
                size={21}
                color={theme.colors.text}
              />

              <View style={styles.notificationDot} />
            </Pressable>
          </View>
        </View>

        {/* ====================================================
            ALL NEWS HEADER
        ==================================================== */}

        <View style={styles.sectionHeader}>
          <Text
            style={styles.sectionTitle}
            allowFontScaling={false}
          >
            All News
          </Text>

          <Text
            style={styles.latestText}
            allowFontScaling={false}
          >
            Latest
          </Text>
        </View>

        {/* ====================================================
            NEWS LIST
        ==================================================== */}

        <FlatList
          data={NEWS_DATA}
          keyExtractor={(item) => item.id}
          renderItem={renderNewsCard}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          directionalLockEnabled
          bounces
          nestedScrollEnabled
          contentContainerStyle={[
            styles.listContent,
            {
              width: contentWidth,
            },
          ]}
        />
      </View>
    </SafeAreaView>
  );
}

/* ============================================================
   STYLES
   ------------------------------------------------------------
   All light/dark colors come from ThemeColors.
============================================================ */

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    /* ========================================================
       SCREEN
    ======================================================== */

    safeArea: {
      flex: 1,
      backgroundColor: colors.background,
    },

    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: 18,
    },

    /* ========================================================
       HEADER
    ======================================================== */

    header: {
      height: 58,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 3,
      marginBottom: 8,
    },

    title: {
      color: colors.text,
      fontSize: 30,
      lineHeight: 36,
      fontWeight: '800',
      letterSpacing: -0.9,
      includeFontPadding: false,
    },

    headerActions: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 9,
    },

    headerButton: {
      width: 44,
      height: 44,
      borderRadius: 22,
      backgroundColor: colors.surface,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: colors.border,

      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.06,
      shadowRadius: 8,
      elevation: 2,
    },

    buttonPressed: {
      opacity: 0.7,
      transform: [
        {
          scale: 0.94,
        },
      ],
    },

    notificationDot: {
      position: 'absolute',
      top: 9,
      right: 10,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: colors.primary,
    },

    /* ========================================================
       SECTION HEADER
    ======================================================== */

    sectionHeader: {
      height: 35,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 7,
    },

    sectionTitle: {
      color: colors.text,
      fontSize: 21,
      lineHeight: 27,
      fontWeight: '700',
      letterSpacing: -0.35,
      includeFontPadding: false,
    },

    latestText: {
      color: colors.primary,
      fontSize: 11,
      lineHeight: 15,
      fontWeight: '700',
      includeFontPadding: false,
    },

    /* ========================================================
       LIST
    ======================================================== */

    listContent: {
      paddingTop: 1,
      paddingBottom: 14,
    },

    /* ========================================================
       NEWS CARD
    ======================================================== */

    newsCard: {
      width: '100%',
      backgroundColor: colors.surface,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: colors.border,
      overflow: 'hidden',
      marginBottom: 11,

      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.065,
      shadowRadius: 10,
      elevation: 2,
    },

    /* ========================================================
       IMAGE
    ======================================================== */

    imageContainer: {
      width: '100%',
      backgroundColor: colors.surface,
      position: 'relative',
      overflow: 'hidden',
    },

    newsImage: {
      width: '100%',
      height: '100%',
    },

    imageOverlay: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 70,
      backgroundColor: 'rgba(0,0,0,0.18)',
    },

    /* ========================================================
       CATEGORY
    ======================================================== */

    imageCategory: {
      position: 'absolute',
      left: 12,
      bottom: 11,
      paddingHorizontal: 9,
      paddingVertical: 5,
      borderRadius: 10,
      backgroundColor: 'rgba(255,255,255,0.94)',
    },

    imageCategoryText: {
      color: '#087CFF',
      fontSize: 10,
      lineHeight: 13,
      fontWeight: '700',
      includeFontPadding: false,
    },

    /* ========================================================
       VIDEO BUTTON
    ======================================================== */

    videoButton: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: 48,
      height: 48,
      marginLeft: -24,
      marginTop: -24,
      borderRadius: 24,
      backgroundColor: 'rgba(10,23,42,0.82)',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 2,
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,0.35)',
    },

    /* ========================================================
       BOOKMARK
    ======================================================== */

    imageBookmark: {
      position: 'absolute',
      top: 11,
      right: 11,
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: 'rgba(10,23,42,0.48)',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,0.25)',
    },

    /* ========================================================
       CONTENT
    ======================================================== */

    newsContent: {
      paddingHorizontal: 14,
      paddingTop: 11,
      paddingBottom: 11,
    },

    newsTitle: {
      color: colors.text,
      fontSize: 16,
      lineHeight: 21,
      fontWeight: '700',
      letterSpacing: -0.15,
      includeFontPadding: false,
    },

    /* ========================================================
       META
    ======================================================== */

    metaRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 8,
      minHeight: 17,
    },

    timeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    time: {
      color: colors.textMuted,
      fontSize: 10,
      lineHeight: 14,
      fontWeight: '500',
      marginLeft: 4,
      includeFontPadding: false,
    },

    videoLabel: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 10,
      paddingLeft: 10,
      borderLeftWidth: 1,
      borderLeftColor: colors.border,
    },

    videoLabelText: {
      color: colors.primary,
      fontSize: 10,
      lineHeight: 14,
      fontWeight: '600',
      marginLeft: 4,
      includeFontPadding: false,
    },

    /* ========================================================
       PRESSED CARD
    ======================================================== */

    cardPressed: {
      opacity: 0.75,
      transform: [
        {
          scale: 0.99,
        },
      ],
    },
  });