import { PlaceholderScreen } from '@/components/states/placeholder-screen';
import { useTranslation } from '@/locales';

export default function NewsScreen() {
  const { t } = useTranslation();

  return (
    <PlaceholderScreen
      title={t('screens.news.title')}
      description={t('screens.news.description')}
      sections={[
        t('screens.news.sections.categories'),
        t('screens.news.sections.pagination'),
        t('screens.news.sections.status'),
      ]}
    />
  );
}
