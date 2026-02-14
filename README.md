This README is designed to match your new professional persona as a **Web3 Infrastructure Engineer**. It focuses on the technical stack, the modern architecture we implemented, and your specific domain expertise.

---

# Usman Bello | Web3 Infrastructure Engineer 🚀

A modern, high-performance portfolio website built with **React**, **GSAP**, and **SCSS**. This project showcases a transition from a legacy absolute-positioning layout to a fluid, responsive, and "Web3-branded" digital identity.

## 🛠 Tech Stack

- **Frontend:** React (Hooks, Functional Components)
- **Styling:** SCSS (Modular & Responsive Grid)
- **Animation:** GSAP (GreenSock), Animate.css, and Framer-inspired transitions
- **Visuals:** `@tsparticles/react` (Network Background), `TagCloud` (3D Stack Sphere)
- **Maps:** React-Leaflet (Custom Inverted Dark Theme)
- **Contact:** EmailJS integration for serverless messaging

---

## ✨ Key Features

### 1. Modernized Layout Architecture

- **Responsive Dock:** A smart sidebar that acts as a fixed vertical nav on Desktop and transforms into a glassmorphic bottom-dock on Mobile for better UX.
- **Fluid Content Grid:** Replaced fixed `absolute` heights and widths with a flexible `flex-layout` system that handles all screen sizes perfectly.
- **Glassmorphism UI:** Interactive elements (Contact form, 3D Cube faces) utilize `backdrop-filter` for a modern, sleek aesthetic.

### 2. Infrastructure Branding

- **3D Tech Sphere:** An interactive tag cloud displaying core competencies in Solidity, EVM, and Middleware.
- **Code-Styled Decor:** Floating HTML tags (`<body>`, `<h1>`, etc.) implemented via SCSS pseudo-elements to emphasize the "Engineer" persona.
- **Dark Tech Theme:** A specialized color palette featuring **Emerald Green** (`#00f0a0`) and **Champagne Gold** (`#ffebc1`).

### 3. Interactive Components

- **Particle Background:** A customized node-and-link network visualization using `tsparticles`.
- **3D Spin Cube:** A CSS-driven 3D cube showcasing the core development stack.
- **Animated Letters:** Custom character-by-character entrance animations for headings.

---

## 📂 Project Structure

```text
src/
 ┣ assets/            # Logos, Images, and Global Styles
 ┣ components/
 ┃ ┣ Home/            # Hero section with 3D Logo
 ┃ ┣ About/           # Professional bio & 3D CSS Cube
 ┃ ┣ Skills/          # 3D TagCloud & Experience breakdown
 ┃ ┣ Contact/         # EmailJS Form & Dark-themed Map
 ┃ ┣ Sidebar/         # Responsive navigation (Desktop/Mobile)
 ┃ ┗ Layout/          # The global wrapper (Tags, Particles, Grid)
 ┗ App.js             # React Router logic

```

---

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/engrusmanbelloa/portfolio.git

```

2. **Install dependencies**

```bash
npm install

```

3. **Environment Setup**
   Create a `.env` file for your EmailJS credentials:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key

```

4. **Run Development Server**

```bash
npm start

```

---

## 👨‍💻 Author

**Bello Usman Abdullahi**

- **Role:** Web3 Infrastructure Engineer
- **Focus:** Middleware, Account Abstraction, and Gasless UX.
- **LinkedIn:** [usmanbelloa](https://www.linkedin.com/in/usmanbelloa)

---

**Would you like me to help you add a "Projects" section to this README that highlights your specific work on the BNB Chain or your research in Post-Quantum Cryptography?**
