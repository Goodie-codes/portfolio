import React from 'react';
import { selectedProjects } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';
import { Github } from './BrandIcons';

export default function ProjectsSection({ onSelectProject }) {
  return (
    <section id="work" className="section-container">
      <div className="section-header">
        <span className="section-eyebrow">Portfolio / Work</span>
        <h2 className="section-title">Selected Projects</h2>
        <p className="section-description">
          Systems and web applications engineered with architectural intent, clean code, and practical problem solving.
        </p>
      </div>

      <div className="projects-list">
        {selectedProjects.map((project) => (
          <article
            key={project.id}
            className="project-item-card"
            onClick={() => onSelectProject(project)}
          >
            <div className="project-item-top">
              <h3 className="project-item-title">{project.title}</h3>
              <div className="project-item-meta">
                <span className="project-year">{project.year}</span>
              </div>
            </div>

            <p className="project-item-tagline">{project.tagline}</p>
            <p className="project-item-desc">{project.description}</p>

            <div className="project-item-footer">
              <div className="project-tags">
                {project.details.stack.map((tech, i) => (
                  <span key={i} className="project-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <span className="project-view-link">
                <span>View Architecture & Case Study</span>
                <ArrowUpRight size={14} />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
