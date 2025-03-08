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
                    <p>I tripped over a line of code and fell headfirst into the world of programming. <br/>
                    Four years later, I’m still here, building beautiful things for the web as a front-end developer. 🚀
                    </p>
                    <p>My journey started with a curiosity for technology, and it quickly turned into a full-blown love affair.<br/>
                    These days, I’m diving into Java, but honestly, I can’t resist exploring every programming language and tech stack that crosses my path.<br/> 
                    Who knows? Maybe I’ll find my next obsession tomorrow. 😄
                    </p>
                    <p>As a front-end developer, I’ve mastered the art of turning ideas into pixel-perfect, user-friendly experiences.<br/> 
                    But I’m not stopping there—I’m on a mission to expand my knowledge and conquer the entire tech universe.<br/> 
                    Because why settle for one galaxy when you can explore the whole cosmos? 🌌<br/>
                    </p>
                    <p>When I’m not coding, you’ll find me gaming 🎮, getting lost in a good book 📚, writing down my thoughts ✍️, planning my next adventure ✈️, or learning something completely random (because why not?).<br/> 
                        Life’s too short to stick to just one passion, right? 😊
                    </p>
                    <p class="motivationalPhrase">"Adapt. Improve. Overcome."<br/><span>--Abathur from Starcraft</span></p>
                </article>
            </section>
        </>
    );
}

export default AboutMe;