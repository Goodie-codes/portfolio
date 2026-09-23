import React from 'react';
import { motion } from 'motion/react';
import { experiences, volunteeringAndLeadership } from '../data/portfolioData';
import { Briefcase, Calendar, Building2, CheckCircle2, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-container">
      <div className="section-header">
        <div className="section-eyebrow-wrap">
          <Briefcase size={14} className="section-eyebrow-icon" />
          <span className="section-eyebrow">Career & Leadership</span>
        </div>
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-description">
          Engineering roles, technical leadership, and organizational strategy delivering resilient software systems and mentoring developer communities.
        </p>
      </div>

      {/* Main Experience Cards */}
      <div className="experience-cards-grid">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="experience-glass-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top Bar: Role & Badges */}
            <div className="experience-card-header">
              <div className="experience-title-group">
                <h3 className="experience-role-title">{exp.role}</h3>
                <div className="experience-company-pill">
                  <Building2 size={13} className="experience-company-icon" />
                  <span className="experience-company-name">{exp.company}</span>
                </div>
              </div>

              <div className="experience-badges-row">
                {exp.type && (
                  <span className="experience-type-pill">
                    {exp.type}
                  </span>
                )}
                <span className="experience-period-pill">
                  <Calendar size={12} />
                  <span>{exp.period}</span>
                </span>
              </div>
            </div>

            {/* Role Summary */}
            <p className="experience-card-desc">{exp.description}</p>

            {/* Impact & Responsibilities */}
            {exp.points && exp.points.length > 0 && (
              <div className="experience-points-block">
                <div className="experience-points-label">Key Deliverables & Responsibilities</div>
                <ul className="experience-points-list">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="experience-point-item">
                      <CheckCircle2 size={15} className="experience-bullet-icon" />
                      <span className="experience-point-text">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Volunteering & Community Initiatives */}
      {volunteeringAndLeadership && volunteeringAndLeadership.length > 0 && (
        <div className="volunteering-section">
          <div className="section-header volunteering-header">
            <div className="section-eyebrow-wrap">
              <HeartHandshake size={14} className="section-eyebrow-icon" />
              <span className="section-eyebrow">Community & Impact</span>
            </div>
            <h3 className="volunteering-title">Volunteering & Leadership</h3>
            <p className="section-description">
              Initiatives dedicated to community empowerment, technology education, and leadership development.
            </p>
          </div>

          <div className="experience-cards-grid">
            {volunteeringAndLeadership.map((item, idx) => (
              <motion.div
                key={idx}
                className="experience-glass-card volunteering-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="experience-card-header">
                  <div className="experience-title-group">
                    <h4 className="experience-role-title">{item.role}</h4>
                    <div className="experience-company-pill">
                      <Building2 size={13} className="experience-company-icon" />
                      <span className="experience-company-name">{item.organization}</span>
                    </div>
                  </div>

                  <div className="experience-badges-row">
                    <span className="experience-period-pill">
                      <Calendar size={12} />
                      <span>{item.period}</span>
                    </span>
                  </div>
                </div>

                <p className="experience-card-desc">{item.description}</p>

                {item.points && item.points.length > 0 && (
                  <div className="experience-points-block">
                    <ul className="experience-points-list">
                      {item.points.map((point, pIdx) => (
                        <li key={pIdx} className="experience-point-item">
                          <CheckCircle2 size={15} className="experience-bullet-icon" />
                          <span className="experience-point-text">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
