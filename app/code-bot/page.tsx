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
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import {
  Psychology,
  Code,
  AutoAwesome,
  Speed,
  CheckCircle,
  ArrowForward,
  ExpandMore,
  Build,
  Security,
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

export default function CodeBotPage() {
  const features = useMemo(() => [
    {
      icon: Psychology,
      title: 'Multi-Agent Orchestration',
      description: 'Advanced AI agents work collaboratively to develop, test, and deploy trading strategies automatically.',
      capabilities: ['Task decomposition', 'Parallel execution', 'Error recovery'],
    },
    {
      icon: Code,
      title: 'Autonomous Code Generation',
      description: 'Generate production-ready trading algorithms from natural language descriptions and market requirements.',
      capabilities: ['Natural language input', 'Code optimization', 'Best practices'],
    },
    {
      icon: AutoAwesome,
      title: 'Intelligent Optimization',
      description: 'Continuously optimize trading strategies based on market performance and risk metrics.',
      capabilities: ['Performance tuning', 'Risk optimization', 'Backtesting'],
    },
  ], []);

  const useCases = useMemo(() => [
    {
      title: 'Strategy Development',
      description: 'Generate complete trading strategies from high-level requirements',
      example: '"Create a momentum trading strategy for tech stocks with 2% stop-loss"',
      output: 'Full Python trading algorithm with risk management',
    },
    {
      title: 'Risk Management',
      description: 'Implement sophisticated risk controls and position sizing',
      example: '"Add portfolio-level risk limits with VaR calculation"',
      output: 'Risk management module with real-time monitoring',
    },
    {
      title: 'Market Analysis',
      description: 'Build custom market analysis and signal generation systems',
      example: '"Analyze correlation between crypto and equity markets"',
      output: 'Statistical analysis with visualization dashboard',
    },
    {
      title: 'Integration & Deployment',
      description: 'Seamlessly integrate with existing trading infrastructure',
      example: '"Deploy strategy to production with monitoring"',
      output: 'Containerized deployment with CI/CD pipeline',
    },
  ], []);

  const workflow = useMemo(() => [
    {
      step: '1',
      title: 'Natural Language Input',
      description: 'Describe your trading strategy or requirement in plain English',
    },
    {
      step: '2',
      title: 'AI Analysis & Planning',
      description: 'Multi-agent system analyzes requirements and creates implementation plan',
    },
    {
      step: '3',
      title: 'Code Generation',
      description: 'Autonomous agents generate, test, and optimize the trading code',
    },
    {
      step: '4',
      title: 'Validation & Testing',
      description: 'Comprehensive backtesting and validation against historical data',
    },
    {
      step: '5',
      title: 'Deployment',
      description: 'Automated deployment with monitoring and performance tracking',
    },
  ], []);

  const benefits = useMemo(() => [
    'Reduce development time from weeks to hours with AI-powered code generation',
    'Eliminate coding errors through automated testing and validation',
    'Scale strategy development without proportional increase in developers',
    'Maintain consistency across all trading algorithms and risk controls',
    'Accelerate time-to-market for new trading opportunities',
    'Enable non-technical traders to implement sophisticated strategies',
  ], []);

  const faqs = useMemo(() => [
    {
      question: 'How does multi-agent orchestration work?',
      answer: 'Our system uses specialized AI agents that work together - one for requirements analysis, another for code generation, another for testing, and so on. They communicate through a standardized protocol to ensure seamless collaboration.',
    },
    {
      question: 'What programming languages are supported?',
      answer: 'Our Code Bot primarily generates Python code optimized for trading applications, with support for popular libraries like pandas, numpy, and specialized trading frameworks. We also support integration with R, C++, and other languages as needed.',
    },
    {
      question: 'How accurate is the generated code?',
      answer: 'Our AI agents achieve 90%+ accuracy for common trading strategies and include comprehensive testing suites. All generated code undergoes automated validation and can be reviewed before deployment.',
    },
    {
      question: 'Can it integrate with our existing systems?',
      answer: 'Yes, our Code Bot can generate integration code for most major trading platforms, databases, and market data providers. It follows industry standards and best practices for seamless integration.',
    },
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
                  label="Autonomous AI Development Platform"
                  sx={{
                    bgcolor: 'rgba(156, 39, 176, 0.1)',
                    color: '#ab47bc',
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
                  AI Code Bot Platform
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
                  Transform natural language requirements into production-ready trading algorithms. 
                  Multi-agent orchestration for autonomous strategy development and deployment.
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
                    Start Building
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{ py: 2, px: 4 }}
                  >
                    Watch Demo
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
                AI-Powered Development
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Advanced multi-agent systems for autonomous code generation
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
                            bgcolor: '#ab47bc',
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

      {/* Workflow Section */}
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
                  How It Works
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  From idea to deployment in minutes, not months
                </Typography>
              </Box>
            </motion.div>

            <Grid container spacing={3}>
              {workflow.map((item, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <motion.div variants={fadeInUp}>
                    <Paper sx={{ p: 4, height: '100%', textAlign: 'center' }}>
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          bgcolor: '#ab47bc',
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
                        {item.step}
                      </Box>
                      <Typography variant="h6" fontWeight="bold" mb={2}>
                        {item.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {item.description}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Use Cases */}
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
                Real-World Use Cases
              </Typography>
              <Typography variant="h6" color="text.secondary">
                See how AI Code Bot transforms trading strategy development
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {useCases.map((useCase, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div variants={fadeInUp}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent sx={{ p: 4 }}>
                      <Typography variant="h6" fontWeight="bold" mb={2}>
                        {useCase.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" mb={3}>
                        {useCase.description}
                      </Typography>
                      
                      <Box sx={{ bgcolor: 'background.default', p: 2, borderRadius: 1, mb: 2 }}>
                        <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'primary.main' }}>
                          Input: {useCase.example}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ bgcolor: 'success.main', color: 'success.contrastText', p: 2, borderRadius: 1 }}>
                        <Typography variant="body2">
                          Output: {useCase.output}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* Benefits & FAQ */}
      <Box sx={{ bgcolor: 'background.paper', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Box display="flex" alignItems="center" mb={4}>
                  <Build sx={{ fontSize: '2rem', color: '#ab47bc', mr: 2 }} />
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
                <Typography variant="h4" fontWeight="bold" mb={4}>
                  Frequently Asked Questions
                </Typography>

                {faqs.map((faq, index) => (
                  <Accordion key={index} sx={{ mb: 1 }}>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography variant="body1" fontWeight={600}>
                        {faq.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body2" color="text.secondary">
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </motion.div>
            </Grid>
          </Grid>
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
              Ready to Accelerate Development?
            </Typography>
            <Typography variant="h6" color="text.secondary" mb={6}>
              Join the future of automated trading strategy development with AI Code Bot.
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
                Book Demo
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}