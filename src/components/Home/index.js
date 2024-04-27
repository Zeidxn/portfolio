import React from "react";
import { Bio } from "../../data/constants";
import githubLogo from '../../assets/img/github_logo.png';
import linkedinLogo from '../../assets/img/linkedin.png';


import "./home.css";

const Home = () => {
    return (
        <div id="home" className="home-container">
            <div className="home-bg"></div>
            <div className="home-flex">
                <div className="home-inner-container">
                    <div className="title">{Bio.name}</div>
                    <div className="subtitle">{Bio.description}</div>
                </div>
                <div className="home-bottom">
                    <a href="https://github.com/Zeidxn" className="github-link" target="_blank" rel="noopener noreferrer">
                        <img className="github-button"  src={githubLogo} alt={"gth"}/>
                    </a>
                    <a href="https://www.linkedin.com/in/nicolas-toupin-31a8882ab/" className="linkedin-link" target="_blank" rel="noopener noreferrer">
                        <img className="linkedin-button" src={linkedinLogo} alt={"lkd"}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
