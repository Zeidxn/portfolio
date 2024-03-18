import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { useTheme } from 'styled-components';
import "./navbar.css";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();

    return (
        <nav className="nav">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    <div className="logo-text">Nicolas Toupin</div>
                </Link>
                <div className="mobile-icon">
                    <FaBars onClick={() => setOpen(!open)} />
                </div>
                <ul className="nav-items">
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
                <div className="button-container">
                    <a href="https://github.com/Zeidxn" className="github-button" target="_blank">Github Profile</a>
                </div>
            </div>
            {open && (
                <div className="mobile-menu">
                    <a href="#about" className="mobile-link" onClick={() => setOpen(!open)}>About</a>
                    <a href="#skills" className="mobile-link" onClick={() => setOpen(!open)}>Skills</a>
                    <a href="#project" className="mobile-link" onClick={() => setOpen(!open)}>Projects</a>
                    <a href="#contact" className="mobile-link" onClick={() => setOpen(!open)}>Contact</a>
                    <a href="https://github.com/Zeidxn" className="github-button" target="_blank" rel="noopener noreferrer">Github Profile</a>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
