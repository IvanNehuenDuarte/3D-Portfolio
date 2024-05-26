import React from "react";
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="flex items-center space-x-2">
      <span>ES</span>
      <div className="relative">
        <button
          onClick={handleLanguageChange}
          className={`w-10 h-6 bg-gradient-to-b from-purple-900 to-purple-950 rounded-full p-1 transition-transform duration-300 relative flex items-center justify-between`}
        >
          <div
            className={`w-4 h-4 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full shadow-md transform transition-transform duration-300 ${
              i18n.language === "es" ? "translate-x-0" : "translate-x-4"
            }`}
          ></div>
        </button>
      </div>
      <span>EN</span>
    </div>
  );
};

export default LanguageToggle;
