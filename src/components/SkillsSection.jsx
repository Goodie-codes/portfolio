import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { Cpu, Terminal, Database, Cloud, Check } from 'lucide-react';

const categoryIcons = {
  "Frontend Craft": Terminal,
  "Backend & Systems": Cpu,
  "Databases & Storage": Database,
  "Cloud & DevOps": Cloud
};

export default function SkillsSection() {
  return (
    <section id="skills" className="section-container">
      <div className="section-header">
        <div className="section-tag">
          <Cpu size={16} />
          <span>Core Competencies</span>
        </div>
        <h2 className="section-title">
          Tech Stack & <span className="text-gradient">Systems Architecture</span>
        </h2>
        <p className="section-description">
          A disciplined, production-tested toolkit spanning front-end rendering engines, distributed microservices, and automated cloud infrastructure.
        </p>
      </div>

      {/* Skills Matrix Grid */}
      <div className="skills-matrix-grid">
        {skillCategories.map((cat, idx) => {
          const IconComponent = categoryIcons[cat.name] || Cpu;
          return (
            <div key={idx} className="skill-category-card liquid-glass-card">
              <div className="skill-card-header">
                <div className="skill-icon-wrapper">
                  <IconComponent size={20} />
                </div>
                <div>
                  <h3 className="skill-category-title">{cat.name}</h3>
                  <p className="skill-category-desc">{cat.description}</p>
                </div>
              </div>

              <div className="skill-items-list">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-row-item">
                    <div className="skill-item-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-highlight">{skill.highlight}</span>
                    </div>
                    <span className="skill-level-badge">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
