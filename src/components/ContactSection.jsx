import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Copy, Check, Send, MessageSquare, Clock, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

export default function ContactSection({ onShowToast }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    onShowToast('Email copied to clipboard! 📋');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Please fill out all fields before sending.');
      return;
    }

    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('sent');
      onShowToast('Message transmitted! I will respond promptly. 🚀');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 4000);
    }, 1000);
  };

  return (
    <section id="contact" className="section-container">
      <div className="section-header">
        <div className="section-tag">
          <MessageSquare size={16} />
          <span>Initiate Contact</span>
        </div>
        <h2 className="section-title">
          Let’s Build Something <span className="text-gradient">Exceptional.</span>
        </h2>
        <p className="section-description">
          Whether you’re seeking a senior engineer to architect high-concurrency systems, scale your web platform, or provide technical advisory, let’s talk.
        </p>
      </div>

      <div className="contact-grid">
        {/* Left Column: Direct Info & Quick Copy */}
        <div className="contact-info-card liquid-glass-card">
          <h3 className="contact-card-title">Get In Touch Directly</h3>
          <p className="contact-card-desc">
            I am always open to discussing new engineering challenges, distributed system designs, or leadership roles.
          </p>

          {/* Quick Copy Email Box */}
          <div className="email-copy-box liquid-glass">
            <div className="email-copy-info">
              <Mail size={18} className="email-icon" />
              <span className="email-text">{personalInfo.email}</span>
            </div>
            <button
              onClick={handleCopyEmail}
              className="copy-btn liquid-glass-btn-secondary"
              aria-label="Copy email address"
            >
              {copied ? <Check size={16} className="text-success" /> : <Copy size={16} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Response Expectation */}
          <div className="response-time-pill">
            <Clock size={15} />
            <span>Typical response time: within 24 hours</span>
          </div>

          {/* Social Profiles */}
          <div className="contact-socials-wrapper">
            <span className="socials-label">Online Presence:</span>
            <div className="contact-socials-list">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="social-btn liquid-glass"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
                <span>GitHub</span>
                <ArrowUpRight size={14} className="social-arrow" />
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="social-btn liquid-glass"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
                <ArrowUpRight size={14} className="social-arrow" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="contact-form-card liquid-glass-card">
          <h3 className="contact-card-title">Send a Message</h3>
          
          <form onSubmit={handleFormSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="contact-name" className="form-label">Your Name</label>
              <input
                id="contact-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Jane Doe"
                className="liquid-glass-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email" className="form-label">Email Address</label>
              <input
                id="contact-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="jane@company.com"
                className="liquid-glass-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message" className="form-label">Message / Project Details</label>
              <textarea
                id="contact-message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project, timeline, or engineering opportunity..."
                className="liquid-glass-input form-textarea"
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === 'sending'}
              className="liquid-glass-btn liquid-glass-btn-primary form-submit-btn"
            >
              {formStatus === 'sending' ? (
                <span>Transmitting Message...</span>
              ) : formStatus === 'sent' ? (
                <>
                  <Check size={18} />
                  <span>Message Sent Successfully</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
