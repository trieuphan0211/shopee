import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import translationEN from './eng.translation';
import translationVI from './vi.translation';

// the translations
const resources = {
    0: {
        translation: translationEN,
    },
    1: {
        translation: translationVI,
    },
};

i18n.use(Backend)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: '1',
        debug: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

export default i18n;
