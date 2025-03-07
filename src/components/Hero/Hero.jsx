import './Hero.modules.css';
import Astronaut from '../../assets/images/Astronaut.png';
import Button from '../Common/Button/Button';
import TypingEffect from './TypingEffect';


function Hero (){

    return(
        <>
            <section id="hero">
                <article>
                    <h2>I am Vicente Sandoval, <TypingEffect/></h2>
                    <h3>Passionate about building things that solve problems and bring ideas to life. <br/> Let's create something awesome together!</h3>
                    <Button link="#contactMe">Contact Me!</Button>
                </article>
                <figure>
                    <img id="heroImg" alt="Astronaut"src={Astronaut} />
                </figure>
            </section>
        </>
    );
};

export default Hero;