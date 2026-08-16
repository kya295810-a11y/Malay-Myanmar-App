import { StyleSheet, View } from 'react-native';

import { Screen } from '@/components/common/screen';
import { AppText } from '@/components/common/text';
import { useAppTheme } from '@/theme/provider';

type PlaceholderScreenProps = {
  description: string;
  sections: string[];
  title: string;
};

export function PlaceholderScreen({
  description,
  sections,
  title,
}: PlaceholderScreenProps) {
  const { theme } = useAppTheme();

  return (
    <Screen>
      <View style={[styles.hero, { gap: theme.spacing[3] }]}>
        <AppText variant="display">{title}</AppText>
        <AppText color={theme.colors.textSecondary} style={styles.description}>
          {description}
        </AppText>
      </View>

      <View
        style={[
          styles.panel,
          {
            ...theme.shadows.sm,
            backgroundColor: theme.colors.surface,
            borderColor: theme.colors.border,
            borderRadius: theme.radius.xl,
            gap: theme.spacing[4],
            padding: theme.spacing[5],
          },
        ]}
      >
        <AppText variant="title">Foundation Focus</AppText>
        {sections.map((section) => (
          <View key={section} style={[styles.item, { gap: theme.spacing[2] }]}>
            <View
              style={[
                styles.marker,
                {
                  backgroundColor: theme.colors.primarySoft,
                  borderRadius: theme.radius.full,
                },
              ]}
            />
            <AppText color={theme.colors.textSecondary} style={styles.itemText}>
              {section}
            </AppText>
          </View>
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  description: {
    maxWidth: 640,
  },
  hero: {
    width: '100%',
  },
  item: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  itemText: {
    flex: 1,
  },
  marker: {
    height: 10,
    marginTop: 8,
    width: 10,
  },
  panel: {
    borderWidth: StyleSheet.hairlineWidth,
    width: '100%',
  },
});
