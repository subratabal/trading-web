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
  AutoAwesome,
  Article,
  VideoLibrary,
  Quiz,
  Image,
  AudioFile,
  Code,
  CheckCircle,
  ArrowForward,
  Create,
  Translate,
  Speed,
  Psychology,
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

export default function ContentGenerationPage() {
  const [selectedTab, setSelectedTab] = useState(0);

  const contentTypes = [
    {
      icon: Article,
      title: 'Text Content',
      description: 'Comprehensive written materials including lessons, guides, and documentation with adaptive complexity.',
      capabilities: ['Lesson Content', 'Study Guides', 'Reference Materials', 'Adaptive Complexity'],
      color: '#2196F3',
      generation: '95%',
    },
    {
      icon: VideoLibrary,
      title: 'Video Content',
      description: 'AI-generated educational videos with narration, animations, and interactive elements.',
      capabilities: ['Animated Explainers', 'Screen Recordings', 'Interactive Videos', 'Multi-Language'],
      color: '#4CAF50',
      generation: '88%',
    },
    {
      icon: Quiz,
      title: 'Assessments',
      description: 'Dynamic quizzes, tests, and interactive assessments with automatic grading and feedback.',
      capabilities: ['Multiple Choice', 'Interactive Exercises', 'Practical Assignments', 'Adaptive Testing'],
      color: '#FF9800',
      generation: '92%',
    },
    {
      icon: Image,
      title: 'Visual Content',
      description: 'Custom graphics, diagrams, infographics, and interactive visual learning materials.',
      capabilities: ['Infographics', 'Diagrams', 'Interactive Charts', 'Custom Graphics'],
      color: '#9C27B0',
      generation: '85%',
    },
    {
      icon: AudioFile,
      title: 'Audio Content',
      description: 'High-quality narration, podcasts, and audio explanations in multiple languages and voices.',
      capabilities: ['AI Narration', 'Podcast Format', 'Music Integration', 'Voice Synthesis'],
      color: '#00BCD4',
      generation: '90%',
    },
    {
      icon: Code,
      title: 'Interactive Elements',
      description: 'Coding exercises, simulations, virtual labs, and hands-on interactive learning experiences.',
      capabilities: ['Code Exercises', 'Simulations', 'Virtual Labs', 'Interactive Demos'],
      color: '#795548',
      generation: '87%',
    },
  ];

  const subjects = [
    { name: 'Computer Science', proficiency: 95, examples: ['Programming', 'Algorithms', 'Database Design'] },
    { name: 'Mathematics', proficiency: 93, examples: ['Calculus', 'Statistics', 'Linear Algebra'] },
    { name: 'Business & Management', proficiency: 90, examples: ['Leadership', 'Strategy', 'Finance'] },
    { name: 'Science & Engineering', proficiency: 88, examples: ['Physics', 'Chemistry', 'Engineering'] },
    { name: 'Digital Marketing', proficiency: 92, examples: ['SEO', 'Social Media', 'Analytics'] },
    { name: 'Data Science', proficiency: 94, examples: ['Machine Learning', 'Data Analysis', 'Visualization'] },
    { name: 'Design & Creative', proficiency: 85, examples: ['UI/UX', 'Graphic Design', 'Video Production'] },
    { name: 'Languages', proficiency: 87, examples: ['Grammar', 'Conversation', 'Writing'] },
  ];

  const generationFeatures = [
    {
      icon: Psychology,
      title: 'Intelligent Content Planning',
      description: 'AI analyzes learning objectives and creates optimal content structure with proper sequencing.',
      capabilities: ['Learning Objectives', 'Content Sequencing', 'Difficulty Progression', 'Skill Dependencies'],
    },
    {
      icon: Translate,
      title: 'Multi-Language Support',
      description: 'Generate content in 50+ languages with cultural adaptation and localized examples.',
      capabilities: ['50+ Languages', 'Cultural Adaptation', 'Localized Examples', 'Regional Compliance'],
    },
    {
      icon: Speed,
      title: 'Rapid Generation',
      description: 'Create comprehensive course content in minutes with quality assurance and fact-checking.',
      capabilities: ['Rapid Creation', 'Quality Assurance', 'Fact Checking', 'Source Validation'],
    },
  ];

  const workflow = [
    {
      step: 'Input Specification',
      description: 'Define topic, audience, learning objectives, and content preferences',
      duration: '2-5 min',
    },
    {
      step: 'Content Planning',
      description: 'AI creates comprehensive content outline with optimal learning progression',
      duration: '3-8 min',
    },
    {
      step: 'Multi-Modal Generation',
      description: 'Simultaneous creation of text, video, audio, and interactive content',
      duration: '10-30 min',
    },
    {
      step: 'Quality Assurance',
      description: 'Automated fact-checking, quality review, and content optimization',
      duration: '5-10 min',
    },
    {
      step: 'Integration & Assembly',
      description: 'Combine all content types into cohesive learning modules',
      duration: '3-7 min',
    },
    {
      step: 'Final Review & Export',
      description: 'Content review, formatting, and export to various platforms',
      duration: '2-5 min',
    },
  ];

  const examples = [
    {
      input: '"Create a Python programming course for beginners"',
      output: '12-module course with video tutorials, coding exercises, quizzes, and project assignments',
    },
    {
      input: '"Digital marketing fundamentals for small business owners"',
      output: 'Interactive course with case studies, practical exercises, templates, and assessment tools',
    },
    {
      input: '"Financial literacy for college students"',
      output: 'Engaging course with infographics, real-life scenarios, calculators, and progress tracking',
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
                  label="AI-Powered Multi-Modal Content Generation"
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
                  Content Generation Engine
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
                  Create comprehensive course content with AI automation. From text and videos to interactive 
                  exercises and assessments - all generated intelligently for any subject matter.
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
                    Start Generating
                  </Button>
                  <Button
                    component={Link}
                    href="/lms"
                    variant="outlined"
                    size="large"
                    sx={{ py: 2, px: 4 }}
                  >
                    Back to Platform
                  </Button>
                </Box>
              </Box>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* Content Types Section */}
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
                Multi-Modal Content Creation
              </Typography>
              <Typography variant="h6" color="text.secondary">
                AI-powered generation of all content types for comprehensive learning experiences
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {contentTypes.map((type, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <motion.div variants={fadeInUp}>
                  <Card sx={{ height: '100%', border: `2px solid ${type.color}20` }}>
                    <CardContent sx={{ p: 4 }}>
                      <Box display="flex" alignItems="center" mb={3}>
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            bgcolor: type.color,
                            color: 'white',
                            mr: 2,
                          }}
                        >
                          <type.icon />
                        </Box>
                        <Box flex={1}>
                          <Typography variant="h6" fontWeight="bold">
                            {type.title}
                          </Typography>
                          <LinearProgress
                            variant="determinate"
                            value={type.generation}
                            sx={{
                              mt: 1,
                              height: 6,
                              borderRadius: 3,
                              bgcolor: `${type.color}20`,
                              '& .MuiLinearProgress-bar': {
                                bgcolor: type.color,
                              },
                            }}
                          />
                          <Typography variant="caption" color="text.secondary">
                            {type.generation}% AI Generation Rate
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Typography variant="body1" color="text.secondary" mb={3} sx={{ lineHeight: 1.6 }}>
                        {type.description}
                      </Typography>

                      <Box>
                        {type.capabilities.map((capability, idx) => (
                          <Chip
                            key={idx}
                            label={capability}
                            size="small"
                            sx={{ 
                              mr: 1, 
                              mb: 1,
                              bgcolor: `${type.color}15`,
                              color: type.color,
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

      {/* Subject Expertise */}
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
                  Subject Matter Expertise
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  AI-powered content generation across diverse academic and professional domains
                </Typography>
              </Box>
            </motion.div>

            <Grid container spacing={3}>
              {subjects.map((subject, index) => (
                <Grid item xs={12} md={6} lg={3} key={index}>
                  <motion.div variants={fadeInUp}>
                    <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                      <Typography variant="h6" fontWeight="bold" mb={2}>
                        {subject.name}
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={subject.proficiency}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          mb: 2,
                          bgcolor: '#FF980020',
                          '& .MuiLinearProgress-bar': {
                            bgcolor: '#FF9800',
                          },
                        }}
                      />
                      <Typography variant="body2" color="text.secondary" mb={2}>
                        {subject.proficiency}% Content Quality
                      </Typography>
                      <Box>
                        {subject.examples.map((example, idx) => (
                          <Chip
                            key={idx}
                            label={example}
                            size="small"
                            sx={{ mr: 0.5, mb: 0.5, fontSize: '0.75rem' }}
                            variant="outlined"
                          />
                        ))}
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Generation Features */}
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
                Advanced Generation Features
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Intelligent content creation with quality assurance and optimization
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {generationFeatures.map((feature, index) => (
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
                  Content Generation Workflow
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Automated end-to-end content creation process
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
                          bgcolor: '#FF9800',
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
                        sx={{ mb: 2, bgcolor: '#FF980020', color: '#FF9800' }}
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

      {/* Examples */}
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
                Real Generation Examples
              </Typography>
              <Typography variant="h6" color="text.secondary">
                See how simple inputs become comprehensive courses
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
                            Generated Output:
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
                Ready to Generate Amazing Content?
              </Typography>
              <Typography variant="h6" color="text.secondary" mb={6}>
                Create comprehensive, engaging course content in minutes with AI-powered automation.
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
                  href="/lms/personalization"
                  variant="outlined"
                  size="large"
                  sx={{ py: 2, px: 4 }}
                >
                  Next: Personalization
                </Button>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}