# Personal Portfolio Website

A modern and responsive personal portfolio application with an interactive React frontend and an Express.js backend for contact form email handling.

## Project Structure

- **`Kanishk/`**: Frontend built with React, Vite, and CSS animations.
- **`portfolio-backend/`**: Node.js / Express backend server handling contact messages via Nodemailer.

---

## Getting Started

### 1. Frontend Setup
```bash
cd Kanishk
npm install
npm run dev
```

### 2. Backend Setup
```bash
cd portfolio-backend
npm install
```

Create a `.env` file in `portfolio-backend/` based on `.env.example`:
```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
```

Start the backend server:
```bash
node server.js
```
