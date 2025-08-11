import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSelectorProps, Language } from '../../types';
import { useLanguage } from '../../hooks';
import './LanguageSelector.css';

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  availableLanguages = ['en', 'tr', 'et'],
  showFlags = true
}) => {
  const { i18n } = useTranslation();
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = {
    en: { name: 'English', flag: '🇺🇸' },
    tr: { name: 'Türkçe', flag: '🇹🇷' },
    et: { name: 'Eesti', flag: '🇪🇪' }
  };

  const handleLanguageChange = (newLanguage: Language) => {
    changeLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    setIsOpen(false);

    // Update URL if needed
    const currentPath = window.location.pathname;
    const pathSegments = currentPath.split('/');
    
    if (pathSegments[1] && (pathSegments[1] === 'en' || pathSegments[1] === 'tr' || pathSegments[1] === 'et')) {
      pathSegments[1] = newLanguage;
      const newPath = pathSegments.join('/');
      window.history.pushState({}, '', newPath);
    }
  };

  return (
    <div className="language-selector">
      <button
        className="language-selector-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
      >
        {showFlags && <span className="flag">{languages[language].flag}</span>}
        <span className="language-name">{languages[language].name}</span>
        <svg
          className={`chevron ${isOpen ? 'open' : ''}`}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="language-dropdown">
          {availableLanguages.map((lang) => (
            <button
              key={lang}
              className={`language-option ${lang === language ? 'active' : ''}`}
              onClick={() => handleLanguageChange(lang)}
            >
              {showFlags && <span className="flag">{languages[lang].flag}</span>}
              <span className="language-name">{languages[lang].name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
