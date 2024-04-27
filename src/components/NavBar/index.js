import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import "./navbar.css";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="nav">
            <div className="nav-container">
                <Link to="#home" className="nav-logo">
                    <div className="logo-text">porfolio</div>
                </Link>
                <div className="mobile-icon">
                    <FaBars onClick={() => setOpen(!open)} />
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <a href="#home" className="nav-link">Accueil</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link">A Propos</a>
                    </li>
                    <li className="nav-item">
                        <a href="#skills" className="nav-link">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a href="#project" className="nav-link">Projets</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">Contact</a>
                    </li>
                </ul>

            </div>
            {open && (
                <div className="mobile-menu">
                    <a href="#home" className="mobile-link" onClick={() => setOpen(!open)}>Home</a>
                    <a href="#about" className="mobile-link" onClick={() => setOpen(!open)}>About</a>
                    <a href="#skills" className="mobile-link" onClick={() => setOpen(!open)}>Skills</a>
                    <a href="#project" className="mobile-link" onClick={() => setOpen(!open)}>Projects</a>
                    <a href="#contact" className="mobile-link" onClick={() => setOpen(!open)}>Contact</a>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
