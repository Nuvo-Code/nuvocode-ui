import React, { useState, useEffect, useContext, createContext } from 'react';
import { LanguageContextType, Language } from '../types';

// Re-export hooks from the main hooks file
export * from './hooks';

// Language Context and Hook
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Language Provider Component
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Get saved language from localStorage or use browser language or default to 'en'
    const savedLanguage = localStorage.getItem('i18nextLng');
    if (savedLanguage === 'en' || savedLanguage === 'tr' || savedLanguage === 'et') {
      return savedLanguage as Language;
    }

    // Check URL path for language
    const pathLang = window.location.pathname.split('/')[1];
    if (pathLang === 'en' || pathLang === 'tr' || pathLang === 'et') {
      return pathLang as Language;
    }

    // Check browser language
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'tr') return 'tr';
    if (browserLang === 'et') return 'et';
    return 'en'; // Default to English
  });

  useEffect(() => {
    // Store language preference
    localStorage.setItem('i18nextLng', language);
  }, [language]);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
