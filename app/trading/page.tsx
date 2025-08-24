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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from '@mui/material';
import {
  TrendingUp,
  Speed,
  Security,
  Analytics,
  CheckCircle,
  ArrowForward,
  Timeline,
  Assessment,
  Shield,
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

export default function TradingPage() {
  const features = useMemo(() => [
    {
      icon: Speed,
      title: 'Ultra-Low Latency',
      description: 'Sub-millisecond execution for high-frequency trading applications with optimized network protocols.',
      metrics: ['<1ms execution', '99.99% uptime', '24/7 monitoring'],
    },
    {
      icon: Analytics,
      title: 'AI Market Intelligence',
      description: 'Advanced machine learning models analyze market patterns and predict optimal entry/exit points.',
      metrics: ['73% risk reduction', 'Real-time analysis', 'Predictive modeling'],
    },
    {
      icon: Security,
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption, multi-factor authentication, and audit trails.',
      metrics: ['SOC2 compliant', 'Multi-factor auth', 'Complete audit logs'],
    },
  ], []);

  const tradingStrategies = useMemo(() => [
    {
      name: 'Momentum Trading',
      description: 'AI-powered momentum detection with machine learning entry/exit signals',
      performance: '+18.5%',
      riskLevel: 'Medium',
      timeframe: 'Intraday',
    },
    {
      name: 'Market Neutral Arbitrage',
      description: 'Risk-neutral strategies exploiting price discrepancies across markets',
      performance: '+12.3%',
      riskLevel: 'Low',
      timeframe: 'Short-term',
    },
    {
      name: 'Volatility Trading',
      description: 'Advanced volatility modeling for options and derivatives trading',
      performance: '+22.1%',
      riskLevel: 'High',
      timeframe: 'Medium-term',
    },
    {
      name: 'Statistical Arbitrage',
      description: 'Quantitative models identifying statistical mispricing opportunities',
      performance: '+15.7%',
      riskLevel: 'Medium',
      timeframe: 'Multi-day',
    },
  ], []);

  const benefits = useMemo(() => [
    'Reduce trading risk by up to 73% through AI-powered risk management',
    'Execute trades 2.5x faster than traditional manual methods',
    'Access real-time market intelligence and predictive analytics',
    'Maintain full regulatory compliance with automated reporting',
    'Scale operations without proportional increase in personnel',
    'Integrate seamlessly with existing trading infrastructure',
  ], []);

  const compliance = useMemo(() => [
    'SEC Rule 15c3-5 (Market Access Rule)',
    'MiFID II transaction reporting',
    'CFTC Part 23 risk management',
    'FCA trading venue requirements',
    'GDPR data protection compliance',
    'SOX financial controls',
  ], []);

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          pt: { xs: 12, md: 16 },
          pb: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Box textAlign="center" mb={8}>
                <Chip
                  label="Institutional Grade Trading Platform"
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
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 'bold',
                    background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  AI-Powered Trading Intelligence
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    color: 'text.secondary',
                    maxWidth: '800px',
                    mx: 'auto',
                    lineHeight: 1.6,
                  }}
                >
                  Transform your trading operations with advanced AI algorithms, real-time market intelligence, 
                  and institutional-grade risk management. Reduce risk by 73% while increasing execution speed.
                </Typography>

                <Box display="flex" gap={3} justifyContent="center" flexWrap="wrap">
                  <Button
                    component={Link}
                    href="/auth/signup"
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    sx={{ py: 2, px: 4 }}
                  >
                    Start Trading
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{ py: 2, px: 4 }}
                  >
                    Schedule Demo
                  </Button>
                </Box>
              </Box>
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
                Enterprise Trading Features
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Built for hedge funds, investment banks, and institutional traders
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div variants={fadeInUp}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent sx={{ p: 4 }}>
                      <Box display="flex" alignItems="center" mb={3}>
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            bgcolor: 'primary.main',
                            color: 'white',
                            mr: 2,
                          }}
                        >
                          <feature.icon />
                        </Box>
                        <Typography variant="h6" fontWeight="bold">
                          {feature.title}
                        </Typography>
                      </Box>
                      
                      <Typography variant="body1" color="text.secondary" mb={3} sx={{ lineHeight: 1.6 }}>
                        {feature.description}
                      </Typography>

                      <Box>
                        {feature.metrics.map((metric, idx) => (
                          <Chip
                            key={idx}
                            label={metric}
                            size="small"
                            sx={{ mr: 1, mb: 1 }}
                            variant="outlined"
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* Trading Strategies */}
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
                  AI Trading Strategies
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Pre-built strategies optimized for different market conditions
                </Typography>
              </Box>
            </motion.div>

            <Grid container spacing={3}>
              {tradingStrategies.map((strategy, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <motion.div variants={fadeInUp}>
                    <Paper sx={{ p: 4, height: '100%' }}>
                      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                        <Typography variant="h6" fontWeight="bold">
                          {strategy.name}
                        </Typography>
                        <Typography variant="h6" color="success.main" fontWeight="bold">
                          {strategy.performance}
                        </Typography>
                      </Box>
                      
                      <Typography variant="body1" color="text.secondary" mb={3}>
                        {strategy.description}
                      </Typography>

                      <Box display="flex" gap={1} flexWrap="wrap">
                        <Chip label={`Risk: ${strategy.riskLevel}`} size="small" />
                        <Chip label={strategy.timeframe} size="small" variant="outlined" />
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Benefits & Compliance */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Box display="flex" alignItems="center" mb={4}>
                <Timeline sx={{ fontSize: '2rem', color: 'primary.main', mr: 2 }} />
                <Typography variant="h4" fontWeight="bold">
                  Key Benefits
                </Typography>
              </Box>

              <List>
                {benefits.map((benefit, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: 'success.main' }} />
                    </ListItemIcon>
                    <ListItemText primary={benefit} />
                  </ListItem>
                ))}
              </List>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Box display="flex" alignItems="center" mb={4}>
                <Shield sx={{ fontSize: '2rem', color: 'primary.main', mr: 2 }} />
                <Typography variant="h4" fontWeight="bold">
                  Regulatory Compliance
                </Typography>
              </Box>

              <List>
                {compliance.map((item, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: 'success.main' }} />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'background.paper', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Box textAlign="center">
              <Typography variant="h3" component="h2" fontWeight="bold" mb={3}>
                Ready to Transform Your Trading?
              </Typography>
              <Typography variant="h6" color="text.secondary" mb={6}>
                Join leading institutional traders who trust AI Quant Labs for their critical trading operations.
              </Typography>
              
              <Box display="flex" gap={3} justifyContent="center" flexWrap="wrap">
                <Button
                  component={Link}
                  href="/auth/signup"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  sx={{ py: 2, px: 4 }}
                >
                  Start Free Trial
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{ py: 2, px: 4 }}
                >
                  Contact Sales
                </Button>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}