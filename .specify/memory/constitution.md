# Portfolio Engineering & Design Constitution

## Core Principles

### I. Liquid Glass Aesthetics & Visual Distinction (NON-NEGOTIABLE)
The portfolio must command immediate visual authority through an unmistakable, premium **Liquid Glass** aesthetic (inspired by Apple visionOS, macOS acrylic, and modern fluid glassmorphism):
- **Frosted Glass Depth & Refraction**: Multi-layered frosted glass panels using `backdrop-filter: blur(24px) saturate(190%)`, dynamic translucent glass gradient surfaces (`linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)`), and crisp specular edge reflections (`box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.25)`).
- **Fluid Ambient Mesh Lighting**: Dynamic, floating fluid ambient orbs (electric violet, deep indigo, radiant cyan, and chromatic magenta) moving smoothly behind the glass layers to create vivid depth and liquid light refraction.
- **Interactive Light Sheen**: Tactile cursor-following spotlights and liquid reflection overlays that respond dynamically to mouse hover and touch.
- **Typography & Hierarchy**: High-contrast geometric sans (Outfit for impactful headings, Inter for crisp legibility, and JetBrains Mono for code/badges).

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
