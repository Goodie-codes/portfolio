import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Heart, ShieldCheck } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="section-container footer-container">
        <div className="footer-top-row">
          <div className="footer-brand">
            <span className="footer-name text-gradient">
              {personalInfo.name}
            </span>
            <p className="footer-tagline">
              Senior Full-Stack Software Engineer & Distributed Systems Architect.
            </p>
          </div>

          <div className="footer-links-group">
            <a href="#projects" className="footer-link">Projects</a>
            <a href="#skills" className="footer-link">Tech Stack</a>
            <a href="#experience" className="footer-link">Journey</a>
            <a href="#terminal" className="footer-link">Console</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>

          <button onClick={scrollToTop} className="back-to-top-btn liquid-glass" aria-label="Back to top">
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>

        <div className="footer-bottom-row">
          <div className="footer-copyright">
            © {new Date().getFullYear()} {personalInfo.name}. Engineered with precision and liquid glass craft.
          </div>

          <div className="footer-spec-badge liquid-glass-pill">
            <ShieldCheck size={14} className="text-success" />
            <span>Built with GitHub Spec-Kit SDD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
