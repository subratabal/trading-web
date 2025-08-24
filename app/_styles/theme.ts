'use client';

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00A3E0', // Electric blue
      light: '#38bdf8',
      dark: '#0284c7',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#2D5F8F', // Deep blue
      light: '#075985',
      dark: '#1A365D',
      contrastText: '#ffffff',
    },
    success: {
      main: '#4CAF50',
      light: '#81c784',
      dark: '#388e3c',
    },
    background: {
      default: '#0f172a',
      paper: '#1e293b',
    },
    text: {
      primary: '#f8fafc',
      secondary: '#cbd5e1',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      letterSpacing: '0.01em',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: 600,
          transition: 'all 0.2s ease-in-out',
        },
        contained: {
          background: 'linear-gradient(135deg, #00A3E0 0%, #0284c7 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #0284c7 0%, #075985 100%)',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(0, 163, 224, 0.3)',
          },
        },
        outlined: {
          borderColor: '#00A3E0',
          color: '#00A3E0',
          '&:hover': {
            borderColor: '#0284c7',
            backgroundColor: 'rgba(0, 163, 224, 0.1)',
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(145deg, #1e293b 0%, #334155 100%)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(0, 163, 224, 0.2)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'rgba(30, 41, 59, 0.8)',
            '& fieldset': {
              borderColor: 'rgba(203, 213, 225, 0.3)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(0, 163, 224, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#00A3E0',
            },
          },
        },
      },
    },
  },
});