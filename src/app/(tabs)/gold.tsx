import { PlaceholderScreen } from '@/components/states/placeholder-screen';
import { useTranslation } from '@/locales';

export default function GoldScreen() {
  const { t } = useTranslation();

  return (
    <PlaceholderScreen
      title={t('screens.gold.title')}
      description={t('screens.gold.description')}
      sections={[
        t('screens.gold.sections.catalog'),
        t('screens.gold.sections.source'),
        t('screens.gold.sections.availability'),
      ]}
    />
  );
}
