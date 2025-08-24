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
  Stepper,
  Step,
  StepLabel,
  StepContent,
} from '@mui/material';
import {
  Lightbulb,
  AutoAwesome,
  TrendingUp,
  Psychology,
  CheckCircle,
  ArrowForward,
  PlayArrow,
  Create,
  Search,
  Assessment,
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

export default function IdeationHubPage() {
  const features = [
    {
      icon: Psychology,
      title: 'Natural Language Processing',
      description: 'Convert abstract ideas and business requirements into detailed technical specifications using advanced NLP.',
      capabilities: ['Requirement Extraction', 'Context Understanding', 'Technical Translation'],
    },
    {
      icon: Search,
      title: 'Market Research AI',
      description: 'Automated competitive analysis and market research to validate ideas and identify opportunities.',
      capabilities: ['Competitor Analysis', 'Market Trends', 'Opportunity Assessment'],
    },
    {
      icon: Assessment,
      title: 'Feasibility Analysis',
      description: 'AI-powered technical and business feasibility assessment with risk analysis and timeline estimation.',
      capabilities: ['Technical Feasibility', 'Resource Planning', 'Risk Assessment'],
    },
  ];

  const workflow = [
    {
      title: 'Idea Input',
      description: 'Describe your idea in natural language - from a simple sentence to detailed requirements',
    },
    {
      title: 'AI Analysis',
      description: 'Advanced AI analyzes your idea, extracts key concepts, and identifies technical requirements',
    },
    {
      title: 'Market Research',
      description: 'Automated research on similar solutions, market trends, and competitive landscape',
    },
    {
      title: 'Feasibility Assessment',
      description: 'Technical feasibility analysis with resource estimation and timeline projection',
    },
    {
      title: 'Requirement Generation',
      description: 'Detailed technical requirements, user stories, and project specifications',
    },
  ];

  const examples = [
    {
      input: '"Create a mobile app for restaurant reservations with real-time availability"',
      output: 'Complete technical specification including API requirements, database schema, user flows, and integration needs',
    },
    {
      input: '"Build an AI-powered customer service chatbot for e-commerce"',
      output: 'Detailed requirements for NLP models, integration points, training data needs, and deployment architecture',
    },
    {
      input: '"Develop a dashboard for monitoring IoT sensor data with alerts"',
      output: 'System architecture for real-time data processing, visualization requirements, and alerting mechanisms',
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
                  label="AI-Powered Ideation Platform"
                  sx={{
                    bgcolor: 'rgba(255, 152, 0, 0.1)',
                    color: '#FF9800',
                    border: '1px solid rgba(255, 152, 0, 0.3)',
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
                  Ideation Hub
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
                  Transform abstract ideas into detailed technical requirements with AI-powered analysis, 
                  market research, and feasibility assessment.
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
                    Start Ideating
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
                AI-Powered Idea Analysis
              </Typography>
              <Typography variant="h6" color="text.secondary">
                From concept to comprehensive requirements in minutes
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
                            bgcolor: '#FF9800',
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
                  How Ideation Works
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Step-by-step AI-powered idea transformation
                </Typography>
              </Box>
            </motion.div>

            <Grid container>
              <Grid item xs={12} md={8} mx="auto">
                <motion.div variants={fadeInUp}>
                  <Stepper orientation="vertical">
                    {workflow.map((step, index) => (
                      <Step key={index} active={true}>
                        <StepLabel>
                          <Typography variant="h6" fontWeight="bold">
                            {step.title}
                          </Typography>
                        </StepLabel>
                        <StepContent>
                          <Typography variant="body1" color="text.secondary" sx={{ pb: 2 }}>
                            {step.description}
                          </Typography>
                        </StepContent>
                      </Step>
                    ))}
                  </Stepper>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Examples Section */}
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
                Real Examples
              </Typography>
              <Typography variant="h6" color="text.secondary">
                See how simple ideas become detailed requirements
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {examples.map((example, index) => (
              <Grid item xs={12} key={index}>
                <motion.div variants={fadeInUp}>
                  <Paper sx={{ p: 4 }}>
                    <Grid container spacing={3} alignItems="center">
                      <Grid item xs={12} md={5}>
                        <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 3, borderRadius: 2 }}>
                          <Typography variant="subtitle2" sx={{ mb: 1, opacity: 0.8 }}>
                            Input:
                          </Typography>
                          <Typography variant="body1">
                            {example.input}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={2} sx={{ textAlign: 'center' }}>
                        <ArrowForward sx={{ fontSize: '2rem', color: 'primary.main' }} />
                      </Grid>
                      <Grid item xs={12} md={5}>
                        <Box sx={{ bgcolor: 'success.main', color: 'white', p: 3, borderRadius: 2 }}>
                          <Typography variant="subtitle2" sx={{ mb: 1, opacity: 0.8 }}>
                            Output:
                          </Typography>
                          <Typography variant="body1">
                            {example.output}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
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
                Ready to Transform Your Ideas?
              </Typography>
              <Typography variant="h6" color="text.secondary" mb={6}>
                Start turning your concepts into detailed technical requirements with AI-powered analysis.
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
                  href="/code-bot/review"
                  variant="outlined"
                  size="large"
                  sx={{ py: 2, px: 4 }}
                >
                  Next: Review Engine
                </Button>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}