'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Box, Button, Typography, Card, CardContent } from '@mui/material';
import { Refresh, BugReport, Home } from '@mui/icons-material';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorType: 'network' | 'ui' | 'unknown';
}

export class SmartErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorType: 'unknown'
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    // Analyze error to determine type
    const errorMessage = error.message.toLowerCase();
    let errorType: 'network' | 'ui' | 'unknown' = 'unknown';
    
    if (errorMessage.includes('fetch') || 
        errorMessage.includes('network') || 
        errorMessage.includes('connection')) {
      errorType = 'network';
    } else if (errorMessage.includes('render') || 
               errorMessage.includes('component') || 
               errorMessage.includes('hook')) {
      errorType = 'ui';
    }

    return {
      hasError: true,
      error,
      errorType
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log to analytics if available
    if (typeof window !== 'undefined') {
      console.error('SmartErrorBoundary caught an error:', error, errorInfo);
      
      // Send to behavioral analytics if available
      try {
        fetch('http://localhost:4000/api/analytics/error', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            error: error.message,
            stack: error.stack,
            componentStack: errorInfo.componentStack,
            errorType: this.state.errorType,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            url: window.location.href
          })
        }).catch(() => {
          // Ignore analytics errors
        });
      } catch {
        // Ignore if analytics not available
      }
    }
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorType: 'unknown'
    });
  };

  handleRefresh = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <Box 
          display="flex" 
          justifyContent="center" 
          alignItems="center" 
          minHeight="400px"
          p={4}
        >
          <Card sx={{ maxWidth: 600, width: '100%' }}>
            <CardContent sx={{ textAlign: 'center', p: 4 }}>
              <BugReport sx={{ fontSize: 64, color: 'error.main', mb: 2 }} />
              
              <Typography variant="h5" gutterBottom color="error">
                {this.state.errorType === 'network' ? 'Connection Problem' :
                 this.state.errorType === 'ui' ? 'Display Issue' :
                 'Something went wrong'}
              </Typography>
              
              <Typography variant="body1" color="text.secondary" paragraph>
                {this.state.errorType === 'network' 
                  ? 'We\'re having trouble connecting to our servers. Please check your internet connection and try again.'
                  : this.state.errorType === 'ui'
                  ? 'There was a problem displaying this content. This is usually temporary.'
                  : 'An unexpected error occurred. Our team has been notified.'}
              </Typography>

              <Box display="flex" gap={2} justifyContent="center" flexWrap="wrap">
                <Button
                  variant="contained"
                  onClick={this.handleRetry}
                  startIcon={<Refresh />}
                >
                  Try Again
                </Button>
                
                {this.state.errorType === 'network' && (
                  <Button
                    variant="outlined"
                    onClick={this.handleRefresh}
                    startIcon={<Refresh />}
                  >
                    Refresh Page
                  </Button>
                )}
                
                <Button
                  variant="outlined"
                  onClick={this.handleGoHome}
                  startIcon={<Home />}
                >
                  Go Home
                </Button>
              </Box>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <Box 
                  mt={3} 
                  p={2} 
                  bgcolor="grey.900" 
                  borderRadius={1}
                  sx={{ textAlign: 'left' }}
                >
                  <Typography variant="caption" color="error" component="pre">
                    {this.state.error.message}
                  </Typography>
                </Box>
              )}
            </CardContent>
          </Card>
        </Box>
      );
    }

    return this.props.children;
  }
}