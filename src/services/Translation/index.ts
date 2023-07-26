import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import pt from './locales/pt.json';

i18n.use(initReactI18next).init({
  lng: 'pt',
  fallbackLng: 'pt',
  resources: {
    pt: {
      translation: pt
    },
    en: {
      translation: en
    }
  },
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
