"use client";

import React from 'react';

interface DevErrorBoundaryProps {
  children: React.ReactNode;
}

interface DevErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class DevErrorBoundary extends React.Component<DevErrorBoundaryProps, DevErrorBoundaryState> {
  constructor(props: DevErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): DevErrorBoundaryState {
    // Check if this is the params enumeration error
    if (error.message?.includes('params are being enumerated') || 
        error.message?.includes('sync-dynamic-apis')) {
      // Suppress this specific error in development
      if (process.env.NODE_ENV === 'development') {
        console.warn('Suppressed Next.js 15 params enumeration warning:', error.message);
        return { hasError: false };
      }
    }
    
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Only log non-params enumeration errors
    if (!error.message?.includes('params are being enumerated') && 
        !error.message?.includes('sync-dynamic-apis')) {
      console.error('DevErrorBoundary caught an error:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 border border-red-500 rounded-lg bg-red-50 dark:bg-red-900/20">
          <h2 className="text-lg font-semibold text-red-800 dark:text-red-200">
            Something went wrong
          </h2>
          <p className="text-red-600 dark:text-red-300">
            {this.state.error?.message || 'An unexpected error occurred'}
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

// Only use in development
export const ConditionalDevErrorBoundary: React.FC<DevErrorBoundaryProps> = ({ children }) => {
  if (process.env.NODE_ENV === 'development') {
    return <DevErrorBoundary>{children}</DevErrorBoundary>;
  }
  
  return <>{children}</>;
};
