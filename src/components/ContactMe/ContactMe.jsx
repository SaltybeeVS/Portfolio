import React from 'react';
import { useTranslation } from 'react-i18next';
import './ContactMe.modules.css';
import Form from '../Common/Form/Form';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function ContactMe() {
  const { t } = useTranslation();

  const fields = [
    {
      id: 'name',
      type: 'text',
      label: t("ContactLabelName"),
      placeholder: t("ContactPlaceholderName"),
      required: true,
    },
    {
      id: 'email',
      type: 'email',
      label: t("ContactLabelMail"),
      placeholder: t("ContactPlaceholderMail"),
      required: true,
    },
    {
      id: 'phone',
      type: 'tel',
      label: t("ContactLabelPhone"),
      placeholder: '+55 (21) 99695-0967',
      required: true,
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form submitted!');
  }

  return (
    <section id="contactMe">
      <article id='contactMeText'>
        <h2>{t("ContactTitle")}</h2>
        <p>{t("ContactParagraph1")}</p>
        <p>{t("ContactParagraph2")}</p>
        <ul>
          <li><a href='https://github.com/SaltybeeVS' target='_blank' rel="noopener noreferrer"><FaGithub className="contactMeIcons" /></a></li>
          <li><a href='https://www.linkedin.com/in/vicente-sandoval-carrasco/' target='_blank' rel="noopener noreferrer"><FaLinkedin className="contactMeIcons" /></a></li>
          <li><a href='https://www.instagram.com/saltybee_27/' target='_blank' rel="noopener noreferrer"><FaInstagram className="contactMeIcons" /></a></li>
        </ul>
      </article>
      <Form fields={fields} onSubmit={handleSubmit} buttonText={t("ContactButtonForm")} />
    </section>
  );
}

export default ContactMe;