import { useState } from 'react';
import './Education.css';
function Education() {
    return (
        <>
            <section className="education" id="education">
                <h6>02- Education </h6>
                <h2><i>My Background</i></h2>
                <br />
                <h6>Bachelor of Computer Applications. 💻</h6>
                <h2>Allenhouse Business School</h2>
                <location>📍 Kanpur, UttarPradesh</location>
                <button>📅 2025 - 2028 (Expected)</button>
                <br />
                <div className="status">
                    <h5>CURRENT STATUS</h5>
                    <h2>3rd Semester</h2>
                    <h6>Acadmic Year 2026-27</h6>
                </div>

                <div className="status">
                    <h1>2028</h1>
                    <h5> EXPECTED GRADUATION</h5>
                    <h6>B.C.A  Degree</h6>
                </div>
                <h5>KEY COURSEWORK</h5>
                <button>C</button>
                <button>C++</button>
                <button>DSA</button>
                <button>JAVA</button>
                <button>PYTHON</button>
                <button>JAVA SCRIPT</button>
                <button>REACT</button>
                <button>HTML</button>
                <button>CSS</button>
            </section>
            <section className="schooling" id="schooling">

                <div className="status">
                    <h5>CLASS XII - HIGHER SECONDARY</h5>
                    <h2>Krishna Davi Inter Collage </h2>
                    <location>Kanpur, UttarPradesh</location>
                    <button>📅 2024 - 2025</button>
                </div>
                <div className="status ">
                    <h5>CLASS X - SECONDARY SCHOOL</h5>
                    <h2>Schollar Play Ways Inter Collage </h2>
                    <location>Kanpur, UttarPradesh</location>
                    <button>📅 2022 - 2023</button>
                </div>

            </section>
        </>
    );
}
export default Education;