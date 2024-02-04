import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your translation files
import translationEN from '@public/locales/en/translation.json';
import translationES from '@public/locales/es/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // default language
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
