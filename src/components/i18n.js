import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      headline: "Home",
      hi: "About us",
      home: "Portfolio",
      about: "Work that we produce for our clients",
      loc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
      title: "Get more details",
    },
  },
  uz: {
    translation: {
      headline: "Bosh sahifa",
      hi: "Biz haqimizda",
      home: "Loyihalar",
      about: "Mijozlarimiz uchun yaratgan ishlarimiz",
      loc: "Lorem Ipsum — bu bosma va matn terish sanoatining shunchaki namunaviy matni. Lorem Ipsum uzoq yillardan beri sanoat standarti bo‘lib kelmoqda.",
      title: "Batafsil malumot oling",
    },
  },
  ru: {
    translation: {
      headline: "Главная",
      hi: "О нас",
      home: "Портфолио",
      about: "Работа, которую мы выполняем для наших клиентов",
      loc: "Lorem Ipsum — это просто фиктивный текст полиграфической и наборной индустрии. Lorem Ipsum давно стал отраслевым стандартом.",
      title: "Узнать больше",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
