import "./AboutMe.modules.css"
import aboutMePhoto from '../../assets/images/aboutMePhoto.png'

function AboutMe(){
    return(
        <>
            <section id="aboutMe">
                <figure class="left">
                    <img id="aboutPhoto" alt="Vicente Sandoval" src={aboutMePhoto}/>
                </figure>
                <article class="rigth">
                    <h2>Let me introduce my self!</h2>
                    <p>I tripped over a line of code and fell headfirst into the world of programming.<br/>
                        Four years later, I’m still here, building innovative solutions and solving complex problems as a developer.
                    </p>
                    <p>My journey started with a curiosity for technology, and it quickly turned into a full-blown passion for creating software that makes a difference. These days, I’m diving deep into Java, but I’m always eager to explore new programming languages, frameworks, and tech stacks. Who knows? Maybe my next big breakthrough is just around the corner.<br/>
                    </p>
                    <p>When I’m not coding, you’ll find me gaming, getting lost in a good book, writing down my thoughts, planning my next adventure, or learning something completely random (because why not?).
                        Life’s too short to stick to just one passion, right?
                    </p>
                    <p class="motivationalPhrase">"Adapt. Improve. Overcome."<br/><span>--Abathur from Starcraft</span></p>
                </article>
            </section>
        </>
    );
}

export default AboutMe;