'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import { slideLeftVariants, slideRightVariants } from './variants';

type SlideDirection = 'left' | 'right';

interface SlideInProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  direction?: SlideDirection;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export function SlideIn({
  children,
  direction = 'left',
  delay = 0,
  duration,
  className = '',
  once = true,
  ...props
}: SlideInProps) {
  const variants = direction === 'left' ? slideLeftVariants : slideRightVariants;

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
