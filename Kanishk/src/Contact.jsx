import React, { useState } from "react";
import "./Contact.css";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const response = await fetch(
                "http://localhost:5000/send-message",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();

            if (data.success) {
                alert("Message sent successfully! ✅");

                setFormData({
                    name: "",
                    email: "",
                    message: ""
                });
            } else {
                alert("Message could not be sent ❌");
            }

        } catch (error) {
            console.error(error);
            alert("Backend connection failed ❌");
        }

        setLoading(false);
    };


    return (
        <>
            <section className="Contact" id="contact">

                <h6>07-CONTACT</h6>

                <h2>
                    <i>Let's Connect</i>
                </h2>

                <div className="Decription">

                    <h3>
                        OPEN TO INTERNSHIP & FREELANCE OPPORTUNITIES
                    </h3>

                    <p>
                        Have a project idea, internship opportunity, or just want
                        to connect? I'm always open to learning, collaborating,
                        and working on exciting projects.
                    </p>

                </div>


                <a
                    href="mailto:kanishkjaiswal257@gmail.com"
                    className="contact-card"
                >
                    <div className="icon">✉</div>

                    <div>
                        <span>EMAIL</span>
                        <h3>kanishkjaiswal257@gmail.com</h3>
                    </div>
                </a>


                <a
                    href="tel:+918303257207"
                    className="contact-card"
                >
                    <div className="icon">☎</div>

                    <div>
                        <span>PHONE</span>
                        <h3>8303257207</h3>
                    </div>
                </a>


                <a
                    href="https://www.linkedin.com/in/kanishk-jaiswal-36363a379"
                    className="contact-card"
                >
                    <div className="icon">in</div>

                    <div>
                        <span>LINKEDIN</span>
                        <h3>Kanishk Jaiswal</h3>
                    </div>
                </a>


                <a
                    href="https://github.com/kanishkjaiswal257-cyber"
                    className="contact-card"
                >
                    <div className="icon">◈</div>

                    <div>
                        <span>GITHUB</span>
                        <h3>Kanishk Jaiswal</h3>
                    </div>
                </a>

            </section>


            <section className="contact">

                <div className="contact-box">

                    <form onSubmit={handleSubmit}>

                        <label>YOUR NAME</label>

                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />


                        <label>EMAIL ADDRESS</label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />


                        <label>MESSAGE</label>

                        <textarea
                            name="message"
                            placeholder="Tell me about your project or opportunity..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>


                        <button type="submit" disabled={loading}>

                            {loading ? "SENDING..." : "SEND MESSAGE"}

                            <span></span>

                        </button>

                    </form>

                </div>

            </section>
        </>
    );
}

export default Contact;