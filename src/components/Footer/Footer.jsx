import './Footer.modules.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer(){
    const date = new Date;
    return(
        <>
            <footer id="footer">
                <p>Designed and Developed by <span className="highlight"><a href="#aboutMe">VS</a></span></p>
                <p>Copyrigth@{date.getFullYear()} <a href="#aboutMe" className="highlight">VS</a></p>
                <ul>
                    <li><a href='https://github.com/SaltybeeVS' target='_blank'><FaGithub className="footerIcon"/></a></li>
                    <li><a href='https://www.linkedin.com/in/vicente-sandoval-carrasco/' target='_blank'><FaLinkedin className="footerIcon"/></a></li>
                    <li><a href='https://www.instagram.com/saltybee_27/' target='_blank'><FaInstagram className="footerIcon"/></a></li>
                </ul>
            </footer>
        </>
    );
}

export default Footer;