'use client';

import Link from 'next/link';
import { Button, Container, Card, Badge } from '@/components/ui';
import {
  FadeIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
  Floating,
  Reveal,
  ClipReveal,
  MagneticButton,
} from '@/components/motion';
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Brain,
  Zap,
  LineChart,
  BarChart3,
  Activity,
  Cpu,
  Database,
  GitBranch,
  Shield,
} from 'lucide-react';

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
    </div>
  );
}

// Trading solutions we offer
const tradingSolutions = [
  {
    icon: Brain,
    title: 'Strategy Development',
    description: 'Quantitative strategy design, research, and development support for systematic trading.',
    features: ['Alpha research', 'Signal generation', 'Portfolio construction', 'Execution algorithms'],
  },
  {
    icon: BarChart3,
    title: 'Backtesting & Optimisation',
    description: 'Robust backtesting frameworks with proper out-of-sample testing and parameter optimisation.',
    features: ['Historical simulation', 'Walk-forward analysis', 'Parameter sensitivity', 'Overfitting prevention'],
  },
  {
    icon: Activity,
    title: 'Real-Time Monitoring',
    description: 'Live monitoring dashboards for trading performance, risk metrics, and system health.',
    features: ['P&L tracking', 'Position monitoring', 'Risk dashboards', 'Alert systems'],
  },
  {
    icon: Database,
    title: 'Data Infrastructure',
    description: 'High-performance data pipelines and storage solutions for market data and analytics.',
    features: ['Market data feeds', 'Time-series databases', 'Data quality checks', 'Historical archives'],
  },
];

// Technologies we work with
const technologies = [
  { name: 'Python', category: 'Languages' },
  { name: 'Q/kdb+', category: 'Languages' },
  { name: 'C++', category: 'Languages' },
  { name: 'PostgreSQL', category: 'Databases' },
  { name: 'TimescaleDB', category: 'Databases' },
  { name: 'Redis', category: 'Databases' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Docker', category: 'Infrastructure' },
];

// How we help
const helpApproach = [
  {
    icon: Brain,
    title: 'Advisory & Consulting',
    description: 'Strategic guidance on trading technology, architecture, and best practices.',
  },
  {
    icon: Zap,
    title: 'Hands-On Implementation',
    description: 'We build alongside your team, writing code and configuring systems.',
  },
  {
    icon: LineChart,
    title: 'Ongoing Support',
    description: 'Continuous improvement, maintenance, and operational support.',
  },
];

export default function QuantTradingPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
        <BackgroundOrbs />
        
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <Badge variant="primary" className="mb-6">
                <TrendingUp className="h-3.5 w-3.5 mr-2" />
                Quant Trading Solutions
              </Badge>
            </FadeIn>
            
            <ClipReveal>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                From Strategy to Production
              </h1>
            </ClipReveal>
            
            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl text-gray-400 mb-4 max-w-2xl mx-auto">
                We help trading firms build, optimise, and maintain quantitative 
                trading systems. From research to production.
              </p>
              <p className="text-base text-gray-500 mb-8 max-w-xl mx-auto">
                Built by quants, for quants. Real-world experience in systematic trading.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <MagneticButton>
                    <Button size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                      Discuss Your Project
                    </Button>
                  </MagneticButton>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg">
                    Risk & Governance Services
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* How We Help */}
      <section className="py-24 bg-gray-950">
        <Container>
          <div className="text-center mb-16">
            <Reveal>
              <Badge variant="secondary" className="mb-4">
                <Zap className="h-3 w-3 mr-1" />
                How We Help
              </Badge>
            </Reveal>
            <ClipReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                From Advisory to Implementation
              </h2>
            </ClipReveal>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {helpApproach.map((item, index) => (
              <StaggerItem key={index}>
                <Card hover className="h-full text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 mb-6">
                    <item.icon className="h-7 w-7 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Solutions */}
      <section className="py-24 bg-gray-900/50 relative overflow-hidden">
        <BackgroundOrbs />
        <Container className="relative z-10">
          <div className="text-center mb-16">
            <Reveal>
              <Badge variant="primary" className="mb-4">
                <Cpu className="h-3 w-3 mr-1" />
                Solutions
              </Badge>
            </Reveal>
            <ClipReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What We Build
              </h2>
            </ClipReveal>
            <FadeIn delay={0.2}>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                End-to-end quant trading solutions tailored to your needs
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {tradingSolutions.map((solution, index) => (
              <StaggerItem key={index}>
                <Card hover className="h-full">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                    <solution.icon className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{solution.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{solution.description}</p>
                  <ul className="space-y-1">
                    {solution.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-sm text-gray-500">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Technologies */}
      <section className="py-24 bg-gray-950">
        <Container>
          <div className="text-center mb-12">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Technologies We Work With
              </h2>
            </Reveal>
            <FadeIn delay={0.2}>
              <div className="flex flex-wrap justify-center gap-3">
                {technologies.map((tech, index) => (
                  <ScaleIn key={index} delay={0.05 * index}>
                    <span className="px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-300 text-sm">
                      {tech.name}
                    </span>
                  </ScaleIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Governance Link */}
      <section className="py-16 bg-gray-900/50">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center p-8 rounded-2xl bg-gray-800/30 border border-gray-700/50">
              <Shield className="h-10 w-10 text-violet-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">
                Need Governance for Your Trading Systems?
              </h3>
              <p className="text-gray-400 mb-6">
                We also provide risk frameworks, controls, and compliance services for algorithmic trading operations.
              </p>
              <Link href="/governance">
                <Button variant="outline" rightIcon={<ArrowRight className="h-4 w-4" />}>
                  Algo Governance Services
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/30 via-gray-950 to-gray-950" />
        <BackgroundOrbs />
        
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build?
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Let&apos;s discuss your quant trading project and how we can help.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <MagneticButton>
                    <Button size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                      Get in Touch
                    </Button>
                  </MagneticButton>
                </Link>
                <Link href="/">
                  <Button variant="secondary" size="lg">
                    Back to Home
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </div>
  );
}
