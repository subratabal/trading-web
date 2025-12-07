import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React 19 features
  reactStrictMode: true,
  
  // Enable cacheComponents for better performance (replaces PPR in Next.js 16)
  cacheComponents: true,
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.aiquantlabs.com',
      },
    ],
  },
  
  // Environment variables (server-side only for secrets)
  env: {
    NEXT_PUBLIC_APP_NAME: 'AI Quant Labs',
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  },
};

export default nextConfig;
