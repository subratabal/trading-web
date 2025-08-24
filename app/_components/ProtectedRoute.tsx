'use client';

import { useAuth } from '@/app/_contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { CircularProgress, Box } from '@mui/material';

interface ProtectedRouteProps {
    children: React.ReactNode;
    requiredRole?: string;
    fallbackPath?: string;
}

export default function ProtectedRoute({ 
    children, 
    requiredRole,
    fallbackPath = '/auth/login' 
}: ProtectedRouteProps) {
    const { state } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!state.isLoading) {
            if (!state.isAuthenticated) {
                router.push(fallbackPath);
                return;
            }

            if (requiredRole && state.user?.role !== requiredRole) {
                router.push('/dashboard'); // Redirect to dashboard if insufficient permissions
                return;
            }
        }
    }, [state.isLoading, state.isAuthenticated, state.user, requiredRole, router, fallbackPath]);

    if (state.isLoading) {
        return (
            <Box 
                display="flex" 
                justifyContent="center" 
                alignItems="center" 
                minHeight="100vh"
            >
                <CircularProgress size={40} />
            </Box>
        );
    }

    if (!state.isAuthenticated) {
        return null; // Will redirect via useEffect
    }

    if (requiredRole && state.user?.role !== requiredRole) {
        return null; // Will redirect via useEffect
    }

    return <>{children}</>;
}