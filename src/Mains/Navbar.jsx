import React, { useRef } from "react";
import "./Navbar.css";
import About from "../components/About/about";
import Projects from "../components/Projects/projects";
import Contact from "../components/Contact/contact";
import Home from "../components/Home/home";

const Nav = () => {
    const aboutRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);

    const ScrollToSection = (SectionId) => {
        if(SectionId === 'about-content'){
            SectionId.current.scrollIntoView({behavior: 'smooth'});
        }
    };

    return(
        <>
        <header>
            <nav>
                <h1>Portfolio</h1>
                <ul>
                    <li>Home</li>
                    <li onClick={ScrollToSection(aboutRef)}>About</li>
                    <li onClick={ScrollToSection(projectRef)}>Projects</li>
                    <li onClick={ScrollToSection(contactRef)}>Contact</li>
                </ul>
            </nav>
        </header>

        </>
    );
};

export default Nav;