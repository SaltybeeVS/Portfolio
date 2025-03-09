import './header.modules.css';
import React from 'react';
import { useTranslation } from 'react-i18next'; 
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';

function Header() {
  const { t } = useTranslation(); 

  return (
    <>
      <header id="header">
        <h1>
          <a href="#" id="tittle">Vicente Sandoval</a>
        </h1>
        <div className="navContainer">
        <nav id="navbar">
            <ul>
              <li><a href="#projects">{t("HeaderProject")}</a></li>
              <li><a href="#aboutMe">{t("HeaderAbout")}</a></li>
              <li><a href="#skills">{t("HeaderSkills")}</a></li>
              <li><a href="#contactMe">{t("HeaderContactMe")}</a></li>
            </ul>
          </nav>
          <LanguageSwitcher /> 
        </div>
      </header>
    </>
  );
}

export default Header;