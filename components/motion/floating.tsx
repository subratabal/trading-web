'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { floatingVariants } from './variants';

interface FloatingProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  amplitude?: number;
}

export function Floating({
  children,
  className = '',
  duration = 4,
  amplitude = 10,
}: FloatingProps) {
  return (
    <motion.div
      animate={{
        y: [-amplitude, amplitude, -amplitude],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FloatingSlow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <Floating duration={6} amplitude={15} className={className}>{children}</Floating>;
}

export function FloatingFast({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <Floating duration={2} amplitude={5} className={className}>{children}</Floating>;
}
