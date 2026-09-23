import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-text">
          © {new Date().getFullYear()} {personalInfo.name}. Designed & engineered with care.
        </div>

        <div className="footer-links">
          <a href="#work" className="footer-link">Work</a>
          <a href="#craft" className="footer-link">Craft</a>
          <a href="#experience" className="footer-link">Experience</a>
          <a href="#contact" className="footer-link">Contact</a>
          <button onClick={scrollToTop} className="footer-link" style={{ cursor: 'pointer' }}>
            Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
