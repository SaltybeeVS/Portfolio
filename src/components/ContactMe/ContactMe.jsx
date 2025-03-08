import './ContactMe.modules.css';
import Form from '../Common/Form/Form';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function ContactMe() {
    const fields = [
        {
            id: 'name',
            type: 'text',
            label: 'Full Name:',
            placeholder: 'Your Name',
            required: true,
        },
        {
            id: 'email',
            type: 'email',
            label: 'E-mail:',
            placeholder: 'Example@example.com',
            required: true,
        },
        {
            id: 'phone',
            type: 'tel',
            label: 'Phone Number:',
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
                <h2>Let's Build Something Amazing Together!</h2>
                <p>Got a project in mind? Want to collaborate or just say hello? I’d love to hear from you!<br />
                    Whether you’re reaching out through my social media or filling out the form below, let’s connect and create something extraordinary.
                </p>
                <p>The universe is full of possibilities, and together, we can explore them all.<br />
                    Don’t be a stranger—drop me a message and let’s start this adventure!
                </p>
                <ul>
                    <li><a href='https://github.com/SaltybeeVS' target='_blank'><FaGithub className="contactMeIcons" /></a></li>
                    <li><a href='https://www.linkedin.com/in/vicente-sandoval-carrasco/' target='_blank'><FaLinkedin className="contactMeIcons" /></a></li>
                    <li><a href='https://www.instagram.com/saltybee_27/' target='_blank'><FaInstagram className="contactMeIcons" /></a></li>
                </ul>
            </article>
            <Form fields={fields} onSubmit={handleSubmit} />
        </section>
    );
}

export default ContactMe;