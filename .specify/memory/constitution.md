# Portfolio Engineering & Design Constitution

## Core Principles

### I. Visual Distinction & "Dope" Aesthetics (NON-NEGOTIABLE)
The portfolio must command immediate visual authority. Generic designs, unstyled defaults, and standard bootstrap looks are strictly forbidden. The visual language follows a sleek, dark modern aesthetic inspired by Linear, Raycast, and Vercel:
- **Depth & Atmosphere**: Dynamic ambient radial gradients, subtle SVG grid/dot background meshes, and fine glassmorphism (`backdrop-filter: blur(16px)` with delicate border illumination `rgba(255, 255, 255, 0.08)`).
- **Typography & Hierarchy**: High-contrast, geometric modern sans (Inter / Outfit / JetBrains Mono for code badges) with disciplined optical sizing and tracking.
- **Micro-Interactions & Fluid Motion**: Dynamic spring animations, subtle cursor follower or interactive card spotlight effects, smooth pill transitions, and tactile hover states.

### II. Component-Driven & Pure Design Tokens
- Strict separation of visual tokens (colors, blur radius, borders, spacing scale, z-index hierarchy) defined as CSS custom properties (`:root`).
- Zero ad-hoc magic numbers; all layouts adhere to an 8pt modular grid.
- Modularity: Every feature section (Hero, Work/Projects, Skills/Architecture Matrix, Experience/Timeline, Interactive Playground/Terminal, Contact) is an isolated, testable, responsive component.

### III. Performance & Core Web Vitals First
- 60 FPS animation frame rates via GPU-accelerated CSS properties (`transform`, `opacity`) and hardware-composited layers.
- Lighthouse scores > 95 across Performance, Accessibility, Best Practices, and SEO.
- Sub-second First Contentful Paint (FCP) and optimal Largest Contentful Paint (LCP) with zero layout shifts (CLS = 0).

### IV. Semantic Accessibility & Device Responsiveness
- Full WCAG 2.1 AA compliance: accessible contrast ratios (minimum 4.5:1 for body text, 3:1 for UI controls), proper ARIA tags, visible focus rings with `outline-offset`, and logical keyboard navigation (`tabindex`, Escape keys for modals).
- Fully responsive across 320px mobile up to 4K ultra-wide viewports with fluid clamp scaling (`clamp(...)`).

### V. Developer Transparency & Showcase Integrity
- The portfolio must present real, high-impact technical work: live interactive demos, architecture callouts (tech stack badges, metrics/impact statistics, architecture highlights, GitHub links, and live URLs).
- Include an interactive feature (e.g., an interactive dev console/command palette `⌘K`, or project filter system with instant reactive transitions).

## Tech Stack & Architecture Standards
- **Framework**: React 19 + Vite (lightning-fast HMR and optimized tree-shaking).
- **Styling**: Vanilla CSS with modern CSS custom properties, utility classes, and glassmorphic surface modules (maintaining full control and zero runtime overhead).
- **Icons & Motion**: Lucide React icons with Framer Motion / CSS keyframe transitions for silky-smooth enter/exit choreography.
- **Data Architecture**: Single source of truth typed data models (`src/data/portfolioData.js`) allowing frictionless updates for projects, skills, experience, and accolades.

## Governance & Quality Gates
- Every spec, plan, and component must pass the Spec-Kit quality verification checklist before shipping.
- Code must build cleanly with zero lint warnings or console errors.

**Version**: 1.0.0 | **Ratified**: 2026-09-22 | **Last Amended**: 2026-09-22
