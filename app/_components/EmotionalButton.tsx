'use client';

import { Button, ButtonProps } from '@mui/material';
import { motion } from 'framer-motion';

interface EmotionalButtonProps extends ButtonProps {
  emotion?: 'calming' | 'energizing' | 'focused' | 'default';
}

export const EmotionalButton = ({ 
  emotion = 'default',
  children,
  sx,
  ...props 
}: EmotionalButtonProps) => {
  const emotionalStyles = {
    calming: {
      background: 'linear-gradient(135deg, #4CAF50 0%, #81C784 100%)',
      '&:hover': {
        background: 'linear-gradient(135deg, #388E3C 0%, #66BB6A 100%)',
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 25px rgba(76, 175, 80, 0.3)',
      }
    },
    energizing: {
      background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
      '&:hover': {
        background: 'linear-gradient(135deg, #F44336 0%, #FF7043 100%)',
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 25px rgba(255, 107, 107, 0.3)',
      }
    },
    focused: {
      background: 'linear-gradient(135deg, #00A3E0 0%, #0284C7 100%)',
      '&:hover': {
        background: 'linear-gradient(135deg, #0284C7 0%, #075985 100%)',
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 25px rgba(0, 163, 224, 0.3)',
      }
    },
    default: {} // Use existing theme styles
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <Button
        sx={{
          ...emotionalStyles[emotion],
          transition: 'all 0.3s ease-in-out',
          ...sx
        }}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
};