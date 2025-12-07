'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button, Container, Card, Badge } from '@/components/ui';
import {
  FadeIn,
  SlideIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
  GlowCard,
  TiltCard,
  AnimatedCounter,
  LetterReveal,
  Floating,
  MagneticButton,
  Reveal,
  ClipReveal,
} from '@/components/motion';
import {
  TrendingUp,
  Shield,
  Zap,
  BarChart3,
  ArrowRight,
  Play,
  CheckCircle2,
  Sparkles,
  Brain,
  LineChart,
  Target,
  AlertTriangle,
  Lock,
  Clock,
  Gauge,
  Bot,
  Cpu,
  GitBranch,
  Scale,
  FileCheck,
  Activity,
  PieChart,
  Coins,
} from 'lucide-react';

// Trading stats
const stats = [
  { value: 73, suffix: '%', label: 'Risk Reduction', icon: Shield },
  { value: 2.5, suffix: 'x', label: 'Faster Execution', icon: Zap },
  { value: 99.9, suffix: '%', label: 'Platform Uptime', icon: Activity },
  { value: 24, suffix: '/7', label: 'AI Monitoring', icon: Bot },
];

// Core trading capabilities
const capabilities = [
  {
    id: 'strategy',
    icon: Brain,
    title: 'Strategy Development',
    description: 'AI-powered strategy creation with machine learning models that adapt to market conditions in real-time.',
    features: [
      'Visual strategy builder with drag-and-drop',
      'ML model training on historical data',
      'Multi-asset strategy templates',
      'Custom indicator development',
    ],
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'execution',
    icon: Zap,
    title: 'Execution & Backtesting',
    description: 'Ultra-low latency execution engine with comprehensive backtesting on decades of historical data.',
    features: [
      'Sub-millisecond order execution',
      'Smart order routing optimization',
      '20+ years of historical data',
      'Walk-forward analysis',
    ],
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'risk',
    icon: Shield,
    title: 'Risk Control',
    description: 'Enterprise-grade risk management for both traditional algorithmic and cryptocurrency trading.',
    features: [
      'Real-time portfolio risk scoring',
      'Automated position sizing',
      'Crypto-specific risk metrics',
      'Drawdown protection systems',
    ],
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    id: 'governance',
    icon: Scale,
    title: 'Algo Governance',
    description: 'Complete governance framework ensuring compliance, auditability, and operational excellence.',
    features: [
      'Algorithm version control',
      'Pre-trade compliance checks',
      'Audit trail & reporting',
      'Regulatory framework support',
    ],
    gradient: 'from-violet-500 to-purple-600',
  },
];

// Trading strategies
const strategies = [
  {
    name: 'Momentum Trading',
    description: 'AI-powered momentum detection with machine learning entry/exit signals',
    performance: '+18.5%',
    riskLevel: 'Medium',
    timeframe: 'Intraday',
    color: 'emerald',
  },
  {
    name: 'Market Neutral Arbitrage',
    description: 'Risk-neutral strategies exploiting price discrepancies across markets',
    performance: '+12.3%',
    riskLevel: 'Low',
    timeframe: 'Short-term',
    color: 'blue',
  },
  {
    name: 'Volatility Trading',
    description: 'Advanced volatility modeling for options and derivatives trading',
    performance: '+22.1%',
    riskLevel: 'High',
    timeframe: 'Medium-term',
    color: 'amber',
  },
  {
    name: 'Statistical Arbitrage',
    description: 'Quantitative models identifying statistical mispricing opportunities',
    performance: '+15.7%',
    riskLevel: 'Medium',
    timeframe: 'Multi-day',
    color: 'violet',
  },
];

// Risk features for algo and crypto
const riskFeatures = [
  {
    category: 'Algorithmic Trading',
    icon: LineChart,
    items: [
      'Position limit enforcement',
      'P&L-based kill switches',
      'Correlation risk monitoring',
      'Market impact analysis',
      'Execution quality tracking',
    ],
  },
  {
    category: 'Crypto Trading',
    icon: Coins,
    items: [
      'Exchange counterparty risk',
      'Liquidity depth monitoring',
      'Cross-chain exposure tracking',
      'Smart contract risk assessment',
      'Wallet security management',
    ],
  },
];

// Compliance frameworks
const compliance = [
  { name: 'SEC Rule 15c3-5', desc: 'Market Access Rule' },
  { name: 'MiFID II', desc: 'Transaction Reporting' },
  { name: 'CFTC Part 23', desc: 'Risk Management' },
  { name: 'FCA', desc: 'Trading Venue Requirements' },
  { name: 'GDPR', desc: 'Data Protection' },
  { name: 'SOX', desc: 'Financial Controls' },
];

// Benefits list
const benefits = [
  'Reduce trading risk by up to 73% through AI-powered risk management',
  'Execute trades 2.5x faster than traditional manual methods',
  'Access real-time market intelligence and predictive analytics',
  'Maintain full regulatory compliance with automated reporting',
  'Scale operations without proportional increase in personnel',
  'Integrate seamlessly with existing trading infrastructure',
];

// Animated background
function BackgroundOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Floating duration={20} amplitude={30}>
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px]" />
      </Floating>
      <Floating duration={25} amplitude={40}>
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px]" />
      </Floating>
      <Floating duration={22} amplitude={35}>
        <div className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[100px]" />
      </Floating>
    </div>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
      <BackgroundOrbs />
      
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <Container className="relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <FadeIn delay={0.1}>
            <Badge variant="primary" className="mb-6 px-4 py-2">
              <TrendingUp className="h-3.5 w-3.5 mr-2" />
              Institutional Grade AI Trading Platform
            </Badge>
          </FadeIn>

          <div className="mb-6">
            <LetterReveal
              text="Transform Trading with"
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white block"
              staggerDelay={0.03}
            />
            <div className="h-2" />
            <LetterReveal
              text="AI Intelligence"
              className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text block"
              staggerDelay={0.03}
            />
          </div>

          <FadeIn delay={0.9}>
            <p className="text-lg md:text-xl text-gray-400 mb-4 max-w-3xl mx-auto leading-relaxed">
              Reduce trading risk by 73% with advanced AI algorithms, multi-agent orchestration,
              and real-time market intelligence. Built for institutional traders.
            </p>
            <p className="text-base text-gray-500 mb-10 max-w-2xl mx-auto">
              Strategy development, execution, backtesting, risk control, and governance - all in one platform.
            </p>
          </FadeIn>

          <FadeIn delay={1.1}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/auth/signup">
                <MagneticButton>
                  <Button size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                    Start Trading
                  </Button>
                </MagneticButton>
              </Link>
              <MagneticButton>
                <Button
                  variant="outline"
                  size="lg"
                  leftIcon={<Play className="h-4 w-4" />}
                >
                  Watch Demo
                </Button>
              </MagneticButton>
            </div>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={1.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <ScaleIn key={index} delay={1.4 + index * 0.1}>
                  <div className="text-center p-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500/20 mb-3">
                      <stat.icon className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                      <AnimatedCounter value={stat.value} duration={2} />
                      <span className="text-emerald-400">{stat.suffix}</span>
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

// Core Capabilities Section
function CapabilitiesSection() {
  return (
    <section className="py-24 md:py-32 bg-gray-950 relative overflow-hidden">
      <Container>
        <div className="text-center mb-16 md:mb-20">
          <Reveal>
            <Badge variant="secondary" className="mb-4">
              <Cpu className="h-3 w-3 mr-1" />
              Complete Trading Ecosystem
            </Badge>
          </Reveal>
          <ClipReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              End-to-End Trading Solutions
            </h2>
          </ClipReveal>
          <FadeIn delay={0.2}>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              From strategy conception to execution and beyond - everything you need for 
              successful algorithmic trading.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 gap-8">
          {capabilities.map((cap, index) => (
            <StaggerItem key={cap.id}>
              <TiltCard className="h-full">
                <GlowCard className="h-full bg-gray-900/80 border border-gray-800 rounded-2xl p-8 group">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${cap.gradient} mb-6 shadow-lg`}>
                    <cap.icon className="h-7 w-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {cap.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {cap.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {cap.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

// Strategies Section
function StrategiesSection() {
  const riskColors: Record<string, string> = {
    Low: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    Medium: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    High: 'text-red-400 bg-red-500/10 border-red-500/30',
  };

  return (
    <section className="py-24 md:py-32 bg-gray-900/50 relative overflow-hidden">
      <BackgroundOrbs />
      <Container className="relative z-10">
        <div className="text-center mb-16">
          <Reveal>
            <Badge variant="primary" className="mb-4">
              <BarChart3 className="h-3 w-3 mr-1" />
              AI Trading Strategies
            </Badge>
          </Reveal>
          <ClipReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pre-Built Strategy Templates
            </h2>
          </ClipReveal>
          <FadeIn delay={0.2}>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">
              Start with proven strategies optimized for different market conditions and risk profiles
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {strategies.map((strategy, index) => (
            <StaggerItem key={index}>
              <Card hover className="h-full">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{strategy.name}</h3>
                  <span className="text-2xl font-bold text-emerald-400">{strategy.performance}</span>
                </div>
                <p className="text-gray-400 mb-4">{strategy.description}</p>
                <div className="flex gap-2 flex-wrap">
                  <span className={`text-xs px-2 py-1 rounded-full border ${riskColors[strategy.riskLevel]}`}>
                    Risk: {strategy.riskLevel}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full border border-gray-700 text-gray-400">
                    {strategy.timeframe}
                  </span>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

// Risk Management Section
function RiskSection() {
  return (
    <section className="py-24 md:py-32 bg-gray-950">
      <Container>
        <div className="text-center mb-16">
          <Reveal>
            <Badge variant="secondary" className="mb-4">
              <AlertTriangle className="h-3 w-3 mr-1" />
              Risk Control
            </Badge>
          </Reveal>
          <ClipReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Risk Management
            </h2>
          </ClipReveal>
          <FadeIn delay={0.2}>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Enterprise-grade risk controls designed for both traditional algorithmic trading
              and cryptocurrency markets
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {riskFeatures.map((category, index) => (
            <SlideIn key={index} direction={index === 0 ? 'left' : 'right'}>
              <Card variant="gradient" className="h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, iIndex) => (
                    <li key={iIndex} className="flex items-center text-gray-300">
                      <CheckCircle2 className="h-4 w-4 text-amber-400 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </SlideIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

// Governance & Compliance Section
function GovernanceSection() {
  return (
    <section className="py-24 md:py-32 bg-gray-900/50 relative overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Benefits */}
          <div>
            <SlideIn direction="left">
              <Badge variant="primary" className="mb-4">
                <GitBranch className="h-3 w-3 mr-1" />
                Key Benefits
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose AI & Quant Labs Trading
              </h2>
            </SlideIn>

            <StaggerContainer className="space-y-4">
              {benefits.map((benefit, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right - Compliance */}
          <div>
            <SlideIn direction="right">
              <Badge variant="secondary" className="mb-4">
                <FileCheck className="h-3 w-3 mr-1" />
                Regulatory Compliance
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Built for Global Compliance
              </h2>
              <p className="text-gray-400 mb-8">
                Our platform is designed to meet the most stringent regulatory requirements
                across global markets.
              </p>
            </SlideIn>

            <StaggerContainer className="grid grid-cols-2 gap-4">
              {compliance.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                    <div className="font-semibold text-white mb-1">{item.name}</div>
                    <div className="text-sm text-gray-500">{item.desc}</div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </Container>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/30 via-gray-950 to-gray-950" />
      <BackgroundOrbs />
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Trading?
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Join leading institutional traders who trust AI & Quant Labs for their 
              critical trading operations.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid md:grid-cols-4 gap-4 mb-12">
              {[
                { icon: Clock, title: '14-Day Trial', desc: 'Full access' },
                { icon: Lock, title: 'No Credit Card', desc: 'Required' },
                { icon: Gauge, title: 'Full Platform', desc: 'All features' },
                { icon: Bot, title: '24/7 Support', desc: 'Dedicated team' },
              ].map((item, index) => (
                <ScaleIn key={index} delay={0.3 + index * 0.1}>
                  <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 text-center">
                    <item.icon className="h-6 w-6 text-emerald-400 mx-auto mb-2" />
                    <div className="font-semibold text-white text-sm">{item.title}</div>
                    <div className="text-xs text-gray-500">{item.desc}</div>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup">
                <MagneticButton>
                  <Button size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                    Start Free Trial
                  </Button>
                </MagneticButton>
              </Link>
              <Link href="/contact">
                <MagneticButton>
                  <Button variant="secondary" size="lg">
                    Contact Sales
                  </Button>
                </MagneticButton>
              </Link>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

// Main Trading Page
export default function TradingPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <HeroSection />
      <CapabilitiesSection />
      <StrategiesSection />
      <RiskSection />
      <GovernanceSection />
      <CTASection />
    </div>
  );
}
