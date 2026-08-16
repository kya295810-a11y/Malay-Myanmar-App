import { PlaceholderScreen } from '@/components/states/placeholder-screen';
import { useTranslation } from '@/locales';

export default function ExchangeScreen() {
  const { t } = useTranslation();

  return (
    <PlaceholderScreen
      title={t('screens.exchange.title')}
      description={t('screens.exchange.description')}
      sections={[
        t('screens.exchange.sections.market'),
        t('screens.exchange.sections.source'),
        t('screens.exchange.sections.offline'),
      ]}
    />
  );
}
