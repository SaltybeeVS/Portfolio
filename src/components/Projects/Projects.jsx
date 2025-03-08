import React from 'react';
import './Projects.modules.css';
import Card from '../Common/Card/Card.jsx';
import SertrasScreenshot from "../../assets/images/Sertras-ScreenShot.png";
import LeanScreenshot from '../../assets/images/Lean-Screenshot.png';
import RamoScreenshot from '../../assets/images/Ramo-Screenshot.png';
import VicentePortfolioScreenShot from '../../assets/images/Vicente-Portfolio.png';
import ComingSoon from '../../assets/images/Coming-Soon.png';
import { FaWordpress, FaHtml5, FaCss3, FaJsSquare, FaPhp, FaReact, FaJava } from "react-icons/fa";

// Datos de los proyectos
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
    link: "#", // Enlace vacío
    icons: [FaReact, FaHtml5, FaCss3, FaJsSquare],
  },
  {
    id: 5,
    image: ComingSoon,
    title: "Coming soon...",
    link: null, // Sin enlace
    description: "I am currently working on an Anime Catalog with <span className='highlight'>React.JS</span> to help me keep track of the anime I have already watched and the ones I want to watch in the future, as well as a Discord bot built with <span className='highlight'>Java</span>.",
    icons: [], // Sin íconos
  },
];

// Componente para cada tarjeta de proyecto
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

function Projects() {
  return (
    <section id="projects" className="projectSection">
      <h2>Projects</h2>
      <p>See some of my latest projects!</p>
      <div className="cardContainer">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;