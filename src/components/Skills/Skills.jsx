import React from 'react';
import { useTranslation } from 'react-i18next';
import './Skills.modules.css';
import Card from '../Common/Card/Card.jsx';
import { RiNextjsLine } from "react-icons/ri";
import { FaWordpress, FaHtml5, FaCss3, FaJsSquare, FaPhp, FaReact, FaJava } from "react-icons/fa";

function Skills() {
  const { t } = useTranslation();

  const skillsData = [
    { icon: <FaHtml5 />, percentage: 90, color: '#F806CC', description: t("SkillsHTML") },
    { icon: <FaCss3 />, percentage: 90, color: '#F806CC', description: t("SkillsCSS") },
    { icon: <FaJsSquare />, percentage: 90, color: '#F806CC', description: t("SkillsJS") },
    { icon: <FaWordpress />, percentage: 90, color: '#F806CC', description: t("SkillsWordPress") },
    { icon: <FaReact />, percentage: 60, color: '#F806CC', description: t("SkillsReact") },
    { icon: <RiNextjsLine />, percentage: 40, color: '#F806CC', description: t("SkillsNextJS") },
    { icon: <FaPhp />, percentage: 50, color: '#F806CC', description: t("SkillsPHP") },
    { icon: <FaJava />, percentage: 60, color: '#F806CC', description: t("SkillsJava") },
  ];

  return (
    <section id="Skills">
      <h2>{t("SkillsTitle")}</h2>
      <p>{t("SkillsParagraph")}</p>
      <div className="cardContainer">
        {skillsData.map((skill, index) => (
          <Card key={index} className="skillCard">
            <div className="progressCircle" style={{ '--percentage': skill.percentage, '--color': skill.color }}>
              <div className="iconWrapper">
                {skill.icon}
              </div>
              <div className="percentage">{skill.percentage}%</div>
            </div>
            <p>{skill.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Skills;