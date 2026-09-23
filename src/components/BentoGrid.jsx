import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ExternalLink, Code2, CheckCircle2, Globe } from 'lucide-react';
import { Github } from './BrandIcons';
import AppleTiltCard from './AppleTiltCard';
import MagneticButton from './MagneticButton';
import { githubProjects } from '../data/portfolioData';

export default function BentoGrid({ onSelectProject }) {
  const [krysta, reach, moviesearcher, portfolioProject, ...otherRepos] = githubProjects;

  const handleCardClick = (e, url) => {
    if (!url) return;
    if (e.target.closest('a') || e.target.closest('button')) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="work" className="section-container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="section-eyebrow">Selected Work</span>
        <h2 className="section-title">Production Codebases & Live Deployments</h2>
        <p className="section-description">
          Live platforms and web applications deployed to production. Click any project card or the live site button to explore in real-time.
        </p>
      </motion.div>

      <div className="apple-bento-grid">
        {/* =================================================================
            HERO BENTO CARD: Krysta Forms Enterprise Platform (Span 2 cols)
            ================================================================= */}
        <motion.div
          className="bento-hero-wrapper"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        >
          <AppleTiltCard className="bento-card bento-hero-card bento-card-clickable" maxTilt={3}>
            <div
              className="bento-card-inner"
              onClick={(e) => handleCardClick(e, krysta.liveUrl)}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleCardClick(e, krysta.liveUrl);
              }}
              title="Click to visit live site in real-time"
            >
              <div className="bento-header">
                <div className="bento-tag-row">
                  <span className="bento-tag">{krysta.badge}</span>
                  <span className="bento-year">{krysta.year}</span>
                </div>

                <a
                  href={krysta.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bento-title-link"
                  title="Visit Live Site"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="bento-title">{krysta.title}</h3>
                  <ArrowUpRight size={22} className="title-arrow-icon" />
                </a>

                <p className="bento-desc">{krysta.description}</p>
              </div>

              {/* Engineering Highlights */}
              <div className="bento-highlights-block">
                <div className="highlights-grid">
                  {krysta.highlights.map((h, i) => (
                    <div key={i} className="highlight-pill">
                      <CheckCircle2 size={14} className="highlight-bullet" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bento-card-footer">
                <div className="bento-tech-chips">
                  {krysta.stack.map((t, idx) => (
                    <span key={idx} className="bento-tech-pill">{t}</span>
                  ))}
                </div>
                <div className="bento-btn-group">
                  <MagneticButton pullFactor={0.22}>
                    <a
                      href={krysta.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="bento-cta-live"
                      title="Open live website in real-time"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="live-dot-glow" />
                      <span>Live Site</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </MagneticButton>
                  <a
                    href={krysta.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bento-cta-subtle"
                    title="View GitHub Repository"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={13} />
                    <span>Code</span>
                  </a>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject(krysta);
                    }}
                    className="bento-cta-subtle"
                    title="Read technical brief"
                  >
                    <span>Brief</span>
                  </button>
                </div>
              </div>
            </div>
          </AppleTiltCard>
        </motion.div>

        {/* =================================================================
            CARD 2: RentIt Marketplace Web UI (Reach)
            ================================================================= */}
        <motion.div
          className="bento-card-wrapper"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <AppleTiltCard className="bento-card bento-card-clickable" maxTilt={3.5}>
            <div
              className="bento-card-inner"
              onClick={(e) => handleCardClick(e, reach.liveUrl)}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleCardClick(e, reach.liveUrl);
              }}
              title="Click to visit live marketplace in real-time"
            >
              <div className="bento-header">
                <div className="bento-tag-row">
                  <span className="bento-tag">{reach.badge}</span>
                  <span className="bento-year">{reach.year}</span>
                </div>

                <a
                  href={reach.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bento-title-link"
                  title="Visit Live Marketplace"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="bento-title">{reach.title}</h3>
                  <ArrowUpRight size={20} className="title-arrow-icon" />
                </a>

                <p className="bento-desc">{reach.description}</p>
              </div>

              <div className="bento-highlights-block">
                <div className="highlights-grid">
                  {reach.highlights.map((h, i) => (
                    <div key={i} className="highlight-pill">
                      <CheckCircle2 size={14} className="highlight-bullet" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bento-card-footer">
                <div className="bento-tech-chips">
                  {reach.stack.map((t, idx) => (
                    <span key={idx} className="bento-tech-pill">{t}</span>
                  ))}
                </div>
                <div className="bento-btn-group">
                  <MagneticButton pullFactor={0.22}>
                    <a
                      href={reach.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="bento-cta-live"
                      title="Open live app in real-time"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="live-dot-glow" />
                      <span>Live Site</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </MagneticButton>
                  <a
                    href={reach.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bento-cta-subtle"
                    title="View GitHub Repository"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={13} />
                    <span>Code</span>
                  </a>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject(reach);
                    }}
                    className="bento-cta-subtle"
                    title="Read technical brief"
                  >
                    <span>Brief</span>
                  </button>
                </div>
              </div>
            </div>
          </AppleTiltCard>
        </motion.div>

        {/* =================================================================
            CARD 3: MovieSearcher Web App
            ================================================================= */}
        <motion.div
          className="bento-card-wrapper"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <AppleTiltCard className="bento-card bento-card-clickable" maxTilt={3.5}>
            <div
              className="bento-card-inner"
              onClick={(e) => handleCardClick(e, moviesearcher.liveUrl)}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleCardClick(e, moviesearcher.liveUrl);
              }}
              title="Click to visit live search app in real-time"
            >
              <div className="bento-header">
                <div className="bento-tag-row">
                  <span className="bento-tag">{moviesearcher.badge}</span>
                  <span className="bento-year">{moviesearcher.year}</span>
                </div>

                <a
                  href={moviesearcher.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bento-title-link"
                  title="Visit Live Search App"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="bento-title">{moviesearcher.title}</h3>
                  <ArrowUpRight size={20} className="title-arrow-icon" />
                </a>

                <p className="bento-desc">{moviesearcher.description}</p>
              </div>

              <div className="bento-highlights-block">
                <div className="highlights-grid">
                  {moviesearcher.highlights.map((h, i) => (
                    <div key={i} className="highlight-pill">
                      <CheckCircle2 size={14} className="highlight-bullet" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bento-card-footer">
                <div className="bento-tech-chips">
                  {moviesearcher.stack.map((t, idx) => (
                    <span key={idx} className="bento-tech-pill">{t}</span>
                  ))}
                </div>
                <div className="bento-btn-group">
                  <MagneticButton pullFactor={0.22}>
                    <a
                      href={moviesearcher.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="bento-cta-live"
                      title="Open live app in real-time"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="live-dot-glow" />
                      <span>Live Site</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </MagneticButton>
                  <a
                    href={moviesearcher.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bento-cta-subtle"
                    title="View GitHub Repository"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={13} />
                    <span>Code</span>
                  </a>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject(moviesearcher);
                    }}
                    className="bento-cta-subtle"
                    title="Read technical brief"
                  >
                    <span>Brief</span>
                  </button>
                </div>
              </div>
            </div>
          </AppleTiltCard>
        </motion.div>

        {/* =================================================================
            CARD 4: Flagship Developer Portfolio & PWA
            ================================================================= */}
        <motion.div
          className="bento-card-wrapper"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <AppleTiltCard className="bento-card bento-card-clickable" maxTilt={3.5}>
            <div
              className="bento-card-inner"
              onClick={(e) => handleCardClick(e, portfolioProject.githubUrl)}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleCardClick(e, portfolioProject.githubUrl);
              }}
              title="Click to view repository on GitHub"
            >
              <div className="bento-header">
                <div className="bento-tag-row">
                  <span className="bento-tag">{portfolioProject.badge}</span>
                  <span className="bento-year">{portfolioProject.year}</span>
                </div>

                <a
                  href="#top"
                  className="bento-title-link"
                  title="Current Application"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="bento-title">{portfolioProject.title}</h3>
                  <ArrowUpRight size={20} className="title-arrow-icon" />
                </a>

                <p className="bento-desc">{portfolioProject.description}</p>
              </div>

              <div className="bento-highlights-block">
                <div className="highlights-grid">
                  {portfolioProject.highlights.map((h, i) => (
                    <div key={i} className="highlight-pill">
                      <CheckCircle2 size={14} className="highlight-bullet" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bento-card-footer">
                <div className="bento-tech-chips">
                  {portfolioProject.stack.map((t, idx) => (
                    <span key={idx} className="bento-tech-pill">{t}</span>
                  ))}
                </div>
                <div className="bento-btn-group">
                  <MagneticButton pullFactor={0.22}>
                    <a
                      href={portfolioProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="bento-cta-live"
                      title="View GitHub Repository"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={13} />
                      <span>View Repo</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </MagneticButton>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject(portfolioProject);
                    }}
                    className="bento-cta-subtle"
                    title="Read technical brief"
                  >
                    <span>Brief</span>
                  </button>
                </div>
              </div>
            </div>
          </AppleTiltCard>
        </motion.div>
      </div>

      {/* Additional GitHub Repositories Grid */}
      <motion.div
        className="additional-repos-section"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <h3 className="additional-repos-title">Other Public Deployments & Repositories</h3>
        <div className="additional-repos-grid">
          {otherRepos.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <AppleTiltCard className="mini-repo-card mini-repo-clickable" maxTilt={3}>
                <div
                  className="mini-repo-inner"
                  onClick={(e) => handleCardClick(e, p.liveUrl || p.githubUrl)}
                  role="link"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleCardClick(e, p.liveUrl || p.githubUrl);
                  }}
                  title={`Click to open ${p.liveUrl ? 'live deployment' : 'repository'}`}
                >
                  <div className="mini-repo-top">
                    <span className="mini-repo-badge">{p.primaryLanguage}</span>
                    <div className="mini-repo-actions">
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="mini-live-link"
                          title="Visit Live Site in real-time"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span className="live-dot-mini" />
                          <span>Live Site</span>
                          <ArrowUpRight size={12} />
                        </a>
                      )}
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mini-repo-link"
                        title={`Open ${p.title} on GitHub`}
                        aria-label={`Open ${p.title} on GitHub`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={14} />
                      </a>
                    </div>
                  </div>

                  <a
                    href={p.liveUrl || p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mini-title-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <h4 className="mini-repo-title">{p.title}</h4>
                    <ArrowUpRight size={14} className="mini-title-arrow" />
                  </a>

                  <p className="mini-repo-desc">{p.description}</p>
                </div>
              </AppleTiltCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
