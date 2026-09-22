import React, { useRef } from 'react';
import { ExternalLink, ArrowRight, Layers, BarChart2 } from 'lucide-react';
import { Github } from './BrandIcons';

export default function ProjectCard({ project, onSelectProject }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="project-card liquid-glass-card"
    >
      {/* Visual Accent Top Bar */}
      <div 
        className="project-card-banner"
        style={{ background: project.bannerGradient }}
      />

      <div className="project-card-content">
        {/* Header: Category & Live links */}
        <div className="project-card-header">
          <span className="project-category-badge">
            <Layers size={13} />
            <span>{project.category}</span>
          </span>

          <div className="project-card-links">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="card-action-icon"
                title="View GitHub Repository"
                aria-label={`View ${project.title} GitHub repository`}
              >
                <Github size={16} />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="card-action-icon"
                title="View Live System"
                aria-label={`View ${project.title} live demo`}
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Title & Tagline */}
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-tagline">{project.tagline}</p>
        <p className="project-card-description">{project.shortDescription}</p>

        {/* Quantified Metrics Highlight */}
        <div className="project-metrics-grid">
          {project.metrics.map((metric, i) => (
            <div key={i} className="project-metric-pill">
              <span className="metric-val">{metric.value}</span>
              <span className="metric-lbl">{metric.label}</span>
            </div>
          ))}
        </div>

        {/* Technologies Stack Tags */}
        <div className="project-tech-tags">
          {project.technologies.map((tech, i) => (
            <span key={i} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Footer: Explore Architecture Button */}
        <div className="project-card-footer">
          <button
            onClick={() => onSelectProject(project)}
            className="explore-case-study-btn"
          >
            <span>Explore Architecture</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
