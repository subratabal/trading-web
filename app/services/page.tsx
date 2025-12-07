'use client';

import Link from 'next/link';
import { Button, Container, Card, Badge } from '@/components/ui';
import {
  FadeIn,
  SlideIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
  GlowCard,
  Floating,
  Reveal,
  ClipReveal,
  MagneticButton,
} from '@/components/motion';
import {
  Shield,
  ArrowRight,
  CheckCircle2,
  Scale,
  FileCheck,
  Globe,
  Coins,
  Landmark,
  ClipboardCheck,
  Settings,
  FileSearch,
  Users,
  Building2,
  AlertTriangle,
  Eye,
  BookOpen,
  Briefcase,
  Target,
  TrendingUp,
  Lock,
  Cpu,
} from 'lucide-react';

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
    </div>
  );
}

// Main service categories
const serviceCategories = [
  {
    id: 'regulatory-advisory',
    icon: Landmark,
    title: 'Regulatory Advisory',
    description: 'Expert guidance on navigating complex regulatory landscapes across crypto and traditional finance.',
    gradient: 'from-blue-500 to-cyan-600',
    services: [
      {
        name: 'License Applications',
        desc: 'End-to-end support for regulatory license applications including EMI, PI, CASP, and VARA.',
      },
      {
        name: 'Gap Analysis',
        desc: 'Comprehensive assessment of your current compliance posture against regulatory requirements.',
      },
      {
        name: 'Regulatory Mapping',
        desc: 'Map your business activities to applicable regulations across multiple jurisdictions.',
      },
      {
        name: 'Compliance Roadmaps',
        desc: 'Prioritised action plans to achieve and maintain regulatory compliance.',
      },
      {
        name: 'Regulatory Change Management',
        desc: 'Stay ahead of regulatory changes with proactive monitoring and impact assessment.',
      },
    ],
  },
  {
    id: 'risk-management',
    icon: Shield,
    title: 'Risk Management',
    description: 'Enterprise-grade risk frameworks designed for trading operations in traditional and digital asset markets.',
    gradient: 'from-amber-500 to-orange-600',
    services: [
      {
        name: 'Risk Framework Design',
        desc: 'Build comprehensive risk management frameworks tailored to your trading activities.',
      },
      {
        name: 'Model Validation',
        desc: 'Independent validation of trading models, risk models, and pricing models.',
      },
      {
        name: 'Stress Testing',
        desc: 'Design and execute stress testing programmes for market, credit, and liquidity risk.',
      },
      {
        name: 'Risk Reporting',
        desc: 'Develop risk dashboards and reporting frameworks for board and regulatory purposes.',
      },
      {
        name: 'Operational Risk',
        desc: 'Identify, assess, and mitigate operational risks across your trading infrastructure.',
      },
    ],
  },
  {
    id: 'controls-audit',
    icon: ClipboardCheck,
    title: 'Controls & Audit',
    description: 'Robust control frameworks and audit support to ensure operational excellence and regulatory readiness.',
    gradient: 'from-violet-500 to-purple-600',
    services: [
      {
        name: 'Control Framework Design',
        desc: 'Design and implement pre-trade, post-trade, and operational controls.',
      },
      {
        name: 'Policy Development',
        desc: 'Create comprehensive policy libraries covering all regulatory requirements.',
      },
      {
        name: 'Audit Preparation',
        desc: 'Get audit-ready with documentation, evidence packs, and walkthrough support.',
      },
      {
        name: 'Assurance Reviews',
        desc: 'Independent assurance reviews of controls, processes, and compliance.',
      },
      {
        name: 'Control Testing',
        desc: 'Regular testing of control effectiveness with remediation recommendations.',
      },
    ],
  },
  {
    id: 'operations',
    icon: Settings,
    title: 'Operations & COO Support',
    description: 'Outsourced COO function and operational support for trading firms of all sizes.',
    gradient: 'from-emerald-500 to-teal-600',
    services: [
      {
        name: 'COO-as-a-Service',
        desc: 'Full COO function support without the full-time headcount. Scale as you grow.',
      },
      {
        name: 'Policy Library Management',
        desc: 'Maintain and update your policy library with version control and attestation tracking.',
      },
      {
        name: 'Compliance Calendar',
        desc: 'Track regulatory deadlines, filings, and renewals across all jurisdictions.',
      },
      {
        name: 'Board Reporting',
        desc: 'Prepare board packs, risk reports, and compliance updates for governance.',
      },
      {
        name: 'Regulatory Liaison',
        desc: 'Manage relationships and communications with regulatory authorities.',
      },
    ],
  },
];

// Crypto-specific services
const cryptoServices = [
  { name: 'UK DSS Readiness', desc: 'Digital Securities Sandbox preparation and application' },
  { name: 'MiCA Compliance', desc: 'EU crypto asset regulation preparation' },
  { name: 'VARA Licensing', desc: 'Dubai virtual asset regulatory authority support' },
  { name: 'AML/KYC Frameworks', desc: 'Crypto-specific anti-money laundering programmes' },
  { name: 'Travel Rule Compliance', desc: 'FATF Travel Rule implementation for crypto' },
  { name: 'Wallet & Custody', desc: 'Secure custody and wallet management policies' },
];

// Algo-specific services
const algoServices = [
  { name: 'MiFID II Compliance', desc: 'Algorithmic trading requirements under MiFID II' },
  { name: 'DORA Readiness', desc: 'Digital Operational Resilience Act preparation' },
  { name: 'Algorithm Governance', desc: 'Approval, testing, and change management frameworks' },
  { name: 'Best Execution', desc: 'Best execution policies and monitoring' },
  { name: 'Market Abuse', desc: 'Surveillance and market abuse prevention' },
  { name: 'Transaction Reporting', desc: 'EMIR, MiFIR, and other reporting regimes' },
];

// Engagement models
const engagementModels = [
  {
    icon: FileSearch,
    title: 'Advisory Project',
    description: 'One-off engagements for specific challenges like gap analysis, license applications, or framework design.',
    features: ['Fixed scope & timeline', 'Clear deliverables', 'Knowledge transfer'],
  },
  {
    icon: Users,
    title: 'Retainer',
    description: 'Ongoing advisory support with dedicated hours each month for continuous compliance needs.',
    features: ['Monthly hours allocation', 'Priority access', 'Proactive monitoring'],
  },
  {
    icon: Building2,
    title: 'COO-as-a-Service',
    description: 'Comprehensive operational support functioning as your outsourced COO team.',
    features: ['Full COO function', 'Scalable support', 'Regulatory liaison'],
  },
];

// Industries served
const industries = [
  'Crypto Funds',
  'Prop Trading Firms',
  'Hedge Funds',
  'Market Makers',
  'DeFi Projects',
  'Exchanges',
  'Custodians',
  'Asset Managers',
];

export default function ServicesPage() {
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
                <FileCheck className="h-3.5 w-3.5 mr-2" />
                Our Services
              </Badge>
            </FadeIn>
            
            <ClipReveal>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Risk, Governance & Compliance Services
              </h1>
            </ClipReveal>
            
            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Comprehensive services for trading firms navigating the regulatory 
                landscape in crypto and traditional markets.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <MagneticButton>
                    <Button size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                      Discuss Your Needs
                    </Button>
                  </MagneticButton>
                </Link>
                <Link href="/crypto">
                  <Button variant="outline" size="lg">
                    Crypto Services
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Main Service Categories */}
      <section className="py-24 bg-gray-950">
        <Container>
          <div className="text-center mb-16">
            <Reveal>
              <Badge variant="secondary" className="mb-4">
                <Briefcase className="h-3 w-3 mr-1" />
                Service Categories
              </Badge>
            </Reveal>
            <ClipReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What We Offer
              </h2>
            </ClipReveal>
          </div>

          <div className="space-y-16">
            {serviceCategories.map((category, index) => (
              <SlideIn key={category.id} direction={index % 2 === 0 ? 'left' : 'right'}>
                <GlowCard className="bg-gray-900/80 border border-gray-800 rounded-2xl p-8 md:p-12">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Header */}
                    <div className="lg:col-span-1">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${category.gradient} mb-6 shadow-lg`}>
                        <category.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{category.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{category.description}</p>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-2">
                      <div className="grid md:grid-cols-2 gap-4">
                        {category.services.map((service, sIndex) => (
                          <div
                            key={sIndex}
                            className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50"
                          >
                            <div className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-violet-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="font-semibold text-white mb-1">{service.name}</div>
                                <div className="text-sm text-gray-500">{service.desc}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </SlideIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Crypto & Algo Specific */}
      <section className="py-24 bg-gray-900/50 relative overflow-hidden">
        <BackgroundOrbs />
        <Container className="relative z-10">
          <div className="text-center mb-16">
            <Reveal>
              <Badge variant="primary" className="mb-4">
                <Target className="h-3 w-3 mr-1" />
                Specialised Services
              </Badge>
            </Reveal>
            <ClipReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Crypto & Algo Trading Focus
              </h2>
            </ClipReveal>
            <FadeIn delay={0.2}>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Deep expertise in the unique regulatory requirements of crypto and algorithmic trading
              </p>
            </FadeIn>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Crypto */}
            <SlideIn direction="left">
              <Card variant="gradient" className="h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-amber-500/20 flex items-center justify-center">
                    <Coins className="h-7 w-7 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Crypto Compliance</h3>
                    <p className="text-sm text-gray-500">Digital asset regulations</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {cryptoServices.map((service, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/30">
                      <CheckCircle2 className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-white text-sm">{service.name}</div>
                        <div className="text-xs text-gray-500">{service.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link href="/crypto">
                    <Button variant="outline" size="sm" rightIcon={<ArrowRight className="h-3 w-3" />}>
                      Learn More
                    </Button>
                  </Link>
                </div>
              </Card>
            </SlideIn>

            {/* Algo */}
            <SlideIn direction="right">
              <Card variant="gradient" className="h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-violet-500/20 flex items-center justify-center">
                    <Scale className="h-7 w-7 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Algo Governance</h3>
                    <p className="text-sm text-gray-500">Algorithmic trading compliance</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {algoServices.map((service, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/30">
                      <CheckCircle2 className="h-4 w-4 text-violet-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-white text-sm">{service.name}</div>
                        <div className="text-xs text-gray-500">{service.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link href="/governance">
                    <Button variant="outline" size="sm" rightIcon={<ArrowRight className="h-3 w-3" />}>
                      Learn More
                    </Button>
                  </Link>
                </div>
              </Card>
            </SlideIn>
          </div>
        </Container>
      </section>

      {/* Engagement Models */}
      <section className="py-24 bg-gray-950">
        <Container>
          <div className="text-center mb-16">
            <Reveal>
              <Badge variant="secondary" className="mb-4">
                <TrendingUp className="h-3 w-3 mr-1" />
                How We Work
              </Badge>
            </Reveal>
            <ClipReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Engagement Models
              </h2>
            </ClipReveal>
            <FadeIn delay={0.2}>
              <p className="text-lg text-gray-400 max-w-xl mx-auto">
                Flexible engagement options to match your needs and budget
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {engagementModels.map((model, index) => (
              <StaggerItem key={index}>
                <Card hover className="h-full text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 mb-6">
                    <model.icon className="h-8 w-8 text-violet-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{model.title}</h3>
                  <p className="text-gray-400 text-sm mb-6">{model.description}</p>
                  <ul className="space-y-2">
                    {model.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center justify-center text-sm text-gray-300">
                        <CheckCircle2 className="h-4 w-4 text-violet-400 mr-2" />
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

      {/* Industries */}
      <section className="py-24 bg-gray-900/50">
        <Container>
          <div className="text-center mb-12">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Industries We Serve
              </h2>
            </Reveal>
            <FadeIn delay={0.2}>
              <div className="flex flex-wrap justify-center gap-3">
                {industries.map((industry, index) => (
                  <ScaleIn key={index} delay={0.1 * index}>
                    <span className="px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-300 text-sm">
                      {industry}
                    </span>
                  </ScaleIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/30 via-gray-950 to-gray-950" />
        <BackgroundOrbs />
        
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Let&apos;s discuss your regulatory challenges and how we can help.
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
                <Link href="/about">
                  <Button variant="secondary" size="lg">
                    About Us
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
