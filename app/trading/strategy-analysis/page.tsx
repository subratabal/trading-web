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
  Timeline,
  TrendingUp,
  Analytics,
  AutoAwesome,
  Speed,
  CheckCircle,
  ArrowForward,
  Assessment,
  BarChart,
  ShowChart,
  PieChart,
  TableChart,
  BubbleChart,
  Transform,
  Psychology,
  Science,
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

export default function StrategyAnalysisPage() {
  const analysisTypes = [
    {
      icon: Timeline,
      title: 'Backtesting Engine',
      description: 'Historical performance analysis with advanced statistical validation and walk-forward optimization.',
      features: ['Monte Carlo Simulation', 'Walk-Forward Analysis', 'Out-of-Sample Testing', 'Statistical Validation'],
      color: '#2196F3',
    },
    {
      icon: ShowChart,
      title: 'Factor Analysis',
      description: 'Deep dive into performance drivers, risk factors, and attribution analysis across market conditions.',
      features: ['Factor Decomposition', 'Risk Attribution', 'Style Analysis', 'Regime Detection'],
      color: '#4CAF50',
    },
    {
      icon: Assessment,
      title: 'Performance Metrics',
      description: 'Comprehensive performance evaluation with industry-standard and custom risk-adjusted metrics.',
      features: ['Sharpe Ratio', 'Sortino Ratio', 'Calmar Ratio', 'Maximum Drawdown'],
      color: '#FF9800',
    },
    {
      icon: Psychology,
      title: 'Behavioral Analysis',
      description: 'AI-powered analysis of strategy behavior patterns and market psychology integration.',
      features: ['Sentiment Analysis', 'Behavioral Patterns', 'Market Psychology', 'Emotion Detection'],
      color: '#9C27B0',
    },
    {
      icon: Science,
      title: 'Stress Testing',
      description: 'Comprehensive stress testing across various market scenarios and extreme conditions.',
      features: ['Scenario Analysis', 'VaR Testing', 'Extreme Events', 'Market Crashes'],
      color: '#F44336',
    },
    {
      icon: Transform,
      title: 'Optimization Engine',
      description: 'Multi-objective optimization with genetic algorithms and machine learning enhancement.',
      features: ['Parameter Optimization', 'Genetic Algorithms', 'ML Enhancement', 'Multi-Objective'],
      color: '#00BCD4',
    },
  ];

  const stats = [
    { value: '10M+', label: 'Data Points Analyzed', icon: BarChart },
    { value: '99.9%', label: 'Accuracy Rate', icon: CheckCircle },
    { value: '< 100ms', label: 'Analysis Speed', icon: Speed },
    { value: '50+', label: 'Strategy Types', icon: TrendingUp },
  ];

  const capabilities = [
    {
      category: 'Quantitative Analysis',
      items: ['Statistical significance testing', 'Risk-adjusted returns calculation', 'Correlation and cointegration analysis', 'Factor model fitting'],
    },
    {
      category: 'Machine Learning',
      items: ['Predictive model validation', 'Feature importance analysis', 'Overfitting detection', 'Model ensemble testing'],
    },
    {
      category: 'Risk Assessment',
      items: ['Value at Risk (VaR) calculation', 'Expected Shortfall analysis', 'Drawdown distribution', 'Tail risk measurement'],
    },
    {
      category: 'Market Analysis',
      items: ['Market regime identification', 'Volatility clustering analysis', 'Seasonality detection', 'Cross-asset correlation'],
    },
  ];

  const benefits = [
    'Validate strategy performance with institutional-grade backtesting infrastructure',
    'Identify hidden risks and performance drivers through advanced factor analysis',
    'Optimize strategy parameters using cutting-edge machine learning algorithms',
    'Stress test strategies against historical market crashes and extreme scenarios',
    'Generate comprehensive reports with visualizations for stakeholder presentations',
    'Benchmark against market indices and peer strategies with detailed attribution',
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
                  label="Advanced Trading Strategy Analytics"
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
                  Strategy Analysis
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
                  Validate. Optimize. Outperform.
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
                  Comprehensive trading strategy analysis platform powered by AI. Validate performance, identify risks, 
                  and optimize parameters with institutional-grade tools and analytics.
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
                    Start Analysis
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<Assessment />}
                    sx={{
                      py: 2,
                      px: 4,
                      fontSize: '1.1rem',
                      borderColor: '#00A3E0',
                      color: '#00A3E0',
                    }}
                  >
                    View Demo
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

      {/* Analysis Types */}
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
                Comprehensive Analysis Suite
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto' }}>
                Six powerful analysis engines working together to provide complete strategy insights
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {analysisTypes.map((analysis, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div variants={fadeInUp}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent sx={{ p: 4 }}>
                      <Box display="flex" alignItems="center" mb={3}>
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            bgcolor: analysis.color,
                            color: 'white',
                            mr: 2,
                          }}
                        >
                          <analysis.icon />
                        </Box>
                        <Typography variant="h6" fontWeight="bold">
                          {analysis.title}
                        </Typography>
                      </Box>
                      
                      <Typography variant="body1" color="text.secondary" mb={3} sx={{ lineHeight: 1.6 }}>
                        {analysis.description}
                      </Typography>

                      <Box>
                        {analysis.features.map((feature, idx) => (
                          <Chip
                            key={idx}
                            label={feature}
                            size="small"
                            sx={{ 
                              mr: 1, 
                              mb: 1,
                              bgcolor: `${analysis.color}15`,
                              color: analysis.color,
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

      {/* Capabilities */}
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
                  Advanced Capabilities
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Institutional-grade tools for comprehensive strategy evaluation
                </Typography>
              </Box>
            </motion.div>

            <Grid container spacing={4}>
              {capabilities.map((capability, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <motion.div variants={fadeInUp}>
                    <Paper sx={{ p: 4, height: '100%' }}>
                      <Typography variant="h6" fontWeight="bold" mb={3} color="primary.main">
                        {capability.category}
                      </Typography>
                      <List>
                        {capability.items.map((item, idx) => (
                          <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 30 }}>
                              <CheckCircle sx={{ fontSize: 18, color: '#00A3E0' }} />
                            </ListItemIcon>
                            <ListItemText 
                              primary={item} 
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
                <Analytics sx={{ fontSize: '2rem', color: '#00A3E0', mr: 2 }} />
                <Typography variant="h4" fontWeight="bold">
                  Why Choose Our Analysis
                </Typography>
              </Box>

              <List>
                {benefits.map((benefit, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: '#00A3E0' }} />
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
                  background: 'linear-gradient(135deg, rgba(0, 163, 224, 0.1) 0%, rgba(2, 132, 199, 0.1) 100%)',
                  borderRadius: 3,
                  border: '1px solid rgba(0, 163, 224, 0.2)',
                  textAlign: 'center',
                }}
              >
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                  Ready to Analyze Your Strategies?
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                  Join institutional traders using our advanced analytics to validate and optimize their trading strategies.
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
                    Start Free Analysis
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: '#00A3E0',
                      color: '#00A3E0',
                    }}
                  >
                    Contact Sales
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