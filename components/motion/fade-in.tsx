'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeUpVariants, fadeVariants, fadeDownVariants } from './variants';

type FadeDirection = 'up' | 'down' | 'none';

interface FadeInProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  direction?: FadeDirection;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const getVariants = (direction: FadeDirection) => {
  switch (direction) {
    case 'up':
      return fadeUpVariants;
    case 'down':
      return fadeDownVariants;
    default:
      return fadeVariants;
  }
};

export function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration,
  className = '',
  once = true,
  ...props
}: FadeInProps) {
  const variants = getVariants(direction);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      transition={{ delay, duration }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
