// Environment configuration for AI Quant Labs
export const config = {
    // Base URL
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || process.env.BASE_URL || 'https://www.aiquantlabs.com',
    
    // Database configuration
    database: {
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT || '5432'),
        database: process.env.DB_NAME || 'ai_quant_labs',
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || '',
        ssl: process.env.DB_SSL?.toLowerCase() === 'true',
    },
    
    // Authentication configuration
    auth: {
        jwtSecret: process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production',
        jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
        sessionDuration: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
    },
    
    // Email configuration (for future use)
    email: {
        host: process.env.EMAIL_HOST || '',
        port: parseInt(process.env.EMAIL_PORT || '465'),
        secure: process.env.EMAIL_SECURE?.toLowerCase() === 'true',
        username: process.env.EMAIL_USERNAME || '',
        password: process.env.EMAIL_PASSWORD || '',
    },
    
    // AI/Trading configuration (for future use)
    trading: {
        apiKey: process.env.TRADING_API_KEY || '',
        environment: process.env.TRADING_ENV || 'sandbox', // sandbox | production
    },
    
    // SEO and analytics
    seo: {
        googleVerificationCode: process.env.GOOGLE_VERIFICATION_CODE || '',
    },
    
    // Feature flags
    features: {
        enableTrading: process.env.ENABLE_TRADING?.toLowerCase() === 'true',
        enableCodeBot: process.env.ENABLE_CODE_BOT?.toLowerCase() === 'true',
        enableLMS: process.env.ENABLE_LMS?.toLowerCase() === 'true',
    },
};