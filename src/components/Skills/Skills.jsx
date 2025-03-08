import './Skills.modules.css';
import Card from '../Common/Card/Card.jsx';
import { RiNextjsLine } from "react-icons/ri";
import { FaWordpress, FaHtml5, FaCss3, FaJsSquare, FaPhp, FaReact, FaJava } from "react-icons/fa";


const skillsData = [
    { icon: <FaHtml5 />, percentage: 90, color: '#F806CC', description: "Mastering HTML5 was my first step into web development, laying the foundation for everything that followed." },
    { icon: <FaCss3 />, percentage: 90, color: '#F806CC', description: "CSS3 allowed me to bring my designs to life, learning to blend creativity with functionality." },
    { icon: <FaJsSquare />, percentage: 90, color: '#F806CC', description: "JavaScript opened a world of interactivity, making my projects dynamic and logical." },
    { icon: <FaWordpress />, percentage: 90, color: '#F806CC', description: "Through WordPress, I learned to build robust and scalable websites, making the most of time and resources." },
    { icon: <FaReact />, percentage: 70, color: '#F806CC', description: "I picked up React to push my front-end skills further, embracing component-based development for more efficient and modern UIs." },
    { icon: <RiNextjsLine />, percentage: 70, color: '#F806CC', description: "Next.js expanded my React knowledge, helping me build faster, SEO-friendly, and full-stack applications." },
    { icon: <FaPhp />, percentage: 60, color: '#F806CC', description: "PHP became essential as I dove into WordPress customization, enabling me to build dynamic and personalized sites." },
    { icon: <FaJava />, percentage: 60, color: '#F806CC', description: "Java was a nostalgic dive into programming, reminding me of its presence in games and software from my childhood."},

  ];
  
  function Skills() {
    return (
      <section id="Skills">
        <h2>My Skills</h2>
        <p>Here are some of my Skills and a little feedback on how it was working with them.</p>
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