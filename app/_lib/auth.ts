import bcrypt from 'bcryptjs';
import { SignOptions } from "jsonwebtoken";
import jwt from 'jsonwebtoken';
import { config } from '@/app/_config';
import { query } from './database';

export interface User {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    company?: string;
    role: string;
    planType: string;
    emailVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateUserData {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    company?: string;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

// Hash password
export const hashPassword = async (password: string): Promise<string> => {
    const saltRounds = 12;
    return await bcrypt.hash(password, saltRounds);
};

// Verify password
export const verifyPassword = async (password: string, hash: string): Promise<boolean> => {
    return await bcrypt.compare(password, hash);
};

// Generate JWT token
export const generateToken = (userId: string): string => {
    const payload = { userId, type: "access" };
    const secret = config.auth.jwtSecret as string;
    const options: SignOptions = { expiresIn: "7d" };
    return jwt.sign(payload, secret, options);
};

// Verify JWT token
export const verifyToken = (token: string): { userId: string; type: string } | null => {
    try {
        const decoded = jwt.verify(token, config.auth.jwtSecret as string) as any;
        return { userId: decoded.userId, type: decoded.type };
    } catch (error) {
        return null;
    }
};

// Create new user
export const createUser = async (userData: CreateUserData): Promise<User> => {
    const { email, password, firstName, lastName, company } = userData;
    
    // Check if user already exists
    const existingUser = await query(
        'SELECT id FROM users WHERE email = $1',
        [email.toLowerCase()]
    );
    
    if (existingUser.rows.length > 0) {
        throw new Error('User already exists with this email');
    }
    
    // Hash password
    const passwordHash = await hashPassword(password);
    
    // Insert new user
    const result = await query(
        `INSERT INTO users (email, password_hash, first_name, last_name, company)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING id, email, first_name, last_name, company, role, plan_type, email_verified, created_at, updated_at`,
        [email.toLowerCase(), passwordHash, firstName, lastName, company]
    );
    
    const user = result.rows[0];
    return {
        id: user.id,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name,
        company: user.company,
        role: user.role,
        planType: user.plan_type,
        emailVerified: user.email_verified,
        createdAt: user.created_at,
        updatedAt: user.updated_at,
    };
};

// Authenticate user
export const authenticateUser = async (credentials: LoginCredentials): Promise<{ user: User; token: string } | null> => {
    const { email, password } = credentials;
    
    // Get user from database
    const result = await query(
        `SELECT id, email, password_hash, first_name, last_name, company, role, plan_type, email_verified, created_at, updated_at
         FROM users WHERE email = $1`,
        [email.toLowerCase()]
    );
    
    if (result.rows.length === 0) {
        return null;
    }
    
    const userData = result.rows[0];
    
    // Verify password
    const isValidPassword = await verifyPassword(password, userData.password_hash);
    if (!isValidPassword) {
        return null;
    }
    
    // Generate token
    const token = generateToken(userData.id);
    
    // Create user session
    await createSession(userData.id, token);
    
    const user: User = {
        id: userData.id,
        email: userData.email,
        firstName: userData.first_name,
        lastName: userData.last_name,
        company: userData.company,
        role: userData.role,
        planType: userData.plan_type,
        emailVerified: userData.email_verified,
        createdAt: userData.created_at,
        updatedAt: userData.updated_at,
    };
    
    return { user, token };
};

// Create session
export const createSession = async (userId: string, token: string, ipAddress?: string, userAgent?: string): Promise<void> => {
    const tokenHash = await hashPassword(token);
    const expiresAt = new Date(Date.now() + config.auth.sessionDuration);
    
    await query(
        `INSERT INTO user_sessions (user_id, token_hash, expires_at, ip_address, user_agent)
         VALUES ($1, $2, $3, $4, $5)`,
        [userId, tokenHash, expiresAt, ipAddress, userAgent]
    );
    
    // Clean up expired sessions
    await query(
        'DELETE FROM user_sessions WHERE expires_at < NOW()'
    );
};

// Get user by ID
export const getUserById = async (userId: string): Promise<User | null> => {
    const result = await query(
        `SELECT id, email, first_name, last_name, company, role, plan_type, email_verified, created_at, updated_at
         FROM users WHERE id = $1`,
        [userId]
    );
    
    if (result.rows.length === 0) {
        return null;
    }
    
    const userData = result.rows[0];
    return {
        id: userData.id,
        email: userData.email,
        firstName: userData.first_name,
        lastName: userData.last_name,
        company: userData.company,
        role: userData.role,
        planType: userData.plan_type,
        emailVerified: userData.email_verified,
        createdAt: userData.created_at,
        updatedAt: userData.updated_at,
    };
};

// Logout user (invalidate session)
export const logoutUser = async (token: string): Promise<void> => {
    const decoded = verifyToken(token);
    if (!decoded) return;
    
    await query(
        'DELETE FROM user_sessions WHERE user_id = $1',
        [decoded.userId]
    );
};

// Validate session
export const validateSession = async (token: string): Promise<User | null> => {
    const decoded = verifyToken(token);
    if (!decoded) return null;
    
    // Check if session exists and is not expired
    const sessionResult = await query(
        'SELECT user_id FROM user_sessions WHERE user_id = $1 AND expires_at > NOW()',
        [decoded.userId]
    );
    
    if (sessionResult.rows.length === 0) {
        return null;
    }
    
    return await getUserById(decoded.userId);
};