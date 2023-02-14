import type { Config } from 'sveltekit-i18n';
import i18n from 'sveltekit-i18n';

const config: Config = {
  loaders: [
    {
      locale: 'en-US',
      key: 'common',
      loader: async () => (await import('$/locales/en-US.json')).default,
    },
    {
      locale: 'pt-BR',
      key: 'common',
      loader: async () => (await import('$/locales/pt-BR.json')).default,
    },
  ],
  fallbackLocale: 'pt-BR',
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
