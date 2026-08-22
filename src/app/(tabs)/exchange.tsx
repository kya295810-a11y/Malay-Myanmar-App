import React, { useState } from 'react';
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';

import { useAppTheme } from '@/theme/provider';

const EXCHANGE_RATE = 463.5;

const KL_DAY = require('../../../assets/images/kl-day.png');

export default function ExchangeScreen() {
  const { theme } = useAppTheme();

  const [amount, setAmount] = useState('100');
  const [reverse, setReverse] = useState(false);

  const [calculatedAmount, setCalculatedAmount] =
    useState(46350);

  const fromCurrency = reverse ? 'MMK' : 'MYR';
  const toCurrency = reverse ? 'MYR' : 'MMK';

  const fromFlag = reverse ? '🇲🇲' : '🇲🇾';
  const toFlag = reverse ? '🇲🇾' : '🇲🇲';

  const fromName = reverse
    ? 'Myanmar Kyat'
    : 'Malaysian Ringgit';

  const toName = reverse
    ? 'Malaysian Ringgit'
    : 'Myanmar Kyat';

  const formatNumber = (value: number) => {
    return value.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  /* ===========================================================
     CALCULATE
  =========================================================== */

  const calculateAmount = () => {
    const numericAmount = Number(amount) || 0;

    const result = reverse
      ? numericAmount / EXCHANGE_RATE
      : numericAmount * EXCHANGE_RATE;

    setCalculatedAmount(result);
  };

  /* ===========================================================
     SWAP
  =========================================================== */

  const swapCurrencies = () => {
    setReverse((current) => !current);

    const numericAmount = Number(amount) || 0;

    const result = !reverse
      ? numericAmount / EXCHANGE_RATE
      : numericAmount * EXCHANGE_RATE;

    setCalculatedAmount(result);
  };

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        {
          backgroundColor: theme.colors.background,
        },
      ]}
      edges={['top']}
    >
      <StatusBar style={theme.statusBarStyle} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* =====================================================
            HERO IMAGE
        ===================================================== */}

        <ImageBackground
          source={KL_DAY}
          style={styles.hero}
          imageStyle={styles.heroImage}
          resizeMode="cover"
        >
          {/* NATURAL PHOTO OVERLAY */}

          <View
            style={[
              styles.heroOverlay,
              {
                backgroundColor: theme.isDark
                  ? 'rgba(0,0,0,0.50)'
                  : 'rgba(0,0,0,0.20)',
              },
            ]}
          >
            {/* =================================================
                HEADER
            ================================================= */}

            <View style={styles.heroTop}>
              <View>
                <Text style={styles.heroTitle}>
                  Exchange Rate
                </Text>

                <View style={styles.updatedRow}>
                  <View style={styles.liveDot} />

                  <Text style={styles.updatedText}>
                    Updated 10:30 AM
                  </Text>
                </View>
              </View>

              <Pressable
                onPress={calculateAmount}
                style={({ pressed }) => [
                  styles.refreshButton,
                  pressed && styles.pressed,
                ]}
              >
                <Ionicons
                  name="refresh"
                  size={20}
                  color="#FFFFFF"
                />
              </Pressable>
            </View>

            {/* =================================================
                CURRENCY PAIR
            ================================================= */}

            <View style={styles.currencyPair}>
              {/* FROM */}

              <View style={styles.currencySide}>
                <Text style={styles.flag}>
                  {fromFlag}
                </Text>

                <Text style={styles.currencyCode}>
                  {fromCurrency}
                </Text>

                <Text style={styles.currencyName}>
                  {fromName}
                </Text>
              </View>

              {/* SWAP */}

              <Pressable
                onPress={swapCurrencies}
                style={({ pressed }) => [
                  styles.swapButton,
                  pressed && styles.pressed,
                ]}
              >
                <Ionicons
                  name="swap-horizontal"
                  size={24}
                  color={theme.colors.primary}
                />
              </Pressable>

              {/* TO */}

              <View
                style={[
                  styles.currencySide,
                  styles.currencySideRight,
                ]}
              >
                <Text style={styles.flag}>
                  {toFlag}
                </Text>

                <Text style={styles.currencyCode}>
                  {toCurrency}
                </Text>

                <Text style={styles.currencyName}>
                  {toName}
                </Text>
              </View>
            </View>

            {/* =================================================
                MAIN RATE
            ================================================= */}

            <View style={styles.rateContainer}>
              <Text style={styles.rateOne}>
                1 {fromCurrency}
              </Text>

              <Text style={styles.rateEqual}>
                =
              </Text>

              <View style={styles.rateNumberRow}>
                <Text style={styles.rateNumber}>
                  {reverse
                    ? formatNumber(
                        1 / EXCHANGE_RATE
                      )
                    : formatNumber(
                        EXCHANGE_RATE
                      )}
                </Text>

                <Text style={styles.rateCurrency}>
                  {toCurrency}
                </Text>
              </View>
            </View>

            {/* =================================================
                TODAY CHANGE
            ================================================= */}

            <View style={styles.changeBadge}>
              <Ionicons
                name="trending-up"
                size={15}
                color="#078A50"
              />

              <Text style={styles.changeText}>
                +0.50 (0.11%) Today
              </Text>
            </View>
          </View>
        </ImageBackground>

        {/* =====================================================
            CURRENCY CONVERTER
        ===================================================== */}

        <View
          style={[
            styles.converterSection,
            {
              backgroundColor: theme.colors.surface,
              borderColor: theme.colors.border,
            },
          ]}
        >
          {/* HEADER */}

          <View style={styles.converterHeader}>
            <View>
              <Text
                style={[
                  styles.converterTitle,
                  {
                    color: theme.colors.text,
                  },
                ]}
              >
                Currency Converter
              </Text>

              <Text
                style={[
                  styles.converterSubtitle,
                  {
                    color: theme.colors.textMuted,
                  },
                ]}
              >
                Enter an amount to calculate
              </Text>
            </View>

            <View
              style={[
                styles.calculatorIcon,
                {
                  backgroundColor:
                    theme.colors.primarySoft,
                },
              ]}
            >
              <Ionicons
                name="calculator-outline"
                size={21}
                color={theme.colors.primary}
              />
            </View>
          </View>

          {/* =================================================
              FROM INPUT
          ================================================= */}

          <View
            style={[
              styles.inputCard,
              {
                backgroundColor:
                  theme.colors.elevated,
                borderColor:
                  theme.colors.border,
              },
            ]}
          >
            <View style={styles.inputLeft}>
              <Text style={styles.inputFlag}>
                {fromFlag}
              </Text>

              <View>
                <Text
                  style={[
                    styles.inputCurrency,
                    {
                      color: theme.colors.text,
                    },
                  ]}
                >
                  {fromCurrency}
                </Text>

                <Text
                  style={[
                    styles.inputCurrencyName,
                    {
                      color:
                        theme.colors.textMuted,
                    },
                  ]}
                >
                  {fromName}
                </Text>
              </View>
            </View>

            <TextInput
              value={amount}
              onChangeText={setAmount}
              keyboardType="decimal-pad"
              selectTextOnFocus
              style={[
                styles.amountInput,
                {
                  color: theme.colors.text,
                },
              ]}
              placeholder="0.00"
              placeholderTextColor={
                theme.colors.textMuted
              }
            />
          </View>

          {/* =================================================
              MIDDLE SWAP
          ================================================= */}

          <View style={styles.middleSwapContainer}>
            <Pressable
              onPress={swapCurrencies}
              style={({ pressed }) => [
                styles.middleSwap,
                {
                  backgroundColor:
                    theme.colors.primary,
                },
                pressed && styles.pressed,
              ]}
            >
              <Ionicons
                name="swap-vertical"
                size={21}
                color="#FFFFFF"
              />
            </Pressable>
          </View>

          {/* =================================================
              RESULT
          ================================================= */}

          <View
            style={[
              styles.inputCard,
              {
                backgroundColor:
                  theme.colors.elevated,
                borderColor:
                  theme.colors.border,
              },
            ]}
          >
            <View style={styles.inputLeft}>
              <Text style={styles.inputFlag}>
                {toFlag}
              </Text>

              <View>
                <Text
                  style={[
                    styles.inputCurrency,
                    {
                      color: theme.colors.text,
                    },
                  ]}
                >
                  {toCurrency}
                </Text>

                <Text
                  style={[
                    styles.inputCurrencyName,
                    {
                      color:
                        theme.colors.textMuted,
                    },
                  ]}
                >
                  {toName}
                </Text>
              </View>
            </View>

            <Text
              style={[
                styles.convertedAmount,
                {
                  color: theme.colors.primary,
                },
              ]}
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              {formatNumber(calculatedAmount)}
            </Text>
          </View>

          {/* =================================================
              CALCULATE BUTTON
          ================================================= */}

          <Pressable
            onPress={calculateAmount}
            style={({ pressed }) => [
              styles.calculateButton,
              {
                backgroundColor:
                  theme.colors.primary,
              },
              pressed && styles.pressed,
            ]}
          >
            <Ionicons
              name="calculator"
              size={18}
              color="#FFFFFF"
            />

            <Text style={styles.calculateText}>
              Calculate Amount
            </Text>
          </Pressable>

          {/* =================================================
              RATE INFORMATION
          ================================================= */}

          <View style={styles.rateInfo}>
            <Text
              style={[
                styles.rateInfoText,
                {
                  color:
                    theme.colors.textMuted,
                },
              ]}
            >
              1 {fromCurrency} ={' '}
              {reverse
                ? formatNumber(
                    1 / EXCHANGE_RATE
                  )
                : formatNumber(
                    EXCHANGE_RATE
                  )}{' '}
              {toCurrency}
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

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  scrollContent: {
    paddingBottom: 25,
  },

  /* =========================================================
     HERO
  ========================================================= */

  hero: {
    minHeight: 405,
    overflow: 'hidden',
    borderBottomLeftRadius: 34,
    borderBottomRightRadius: 34,
  },

  heroImage: {
    borderBottomLeftRadius: 34,
    borderBottomRightRadius: 34,
  },

  heroOverlay: {
    flex: 1,
    minHeight: 405,

    paddingHorizontal: 20,
    paddingTop: 17,
    paddingBottom: 28,
  },

  /* =========================================================
     HEADER
  ========================================================= */

  heroTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  heroTitle: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: -0.8,

    textShadowColor:
      'rgba(0,0,0,0.25)',
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowRadius: 5,
  },

  updatedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },

  liveDot: {
    width: 7,
    height: 7,
    borderRadius: 4,

    backgroundColor: '#66F2A2',

    marginRight: 7,
  },

  updatedText: {
    color: 'rgba(255,255,255,0.92)',
    fontSize: 12,
    fontWeight: '500',
  },

  refreshButton: {
    width: 43,
    height: 43,
    borderRadius: 22,

    backgroundColor:
      'rgba(255,255,255,0.20)',

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor:
      'rgba(255,255,255,0.25)',
  },

  /* =========================================================
     CURRENCY PAIR
  ========================================================= */

  currencyPair: {
    marginTop: 29,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  currencySide: {
    flex: 1,
    alignItems: 'flex-start',
  },

  currencySideRight: {
    alignItems: 'flex-end',
  },

  flag: {
    fontSize: 33,
    marginBottom: 5,
  },

  currencyCode: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '800',

    textShadowColor:
      'rgba(0,0,0,0.25)',
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 3,
  },

  currencyName: {
    color: 'rgba(255,255,255,0.80)',
    fontSize: 10,
    marginTop: 2,
  },

  swapButton: {
    width: 47,
    height: 47,
    borderRadius: 24,

    backgroundColor: '#FFFFFF',

    alignItems: 'center',
    justifyContent: 'center',

    marginHorizontal: 12,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.16,
    shadowRadius: 6,

    elevation: 4,
  },

  /* =========================================================
     MAIN RATE
  ========================================================= */

  rateContainer: {
    alignItems: 'center',
    marginTop: 26,
  },

  rateOne: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
  },

  rateEqual: {
    color: 'rgba(255,255,255,0.72)',
    fontSize: 18,
    marginVertical: 2,
  },

  rateNumberRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },

  rateNumber: {
    color: '#FFFFFF',
    fontSize: 43,
    fontWeight: '900',
    letterSpacing: -1.5,

    textShadowColor:
      'rgba(0,0,0,0.25)',
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowRadius: 5,
  },

  rateCurrency: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 6,
  },

  /* =========================================================
     CHANGE
  ========================================================= */

  changeBadge: {
    alignSelf: 'center',

    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor:
      'rgba(221,251,234,0.96)',

    borderRadius: 18,

    paddingHorizontal: 13,
    paddingVertical: 7,

    marginTop: 13,
  },

  changeText: {
    color: '#078A50',
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 5,
  },

  /* =========================================================
     CONVERTER
  ========================================================= */

  converterSection: {
    marginHorizontal: 14,
    marginTop: -18,

    borderRadius: 30,

    padding: 18,

    borderWidth: 1,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    shadowRadius: 10,

    elevation: 3,
  },

  converterHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginBottom: 17,
  },

  converterTitle: {
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: -0.4,
  },

  converterSubtitle: {
    fontSize: 11,
    marginTop: 3,
  },

  calculatorIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,

    alignItems: 'center',
    justifyContent: 'center',
  },

  /* =========================================================
     INPUT
  ========================================================= */

  inputCard: {
    minHeight: 82,

    borderRadius: 19,

    borderWidth: 1,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingHorizontal: 13,
  },

  inputLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  inputFlag: {
    fontSize: 29,
    marginRight: 9,
  },

  inputCurrency: {
    fontSize: 17,
    fontWeight: '800',
  },

  inputCurrencyName: {
    fontSize: 10,
    marginTop: 2,
  },

  amountInput: {
    flex: 1,

    fontSize: 25,
    fontWeight: '800',

    textAlign: 'right',

    paddingLeft: 8,
  },

  convertedAmount: {
    flex: 1,

    fontSize: 24,
    fontWeight: '900',

    textAlign: 'right',

    paddingLeft: 5,
  },

  /* =========================================================
     MIDDLE SWAP
  ========================================================= */

  middleSwapContainer: {
    height: 22,

    alignItems: 'center',
    justifyContent: 'center',

    zIndex: 3,
  },

  middleSwap: {
    width: 39,
    height: 39,
    borderRadius: 20,

    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.16,
    shadowRadius: 5,

    elevation: 3,
  },

  /* =========================================================
     CALCULATE BUTTON
  ========================================================= */

  calculateButton: {
    height: 48,

    borderRadius: 15,

    marginTop: 17,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 6,

    elevation: 3,
  },

  calculateText: {
    color: '#FFFFFF',

    fontSize: 14,
    fontWeight: '800',

    marginLeft: 7,
  },

  /* =========================================================
     RATE INFO
  ========================================================= */

  rateInfo: {
    alignItems: 'center',
    marginTop: 13,
  },

  rateInfoText: {
    fontSize: 11,
    fontWeight: '600',
  },

  /* =========================================================
     PRESS
  ========================================================= */

  pressed: {
    opacity: 0.72,

    transform: [
      {
        scale: 0.98,
      },
    ],
  },

  /* =========================================================
     BOTTOM
  ========================================================= */

  bottomSpace: {
    height: 25,
  },
});