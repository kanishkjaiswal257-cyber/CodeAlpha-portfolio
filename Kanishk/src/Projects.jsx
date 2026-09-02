import React from "react";
import "./Projects.css";

function ProjectCard() {
    return (
        <>
            <section className="Projects" id="projects">
                <h6>05-PROJECTS</h6>
                <h2><i>My Work</i></h2>
                <br />
                <div className="project-card">


                    <div className="project-image">
                        <div className="shield-box">
                            <div className="shield">♢</div>
                        </div>
                    </div>
                    <div className="project-content">

                        <div className="project-category">
                            AI / CONTENT MODERATION
                        </div>
                        <h1>Safe Vision Hub</h1>
                        <p>
                            Hackathon project — digital platform connecting donors,
                            hospitals, and patients. Implemented AI-based donor matching and real-time emergency alert sydtem.
                            Recived Certification of Completion for successful project delivery.
                        </p>
                        <div className="tech-tags">
                            <button>React</button>
                            <button>HTML</button>
                            <button>CSS</button>
                        </div>

                        <div className="divider"></div>

                        <div className="project-buttons">
                            <button className="details-btn">
                                ⊕ &nbsp; DETAILS
                            </button>

                            <button className="github-btn">
                                ♧ &nbsp; GITHUB
                            </button>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
}



export default ProjectCard;