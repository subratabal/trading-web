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
  Tab,
  Tabs,
  LinearProgress,
} from '@mui/material';
import {
  Code,
  SmartToy,
  Build,
  Integration,
  TestTube,
  Description,
  CheckCircle,
  ArrowForward,
  Psychology,
  AutoAwesome,
  Speed,
  Memory,
} from '@mui/icons-material';
import Link from 'next/link';
import { useState } from 'react';

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

export default function CodingEnginePage() {
  const [selectedTab, setSelectedTab] = useState(0);

  const agents = [
    {
      icon: Psychology,
      name: 'Architect Agent',
      role: 'System Design',
      description: 'Designs overall system architecture, creates component structure, and defines interfaces.',
      capabilities: ['System Architecture', 'Component Design', 'Interface Definition', 'Pattern Selection'],
      color: '#2196F3',
    },
    {
      icon: Code,
      name: 'Code Agent',
      role: 'Implementation',
      description: 'Generates production-ready code in multiple languages with best practices and optimization.',
      capabilities: ['Multi-Language Code', 'Algorithm Implementation', 'Optimization', 'Error Handling'],
      color: '#4CAF50',
    },
    {
      icon: TestTube,
      name: 'Test Agent',
      role: 'Quality Assurance',
      description: 'Creates comprehensive test suites including unit tests, integration tests, and end-to-end testing.',
      capabilities: ['Unit Testing', 'Integration Tests', 'E2E Testing', 'Test Automation'],
      color: '#FF9800',
    },
    {
      icon: Description,
      name: 'Documentation Agent',
      role: 'Documentation',
      description: 'Generates technical documentation, API docs, and code comments automatically.',
      capabilities: ['API Documentation', 'Code Comments', 'User Guides', 'Technical Specs'],
      color: '#9C27B0',
    },
  ];

  const languages = [
    { name: 'Python', proficiency: 95, icon: '🐍' },
    { name: 'JavaScript/TypeScript', proficiency: 93, icon: '⚡' },
    { name: 'Java', proficiency: 90, icon: '☕' },
    { name: 'C#', proficiency: 88, icon: '💎' },
    { name: 'Go', proficiency: 85, icon: '🚀' },
    { name: 'Rust', proficiency: 82, icon: '🦀' },
    { name: 'PHP', proficiency: 87, icon: '🐘' },
    { name: 'Swift', proficiency: 83, icon: '🍎' },
  ];

  const codeTypes = [
    {
      category: 'Web Applications',
      description: 'Full-stack web applications with modern frameworks',
      examples: ['React/Next.js Apps', 'Vue/Nuxt Applications', 'Django/FastAPI', 'Express.js APIs'],
      complexity: 'High',
    },
    {
      category: 'Mobile Apps',
      description: 'Cross-platform and native mobile applications',
      examples: ['React Native', 'Flutter', 'iOS Swift', 'Android Kotlin'],
      complexity: 'High',
    },
    {
      category: 'APIs & Microservices',
      description: 'RESTful APIs, GraphQL endpoints, and microservice architectures',
      examples: ['REST APIs', 'GraphQL Services', 'gRPC Services', 'Event-Driven Architecture'],
      complexity: 'Medium',
    },
    {
      category: 'Data & Analytics',
      description: 'Data processing, analytics, and machine learning implementations',
      examples: ['ETL Pipelines', 'ML Models', 'Data Visualization', 'Real-time Analytics'],
      complexity: 'High',
    },
    {
      category: 'DevOps & Infrastructure',
      description: 'Infrastructure automation and deployment scripts',
      examples: ['Docker Containers', 'Kubernetes Configs', 'Terraform Scripts', 'CI/CD Pipelines'],
      complexity: 'Medium',
    },
    {
      category: 'Utilities & Scripts',
      description: 'Automation scripts and utility applications',
      examples: ['CLI Tools', 'Automation Scripts', 'Data Converters', 'System Utilities'],
      complexity: 'Low',
    },
  ];

  const workflow = [
    {
      step: 'Requirements Analysis',
      description: 'AI analyzes technical requirements and breaks down into development tasks',
      duration: '2-5 min',
    },
    {
      step: 'Architecture Design',
      description: 'Architect Agent designs system structure and component relationships',
      duration: '5-10 min',
    },
    {
      step: 'Code Generation',
      description: 'Code Agent generates implementation across multiple files and modules',
      duration: '10-30 min',
    },
    {
      step: 'Test Creation',
      description: 'Test Agent creates comprehensive test suites with high coverage',
      duration: '5-15 min',
    },
    {
      step: 'Documentation',
      description: 'Documentation Agent generates technical docs and API references',
      duration: '3-8 min',
    },
    {
      step: 'Integration & Optimization',
      description: 'All agents collaborate to integrate components and optimize performance',
      duration: '5-10 min',
    },
  ];

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

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
                  label="Multi-Agent Code Generation Platform"
                  sx={{
                    bgcolor: 'rgba(0, 188, 212, 0.1)',
                    color: '#00BCD4',
                    border: '1px solid rgba(0, 188, 212, 0.3)',
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
                  Coding Engine
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
                  Production-ready code generation with specialized AI agents working collaboratively. 
                  From architecture to implementation, testing to documentation - all automated.
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
                    Start Coding
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

      {/* AI Agents Section */}
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
                Specialized AI Agents
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Four expert agents working together for complete code generation
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {agents.map((agent, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div variants={fadeInUp}>
                  <Card sx={{ height: '100%', border: `2px solid ${agent.color}20` }}>
                    <CardContent sx={{ p: 4 }}>
                      <Box display="flex" alignItems="center" mb={3}>
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            bgcolor: agent.color,
                            color: 'white',
                            mr: 2,
                          }}
                        >
                          <agent.icon />
                        </Box>
                        <Box>
                          <Typography variant="h6" fontWeight="bold">
                            {agent.name}
                          </Typography>
                          <Typography variant="subtitle2" color={agent.color}>
                            {agent.role}
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Typography variant="body1" color="text.secondary" mb={3} sx={{ lineHeight: 1.6 }}>
                        {agent.description}
                      </Typography>

                      <Box>
                        {agent.capabilities.map((capability, idx) => (
                          <Chip
                            key={idx}
                            label={capability}
                            size="small"
                            sx={{ 
                              mr: 1, 
                              mb: 1,
                              bgcolor: `${agent.color}15`,
                              color: agent.color,
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

      {/* Language Support */}
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
                  Language Proficiency
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Expert-level code generation across 50+ programming languages
                </Typography>
              </Box>
            </motion.div>

            <Grid container spacing={3}>
              {languages.map((language, index) => (
                <Grid item xs={12} md={6} lg={3} key={index}>
                  <motion.div variants={fadeInUp}>
                    <Paper sx={{ p: 3, textAlign: 'center' }}>
                      <Typography variant="h4" sx={{ mb: 1 }}>
                        {language.icon}
                      </Typography>
                      <Typography variant="h6" fontWeight="bold" mb={2}>
                        {language.name}
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={language.proficiency}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          mb: 1,
                          bgcolor: '#00BCD420',
                          '& .MuiLinearProgress-bar': {
                            bgcolor: '#00BCD4',
                          },
                        }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {language.proficiency}% Proficiency
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Code Types */}
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
                What We Can Build
              </Typography>
              <Typography variant="h6" color="text.secondary">
                From simple scripts to complex enterprise applications
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {codeTypes.map((type, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div variants={fadeInUp}>
                  <Paper sx={{ p: 4, height: '100%' }}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                      <Typography variant="h6" fontWeight="bold">
                        {type.category}
                      </Typography>
                      <Chip 
                        label={type.complexity} 
                        size="small" 
                        color={type.complexity === 'High' ? 'error' : type.complexity === 'Medium' ? 'warning' : 'success'}
                      />
                    </Box>
                    
                    <Typography variant="body1" color="text.secondary" mb={3}>
                      {type.description}
                    </Typography>

                    <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
                      Examples:
                    </Typography>
                    <List dense>
                      {type.examples.map((example, idx) => (
                        <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 30 }}>
                            <CheckCircle sx={{ fontSize: 16, color: '#00BCD4' }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary={example} 
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

      {/* Workflow */}
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
                  Development Workflow
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Automated multi-agent development process
                </Typography>
              </Box>
            </motion.div>

            <Grid container spacing={3}>
              {workflow.map((step, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <motion.div variants={fadeInUp}>
                    <Paper sx={{ p: 4, height: '100%', textAlign: 'center' }}>
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          bgcolor: '#00BCD4',
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
                      <Typography variant="h6" fontWeight="bold" mb={1}>
                        {step.step}
                      </Typography>
                      <Chip 
                        label={step.duration} 
                        size="small" 
                        sx={{ mb: 2, bgcolor: '#00BCD420', color: '#00BCD4' }}
                      />
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
              Ready to Generate Production Code?
            </Typography>
            <Typography variant="h6" color="text.secondary" mb={6}>
              Experience the power of multi-agent code generation with comprehensive testing and documentation.
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
                href="/code-bot/cicd"
                variant="outlined"
                size="large"
                sx={{ py: 2, px: 4 }}
              >
                Next: CI/CD Pipeline
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}