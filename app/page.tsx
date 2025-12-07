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
  Shield,
  Zap,
  ArrowRight,
  CheckCircle2,
  Brain,
  Scale,
  FileCheck,
  Globe,
  Building2,
  Coins,
  LineChart,
  Lock,
  Users,
  FileSearch,
  AlertTriangle,
  Landmark,
  BookOpen,
  ClipboardCheck,
  Settings,
  Eye,
  BadgeCheck,
  TrendingUp,
  Sparkles,
} from 'lucide-react';

// Stats - Risk & Governance focused
const stats = [
  { value: 4, suffix: '', label: 'Jurisdictions', icon: Globe },
  { value: 40, suffix: '+', label: 'Policy Templates', icon: FileCheck },
  { value: 20, suffix: '+', label: 'Business Categories', icon: Building2 },
  { value: 24, suffix: '/7', label: 'Regulatory Tracking', icon: Eye },
];

// Core services - Lead with Risk & Governance
const services = [
  {
    id: 'crypto-compliance',
    icon: Coins,
    title: 'Crypto Compliance',
    description: 'Navigate the evolving crypto regulatory landscape with confidence. From UK DSS to EU MiCA to UAE VARA.',
    features: [
      'UK Digital Securities Sandbox readiness',
      'MiCA compliance preparation',
      'VARA licensing support',
      'AML/KYC frameworks for crypto',
    ],
    gradient: 'from-amber-500 to-orange-600',
    href: '/crypto',
  },
  {
    id: 'algo-governance',
    icon: Scale,
    title: 'Algo Governance',
    description: 'Comprehensive governance frameworks for algorithmic trading operations. Controls, compliance, and audit trails.',
    features: [
      'MiFID II & DORA compliance',
      'Algorithm approval frameworks',
      'Pre & post-trade controls',
      'Regulatory reporting automation',
    ],
    gradient: 'from-violet-500 to-purple-600',
    href: '/governance',
  },
  {
    id: 'risk-frameworks',
    icon: Shield,
    title: 'Risk Frameworks',
    description: 'Enterprise-grade risk management frameworks designed for both traditional and digital asset markets.',
    features: [
      'Market, credit & liquidity risk',
      'Operational risk management',
      'Model validation & review',
      'Stress testing frameworks',
    ],
    gradient: 'from-blue-500 to-cyan-600',
    href: '/governance',
  },
  {
    id: 'coo-support',
    icon: Settings,
    title: 'COO Support',
    description: 'Outsourced COO function for trading firms. Policy management, regulatory tracking, and operational excellence.',
    features: [
      'Policy library management',
      'Compliance calendar tracking',
      'Board reporting frameworks',
      'Audit preparation support',
    ],
    gradient: 'from-emerald-500 to-teal-600',
    href: '/services',
  },
];

// Jurisdictions coverage
const jurisdictions = [
  {
    code: 'UK',
    name: 'United Kingdom',
    flag: '🇬🇧',
    regulators: ['FCA', 'PRA', 'Bank of England'],
    frameworks: ['FCA Handbook', 'SM&CR', 'Consumer Duty', 'DSS'],
    highlight: 'Digital Securities Sandbox',
  },
  {
    code: 'EU',
    name: 'European Union',
    flag: '🇪🇺',
    regulators: ['EBA', 'ESMA', 'ECB'],
    frameworks: ['MiCA', 'DORA', 'MiFID II', 'PSD2'],
    highlight: 'MiCA Compliance',
  },
  {
    code: 'UAE',
    name: 'United Arab Emirates',
    flag: '🇦🇪',
    regulators: ['VARA', 'DFSA', 'FSRA', 'CBUAE'],
    frameworks: ['VARA Regulations', 'DIFC Rules', 'ADGM Framework'],
    highlight: 'VARA Licensing',
  },
  {
    code: 'USA',
    name: 'United States',
    flag: '🇺🇸',
    regulators: ['SEC', 'CFTC', 'FinCEN', 'OCC'],
    frameworks: ['Securities Act', 'Dodd-Frank', 'Bank Secrecy Act'],
    highlight: 'Multi-State Compliance',
  },
];

// Why choose us - differentiators
const differentiators = [
  {
    icon: Brain,
    title: 'Quant DNA',
    description: 'We understand trading because we\'ve built trading systems. Our risk frameworks are designed by quants, for quants.',
  },
  {
    icon: Sparkles,
    title: 'AI-Powered',
    description: 'Leverage AI for faster regulatory analysis, smarter policy generation, and continuous compliance monitoring.',
  },
  {
    icon: FileCheck,
    title: 'Template-Based',
    description: '40+ policy templates and frameworks ready to customise. 50% faster implementation, 30% lower cost.',
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    description: 'UK, EU, UAE, and USA under one roof. Navigate cross-border regulations with a single partner.',
  },
];

// Regulatory frameworks we support
const regulations = [
  { name: 'MiCA', desc: 'Crypto Assets', region: 'EU' },
  { name: 'DORA', desc: 'Digital Resilience', region: 'EU' },
  { name: 'MiFID II', desc: 'Markets & Instruments', region: 'EU' },
  { name: 'UK DSS', desc: 'Digital Securities', region: 'UK' },
  { name: 'VARA', desc: 'Virtual Assets', region: 'UAE' },
  { name: 'SM&CR', desc: 'Senior Managers', region: 'UK' },
];

// Service categories for the services section
const serviceCategories = [
  {
    title: 'Regulatory Advisory',
    icon: Landmark,
    items: ['License applications', 'Gap analysis', 'Regulatory mapping', 'Compliance roadmaps'],
  },
  {
    title: 'Risk Management',
    icon: Shield,
    items: ['Risk framework design', 'Model validation', 'Stress testing', 'Risk reporting'],
  },
  {
    title: 'Controls & Audit',
    icon: ClipboardCheck,
    items: ['Control frameworks', 'Audit preparation', 'Policy development', 'Assurance reviews'],
  },
  {
    title: 'Operations',
    icon: Settings,
    items: ['COO-as-a-Service', 'Compliance monitoring', 'Regulatory tracking', 'Board reporting'],
  },
];

// Animated background
function BackgroundOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Floating duration={20} amplitude={30}>
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[100px]" />
      </Floating>
      <Floating duration={25} amplitude={40}>
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px]" />
      </Floating>
      <Floating duration={22} amplitude={35}>
        <div className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[100px]" />
      </Floating>
    </div>
  );
}

// Hero Section - Risk & Governance Focus
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
              <Shield className="h-3.5 w-3.5 mr-2" />
              Risk, Governance & Compliance
            </Badge>
          </FadeIn>

          <div className="mb-6">
            <LetterReveal
              text="Intelligent Governance for"
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white block"
              staggerDelay={0.03}
            />
            <div className="h-2" />
            <LetterReveal
              text="Crypto & Algo Trading"
              className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text block"
              staggerDelay={0.03}
            />
          </div>

          <FadeIn delay={0.9}>
            <p className="text-lg md:text-xl text-gray-400 mb-4 max-w-3xl mx-auto leading-relaxed">
              AI-powered risk frameworks, regulatory compliance, and operational excellence 
              for trading firms navigating crypto and algorithmic markets.
            </p>
            <p className="text-base text-gray-500 mb-10 max-w-2xl mx-auto">
              The quants who keep you compliant. From MiCA to VARA, DORA to MiFID II — we&apos;ve got you covered.
            </p>
          </FadeIn>

          <FadeIn delay={1.1}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/contact">
                <MagneticButton>
                  <Button size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                    Discuss Your Needs
                  </Button>
                </MagneticButton>
              </Link>
              <Link href="/services">
                <MagneticButton>
                  <Button
                    variant="outline"
                    size="lg"
                    leftIcon={<BookOpen className="h-4 w-4" />}
                  >
                    Our Services
                  </Button>
                </MagneticButton>
              </Link>
            </div>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={1.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <ScaleIn key={index} delay={1.4 + index * 0.1}>
                  <div className="text-center p-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-violet-500/20 mb-3">
                      <stat.icon className="h-5 w-5 text-violet-400" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                      <AnimatedCounter value={stat.value} duration={2} />
                      <span className="text-violet-400">{stat.suffix}</span>
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

// Core Services Section
function ServicesSection() {
  return (
    <section className="py-24 md:py-32 bg-gray-950 relative overflow-hidden">
      <Container>
        <div className="text-center mb-16 md:mb-20">
          <Reveal>
            <Badge variant="secondary" className="mb-4">
              <FileCheck className="h-3 w-3 mr-1" />
              What We Do
            </Badge>
          </Reveal>
          <ClipReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Risk & Governance Services
            </h2>
          </ClipReveal>
          <FadeIn delay={0.2}>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              From regulatory advisory to operational support — comprehensive services 
              for trading firms in crypto and traditional markets.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <Link href={service.href}>
                <TiltCard className="h-full">
                  <GlowCard className="h-full bg-gray-900/80 border border-gray-800 rounded-2xl p-8 group cursor-pointer">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} mb-6 shadow-lg`}>
                      <service.icon className="h-7 w-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-violet-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Learn More */}
                    <div className="mt-6 flex items-center text-violet-400 text-sm font-medium group-hover:text-violet-300">
                      Learn more <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </GlowCard>
                </TiltCard>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

// Jurisdictions Section
function JurisdictionsSection() {
  return (
    <section className="py-24 md:py-32 bg-gray-900/50 relative overflow-hidden">
      <BackgroundOrbs />
      <Container className="relative z-10">
        <div className="text-center mb-16">
          <Reveal>
            <Badge variant="primary" className="mb-4">
              <Globe className="h-3 w-3 mr-1" />
              Global Coverage
            </Badge>
          </Reveal>
          <ClipReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Multi-Jurisdiction Expertise
            </h2>
          </ClipReveal>
          <FadeIn delay={0.2}>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">
              Navigate regulatory landscapes across key financial centres with a single trusted partner
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jurisdictions.map((jurisdiction, index) => (
            <StaggerItem key={jurisdiction.code}>
              <Card hover className="h-full text-center">
                <div className="text-4xl mb-4">{jurisdiction.flag}</div>
                <h3 className="text-xl font-bold text-white mb-2">{jurisdiction.name}</h3>
                
                {/* Regulators */}
                <div className="mb-4">
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">Regulators</div>
                  <div className="flex flex-wrap justify-center gap-1">
                    {jurisdiction.regulators.map((reg, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-400">
                        {reg}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlight */}
                <div className="mt-auto pt-4 border-t border-gray-800">
                  <span className="text-sm text-violet-400 font-medium">{jurisdiction.highlight}</span>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Regulatory Frameworks */}
        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <p className="text-sm text-gray-500 mb-6">Regulatory frameworks we support</p>
            <div className="flex flex-wrap justify-center gap-3">
              {regulations.map((reg, index) => (
                <div
                  key={index}
                  className="px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700/50"
                >
                  <span className="text-white font-medium">{reg.name}</span>
                  <span className="text-gray-500 text-sm ml-2">({reg.region})</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

// Why Choose Us Section
function WhyUsSection() {
  return (
    <section className="py-24 md:py-32 bg-gray-950">
      <Container>
        <div className="text-center mb-16">
          <Reveal>
            <Badge variant="secondary" className="mb-4">
              <BadgeCheck className="h-3 w-3 mr-1" />
              Why AI & Quant Labs
            </Badge>
          </Reveal>
          <ClipReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Quants Who Keep You Compliant
            </h2>
          </ClipReveal>
          <FadeIn delay={0.2}>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We understand trading because we&apos;ve built trading systems. 
              Our governance expertise is grounded in real-world quant experience.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((diff, index) => (
            <StaggerItem key={index}>
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 mb-6">
                  <diff.icon className="h-8 w-8 text-violet-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{diff.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{diff.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

// Service Categories Grid
function ServiceCategoriesSection() {
  return (
    <section className="py-24 md:py-32 bg-gray-900/50 relative overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Main Message */}
          <div>
            <SlideIn direction="left">
              <Badge variant="primary" className="mb-4">
                <Users className="h-3 w-3 mr-1" />
                Full Service Offering
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                End-to-End Governance Support
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Whether you need help with a specific regulatory challenge or comprehensive 
                operational support, we scale to your needs. From one-off advisory to 
                ongoing COO-as-a-Service.
              </p>

              <div className="space-y-4">
                {[
                  'Regulatory gap analysis and remediation',
                  'Policy library development and management',
                  'Compliance monitoring and reporting',
                  'Board and executive advisory',
                  'Audit preparation and support',
                ].map((item, index) => (
                  <FadeIn key={index} delay={0.1 * index}>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-violet-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </SlideIn>
          </div>

          {/* Right - Service Grid */}
          <div>
            <StaggerContainer className="grid grid-cols-2 gap-4">
              {serviceCategories.map((category, index) => (
                <StaggerItem key={index}>
                  <Card className="h-full">
                    <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center mb-4">
                      <category.icon className="h-5 w-5 text-violet-400" />
                    </div>
                    <h3 className="font-semibold text-white mb-3">{category.title}</h3>
                    <ul className="space-y-1">
                      {category.items.map((item, iIndex) => (
                        <li key={iIndex} className="text-xs text-gray-500">{item}</li>
                      ))}
                    </ul>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </Container>
    </section>
  );
}

// Platform Preview Section (Brief/Aspirational)
function PlatformSection() {
  return (
    <section className="py-24 md:py-32 bg-gray-950">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Badge variant="secondary" className="mb-4">
              <TrendingUp className="h-3 w-3 mr-1" />
              For End-to-End Solutions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trading Infrastructure Available
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              For clients who need more than governance — our platform provides strategy development, 
              execution, risk monitoring, and analytics. Built on the same expertise that powers our 
              governance services.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                { icon: Brain, title: 'Strategy Development', desc: 'AI-powered strategy creation' },
                { icon: Zap, title: 'Execution Engine', desc: 'Low-latency trade execution' },
                { icon: LineChart, title: 'Analytics', desc: 'Real-time risk dashboards' },
              ].map((item, index) => (
                <ScaleIn key={index} delay={0.3 + index * 0.1}>
                  <div className="p-6 rounded-xl bg-gray-800/30 border border-gray-700/50">
                    <item.icon className="h-8 w-8 text-emerald-400 mx-auto mb-3" />
                    <div className="font-semibold text-white mb-1">{item.title}</div>
                    <div className="text-sm text-gray-500">{item.desc}</div>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <Link href="/platform">
              <Button variant="outline" rightIcon={<ArrowRight className="h-4 w-4" />}>
                Explore Platform
              </Button>
            </Link>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950/30 via-gray-950 to-gray-950" />
      <BackgroundOrbs />
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s Discuss Your Regulatory Challenges
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Whether you&apos;re navigating crypto regulations, building risk frameworks, 
              or preparing for audit — we&apos;re here to help.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid md:grid-cols-4 gap-4 mb-12">
              {[
                { icon: FileSearch, title: 'Gap Analysis', desc: 'Free initial review' },
                { icon: Lock, title: 'Confidential', desc: 'NDA available' },
                { icon: Users, title: 'Expert Team', desc: 'Quant & legal' },
                { icon: Globe, title: 'Global Reach', desc: 'UK, EU, UAE, USA' },
              ].map((item, index) => (
                <ScaleIn key={index} delay={0.3 + index * 0.1}>
                  <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 text-center">
                    <item.icon className="h-6 w-6 text-violet-400 mx-auto mb-2" />
                    <div className="font-semibold text-white text-sm">{item.title}</div>
                    <div className="text-xs text-gray-500">{item.desc}</div>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <MagneticButton>
                  <Button size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                    Get in Touch
                  </Button>
                </MagneticButton>
              </Link>
              <Link href="/services">
                <MagneticButton>
                  <Button variant="secondary" size="lg">
                    View All Services
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

// Main Page
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <HeroSection />
      <ServicesSection />
      <JurisdictionsSection />
      <WhyUsSection />
      <ServiceCategoriesSection />
      <PlatformSection />
      <CTASection />
    </div>
  );
}
