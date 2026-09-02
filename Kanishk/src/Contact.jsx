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
            const endpoint = import.meta.env.VITE_BACKEND_URL 
                ? `${import.meta.env.VITE_BACKEND_URL}/send-message`
                : "https://formsubmit.co/ajax/kanishkjaiswal257@gmail.com";

            const payload = import.meta.env.VITE_BACKEND_URL 
                ? formData 
                : {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: `Portfolio Message from ${formData.name}`,
                    _captcha: "false",
                    _template: "table"
                };

            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (data.success === "true" || data.success === true) {
                alert("Message sent successfully! ✅");
                setFormData({
                    name: "",
                    email: "",
                    message: ""
                });
            } else if (data.message && data.message.includes("Activation")) {
                alert("Form needs one-time activation! Please check your email (kanishkjaiswal257@gmail.com) and click 'Activate Form'. 📩");
            } else {
                alert("Message sent successfully! ✅");
                setFormData({
                    name: "",
                    email: "",
                    message: ""
                });
            }

        } catch (error) {
            console.error(error);
            alert("Failed to send message. Please try again! ❌");
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