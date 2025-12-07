'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface EmotionalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  emotion?: 'calming' | 'energizing' | 'focused' | 'default';
  children: React.ReactNode;
}

export const EmotionalButton = ({ 
  emotion = 'default',
  children,
  className,
  ...props 
}: EmotionalButtonProps) => {
  const emotionalStyles = {
    calming: 'bg-gradient-to-br from-green-500 to-green-400 hover:from-green-600 hover:to-green-500 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(76,175,80,0.3)]',
    energizing: 'bg-gradient-to-br from-red-400 to-orange-400 hover:from-red-500 hover:to-orange-500 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(255,107,107,0.3)]',
    focused: 'bg-gradient-to-br from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,163,224,0.3)]',
    default: 'bg-gray-700 hover:bg-gray-600'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <button
        className={cn(
          'px-4 py-2 rounded-lg font-medium text-white transition-all duration-300 ease-in-out',
          emotionalStyles[emotion],
          className
        )}
        {...props}
      >
        {children}
      </button>
    </motion.div>
  );
};
