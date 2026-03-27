# Design: Portfolio Website

## Overview

This document describes the technical design for transforming the existing React + Vite skeleton into a polished, production-quality personal portfolio for Aydan Eng. The site is a single-page application (SPA) with smooth scroll navigation, dark/light theming, entrance animations, project filtering, a functional contact form, and a downloadable resume.

The design prioritizes:
- **Modern DX**: Vite + React 19, TypeScript-optional (JSX kept for simplicity), Tailwind CSS v3
- **Animation quality**: Framer Motion for all UI transitions; no GSAP or Three.js (overkill for a portfolio)
- **Zero backend**: EmailJS for contact form delivery
- **Accessibility**: `prefers-reduced-motion` respected, semantic HTML, keyboard-navigable
- **Performance**: Code-split by section, lazy-loaded images, minimal bundle

---

## Architecture

### Tech Stack

| Concern | Library / Tool | Rationale |
|---|---|---|
| Framework | React 19 + Vite 7 | Already in place; fast HMR, ESM-native |
| Styling | Tailwind CSS v3 | Utility-first, dark mode via `class` strategy |
| Animations | Framer Motion 11 | Declarative, viewport-aware, respects `prefers-reduced-motion` |
| Typewriter | react-type-animation | Lightweight, no deps, easy cycling |
| Icons | react-icons | Huge icon set (Si* for tech logos, Fa* for social) |
| Form handling | react-hook-form v7 | Minimal re-renders, built-in validation |
| Email delivery | @emailjs/browser | Client-side email, no backend needed |
| Scroll utilities | Custom hooks (IntersectionObserver) | Replaces react-scroll; native browser API, no extra dep |
| Theme | React Context + localStorage | Simple, no external state lib needed |

`react-scroll` is replaced by native smooth-scroll (`scroll-behavior: smooth` + `element.scrollIntoView`) to eliminate a dependency.

### Application Shell

```
index.html
└── main.jsx
    └── App.jsx
        ├── ThemeProvider (Context)
        ├── ScrollProgressBar
        ├── Navbar
        ├── main
        │   ├── Hero
        │   ├── About
        │   ├── Skills
        │   ├── Projects
        │   ├── Experience
        │   └── Contact
        └── Footer
```

### Dark Mode Strategy

Tailwind's `darkMode: 'class'` strategy is used. The `ThemeProvider` toggles a `dark` class on `<html>`. The default is dark mode. The preference is persisted to `localStorage` under the key `portfolio-theme`.

```
html.dark  → dark palette active
html       → light palette active
```

All components use Tailwind's `dark:` variant for color switching. A single CSS custom-property layer (`--color-accent: #22c55e`) ensures the green accent is consistent across both themes.

---

## Components and Interfaces

### File Structure

```
my_portfolio/src/
├── App.jsx
├── main.jsx
├── index.css
├── context/
│   └── ThemeContext.jsx        # ThemeProvider + useTheme hook
├── hooks/
│   ├── useActiveSection.js     # IntersectionObserver → active nav link
│   └── useScrollProgress.js    # scroll position → 0–100 percentage
├── data/
│   ├── projects.js             # Project data array
│   ├── skills.js               # Skills grouped by category
│   └── experience.js           # Timeline entries
├── components/
│   ├── Navbar.jsx
│   ├── ScrollProgressBar.jsx
│   ├── Footer.jsx
│   ├── SectionWrapper.jsx      # Shared Framer Motion entrance wrapper
│   ├── ThemeToggle.jsx
│   └── projects/
│       ├── ProjectCard.jsx
│       └── FilterBar.jsx
├── sections/
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   └── Contact.jsx
└── assets/
    ├── profile.jpg
    └── resume.pdf
```

### Component Interfaces

#### `ThemeContext`
```js
// context/ThemeContext.jsx
const ThemeContext = createContext({ theme: 'dark', toggleTheme: () => {} })
// ThemeProvider wraps App; persists to localStorage
// useTheme() hook exposes { theme, toggleTheme }
```

#### `SectionWrapper`
Reusable Framer Motion wrapper that triggers a fade-up entrance once when the section enters the viewport.
```js
// Props
{
  id: string,          // section anchor id
  className?: string,
  children: ReactNode
}
```
Uses `whileInView` + `once: true` + `viewport: { amount: 0.15 }`. Respects `useReducedMotion()` from Framer Motion — if true, animations are skipped.

#### `Navbar`
```js
// Props: none (reads theme from context, active section from hook)
// Internal state: menuOpen (boolean) for mobile hamburger
```
- Fixed, `z-50`
- Active link detection via `useActiveSection` hook
- Resume download: `<a href="/resume.pdf" download>`
- Mobile: hamburger toggles a full-width overlay menu

#### `ScrollProgressBar`
```js
// Props: none
// Reads scroll % from useScrollProgress hook
// Renders a fixed div at top: 0, height: 3px, width: `${progress}%`
```

#### `Hero`
- `react-type-animation` for the cycling role strings
- Framer Motion `staggerChildren` on the container for sequential entrance
- Social icon links (GitHub, LinkedIn) via `react-icons/fa`
- Two CTA buttons: scroll to `#projects` and `#contact`

#### `Skills`
- Renders `skills.js` data grouped by category
- Each skill tile: icon (react-icons/si) + label
- Staggered `whileInView` animation per tile
- `whileHover={{ scale: 1.1 }}` on each tile

#### `Projects`
- Reads `projects.js`
- `FilterBar` renders unique tags as buttons; "All" is always first
- `AnimatePresence` + `layout` prop on the grid for smooth filter transitions
- `ProjectCard` has `whileHover` elevation effect

#### `Experience`
- Reads `experience.js`; sorted reverse-chronological in data file
- Vertical timeline with alternating left/right on desktop, single-column on mobile
- Work vs. education distinguished by icon color (green vs. blue)
- Sequential `whileInView` stagger per entry

#### `Contact`
- `react-hook-form` for validation (required fields, email pattern)
- `@emailjs/browser` `sendForm()` on valid submit
- Loading state disables submit button and shows spinner
- Success / error feedback rendered inline

---

## Data Models

### Project
```js
// src/data/projects.js
{
  id: string,           // unique slug, e.g. "weather-app"
  title: string,
  description: string,
  tags: string[],       // e.g. ["React", "Node.js", "MongoDB"]
  githubUrl: string,
  liveUrl?: string,     // optional
  featured?: boolean    // optional, for future "featured" filter
}
```

### Skill
```js
// src/data/skills.js
{
  category: string,     // e.g. "Languages"
  items: [
    {
      name: string,     // e.g. "TypeScript"
      icon: ReactElement // e.g. <SiTypescript />
    }
  ]
}
```

### ExperienceEntry
```js
// src/data/experience.js
{
  id: string,
  type: 'work' | 'education',
  title: string,        // role or degree
  organization: string,
  dateRange: string,    // e.g. "Sep 2022 – Present"
  description: string,
  location?: string
}
```

### Theme
```js
// Stored in localStorage as 'portfolio-theme'
type Theme = 'dark' | 'light'
// Default: 'dark'
```

### ContactFormData
```js
// Managed by react-hook-form
{
  name: string,         // required, min 1 char
  email: string,        // required, valid email pattern
  message: string       // required, min 10 chars
}
```

---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Scroll progress is bounded

*For any* scroll position between the top and bottom of the page, the value returned by `useScrollProgress` shall be a number in the range [0, 100].

**Validates: Requirements 3.2**

---

### Property 2: Theme toggle is a round trip

*For any* initial theme value (`'dark'` or `'light'`), calling `toggleTheme` twice shall return the theme to its original value.

**Validates: Requirements 1.1, 1.2, 1.7**

---

### Property 3: Filter narrows or preserves project set

*For any* tag filter applied to a non-empty project list, the number of visible projects shall be less than or equal to the total number of projects, and every visible project shall include the selected tag in its `tags` array.

**Validates: Requirements 7.4, 7.5, 7.6**

---

### Property 4: "All" filter restores full project set

*For any* project list and any previously active tag filter, selecting the "All" filter shall result in all projects being visible.

**Validates: Requirements 7.6**

---

### Property 5: Contact form rejects invalid submissions

*For any* form submission where at least one required field is empty or the email field does not match a valid email pattern, the form shall not invoke the EmailJS send function and shall display at least one validation error.

**Validates: Requirements 9.4, 9.5**

---

### Property 6: Contact form accepts valid submissions

*For any* form submission where all required fields are non-empty and the email field matches a valid email pattern, the form shall invoke the EmailJS send function exactly once.

**Validates: Requirements 9.3**

---

### Property 7: Unique filter tags derived from project data

*For any* project data array, the set of filter buttons rendered by `FilterBar` shall contain exactly the union of all unique tags across all projects, plus the "All" button.

**Validates: Requirements 7.4**

---

### Property 8: Experience entries rendered in reverse chronological order

*For any* array of experience entries with distinct date ranges, the rendered timeline shall display entries such that each entry's start date is greater than or equal to the next entry's start date.

**Validates: Requirements 8.3**

---

### Property 9: Reduced-motion disables animations

*For any* component using `SectionWrapper` or Framer Motion, when `prefers-reduced-motion: reduce` is active, the animated variants shall resolve to their final (visible) state immediately without transitioning.

**Validates: Requirements 11.4**

---

## Error Handling

### Contact Form Errors
- **Validation errors**: Displayed inline below each field using `react-hook-form`'s `formState.errors`. No network call is made.
- **EmailJS failure**: Caught in the `.catch()` of `emailjs.sendForm()`; sets an `error` state string rendered as a banner above the submit button.
- **Duplicate submission**: Submit button is disabled and shows a spinner while `isSubmitting` is true.

### Data Loading
- All data (`projects.js`, `skills.js`, `experience.js`) is static and imported at build time — no async loading, no error states needed.

### Theme Persistence
- If `localStorage` is unavailable (e.g., private browsing with strict settings), the theme defaults to `'dark'` without throwing. Wrapped in a `try/catch`.

### Asset 404s
- Resume PDF and profile photo are placed in `public/` so Vite serves them at stable paths. If missing, the download link simply 404s — no JS error.

---

## Testing Strategy

### Dual Testing Approach

Both unit tests and property-based tests are used. They are complementary:
- **Unit tests** verify specific examples, integration points, and edge cases
- **Property tests** verify universal invariants across randomized inputs

### Tooling

| Tool | Purpose |
|---|---|
| Vitest | Test runner (native Vite integration) |
| @testing-library/react | Component rendering and interaction |
| fast-check | Property-based testing library |
| @testing-library/user-event | Simulating user interactions |
| msw (Mock Service Worker) | Mocking EmailJS network calls |

### Unit Tests

Focus areas:
- `useScrollProgress`: returns 0 at top, 100 at bottom, correct intermediate values
- `ThemeContext`: default is `'dark'`, persists to localStorage, reads from localStorage on init
- `FilterBar`: renders "All" + one button per unique tag
- `ProjectCard`: renders title, description, tags, GitHub link; conditionally renders live demo link
- `Contact` form: shows errors on empty submit, shows loading state, shows success message
- `ExperienceEntry`: renders title, org, date range, description; correct icon for type

### Property-Based Tests (fast-check)

Each property test runs a minimum of **100 iterations**. Each test is tagged with a comment referencing the design property.

```
// Feature: portfolio-website, Property N: <property text>
```

**Property 1 — Scroll progress bounded**
Generate random `scrollY` and `documentHeight` values; assert `useScrollProgress` result is always in [0, 100].
`// Feature: portfolio-website, Property 1: scroll progress is bounded`

**Property 2 — Theme toggle round trip**
Generate a random starting theme; toggle twice; assert result equals starting theme.
`// Feature: portfolio-website, Property 2: theme toggle is a round trip`

**Property 3 — Filter narrows project set**
Generate random arrays of projects (each with random tag arrays) and a random tag; assert filtered results ≤ total and all contain the tag.
`// Feature: portfolio-website, Property 3: filter narrows or preserves project set`

**Property 4 — "All" filter restores full set**
Generate random project arrays and a random active filter; apply "All"; assert all projects visible.
`// Feature: portfolio-website, Property 4: all filter restores full project set`

**Property 5 — Form rejects invalid submissions**
Generate random form states with at least one invalid field; assert EmailJS send is never called.
`// Feature: portfolio-website, Property 5: contact form rejects invalid submissions`

**Property 6 — Form accepts valid submissions**
Generate random valid form data (non-empty name, valid email, non-empty message); assert EmailJS send is called exactly once.
`// Feature: portfolio-website, Property 6: contact form accepts valid submissions`

**Property 7 — Unique filter tags from data**
Generate random project arrays; assert FilterBar buttons equal unique tags + "All".
`// Feature: portfolio-website, Property 7: unique filter tags derived from project data`

**Property 8 — Experience reverse chronological order**
Generate random experience entry arrays; assert rendered order matches reverse-sorted order by start date.
`// Feature: portfolio-website, Property 8: experience entries in reverse chronological order`

**Property 9 — Reduced motion disables animations**
Mock `useReducedMotion` to return `true`; for any component using `SectionWrapper`, assert the rendered element has no CSS transition or that the initial and animate variants are identical.
`// Feature: portfolio-website, Property 9: reduced-motion disables animations`

### Balance Note

Property tests handle broad input coverage. Unit tests focus on:
- Specific rendering snapshots (e.g., "Project card with no liveUrl does not render demo link")
- Integration between `ThemeContext` and Tailwind `dark:` class on `<html>`
- EmailJS mock interaction (success path, failure path)
- Accessibility: all interactive elements reachable by keyboard tab order
