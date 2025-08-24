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
  Avatar,
  LinearProgress,
  Stepper,
  Step,
  StepLabel,
  StepContent,
} from '@mui/material';
import {
  PersonAdd,
  Psychology,
  Speed,
  TrendingUp,
  School,
  CheckCircle,
  ArrowForward,
  Person,
  AccessTime,
  Timeline,
  Insights,
  AutoAwesome,
  Adjust,
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

export default function PersonalizationPage() {
  const learningStyles = [
    {
      icon: Psychology,
      style: 'Visual Learners',
      description: 'Learn best through images, diagrams, charts, and visual representations of information.',
      adaptations: ['Rich Infographics', 'Video Content', 'Interactive Diagrams', 'Mind Maps'],
      percentage: 65,
      color: '#2196F3',
    },
    {
      icon: Person,
      style: 'Auditory Learners',
      description: 'Prefer listening to explanations, discussions, and audio-based learning materials.',
      adaptations: ['Audio Narration', 'Podcasts', 'Discussion Forums', 'Voice Explanations'],
      percentage: 30,
      color: '#4CAF50',
    },
    {
      icon: AccessTime,
      style: 'Kinesthetic Learners',
      description: 'Learn through hands-on activities, experiments, and practical applications.',
      adaptations: ['Interactive Simulations', 'Virtual Labs', 'Practical Exercises', 'Real Projects'],
      percentage: 5,
      color: '#FF9800',
    },
  ];

  const personalizationFeatures = [
    {
      icon: Speed,
      title: 'Adaptive Pacing',
      description: 'AI adjusts learning speed based on comprehension rates and individual progress patterns.',
      capabilities: ['Progress Tracking', 'Speed Optimization', 'Difficulty Adjustment', 'Time Management'],
    },
    {
      icon: TrendingUp,
      title: 'Knowledge Gap Analysis',
      description: 'Identifies and addresses specific knowledge gaps with targeted content and remediation.',
      capabilities: ['Gap Detection', 'Targeted Content', 'Skill Assessment', 'Remediation Plans'],
    },
    {
      icon: Insights,
      title: 'Learning Path Optimization',
      description: 'Creates personalized learning sequences based on prerequisites, goals, and preferences.',
      capabilities: ['Path Optimization', 'Goal Alignment', 'Prerequisite Mapping', 'Custom Sequences'],
    },
  ];

  const adaptationTypes = [
    {
      type: 'Content Difficulty',
      description: 'Automatically adjusts content complexity based on learner proficiency',
      examples: ['Beginner explanations with examples', 'Advanced technical depth', 'Simplified language', 'Expert-level challenges'],
      impact: '+40% comprehension',
    },
    {
      type: 'Learning Modality',
      description: 'Adapts presentation format to match individual learning preferences',
      examples: ['Visual diagrams for visual learners', 'Audio explanations for auditory learners', 'Interactive exercises for kinesthetic learners', 'Text summaries for reading preference'],
      impact: '+35% engagement',
    },
    {
      type: 'Pacing & Schedule',
      description: 'Personalizes learning timeline based on availability and absorption rate',
      examples: ['Intensive daily sessions', 'Weekend-focused learning', 'Micro-learning breaks', 'Extended deep-dive sessions'],
      impact: '+50% completion rate',
    },
    {
      type: 'Assessment Style',
      description: 'Customizes evaluation methods to match learner strengths and preferences',
      examples: ['Project-based assessment', 'Multiple choice quizzes', 'Practical demonstrations', 'Peer review exercises'],
      impact: '+30% performance',
    },
  ];

  const personalizationProcess = [
    {
      title: 'Initial Assessment',
      description: 'Comprehensive evaluation of learning style, knowledge level, and preferences',
    },
    {
      title: 'AI Profile Creation',
      description: 'Machine learning algorithms create detailed learner profile and preferences',
    },
    {
      title: 'Content Adaptation',
      description: 'AI customizes all course materials to match individual learning profile',
    },
    {
      title: 'Continuous Monitoring',
      description: 'Real-time tracking of progress, engagement, and learning effectiveness',
    },
    {
      title: 'Dynamic Adjustment',
      description: 'Ongoing refinement of personalization based on learning data and outcomes',
    },
  ];

  const learnerProfiles = [
    {
      name: 'Sarah Chen',
      type: 'Visual + Fast Pace',
      avatar: 'SC',
      adaptations: ['Rich infographics', 'Accelerated content', 'Visual summaries'],
      improvement: '+45% faster completion',
      color: '#2196F3',
    },
    {
      name: 'Mike Rodriguez',
      type: 'Auditory + Deep Learning',
      avatar: 'MR',
      adaptations: ['Audio explanations', 'Extended examples', 'Discussion forums'],
      improvement: '+60% better retention',
      color: '#4CAF50',
    },
    {
      name: 'Alex Kim',
      type: 'Kinesthetic + Project-Based',
      avatar: 'AK',
      adaptations: ['Hands-on labs', 'Real projects', 'Interactive simulations'],
      improvement: '+70% skill application',
      color: '#FF9800',
    },
  ];

  const benefits = [
    'Increase learning effectiveness by up to 70% through personalized adaptation',
    'Improve course completion rates with optimized pacing and difficulty',
    'Enhance engagement through content matched to individual learning preferences',
    'Accelerate skill acquisition with targeted gap analysis and remediation',
    'Provide inclusive learning experiences for diverse learning styles and abilities',
    'Deliver data-driven insights for continuous learning optimization',
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
                  label="AI-Powered Adaptive Learning Platform"
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
                  Learning Personalization
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
                  AI-driven personalization that adapts to individual learning styles, pace, and knowledge gaps. 
                  Create unique learning experiences for every student.
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
                    Start Personalizing
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

      {/* Learning Styles Section */}
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
                Learning Style Adaptation
              </Typography>
              <Typography variant="h6" color="text.secondary">
                AI recognizes and adapts to different learning preferences and styles
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {learningStyles.map((style, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div variants={fadeInUp}>
                  <Card sx={{ height: '100%', border: `2px solid ${style.color}20` }}>
                    <CardContent sx={{ p: 4 }}>
                      <Box display="flex" alignItems="center" mb={3}>
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            bgcolor: style.color,
                            color: 'white',
                            mr: 2,
                          }}
                        >
                          <style.icon />
                        </Box>
                        <Box flex={1}>
                          <Typography variant="h6" fontWeight="bold">
                            {style.style}
                          </Typography>
                          <LinearProgress
                            variant="determinate"
                            value={style.percentage}
                            sx={{
                              mt: 1,
                              height: 6,
                              borderRadius: 3,
                              bgcolor: `${style.color}20`,
                              '& .MuiLinearProgress-bar': {
                                bgcolor: style.color,
                              },
                            }}
                          />
                          <Typography variant="caption" color="text.secondary">
                            {style.percentage}% of learners
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Typography variant="body1" color="text.secondary" mb={3} sx={{ lineHeight: 1.6 }}>
                        {style.description}
                      </Typography>

                      <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
                        AI Adaptations:
                      </Typography>
                      <Box>
                        {style.adaptations.map((adaptation, idx) => (
                          <Chip
                            key={idx}
                            label={adaptation}
                            size="small"
                            sx={{ 
                              mr: 1, 
                              mb: 1,
                              bgcolor: `${style.color}15`,
                              color: style.color,
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

      {/* Personalization Features */}
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
                  Adaptive Learning Features
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Intelligent personalization across all aspects of the learning experience
                </Typography>
              </Box>
            </motion.div>

            <Grid container spacing={4}>
              {personalizationFeatures.map((feature, index) => (
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
      </Box>

      {/* Adaptation Types */}
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
                Personalization Categories
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Comprehensive adaptation across all learning dimensions
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {adaptationTypes.map((type, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div variants={fadeInUp}>
                  <Paper sx={{ p: 4, height: '100%' }}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                      <Typography variant="h6" fontWeight="bold">
                        {type.type}
                      </Typography>
                      <Chip 
                        label={type.impact} 
                        size="small" 
                        sx={{ bgcolor: '#9C27B020', color: '#9C27B0', fontWeight: 'bold' }}
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
                            <CheckCircle sx={{ fontSize: 16, color: '#9C27B0' }} />
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

      {/* Personalization Process */}
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
                  Personalization Process
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  How AI creates and maintains personalized learning experiences
                </Typography>
              </Box>
            </motion.div>

            <Grid container>
              <Grid item xs={12} md={8} mx="auto">
                <motion.div variants={fadeInUp}>
                  <Stepper orientation="vertical">
                    {personalizationProcess.map((step, index) => (
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

      {/* Learner Profiles */}
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
                Personalized Success Stories
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Real examples of how personalization improves learning outcomes
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {learnerProfiles.map((profile, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div variants={fadeInUp}>
                  <Paper sx={{ p: 4, textAlign: 'center', border: `2px solid ${profile.color}20` }}>
                    <Avatar 
                      sx={{ 
                        width: 64, 
                        height: 64, 
                        bgcolor: profile.color, 
                        mx: 'auto', 
                        mb: 2,
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                      }}
                    >
                      {profile.avatar}
                    </Avatar>
                    <Typography variant="h6" fontWeight="bold" mb={1}>
                      {profile.name}
                    </Typography>
                    <Typography variant="subtitle1" color={profile.color} mb={3} fontWeight={500}>
                      {profile.type}
                    </Typography>
                    
                    <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
                      AI Adaptations:
                    </Typography>
                    <Box mb={3}>
                      {profile.adaptations.map((adaptation, idx) => (
                        <Chip
                          key={idx}
                          label={adaptation}
                          size="small"
                          sx={{ 
                            mr: 1, 
                            mb: 1,
                            bgcolor: `${profile.color}15`,
                            color: profile.color,
                          }}
                        />
                      ))}
                    </Box>

                    <Box sx={{ bgcolor: `${profile.color}15`, p: 2, borderRadius: 2 }}>
                      <Typography variant="body2" fontWeight="bold" color={profile.color}>
                        {profile.improvement}
                      </Typography>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* Benefits & CTA */}
      <Box sx={{ bgcolor: 'background.paper', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Box display="flex" alignItems="center" mb={4}>
                  <AutoAwesome sx={{ fontSize: '2rem', color: '#9C27B0', mr: 2 }} />
                  <Typography variant="h4" fontWeight="bold">
                    Personalization Benefits
                  </Typography>
                </Box>

                <List>
                  {benefits.map((benefit, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: '#9C27B0' }} />
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
                    background: 'linear-gradient(135deg, rgba(156, 39, 176, 0.1) 0%, rgba(171, 71, 188, 0.1) 100%)',
                    borderRadius: 3,
                    border: '1px solid rgba(156, 39, 176, 0.2)',
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                    Ready for Personalized Learning?
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                    Create adaptive learning experiences that adjust to every individual's needs, preferences, and goals.
                  </Typography>
                  <Box display="flex" gap={2} justifyContent="center" flexWrap="wrap">
                    <Button
                      component={Link}
                      href="/auth/signup"
                      variant="contained"
                      size="large"
                      endIcon={<ArrowForward />}
                      sx={{
                        background: 'linear-gradient(135deg, #9C27B0 0%, #AB47BC 100%)',
                      }}
                    >
                      Start Free Trial
                    </Button>
                    <Button
                      component={Link}
                      href="/lms/delivery"
                      variant="outlined"
                      size="large"
                      sx={{
                        borderColor: '#9C27B0',
                        color: '#9C27B0',
                      }}
                    >
                      Next: Content Delivery
                    </Button>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}