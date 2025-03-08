import './Projects.modules.css';
import Card from '../Common/Card/card.jsx';
import SertrasScreenshot from "../../assets/images/Sertras-ScreenShot.png";
import LeanScreenshot from '../../assets/images/Lean-Screenshot.png';
import RamoScreenshot from '../../assets/images/Ramo-Screenshot.png';
import VicentePortfolioScreenShot from '../../assets/images/Vicente-Portfolio.png'
import ComingSoon from '../../assets/images/Coming-Soon.png'
import { FaWordpress } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaReact } from "react-icons/fa";



function Projects(){
    return(
        <>
        <section id="projects" className='projectSection'>
            <h2>Projects</h2>
            <p>See some of my latest projects!</p>
            <div className="cardContainer">
                <Card>
                    <img className="projectImg" alt="Sertras ScreenShot" src={SertrasScreenshot} />
                    <h3><a className="projectLink highlight"href="https://www.sertras.com/gestao-de-fornecedores/" target='_blank'>Sertras Gestão de Fornecedores</a></h3>
                    <div className="iconSection">
                        <FaWordpress className='projectIcon'/>
                        <FaHtml5 className='projectIcon'/>
                        <FaCss3 className='projectIcon'/>
                        <FaJsSquare className='projectIcon'/>
                        <FaPhp className='projectIcon'/>
                    </div>
                </Card>
                <Card>
                    <img className="projectImg" alt="Lean ScreenShot" src={LeanScreenshot} />
                    <h3><a className="projectLink highlight" href="https://www.leansolutions.com.br" target='_blank'>Lean Solution</a></h3>
                    <div className="iconSection">
                        <FaWordpress className='projectIcon'/>
                        <FaHtml5 className='projectIcon'/>
                        <FaCss3 className='projectIcon'/>
                        <FaJsSquare className='projectIcon'/>
                        <FaPhp className='projectIcon'/>
                    </div>
                </Card>
                <Card>
                    <img className="projectImg " alt="RamoArq ScreenShot" src={RamoScreenshot} />
                    <h3><a className="projectLink highlight" href="https://ramoarq.com.br" target='_blank'>Ramo Arquitetura</a></h3>
                    <div className="iconSection">
                        <FaWordpress className='projectIcon'/>
                        <FaHtml5 className='projectIcon'/>
                        <FaCss3 className='projectIcon'/>
                        <FaJsSquare className='projectIcon'/>
                        <FaPhp className='projectIcon'/>
                    </div>
                </Card>
                <Card>
                    <img className="projectImg " alt="Vicente Portfolio ScreenShot" src={VicentePortfolioScreenShot} />
                    <h3><a className="projectLink highlight" href="#">Vicente Portfolio</a></h3>
                    <div className="iconSection">
                        <FaReact className='projectIcon'/>
                        <FaHtml5 className='projectIcon'/>
                        <FaCss3 className='projectIcon'/>
                        <FaJsSquare className='projectIcon'/>
                    </div>
                </Card>
                <Card className="comingSoonCard">
                    <img className="projectImg comingSoonImg" alt="Coming Soon..." src={ComingSoon} />
                    <h3 className="highlight">Coming soon...</h3>
                    <p>I am currently working on an Anime Catalog width <span className='highlight'>React.JS</span> to help me keep track of the anime I have already watched and the ones I want to watch in the future, as well as a Discord bot built with <span className='highlight'>Java</span>.</p>
                </Card>
            </div>
        </section>
        </>
    );
}

export default Projects