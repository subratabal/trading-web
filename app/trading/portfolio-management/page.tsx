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
  LinearProgress,
  Divider,
} from '@mui/material';
import {
  AccountBalance,
  PieChart,
  AutoAwesome,
  Speed,
  CheckCircle,
  ArrowForward,
  Assessment,
  BarChart,
  TrendingUp,
  Security,
  Balance,
  Analytics,
  Sync,
  Shield,
  Timeline,
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

export default function PortfolioManagementPage() {
  const features = [
    {
      icon: AutoAwesome,
      title: 'AI-Powered Optimization',
      description: 'Advanced machine learning algorithms for dynamic portfolio optimization and risk-adjusted allocation.',
      capabilities: ['Mean-Variance Optimization', 'Black-Litterman Model', 'Risk Parity', 'Factor-Based Allocation'],
      color: '#2196F3',
    },
    {
      icon: Analytics,
      title: 'Real-Time Monitoring',
      description: 'Continuous portfolio monitoring with instant alerts, performance tracking, and risk assessment.',
      capabilities: ['Live Performance Tracking', 'Risk Alerts', 'Deviation Monitoring', 'Benchmark Comparison'],
      color: '#4CAF50',
    },
    {
      icon: Balance,
      title: 'Dynamic Rebalancing',
      description: 'Automated rebalancing based on market conditions, risk targets, and investment objectives.',
      capabilities: ['Threshold Rebalancing', 'Calendar Rebalancing', 'Volatility-Based', 'Tax-Aware Rebalancing'],
      color: '#FF9800',
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Comprehensive risk controls with position limits, stress testing, and scenario analysis.',
      capabilities: ['VaR Limits', 'Concentration Limits', 'Stress Testing', 'Scenario Analysis'],
      color: '#F44336',
    },
    {
      icon: Assessment,
      title: 'Performance Attribution',
      description: 'Detailed performance attribution analysis to understand return drivers and manager alpha.',
      capabilities: ['Factor Attribution', 'Sector Attribution', 'Security Selection', 'Asset Allocation'],
      color: '#9C27B0',
    },
    {
      icon: Sync,
      title: 'Multi-Asset Support',
      description: 'Comprehensive support for equities, fixed income, commodities, alternatives, and derivatives.',
      capabilities: ['Equities', 'Fixed Income', 'Commodities', 'Alternatives', 'Derivatives', 'Crypto'],
      color: '#00BCD4',
    },
  ];

  const stats = [
    { value: '$50B+', label: 'Assets Under Management', icon: AccountBalance },
    { value: '99.99%', label: 'System Uptime', icon: Security },
    { value: '< 10ms', label: 'Order Latency', icon: Speed },
    { value: '1000+', label: 'Asset Classes', icon: PieChart },
  ];

  const portfolioTypes = [
    {
      title: 'Institutional Portfolios',
      description: 'Large-scale portfolio management for pension funds, endowments, and insurance companies.',
      features: ['Multi-billion dollar capacity', 'Regulatory compliance', 'Custom benchmarks', 'ESG integration'],
      minInvestment: '$100M+',
    },
    {
      title: 'Hedge Fund Strategies',
      description: 'Advanced portfolio construction for hedge funds with complex strategies and risk models.',
      features: ['Long/short equity', 'Market neutral', 'Alternative strategies', 'Leverage management'],
      minInvestment: '$10M+',
    },
    {
      title: 'Family Office Solutions',
      description: 'Tailored portfolio management for ultra-high-net-worth families and private wealth.',
      features: ['Custom objectives', 'Tax optimization', 'Estate planning', 'Liquidity management'],
      minInvestment: '$5M+',
    },
    {
      title: 'Fund of Funds',
      description: 'Sophisticated manager selection and allocation across multiple investment strategies.',
      features: ['Manager selection', 'Due diligence', 'Risk budgeting', 'Overlay strategies'],
      minInvestment: '$1M+',
    },
  ];

  const capabilities = [
    'AI-powered asset allocation and optimization across global markets',
    'Real-time risk monitoring with automated alerts and position limits',
    'Advanced performance attribution and factor analysis tools',
    'Seamless integration with prime brokers and execution platforms',
    'Comprehensive compliance monitoring and regulatory reporting',
    'Tax-efficient rebalancing and harvest loss optimization',
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
              radial-gradient(circle at 20% 80%, #00A3E0 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, #2196F3 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, #4CAF50 0%, transparent 50%)
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
                  label="AI-Powered Portfolio Management Platform"
                  sx={{
                    bgcolor: 'rgba(0, 163, 224, 0.1)',
                    color: '#00A3E0',
                    border: '1px solid rgba(0, 163, 224, 0.3)',
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
                  Portfolio Management
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    mb: 2,
                    color: '#00A3E0',
                    fontWeight: 600,
                    maxWidth: '700px',
                    mx: 'auto',
                  }}
                >
                  Optimize. Monitor. Outperform.
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
                  Institutional-grade portfolio management platform powered by AI. Optimize allocations, manage risk, 
                  and deliver consistent alpha with advanced analytics and automation.
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
                      background: 'linear-gradient(135deg, #00A3E0 0%, #0284c7 100%)',
                    }}
                  >
                    Start Managing
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<PieChart />}
                    sx={{
                      py: 2,
                      px: 4,
                      fontSize: '1.1rem',
                      borderColor: '#00A3E0',
                      color: '#00A3E0',
                    }}
                  >
                    Portfolio Demo
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
                        <stat.icon sx={{ fontSize: '2.5rem', color: '#00A3E0' }} />
                      </Box>
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 'bold',
                          background: 'linear-gradient(135deg, #00A3E0 0%, #0284c7 100%)',
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

      {/* Features */}
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
                Advanced Portfolio Features
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto' }}>
                Comprehensive tools for institutional-grade portfolio management and optimization
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div variants={fadeInUp}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent sx={{ p: 4 }}>
                      <Box display="flex" alignItems="center" mb={3}>
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            bgcolor: feature.color,
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
                        {feature.capabilities.map((capability, idx) => (
                          <Chip
                            key={idx}
                            label={capability}
                            size="small"
                            sx={{ 
                              mr: 1, 
                              mb: 1,
                              bgcolor: `${feature.color}15`,
                              color: feature.color,
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

      {/* Portfolio Types */}
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
                  Portfolio Solutions
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Tailored solutions for every investment mandate and client type
                </Typography>
              </Box>
            </motion.div>

            <Grid container spacing={4}>
              {portfolioTypes.map((portfolio, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <motion.div variants={fadeInUp}>
                    <Paper sx={{ p: 4, height: '100%', border: '2px solid rgba(0, 163, 224, 0.1)' }}>
                      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                        <Typography variant="h6" fontWeight="bold">
                          {portfolio.title}
                        </Typography>
                        <Chip 
                          label={portfolio.minInvestment} 
                          size="small" 
                          sx={{ bgcolor: 'rgba(0, 163, 224, 0.1)', color: '#00A3E0' }}
                        />
                      </Box>
                      
                      <Typography variant="body1" color="text.secondary" mb={3}>
                        {portfolio.description}
                      </Typography>

                      <List dense>
                        {portfolio.features.map((feature, idx) => (
                          <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 30 }}>
                              <CheckCircle sx={{ fontSize: 16, color: '#00A3E0' }} />
                            </ListItemIcon>
                            <ListItemText 
                              primary={feature} 
                              sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem' } }}
                            />
                          </ListItem>
                        ))}
                      </List>
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
                <TrendingUp sx={{ fontSize: '2rem', color: '#00A3E0', mr: 2 }} />
                <Typography variant="h4" fontWeight="bold">
                  Portfolio Excellence
                </Typography>
              </Box>

              <List>
                {capabilities.map((capability, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: '#00A3E0' }} />
                    </ListItemIcon>
                    <ListItemText primary={capability} />
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
                  background: 'linear-gradient(135deg, rgba(0, 163, 224, 0.1) 0%, rgba(2, 132, 199, 0.1) 100%)',
                  borderRadius: 3,
                  border: '1px solid rgba(0, 163, 224, 0.2)',
                  textAlign: 'center',
                }}
              >
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                  Ready to Optimize Your Portfolio?
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                  Join leading institutions managing billions with our AI-powered portfolio management platform.
                </Typography>
                <Box display="flex" gap={2} justifyContent="center" flexWrap="wrap">
                  <Button
                    component={Link}
                    href="/auth/signup"
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    sx={{
                      background: 'linear-gradient(135deg, #00A3E0 0%, #0284c7 100%)',
                    }}
                  >
                    Start Free Trial
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: '#00A3E0',
                      color: '#00A3E0',
                    }}
                  >
                    Schedule Demo
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