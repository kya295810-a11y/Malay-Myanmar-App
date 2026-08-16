import { TextStyle, ViewStyle } from 'react-native';

export type TypographyToken =
  | 'body'
  | 'button'
  | 'caption'
  | 'display'
  | 'heading'
  | 'label'
  | 'title';

export interface ThemeColors {
  background: string;
  border: string;
  elevated: string;
  error: string;
  primary: string;
  primarySoft: string;
  secondary: string;
  success: string;
  surface: string;
  text: string;
  textMuted: string;
  textSecondary: string;
  warning: string;
}

export interface ThemeShadows {
  md: ViewStyle;
  sm: ViewStyle;
}

export type ThemeTypography = Record<TypographyToken, TextStyle>;

export interface AppTheme {
  colors: ThemeColors;
  isDark: boolean;
  motion: {
    navigationAnimation: 'fade' | 'none' | 'simple_push' | 'slide_from_bottom' | 'slide_from_right';
    prefersReducedMotion: boolean;
  };
  radius: {
    full: number;
    lg: number;
    md: number;
    sm: number;
    xl: number;
  };
  shadows: ThemeShadows;
  spacing: Record<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8, number>;
  statusBarStyle: 'dark' | 'light';
  typography: ThemeTypography;
}
