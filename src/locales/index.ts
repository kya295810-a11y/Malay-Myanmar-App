import { I18n } from 'i18n-js';
import { getLocales } from 'expo-localization';

import { APP_METADATA, SupportedLanguage } from '@/constants/app';

import en from './en/common';
import my from './my/common';

const translations = { en, my };

const i18n = new I18n(translations);
i18n.defaultLocale = 'en';
i18n.enableFallback = true;

function isSupportedLanguage(value: string | null | undefined): value is SupportedLanguage {
  return APP_METADATA.supportedLanguages.includes(value as SupportedLanguage);
}

export function initializeI18n(language: string | null | undefined) {
  const systemLanguage = getLocales()[0]?.languageCode;
  i18n.locale = isSupportedLanguage(language)
    ? language
    : isSupportedLanguage(systemLanguage)
      ? systemLanguage
      : 'en';
}

export function useTranslation() {
  return {
    locale: i18n.locale,
    t: (key: string) => i18n.t(key),
  };
}
