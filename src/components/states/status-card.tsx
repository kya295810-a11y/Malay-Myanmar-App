import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/common/text';
import { useAppTheme } from '@/theme/provider';

type StatusCardProps = {
  actionLabel?: string;
  description: string;
  onActionPress?: () => void;
  title: string;
};

export function StatusCard({
  actionLabel,
  description,
  onActionPress,
  title,
}: StatusCardProps) {
  const { theme } = useAppTheme();

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.colors.elevated,
          borderColor: theme.colors.border,
          borderRadius: theme.radius.lg,
          gap: theme.spacing[3],
          padding: theme.spacing[4],
        },
      ]}
    >
      <AppText variant="title">{title}</AppText>
      <AppText color={theme.colors.textSecondary}>{description}</AppText>
      {actionLabel && onActionPress ? (
        <Pressable
          accessibilityRole="button"
          onPress={onActionPress}
          style={[
            styles.button,
            {
              backgroundColor: theme.colors.primarySoft,
              borderRadius: theme.radius.md,
              minHeight: 44,
              paddingHorizontal: theme.spacing[4],
              paddingVertical: theme.spacing[3],
            },
          ]}
        >
          <AppText color={theme.colors.primary} variant="button">
            {actionLabel}
          </AppText>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  card: {
    borderWidth: StyleSheet.hairlineWidth,
  },
});
