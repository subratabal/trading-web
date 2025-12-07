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
  TiltCard,
  Floating,
  Reveal,
  ClipReveal,
  MagneticButton,
} from '@/components/motion';
import {
  ArrowRight,
  CheckCircle2,
  Scale,
  Shield,
  FileCheck,
  Settings,
  AlertTriangle,
  Lock,
  Eye,
  GitBranch,
  Cpu,
  ClipboardCheck,
  LineChart,
  Users,
  Clock,
  Target,
  BookOpen,
  Zap,
  BarChart3,
  Activity,
  Building2,
} from 'lucide-react';

// Animated background
function BackgroundOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Floating duration={20} amplitude={30}>
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[100px]" />
      </Floating>
      <Floating duration={25} amplitude={40}>
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />
      </Floating>
    </div>
  );
}

// Three Lines of Defence
const linesOfDefence = [
  {
    line: '1st Line',
    title: 'Business Operations',
    description: 'Front-line trading operations that own and manage risk on a daily basis.',
    color: 'emerald',
    functions: [
      { name: 'Trading Desk', desc: 'Day-to-day risk ownership' },
      { name: 'Operations', desc: 'Trade settlement and reconciliation' },
      { name: 'Technology', desc: 'System controls and monitoring' },
      { name: 'Product', desc: 'New product risk assessment' },
    ],
  },
  {
    line: '2nd Line',
    title: 'Risk & Compliance',
    description: 'Independent oversight functions that challenge and monitor the first line.',
    color: 'violet',
    functions: [
      { name: 'Risk Management', desc: 'Framework and methodology' },
      { name: 'Compliance', desc: 'Regulatory adherence' },
      { name: 'Legal', desc: 'Legal risk management' },
      { name: 'Information Security', desc: 'Cyber and data protection' },
    ],
  },
  {
    line: '3rd Line',
    title: 'Audit & Assurance',
    description: 'Independent assurance on the effectiveness of governance, risk, and controls.',
    color: 'amber',
    functions: [
      { name: 'Internal Audit', desc: 'Independent testing' },
      { name: 'External Audit', desc: 'Statutory assurance' },
      { name: 'Model Validation', desc: 'Independent model review' },
      { name: 'Regulatory Review', desc: 'Regulator examinations' },
    ],
  },
];

// Algo governance frameworks
const algoFrameworks = [
  {
    icon: GitBranch,
    title: 'Algorithm Lifecycle',
    description: 'Governance across the full algorithm lifecycle from development to retirement.',
    stages: [
      'Design & Development',
      'Testing & Validation',
      'Approval & Sign-off',
      'Production Deployment',
      'Monitoring & Review',
      'Change Management',
      'Retirement',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Pre-Trade Controls',
    description: 'Controls that prevent erroneous or non-compliant trades from reaching the market.',
    controls: [
      'Order size limits',
      'Price collars',
      'Position limits',
      'Fat finger checks',
      'Credit checks',
      'Regulatory restrictions',
    ],
  },
  {
    icon: Eye,
    title: 'Post-Trade Monitoring',
    description: 'Surveillance and monitoring of trading activity for risk and compliance.',
    areas: [
      'P&L monitoring',
      'Position monitoring',
      'Best execution analysis',
      'Market abuse surveillance',
      'Transaction reporting',
      'Anomaly detection',
    ],
  },
];

// Risk management areas
const riskAreas = [
  {
    icon: LineChart,
    title: 'Market Risk',
    description: 'Risk of losses from movements in market prices.',
    metrics: ['VaR', 'Stress testing', 'Scenario analysis', 'Greeks', 'Sensitivity analysis'],
  },
  {
    icon: Building2,
    title: 'Credit Risk',
    description: 'Risk of counterparty default or credit deterioration.',
    metrics: ['Counterparty exposure', 'PFE', 'Credit limits', 'Netting analysis', 'Collateral management'],
  },
  {
    icon: Activity,
    title: 'Liquidity Risk',
    description: 'Risk of inability to meet obligations or exit positions.',
    metrics: ['Funding liquidity', 'Market liquidity', 'Concentration risk', 'Stress scenarios'],
  },
  {
    icon: AlertTriangle,
    title: 'Operational Risk',
    description: 'Risk of loss from inadequate processes, systems, or external events.',
    metrics: ['RCSA', 'KRIs', 'Incident management', 'BCP/DR', 'Vendor risk'],
  },
];

// Regulatory frameworks
const regulations = [
  {
    name: 'MiFID II',
    region: 'EU',
    requirements: [
      'Algorithmic trading authorisation',
      'Systems and controls',
      'Kill functionality',
      'Pre and post-trade controls',
      'Monitoring and surveillance',
    ],
  },
  {
    name: 'DORA',
    region: 'EU',
    requirements: [
      'ICT risk management framework',
      'Incident classification and reporting',
      'Digital operational resilience testing',
      'Third-party risk management',
      'Information sharing',
    ],
  },
  {
    name: 'SM&CR',
    region: 'UK',
    requirements: [
      'Senior manager accountability',
      'Certification regime',
      'Conduct rules',
      'Statements of responsibility',
      'Fitness and propriety',
    ],
  },
  {
    name: 'SEC Rule 15c3-5',
    region: 'USA',
    requirements: [
      'Market access controls',
      'Risk management controls',
      'Supervisory procedures',
      'Annual CEO certification',
      'Erroneous order prevention',
    ],
  },
];

// COO services
const cooServices = [
  {
    icon: FileCheck,
    title: 'Policy Management',
    description: 'Maintain and update your policy library with proper version control and attestation.',
  },
  {
    icon: Clock,
    title: 'Compliance Calendar',
    description: 'Track regulatory deadlines, filings, attestations, and renewals across jurisdictions.',
  },
  {
    icon: BarChart3,
    title: 'Board Reporting',
    description: 'Prepare comprehensive board packs, risk reports, and compliance dashboards.',
  },
  {
    icon: Users,
    title: 'Regulatory Liaison',
    description: 'Manage relationships and communications with regulatory authorities.',
  },
  {
    icon: Shield,
    title: 'Risk Oversight',
    description: 'Ongoing monitoring of risk metrics, limits, and breaches with escalation procedures.',
  },
  {
    icon: Settings,
    title: 'Operational Support',
    description: 'Day-to-day operational compliance support scaled to your needs.',
  },
];

export default function GovernancePage() {
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
                <Scale className="h-3.5 w-3.5 mr-2" />
                Algo Governance
              </Badge>
            </FadeIn>
            
            <ClipReveal>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Risk, Controls & Governance for Algorithmic Trading
              </h1>
            </ClipReveal>
            
            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl text-gray-400 mb-4 max-w-2xl mx-auto">
                Comprehensive governance frameworks for algorithmic trading operations. 
                From risk management to regulatory compliance to COO support.
              </p>
              <p className="text-base text-gray-500 mb-8 max-w-xl mx-auto">
                Built by quants who understand trading. Designed for firms who take governance seriously.
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
                    Crypto Compliance
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Three Lines of Defence */}
      <section className="py-24 bg-gray-950">
        <Container>
          <div className="text-center mb-16">
            <Reveal>
              <Badge variant="secondary" className="mb-4">
                <Shield className="h-3 w-3 mr-1" />
                Defence Framework
              </Badge>
            </Reveal>
            <ClipReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Three Lines of Defence
              </h2>
            </ClipReveal>
            <FadeIn delay={0.2}>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                A structured approach to risk management and governance adopted by 
                leading financial institutions worldwide.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {linesOfDefence.map((line, index) => (
              <StaggerItem key={index}>
                <Card hover className="h-full">
                  <div className={`inline-flex items-center justify-center px-3 py-1 rounded-full mb-4 ${
                    line.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400' :
                    line.color === 'violet' ? 'bg-violet-500/20 text-violet-400' :
                    'bg-amber-500/20 text-amber-400'
                  }`}>
                    <span className="text-xs font-bold">{line.line}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{line.title}</h3>
                  <p className="text-gray-400 text-sm mb-6">{line.description}</p>
                  <div className="space-y-3">
                    {line.functions.map((func, fIndex) => (
                      <div key={fIndex} className="p-3 rounded-lg bg-gray-800/30">
                        <div className="font-medium text-white text-sm">{func.name}</div>
                        <div className="text-xs text-gray-500">{func.desc}</div>
                      </div>
                    ))}
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Algorithm Governance */}
      <section className="py-24 bg-gray-900/50 relative overflow-hidden">
        <BackgroundOrbs />
        <Container className="relative z-10">
          <div className="text-center mb-16">
            <Reveal>
              <Badge variant="primary" className="mb-4">
                <Cpu className="h-3 w-3 mr-1" />
                Algorithm Governance
              </Badge>
            </Reveal>
            <ClipReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Algo Trading Controls
              </h2>
            </ClipReveal>
            <FadeIn delay={0.2}>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Robust governance frameworks for algorithmic trading systems
              </p>
            </FadeIn>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {algoFrameworks.map((framework, index) => (
              <SlideIn key={index} direction={index === 0 ? 'left' : 'right'}>
                <GlowCard className="h-full bg-gray-900/80 border border-gray-800 rounded-2xl p-8">
                  <div className="w-14 h-14 rounded-xl bg-violet-500/20 flex items-center justify-center mb-6">
                    <framework.icon className="h-7 w-7 text-violet-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{framework.title}</h3>
                  <p className="text-gray-400 text-sm mb-6">{framework.description}</p>
                  <ul className="space-y-2">
                    {(framework.stages || framework.controls || framework.areas || []).map((item, iIndex) => (
                      <li key={iIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle2 className="h-4 w-4 text-violet-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              </SlideIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Risk Management */}
      <section className="py-24 bg-gray-950">
        <Container>
          <div className="text-center mb-16">
            <Reveal>
              <Badge variant="secondary" className="mb-4">
                <AlertTriangle className="h-3 w-3 mr-1" />
                Risk Management
              </Badge>
            </Reveal>
            <ClipReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Risk Frameworks
              </h2>
            </ClipReveal>
            <FadeIn delay={0.2}>
              <p className="text-lg text-gray-400 max-w-xl mx-auto">
                Enterprise-grade risk management for trading operations
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {riskAreas.map((risk, index) => (
              <StaggerItem key={index}>
                <TiltCard className="h-full">
                  <Card hover className="h-full">
                    <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-4">
                      <risk.icon className="h-6 w-6 text-violet-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{risk.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{risk.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {risk.metrics.map((metric, mIndex) => (
                        <span
                          key={mIndex}
                          className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-400"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </Card>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Regulatory Frameworks */}
      <section className="py-24 bg-gray-900/50 relative overflow-hidden">
        <BackgroundOrbs />
        <Container className="relative z-10">
          <div className="text-center mb-16">
            <Reveal>
              <Badge variant="primary" className="mb-4">
                <BookOpen className="h-3 w-3 mr-1" />
                Regulatory Compliance
              </Badge>
            </Reveal>
            <ClipReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Regulatory Frameworks
              </h2>
            </ClipReveal>
            <FadeIn delay={0.2}>
              <p className="text-lg text-gray-400 max-w-xl mx-auto">
                Deep expertise in algo trading regulations across jurisdictions
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regulations.map((reg, index) => (
              <StaggerItem key={index}>
                <Card hover className="h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white">{reg.name}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-violet-500/20 text-violet-400">
                      {reg.region}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {reg.requirements.map((req, rIndex) => (
                      <li key={rIndex} className="flex items-start text-sm text-gray-400">
                        <CheckCircle2 className="h-3 w-3 text-violet-400 mr-2 mt-0.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* COO Services */}
      <section className="py-24 bg-gray-950">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <SlideIn direction="left">
                <Badge variant="secondary" className="mb-4">
                  <Settings className="h-3 w-3 mr-1" />
                  COO-as-a-Service
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Your Outsourced COO Function
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  You need a COO function, but not necessarily a full-time COO. 
                  We provide scalable operational support that grows with your business.
                </p>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  From policy management to regulatory liaison to board reporting — 
                  we handle the operational compliance so you can focus on trading.
                </p>
                <Link href="/contact">
                  <Button rightIcon={<ArrowRight className="h-4 w-4" />}>
                    Learn More
                  </Button>
                </Link>
              </SlideIn>
            </div>

            {/* Right */}
            <div>
              <StaggerContainer className="grid grid-cols-2 gap-4">
                {cooServices.map((service, index) => (
                  <StaggerItem key={index}>
                    <Card className="h-full">
                      <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center mb-3">
                        <service.icon className="h-5 w-5 text-violet-400" />
                      </div>
                      <h3 className="font-semibold text-white mb-2 text-sm">{service.title}</h3>
                      <p className="text-xs text-gray-500">{service.description}</p>
                    </Card>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
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
                Ready to Strengthen Your Governance?
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Whether you need a full risk framework review, help with MiFID II compliance, 
                or ongoing COO support — we&apos;re here to help.
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
                <Link href="/services">
                  <Button variant="secondary" size="lg">
                    All Services
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
