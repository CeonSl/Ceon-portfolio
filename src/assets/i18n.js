import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from "../data/i18n/en/translation.json";
import spanish from "../data/i18n/es/translation.json";

const resources = {
  en: {
    translation: english,
  },
  es: {
    translation: spanish,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
