import React from 'react';
import "./skills.css";
import { skills } from '../../data/constants';

const Skills = () => {
    return (
        <div className="container" id="skills">
            <div className="wrapper">
                <div className="title">Skills</div>
                <div className="desc">Here are some of my skills on which I have been working on for the past 2 years.</div>
                <div className="skills-container">
                    {skills.map((skill, index) => (
                        <div className="skill" key={index}>
                            <h2 className="skill-title">{skill.title}</h2>
                            <div className="skill-list">
                                {skill.skills.map((item, itemIndex) => (
                                    <div className="skill-item" key={itemIndex}>
                                        <img className="skill-image" src={item.image} alt={item.name} />
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
