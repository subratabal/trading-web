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
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  LinearProgress,
} from '@mui/material';
import {
  RateReview,
  Security,
  Speed,
  BugReport,
  Code,
  CheckCircle,
  Warning,
  Error,
  ArrowForward,
  ExpandMore,
  Assessment,
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

export default function ReviewEnginePage() {
  const features = [
    {
      icon: Security,
      title: 'Security Analysis',
      description: 'Comprehensive security vulnerability scanning with OWASP compliance and threat detection.',
      capabilities: ['Vulnerability Scanning', 'OWASP Compliance', 'Threat Modeling', 'Security Patterns'],
    },
    {
      icon: Speed,
      title: 'Performance Review',
      description: 'Advanced performance analysis including complexity analysis, bottleneck detection, and optimization suggestions.',
      capabilities: ['Performance Profiling', 'Complexity Analysis', 'Memory Usage', 'Optimization Tips'],
    },
    {
      icon: Code,
      title: 'Code Quality',
      description: 'Deep code quality analysis covering best practices, maintainability, and technical debt assessment.',
      capabilities: ['Best Practices', 'Code Smells', 'Technical Debt', 'Maintainability Score'],
    },
  ];

  const reviewTypes = [
    {
      type: 'Security Review',
      description: 'Identifies potential security vulnerabilities and compliance issues',
      checks: ['SQL Injection', 'XSS Vulnerabilities', 'Authentication Flaws', 'Data Exposure'],
      severity: 'Critical',
      color: '#f44336',
    },
    {
      type: 'Performance Review',
      description: 'Analyzes code for performance bottlenecks and optimization opportunities',
      checks: ['Algorithm Complexity', 'Memory Leaks', 'Database Queries', 'Caching Strategies'],
      severity: 'High',
      color: '#ff9800',
    },
    {
      type: 'Quality Review',
      description: 'Evaluates code maintainability, readability, and adherence to best practices',
      checks: ['Code Duplication', 'Naming Conventions', 'Documentation', 'Test Coverage'],
      severity: 'Medium',
      color: '#2196f3',
    },
    {
      type: 'Architecture Review',
      description: 'Assesses system design patterns and architectural decisions',
      checks: ['Design Patterns', 'SOLID Principles', 'Coupling Analysis', 'Scalability'],
      severity: 'Medium',
      color: '#4caf50',
    },
  ];

  const metrics = [
    {
      metric: 'Security Score',
      value: 94,
      description: 'Overall security assessment based on vulnerability analysis',
      color: '#4caf50',
    },
    {
      metric: 'Performance Grade',
      value: 87,
      description: 'Performance efficiency rating including speed and resource usage',
      color: '#2196f3',
    },
    {
      metric: 'Code Quality',
      value: 91,
      description: 'Maintainability and readability assessment',
      color: '#ff9800',
    },
    {
      metric: 'Test Coverage',
      value: 78,
      description: 'Percentage of code covered by automated tests',
      color: '#9c27b0',
    },
  ];

  const reviewFlow = [
    {
      step: 'Code Submission',
      description: 'Submit code for review through Git integration or direct upload',
    },
    {
      step: 'Multi-Agent Analysis',
      description: 'Specialized AI agents analyze different aspects: security, performance, quality',
    },
    {
      step: 'Issue Detection',
      description: 'Identify bugs, vulnerabilities, performance issues, and quality concerns',
    },
    {
      step: 'Recommendations',
      description: 'Generate specific recommendations with code examples and fixes',
    },
    {
      step: 'Report Generation',
      description: 'Comprehensive review report with actionable insights and metrics',
    },
  ];

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
                  label="AI-Powered Code Review Platform"
                  sx={{
                    bgcolor: 'rgba(156, 39, 176, 0.1)',
                    color: '#9C27B0',
                    border: '1px solid rgba(156, 39, 176, 0.3)',
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
                  Review Engine
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
                  Intelligent code review with AI agents that understand context, patterns, and best practices. 
                  Get comprehensive analysis for security, performance, and quality.
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
                    Start Review
                  </Button>
                  <Button
                    component={Link}
                    href="/code-bot"
                    variant="outlined"
                    size="large"
                    sx={{ py: 2, px: 4 }}
                  >
                    Back to Pipeline
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
                Comprehensive Code Analysis
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Multi-dimensional AI review covering security, performance, and quality
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
                            bgcolor: '#9C27B0',
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

      {/* Review Types Section */}
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
                  Review Categories
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Specialized AI agents for different aspects of code quality
                </Typography>
              </Box>
            </motion.div>

            <Grid container spacing={4}>
              {reviewTypes.map((review, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <motion.div variants={fadeInUp}>
                    <Paper sx={{ p: 4, height: '100%', border: `2px solid ${review.color}20` }}>
                      <Box display="flex" alignItems="center" mb={3}>
                        <Box
                          sx={{
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            bgcolor: review.color,
                            mr: 2,
                          }}
                        />
                        <Typography variant="h6" fontWeight="bold">
                          {review.type}
                        </Typography>
                        <Chip 
                          label={review.severity} 
                          size="small" 
                          sx={{ ml: 'auto', bgcolor: `${review.color}20`, color: review.color }}
                        />
                      </Box>
                      
                      <Typography variant="body1" color="text.secondary" mb={3}>
                        {review.description}
                      </Typography>

                      <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
                        Key Checks:
                      </Typography>
                      <List dense>
                        {review.checks.map((check, idx) => (
                          <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 30 }}>
                              <CheckCircle sx={{ fontSize: 16, color: review.color }} />
                            </ListItemIcon>
                            <ListItemText 
                              primary={check} 
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

      {/* Metrics Section */}
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
                Review Metrics
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Quantified insights into your code quality and health
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {metrics.map((metric, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div variants={fadeInUp}>
                  <Paper sx={{ p: 4 }}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                      <Typography variant="h6" fontWeight="bold">
                        {metric.metric}
                      </Typography>
                      <Typography variant="h4" fontWeight="bold" color={metric.color}>
                        {metric.value}%
                      </Typography>
                    </Box>
                    
                    <LinearProgress
                      variant="determinate"
                      value={metric.value}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        mb: 2,
                        bgcolor: `${metric.color}20`,
                        '& .MuiLinearProgress-bar': {
                          bgcolor: metric.color,
                        },
                      }}
                    />
                    
                    <Typography variant="body2" color="text.secondary">
                      {metric.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* How It Works */}
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
                  Review Process
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Automated multi-agent review workflow
                </Typography>
              </Box>
            </motion.div>

            <Grid container spacing={3}>
              {reviewFlow.map((step, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <motion.div variants={fadeInUp}>
                    <Paper sx={{ p: 4, height: '100%', textAlign: 'center' }}>
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          bgcolor: '#9C27B0',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 3,
                          fontSize: '1.5rem',
                          fontWeight: 'bold',
                        }}
                      >
                        {index + 1}
                      </Box>
                      <Typography variant="h6" fontWeight="bold" mb={2}>
                        {step.step}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {step.description}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="md" sx={{ py: { xs: 8, md: 12 } }}>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Box textAlign="center">
            <Typography variant="h3" component="h2" fontWeight="bold" mb={3}>
              Ready for Intelligent Code Review?
            </Typography>
            <Typography variant="h6" color="text.secondary" mb={6}>
              Get comprehensive AI-powered analysis of your code quality, security, and performance.
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
                component={Link}
                href="/code-bot/planning"
                variant="outlined"
                size="large"
                sx={{ py: 2, px: 4 }}
              >
                Next: Planning Studio
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}