"use client";

import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";

export default function HeaderMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const themeContext = useContext(ThemeContext);
  const langContext = useContext(LanguageContext);

  if (!themeContext || !langContext) return null;

  const { isDark, toggleTheme } = themeContext;
  const { language, setLanguage } = langContext;

  const t = (key: string) => {
    const translations: Record<string, Record<string, string>> = {
      en: {
        help: "Help",
        language: "Language",
        english: "English",
        french: "Français",
      },
      fr: {
        help: "Aide",
        language: "Langue",
        english: "English",
        french: "Français",
      },
    };
    return translations[language]?.[key] || key;
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-white/20 text-black font-medium rounded hover:bg-white/30 transition-colors"
      >
        ☰
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded shadow-lg z-50">
          {/* Help */}
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
            onClick={() => {
              alert("Help section - coming soon!");
              setIsOpen(false);
            }}
          >
            {t("help")}
          </button>

          <hr className="border-gray-200 dark:border-gray-700" />

          <hr className="border-gray-200 dark:border-gray-700" />

          {/* Language */}
          <div className="px-4 py-2">
            <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
              {t("language")}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setLanguage("en");
                  setIsOpen(false);
                }}
                className={`px-3 py-1 rounded text-sm ${
                  language === "en"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => {
                  setLanguage("fr");
                  setIsOpen(false);
                }}
                className={`px-3 py-1 rounded text-sm ${
                  language === "fr"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-900 border-black"
                    
                }`}
              >
                FR
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
