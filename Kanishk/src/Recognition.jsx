import { useState } from "react";
import "./Recognition.css";

function Recognition() {

    const [page, setPage] = useState("achievements");

    return (
        <>
            <section className="recognition-section" id="recognition">
                <h6>06-RECOGNITION</h6>
                <h2>
                    <i>Achievements & Certifications</i>
                </h2>

                <button>◉ 1 🏆 AWARDS</button>
                <button>◉ 8 🎓 CERTIFICATIONS</button>
                <button>◉ 2 🌐 INTERNATIONAL EVENTS</button>
            </section>

            <section className="zrchivment-section">
                <div className="tabs">

                    <button
                        className={page === "achievements" ? "active" : ""}
                        onClick={() => setPage("achievements")}>
                        🏅 ACHIEVEMENTS
                    </button>

                    <button
                        className={page === "certificates" ? "active" : ""}
                        onClick={() => setPage("certificates")}>
                        🎓 CERTIFICATIONS
                    </button>

                </div>

                {page === "achievements" && (
                    <div className="card">

                        <div className="card-top achievement-top">
                            <div className="prize">MATH MANIA</div>
                            <div className="trophy">🏆</div>
                        </div>

                        <div className="card-content">

                            <p className="date">📅 Aug 22, 2026</p>

                            <h1>🥈 2ᴺᴰ Rᴜɴɴᴇʀ-Uᴘ</h1>

                            <h3>ALLENHOUSE BUSINESS SCHOOL</h3>

                            <hr />

                            <p className="description">
                                Achieved 2nd Runner-Up in Math Mania 2026,
                                competing in a challenging mathematical competition
                                that tested analytical thinking, accuracy, and
                                problem-solving abilities.
                            </p>

                            <a href="https://lnkd.in/p/dpqsW-29" className="certificate-btn">
                                ↗  VIEW CERTIFICATE
                            </a>

                        </div>
                    </div>
                )}

                {page === "certificates" && (
                    <>
                        <div className="card">

                            <div className="card-top certificate-top">
                                <div className="nptel">
                                    🚀 Hackathon 2.0 – Application Development Competition
                                </div>

                                <div className="score">
                                    <h2>💻</h2>
                                </div>
                            </div>

                            <div className="card-content">

                                <h3>ALLENHOUSE BUSINESS SCHOOL</h3>

                                <p className="date">
                                    Date: 17–18 March 2026
                                </p>

                                <hr />

                                <p className="description">
                                    Participated in Hackathon 2.0, an inter-college
                                    application development competition focused on
                                    Society Wellness.The experience helped me strengthen my application development, teamwork,
                                    problem-solving, creativity, and technical skills while working on innovative solutions.
                                </p>

                                <a href="https://lnkd.in/p/diWYzWy5" className="certificate-btn">
                                    ↗  VIEW CERTIFICATE
                                </a>

                            </div>
                        </div>

                        <div className="card">
                            <div className="card-top certificate-top">
                                <div className="nptel">Web Rachita</div>
                                <div className="score">
                                    <h2>💻</h2>
                                </div>
                            </div>
                            <div className="card-content">
                                <h3>
                                    ALLENHOUSE BUSINESS SCHOOL
                                </h3>
                                <p className="date">
                                    Date: February 7–10, 2026
                                </p>

                                <hr />
                                <p className="description">
                                    Participated in Web Rachaita, a web development competition held during Exuberance-26
                                    at Allenhouse Campus, Rooma, Kanpur. The event provided an opportunity to showcase my web development,
                                    creativity, problem-solving, and technical skills.
                                </p>

                                <a href="https://lnkd.in/p/dMT-M6e5" className="certificate-btn">
                                    ↗  VIEW CERTIFICATE
                                </a>
                            </div>
                        </div>


                        <div className="card">
                            <div className="card-top certificate-top">
                                <div className="nptel">🎓 Poster Presentation – ICHIS 2026</div>
                                <div className="score">
                                    <h2>🎨</h2>
                                </div>
                            </div>
                            <div className="card-content">
                                <h3>
                                    ALLENHOUSE BUSINESS SCHOOL
                                </h3>
                                <p className="date">
                                    Date: 30–31 January 2026
                                </p>

                                <hr />
                                <p className="description">
                                    Participated in the International Conference on Human Capital, Innovation and Sustainability (ICHIS-2026)
                                    and presented a poster titled “Education, Skill Development and Life Long Learning.”
                                    This experience enhanced my presentation, communication, research, and creative thinking skills.
                                </p>

                                <a href="https://lnkd.in/p/dTCWSX7s" className="certificate-btn">
                                    ↗  VIEW CERTIFICATE
                                </a>
                            </div>
                        </div>


                        <div className="card">
                            <div className="card-top certificate-top">
                                <div className="nptel">Advance Excel</div>
                                <div className="score">
                                    <h2>𝕏</h2>
                                </div>                             </div>
                            <div className="card-content">
                                <h3>
                                    ALLENHOUSE BUSINESS SCHOOL
                                </h3>
                                <p className="date">
                                    Duration: 01/12/2025 – 09/04/2026
                                </p>

                                <hr />
                                <p className="description">
                                    Successfully completed Advanced Excel Training organized by AllenTech – The IT Club,
                                    Allenhouse Business School. The training enhanced my skills in Excel, data handling,
                                    spreadsheet management, and practical problem-solving.
                                </p>

                                <a href="https://lnkd.in/p/dmsnFvQD" className="certificate-btn">
                                    ↗  VIEW CERTIFICATE
                                </a>
                            </div>
                        </div>


                        <div className="card">
                            <div className="card-top certificate-top">
                                <div className="nptel">CodeWar</div>
                                <div className="score">
                                    <h2>👨‍💻</h2>
                                </div>
                            </div>
                            <div className="card-content">
                                <h3>
                                    ALLENHOUSE BUSINESS SCHOOL
                                </h3>
                                <p className="date">
                                    Date:24th & 26th December 2025
                                </p>

                                <hr />
                                <p className="description">
                                    Participated in CodeWar – A Coding Competition, organized by AllenConnect –
                                    The App Creation Club and AllenTech – The IT Club at Allenhouse Business School.
                                    The competition strengthened my logical thinking, problem-solving,
                                    and coding skills through challenging programming tasks.
                                </p>
                                <a href="https://lnkd.in/p/dGTuPFMg" className="certificate-btn">
                                    ↗  VIEW CERTIFICATE
                                </a>

                            </div>
                        </div>

                        <div className="card">
                            <div className="card-top certificate-top">
                                <div className="nptel">🔐 ICCNSML-25 – International Conference</div>
                                <div className="score">
                                    <h2>👨‍💻</h2>
                                </div>
                            </div>
                            <div className="card-content">
                                <h3>
                                    ALLENHOUSE BUSINESS SCHOOL
                                </h3>
                                <p className="date">
                                    Date: 20–22 December 2025
                                </p>

                                <hr />
                                <p className="description">
                                    Participated in the 3rd International Conference on Cryptology & Network Security
                                    with Machine Learning (ICCNSML-25) at Allenhouse Institute of Technology, Kanpur.
                                    This experience enhanced my understanding of cybersecurity, cryptology, network security,
                                    and machine learning, while providing valuable exposure to emerging technologies..
                                </p>

                                <a href="https://lnkd.in/p/dZxPXB-a" className="certificate-btn">
                                    ↗  VIEW CERTIFICATE
                                </a>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-top certificate-top">
                                <div className="nptel">🌐 Web Development Training</div>
                                <div className="score">                                     <h2>🛠️</h2>                                 </div>
                            </div>
                            <div className="card-content">
                                <h3>
                                    ALLENHOUSE BUSINESS SCHOOL
                                </h3>
                                <p className="date">
                                    Duration: 01/12/2025 – 09/04/2026
                                </p>
                                <hr />                                <p className="description">                                    Successfully completed Web Development Training organized under AllenTech – The IT Club
                                    at Allenhouse Business School. The training strengthened my practical knowledge of
                                    HTML, CSS, JavaScript, responsive design, and web development fundamentals.
                                </p>

                                <a href="https://lnkd.in/p/dhrhpvkt" className="certificate-btn">
                                    ↗  VIEW CERTIFICATE
                                </a>

                            </div>
                        </div>
                    </>
                )}

            </section>
        </>
    );
}

export default Recognition;
