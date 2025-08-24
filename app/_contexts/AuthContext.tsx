'use client';

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';

export interface User {
    id: string;
    email: string;
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
    state: AuthState;
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

    // Check authentication status on mount
    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            dispatch({ type: 'SET_LOADING', payload: true });
            const response = await axios.get('/api/auth/me');
            dispatch({ type: 'SET_USER', payload: response.data.user });
        } catch (error) {
            dispatch({ type: 'SET_USER', payload: null });
        }
    };

    const login = async (email: string, password: string) => {
        try {
            const response = await axios.post('/api/auth/login', { email, password });
            dispatch({ type: 'SET_USER', payload: response.data.user });
            return { success: true };
        } catch (error: any) {
            const errorMessage = error.response?.data?.message || 'Login failed';
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
        } catch (error: any) {
            const errorMessage = error.response?.data?.message || 'Signup failed';
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
        state,
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