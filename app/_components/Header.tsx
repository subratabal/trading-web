'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { useAuth } from '@/app/_contexts/AuthContext';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Typography,
  useScrollTrigger,
  Slide,
  Container,
} from '@mui/material';
import {
  AccountCircle,
  Dashboard,
  Logout,
  TrendingUp,
  Psychology,
  School,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header() {
  const { state, logout } = useAuth();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await logout();
    handleMenuClose();
  };

  const navItems = [
    { label: 'Trading', href: '/trading', icon: TrendingUp },
    { label: 'Code Bot', href: '/code-bot', icon: Psychology },
    { label: 'LMS', href: '/lms', icon: School },
  ];

  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        sx={{
          background: scrolled
            ? 'linear-gradient(145deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)'
            : 'linear-gradient(145deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.8) 100%)',
          backdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(0, 163, 224, 0.2)' : 'none',
          transition: 'all 0.3s ease-in-out',
        }}
        elevation={scrolled ? 1 : 0}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            {/* Logo */}
            <Link href="/" style={{ textDecoration: 'none' }}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Box 
                  display="flex" 
                  alignItems="center" 
                  gap={2}
                  sx={{
                    position: 'relative',
                    '&:hover': {
                      '& img': {
                        filter: 'brightness(1.2) saturate(1.6) hue-rotate(15deg) drop-shadow(0 6px 20px rgba(0, 163, 224, 0.6)) drop-shadow(0 0 30px rgba(0, 163, 224, 0.4))',
                      }
                    }
                  }}
                >
                  {/* Brand accent background */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -2,
                      left: -2,
                      right: -2,
                      bottom: -2,
                      background: 'linear-gradient(135deg, rgba(0, 163, 224, 0.2) 0%, transparent 70%)',
                      borderRadius: 2,
                      opacity: scrolled ? 0.8 : 0.4,
                      transition: 'opacity 0.3s ease',
                      zIndex: -1,
                    }}
                  />
                  
                  <Image
                    src="/images/aiquantlabs_logo_colored.png"
                    alt="AI Quant Labs"
                    width={120}
                    height={40}
                    style={{
                      objectFit: 'contain',
                      maxHeight: '40px',
                      width: 'auto',
                      filter: `
                        brightness(1.2) 
                        saturate(1.4) 
                        hue-rotate(10deg)
                        drop-shadow(0 2px 12px rgba(0, 163, 224, 0.3))
                        ${scrolled ? 'contrast(1.15)' : 'contrast(1.1)'}
                      `,
                      transition: 'filter 0.3s ease',
                      zIndex: 1,
                    }}
                    sizes="(max-width: 768px) 100px, 120px"
                    priority
                    onError={(e) => {
                      // Smart fallback system
                      const target = e.currentTarget;
                      if (target.src.includes('_colored')) {
                        target.src = '/images/aiquantlabs_logo_white.png';
                        target.style.filter = 'brightness(1) drop-shadow(0 2px 8px rgba(0, 163, 224, 0.4))';
                      } else {
                        target.style.display = 'none';
                      }
                    }}
                  />
                </Box>
              </motion.div>
            </Link>

            {/* Navigation */}
            <Box display="flex" alignItems="center" gap={3}>
              {/* Navigation Links */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    component={Link}
                    href={item.href}
                    startIcon={<item.icon />}
                    sx={{
                      color: 'text.primary',
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor: 'rgba(0, 163, 224, 0.1)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>

              {/* Auth Section */}
              {state.isAuthenticated ? (
                <Box display="flex" alignItems="center" gap={2}>
                  <Button
                    component={Link}
                    href="/dashboard"
                    startIcon={<Dashboard />}
                    variant="outlined"
                    size="small"
                  >
                    Dashboard
                  </Button>
                  <IconButton
                    onClick={handleProfileMenuOpen}
                    size="small"
                    sx={{ ml: 1 }}
                  >
                    <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
                      {state.user?.firstName?.[0] || state.user?.email[0]}
                    </Avatar>
                  </IconButton>
                </Box>
              ) : (
                <Box display="flex" alignItems="center" gap={2}>
                  <Button
                    component={Link}
                    href="/auth/login"
                    variant="outlined"
                    size="small"
                  >
                    Login
                  </Button>
                  <Button
                    component={Link}
                    href="/auth/signup"
                    variant="contained"
                    size="small"
                  >
                    Get Started
                  </Button>
                </Box>
              )}
            </Box>
          </Toolbar>
        </Container>

        {/* Profile Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
          <MenuItem onClick={handleMenuClose}>
            <AccountCircle sx={{ mr: 1 }} />
            Profile
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <Logout sx={{ mr: 1 }} />
            Logout
          </MenuItem>
        </Menu>
      </AppBar>
    </HideOnScroll>
  );
}