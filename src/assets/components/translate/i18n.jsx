import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './json/en.json';
import translationPL from './json/pl.json';
import translationUKR from './json/ukr.json';

const resources = {
    en: { translation: translationEN },
    pl: { translation: translationPL },
    ukr: { translation: translationUKR },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        interpolation: { escapeValue: false },
    });

export default i18n;
