import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./locales/en";

i18n
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    debug: true,
    resources: {
      en: { translation: translationEn },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
