# Aydan Eng — Personal Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/59af2550-04f6-4f51-800e-6273839c78ca/deploy-status)](https://app.netlify.com/projects/aydaneng/deploys)

Personal portfolio website for Aydan Eng — Software Developer at Raven Connected and Software Engineering student at Carleton University (GPA 3.96).

Live at: [aydaneng.netlify.app](https://aydaneng.netlify.app)

---

## Tech Stack

| Concern | Library |
|---|---|
| Framework | React 19 + Vite 8 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion 11 |
| Typewriter | react-type-animation |
| Icons | react-icons |
| Form handling | react-hook-form v7 |
| Contact | mailto (opens email client) |
| Testing | Vitest + @testing-library/react + fast-check |

---

## Features

- Auto-hide navbar — appears when cursor moves near the top
- Hero section with particle canvas + cursor repulsion effect
- Global cursor particle trail across the entire page
- Scroll-driven section fade in/out animations
- About section with live GitHub avatar (pulled from github.com/qydan)
- Skills grid grouped by category with hover effects
- Filterable project cards with animated transitions, Devpost links, and hackathon winner badge
- Vertical experience timeline with bullet points
- Contact form using mailto (no backend, no limits)
- Dark/light mode toggle with OS preference detection and localStorage persistence
- Scroll progress bar
- Back-to-top button
- Spider favicon
- Fully responsive (mobile, tablet, desktop)
- Keyboard accessible throughout
- Respects `prefers-reduced-motion`

---

## Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg        ← red spider favicon
│   └── resume.pdf         ← replace with your CV
└── src/
    ├── context/
    │   └── ThemeContext.jsx
    ├── hooks/
    │   ├── useScrollProgress.js
    │   ├── useActiveSection.js
    │   └── useGitHubProfile.js
    ├── data/
    │   ├── projects.js
    │   ├── skills.js
    │   └── experience.js
    ├── components/
    │   ├── Navbar.jsx
    │   ├── ScrollProgressBar.jsx
    │   ├── SectionWrapper.jsx
    │   ├── ThemeToggle.jsx
    │   ├── Footer.jsx
    │   ├── ParticleCanvas.jsx     ← hero particle background
    │   ├── CursorSpotlight.jsx    ← global cursor particle trail
    │   ├── PageTransition.jsx
    │   └── projects/
    │       ├── FilterBar.jsx
    │       └── ProjectCard.jsx
    └── sections/
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Experience.jsx
        └── Contact.jsx
```

---

## Getting Started

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

---

## Personalisation Checklist

- [ ] Set up EmailJS or keep mailto — contact form is ready either way

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server at localhost:5173 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run test` | Run tests once |
| `npm run test:watch` | Run tests in watch mode |

---

## Deployment

Deployed via Netlify. Config in `netlify.toml` at repo root:

```toml
[build]
  base    = "portfolio"
  command = "npm run build"
  publish = "dist"
```
