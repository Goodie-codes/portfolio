import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Github } from './BrandIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
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
    <AnimatePresence>
      <motion.div
        className="modal-backdrop"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.24 }}
      >
        <motion.div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ type: 'spring', damping: 28, stiffness: 340 }}
        >
          <div className="modal-header">
            <div>
              <span className="section-eyebrow">{project.year || '2025'} Architectural Brief</span>
              <h2 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '6px' }}>
                {project.title}
              </h2>
              <p className="project-item-tagline" style={{ marginBottom: 0 }}>
                {project.tagline || 'Production engineering breakdown & architectural trade-offs'}
              </p>
            </div>
            <motion.button
              onClick={onClose}
              className="modal-close-btn"
              aria-label="Close modal"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={16} />
            </motion.button>
          </div>

          <div className="modal-body">
            {project.details && (
              <>
                <div>
                  <h3 className="modal-section-title">The Engineering Challenge</h3>
                  <p className="modal-text">{project.details.problem}</p>
                </div>

                <div>
                  <h3 className="modal-section-title">Architecture & System Design</h3>
                  <p className="modal-text">{project.details.solution}</p>
                </div>

                <div>
                  <h3 className="modal-section-title">Engineered Stack</h3>
                  <div className="project-tags">
                    {project.details.stack.map((t, idx) => (
                      <span key={idx} className="project-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {project.details.highlights && (
                  <div>
                    <h3 className="modal-section-title">Performance & Guarantees</h3>
                    <div className="modal-highlights">
                      {project.details.highlights.map((h, idx) => (
                        <div key={idx} className="modal-highlight-item">
                          <CheckCircle2 size={15} className="highlight-icon" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="modal-footer">
            <div className="modal-actions">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                >
                  <Github size={14} />
                  <span>Inspect Repository</span>
                  <ArrowUpRight size={13} />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                >
                  <span>Launch Live System</span>
                  <ArrowUpRight size={13} />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
