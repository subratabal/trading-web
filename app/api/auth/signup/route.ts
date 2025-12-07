import { NextRequest, NextResponse } from 'next/server';
import { createUser } from '@/app/_lib/auth';
import { isDatabaseConnected } from '@/app/_lib/database';
import { z } from 'zod';

// Validation schema
const signupSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  firstName: z.string().min(1, 'First name is required').optional(),
  lastName: z.string().min(1, 'Last name is required').optional(),
  company: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    // Quick check if database is available
    if (!isDatabaseConnected()) {
      return NextResponse.json(
        { message: 'Service temporarily unavailable. Please try again later.' },
        { status: 503 }
      );
    }

    const body = await request.json();

    // Validate input
    const validationResult = signupSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          message: 'Validation error',
          errors: validationResult.error.issues.map((issue) => ({
            field: issue.path[0],
            message: issue.message,
          })),
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
      company,
    });

    return NextResponse.json(
      {
        message: 'User created successfully',
        user: {
          id: user.id,
          email: user.email,
          name: [user.firstName, user.lastName].filter(Boolean).join(' ') || undefined,
          firstName: user.firstName,
          lastName: user.lastName,
          company: user.company,
          role: user.role,
          planType: user.planType,
        },
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    const err = error as Error;
    console.error('Signup error:', err.message);

    const errorMessage = err.message;

    if (errorMessage === 'User already exists with this email') {
      return NextResponse.json(
        { message: 'User already exists with this email' },
        { status: 409 }
      );
    }

    // Handle database connection errors
    if (errorMessage.includes('Database') || errorMessage.includes('connect')) {
      return NextResponse.json(
        { message: 'Service temporarily unavailable. Please try again later.' },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
