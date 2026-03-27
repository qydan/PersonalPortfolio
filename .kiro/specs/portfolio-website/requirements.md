# Requirements Document

## Introduction

A comprehensive personal portfolio website for Aydan, a 3rd-year Software Engineering student at Carleton University. The site is a full redesign of the existing React + Vite project, targeting a modern, visually impressive experience with creative UI/UX. It will showcase Aydan's identity, skills, projects, and contact information in a single-page application with smooth navigation, animations, and interactive elements.

## Glossary

- **Portfolio_Site**: The complete React + Vite single-page application being built
- **Hero_Section**: The full-viewport landing area shown first on page load
- **About_Section**: The section describing the developer's background and skills
- **Projects_Section**: The section displaying project cards with details and links
- **Skills_Section**: The section visually representing technical skills and proficiencies
- **Contact_Section**: The section providing ways to reach the developer
- **Navbar**: The top navigation bar present throughout the site
- **Project_Card**: An individual card component representing a single project
- **Skill_Badge**: A visual element representing a single technology or skill
- **Theme**: The active color scheme (dark or light mode)
- **Scroll_Animation**: A visual transition triggered when a section enters the viewport
- **Typewriter**: An animated text component that types and erases strings sequentially
- **Particle_Background**: An animated canvas or WebGL background with floating/connected particles
- **CTA**: Call-to-action button or link

## Requirements

### Requirement 1: Single-Page Application Structure

**User Story:** As a visitor, I want to navigate a single-page portfolio without full page reloads, so that the browsing experience feels fast and seamless.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL render all sections (Hero, About, Skills, Projects, Contact) within a single HTML page.
2. WHEN a visitor clicks a Navbar link, THE Portfolio_Site SHALL smoothly scroll to the corresponding section without a page reload.
3. THE Navbar SHALL remain fixed at the top of the viewport during scrolling.
4. WHEN the visitor scrolls past the Hero_Section, THE Navbar SHALL transition from a transparent background to a solid/blurred background.

---

### Requirement 2: Hero Section with Animated Introduction

**User Story:** As a visitor, I want to see an engaging, animated hero section, so that I immediately get a strong first impression of the developer.

#### Acceptance Criteria

1. THE Hero_Section SHALL display the developer's name ("Aydan") in a large, prominent heading.
2. THE Hero_Section SHALL include a Typewriter component that cycles through at least three role descriptors (e.g., "Software Engineer", "Full-Stack Developer", "Open Source Enthusiast").
3. THE Hero_Section SHALL display a Particle_Background as the section's visual backdrop.
4. THE Hero_Section SHALL include a CTA button that scrolls the visitor to the Projects_Section when clicked.
5. THE Hero_Section SHALL include a secondary CTA link that opens the developer's resume PDF in a new browser tab.
6. WHEN the page first loads, THE Hero_Section SHALL animate its heading, subtitle, and CTA into view with a staggered entrance animation.
7. THE Hero_Section SHALL include icon links to the developer's GitHub and LinkedIn profiles that open in a new tab.

---

### Requirement 3: About Section

**User Story:** As a visitor, I want to read a concise bio and see a photo of the developer, so that I can understand who they are and what they value.

#### Acceptance Criteria

1. THE About_Section SHALL display a profile photo of the developer.
2. THE About_Section SHALL display a short bio paragraph describing the developer's background, university, and interests.
3. WHEN the About_Section enters the viewport, THE About_Section SHALL trigger a Scroll_Animation that slides the content into view.
4. THE About_Section SHALL display the developer's current status (e.g., "Open to internships / co-op opportunities").

---

### Requirement 4: Skills Section

**User Story:** As a recruiter or collaborator, I want to see the developer's technical skills displayed visually, so that I can quickly assess their technology stack.

#### Acceptance Criteria

1. THE Skills_Section SHALL display Skill_Badges for each technology the developer knows.
2. EACH Skill_Badge SHALL display the technology's icon and name.
3. WHEN a Skill_Badge is hovered, THE Skill_Badge SHALL display a visual highlight effect (e.g., glow, scale, or color shift).
4. WHEN the Skills_Section enters the viewport, THE Skills_Section SHALL animate the Skill_Badges into view with a staggered fade-in.
5. THE Skills_Section SHALL group skills into categories (e.g., "Languages", "Frameworks", "Tools").

---

### Requirement 5: Projects Section with Filterable Cards

**User Story:** As a visitor, I want to browse the developer's projects and filter them by category, so that I can find work relevant to my interests.

#### Acceptance Criteria

1. THE Projects_Section SHALL display at least three Project_Cards.
2. EACH Project_Card SHALL display the project title, a short description, the tech stack used, and links to the GitHub repository and live demo.
3. THE Projects_Section SHALL include filter buttons that allow the visitor to filter Project_Cards by technology category (e.g., "All", "React", "Node.js", "Python").
4. WHEN a filter button is clicked, THE Projects_Section SHALL animate the transition between the filtered and unfiltered sets of Project_Cards.
5. WHEN a Project_Card is hovered, THE Project_Card SHALL display a visual lift or overlay effect revealing the tech stack and action links.
6. WHEN the Projects_Section enters the viewport, THE Projects_Section SHALL trigger a Scroll_Animation on the Project_Cards.

---

### Requirement 6: Contact Section

**User Story:** As a recruiter or collaborator, I want a clear way to contact the developer, so that I can reach out about opportunities.

#### Acceptance Criteria

1. THE Contact_Section SHALL display a contact form with fields for name, email, and message.
2. WHEN the visitor submits the contact form with all required fields filled, THE Contact_Section SHALL send the message using a client-side email service (e.g., EmailJS) and display a success confirmation.
3. IF the visitor submits the contact form with any required field empty, THEN THE Contact_Section SHALL display an inline validation error for each empty field without submitting the form.
4. IF the email service returns an error, THEN THE Contact_Section SHALL display a descriptive error message to the visitor.
5. THE Contact_Section SHALL display social links (GitHub, LinkedIn, email) as icon buttons.

---

### Requirement 7: Dark / Light Mode Toggle

**User Story:** As a visitor, I want to switch between dark and light themes, so that I can view the site comfortably in any lighting condition.

#### Acceptance Criteria

1. THE Navbar SHALL include a toggle control that switches the active Theme between dark and light.
2. WHEN the Theme is toggled, THE Portfolio_Site SHALL apply the new color scheme to all sections without a page reload.
3. THE Portfolio_Site SHALL persist the visitor's Theme preference in localStorage so that it is restored on subsequent visits.
4. WHEN the Portfolio_Site first loads and no stored preference exists, THE Portfolio_Site SHALL default to the visitor's OS-level color scheme preference using the `prefers-color-scheme` media query.

---

### Requirement 8: Responsive Design

**User Story:** As a visitor on any device, I want the portfolio to look and function correctly on mobile, tablet, and desktop screens, so that I have a consistent experience regardless of device.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL render correctly at viewport widths of 320px, 768px, and 1280px and above.
2. THE Navbar SHALL collapse into a hamburger menu on viewports narrower than 768px.
3. WHEN the hamburger menu is opened, THE Navbar SHALL display the navigation links in a full-width dropdown or slide-in drawer.
4. THE Projects_Section SHALL display Project_Cards in a single column on mobile, two columns on tablet, and three columns on desktop.
5. THE Skills_Section SHALL wrap Skill_Badges into multiple rows on smaller viewports without horizontal overflow.

---

### Requirement 9: Performance and Accessibility

**User Story:** As a visitor, I want the site to load quickly and be usable with a keyboard or screen reader, so that I have an accessible and performant experience.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL achieve a Lighthouse performance score of 80 or above on desktop.
2. THE Portfolio_Site SHALL provide descriptive `alt` text for all images.
3. THE Portfolio_Site SHALL ensure all interactive elements (buttons, links, form fields) are reachable and operable via keyboard navigation.
4. THE Portfolio_Site SHALL maintain a color contrast ratio of at least 4.5:1 for all body text against its background in both Theme modes.
5. WHEN animations are enabled, THE Portfolio_Site SHALL respect the `prefers-reduced-motion` media query by disabling or reducing motion for visitors who have opted out.

---

### Requirement 10: Smooth Scroll Animations and Micro-interactions

**User Story:** As a visitor, I want subtle animations and micro-interactions throughout the site, so that the experience feels polished and engaging.

#### Acceptance Criteria

1. WHEN any section enters the viewport during scrolling, THE Portfolio_Site SHALL trigger a Scroll_Animation for that section's content.
2. WHEN a CTA button is hovered, THE Portfolio_Site SHALL display a visual hover state (e.g., color shift, scale, or glow effect).
3. THE Portfolio_Site SHALL use a scroll-progress indicator (e.g., a thin bar at the top of the page) that fills as the visitor scrolls down.
4. WHEN the visitor scrolls to the bottom of the page, THE Portfolio_Site SHALL display a "Back to Top" button that smoothly scrolls back to the Hero_Section when clicked.
