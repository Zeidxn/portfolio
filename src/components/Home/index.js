import React from "react";
import { Bio } from "../../data/constants";
import HomeImg from "../../assets/img/me.jpg";
import "./home.css";

const Home = () => {
    return (
        <div id="about" className="home-container">
            <div className="home-bg"></div>
            <div className="home-inner-container">
                <div className="home-left-container">
                    <div className="title">{Bio.name}</div>
                    <div className="subtitle">{Bio.description}</div>
                </div>
                <div className="home-right-container">
                    <img src={HomeImg} alt="Home" className="image" />
                </div>
            </div>
        </div>
    );
};

export default Home;
