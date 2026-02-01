"use client";

import { createContext, useState, ReactNode } from "react";

type LanguageContextType = {
  language: "en" | "fr";
  setLanguage: (lang: "en" | "fr") => void;
};

export const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<"en" | "fr">("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
