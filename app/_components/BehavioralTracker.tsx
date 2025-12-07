'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface BehavioralTrackerProps {
  children: React.ReactNode;
  componentType: string;
  userId?: string;
}

export const BehavioralTracker = ({ children, componentType, userId }: BehavioralTrackerProps) => {
  const [clicks, setClicks] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  const trackInteraction = async (type: string) => {
    // Visual feedback regardless of API availability
    setClicks(prev => prev + 1);
    setShowFeedback(true);
    setTimeout(() => setShowFeedback(false), 1000);
    
    // Log to console for testing
    console.log(`🎯 Behavioral Analytics: ${componentType} - ${type} (User: ${userId || 'Anonymous'})`);
    
    if (!userId) return;
    
    try {
      await fetch('http://localhost:4000/api/analytics/interaction', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          componentType,
          interactionType: type,
          timestamp: new Date().toISOString(),
          page: window.location.pathname
        })
      });
    } catch (error) {
      console.log('📡 API not available - running in demo mode');
    }
  };

  return (
    <motion.div
      className="behavioral-tracker relative"
      onPointerDown={() => trackInteraction('click')}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      style={{ 
        border: showFeedback ? '2px solid rgba(16, 185, 129, 0.6)' : 'none',
        borderRadius: '8px',
        transition: 'border 0.3s ease'
      }}
    >
      {children}
      {showFeedback && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs font-bold z-50"
        >
          {clicks}
        </motion.div>
      )}
    </motion.div>
  );
};

export default BehavioralTracker;
