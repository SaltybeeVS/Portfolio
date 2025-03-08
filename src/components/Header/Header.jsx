import React from 'react';
import './header.modules.css';

function Header() {
    return (
        <header id="header">
            <h1><a href="#" id="tittle">Vicente Sandoval</a></h1>
            <nav id="navbar">
                <ul>
                    <li><a href="#aboutMe">About me</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#">Resume</a></li>
                    <li><a href="#contactMe">Contact Me</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;