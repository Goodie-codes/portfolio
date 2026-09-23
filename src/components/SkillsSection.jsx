import React from 'react';
import { craftAreas } from '../data/portfolioData';

export default function SkillsSection() {
  return (
    <section id="craft" className="section-container">
      <div className="section-header">
        <span className="section-eyebrow">Engineering / Capabilities</span>
        <h2 className="section-title">Technical Craft & Focus</h2>
        <p className="section-description">
          A disciplined engineering foundation built on pragmatic principles, maintainable abstractions, and systems that scale gracefully.
        </p>
      </div>

      <div className="craft-grid">
        {craftAreas.map((area, idx) => (
          <div key={idx} className="craft-card">
            <h3 className="craft-card-title">{area.title}</h3>
            <p className="craft-card-desc">{area.description}</p>
            <div className="craft-stack-list">
              {area.technologies.map((tech, tIdx) => (
                <span key={tIdx} className="craft-stack-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
