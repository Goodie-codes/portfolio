import React from 'react';
import { experiences } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-container">
      <div className="section-header">
        <div className="section-tag">
          <Briefcase size={16} />
          <span>Career Journey</span>
        </div>
        <h2 className="section-title">
          Experience & <span className="text-gradient">Track Record</span>
        </h2>
        <p className="section-description">
          A track record of designing high-throughput systems, scaling web platforms, and leading technical initiatives in fast-moving engineering environments.
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="timeline-wrapper">
        <div className="timeline-line" />

        <div className="timeline-items-list">
          {experiences.map((exp, idx) => (
            <div key={exp.id} className="timeline-item">
              {/* Timeline Node Point with Liquid Glow */}
              <div className="timeline-node">
                <div className="timeline-node-dot" />
                <div className="timeline-node-pulse" />
              </div>

              {/* Timeline Experience Card */}
              <div className="timeline-card liquid-glass-card">
                <div className="timeline-card-header">
                  <div className="timeline-role-info">
                    <h3 className="timeline-role-title">{exp.role}</h3>
                    <div className="timeline-company-badge">
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="timeline-meta-badges">
                    <span className="meta-pill">
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                    </span>
                    <span className="meta-pill">
                      <MapPin size={13} />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <p className="timeline-description">{exp.description}</p>

                {/* Key Accomplishments */}
                <ul className="timeline-highlights">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="timeline-highlight-item">
                      <CheckCircle2 size={16} className="highlight-icon" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="timeline-tags-list">
                  {exp.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
