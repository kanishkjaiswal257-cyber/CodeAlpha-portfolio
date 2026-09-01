import React from "react";
import "./Skills.css";

function Skills() {
    const programmingLanguages = [

        { name: "Python", level: 85 },
        { name: "C++", level: 80 },
        { name: "JavaScript", level: 80 },
        { name: "C", level: 82 },
        { name: "Java", level: 70 },
    ];

    const frontend = [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Angular", level: 80 },
    ];

    const SkillCard = ({ icon, title, description, skills }) => (
        <div className="skill-card">
            <div className="skill-icon">{icon}</div>

            <h2>{title}</h2>

            <p className="skill-description">
                {description}
            </p>

            {skills.map((skill, index) => (
                <div className="skill-item" key={index}>
                    <div className="skill-info">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                    </div>

                    <div className="progress-bg">
                        <div
                            className="progress-bar"
                            style={{ width: `${skill.level}%` }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <section className="skills-section" id="skills">

            <div className="skills-heading">
                <h6>04 - Skills</h6>
                <h1>
                    What I <em>Do</em>
                </h1>
            </div>

            <div className="skills-container">

                <SkillCard
                    icon="💻"
                    title="PROGRAMMING LANGUAGES"
                    description="Strong programming skills with practical problem-solving experience."
                    skills={programmingLanguages}
                />

                <SkillCard
                    icon="🎨"
                    title="FRONTEND"
                    description="Building responsive and interactive user interfaces using modern technologies."
                    skills={frontend}
                />

            </div>

        </section>
    );
}

export default Skills;