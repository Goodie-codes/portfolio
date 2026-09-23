import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

/**
 * MagneticButton
 * Apple-grade magnetic physics wrapper. Gently pulls the button towards the cursor
 * when hovered, then springs smoothly back on mouse leave.
 */
export default function MagneticButton({
  children,
  className = '',
  pullFactor = 0.28,
  springConfig = { damping: 20, stiffness: 300, mass: 0.5 },
  ...props
}) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * pullFactor;
    const deltaY = (e.clientY - centerY) * pullFactor;

    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: smoothX, y: smoothY, display: 'inline-flex' }}
      className={`magnetic-button-wrapper ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
