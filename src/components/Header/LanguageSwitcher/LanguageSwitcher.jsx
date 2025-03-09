import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.modules.css';

import enFlag from '../../../assets/images/Flags/en.webp';
import esFlag from '../../../assets/images/Flags/es.webp';
import ptFlag from '../../../assets/images/Flags/pt.webp';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); 
  };

  
  const flags = {
    en: enFlag,
    es: esFlag,
    pt: ptFlag,
  };

  return (
    <div className="language-switcher">
      <button className="current-language" onClick={() => setIsOpen(!isOpen)}>
        <img
          src={flags[i18n.language]} 
          alt={i18n.language}
          className="flag-icon"
        />
        <span>{i18n.language.toUpperCase()}</span>
        <span className="arrow">▼</span>
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <button onClick={() => changeLanguage('en')}>
            <img src={enFlag} alt="English" className="flag-icon" />
            <span>English</span>
          </button>
          <button onClick={() => changeLanguage('es')}>
            <img src={esFlag} alt="Español" className="flag-icon" />
            <span>Español</span>
          </button>
          <button onClick={() => changeLanguage('pt')}>
            <img src={ptFlag} alt="Português" className="flag-icon" />
            <span>Português</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;