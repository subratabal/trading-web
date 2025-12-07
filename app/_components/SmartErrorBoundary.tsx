'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { RefreshCw, Bug, Home } from 'lucide-react';
import { Button } from '@/components/ui';

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
        <div className="flex justify-center items-center min-h-[400px] p-8">
          <div className="max-w-[600px] w-full bg-gray-800 border border-gray-700 rounded-xl shadow-xl">
            <div className="text-center p-8">
              <Bug className="w-16 h-16 text-red-500 mx-auto mb-4" />
              
              <h2 className="text-xl font-semibold text-red-400 mb-2">
                {this.state.errorType === 'network' ? 'Connection Problem' :
                 this.state.errorType === 'ui' ? 'Display Issue' :
                 'Something went wrong'}
              </h2>
              
              <p className="text-gray-400 mb-6">
                {this.state.errorType === 'network' 
                  ? "We're having trouble connecting to our servers. Please check your internet connection and try again."
                  : this.state.errorType === 'ui'
                  ? 'There was a problem displaying this content. This is usually temporary.'
                  : 'An unexpected error occurred. Our team has been notified.'}
              </p>

              <div className="flex gap-3 justify-center flex-wrap">
                <Button
                  variant="primary"
                  onClick={this.handleRetry}
                  className="inline-flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  Try Again
                </Button>
                
                {this.state.errorType === 'network' && (
                  <Button
                    variant="outline"
                    onClick={this.handleRefresh}
                    className="inline-flex items-center gap-2"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Refresh Page
                  </Button>
                )}
                
                <Button
                  variant="outline"
                  onClick={this.handleGoHome}
                  className="inline-flex items-center gap-2"
                >
                  <Home className="w-4 h-4" />
                  Go Home
                </Button>
              </div>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="mt-6 p-4 bg-gray-900 rounded-lg text-left">
                  <pre className="text-red-400 text-xs overflow-auto">
                    {this.state.error.message}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
