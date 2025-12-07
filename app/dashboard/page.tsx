'use client';

import { useAuth } from '@/app/_contexts/AuthContext';
import ProtectedRoute from '@/app/_components/ProtectedRoute';
import { motion } from 'framer-motion';
import { Container, Card, Badge, Button } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion';
import {
  TrendingUp,
  Brain,
  Shield,
  GraduationCap,
  Plus,
  MoreVertical,
  Play,
  Pause,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';
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

  return (
    <div className="py-8 min-h-screen bg-gray-950">
      <Container>
        <StaggerContainer>
          {/* Header */}
          <StaggerItem>
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Welcome back, {state.user?.firstName || 'Trader'}
              </h1>
              <p className="text-gray-400 text-lg">
                Your AI trading dashboard - {new Date().toLocaleDateString()}
              </p>
            </div>
          </StaggerItem>

          {/* Key Metrics */}
          <StaggerItem>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {/* Portfolio Value */}
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-emerald-500/20">
                    <TrendingUp className="h-5 w-5 text-emerald-400" />
                  </div>
                  <span className="text-gray-400 text-sm font-medium">Portfolio Value</span>
                </div>
                <p className="text-3xl font-bold text-emerald-400">$2,847,392</p>
                <p className="text-sm text-gray-500 mt-1">+$247,392 (+9.5%) this month</p>
              </Card>

              {/* Active Agents */}
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-violet-500/20">
                    <Brain className="h-5 w-5 text-violet-400" />
                  </div>
                  <span className="text-gray-400 text-sm font-medium">Active Agents</span>
                </div>
                <p className="text-3xl font-bold text-white">12</p>
                <p className="text-sm text-gray-500 mt-1">8 profitable, 2 neutral, 2 learning</p>
              </Card>

              {/* Risk Level */}
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-amber-500/20">
                    <Shield className="h-5 w-5 text-amber-400" />
                  </div>
                  <span className="text-gray-400 text-sm font-medium">Risk Level</span>
                </div>
                <p className="text-3xl font-bold text-amber-400">Medium</p>
                <p className="text-sm text-gray-500 mt-1">73% risk reduction vs. manual trading</p>
              </Card>

              {/* Learning Progress */}
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    <GraduationCap className="h-5 w-5 text-blue-400" />
                  </div>
                  <span className="text-gray-400 text-sm font-medium">Learning Progress</span>
                </div>
                <p className="text-3xl font-bold text-white">78%</p>
                <div className="mt-2 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full w-[78%] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                </div>
              </Card>
            </div>
          </StaggerItem>

          {/* Charts Section */}
          <StaggerItem>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Performance Chart */}
              <Card className="lg:col-span-2 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Portfolio Performance</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={performanceData}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis dataKey="name" stroke="#64748b" fontSize={12} />
                      <YAxis stroke="#64748b" fontSize={12} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1e293b', 
                          border: '1px solid #10b981',
                          borderRadius: '8px',
                          color: '#fff'
                        }} 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#10b981" 
                        fill="url(#colorValue)" 
                        strokeWidth={2}
                        name="Portfolio"
                      />
                      <Area 
                        type="monotone" 
                        dataKey="benchmark" 
                        stroke="#64748b" 
                        fill="transparent" 
                        strokeWidth={1}
                        strokeDasharray="5 5"
                        name="Benchmark"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              {/* AI Agents */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">AI Agents</h3>
                  <Button variant="outline" size="sm" leftIcon={<Plus className="h-4 w-4" />}>
                    New Agent
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {aiAgents.map((agent) => (
                    <div key={agent.id} className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-white">{agent.name}</span>
                        <div className="flex items-center gap-2">
                          <Badge variant={agent.status === 'active' ? 'success' : 'warning'}>
                            {agent.status}
                          </Badge>
                          <button className="p-1 hover:bg-gray-700 rounded transition-colors">
                            {agent.status === 'active' ? (
                              <Pause className="h-4 w-4 text-gray-400" />
                            ) : (
                              <Play className="h-4 w-4 text-gray-400" />
                            )}
                          </button>
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 mb-2 line-clamp-2">{agent.description}</p>
                      <div className="flex justify-between text-sm">
                        <span className="text-emerald-400 font-medium">{agent.performance}</span>
                        <span className="text-gray-500">{agent.trades} trades</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </StaggerItem>

          {/* Recent Trades */}
          <StaggerItem>
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Recent Trades</h3>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Symbol</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Action</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-gray-400">Quantity</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-gray-400">Price</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-gray-400">P&L</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Status</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-gray-400">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentTrades.map((trade) => (
                      <tr key={trade.id} className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                        <td className="py-4 px-4">
                          <span className="font-semibold text-white">{trade.symbol}</span>
                        </td>
                        <td className="py-4 px-4">
                          <Badge 
                            variant={trade.action === 'BUY' ? 'success' : 'danger'}
                            className="font-medium"
                          >
                            {trade.action}
                          </Badge>
                        </td>
                        <td className="py-4 px-4 text-right text-gray-300">
                          {trade.quantity.toLocaleString()}
                        </td>
                        <td className="py-4 px-4 text-right text-gray-300">
                          ${trade.price}
                        </td>
                        <td className="py-4 px-4 text-right">
                          <span className={`font-medium flex items-center justify-end gap-1 ${
                            trade.profit.startsWith('+') ? 'text-emerald-400' : 'text-red-400'
                          }`}>
                            {trade.profit.startsWith('+') ? (
                              <ArrowUpRight className="h-4 w-4" />
                            ) : (
                              <ArrowDownRight className="h-4 w-4" />
                            )}
                            {trade.profit}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <Badge variant={trade.status === 'completed' ? 'success' : 'warning'}>
                            {trade.status}
                          </Badge>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <button className="p-2 hover:bg-gray-700 rounded transition-colors">
                            <MoreVertical className="h-4 w-4 text-gray-400" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </StaggerItem>
        </StaggerContainer>
      </Container>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}
