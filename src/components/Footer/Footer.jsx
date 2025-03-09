import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.modules.css';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  const { t } = useTranslation();
  const date = new Date();

  return (
    <footer id="footer">
      <p>{t("FooterPhrase")} <span className="highlight"><a href="#aboutMe">VS</a></span></p>
      <p>Copyright@{date.getFullYear()} <a href="#aboutMe" className="highlight">VS</a></p>
      <ul>
        <li><a href='https://github.com/SaltybeeVS' target='_blank' rel="noopener noreferrer"><FaGithub className="footerIcon" /></a></li>
        <li><a href='https://www.linkedin.com/in/vicente-sandoval-carrasco/' target='_blank' rel="noopener noreferrer"><FaLinkedin className="footerIcon" /></a></li>
        <li><a href='https://www.instagram.com/saltybee_27/' target='_blank' rel="noopener noreferrer"><FaInstagram className="footerIcon" /></a></li>
      </ul>
    </footer>
  );
}

export default Footer;