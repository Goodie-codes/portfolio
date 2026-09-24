import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

/**
 * LiquidGlassBackground
 * High-Contrast Pure Black & White Architectural Background.
 * Pure geometric monoliths, structural beams, and floating prisms.
 * 100% LIVE: seamlessly shifts, drifts, and parallaxes as user scrolls.
 */
export default function LiquidGlassBackground() {
  const { scrollYProgress } = useScroll();

  // Gentle, fluid spring physics for buttery smooth scroll inertia
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.0005,
  });

  // Parallax motion derived from scroll
  const monolith1Y = useTransform(smoothProgress, [0, 1], [0, -320]);
  const monolith1X = useTransform(smoothProgress, [0, 1], [0, 80]);
  const monolith1Rotate = useTransform(smoothProgress, [0, 1], [0, -5]);

  const monolith2Y = useTransform(smoothProgress, [0, 1], [0, -420]);
  const monolith2X = useTransform(smoothProgress, [0, 1], [0, -60]);
  const monolith2Rotate = useTransform(smoothProgress, [0, 1], [0, 6]);

  const beam1Y = useTransform(smoothProgress, [0, 1], [0, -550]);
  const beam1X = useTransform(smoothProgress, [0, 1], [0, 40]);
  const beam1Rotate = useTransform(smoothProgress, [0, 1], [-32, -24]);

  const beam2Y = useTransform(smoothProgress, [0, 1], [0, -480]);
  const beam2X = useTransform(smoothProgress, [0, 1], [0, -45]);
  const beam2Rotate = useTransform(smoothProgress, [0, 1], [26, 34]);

  const beam3Y = useTransform(smoothProgress, [0, 1], [0, -380]);
  const beam3Rotate = useTransform(smoothProgress, [0, 1], [-44, -38]);

  const prism1Y = useTransform(smoothProgress, [0, 1], [0, -650]);
  const prism1Rotate = useTransform(smoothProgress, [0, 1], [45, 135]);

  const prism2Y = useTransform(smoothProgress, [0, 1], [0, -850]);
  const prism2Rotate = useTransform(smoothProgress, [0, 1], [45, -45]);

  const prism3Y = useTransform(smoothProgress, [0, 1], [0, -1050]);
  const prism3Rotate = useTransform(smoothProgress, [0, 1], [45, 90]);

  return (
    <div className="liquid-glass-viewport" aria-hidden="true">
      {/* Deep Obsidian Canvas Foundation */}
      <div className="bw-canvas-foundation" />

      {/* Massive Angular White Geometric Monoliths (Live Scroll-Driven) */}
      <motion.div
        className="bw-monolith-primary"
        style={{
          y: monolith1Y,
          x: monolith1X,
          rotate: monolith1Rotate,
        }}
      />
      <motion.div
        className="bw-monolith-secondary"
        style={{
          y: monolith2Y,
          x: monolith2X,
          rotate: monolith2Rotate,
        }}
      />

      {/* High-Contrast Diagonal Architectural Structural Beams (Live Parallax) */}
      <motion.div
        className="bw-architectural-beam-1"
        style={{
          y: beam1Y,
          x: beam1X,
          rotate: beam1Rotate,
        }}
      />
      <motion.div
        className="bw-architectural-beam-2"
        style={{
          y: beam2Y,
          x: beam2X,
          rotate: beam2Rotate,
        }}
      />
      <motion.div
        className="bw-architectural-beam-3"
        style={{
          y: beam3Y,
          rotate: beam3Rotate,
        }}
      />

      {/* Geometric Floating Prisms / Angled Tiles (Multi-Layered Depth) */}
      <motion.div
        className="bw-floating-prism prism-1"
        style={{
          y: prism1Y,
          rotate: prism1Rotate,
        }}
      />
      <motion.div
        className="bw-floating-prism prism-2"
        style={{
          y: prism2Y,
          rotate: prism2Rotate,
        }}
      />
      <motion.div
        className="bw-floating-prism prism-3"
        style={{
          y: prism3Y,
          rotate: prism3Rotate,
        }}
      />

      {/* Razor Horizon Specular Line */}
      <div className="liquid-glass-specular-sheen" />
    </div>
  );
}

