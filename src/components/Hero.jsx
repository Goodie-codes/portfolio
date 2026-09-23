import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { personalInfo } from '../data/portfolioData';
import { ArrowDown, Mail, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import MagneticButton from './MagneticButton';

export default function Hero() {
  const heroRef = useRef(null);

  // Smooth pointer-reactive specular glow (lightweight)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Headline lines for cinematic staggered mask reveal
  const headlineLines = [
    "Software Developer",
    "crafting high-performance",
    "web platforms & interfaces."
  ];

  return (
    <section
      id="top"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="hero-section clean-hero"
    >
      {/* Interactive Cursor Ambient Spotlight */}
      <motion.div
        className="hero-ambient-spotlight"
        style={{
          left: smoothX,
          top: smoothY,
        }}
      />

      <div className="section-container hero-container clean-hero-container">
        {/* Clean, Massive Kinetic Typography */}
        <h1 className="hero-title kinetic-title" aria-label={headlineLines.join(' ')}>
          {headlineLines.map((line, lineIdx) => (
            <span key={lineIdx} className="kinetic-line-mask">
              <motion.span
                className="kinetic-line-text shimmer-text"
                initial={{ y: '120%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  duration: 0.85,
                  delay: 0.12 + lineIdx * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Primary Actions with Magnetic Physics */}
        <motion.div
          className="hero-actions clean-hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <MagneticButton pullFactor={0.2}>
            <motion.a
              href="#work"
              className="btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <span>Explore Selected Work</span>
              <ArrowDown size={15} />
            </motion.a>
          </MagneticButton>

          <MagneticButton pullFactor={0.2}>
            <motion.a
              href="#contact"
              className="btn-secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <span>Get in touch</span>
            </motion.a>
          </MagneticButton>
        </motion.div>

        {/* Quiet Social Links */}
        <motion.div
          className="hero-socials clean-hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
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
          <a
            href={`mailto:${personalInfo.email}`}
            className="hero-social-link"
          >
            <Mail size={15} />
            <span>{personalInfo.email}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
