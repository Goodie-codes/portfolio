import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle, Cpu, AlertCircle, BarChart3 } from 'lucide-react';
import { Github } from './BrandIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-content liquid-glass" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-wrap">
            <span className="modal-category-tag">{project.category}</span>
            <h3 id="modal-project-title" className="modal-title">{project.title}</h3>
            <p className="modal-tagline">{project.tagline}</p>
          </div>
          <button 
            onClick={onClose} 
            className="modal-close-btn"
            aria-label="Close architecture modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Quantified Metrics Highlight */}
          <div className="modal-metrics-container liquid-glass">
            <div className="modal-section-label">
              <BarChart3 size={15} />
              <span>Key Architectural Metrics</span>
            </div>
            <div className="modal-metrics-grid">
              {project.metrics.map((metric, i) => (
                <div key={i} className="modal-metric-card">
                  <div className="metric-huge text-gradient">{metric.value}</div>
                  <div className="metric-name">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Problem Statement */}
          <div className="modal-section-block">
            <div className="modal-section-label text-warning">
              <AlertCircle size={15} />
              <span>The Engineering Problem</span>
            </div>
            <p className="modal-section-text">{project.caseStudy.problem}</p>
          </div>

          {/* Architecture Highlights */}
          <div className="modal-section-block">
            <div className="modal-section-label text-accent">
              <Cpu size={15} />
              <span>System Architecture & Decisions</span>
            </div>
            <ul className="modal-architecture-list">
              {project.caseStudy.architecture.map((item, idx) => (
                <li key={idx} className="architecture-item">
                  <CheckCircle size={16} className="item-bullet-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact Summary */}
          <div className="modal-section-block">
            <div className="modal-section-label text-success">
              <CheckCircle size={15} />
              <span>Measurable Outcome & Impact</span>
            </div>
            <p className="modal-section-text">{project.caseStudy.impact}</p>
          </div>

          {/* Technologies Used */}
          <div className="modal-tech-stack">
            <span className="tech-stack-label">Stack Employed:</span>
            <div className="modal-tech-pills">
              {project.technologies.map((t, idx) => (
                <span key={idx} className="modal-tech-pill">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Links */}
        <div className="modal-footer">
          <div className="modal-footer-actions">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="liquid-glass-btn liquid-glass-btn-secondary"
              >
                <Github size={16} />
                <span>View Source Code</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="liquid-glass-btn liquid-glass-btn-primary"
              >
                <span>Launch Live System</span>
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
