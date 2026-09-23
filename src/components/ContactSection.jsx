import React, { useState } from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Copy, Check, ArrowUpRight, Send } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import AppleTiltCard from './AppleTiltCard';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="section-container">
      <div className="section-header">
        <span className="section-eyebrow">Contact / Connect</span>
        <h2 className="section-title">Let’s Start a Conversation</h2>
        <p className="section-description">
          Whether you have an interesting engineering challenge, a role to discuss, or just want to connect, feel free to reach out.
        </p>
      </div>

      <div className="contact-layout">
        {/* Direct Reach Out Card */}
        <motion.div
          className="contact-card-wrap"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <AppleTiltCard className="contact-card" maxTilt={4}>
            <h3>Direct Reach</h3>
            <p>
              I aim to respond to all inquiries within 24 to 48 hours. Direct email is always the fastest channel.
            </p>

            <motion.button
              onClick={handleCopyEmail}
              className="contact-direct-email"
              aria-label="Copy email"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={16} />
              <span>{personalInfo.email}</span>
              {copied ? <Check size={14} style={{ color: 'var(--accent-dot)' }} /> : <Copy size={14} />}
            </motion.button>

            <div style={{ marginTop: '24px' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '12px' }}>
                Other Networks:
              </span>
              <div style={{ display: 'flex', gap: '16px' }}>
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hero-social-link"
                >
                  <Github size={15} />
                  <span>GitHub</span>
                  <ArrowUpRight size={13} />
                </a>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hero-social-link"
                >
                  <Linkedin size={15} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </AppleTiltCard>
        </motion.div>

        {/* Message Form Card */}
        <motion.div
          className="contact-card-wrap"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <AppleTiltCard className="contact-card" maxTilt={4}>
            <h3>Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jane Doe"
                  className="slate-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@example.com"
                  className="slate-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Details regarding your team, system challenge, or role..."
                  className="slate-input"
                  style={{ resize: 'vertical' }}
                />
              </div>

              <motion.button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', marginTop: '6px' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {formSent ? (
                  <span>Message Received ✓</span>
                ) : (
                  <>
                    <span>Send Note</span>
                    <Send size={14} />
                  </>
                )}
              </motion.button>
            </form>
          </AppleTiltCard>
        </motion.div>
      </div>
    </section>
  );
}
