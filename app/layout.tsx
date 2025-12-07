import { Inter, JetBrains_Mono } from 'next/font/google';
import { AuthProvider } from '@/app/_contexts/AuthContext';
import { Header, Footer } from '@/components/layout';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata = {
  title: 'AI & Quant Labs Trading - AI-Powered Trading Intelligence',
  description:
    'Reduce trading risk by 73% with advanced AI algorithms, multi-agent orchestration, and real-time market intelligence. Built for institutional traders.',
  keywords:
    'AI trading, algorithmic trading, quantitative analysis, institutional trading, hedge funds, investment banking',
  openGraph: {
    title: 'AI & Quant Labs Trading - AI-Powered Trading Intelligence',
    description:
      'Reduce trading risk by 73% with advanced AI algorithms and real-time market intelligence.',
    type: 'website',
    locale: 'en_US',
    siteName: 'AI & Quant Labs Trading',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI & Quant Labs Trading - AI-Powered Trading Intelligence',
    description:
      'Reduce trading risk by 73% with advanced AI algorithms and real-time market intelligence.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-gray-950 text-gray-100 antialiased">
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 pt-16 md:pt-18">{children}</main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
