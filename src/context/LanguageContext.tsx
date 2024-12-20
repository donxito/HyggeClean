"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "en" | "da";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translate: (key: string) => string;
}

const translations = {
  da: {
    "nav.home": "Hjem",
    "nav.pricing": "Priser",
    "nav.gallery": "Galleri",
    "nav.contact": "Kontakt",
    "hero.title": "HyggeClean – Et rent hjem, et hyggeligt liv",
    "hero.subtitle": "Professionel rengøring i København",
    "hero.cta": "Kontakt mig nu",
    "about.title": "Hej, jeg hedder Maya",
    "about.description":
      "Jeg er en brasiliansk mor, der bor i København med over et års erfaring inden for professionel rengøring. Som mor forstår jeg vigtigheden af et rent og organiseret hjem, og hvordan det kan hjælpe dig med at fokusere på det, der virkelig betyder noget.",
    "features.professional": "Professionel service af høj kvalitet",
    "features.flexible": "Fleksible tidspunkter",
    "features.satisfaction": "Garanteret tilfredshed",
    "features.eco": "Miljøvenlige rengøringsmidler",
  },
  en: {
    "nav.home": "Home",
    "nav.pricing": "Pricing",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "hero.title": "HyggeClean – A clean home, a cozy life",
    "hero.subtitle": "Professional cleaning in Copenhagen",
    "hero.cta": "Contact me now",
    "about.title": "Hi, I'm Maya",
    "about.description":
      "I'm a Brazilian mother living in Copenhagen with over a year of professional cleaning experience. As a mother, I understand the importance of a clean and organized home, and how it can help you focus on what truly matters.",
    "features.professional": "Professional high-quality service",
    "features.flexible": "Flexible scheduling",
    "features.satisfaction": "Satisfaction guaranteed",
    "features.eco": "Eco-friendly cleaning products",
  },
} as const;

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

function ClientLanguageProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useState<Language>("da");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Function to translate text
  const translate = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  // If the component is not mounted, return null
  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  return <ClientLanguageProvider>{children}</ClientLanguageProvider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
