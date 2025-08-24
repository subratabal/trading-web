import { Inter } from 'next/font/google';
import { AuthProvider } from '@/app/_contexts/AuthContext';
import ThemeRegistry from '@/app/_components/ThemeRegistry';
import Header from '@/app/_components/Header';
import { Box } from '@mui/material';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AI Quant Labs - AI-Powered Trading Intelligence',
  description: 'Reduce trading risk by 73% with advanced AI algorithms, multi-agent orchestration, and real-time market intelligence. Built for institutional traders.',
  keywords: 'AI trading, algorithmic trading, quantitative analysis, institutional trading, hedge funds, investment banking',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>
          <AuthProvider>
            <Header />
            <Box component="main" sx={{ pt: { xs: 8, md: 9 } }}>
              {children}
            </Box>
          </AuthProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}