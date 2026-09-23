/**
 * Portfolio Data Model - Ezekiel Goodness
 * Grounded in authentic CV credentials and GitHub repositories.
 * Contains zero sensitive data, zero phone numbers, and zero education records.
 */

export const personalInfo = {
  name: "Ezekiel Goodness",
  shortName: "Ezekiel",
  roleTitle: "Software Developer",
  headline: "Software Developer building responsive, user-centric web applications and robust full-stack platforms.",
  bio: "Software developer with hands-on experience building responsive, user-centric web applications using JavaScript, React, HTML5, and CSS3. Proven ability to mentor developers, collaborate within agile teams, and deliver clean, maintainable code. Expanding into full-stack development, driven by a passion for solving real-world problems through high-quality software, and serving as Chief Strategy Officer at Squared Labs Ltd.",
  availabilityStatus: "Open for engineering roles & technical collaboration",
  isAvailable: true,
  location: "Ogun State, Nigeria / Remote",
  email: "goodnessezekiel55@gmail.com",
  githubUsername: "Goodie-codes",
  githubUrl: "https://github.com/Goodie-codes",
  linkedinUrl: "https://www.linkedin.com/in/goodness-ezekiel/",
  twitterUrl: "https://x.com/goodie_codes"
};

export const aboutMe = {
  eyebrow: "About Me",
  title: "Engineering software with precision, discipline, and strategic focus.",
  summaryParagraphs: [
    "I am a software developer with hands-on experience building responsive, user-centric web applications using JavaScript, React, HTML5, and CSS3.",
    "With a proven ability to mentor junior developers, collaborate seamlessly within agile teams, and deliver clean, maintainable code, I focus on building resilient web platforms that solve real-world problems.",
    "Driven by a continuous pursuit of engineering depth, I am expanding into full-stack platform architecture and currently serve as Chief Strategy Officer at Squared Labs Ltd, steering technology strategy and cross-functional product execution."
  ],
  pillars: [
    {
      title: "Front-End Craft",
      desc: "Crafting responsive, accessible web interfaces with React, modern ES6+ JavaScript, HTML5, CSS3, and Tailwind CSS."
    },
    {
      title: "Full-Stack Platforms",
      desc: "Engineering scalable web applications with Next.js 14 App Router, PostgreSQL, Prisma ORM, and resilient APIs."
    },
    {
      title: "Strategic Leadership",
      desc: "Steering technology roadmaps, product vision, and engineering alignment as Chief Strategy Officer at Squared Labs Ltd."
    },
    {
      title: "Mentorship & Culture",
      desc: "Empowering developers through structured curriculum, community workshops, and constructive code reviews."
    }
  ],
  stats: [
    { label: "Core Focus", value: "React & Full-Stack" },
    { label: "Executive Role", value: "CSO @ Squared Labs" },
    { label: "Engineering Ethos", value: "Clean, Agile Code" }
  ]
};

export const technicalSkills = {
  languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  frameworks: ["React", "Next.js 14", "Tailwind CSS"],
  tools: ["Git", "GitHub", "Vite", "Prisma ORM", "PostgreSQL"],
  competencies: [
    "Responsive Web Design",
    "Technical Mentorship",
    "Project Management",
    "IT Support & Infrastructure",
    "Agile Collaboration",
    "Full-Stack Web Architecture"
  ]
};

export const githubProjects = [
  {
    id: "krystaformltd",
    title: "Krysta Forms Enterprise Platform & CRM",
    repoName: "Krystaformltd",
    year: "2024",
    tagline: "Full-stack corporate engineering platform and multi-discipline service registry.",
    description: "Architected and deployed a full-stack corporate web platform and CRM using Next.js 14 (App Router), TypeScript, PostgreSQL, and Prisma ORM, featuring role-based access control (RBAC), dynamic RFQ lead pipelines, and serverless PDF/Excel reporting engines.",
    githubUrl: "https://github.com/Goodie-codes/Krystaformltd",
    liveUrl: "https://krystaformsltd.com",
    primaryLanguage: "TypeScript",
    badge: "Enterprise Full-Stack",
    stack: ["Next.js 14", "TypeScript", "PostgreSQL", "Prisma ORM", "Tailwind CSS"],
    highlights: [
      "Role-based access control (RBAC) and CRM lead management",
      "Dynamic multi-channel RFQ lead pipelines and quote routing",
      "Serverless PDF and Excel reporting generation engines"
    ],
    details: {
      problem: "Industrial engineering enterprises require centralized, structured digital registries for client RFQs, multi-tier service capabilities, verified engineering records, and automated lead reporting.",
      solution: "Architected and deployed a scalable full-stack web platform using Next.js 14 App Router, PostgreSQL, Prisma ORM, hierarchical service routing, and serverless document generation.",
      stack: ["Next.js 14", "TypeScript", "React", "Prisma ORM", "PostgreSQL", "Tailwind CSS"],
      highlights: [
        "Role-based access control (RBAC) with secure session handling",
        "Dynamic RFQ lead routing and quote lifecycle engine",
        "Serverless PDF/Excel reporting export utilities"
      ]
    }
  },
  {
    id: "reach",
    title: "RentIt Marketplace Web UI",
    repoName: "Reach",
    year: "2024",
    tagline: "Modern peer-to-peer rental marketplace web interface.",
    description: "High-fidelity rental marketplace platform engineered from Figma design system tokens into responsive, interactive frontend architecture with modular listing filters and tactile UI components.",
    githubUrl: "https://github.com/Goodie-codes/Reach",
    liveUrl: "https://reach-seven-jade.vercel.app/",
    primaryLanguage: "JavaScript / React",
    badge: "Marketplace UI",
    stack: ["JavaScript", "React", "Vite", "Tailwind CSS"],
    highlights: [
      "Faithful translation of Figma design tokens",
      "Sub-millisecond category filtering and state management",
      "Zero layout-shift responsive grid layout"
    ],
    details: {
      problem: "Translating complex marketplace design systems with nested search filters, booking calendars, and category drill-downs into fast, layout-shift-free web interfaces.",
      solution: "Structured a component-driven React architecture with reusable property cards, fluid micro-interactions, responsive navigation, and performant state updates.",
      stack: ["React", "JavaScript", "Vite", "Tailwind CSS"],
      highlights: [
        "Sub-millisecond category filtering",
        "Zero layout-shift responsive grid layout",
        "Faithful translation of Figma design tokens"
      ]
    }
  },
  {
    id: "moviesearcher",
    title: "MovieSearcher Web App",
    repoName: "moviesearcher",
    year: "2024",
    tagline: "Real-time film and TV discovery engine querying public media APIs.",
    description: "A dynamic React application enabling instant querying across extensive movie and television datasets, displaying real-time ratings, high-resolution poster artwork, release metadata, and detailed synopses.",
    githubUrl: "https://github.com/Goodie-codes/moviesearcher",
    liveUrl: "https://moviesearcher-blush.vercel.app",
    primaryLanguage: "JavaScript / React",
    badge: "Media API App",
    stack: ["React", "JavaScript", "REST APIs", "CSS3"],
    highlights: [
      "Debounced live search querying with instant response",
      "Responsive media grid with fallback image states",
      "Real-time score and rating aggregation"
    ],
    details: {
      problem: "Handling asynchronous API search queries without UI freezing, debouncing search keystrokes, and gracefully handling missing artwork or sparse movie metadata.",
      solution: "Implemented asynchronous query hooks with debounced input, fallback image handling, responsive cards, and clean modal detail dialogs.",
      stack: ["React", "JavaScript", "Public REST API", "Vite"],
      highlights: [
        "Debounced live search querying",
        "Responsive media grid with fallback states",
        "Real-time score and rating aggregation"
      ]
    }
  },
  {
    id: "portfolio",
    title: "Flagship Portfolio & PWA",
    repoName: "portfolio",
    year: "2025",
    tagline: "Apple visionOS-inspired developer portfolio with PWA and live GitHub telemetry.",
    description: "The flagship portfolio codebase. Engineered with Apple-grade spring physics, 3D perspective card tilt, real-time GitHub API telemetry, and offline-first Progressive Web App capabilities.",
    githubUrl: "https://github.com/Goodie-codes/portfolio",
    liveUrl: "https://github.com/Goodie-codes/portfolio",
    primaryLanguage: "React / Vite / PWA",
    badge: "Flagship System",
    stack: ["React", "Motion", "PWA", "Vite", "CSS3"],
    highlights: [
      "Full Progressive Web App (PWA) with offline precaching",
      "3D perspective tilt with specular cursor spotlight",
      "Hardware-accelerated spring animations and fluid layouts"
    ],
    details: {
      problem: "Modern developer portfolios frequently look like generic templates with static cards, neon orb gradients, and disconnected placeholder copy.",
      solution: "Built an authentic, high-polish experience with visionOS frosted glass aesthetics, Apple spring-physics sliding tabs, hardware-accelerated 3D tilt, and full offline PWA support.",
      stack: ["React", "Vite", "Motion", "CSS Architecture", "Service Workers"],
      highlights: [
        "Full Progressive Web App (PWA) with offline caching",
        "3D perspective tilt with specular cursor spotlight",
        "Zero-CLS responsive typography and layout"
      ]
    }
  },
  {
    id: "calculator",
    title: "Interactive Calculator",
    repoName: "Calculator",
    year: "2023",
    tagline: "Lightweight client-side evaluation engine and calculator.",
    description: "Clean mathematical expression evaluator built with semantic HTML5, pure CSS layout, and JavaScript DOM state management.",
    githubUrl: "https://github.com/Goodie-codes/Calculator",
    liveUrl: "https://calculator-blue-kappa.vercel.app",
    primaryLanguage: "HTML / JavaScript",
    badge: "Utility App",
    stack: ["JavaScript", "HTML5", "CSS3"],
    highlights: [
      "Direct DOM expression evaluation",
      "Accessible keyboard and touch input support",
      "Clean zero-dependency architecture"
    ],
    details: {
      problem: "Building a reliable, zero-dependency calculation utility with accurate operator precedence and clean DOM event handling.",
      solution: "Implemented an expression evaluation engine supporting sequential operations, clear states, and responsive styling.",
      stack: ["HTML5", "CSS3", "JavaScript"],
      highlights: ["Zero external dependencies", "Keyboard and touch accessible"]
    }
  },
  {
    id: "practice-labs",
    title: "CSS Architecture & UI Labs",
    repoName: "practice",
    year: "2024",
    tagline: "Foundational layouts, typography systems, and DOM interaction experiments.",
    description: "Hands-on engineering sandboxes exploring CSS Grid, responsive flexbox constraints, fluid typography, and accessible DOM event patterns.",
    githubUrl: "https://github.com/Goodie-codes/practice",
    liveUrl: "https://practice-ecru-eight.vercel.app",
    primaryLanguage: "CSS / JavaScript",
    badge: "Experimental Labs",
    stack: ["CSS3", "HTML5", "JavaScript"],
    highlights: [
      "Grid and flexbox responsive stress tests",
      "Semantic HTML typography hierarchy",
      "Exploratory portfolio prototypes"
    ],
    details: {
      problem: "Testing cutting-edge CSS specifications, fluid clamp scaling, and layout behaviors across mobile and desktop viewports.",
      solution: "Constructed targeted prototypes isolating specific CSS features, container queries, and animation timelines.",
      stack: ["CSS3", "HTML5", "JavaScript"],
      highlights: ["Modular layout prototypes", "Responsive design patterns"]
    }
  },
  {
    id: "prjct0",
    title: "Prjct0 Portfolio Foundation",
    repoName: "prjct0",
    year: "2024",
    tagline: "Early portfolio prototype testing semantic structure and responsive layouts.",
    description: "Clean foundational exploratory build examining CSS tokenization, card hierarchy, and modern layout structure.",
    githubUrl: "https://github.com/Goodie-codes/prjct0",
    liveUrl: "https://prjct0.vercel.app",
    primaryLanguage: "CSS / HTML",
    badge: "Design Foundation",
    stack: ["CSS3", "HTML5", "Responsive Web"],
    highlights: [
      "Early design system explorations",
      "Semantic HTML5 structuring",
      "Lightweight styling"
    ],
    details: {
      problem: "Structuring early portfolio layout experiments before scaling into complete application frameworks.",
      solution: "Built a clean HTML5/CSS3 prototype with responsive media queries and custom property tokens.",
      stack: ["HTML5", "CSS3"],
      highlights: ["Modular CSS variables", "Mobile-first responsive design"]
    }
  }
];

export const selectedProjects = githubProjects;

export const craftAreas = [
  {
    title: "Front-End Engineering",
    description: "Building responsive, user-centric web applications using modern JavaScript (ES6+), React, HTML5, CSS3, and Tailwind CSS with disciplined accessibility and smooth interactions.",
    technologies: ["JavaScript (ES6+)", "React", "HTML5", "CSS3", "Tailwind CSS", "Vite"]
  },
  {
    title: "Full-Stack Development & Architecture",
    description: "Expanding into full-stack web platforms, architecting Next.js 14 App Router applications, PostgreSQL databases with Prisma ORM, RBAC systems, and serverless document generation.",
    technologies: ["Next.js 14", "TypeScript", "PostgreSQL", "Prisma ORM", "REST APIs", "Node.js"]
  },
  {
    title: "Technical Mentorship & Collaboration",
    description: "Proven track record of mentoring junior developers in front-end fundamentals, conducting constructive code reviews, and collaborating in agile teams to ship clean, maintainable code.",
    technologies: ["Agile Development", "Code Reviews", "Technical Mentorship", "Community Workshops"]
  },
  {
    title: "Project Management & Systems Support",
    description: "Combining project management and IT support expertise to ensure infrastructure reliability, milestone execution, cross-functional team coordination, and minimal downtime.",
    technologies: ["Git / GitHub", "IT Infrastructure", "Incident Resolution", "Project Tracking"]
  }
];

export const experiences = [
  {
    role: "Chief Strategy Officer",
    company: "Squared Labs Ltd",
    period: "June 2026 – Present",
    type: "Leadership",
    description: "Driving organizational technology strategy, product alignment, and strategic execution to solve real-world problems through high-quality software.",
    points: [
      "Steering organizational strategy, technical architecture, and roadmap execution for digital solutions.",
      "Aligning cross-functional engineering and design initiatives to deliver high-impact software products.",
      "Evaluating emerging web technologies and architecting strategic development roadmaps."
    ]
  },
  {
    role: "Software Developer Intern",
    company: "EThree10",
    period: "April 2026 – Present",
    type: "Engineering",
    description: "Developing and maintaining full-stack web applications using React and modern JavaScript within an agile engineering team.",
    points: [
      "Developing and maintaining full-stack web applications using React and modern JavaScript.",
      "Collaborating with cross-functional teams to design, build, and iteratively ship new product features.",
      "Participating in code reviews and contributing to technical discussions to uphold code quality standards."
    ]
  },
  {
    role: "Assistant Stack Lead, Front-End Development",
    company: "Redeemer’s University Tech Space (RUNTECHSPACE)",
    period: "November 2023 – November 2024",
    type: "Mentorship & Leadership",
    description: "Led front-end training curriculum and hands-on workshops for aspiring web developers.",
    points: [
      "Mentored beginner developers in front-end fundamentals, including HTML, CSS, and JavaScript.",
      "Reviewed student projects and provided structured feedback to enforce coding best practices.",
      "Facilitated hands-on workshops and collaborative sessions to build a thriving developer community."
    ]
  },
  {
    role: "IT Support Intern",
    company: "Conserveria Africana (GBFoods)",
    period: "June 2024 – October 2024",
    type: "IT Infrastructure",
    description: "Delivered company-wide technical support and hardware/software troubleshooting.",
    points: [
      "Provided technical support and troubleshooting for hardware, software, and network issues organization-wide.",
      "Assisted with maintenance of the IT infrastructure to ensure minimal downtime for internal business systems.",
      "Documented support procedures and tracked incidents to improve resolution efficiency."
    ]
  },
  {
    role: "Frontend Development Intern",
    company: "CodSoft",
    period: "January 2024 – February 2024",
    type: "Engineering",
    description: "Engineered responsive, interactive web interfaces as part of an intensive development program.",
    points: [
      "Built and deployed responsive web interfaces as part of a structured front-end development program.",
      "Applied HTML, CSS, and JavaScript to develop interactive, real-world web projects."
    ]
  }
];

export const volunteeringAndLeadership = [
  {
    role: "Operations Team Member",
    organization: "AI NOW Bootcamp",
    period: "July 20, 2026 – July 24, 2026",
    description: "Coordinated operational workflows, technical assistance, and event execution for intensive artificial intelligence bootcamp participants."
  },
  {
    role: "Project Team Member",
    organization: "Future Leaders Assembly — The Dare Adeboye Foundation",
    period: "May 2026",
    description: "Contributed to the planning and successful execution of the Foundation-hosted leadership development event.",
    points: [
      "Collaborated with a multidisciplinary project team to coordinate activities and deliver outcomes aligned with Foundation objectives.",
      "Applied project management skills to support task tracking, team communication, and timely delivery of event milestones."
    ]
  }
];

