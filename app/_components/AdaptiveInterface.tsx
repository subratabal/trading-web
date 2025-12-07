'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AdaptiveInterfaceProps {
  children: React.ReactNode;
  userId: string;
}

interface UIAdaptations {
  colorTemperature: 'warm' | 'cool' | 'neutral';
  complexity: 'minimal' | 'simplified' | 'full';
  animationSpeed: 'slow' | 'normal' | 'fast';
  spacing: 'compact' | 'normal' | 'spacious';
  contrast: 'low' | 'normal' | 'high';
}

export function AdaptiveInterface({ children, userId }: AdaptiveInterfaceProps) {
  const [adaptations, setAdaptations] = useState<UIAdaptations>({
    colorTemperature: 'neutral',
    complexity: 'full',
    animationSpeed: 'normal',
    spacing: 'normal',
    contrast: 'normal'
  });

  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    let socket: any = null;
    
    // Initialize socket connection when dependencies are available
    const initializeSocket = async () => {
      try {
        // Dynamic import to handle case where socket.io-client might not be installed yet
        const { io } = await import('socket.io-client');
        
        socket = io('http://localhost:4000', {
          transports: ['websocket', 'polling']
        });
        
        socket.on('connect', () => {
          console.log('Connected to behavioral analytics server');
          setIsConnected(true);
        });

        socket.on('disconnect', () => {
          console.log('Disconnected from behavioral analytics server');
          setIsConnected(false);
        });
        
        socket.on('ui-adaptation', (data: any) => {
          if (data.userId === userId) {
            setAdaptations(data.adaptations);
            console.log('UI adaptations received:', data.adaptations);
          }
        });

        // Request initial adaptations
        socket.emit('request-adaptations', { userId });

      } catch (error) {
        console.log('Socket.IO not available yet, using default adaptations');
      }
    };

    if (userId) {
      initializeSocket();
    }

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [userId]);

  // Build dynamic class names based on adaptations
  const getContainerClasses = () => {
    const classes = ['adaptive-interface', 'transition-all', 'ease-in-out'];
    
    // Animation duration classes
    if (adaptations.animationSpeed === 'slow') classes.push('duration-600');
    else if (adaptations.animationSpeed === 'fast') classes.push('duration-100');
    else classes.push('duration-300');
    
    // Color temperature filter classes
    if (adaptations.colorTemperature === 'warm') classes.push('sepia-[0.1] saturate-110 hue-rotate-[10deg]');
    else if (adaptations.colorTemperature === 'cool') classes.push('sepia-[0.05] saturate-105 -hue-rotate-[10deg]');
    
    return classes.join(' ');
  };

  // Apply adaptations as CSS custom properties
  const adaptiveStyles = {
    '--animation-duration': 
      adaptations.animationSpeed === 'slow' ? '0.6s' : 
      adaptations.animationSpeed === 'fast' ? '0.1s' : '0.3s',
    '--spacing-multiplier': 
      adaptations.spacing === 'compact' ? '0.7' : 
      adaptations.spacing === 'spacious' ? '1.3' : '1',
    '--contrast-multiplier': 
      adaptations.contrast === 'low' ? '0.8' : 
      adaptations.contrast === 'high' ? '1.2' : '1'
  } as React.CSSProperties;

  return (
    <div
      className={`${getContainerClasses()} adaptive-${adaptations.colorTemperature} adaptive-${adaptations.complexity} adaptive-${adaptations.spacing} adaptive-${adaptations.contrast}`}
      style={adaptiveStyles}
    >
      {/* Connection status indicator (only in development) */}
      {process.env.NODE_ENV === 'development' && (
        <div
          className={`fixed top-2.5 right-2.5 w-3 h-3 rounded-full z-[9999] opacity-70 ${
            isConnected ? 'bg-green-500' : 'bg-yellow-500'
          }`}
          title={isConnected ? 'Behavioral analytics connected' : 'Behavioral analytics offline'}
        />
      )}
      
      {/* Hide complexity classes based on adaptation level */}
      <style jsx global>{`
        .adaptive-minimal .complexity-advanced,
        .adaptive-minimal .complexity-optional {
          display: none;
        }
        .adaptive-simplified .complexity-advanced {
          display: none;
        }
      `}</style>
      
      {children}
    </div>
  );
}
