import { useState } from 'react';
import './Kanishk.css';
function Kanishk({ name, duggu, resume }) {
    return (
        <div className="portfolio">

            <nav className="navbar">

                <div className="nav-links">
                    <a href="#about">About</a>
                    <a href="#education">Education</a>
                    <a href="#experience">Experience</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#recognition">Awards</a>
                    <a href="#contact">Contact</a>

                </div>
            </nav>

            <section className="hero" id="home">

                <div className="hero-text">


                    <h1 className='hero'>{name}</h1>

                    <h2>BCA Student & Web Developer</h2>

                    <p className="description">
                        I am a passionate BCA student interested in web development and
                        programming. I enjoy creating modern, responsive and user-friendly
                        websites using technologies like HTML, CSS, JavaScript and React.
                    </p>

                    <a href={resume} download="Kanishk-Jaiswal-Resume.pdf">
                        <button className="resume-btn">
                            Download Resume
                        </button>
                    </a>

                </div>

                <div className="hero-image">
                    <img
                        src={duggu}
                        height="230"
                        width="180"
                        alt="Kanishk Jaiswal"
                    />
                </div>
            </section>

        </div>
    );
}

export default Kanishk;