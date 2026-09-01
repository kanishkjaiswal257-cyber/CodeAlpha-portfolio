import { useState } from 'react';
import './About.css';
function About() {
    return (
        <>
            <section className="about" id="about">
                <h6>01- About </h6>
                <h2>Who I Am</h2>
                <p>

                    Hi, I'm Kanishk Jaiswal, a BCA student passionate about technology and web development.
                    I enjoy creating modern, responsive, and user-friendly websites using technologies like HTML, CSS, JavaScript, and React.
                </p>
                <br />
                <i>"I don't write code-- I craft experiences."</i>
                <br /><br />
                <p> I'm continuously improving my programming and problem-solving skills by working on projects and learning new technologies.
                    My goal is to become a skilled software developer and build meaningful digital solutions.

                </p>
            </section>
            <section className="abc" id="abc">

                <div className="Internship">
                    <h1>1</h1>
                    <h3>Internship</h3>

                </div>

                <div className='Achivments'>
                    <h1>8</h1>
                    <h3>Certification</h3>
                </div>


            </section>
        </>
    );
}
export default About;