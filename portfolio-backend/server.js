const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());


// Test route
app.get("/", (req, res) => {
    res.send("Portfolio backend is running!");
});


// Contact form route
app.post("/send-message", async (req, res) => {

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    try {

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });


        await transporter.sendMail({

            from: process.env.EMAIL_USER,

            to: "kanishkjaiswal257@gmail.com",

            replyTo: email,

            subject: `Portfolio Contact: ${name}`,

            text: `
Name: ${name}

Email: ${email}

Message:
${message}
            `
        });


        res.json({
            success: true,
            message: "Message sent successfully"
        });

    } catch (error) {

        console.error("EMAIL ERROR:", error);

        res.status(500).json({
            success: false,
            message: "Email could not be sent"
        });
    }
});


app.listen(5000, () => {
    console.log("Backend running on http://localhost:5000");
});