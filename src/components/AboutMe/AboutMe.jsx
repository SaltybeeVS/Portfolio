import React from 'react';
import { useTranslation } from 'react-i18next';
import "./AboutMe.modules.css";
import aboutMePhoto from '../../assets/images/AboutMe/aboutMePhoto.png';

function AboutMe() {
  const { t } = useTranslation();

  return (
    <section id="aboutMe">
      <figure className="left">
        <img id="aboutPhoto" alt="Vicente Sandoval" src={aboutMePhoto} />
      </figure>
      <article className="right">
        <h2>{t("AboutTitle")}</h2>
        <p>{t("AboutParagraph1")}</p>
        <p>{t("AboutParagraph2")}</p>
        <p>{t("AboutParagraph3")}</p>
        <p className="motivationalPhrase">
          {t("AboutQuote")
            .split("{{br}}")
            .map((line, index) => (
              <React.Fragment key={index}>
                {line.replace("{{span}}", "<span>").replace("{{/span}}", "</span>")}
                {index < 1 && <br />}
              </React.Fragment>
            ))}
        </p>
      </article>
    </section>
  );
}

export default AboutMe;