"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";


i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        name: "Hi, I’m Haneen.",
        skilsline1: "These are not just skills…",
            skilsline2: " these are the tools",
                      skilsline3: "",
                       skilsline4: ""

      }
    },
    ar: {
      translation: {
        name: "اهلا، انا حنين",
        skilsline1: "عنّي",
                skilsline2: "",
                      skilsline3: ""
      }
    }
  },
  lng: "en", 
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;