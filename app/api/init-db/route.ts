import { initializeDatabase } from '@/app/_lib/database';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        await initializeDatabase();
        
        return NextResponse.json({
            message: 'Database initialized successfully',
            timestamp: new Date().toISOString()
        });
        
    } catch (error: any) {
        console.error('Database initialization error:', error);
        
        return NextResponse.json(
            { 
                message: 'Database initialization failed',
                error: error.message 
            },
            { status: 500 }
        );
    }
}

export async function GET(request: NextRequest) {
    return NextResponse.json({
        message: 'Database initialization endpoint',
        usage: 'Send POST request to initialize database schema'
    });
}