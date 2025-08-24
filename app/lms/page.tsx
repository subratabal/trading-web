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
  LinearProgress,
  Avatar,
  Rating,
} from '@mui/material';
import {
  School,
  MenuBook,
  Quiz,
  CheckCircle,
  ArrowForward,
  PlayCircle,
  Group,
  TrendingUp,
  Security,
  Code,
  VerifiedUser,
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

export default function LMSPage() {
  const features = useMemo(() => [
    {
      icon: MenuBook,
      title: 'Comprehensive Curriculum',
      description: 'From basic trading concepts to advanced AI strategy development, covering all aspects of quantitative trading.',
      highlights: ['200+ courses', 'Expert instructors', 'Updated content'],
    },
    {
      icon: Quiz,
      title: 'Interactive Learning',
      description: 'Hands-on exercises, real market simulations, and practical coding labs for immersive learning experience.',
      highlights: ['Live simulations', 'Coding labs', 'Real-time feedback'],
    },
    {
      icon: VerifiedUser,
      title: 'Industry Certification',
      description: 'Earn recognized certifications in AI trading, risk management, and quantitative analysis.',
      highlights: ['Industry recognized', 'Career advancement', 'Skill validation'],
    },
  ], []);

  const courses = useMemo(() => [
    {
      title: 'AI Trading Fundamentals',
      level: 'Beginner',
      duration: '8 weeks',
      modules: 24,
      rating: 4.8,
      students: 2847,
      price: 'Free',
      description: 'Master the basics of AI-powered trading systems and quantitative analysis.',
      topics: ['Market basics', 'Data analysis', 'Risk concepts', 'Trading psychology'],
    },
    {
      title: 'Advanced Algorithm Development',
      level: 'Advanced',
      duration: '12 weeks',
      modules: 36,
      rating: 4.9,
      students: 1523,
      price: '$299',
      description: 'Build sophisticated trading algorithms using machine learning and AI.',
      topics: ['ML models', 'Strategy coding', 'Backtesting', 'Optimization'],
    },
    {
      title: 'Risk Management & Compliance',
      level: 'Intermediate',
      duration: '6 weeks',
      modules: 18,
      rating: 4.7,
      students: 3241,
      price: '$199',
      description: 'Comprehensive guide to trading risk management and regulatory compliance.',
      topics: ['Risk metrics', 'Compliance rules', 'Portfolio theory', 'Stress testing'],
    },
    {
      title: 'Multi-Agent Systems',
      level: 'Expert',
      duration: '10 weeks',
      modules: 30,
      rating: 4.9,
      students: 892,
      price: '$499',
      description: 'Design and implement multi-agent orchestration for trading systems.',
      topics: ['Agent design', 'Orchestration', 'Communication', 'Deployment'],
    },
  ], []);

  const learningPaths = useMemo(() => [
    {
      title: 'Quantitative Trader',
      description: 'Complete pathway from beginner to professional quant trader',
      courses: 8,
      duration: '6 months',
      certification: 'Certified Quantitative Trader',
    },
    {
      title: 'AI Strategy Developer',
      description: 'Specialized track for developing AI-powered trading strategies',
      courses: 6,
      duration: '4 months',
      certification: 'AI Trading Specialist',
    },
    {
      title: 'Risk Management Expert',
      description: 'Focus on risk analysis, compliance, and portfolio management',
      courses: 5,
      duration: '3 months',
      certification: 'Risk Management Professional',
    },
  ], []);

  const benefits = useMemo(() => [
    'Learn from industry experts with real trading experience',
    'Access to live market data and professional trading tools',
    'Hands-on projects using actual market scenarios',
    'Network with professionals in quantitative finance',
    'Career support and job placement assistance',
    'Continuous updates with latest market developments',
  ], []);

  const testimonials = useMemo(() => [
    {
      name: 'Sarah Chen',
      role: 'Quantitative Analyst at Goldman Sachs',
      avatar: 'SC',
      rating: 5,
      comment: 'The AI trading course transformed my career. The practical approach and real-world examples made complex concepts easy to understand.',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Portfolio Manager at Citadel',
      avatar: 'MR',
      rating: 5,
      comment: 'Excellent curriculum that bridges theory and practice. The multi-agent systems course is particularly outstanding.',
    },
    {
      name: 'Emily Zhang',
      role: 'Risk Manager at Two Sigma',
      avatar: 'EZ',
      rating: 5,
      comment: 'Comprehensive risk management training that prepared me for real-world challenges in institutional trading.',
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
                  label="Professional Trading Education"
                  sx={{
                    bgcolor: 'rgba(255, 152, 0, 0.1)',
                    color: '#ff9800',
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
                  AI Trading Academy
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
                  Master AI-powered trading strategies with comprehensive courses designed by industry experts. 
                  From fundamentals to advanced multi-agent systems.
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
                    Start Learning
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<PlayCircle />}
                    sx={{ py: 2, px: 4 }}
                  >
                    Free Preview
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
                World-Class Learning Platform
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Industry-leading education designed for trading professionals
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
                            bgcolor: '#ff9800',
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
                        {feature.highlights.map((highlight, idx) => (
                          <Chip
                            key={idx}
                            label={highlight}
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

      {/* Featured Courses */}
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
                  Featured Courses
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Comprehensive curriculum designed by industry experts
                </Typography>
              </Box>
            </motion.div>

            <Grid container spacing={3}>
              {courses.map((course, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <motion.div variants={fadeInUp}>
                    <Card sx={{ height: '100%' }}>
                      <CardContent sx={{ p: 4 }}>
                        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                          <Chip 
                            label={course.level}
                            size="small"
                            color={course.level === 'Beginner' ? 'success' : 
                                   course.level === 'Intermediate' ? 'warning' : 
                                   course.level === 'Advanced' ? 'error' : 'secondary'}
                          />
                          <Typography variant="h6" fontWeight="bold" color="primary.main">
                            {course.price}
                          </Typography>
                        </Box>

                        <Typography variant="h6" fontWeight="bold" mb={1}>
                          {course.title}
                        </Typography>

                        <Box display="flex" alignItems="center" mb={2}>
                          <Rating value={course.rating} precision={0.1} size="small" readOnly />
                          <Typography variant="body2" color="text.secondary" ml={1}>
                            ({course.students.toLocaleString()} students)
                          </Typography>
                        </Box>

                        <Typography variant="body1" color="text.secondary" mb={3}>
                          {course.description}
                        </Typography>

                        <Grid container spacing={1} mb={3}>
                          <Grid item xs={6}>
                            <Typography variant="body2" color="text.secondary">
                              Duration: {course.duration}
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography variant="body2" color="text.secondary">
                              Modules: {course.modules}
                            </Typography>
                          </Grid>
                        </Grid>

                        <Box mb={3}>
                          {course.topics.map((topic, idx) => (
                            <Chip
                              key={idx}
                              label={topic}
                              size="small"
                              sx={{ mr: 1, mb: 1 }}
                              variant="outlined"
                            />
                          ))}
                        </Box>

                        <Button
                          fullWidth
                          variant="contained"
                          endIcon={<ArrowForward />}
                        >
                          {course.price === 'Free' ? 'Enroll Free' : 'View Course'}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Learning Paths */}
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
                Career Learning Paths
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Structured pathways to achieve your career goals
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {learningPaths.map((path, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div variants={fadeInUp}>
                  <Paper sx={{ p: 4, height: '100%', textAlign: 'center' }}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                      {path.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" mb={3}>
                      {path.description}
                    </Typography>
                    
                    <Box mb={3}>
                      <Typography variant="body2" color="text.secondary">
                        {path.courses} courses • {path.duration}
                      </Typography>
                    </Box>

                    <Box sx={{ bgcolor: 'background.default', p: 2, borderRadius: 1, mb: 3 }}>
                      <Typography variant="body2" fontWeight="bold">
                        Certification: {path.certification}
                      </Typography>
                    </Box>

                    <Button variant="outlined" fullWidth>
                      Explore Path
                    </Button>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* Benefits & Testimonials */}
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
                  <Group sx={{ fontSize: '2rem', color: '#ff9800', mr: 2 }} />
                  <Typography variant="h4" fontWeight="bold">
                    Why Choose Our Academy
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
                  Student Success Stories
                </Typography>

                {testimonials.map((testimonial, index) => (
                  <Paper key={index} sx={{ p: 3, mb: 3 }}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>
                        {testimonial.avatar}
                      </Avatar>
                      <Box>
                        <Typography variant="body1" fontWeight="bold">
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                    <Rating value={testimonial.rating} size="small" readOnly sx={{ mb: 1 }} />
                    <Typography variant="body2" color="text.secondary">
                      "{testimonial.comment}"
                    </Typography>
                  </Paper>
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
              Start Your Trading Journey
            </Typography>
            <Typography variant="h6" color="text.secondary" mb={6}>
              Join thousands of professionals advancing their careers in quantitative trading.
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
                Enroll Now
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{ py: 2, px: 4 }}
              >
                Free Course Preview
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}