import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    
    // Map language codes
    load: 'languageOnly', // This will load 'en' for 'en-US', 'en-GB', etc.
    
    interpolation: {
      escapeValue: false,
    },
    
    backend: {
      loadPath: '/nicholas_portfolio/locales/{{lng}}/{{ns}}.json',
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    
    // Define your namespaces
    ns: ['navigation', 'hero', 'contact', 'footer', 'portfolio', 'about', 'awesomegames', 'casestudy', 'hybrascollab', 'p3mplatform', 'photox', 'myholybooks'],

    saveMissing: false,
    missingKeyHandler: false,
  });

export default i18n;