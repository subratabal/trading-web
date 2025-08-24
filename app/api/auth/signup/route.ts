import { NextRequest, NextResponse } from 'next/server';
import { createUser } from '@/app/_lib/auth';
import { z } from 'zod';

// Validation schema
const signupSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    firstName: z.string().min(1, 'First name is required').optional(),
    lastName: z.string().min(1, 'Last name is required').optional(),
    company: z.string().optional(),
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        
        // Validate input
        const validationResult = signupSchema.safeParse(body);
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
        
        const { email, password, firstName, lastName, company } = validationResult.data;
        
        // Create user
        const user = await createUser({
            email,
            password,
            firstName,
            lastName,
            company
        });
        
        return NextResponse.json({
            message: 'User created successfully',
            user: {
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                company: user.company,
                role: user.role,
                planType: user.planType,
            }
        }, { status: 201 });
        
    } catch (error: any) {
        console.error('Signup error:', error);
        
        if (error.message === 'User already exists with this email') {
            return NextResponse.json(
                { message: 'User already exists with this email' },
                { status: 409 }
            );
        }
        
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}