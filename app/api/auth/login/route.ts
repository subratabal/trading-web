import { NextRequest, NextResponse } from 'next/server';
import { authenticateUser } from '@/app/_lib/auth';
import { z } from 'zod';

// Validation schema
const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(1, 'Password is required'),
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        
        // Validate input
        const validationResult = loginSchema.safeParse(body);
        if (!validationResult.success) {
            return NextResponse.json(
                { 
                    message: 'Validation error',
                    errors: validationResult.error.issues.map(issue => ({
                        field: issue.path[0],
                        message: issue.message
                    }))
                },
                { status: 400 }
            );
        }
        
        const { email, password } = validationResult.data;
        
        // Get client IP and user agent for session tracking
        const ip = request.headers.get('x-forwarded-for') || 
                  request.headers.get('x-real-ip') || 
                  '127.0.0.1';
        const userAgent = request.headers.get('user-agent') || '';
        
        // Authenticate user
        const result = await authenticateUser({ email, password });
        
        if (!result) {
            return NextResponse.json(
                { message: 'Invalid email or password' },
                { status: 401 }
            );
        }
        
        const { user, token } = result;
        
        // Set secure cookie
        const response = NextResponse.json({
            message: 'Login successful',
            user: {
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                company: user.company,
                role: user.role,
                planType: user.planType,
            }
        });
        
        // Set HTTP-only cookie for security
        response.cookies.set('auth-token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60, // 7 days
            path: '/',
        });
        
        return response;
        
    } catch (error: any) {
        console.error('Login error:', error);
        
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}