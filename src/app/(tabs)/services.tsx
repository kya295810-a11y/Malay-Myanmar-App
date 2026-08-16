import { PlaceholderScreen } from '@/components/states/placeholder-screen';
import { useTranslation } from '@/locales';

export default function ServicesScreen() {
  const { t } = useTranslation();

  return (
    <PlaceholderScreen
      title={t('screens.services.title')}
      description={t('screens.services.description')}
      sections={[
        t('screens.services.sections.directory'),
        t('screens.services.sections.filters'),
        t('screens.services.sections.expansion'),
      ]}
    />
  );
}
