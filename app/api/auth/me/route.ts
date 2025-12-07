import { NextRequest, NextResponse } from 'next/server';
import { validateSession } from '@/app/_lib/auth';
import { isDatabaseConnected } from '@/app/_lib/database';

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('auth-token')?.value;

    if (!token) {
      return NextResponse.json(
        { message: 'No authentication token' },
        { status: 401 }
      );
    }

    // Quick check if database is available
    if (!isDatabaseConnected()) {
      return NextResponse.json(
        { message: 'Service temporarily unavailable' },
        { status: 503 }
      );
    }

    const user = await validateSession(token);

    if (!user) {
      return NextResponse.json(
        { message: 'Invalid or expired token' },
        { status: 401 }
      );
    }

    return NextResponse.json({
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
    });
  } catch (error: unknown) {
    const err = error as Error;
    console.error('Me endpoint error:', err.message);

    // Handle database connection errors
    if (err.message.includes('Database') || err.message.includes('connect')) {
      return NextResponse.json(
        { message: 'Service temporarily unavailable' },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
