'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export function AnimatedCounter({
  value,
  duration = 2,
  className = '',
  prefix = '',
  suffix = '',
  decimals = 0,
}: AnimatedCounterProps) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  
  const springValue = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });
  
  const displayValue = useTransform(springValue, (current) =>
    current.toFixed(decimals)
  );
  
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
          springValue.set(value);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, isInView, springValue]);

  useEffect(() => {
    const unsubscribe = displayValue.on('change', (v) => {
      setDisplay(v);
    });
    return unsubscribe;
  }, [displayValue]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

// Animated percentage counter with progress bar
interface AnimatedProgressProps {
  value: number;
  className?: string;
  barClassName?: string;
  showLabel?: boolean;
}

export function AnimatedProgress({
  value,
  className = '',
  barClassName = '',
  showLabel = true,
}: AnimatedProgressProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className={`h-full bg-gradient-to-r from-primary-500 to-primary-400 ${barClassName}`}
        />
      </div>
      {showLabel && (
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
          className="absolute right-0 top-3 text-sm text-gray-400"
        >
          {value}%
        </motion.span>
      )}
    </div>
  );
}
