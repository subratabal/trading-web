'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

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
      className="behavioral-tracker"
      onPointerDown={() => trackInteraction('click')}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      style={{ 
        position: 'relative',
        border: showFeedback ? '2px solid rgba(0, 163, 224, 0.6)' : 'none',
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
          style={{
            position: 'absolute',
            top: -10,
            right: -10,
            background: 'rgba(0, 163, 224, 0.9)',
            color: 'white',
            borderRadius: '50%',
            width: 24,
            height: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            fontWeight: 'bold',
            zIndex: 1000
          }}
        >
          {clicks}
        </motion.div>
      )}
    </motion.div>
  );
};

  // Track session start time
  const sessionStart = Date.now();

  // Track component mount
  useEffect(() => {
    trackInteraction('mount');
  }, []);

  // Track component unmount
  useEffect(() => {
    return () => {
      trackInteraction('unmount');
    };
  }, []);

  return (
    <motion.div
      onPointerDown={() => trackInteraction('click')}
      onPointerEnter={() => trackInteraction('hover')}
      onFocus={() => trackInteraction('focus')}
      whileHover={{ scale: 1.005 }}
      whileTap={{ scale: 0.995 }}
      transition={{ duration: 0.1 }}
    >
      {children}
    </motion.div>
  );
};