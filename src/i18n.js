import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importar archivos de traducción
import enTranslations from './locales/en/translations.json';
import esTranslations from './locales/es/translations.json';
import ptTranslations from './locales/pt/translations.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    es: { translation: esTranslations },
    pt: { translation: ptTranslations },
  },
  lng: 'en', // Idioma por defecto
  fallbackLng: 'en', // Idioma de respaldo
  interpolation: {
    escapeValue: false, // No escapar valores (para usar HTML en traducciones)
  },
});

export default i18n;