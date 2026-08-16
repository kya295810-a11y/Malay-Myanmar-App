import { ThemeColors, ThemeShadows, ThemeTypography } from '@/theme/types';

export const spacing = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 24,
  6: 32,
  7: 40,
  8: 56,
} as const;

export const radius = {
  full: 999,
  lg: 20,
  md: 16,
  sm: 12,
  xl: 28,
} as const;

export const typography: ThemeTypography = {
  body: {
    fontFamily: 'System',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.1,
    lineHeight: 24,
  },
  button: {
    fontFamily: 'System',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.2,
    lineHeight: 20,
  },
  caption: {
    fontFamily: 'System',
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0.2,
    lineHeight: 16,
  },
  display: {
    fontFamily: 'System',
    fontSize: 34,
    fontWeight: '700',
    letterSpacing: -0.8,
    lineHeight: 40,
  },
  heading: {
    fontFamily: 'System',
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: -0.5,
    lineHeight: 34,
  },
  label: {
    fontFamily: 'System',
    fontSize: 13,
    fontWeight: '500',
    letterSpacing: 0.1,
    lineHeight: 18,
  },
  title: {
    fontFamily: 'System',
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: -0.2,
    lineHeight: 28,
  },
};

export const lightColors: ThemeColors = {
  background: '#F4F6F8',
  border: '#D8DEE6',
  elevated: '#FFFFFF',
  error: '#C74A41',
  primary: '#0B5FFF',
  primarySoft: '#DDE8FF',
  secondary: '#0E8B72',
  success: '#217A57',
  surface: '#FFFFFF',
  text: '#122033',
  textMuted: '#617187',
  textSecondary: '#425267',
  warning: '#A56B00',
};

export const darkColors: ThemeColors = {
  background: '#0D1420',
  border: '#243244',
  elevated: '#162130',
  error: '#F0877F',
  primary: '#7AA7FF',
  primarySoft: '#1C315A',
  secondary: '#67D2BC',
  success: '#6FD3A4',
  surface: '#121C2A',
  text: '#F5F8FC',
  textMuted: '#91A2B8',
  textSecondary: '#BECADA',
  warning: '#F5C36E',
};

export const lightShadows: ThemeShadows = {
  md: {
    elevation: 6,
    shadowColor: '#08111D',
    shadowOffset: { height: 14, width: 0 },
    shadowOpacity: 0.08,
    shadowRadius: 28,
  },
  sm: {
    elevation: 3,
    shadowColor: '#08111D',
    shadowOffset: { height: 6, width: 0 },
    shadowOpacity: 0.05,
    shadowRadius: 14,
  },
};

export const darkShadows: ThemeShadows = {
  md: {
    elevation: 8,
    shadowColor: '#000000',
    shadowOffset: { height: 16, width: 0 },
    shadowOpacity: 0.28,
    shadowRadius: 30,
  },
  sm: {
    elevation: 4,
    shadowColor: '#000000',
    shadowOffset: { height: 8, width: 0 },
    shadowOpacity: 0.22,
    shadowRadius: 18,
  },
};
