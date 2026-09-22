import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowRight, 
  Terminal as TerminalIcon, 
  Mail, 
  Sparkles, 
  CheckCircle2, 
  Download 
} from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

export default function Hero({ onOpenTerminal }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="section-container hero-container">
        {/* Availability Pill */}
        <div className="hero-availability">
          <div className="liquid-glass-pill hero-status-pill">
            <span className="status-indicator">
              <span className="status-ping" />
              <span className="status-dot" />
            </span>
            <span>{personalInfo.availabilityStatus}</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="hero-headline-wrapper">
          <h1 className="hero-title">
            Engineering scalable systems with <br className="hero-br" />
            <span className="text-gradient">Liquid Precision & Craft.</span>
          </h1>

          {/* Dynamic Role Rotator */}
          <div className="hero-role-rotator">
            <span className="role-prefix">I build as a</span>
            <span className="role-text-badge liquid-glass">
              <Sparkles size={16} className="role-icon" />
              <span key={currentRoleIndex} className="role-name-animated">
                {personalInfo.roles[currentRoleIndex]}
              </span>
            </span>
          </div>

          <p className="hero-bio">{personalInfo.bio}</p>
        </div>

        {/* Hero CTAs */}
        <div className="hero-actions">
          <a href="#projects" className="liquid-glass-btn liquid-glass-btn-primary">
            <span>Explore Flagship Work</span>
            <ArrowRight size={18} />
          </a>

          <button
            onClick={onOpenTerminal}
            className="liquid-glass-btn liquid-glass-btn-secondary"
            aria-label="Launch interactive developer terminal"
          >
            <TerminalIcon size={18} />
            <span>Launch Console (CLI)</span>
          </button>
        </div>

        {/* Social Links & Quick Proof */}
        <div className="hero-social-strip">
          <div className="social-links-list">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="social-icon-pill"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="social-icon-pill"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="social-icon-pill"
              aria-label="Send direct email"
            >
              <Mail size={18} />
              <span>{personalInfo.email}</span>
            </a>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="hero-stats-grid">
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="stat-card liquid-glass">
              <div className="stat-value text-gradient">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
