# Aydan Eng — Personal Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/59af2550-04f6-4f51-800e-6273839c78ca/deploy-status)](https://app.netlify.com/projects/aydaneng/deploys)

A modern, fully responsive personal portfolio website built with React + Vite. Features smooth animations, dark/light mode, filterable projects, an experience timeline, and a contact form.

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
| Email delivery | @emailjs/browser |
| Testing | Vitest + @testing-library/react + fast-check |

---

## Project Structure

```
portfolio/
├── public/
│   ├── profile.jpg        ← replace with your photo
│   └── resume.pdf         ← replace with your CV
└── src/
    ├── context/
    │   └── ThemeContext.jsx       # dark/light mode + localStorage
    ├── hooks/
    │   ├── useScrollProgress.js  # scroll % [0–100]
    │   └── useActiveSection.js   # active nav link via IntersectionObserver
    ├── data/
    │   ├── projects.js            # project entries
    │   ├── skills.js              # skill categories + icons
    │   └── experience.js          # work + education timeline
    ├── components/
    │   ├── Navbar.jsx
    │   ├── ScrollProgressBar.jsx
    │   ├── SectionWrapper.jsx     # shared Framer Motion entrance wrapper
    │   ├── ThemeToggle.jsx
    │   ├── Footer.jsx
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

Then open [http://localhost:5173](http://localhost:5173).

---

## Personalisation Checklist

Before deploying, update the following:

- [ ] Replace `public/profile.jpg` with your actual photo
- [ ] Replace `public/resume.pdf` with your actual CV
- [ ] Update your name, bio, and status in `src/sections/About.jsx`
- [ ] Update GitHub + LinkedIn URLs in:
  - `src/sections/Hero.jsx`
  - `src/sections/Contact.jsx`
  - `src/components/Footer.jsx`
- [ ] Update your email in `src/sections/Contact.jsx` and `src/components/Footer.jsx`
- [ ] Replace project entries in `src/data/projects.js` with your real projects
- [ ] Update experience entries in `src/data/experience.js`
- [ ] Set up EmailJS and replace the three placeholders in `src/sections/Contact.jsx`:
  - `YOUR_SERVICE_ID`
  - `YOUR_TEMPLATE_ID`
  - `YOUR_PUBLIC_KEY`

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

## Features

- Sticky navbar with scroll-aware background + active link highlighting
- Hero section with typewriter animation and staggered entrance
- About section with profile photo and status badge
- Skills grid grouped by category with hover effects
- Filterable project cards with animated transitions
- Vertical experience timeline (work + education)
- Contact form with validation, loading state, and EmailJS delivery
- Dark / light mode toggle with OS preference detection and localStorage persistence
- Scroll progress bar
- Back-to-top button
- Fully responsive (mobile, tablet, desktop)
- Keyboard accessible throughout
- Respects `prefers-reduced-motion`
