import React from 'react';
import { useTranslation } from 'react-i18next'; 
import './Hero.modules.css';
import Astronaut from '../../assets/images/Hero/Astronaut.png';
import Button from '../Common/Button/Button';
import TypingEffect from './TypingEffect/TypingEffect.jsx';

function Hero() {
  const { t } = useTranslation(); 

  return (
    <section id="hero">
      <article>
        <h2>
          {t("HeroWelcome")} <TypingEffect /> 
        </h2>
        <h3>
          {t("HeroParagraph1")} <br /> {t("HeroParagraph2")} 
        </h3>
        <Button link="#contactMe">{t("HeroButton")}</Button> 
      </article>
      <figure>
        <img id="heroImg" alt="Astronaut" src={Astronaut} />
      </figure>
    </section>
  );
}

export default Hero;