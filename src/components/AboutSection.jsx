import React from 'react';
import { motion } from 'motion/react';
import { aboutMe, personalInfo } from '../data/portfolioData';
import { User, Code2, Cpu, ShieldCheck, HeartHandshake, MapPin, Mail, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const iconMap = [Code2, Cpu, ShieldCheck, HeartHandshake];

  return (
    <section id="about" className="section-container">
      {/* Section Header */}
      <div className="section-header">
        <div className="section-eyebrow-wrap">
          <User size={14} className="section-eyebrow-icon" />
          <span className="section-eyebrow">{aboutMe.eyebrow}</span>
        </div>
        <h2 className="section-title">Background & Approach</h2>
        <p className="section-description">
          Software developer with hands-on experience crafting responsive, user-centric web applications and driving product strategy.
        </p>
      </div>

      {/* Main About Layout */}
      <div className="about-layout-grid">
        {/* Left / Narrative Card */}
        <motion.div
          className="about-story-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="about-card-badge-row">
            <span className="about-role-pill">Software Developer</span>
            <span className="about-cso-pill">CSO @ Squared Labs Ltd</span>
            <span className="about-location-pill">
              <MapPin size={12} />
              <span>{personalInfo.location}</span>
            </span>
          </div>

          <h3 className="about-headline">{aboutMe.title}</h3>

          <div className="about-paragraphs-flow">
            {aboutMe.summaryParagraphs.map((para, idx) => (
              <p key={idx} className="about-body-text">
                {para}
              </p>
            ))}
          </div>

          {/* Key Metrics / Stat Ribbon */}
          <div className="about-stats-ribbon">
            {aboutMe.stats.map((stat, idx) => (
              <div key={idx} className="about-stat-item">
                <span className="about-stat-label">{stat.label}</span>
                <span className="about-stat-value">{stat.value}</span>
              </div>
            ))}
          </div>

          {/* Quick Connect CTA Link */}
          <div className="about-footer-row">
            <a href="#contact" className="about-cta-link">
              <span>Discuss an engineering collaboration</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </motion.div>

        {/* Right / Core Pillars Grid */}
        <div className="about-pillars-stack">
          {aboutMe.pillars.map((pillar, idx) => {
            const Icon = iconMap[idx % iconMap.length];
            return (
              <motion.div
                key={idx}
                className="about-pillar-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="about-pillar-icon-wrap">
                  <Icon size={18} />
                </div>
                <div className="about-pillar-content">
                  <h4 className="about-pillar-title">{pillar.title}</h4>
                  <p className="about-pillar-desc">{pillar.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
