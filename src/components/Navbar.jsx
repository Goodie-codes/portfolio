import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Terminal, Command, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenCommandPalette }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Tech Stack' },
    { id: 'experience', label: 'Experience' },
    { id: 'terminal', label: 'Console' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'projects', 'skills', 'experience', 'terminal', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand / Logo */}
        <a href="#hero" className="brand-logo" aria-label="Goodness Home">
          <div className="brand-icon">
            <Sparkles size={16} className="brand-sparkle" />
          </div>
          <span className="brand-name">
            {personalInfo.name}
            <span className="brand-dot">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav-links" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                {link.label}
                {isActive && <span className="active-pill-glow" />}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Command Palette & Get in touch */}
        <div className="nav-actions">
          <button
            onClick={onOpenCommandPalette}
            className="cmd-palette-btn"
            title="Press ⌘K to open command palette"
            aria-label="Open Command Palette"
          >
            <Command size={14} />
            <span className="cmd-text">Quick Search</span>
            <kbd className="cmd-badge">⌘K</kbd>
          </button>

          <a href="#contact" className="nav-contact-btn">
            <span>Let's Talk</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer liquid-glass" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-nav-list">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="mobile-drawer-actions">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCommandPalette();
                  }}
                  className="mobile-cmd-btn"
                >
                  <Command size={16} />
                  <span>Command Palette (⌘K)</span>
                </button>
                <a
                  href="#contact"
                  className="liquid-glass-btn liquid-glass-btn-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Get In Touch</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
