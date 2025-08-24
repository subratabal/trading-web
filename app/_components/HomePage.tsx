'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  IconButton,
} from '@mui/material';
import {
  TrendingUp,
  Psychology,
  School,
  Security,
  Speed,
  Analytics,
  ArrowForward,
  PlayArrow,
} from '@mui/icons-material';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

export default function HomePage() {
  const features = useMemo(() => [
    {
      icon: TrendingUp,
      title: 'AI Trading Platform',
      description: 'Advanced algorithms for real-time market analysis, risk management, and predictive modeling.',
      color: '#00A3E0',
    },
    {
      icon: Psychology,
      title: 'AI Development Studio',
      description: 'Multi-agent orchestration for automated strategy development, testing, and deployment.',
      color: '#4CAF50',
    },
    {
      icon: School,
      title: 'AI Learning Academy',
      description: 'Comprehensive training platform for AI strategies, development skills, and industry best practices.',
      color: '#FF9800',
    },
  ], []);

  const stats = useMemo(() => [
    { value: '73%', label: 'Risk Reduction' },
    { value: '2.5x', label: 'Faster Execution' },
    { value: '99.9%', label: 'Uptime' },
    { value: '24/7', label: 'Monitoring' },
  ], []);

  const benefits = useMemo(() => [
    {
      icon: Security,
      title: 'Enterprise Security',
      description: 'SOC2 compliant with multi-factor authentication and end-to-end encryption.',
    },
    {
      icon: Speed,
      title: 'Ultra-Low Latency',
      description: 'Sub-millisecond execution for high-frequency trading applications.',
    },
    {
      icon: Analytics,
      title: 'Real-time Analytics',
      description: 'Advanced market intelligence with predictive modeling and risk assessment.',
    },
  ], []);

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          pt: { xs: 15, md: 20 },
          pb: { xs: 10, md: 15 },
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
          overflow: 'hidden',
        }}
      >
        {/* Background Animation */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            background: `
              radial-gradient(circle at 20% 80%, #00A3E0 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, #4CAF50 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, #FF9800 0%, transparent 50%)
            `,
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Box textAlign="center" mb={6}>
                <Chip
                  label="Institutional Grade AI Trading Platform"
                  sx={{
                    bgcolor: 'rgba(0, 163, 224, 0.1)',
                    color: 'primary.main',
                    border: '1px solid rgba(0, 163, 224, 0.3)',
                    mb: 3,
                  }}
                />
                
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    mb: 3,
                    background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    maxWidth: '800px',
                    mx: 'auto',
                  }}
                >
                  AI Quant Labs Platform
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    mb: 2,
                    color: 'primary.main',
                    fontWeight: 600,
                    maxWidth: '600px',
                    mx: 'auto',
                  }}
                >
                  Comprehensive AI Solutions Platform
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    mb: 6,
                    color: 'text.secondary',
                    maxWidth: '700px',
                    mx: 'auto',
                    lineHeight: 1.6,
                  }}
                >
                  Advanced AI Platform for Trading, Development, and Learning with Multi-Agent Orchestration and Real-Time Intelligence
                </Typography>

                <Box display="flex" gap={3} justifyContent="center" flexWrap="wrap">
                  <Button
                    component={Link}
                    href="/auth/signup"
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    sx={{
                      py: 2,
                      px: 4,
                      fontSize: '1.1rem',
                    }}
                  >
                    Start Free Trial
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<PlayArrow />}
                    sx={{
                      py: 2,
                      px: 4,
                      fontSize: '1.1rem',
                    }}
                  >
                    Watch Demo
                  </Button>
                </Box>
              </Box>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeInUp}>
              <Grid container spacing={4} justifyContent="center">
                {stats.map((stat, index) => (
                  <Grid item xs={6} md={3} key={index}>
                    <Box textAlign="center">
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 'bold',
                          background: 'linear-gradient(135deg, #00A3E0 0%, #4CAF50 100%)',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          mb: 1,
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {stat.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <Box textAlign="center" mb={8}>
              <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
                Comprehensive AI Trading Solutions
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
                Built for hedge funds, investment banks, and institutional traders who demand excellence
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div variants={fadeInUp}>
                  <Card
                    sx={{
                      height: '100%',
                      cursor: 'pointer',
                      '&:hover': {
                        '& .feature-icon': {
                          transform: 'scale(1.1)',
                          color: feature.color,
                        },
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4, textAlign: 'center' }}>
                      <Box
                        className="feature-icon"
                        sx={{
                          mb: 3,
                          transition: 'all 0.3s ease-in-out',
                        }}
                      >
                        <feature.icon sx={{ fontSize: '3rem', color: 'text.secondary' }} />
                      </Box>
                      <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* Benefits Section */}
      <Box sx={{ bgcolor: 'background.paper', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Box textAlign="center" mb={8}>
                <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
                  Why Choose AI Quant Labs
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Enterprise-grade features for professional trading
                </Typography>
              </Box>
            </motion.div>

            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <motion.div variants={fadeInUp}>
                  <Box>
                    {benefits.map((benefit, index) => (
                      <Box key={index} sx={{ mb: 4, display: 'flex', alignItems: 'flex-start' }}>
                        <IconButton
                          sx={{
                            bgcolor: 'primary.main',
                            color: 'white',
                            mr: 3,
                            '&:hover': { bgcolor: 'primary.dark' },
                          }}
                        >
                          <benefit.icon />
                        </IconButton>
                        <Box>
                          <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                            {benefit.title}
                          </Typography>
                          <Typography variant="body1" color="text.secondary">
                            {benefit.description}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div variants={fadeInUp}>
                  <Box
                    sx={{
                      p: 4,
                      background: 'linear-gradient(135deg, rgba(0, 163, 224, 0.1) 0%, rgba(76, 175, 80, 0.1) 100%)',
                      borderRadius: 3,
                      border: '1px solid rgba(0, 163, 224, 0.2)',
                    }}
                  >
                    <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                      Ready to Transform Your Trading?
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                      Join leading institutional traders who trust AI Quant Labs for their critical trading operations.
                    </Typography>
                    <Button
                      component={Link}
                      href="/auth/signup"
                      variant="contained"
                      size="large"
                      endIcon={<ArrowForward />}
                      fullWidth
                    >
                      Start Your Free Trial
                    </Button>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}