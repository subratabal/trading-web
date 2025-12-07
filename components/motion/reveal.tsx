'use client';

import { motion } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  once?: boolean;
}

const getInitialPosition = (direction: 'up' | 'down' | 'left' | 'right') => {
  switch (direction) {
    case 'up':
      return { y: 75, x: 0 };
    case 'down':
      return { y: -75, x: 0 };
    case 'left':
      return { x: 75, y: 0 };
    case 'right':
      return { x: -75, y: 0 };
  }
};

export function Reveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.5,
  once = true,
}: RevealProps) {
  const initial = getInitialPosition(direction);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0, ...initial }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once, margin: '-50px' }}
        transition={{
          duration,
          delay,
          ease: [0.25, 0.4, 0.25, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Slide reveal with mask
interface SlideRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function SlideReveal({
  children,
  className = '',
  delay = 0,
}: SlideRevealProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '100%' }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay,
          ease: [0.25, 0.4, 0.25, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Clip path reveal
interface ClipRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ClipReveal({
  children,
  className = '',
  delay = 0,
}: ClipRevealProps) {
  return (
    <motion.div
      initial={{ clipPath: 'inset(100% 0 0 0)' }}
      whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
