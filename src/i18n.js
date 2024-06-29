// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        navbar: {
          home: "home",
          about: "about us",
          services: "services",
          products: "products",
          blogs: "blogs",
          contact: "contact",
          language: "العربية",
        },
        footer: {
          about:
            "We are an insurance agency with more than 10 years of experience, which provides advice and solutions for risk management and insurance through products designed to suit your needs.",
          quickLinks: {
            title: "Quick Links",
            home: "home",
            about: "About Us",
            services: "Services",
            solution: "Solution",
            blogs: "Blog",
            contact: "Contact Us",
          },
          contact: {
            title: "contact us",
            location:
              "In front of the Comercle Center, Fleur Show, you: 331 Saleh Ad Din Al Awabi Rd.A. Box 27663 Riyadh 11427 Kingdom of Saudi Arabia",
          },
          getInTouch: {
            title: "Get In Touch",
            name: "name",
            email: "email",
            message: "message",
            send: "send message",
          },
          lower: "Copyright  2024 GPCO - All Rights Reserved ",
        },
      },
    },
    ar: {
      translation: {
        navbar: {
          home: "الرئيسية",
          about: "من نحن",
          services: "خدماتنا",
          products: "حلولنا",
          blogs: "مقالات",
          contact: "تواصل معنا",
          language: "English",
        },
        footer: {
          about:
            "نحن وكالة تأمين تتمتع بخبرة تزيد عن 10 سنوات، تقدم الاستشارات والحلول لإدارة المخاطر والتأمين من خلال منتجات مصممة لتناسب احتياجاتك.",
          quickLinks: {
            title: "روابط سريعة",
            home: "الرئيسيه",
            about: "من نحن",
            services: "الخدمات",
            solution: "حلولنا",
            blogs: "مقالات",
            contact: "تواصل معنا",
          },
          contact: {
            title: "تواصل معنا",
            location:
              "مركز الأمم التجاري الطابق الثالث الوحدة: 331 طريق صلاح الدين الأيوبي ص.ب. ص.ب 27663 الرياض 11427 المملكة العربية السعودية",
          },
          getInTouch: {
            title: "ارسل لنا",
            name: "الاسم",
            email: "البريد الألكترونى",
            message: "أدخل الرسالة هنا",
            send: "أرسل رسالة",
          },
          lower: "حقوق النشر 2024 لشركة جيبكو - جميع الحقوق محفوظة ",
        },
      },
    },
  },

  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
