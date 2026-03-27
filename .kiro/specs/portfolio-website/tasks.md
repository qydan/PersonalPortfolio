# Implementation Plan: Portfolio Website

## Overview

Incrementally build the portfolio SPA on top of the existing React + Vite skeleton. Each task wires new code into the running app before moving on, so there is no orphaned code at any step.

## Tasks

- [x] 1. Install dependencies and configure Tailwind CSS
  - Install `tailwindcss`, `postcss`, `autoprefixer`, `framer-motion`, `react-type-animation`, `react-icons`, `react-hook-form`, `@emailjs/browser`, `fast-check`, `vitest`, `@testing-library/react`, `@testing-library/user-event`, `@testing-library/jest-dom`, `jsdom`
  - Run `npx tailwindcss init -p` and configure `tailwind.config.js` with `darkMode: 'class'` and content paths covering `src/**/*.{js,jsx}`
  - Add Tailwind directives to `src/index.css`
  - Add `--color-accent: #22c55e` CSS custom property to `:root` in `index.css`
  - Configure Vitest in `vite.config.js` with `jsdom` environment
  - _Requirements: 1.1, 7.1, 9.1_

- [x] 2. Implement ThemeContext and theme toggle
  - [x] 2.1 Create `src/context/ThemeContext.jsx` with `ThemeProvider` and `useTheme` hook
    - Default to `'dark'`; read/write `localStorage` key `portfolio-theme` inside a `try/catch`
    - On first load with no stored preference, fall back to `prefers-color-scheme` media query
    - Toggle adds/removes `dark` class on `<html>`
    - _Requirements: 7.1, 7.2, 7.3, 7.4_
  - [x] 2.2 Write property test for theme toggle round trip
    - **Property 2: Theme toggle is a round trip**
    - **Validates: Requirements 7.1, 7.2, 7.3**
  - [x] 2.3 Create `src/components/ThemeToggle.jsx` (sun/moon icon button using `react-icons`)
    - _Requirements: 7.1_
  - [x] 2.4 Wrap `App.jsx` with `ThemeProvider`; mount `ThemeToggle` inside `Navbar`
    - _Requirements: 7.2_

- [x] 3. Implement custom hooks
  - [x] 3.1 Create `src/hooks/useScrollProgress.js` using `window.scrollY` and `document.documentElement.scrollHeight`
    - Returns a number in [0, 100]
    - _Requirements: 10.3_
  - [ ]* 3.2 Write property test for scroll progress bounded
    - **Property 1: Scroll progress is bounded**
    - **Validates: Requirements 10.3**
  - [x] 3.3 Create `src/hooks/useActiveSection.js` using `IntersectionObserver` on section ids
    - Returns the id string of the section currently most visible
    - _Requirements: 1.2_

- [x] 4. Implement shared layout components
  - [x] 4.1 Create `src/components/ScrollProgressBar.jsx`
    - Fixed bar at top of page, width driven by `useScrollProgress`
    - _Requirements: 10.3_
  - [x] 4.2 Create `src/components/SectionWrapper.jsx`
    - Framer Motion `whileInView` fade-up, `once: true`, `viewport: { amount: 0.15 }`
    - Call `useReducedMotion()`; if true, skip animation (set initial === animate)
    - _Requirements: 10.1, 9.5_
  - [ ]* 4.3 Write property test for reduced-motion disables animations
    - **Property 9: Reduced-motion disables animations**
    - **Validates: Requirements 9.5**
  - [x] 4.4 Create `src/components/Footer.jsx` with social links and copyright
    - _Requirements: 6.5_
  - [x] 4.5 Update `App.jsx` to include `ScrollProgressBar`, `SectionWrapper` around each section, and `Footer`
    - _Requirements: 1.1, 10.3_

- [x] 5. Implement Navbar
  - [x] 5.1 Rewrite `src/components/Navbar.jsx`
    - Fixed, `z-50`; transparent → solid/blurred on scroll past Hero using a scroll listener
    - Active link highlight via `useActiveSection`
    - Resume download link `<a href="/resume.pdf" download>`
    - Mobile hamburger toggle (`menuOpen` state) showing full-width overlay
    - _Requirements: 1.2, 1.3, 1.4, 8.2, 8.3_

- [x] 6. Implement Hero section
  - [x] 6.1 Rewrite `src/sections/Hero.jsx`
    - Large heading with developer name
    - `react-type-animation` cycling through ≥ 3 role strings
    - Framer Motion `staggerChildren` entrance animation
    - CTA buttons: scroll to `#projects` and `#contact`
    - Secondary CTA: resume PDF opens in new tab
    - GitHub and LinkedIn icon links (`react-icons/fa`) opening in new tab
    - _Requirements: 2.1, 2.2, 2.4, 2.5, 2.6, 2.7_

- [x] 7. Implement static data files
  - [x] 7.1 Create `src/data/projects.js` with at least 3 project entries matching the `Project` data model
    - _Requirements: 5.1, 5.2_
  - [x] 7.2 Create `src/data/skills.js` grouped by category, each item with `name` and `icon`
    - _Requirements: 4.1, 4.2, 4.5_
  - [x] 7.3 Create `src/data/experience.js` with entries sorted reverse-chronologically, each matching `ExperienceEntry` model
    - _Requirements: 8.3 (design)_

- [x] 8. Implement About section
  - [x] 8.1 Rewrite `src/sections/About.jsx`
    - Profile photo (`<img>` with descriptive `alt`)
    - Bio paragraph and current status line
    - Wrapped in `SectionWrapper` for scroll entrance animation
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 9.2_

- [x] 9. Implement Skills section
  - [x] 9.1 Create `src/sections/Skills.jsx`
    - Render `skills.js` grouped by category
    - Each skill tile: icon + label with `whileHover={{ scale: 1.1 }}`
    - Staggered `whileInView` animation per tile via `SectionWrapper`
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_
  - [x] 9.2 Add `Skills` to `App.jsx` between `About` and `Projects`
    - _Requirements: 1.1_

- [x] 10. Implement Projects section with filtering
  - [x] 10.1 Create `src/components/projects/FilterBar.jsx`
    - Renders "All" + one button per unique tag derived from `projects.js`
    - _Requirements: 5.3_
  - [ ]* 10.2 Write property test for unique filter tags derived from project data
    - **Property 7: Unique filter tags derived from project data**
    - **Validates: Requirements 5.3**
  - [x] 10.3 Rewrite `src/components/projects/ProjectCard.jsx` (rename from `Projectcard.jsx`)
    - Title, description, tags, GitHub link; conditionally render live demo link
    - `whileHover` elevation effect
    - _Requirements: 5.2, 5.5_
  - [x] 10.4 Rewrite `src/sections/Projects.jsx`
    - Reads `projects.js`; active filter state
    - `AnimatePresence` + `layout` prop on grid for smooth filter transitions
    - Wrapped in `SectionWrapper`
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.6_
  - [ ]* 10.5 Write property test for filter narrows project set
    - **Property 3: Filter narrows or preserves project set**
    - **Validates: Requirements 5.3, 5.4**
  - [ ]* 10.6 Write property test for "All" filter restores full project set
    - **Property 4: "All" filter restores full project set**
    - **Validates: Requirements 5.3**

- [x] 11. Checkpoint — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 12. Implement Experience section
  - [x] 12.1 Create `src/sections/Experience.jsx`
    - Reads `experience.js`
    - Vertical timeline, alternating left/right on desktop, single-column on mobile
    - Work vs. education distinguished by icon color
    - Sequential `whileInView` stagger per entry via `SectionWrapper`
    - _Requirements: 1.1, 8.1_
  - [ ]* 12.2 Write property test for experience entries in reverse chronological order
    - **Property 8: Experience entries rendered in reverse chronological order**
    - **Validates: Requirements 8.3 (design)**
  - [x] 12.3 Add `Experience` to `App.jsx` between `Skills` and `Projects`
    - _Requirements: 1.1_

- [x] 13. Implement Contact section
  - [x] 13.1 Rewrite `src/sections/Contact.jsx`
    - `react-hook-form` with required fields: name, email (pattern), message (min 10 chars)
    - `@emailjs/browser` `sendForm()` on valid submit; loading spinner on submit button
    - Inline validation errors via `formState.errors`
    - Success confirmation and error banner states
    - Social icon links (GitHub, LinkedIn, email)
    - Wrapped in `SectionWrapper`
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_
  - [ ]* 13.2 Write property test for contact form rejects invalid submissions
    - **Property 5: Contact form rejects invalid submissions**
    - **Validates: Requirements 6.3**
  - [ ]* 13.3 Write property test for contact form accepts valid submissions
    - **Property 6: Contact form accepts valid submissions**
    - **Validates: Requirements 6.2**

- [x] 14. Add responsive layout and micro-interactions
  - [x] 14.1 Audit and apply Tailwind responsive classes across all sections
    - Projects grid: 1 col mobile, 2 col tablet (`md:`), 3 col desktop (`lg:`)
    - Skills wraps without overflow on small viewports
    - _Requirements: 8.1, 8.4, 8.5_
  - [x] 14.2 Add "Back to Top" button in `Footer.jsx` that scrolls to `#hero` on click
    - Visible only when scrolled past Hero (use `useScrollProgress` threshold)
    - _Requirements: 10.4_
  - [x] 14.3 Add hover states to all CTA buttons (color shift / scale)
    - _Requirements: 10.2_

- [x] 15. Add assets and accessibility polish
  - [x] 15.1 Place `profile.jpg` and `resume.pdf` in `my_portfolio/public/`
    - _Requirements: 3.1, 2.5_
  - [x] 15.2 Audit all images for descriptive `alt` text; audit all interactive elements for keyboard tab order
    - _Requirements: 9.2, 9.3_

- [x] 16. Final checkpoint — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP
- Each task references specific requirements for traceability
- Property tests use `fast-check` with a minimum of 100 iterations and are tagged with `// Feature: portfolio-website, Property N: <description>`
- Unit tests use Vitest + @testing-library/react
- All animations respect `prefers-reduced-motion` via Framer Motion's `useReducedMotion()`
