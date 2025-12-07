'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/app/_contexts/AuthContext';
import { Button, Avatar, Container } from '@/components/ui';
import { cn } from '@/lib/utils';
import {
  BarChart3,
  LineChart,
  Shield,
  Settings,
  LayoutDashboard,
  LogOut,
  User,
  Menu,
  X,
  ChevronDown,
  Home,
} from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Strategy', href: '/strategy-analysis', icon: LineChart },
  { label: 'Portfolio', href: '/portfolio-management', icon: BarChart3 },
  { label: 'Risk', href: '/risk-management', icon: Shield },
];

export function Header() {
  const { user, isAuthenticated, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    await logout();
    setProfileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-gray-950/95 backdrop-blur-xl border-b border-gray-800/50 shadow-lg shadow-black/10'
          : 'bg-transparent'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Image
                src="/images/aiquantlabs_logo_colored.png"
                alt="AI & Quant Labs Trading"
                width={140}
                height={40}
                className="h-8 w-auto object-contain relative z-10 drop-shadow-[0_2px_8px_rgba(0,163,224,0.3)]"
                priority
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src.includes('_colored')) {
                    target.src = '/images/aiquantlabs_logo_white.png';
                  }
                }}
              />
            </motion.div>
            <span className="hidden sm:inline-block text-sm font-medium text-emerald-400 border border-emerald-500/30 rounded px-2 py-0.5">
              Trading
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <Button
                  variant="ghost"
                  size="sm"
                  leftIcon={<item.icon className="h-4 w-4" />}
                  className="text-gray-300 hover:text-white"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Auth Section */}
          <div className="hidden md:flex items-center gap-3">
            {/* Back to Main Site */}
            <a
              href="https://aiquantlabs.com"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              ← Main Site
            </a>

            {isAuthenticated && user ? (
              <>
                {/* Profile Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                    className="flex items-center gap-2 p-1 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Avatar name={user.name || user.email} size="sm" />
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 text-gray-400 transition-transform duration-200',
                        profileMenuOpen && 'rotate-180'
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {profileMenuOpen && (
                      <>
                        <div
                          className="fixed inset-0 z-40"
                          onClick={() => setProfileMenuOpen(false)}
                        />
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.15 }}
                          className="absolute right-0 top-full mt-2 w-56 z-50 rounded-xl bg-gray-900 border border-gray-800 shadow-xl shadow-black/20 overflow-hidden"
                        >
                          <div className="px-4 py-3 border-b border-gray-800">
                            <p className="text-sm font-medium text-gray-100 truncate">
                              {user.name || 'User'}
                            </p>
                            <p className="text-xs text-gray-400 truncate">
                              {user.email}
                            </p>
                          </div>
                          <div className="py-1">
                            <Link
                              href="/profile"
                              onClick={() => setProfileMenuOpen(false)}
                              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                            >
                              <User className="h-4 w-4" />
                              Profile
                            </Link>
                            <Link
                              href="/settings"
                              onClick={() => setProfileMenuOpen(false)}
                              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                            >
                              <Settings className="h-4 w-4" />
                              Settings
                            </Link>
                            <button
                              onClick={handleLogout}
                              className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-400 hover:bg-gray-800 transition-colors"
                            >
                              <LogOut className="h-4 w-4" />
                              Sign Out
                            </button>
                          </div>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              </>
            ) : (
              <>
                <Link href="/auth/login">
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/signup">
                  <Button variant="primary" size="sm">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-300" />
            ) : (
              <Menu className="h-6 w-6 text-gray-300" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-gray-800 bg-gray-950/98 backdrop-blur-xl"
          >
            <Container>
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </Link>
                ))}

                <a
                  href="https://aiquantlabs.com"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
                >
                  ← Back to Main Site
                </a>

                <div className="pt-4 border-t border-gray-800 space-y-2">
                  {isAuthenticated && user ? (
                    <>
                      <div className="px-4 py-2">
                        <p className="text-sm font-medium text-gray-100">
                          {user.name || 'User'}
                        </p>
                        <p className="text-xs text-gray-400">{user.email}</p>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-gray-800 transition-colors"
                      >
                        <LogOut className="h-5 w-5" />
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/auth/login"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-3"
                      >
                        <Button variant="outline" className="w-full">
                          Sign In
                        </Button>
                      </Link>
                      <Link
                        href="/auth/signup"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-3"
                      >
                        <Button variant="primary" className="w-full">
                          Get Started
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
