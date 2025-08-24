import { NextRequest, NextResponse } from 'next/server';
import { validateSession } from '@/app/_lib/auth';

export async function GET(request: NextRequest) {
    try {
        const token = request.cookies.get('auth-token')?.value;
        
        if (!token) {
            return NextResponse.json(
                { message: 'No authentication token' },
                { status: 401 }
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
                firstName: user.firstName,
                lastName: user.lastName,
                company: user.company,
                role: user.role,
                planType: user.planType,
            }
        });
        
    } catch (error: any) {
        console.error('Me endpoint error:', error);
        
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}