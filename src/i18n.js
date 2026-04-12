import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      welcome: "Building digital experiences with",
      intro_short: "Hi, I'm Tu. A developer",
      intro_desc:
        "I focus on performance, minimalist interfaces, and clean code. You have ideas, I have solutions.",
      view_project: "View Projects",
      projects_done: "Projects Done",
      years_exp: "Years Experience",
      happy_clients: "Happy Clients",
      tech_stack: "Technologies used",
      nav: {
        home: "Home",
        project: "Projects",
        about: "About",
        contact: "Contact",
      },
    },
  },
  vi: {
    translation: {
      welcome: "Xây dựng trải nghiệm số với",
      intro_short: "Chào, tôi là Tú. Một lập trình viên",
      intro_desc:
        "Tôi tập trung vào hiệu năng, giao diện tối giản và code sạch. Bạn có ý tưởng, tôi có giải pháp.",
      view_project: "Xem dự án",
      projects_done: "Dự án hoàn thành",
      years_exp: "Năm kinh nghiệm",
      happy_clients: "Khách hàng hài lòng",
      tech_stack: "Công nghệ sử dụng",
      nav: {
        home: "Trang chủ",
        project: "Dự án",
        about: "Giới thiệu",
        contact: "Liên hệ",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "vi",
    fallbackLng: "vi",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
