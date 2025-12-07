'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import { scaleVariants } from './variants';

interface ScaleInProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  hover?: boolean;
}

export function ScaleIn({
  children,
  delay = 0,
  duration,
  className = '',
  once = true,
  hover = false,
  ...props
}: ScaleInProps) {
  return (
    <motion.div
      variants={scaleVariants}
      initial="hidden"
      whileInView="visible"
      whileHover={hover ? 'hover' : undefined}
      whileTap={hover ? 'tap' : undefined}
      viewport={{ once, margin: '-50px' }}
      transition={{ delay, duration }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
