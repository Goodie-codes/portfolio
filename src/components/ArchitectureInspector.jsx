import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Smartphone, Cpu, CheckCircle2, Shield, Layers, Sparkles } from 'lucide-react';

export default function ArchitectureInspector() {
  const [selectedPillar, setSelectedPillar] = useState(0);

  const pillars = [
    {
      id: 0,
      badge: "Pillar 01 · Frontend",
      title: "Interface Craft & Modern Web Standards",
      icon: Code2,
      tags: ["React", "ES6+ JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
      summary: "Building responsive, user-centric web applications with clean, maintainable code, tactile motion, and disciplined accessibility.",
      points: [
        "Component-driven frontend architectures built with React, Vite, and modern ES6+ JavaScript.",
        "Zero layout-shift responsive web design translating Figma design systems into pixel-accurate code.",
        "Disciplined semantic HTML5, modern CSS3 layouts (Grid, Flexbox), and Tailwind CSS utility styling.",
        "WCAG accessibility standards with keyboard navigability, semantic tags, and smooth UI feedback."
      ]
    },
    {
      id: 1,
      badge: "Pillar 02 · Full-Stack",
      title: "Full-Stack Web & Platform Architecture",
      icon: Cpu,
      tags: ["Next.js 14", "TypeScript", "PostgreSQL", "Prisma ORM", "REST APIs"],
      summary: "Expanding into robust full-stack platforms, engineering reliable database schemas, role-based access control (RBAC), and automated workflows.",
      points: [
        "Architected full-stack enterprise platform and CRM using Next.js 14 App Router and TypeScript (Krysta Forms Ltd).",
        "Configured PostgreSQL databases and Prisma ORM for relational data models and audit logging.",
        "Implemented role-based access control (RBAC), dynamic RFQ lead pipelines, and serverless document generation engines.",
        "Structured RESTful APIs with clean validation, defensive error handling, and predictable asynchronous states."
      ]
    },
    {
      id: 2,
      badge: "Pillar 03 · Leadership",
      title: "Technical Mentorship & Agile Collaboration",
      icon: Shield,
      tags: ["Code Reviews", "Mentorship", "Community Workshops", "Agile Teams"],
      summary: "Proven ability to mentor junior engineers, lead technical workshops, and collaborate seamlessly within cross-functional agile teams.",
      points: [
        "Served as Assistant Stack Lead for Front-End Development at RUNTECHSPACE, mentoring beginner engineers.",
        "Conducted structured code reviews, providing constructive feedback to enforce industry best practices.",
        "Facilitated collaborative workshops to build developer community engagement and technical confidence.",
        "Collaborated across design, engineering, and operations teams at EThree10, GBFoods, and Squared Labs Ltd."
      ]
    },
    {
      id: 3,
      badge: "Pillar 04 · Reliability",
      title: "Project Management & Systems Reliability",
      icon: Smartphone,
      tags: ["Git / GitHub", "IT Infrastructure", "Incident Resolution", "Project Tracking"],
      summary: "Combining practical IT infrastructure maintenance, incident resolution, and project management to ensure maximum system uptime.",
      points: [
        "Disciplined Git and GitHub hygiene with atomic commits, structured branching, and clear issue tracking.",
        "Provided organization-wide technical support and network infrastructure maintenance at GBFoods.",
        "Documented technical support procedures and tracked incidents to improve team resolution efficiency.",
        "Applied project management methodologies to coordinate milestones and deliver outcomes on schedule."
      ]
    }
  ];

  const current = pillars[selectedPillar];

  return (
    <section id="craft" className="section-container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="section-eyebrow">Core Engineering</span>
        <h2 className="section-title">Technical Principles & Craft</h2>
        <p className="section-description">
          The principles and disciplines that guide every line of code I write, from architecture boundaries to tactile interface motion.
        </p>
      </motion.div>

      <motion.div
        className="arch-inspector-container"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Layer Selector Bar */}
        <div className="arch-layer-selector" role="tablist">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isSelected = selectedPillar === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setSelectedPillar(pillar.id)}
                className={`arch-layer-btn ${isSelected ? 'active' : ''}`}
                role="tab"
                aria-selected={isSelected}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeLayerTabPill"
                    className="arch-layer-active-indicator"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  />
                )}
                <span className="arch-layer-btn-inner">
                  <Icon size={16} />
                  <span>{pillar.badge}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Architectural Detail HUD */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -14, filter: 'blur(4px)' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="arch-hud-card"
          >
            <div className="arch-hud-top">
              <div className="arch-hud-badge-row">
                <div className="arch-badge-group">
                  <span className="arch-status-dot" />
                  <span className="arch-tag">{current.badge}</span>
                </div>
                <div className="arch-tags-cluster">
                  {current.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="arch-micro-pill">{tag}</span>
                  ))}
                </div>
              </div>
              <h3 className="arch-hud-title">{current.title}</h3>
              <p className="arch-hud-summary">{current.summary}</p>
            </div>

            <div className="arch-hud-body">
              <div className="arch-decisions-section">
                <h4 className="decisions-heading">Technical Implementation Standards</h4>
                <div className="decisions-list">
                  {current.points.map((pt, idx) => (
                    <motion.div
                      key={idx}
                      className="decision-item"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.06, duration: 0.3 }}
                    >
                      <CheckCircle2 size={16} className="decision-icon" />
                      <p className="decision-text">{pt}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
