import React from 'react';
import { useTranslation } from 'react-i18next';
import './Projects.modules.css';
import Card from '../Common/Card/Card.jsx';
import SertrasScreenshot from "../../assets/images/Projects/Sertras-ScreenShot.png";
import LeanScreenshot from '../../assets/images/Projects/Lean-Screenshot.png';
import RamoScreenshot from '../../assets/images/Projects/Ramo-Screenshot.png';
import VicentePortfolioScreenShot from '../../assets/images/Projects/Vicente-Portfolio.png';
import AnimeCatalog from '../../assets/images/Projects/AnimeCatalog.png';
import WeatherApp from '../../assets/images/Projects/Weather-App.png';
import PetAdoption from '../../assets/images/Projects/Pet-Adoption.png';
import EasyTrack from '../../assets/images/Projects/Easy-Track.png';
import ComingSoon from '../../assets/images/Projects/Coming-Soon.png';
import { FaWordpress, FaHtml5, FaCss3, FaJsSquare, FaPhp, FaReact, FaJava, FaAngular } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";


function Projects() {
  const { t } = useTranslation();

  const projectsData = [
    {
      id: 1,
      image: SertrasScreenshot,
      title: "Sertras Gestão de Fornecedores",
      link: "https://www.sertras.com/gestao-de-fornecedores/",
      icons: [FaWordpress, FaHtml5, FaCss3, FaJsSquare, FaPhp],
    },
    {
      id: 2,
      image: LeanScreenshot,
      title: "Lean Solution",
      link: "https://www.leansolutions.com.br",
      icons: [FaWordpress, FaHtml5, FaCss3, FaJsSquare, FaPhp],
    },
    {
      id: 3,
      image: RamoScreenshot,
      title: "Ramo Arquitetura",
      link: "https://ramoarq.com.br",
      icons: [FaWordpress, FaHtml5, FaCss3, FaJsSquare, FaPhp],
    },
    {
      id: 4,
      image: VicentePortfolioScreenShot,
      title: "Vicente Portfolio",
      link: "#",
      icons: [FaReact, FaHtml5, FaCss3, FaJsSquare],
    },
    {
      id: 5,
      image: AnimeCatalog,
      title: "Anime Catalog",
      link: "https://saltybeevs.github.io/Anime-Catalog/",
      icons: [FaReact, FaHtml5, FaCss3, FaJsSquare],
    },
    {
      id: 6,
      image: WeatherApp,
      title: "Weather App",
      link: "https://saltybeevs.github.io/Weather-App/",
      icons: [FaReact, FaHtml5, RiTailwindCssFill, FaJsSquare],
    },
    {
      id: 7,
      image: PetAdoption,
      title: "Adopt.me",
      link: "https://github.com/SaltybeeVS/Pet-Adoption",
      icons: [FaAngular, FaHtml5, FaCss3, SiTypescript],
    },
    {
      id: 8,
      image: EasyTrack,
      title: "Easy Track",
      link: "https://saltybeevs.github.io/Easy-Track/",
      icons: [FaAngular, FaHtml5, FaCss3, SiTypescript],
    },
    {
      id: 9,
      image: ComingSoon,
      title: t("ProjectComingTitle"),
      link: null,
      description: t("ProjectComingParagraph"),
      icons: [],
    },
  ];

  const ProjectCard = ({ image, title, link, icons, description }) => {
    return (
      <Card>
        <img className={`projectImg ${!link ? "comingSoonImg" : ""}`} alt={title} src={image} />
        <h3>
          {link ? (
            <a className="projectLink highlight" href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          ) : (
            <span className="highlight">{title}</span>
          )}
        </h3>
        {description && <p dangerouslySetInnerHTML={{ __html: description }} />}
        {icons.length > 0 && (
          <div className="iconSection">
            {icons.map((Icon, index) => (
              <Icon key={index} className="projectIcon" />
            ))}
          </div>
        )}
      </Card>
    );
  };

  return (
    <section id="projects" className="projectSection">
      <h2>{t("ProjectTitle")}</h2>
      <p className="projectsDescription">{t("ProjectParagraph")}</p>
      <div className="cardContainer">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;