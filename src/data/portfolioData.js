/**
 * Single Source of Truth Portfolio Data Model
 * Centralizes all showcase information, projects, technical skills, and career history.
 */

export const personalInfo = {
  name: "Goodness",
  surname: "Ugwoke", // Easily editable
  fullName: "Goodness",
  roleTitle: "Senior Full-Stack Engineer & System Architect",
  roles: [
    "Senior Full-Stack Engineer",
    "Cloud & Distributed Systems Architect",
    "Creative Frontend Technologist",
    "High-Performance System Builder"
  ],
  availabilityStatus: "Available for high-impact roles & technical consulting",
  isAvailable: true,
  location: "Remote / Worldwide",
  email: "goodness.codes@gmail.com",
  githubUrl: "https://github.com/Goodie-codes",
  linkedinUrl: "https://linkedin.com/in/goodness",
  twitterUrl: "https://x.com/goodie_codes",
  resumeUrl: "#contact",
  bio: "Senior Full-Stack Software Engineer with 6+ years of experience engineering resilient distributed backends, cloud-native microservices, and pixel-precise, ultra-fluid web applications. Passionate about system performance, clean software architecture, and elevating developer tooling.",
  stats: [
    { label: "Years Experience", value: "6+" },
    { label: "Production Systems", value: "20+" },
    { label: "System Uptime SLA", value: "99.99%" },
    { label: "Engineered Scale", value: "100k+ MAU" }
  ]
};

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full-Stack & Cloud" },
  { id: "systems", label: "AI & Distributed Systems" },
  { id: "frontend", label: "Frontend & Creative Tech" }
];

export const projects = [
  {
    id: "aura-cloud",
    title: "AuraCloud Orchestrator",
    tagline: "Distributed event streaming & cloud workflow orchestration engine",
    category: "fullstack",
    featured: true,
    bannerGradient: "linear-gradient(135deg, #6366F1 0%, #A855F7 100%)",
    metrics: [
      { label: "Throughput", value: "120k evt/s" },
      { label: "Latency Reduction", value: "-48%" },
      { label: "Reliability", value: "99.995%" }
    ],
    technologies: ["Go", "React 19", "Kafka", "Kubernetes", "PostgreSQL", "Docker"],
    shortDescription: "A fault-tolerant cloud workflow engine coordinating multi-step asynchronous tasks across distributed microservices with real-time state visualization.",
    caseStudy: {
      overview: "Designed and implemented an enterprise-scale distributed workflow orchestration platform capable of executing mission-critical background jobs with zero data loss and automated failover.",
      problem: "Legacy batch processing pipelines suffered from unpredictable job queuing delays, high memory footprint, and lack of visual introspection into distributed failure points.",
      architecture: [
        "Partitioned event log built with Apache Kafka for deterministic replayability.",
        "High-performance Go worker pool with adaptive backpressure management.",
        "Real-time WebSockets streaming pipeline broadcasting state transitions to the React front-end.",
        "PostgreSQL state store with optimistic locking and distributed lease management."
      ],
      impact: "Reduced end-to-end task execution latency by 48% while saving 35% in cloud compute resources through intelligent resource pooling."
    },
    demoUrl: "https://github.com/Goodie-codes/portfolio",
    repoUrl: "https://github.com/Goodie-codes/portfolio"
  },
  {
    id: "pulse-analytics",
    title: "PulseAnalytics Engine",
    tagline: "Sub-millisecond telemetry visualizer and real-time observability platform",
    category: "systems",
    featured: true,
    bannerGradient: "linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)",
    metrics: [
      { label: "Query Speed", value: "< 12ms" },
      { label: "Data Ingestion", value: "50M daily" },
      { label: "Compression", value: "4.2x" }
    ],
    technologies: ["TypeScript", "ClickHouse", "Rust / Wasm", "Next.js", "TailwindCSS"],
    shortDescription: "High-density telemetry dashboard with sub-second analytical queries over tens of millions of records, featuring canvas-rendered time-series charts.",
    caseStudy: {
      overview: "Engineered an in-browser time-series analysis platform processing gigabytes of raw server metric traces using WebAssembly and columnar storage.",
      problem: "Traditional analytics dashboards frequently crashed browser threads when rendering hundreds of thousands of datapoints simultaneously.",
      architecture: [
        "Custom Rust-compiled WebAssembly parser executing data downsampling client-side off the main thread (Web Workers).",
        "High-performance Canvas2D render engine rendering 120 FPS multi-variable charts.",
        "ClickHouse columnar database engine optimizing aggregations with vectorized execution."
      ],
      impact: "Allowed engineering teams to diagnose live production outages 5x faster with instantaneous query feedback."
    },
    demoUrl: "https://github.com/Goodie-codes/portfolio",
    repoUrl: "https://github.com/Goodie-codes/portfolio"
  },
  {
    id: "nexus-crdt",
    title: "Nexus Collaborative Canvas",
    tagline: "Local-first collaborative workspace with conflict-free replicated data types",
    category: "frontend",
    featured: true,
    bannerGradient: "linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)",
    metrics: [
      { label: "Sync Latency", value: "< 25ms" },
      { label: "Conflict Rate", value: "0.00%" },
      { label: "Offline First", value: "100%" }
    ],
    technologies: ["React 19", "Yjs / CRDT", "WebSockets", "IndexedDB", "Vanilla CSS"],
    shortDescription: "A Figma-grade collaborative canvas enabling seamless real-time co-authoring, offline state persistence, and instant multi-client peer synchronization.",
    caseStudy: {
      overview: "Built a multiplayer spatial canvas where distributed teams collaborate with live cursor tracking, instant shape rendering, and zero synchronization conflicts.",
      problem: "Synchronous server-locking models introduced noticeable lag for international team members and completely failed in offline situations.",
      architecture: [
        "CRDT document data structure powered by Yjs ensuring deterministic convergence across all network topologies.",
        "Local-first persistence through IndexedDB with automatic delta synchronization on network reconnect.",
        "Ephemeral awareness protocol over lightweight WebSockets delivering 60 FPS remote cursor broadcasting."
      ],
      impact: "Zero data conflicts recorded across 10,000+ simulated simultaneous edit sessions."
    },
    demoUrl: "https://github.com/Goodie-codes/portfolio",
    repoUrl: "https://github.com/Goodie-codes/portfolio"
  },
  {
    id: "synthetix-ai",
    title: "Synthetix Agent Studio",
    tagline: "Agentic AI pipeline orchestrator with automated benchmark evaluation",
    category: "systems",
    featured: true,
    bannerGradient: "linear-gradient(135deg, #10B981 0%, #06B6D4 100%)",
    metrics: [
      { label: "Task Accuracy", value: "94.2%" },
      { label: "Cost Reduction", value: "-62%" },
      { label: "Context Window", value: "128k tok" }
    ],
    technologies: ["Python", "FastAPI", "React 19", "PostgreSQL", "Docker", "Redis"],
    shortDescription: "Autonomous developer agent pipeline orchestrating multi-step code synthesis, unit test execution, and sandboxed validation.",
    caseStudy: {
      overview: "Created a declarative framework for composing multi-agent software development teams with automated feedback loops and static code analysis.",
      problem: "Raw LLM completions produce brittle code that frequently breaks integration boundaries without autonomous verification loops.",
      architecture: [
        "Async FastAPI backend orchestrating isolated Docker containers for secure script execution.",
        "Streaming server-sent events (SSE) feeding real-time thought trajectories to the React front-end.",
        "Smart semantic caching layer powered by Redis reducing API token expenses by 62%."
      ],
      impact: "Automated over 70% of repetitive boilerplate test generation and schema synchronization tasks."
    },
    demoUrl: "https://github.com/Goodie-codes/portfolio",
    repoUrl: "https://github.com/Goodie-codes/portfolio"
  }
];

export const skillCategories = [
  {
    name: "Frontend Craft",
    description: "Building responsive, accessible, and ultra-fluid web interfaces with modern engineering rigor.",
    skills: [
      { name: "React 19 / Next.js", level: "Expert", highlight: "Server Components & Suspense" },
      { name: "TypeScript / JavaScript (ES6+)", level: "Expert", highlight: "Strict Typings & Generics" },
      { name: "Vanilla CSS / Design Systems", level: "Expert", highlight: "Tokens & GPU Composited FX" },
      { name: "WebSockets & Local-First", level: "Advanced", highlight: "CRDTs & Real-Time Sync" },
      { name: "Performance & Accessibility", level: "Expert", highlight: "CWV & WCAG 2.1 AA" },
      { name: "Vite / Webpack / Tooling", level: "Advanced", highlight: "Tree-Shaking & Bundle Tuning" }
    ]
  },
  {
    name: "Backend & Systems",
    description: "Engineering scalable distributed architectures, concurrent services, and robust APIs.",
    skills: [
      { name: "Node.js / Express / Fastify", level: "Expert", highlight: "Asynchronous I/O & Microservices" },
      { name: "Python / FastAPI", level: "Advanced", highlight: "Async APIs & Agentic Pipelines" },
      { name: "Go (Golang)", level: "Proficient", highlight: "High Concurrency & Goroutines" },
      { name: "RESTful & GraphQL APIs", level: "Expert", highlight: "Schema Design & Versioning" },
      { name: "Event-Driven Systems", level: "Advanced", highlight: "Kafka & Redis Pub/Sub" },
      { name: "Microservice Architecture", level: "Expert", highlight: "Service Discovery & Resilience" }
    ]
  },
  {
    name: "Databases & Storage",
    description: "Designing performant data models, indexing strategies, and caching solutions.",
    skills: [
      { name: "PostgreSQL", level: "Expert", highlight: "Indexing, Query Plans & Migrations" },
      { name: "Redis", level: "Advanced", highlight: "In-Memory Caching & Distributed Locks" },
      { name: "ClickHouse", level: "Proficient", highlight: "Columnar OLAP Telemetry" },
      { name: "Prisma & Drizzle ORM", level: "Expert", highlight: "Type-Safe Relational Queries" },
      { name: "MongoDB", level: "Advanced", highlight: "Document Modeling & Aggregations" }
    ]
  },
  {
    name: "Cloud & DevOps",
    description: "Continuous deployment, containerization, and infrastructure reliability.",
    skills: [
      { name: "Docker & Containerization", level: "Expert", highlight: "Multi-stage Lean Builds" },
      { name: "Kubernetes (K8s)", level: "Proficient", highlight: "Pod Management & Deployments" },
      { name: "AWS (ECS, S3, CloudFront)", level: "Advanced", highlight: "Serverless & Cloud Networking" },
      { name: "GitHub Actions CI/CD", level: "Expert", highlight: "Automated Testing & Deployment" },
      { name: "Terraform & IaC", level: "Proficient", highlight: "Declarative Infrastructure" },
      { name: "Nginx & Reverse Proxies", level: "Advanced", highlight: "TLS & Load Balancing" }
    ]
  }
];

export const experiences = [
  {
    id: "lead-engineer",
    role: "Senior Full-Stack Engineer",
    company: "CloudScale Systems",
    period: "2023 — Present",
    location: "San Francisco, CA (Remote)",
    description: "Spearheaded the core platform architecture team building real-time collaboration engines and microservice orchestration frameworks.",
    highlights: [
      "Architected real-time event streaming pipeline processing 100M+ events daily with sub-50ms latency.",
      "Championed the migration to React 19 and modern CSS design tokens, improving Lighthouse scores from 68 to 98.",
      "Mentored junior and mid-level engineers, instituting Spec-Driven Development and rigorous code reviews."
    ],
    technologies: ["React 19", "TypeScript", "Node.js", "Kafka", "PostgreSQL", "AWS"]
  },
  {
    id: "fullstack-engineer",
    role: "Full-Stack Software Engineer",
    company: "Apex Tech Labs",
    period: "2021 — 2023",
    location: "New York, NY (Remote)",
    description: "Built developer tooling, internal analytics platforms, and user-facing dashboards with strict performance constraints.",
    highlights: [
      "Engineered automated ETL telemetry dashboard handling 50k concurrent queries with zero degradation.",
      "Reduced API response times by 40% through Redis multi-tier caching and query optimization.",
      "Implemented comprehensive CI/CD pipelines reducing deployment failure rates by 75%."
    ],
    technologies: ["TypeScript", "FastAPI", "React", "Docker", "Redis", "ClickHouse"]
  },
  {
    id: "software-developer",
    role: "Software Developer",
    company: "Innovate Digital",
    period: "2019 — 2021",
    location: "Remote",
    description: "Developed customer-facing web applications, responsive single-page apps, and RESTful microservices.",
    highlights: [
      "Developed 10+ end-to-end client applications with 100% test coverage for critical payment flows.",
      "Engineered responsive, accessible design systems adhering to WCAG 2.1 AA standards.",
      "Collaborated with cross-functional product and design teams in high-velocity agile sprints."
    ],
    technologies: ["JavaScript", "React", "Node.js", "PostgreSQL", "TailwindCSS"]
  }
];

export const terminalCommands = {
  help: `Available commands:
  • about       - Display professional summary & background
  • skills      - List core engineering technologies & competencies
  • projects    - View flagship full-stack projects & architectures
  • experience  - Show career journey & timeline milestones
  • contact     - Show direct email, GitHub & socials
  • clear       - Wipe the terminal display
  • sudo        - Superuser privileges easter egg`,

  about: `Goodness — Senior Full-Stack Engineer & System Architect
Over 6 years of experience engineering high-concurrency distributed backends,
cloud architectures, and ultra-fluid modern user interfaces.
Specialties: Distributed Systems, React 19, Go, Node.js, Cloud/Kubernetes.`,

  skills: `Technical Core:
  [Frontend]   React 19, TypeScript, Next.js, Vanilla CSS, WebSockets, WCAG
  [Backend]    Node.js, Go, Python/FastAPI, Kafka, Microservices, REST/GraphQL
  [Databases]  PostgreSQL, Redis, ClickHouse, Prisma, MongoDB
  [Cloud/Ops]  Docker, Kubernetes, AWS, GitHub Actions, Terraform, Nginx`,

  projects: `Flagship Projects:
  1. AuraCloud Orchestrator   - Distributed event streaming & workflow engine (Go, Kafka, React)
  2. PulseAnalytics Engine    - Sub-millisecond telemetry & observability (ClickHouse, Wasm, Next.js)
  3. Nexus Collaborative      - Local-first CRDT spatial canvas (React 19, Yjs, WebSockets)
  4. Synthetix Agent Studio   - Multi-agent AI software execution pipeline (Python, FastAPI, Docker)`,

  experience: `Career Highlights:
  • 2023 — Present: Senior Full-Stack Engineer @ CloudScale Systems
  • 2021 — 2023:    Full-Stack Software Engineer @ Apex Tech Labs
  • 2019 — 2021:    Software Developer @ Innovate Digital`,

  contact: `Connect:
  • Email:    goodness.codes@gmail.com
  • GitHub:   https://github.com/Goodie-codes
  • Status:   Available for high-impact roles & technical advisory`
};
