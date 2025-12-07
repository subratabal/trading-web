import { Pool, QueryResult } from 'pg';
import { config } from '@/app/_config';

// Track database connection status
let isDatabaseAvailable = true;
let lastConnectionError: Date | null = null;
const CONNECTION_RETRY_INTERVAL = 30000; // 30 seconds

// Database connection pool
const pool = new Pool({
    host: config.database.host,
    port: config.database.port,
    database: config.database.database,
    user: config.database.user,
    password: config.database.password,
    ssl: config.database.ssl ? { rejectUnauthorized: false } : false,
    max: 20, // Maximum number of clients in the pool
    idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
    connectionTimeoutMillis: 3000, // Return an error after 3 seconds if connection could not be established
});

// Handle pool errors gracefully
pool.on('error', (err) => {
    console.error('Unexpected database pool error:', err.message);
    isDatabaseAvailable = false;
    lastConnectionError = new Date();
});

// Check if we should retry database connection
const shouldRetryConnection = (): boolean => {
    if (isDatabaseAvailable) return true;
    if (!lastConnectionError) return true;
    return Date.now() - lastConnectionError.getTime() > CONNECTION_RETRY_INTERVAL;
};

// Check database availability
export const isDatabaseConnected = (): boolean => isDatabaseAvailable;

// Database initialization SQL
export const initializeDatabase = async () => {
    const client = await pool.connect();
    
    try {
        // Create users table
        await client.query(`
            CREATE TABLE IF NOT EXISTS users (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                email VARCHAR(255) UNIQUE NOT NULL,
                password_hash VARCHAR(255) NOT NULL,
                first_name VARCHAR(100),
                last_name VARCHAR(100),
                company VARCHAR(255),
                role VARCHAR(50) DEFAULT 'user',
                plan_type VARCHAR(50) DEFAULT 'free',
                email_verified BOOLEAN DEFAULT false,
                created_at TIMESTAMP DEFAULT NOW(),
                updated_at TIMESTAMP DEFAULT NOW()
            );
        `);

        // Create user sessions table
        await client.query(`
            CREATE TABLE IF NOT EXISTS user_sessions (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                user_id UUID REFERENCES users(id) ON DELETE CASCADE,
                token_hash VARCHAR(255) NOT NULL,
                expires_at TIMESTAMP NOT NULL,
                ip_address INET,
                user_agent TEXT,
                created_at TIMESTAMP DEFAULT NOW()
            );
        `);

        // Create trading projects table
        await client.query(`
            CREATE TABLE IF NOT EXISTS trading_projects (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                user_id UUID REFERENCES users(id) ON DELETE CASCADE,
                name VARCHAR(255) NOT NULL,
                description TEXT,
                strategy_type VARCHAR(100),
                config JSONB DEFAULT '{}',
                performance_metrics JSONB DEFAULT '{}',
                status VARCHAR(50) DEFAULT 'draft',
                created_at TIMESTAMP DEFAULT NOW(),
                updated_at TIMESTAMP DEFAULT NOW()
            );
        `);

        // Create AI agent tasks table
        await client.query(`
            CREATE TABLE IF NOT EXISTS agent_tasks (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                user_id UUID REFERENCES users(id) ON DELETE CASCADE,
                project_id UUID REFERENCES trading_projects(id) ON DELETE CASCADE,
                task_type VARCHAR(100) NOT NULL,
                task_data JSONB DEFAULT '{}',
                status VARCHAR(50) DEFAULT 'pending',
                result JSONB,
                error_message TEXT,
                created_at TIMESTAMP DEFAULT NOW(),
                completed_at TIMESTAMP
            );
        `);

        // Create indexes for better performance
        await client.query(`
            CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
            CREATE INDEX IF NOT EXISTS idx_user_sessions_user_id ON user_sessions(user_id);
            CREATE INDEX IF NOT EXISTS idx_user_sessions_expires_at ON user_sessions(expires_at);
            CREATE INDEX IF NOT EXISTS idx_trading_projects_user_id ON trading_projects(user_id);
            CREATE INDEX IF NOT EXISTS idx_agent_tasks_user_id ON agent_tasks(user_id);
            CREATE INDEX IF NOT EXISTS idx_agent_tasks_project_id ON agent_tasks(project_id);
        `);

        console.log('Database initialized successfully');
    } catch (error) {
        console.error('Error initializing database:', error);
        throw error;
    } finally {
        client.release();
    }
};

// Database query utility with connection handling
export const query = async (text: string, params?: any[]): Promise<QueryResult> => {
    if (!shouldRetryConnection()) {
        throw new Error('Database temporarily unavailable');
    }
    
    const start = Date.now();
    try {
        const res = await pool.query(text, params);
        const duration = Date.now() - start;
        isDatabaseAvailable = true;
        if (process.env.NODE_ENV !== 'production') {
            console.log('Executed query', { text: text.slice(0, 50), duration, rows: res.rowCount });
        }
        return res;
    } catch (error: unknown) {
        const err = error as Error;
        isDatabaseAvailable = false;
        lastConnectionError = new Date();
        console.error('Database query error:', err.message);
        throw error;
    }
};

// Get database client from pool
export const getClient = async () => {
    return await pool.connect();
};

// Close database pool (for graceful shutdown)
export const closePool = async () => {
    await pool.end();
};

export default pool;