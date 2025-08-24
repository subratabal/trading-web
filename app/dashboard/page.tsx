'use client';

import { useAuth } from '@/app/_contexts/AuthContext';
import ProtectedRoute from '@/app/_components/ProtectedRoute';
import { BehavioralTracker } from '@/app/_components/BehavioralTracker';
import { AdaptiveInterface } from '@/app/_components/AdaptiveInterface';
import { EmotionalButton } from '@/app/_components/EmotionalButton';
import { SmartErrorBoundary } from '@/app/_components/SmartErrorBoundary';
import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  LinearProgress,
  Chip,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import {
  TrendingUp,
  Psychology,
  School,
  Add,
  MoreVert,
  PlayArrow,
  Pause,
  Stop,
} from '@mui/icons-material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';

const performanceData = [
  { name: 'Jan', value: 12.5, benchmark: 8.3 },
  { name: 'Feb', value: 15.2, benchmark: 9.1 },
  { name: 'Mar', value: 18.7, benchmark: 10.5 },
  { name: 'Apr', value: 22.1, benchmark: 12.2 },
  { name: 'May', value: 19.8, benchmark: 11.8 },
  { name: 'Jun', value: 25.3, benchmark: 14.1 },
];

const recentTrades = [
  { id: 1, symbol: 'AAPL', action: 'BUY', quantity: 1000, price: 185.23, profit: '+2.1%', status: 'completed' },
  { id: 2, symbol: 'TSLA', action: 'SELL', quantity: 500, price: 248.91, profit: '+4.7%', status: 'completed' },
  { id: 3, symbol: 'MSFT', action: 'BUY', quantity: 750, price: 378.15, profit: '+1.8%', status: 'pending' },
  { id: 4, symbol: 'GOOGL', action: 'SELL', quantity: 200, price: 142.69, profit: '+3.2%', status: 'completed' },
];

const aiAgents = [
  { 
    id: 1, 
    name: 'Momentum Trader', 
    status: 'active', 
    performance: '+18.5%', 
    trades: 1247,
    description: 'High-frequency momentum trading with ML-driven entry/exit signals'
  },
  { 
    id: 2, 
    name: 'Risk Arbitrage', 
    status: 'paused', 
    performance: '+12.3%', 
    trades: 892,
    description: 'Market-neutral arbitrage opportunities using deep learning models'
  },
  { 
    id: 3, 
    name: 'Volatility Hunter', 
    status: 'active', 
    performance: '+22.1%', 
    trades: 654,
    description: 'Volatility-based strategies with advanced risk management'
  },
];

function DashboardContent() {
  const { state } = useAuth();

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

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="xl">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeInUp}>
            <Box mb={4}>
              <Typography variant="h3" component="h1" fontWeight="bold" mb={1}>
                Welcome back, {state.user?.firstName || 'Trader'}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Your AI trading dashboard - {new Date().toLocaleDateString()}
              </Typography>
            </Box>
          </motion.div>

          {/* Key Metrics */}
          <motion.div variants={fadeInUp}>
            <Grid container spacing={3} mb={4}>
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                      <TrendingUp sx={{ color: 'success.main', mr: 1 }} />
                      <Typography variant="h6">Portfolio Value</Typography>
                    </Box>
                    <Typography variant="h4" fontWeight="bold" color="success.main">
                      $2,847,392
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      +$247,392 (+9.5%) this month
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Psychology sx={{ color: 'primary.main', mr: 1 }} />
                      <Typography variant="h6">Active Agents</Typography>
                    </Box>
                    <Typography variant="h4" fontWeight="bold">
                      12
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      8 profitable, 2 neutral, 2 learning
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Box
                        sx={{
                          width: 24,
                          height: 24,
                          borderRadius: '50%',
                          bgcolor: 'warning.main',
                          mr: 1,
                        }}
                      />
                      <Typography variant="h6">Risk Level</Typography>
                    </Box>
                    <Typography variant="h4" fontWeight="bold">
                      Medium
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      73% risk reduction vs. manual trading
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                      <School sx={{ color: 'info.main', mr: 1 }} />
                      <Typography variant="h6">Learning Progress</Typography>
                    </Box>
                    <Typography variant="h4" fontWeight="bold">
                      78%
                    </Typography>
                    <LinearProgress 
                      variant="determinate" 
                      value={78} 
                      sx={{ mt: 1, height: 6, borderRadius: 3 }}
                    />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </motion.div>

          {/* Charts Section */}
          <motion.div variants={fadeInUp}>
            <Grid container spacing={3} mb={4}>
              <Grid item xs={12} lg={8}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" mb={3}>
                      Portfolio Performance
                    </Typography>
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart data={performanceData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                        <XAxis dataKey="name" stroke="#cbd5e1" />
                        <YAxis stroke="#cbd5e1" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#1e293b', 
                            border: '1px solid #00A3E0',
                            borderRadius: '8px'
                          }} 
                        />
                        <Area 
                          type="monotone" 
                          dataKey="value" 
                          stroke="#00A3E0" 
                          fill="url(#colorValue)" 
                          strokeWidth={2}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="benchmark" 
                          stroke="#94a3b8" 
                          fill="transparent" 
                          strokeWidth={1}
                          strokeDasharray="5 5"
                        />
                        <defs>
                          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#00A3E0" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#00A3E0" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} lg={4}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                      <Typography variant="h6">AI Agents</Typography>
                      <BehavioralTracker componentType="ai-agent-button" userId={state.user?.id}>
                        <EmotionalButton
                          emotion="energizing"
                          startIcon={<Add />}
                          variant="outlined"
                          size="small"
                        >
                          New Agent
                        </EmotionalButton>
                      </BehavioralTracker>
                    </Box>
                    
                    {aiAgents.map((agent) => (
                      <Box key={agent.id} mb={2}>
                        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                          <Typography variant="body1" fontWeight={600}>
                            {agent.name}
                          </Typography>
                          <Box display="flex" alignItems="center" gap={1}>
                            <Chip
                              label={agent.status}
                              size="small"
                              color={agent.status === 'active' ? 'success' : 'warning'}
                            />
                            <IconButton size="small">
                              {agent.status === 'active' ? <Pause /> : <PlayArrow />}
                            </IconButton>
                          </Box>
                        </Box>
                        <Typography variant="body2" color="text.secondary" mb={1}>
                          {agent.description}
                        </Typography>
                        <Box display="flex" justifyContent="space-between">
                          <Typography variant="body2" color="success.main">
                            {agent.performance}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {agent.trades} trades
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </motion.div>

          {/* Recent Trades */}
          <motion.div variants={fadeInUp}>
            <Card>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                  <Typography variant="h6">Recent Trades</Typography>
                  <BehavioralTracker componentType="view-all-button" userId={state.user?.id}>
                    <EmotionalButton 
                      emotion="focused" 
                      variant="outlined" 
                      size="small"
                    >
                      View All
                    </EmotionalButton>
                  </BehavioralTracker>
                </Box>
                
                <TableContainer component={Paper} sx={{ bgcolor: 'transparent' }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Symbol</TableCell>
                        <TableCell>Action</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">P&L</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell align="right">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {recentTrades.map((trade) => (
                        <TableRow key={trade.id}>
                          <TableCell>
                            <Typography variant="body2" fontWeight={600}>
                              {trade.symbol}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Chip
                              label={trade.action}
                              size="small"
                              color={trade.action === 'BUY' ? 'success' : 'error'}
                              variant="outlined"
                            />
                          </TableCell>
                          <TableCell align="right">{trade.quantity.toLocaleString()}</TableCell>
                          <TableCell align="right">${trade.price}</TableCell>
                          <TableCell align="right">
                            <Typography 
                              variant="body2" 
                              color={trade.profit.startsWith('+') ? 'success.main' : 'error.main'}
                            >
                              {trade.profit}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Chip
                              label={trade.status}
                              size="small"
                              color={trade.status === 'completed' ? 'success' : 'warning'}
                            />
                          </TableCell>
                          <TableCell align="right">
                            <IconButton size="small">
                              <MoreVert />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <SmartErrorBoundary>
        <EnhancedDashboardContent />
      </SmartErrorBoundary>
    </ProtectedRoute>
  );
}

function EnhancedDashboardContent() {
  const { state } = useAuth();
  
  return (
    <AdaptiveInterface userId={state.user?.id || ''}>
      <BehavioralTracker componentType="dashboard" userId={state.user?.id}>
        <DashboardContent />
      </BehavioralTracker>
    </AdaptiveInterface>
  );
}