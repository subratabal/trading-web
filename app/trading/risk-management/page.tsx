'use client';

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
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import {
  Security,
  Shield,
  Warning,
  TrendingDown,
  Speed,
  CheckCircle,
  ArrowForward,
  Assessment,
  Timeline,
  Analytics,
  MonitorHeart,
  Policy,
  Gavel,
  Science,
  Visibility,
  NotificationsActive,
} from '@mui/icons-material';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function RiskManagementPage() {
  const riskModules = [
    {
      icon: MonitorHeart,
      title: 'Real-Time Monitoring',
      description: 'Continuous risk surveillance with instant alerts, threshold monitoring, and automated responses.',
      features: ['Live Position Monitoring', 'Risk Limit Alerts', 'Automated Responses', 'Escalation Procedures'],
      color: '#F44336',
    },
    {
      icon: Analytics,
      title: 'VaR & Stress Testing',
      description: 'Advanced Value at Risk models with comprehensive stress testing and scenario analysis.',
      features: ['Historical VaR', 'Monte Carlo VaR', 'Expected Shortfall', 'Stress Scenarios'],
      color: '#FF9800',
    },
    {
      icon: Policy,
      title: 'Compliance Engine',
      description: 'Automated compliance monitoring with regulatory requirements and internal policy enforcement.',
      features: ['Regulatory Compliance', 'Policy Enforcement', 'Audit Trails', 'Violation Tracking'],
      color: '#2196F3',
    },
    {
      icon: Science,
      title: 'Factor Risk Models',
      description: 'Multi-factor risk models for comprehensive portfolio risk decomposition and attribution.',
      features: ['Equity Risk Models', 'Fixed Income Models', 'Currency Models', 'Commodity Models'],
      color: '#4CAF50',
    },
    {
      icon: Visibility,
      title: 'Risk Reporting',
      description: 'Comprehensive risk reporting with customizable dashboards and automated distribution.',
      features: ['Executive Dashboards', 'Risk Reports', 'Regulatory Filings', 'Client Reporting'],
      color: '#9C27B0',
    },
    {
      icon: NotificationsActive,
      title: 'Alert Management',
      description: 'Intelligent alert system with prioritization, escalation, and automated acknowledgment.',
      features: ['Smart Prioritization', 'Escalation Chains', 'Mobile Alerts', 'Response Tracking'],
      color: '#607D8B',
    },
  ];

  const stats = [
    { value: '99.95%', label: 'Risk Detection Rate', icon: Security },
    { value: '< 1ms', label: 'Alert Latency', icon: Speed },
    { value: '24/7', label: 'Monitoring Coverage', icon: MonitorHeart },
    { value: '100+', label: 'Risk Metrics', icon: Assessment },
  ];

  const riskTypes = [
    {
      category: 'Market Risk',
      description: 'Comprehensive market risk measurement and management',
      metrics: ['Value at Risk (VaR)', 'Expected Shortfall (ES)', 'Maximum Drawdown', 'Beta Analysis'],
      coverage: 'All asset classes and geographies',
    },
    {
      category: 'Credit Risk',
      description: 'Counterparty and issuer credit risk assessment',
      metrics: ['Credit Exposure', 'Probability of Default', 'Loss Given Default', 'Credit VaR'],
      coverage: 'Corporate bonds, loans, derivatives',
    },
    {
      category: 'Liquidity Risk',
      description: 'Portfolio liquidity assessment and stress testing',
      metrics: ['Liquidity Coverage Ratio', 'Funding Gap', 'Market Impact', 'Days to Liquidate'],
      coverage: 'All positions and funding sources',
    },
    {
      category: 'Operational Risk',
      description: 'Process, technology, and human risk monitoring',
      metrics: ['Error Rates', 'System Downtime', 'Failed Trades', 'Compliance Breaches'],
      coverage: 'End-to-end operations',
    },
  ];

  const benefits = [
    'Real-time risk monitoring with sub-millisecond alert generation',
    'Comprehensive stress testing across multiple market scenarios',
    'Automated compliance monitoring with regulatory requirement tracking',
    'Advanced VaR models with multiple methodologies and validation',
    'Customizable risk limits with automated enforcement and escalation',
    'Integrated reporting for risk committees and regulatory authorities',
  ];

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
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            background: `
              radial-gradient(circle at 20% 80%, #F44336 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, #FF9800 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, #00A3E0 0%, transparent 50%)
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
                  label="Enterprise Risk Management Platform"
                  sx={{
                    bgcolor: 'rgba(244, 67, 54, 0.1)',
                    color: '#F44336',
                    border: '1px solid rgba(244, 67, 54, 0.3)',
                    mb: 3,
                    fontSize: '1rem',
                    py: 1,
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
                    maxWidth: '900px',
                    mx: 'auto',
                  }}
                >
                  Risk Management
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    mb: 2,
                    color: '#F44336',
                    fontWeight: 600,
                    maxWidth: '700px',
                    mx: 'auto',
                  }}
                >
                  Protect. Monitor. Control.
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    mb: 6,
                    color: 'text.secondary',
                    maxWidth: '800px',
                    mx: 'auto',
                    lineHeight: 1.6,
                  }}
                >
                  Comprehensive risk management platform for financial institutions. Monitor, measure, and manage 
                  risk in real-time with advanced analytics and automated controls.
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
                      background: 'linear-gradient(135deg, #F44336 0%, #E53935 100%)',
                    }}
                  >
                    Start Protecting
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<Shield />}
                    sx={{
                      py: 2,
                      px: 4,
                      fontSize: '1.1rem',
                      borderColor: '#F44336',
                      color: '#F44336',
                    }}
                  >
                    Risk Demo
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
                      <Box
                        sx={{
                          mb: 2,
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <stat.icon sx={{ fontSize: '2.5rem', color: '#F44336' }} />
                      </Box>
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 'bold',
                          background: 'linear-gradient(135deg, #F44336 0%, #E53935 100%)',
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

      {/* Risk Modules */}
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
                Comprehensive Risk Framework
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto' }}>
                Six integrated modules for complete risk coverage across all business lines
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {riskModules.map((module, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div variants={fadeInUp}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent sx={{ p: 4 }}>
                      <Box display="flex" alignItems="center" mb={3}>
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            bgcolor: module.color,
                            color: 'white',
                            mr: 2,
                          }}
                        >
                          <module.icon />
                        </Box>
                        <Typography variant="h6" fontWeight="bold">
                          {module.title}
                        </Typography>
                      </Box>
                      
                      <Typography variant="body1" color="text.secondary" mb={3} sx={{ lineHeight: 1.6 }}>
                        {module.description}
                      </Typography>

                      <Box>
                        {module.features.map((feature, idx) => (
                          <Chip
                            key={idx}
                            label={feature}
                            size="small"
                            sx={{ 
                              mr: 1, 
                              mb: 1,
                              bgcolor: `${module.color}15`,
                              color: module.color,
                            }}
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

      {/* Risk Types */}
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
                  Risk Coverage
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Complete coverage across all major risk categories
                </Typography>
              </Box>
            </motion.div>

            <Grid container spacing={4}>
              {riskTypes.map((risk, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <motion.div variants={fadeInUp}>
                    <Paper sx={{ p: 4, height: '100%', border: '2px solid rgba(244, 67, 54, 0.1)' }}>
                      <Typography variant="h6" fontWeight="bold" mb={2} color="#F44336">
                        {risk.category}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" mb={3}>
                        {risk.description}
                      </Typography>
                      
                      <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                        Key Metrics:
                      </Typography>
                      <List dense>
                        {risk.metrics.map((metric, idx) => (
                          <ListItem key={idx} sx={{ px: 0, py: 0.25 }}>
                            <ListItemIcon sx={{ minWidth: 24 }}>
                              <CheckCircle sx={{ fontSize: 14, color: '#F44336' }} />
                            </ListItemIcon>
                            <ListItemText 
                              primary={metric} 
                              sx={{ '& .MuiListItemText-primary': { fontSize: '0.85rem' } }}
                            />
                          </ListItem>
                        ))}
                      </List>
                      
                      <Box sx={{ mt: 2, p: 2, bgcolor: 'rgba(244, 67, 54, 0.05)', borderRadius: 1 }}>
                        <Typography variant="caption" fontWeight="bold">
                          Coverage: {risk.coverage}
                        </Typography>
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Benefits & CTA */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Box display="flex" alignItems="center" mb={4}>
                <Shield sx={{ fontSize: '2rem', color: '#F44336', mr: 2 }} />
                <Typography variant="h4" fontWeight="bold">
                  Risk Management Excellence
                </Typography>
              </Box>

              <List>
                {benefits.map((benefit, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: '#F44336' }} />
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
              <Box
                sx={{
                  p: 6,
                  background: 'linear-gradient(135deg, rgba(244, 67, 54, 0.1) 0%, rgba(229, 57, 53, 0.1) 100%)',
                  borderRadius: 3,
                  border: '1px solid rgba(244, 67, 54, 0.2)',
                  textAlign: 'center',
                }}
              >
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                  Ready to Secure Your Operations?
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                  Join leading financial institutions protecting billions in assets with our comprehensive risk platform.
                </Typography>
                <Box display="flex" gap={2} justifyContent="center" flexWrap="wrap">
                  <Button
                    component={Link}
                    href="/auth/signup"
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    sx={{
                      background: 'linear-gradient(135deg, #F44336 0%, #E53935 100%)',
                    }}
                  >
                    Start Free Trial
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: '#F44336',
                      color: '#F44336',
                    }}
                  >
                    Risk Assessment
                  </Button>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}