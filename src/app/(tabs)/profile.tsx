import { PlaceholderScreen } from '@/components/states/placeholder-screen';
import { useTranslation } from '@/locales';

export default function ProfileScreen() {
  const { t } = useTranslation();

  return (
    <PlaceholderScreen
      title={t('screens.profile.title')}
      description={t('screens.profile.description')}
      sections={[
        t('screens.profile.sections.preferences'),
        t('screens.profile.sections.session'),
        t('screens.profile.sections.privacy'),
      ]}
    />
  );
}
