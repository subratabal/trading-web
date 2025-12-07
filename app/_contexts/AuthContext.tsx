'use client';

import React, { createContext, useContext, useReducer, useEffect, useCallback } from 'react';
import axios from 'axios';

export interface User {
  id: string;
  email: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  role: string;
  planType: string;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

type AuthAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'LOGOUT' };

const initialState: AuthState = {
  user: null,
  isLoading: true,
  isAuthenticated: false,
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload,
        isLoading: false,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
};

interface AuthContextType {
  // Expose state properties directly for convenience
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  // Also expose full state for backward compatibility
  state: AuthState;
  // Methods
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signup: (userData: {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    company?: string;
  }) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const checkAuth = useCallback(async () => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const response = await axios.get('/api/auth/me');
      const userData = response.data.user;
      // Combine firstName and lastName into name if not provided
      if (userData && !userData.name && (userData.firstName || userData.lastName)) {
        userData.name = [userData.firstName, userData.lastName].filter(Boolean).join(' ');
      }
      dispatch({ type: 'SET_USER', payload: userData });
    } catch {
      dispatch({ type: 'SET_USER', payload: null });
    }
  }, []);

  // Check authentication status on mount
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      const userData = response.data.user;
      if (userData && !userData.name && (userData.firstName || userData.lastName)) {
        userData.name = [userData.firstName, userData.lastName].filter(Boolean).join(' ');
      }
      dispatch({ type: 'SET_USER', payload: userData });
      return { success: true };
    } catch (error: unknown) {
      const errorMessage = (error as { response?: { data?: { message?: string } } })?.response?.data?.message || 'Login failed';
      return { success: false, error: errorMessage };
    }
  };

  const signup = async (userData: {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    company?: string;
  }) => {
    try {
      await axios.post('/api/auth/signup', userData);
      // Auto-login after successful signup
      const loginResult = await login(userData.email, userData.password);
      return loginResult;
    } catch (error: unknown) {
      const errorMessage = (error as { response?: { data?: { message?: string } } })?.response?.data?.message || 'Signup failed';
      return { success: false, error: errorMessage };
    }
  };

  const logout = async () => {
    try {
      await axios.post('/api/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      dispatch({ type: 'LOGOUT' });
    }
  };

  const value: AuthContextType = {
    // Direct access to state properties
    user: state.user,
    isLoading: state.isLoading,
    isAuthenticated: state.isAuthenticated,
    // Full state for backward compatibility
    state,
    // Methods
    login,
    signup,
    logout,
    checkAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}