'use client';

import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
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
    <Box
      className={`
        adaptive-interface
        adaptive-${adaptations.colorTemperature}
        adaptive-${adaptations.complexity}
        adaptive-${adaptations.spacing}
        adaptive-${adaptations.contrast}
      `}
      sx={{
        transition: 'all var(--animation-duration, 0.3s) ease-in-out',
        ...adaptiveStyles,
        // Color temperature adjustments
        ...(adaptations.colorTemperature === 'warm' && {
          filter: 'sepia(0.1) saturate(1.1) hue-rotate(10deg)'
        }),
        ...(adaptations.colorTemperature === 'cool' && {
          filter: 'sepia(0.05) saturate(1.05) hue-rotate(-10deg)'
        }),
        // Complexity adjustments
        ...(adaptations.complexity === 'minimal' && {
          '& .complexity-advanced': { display: 'none' },
          '& .complexity-optional': { display: 'none' }
        }),
        ...(adaptations.complexity === 'simplified' && {
          '& .complexity-advanced': { display: 'none' }
        })
      }}
    >
      {/* Connection status indicator (only in development) */}
      {process.env.NODE_ENV === 'development' && (
        <Box
          sx={{
            position: 'fixed',
            top: 10,
            right: 10,
            width: 12,
            height: 12,
            borderRadius: '50%',
            backgroundColor: isConnected ? 'success.main' : 'warning.main',
            zIndex: 9999,
            opacity: 0.7
          }}
          title={isConnected ? 'Behavioral analytics connected' : 'Behavioral analytics offline'}
        />
      )}
      
      {children}
    </Box>
  );
}