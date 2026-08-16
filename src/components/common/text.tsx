import { PropsWithChildren } from 'react';
import { StyleSheet, Text, type StyleProp, type TextStyle } from 'react-native';

import { useAppTheme } from '@/theme/provider';
import { TypographyToken } from '@/theme/types';

type AppTextProps = PropsWithChildren<{
  color?: string;
  style?: StyleProp<TextStyle>;
  variant?: TypographyToken;
}>;

export function AppText({
  children,
  color,
  style,
  variant = 'body',
}: AppTextProps) {
  const { theme } = useAppTheme();

  return (
    <Text
      allowFontScaling
      style={[styles.base, theme.typography[variant], { color: color ?? theme.colors.text }, style]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  base: {
    includeFontPadding: false,
  },
});
