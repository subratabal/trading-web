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
  Coins,
  Globe,
  Shield,
  FileCheck,
  AlertTriangle,
  Lock,
  Eye,
  Building2,
  Scale,
  Users,
  Clock,
  Landmark,
  BookOpen,
  Zap,
  Target,
} from 'lucide-react';

// Animated background
function BackgroundOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Floating duration={20} amplitude={30}>
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px]" />
      </Floating>
      <Floating duration={25} amplitude={40}>
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px]" />
      </Floating>
    </div>
  );
}

// Jurisdiction-specific crypto regulations
const jurisdictions = [
  {
    code: 'UK',
    name: 'United Kingdom',
    flag: '🇬🇧',
    regulator: 'FCA',
    highlight: 'Digital Securities Sandbox',
    status: 'Active (Jan 2024)',
    regulations: [
      {
        name: 'Digital Securities Sandbox (DSS)',
        desc: 'Testing ground for DLT-based financial market infrastructure',
        details: [
          'Sandbox Approval Notice (SAN) required',
          'Covers trading platforms, settlement, custody',
          'Distributed ledger technology focus',
          'Runs until January 2029',
        ],
      },
      {
        name: 'FCA Crypto Registration',
        desc: 'Anti-money laundering registration for crypto asset businesses',
        details: [
          'MLR 2017 compliance required',
          'Approximately 15% approval rate',
          'Comprehensive AML/KYC frameworks',
          'Financial promotions regime',
        ],
      },
      {
        name: 'Financial Promotions',
        desc: 'Strict rules on marketing crypto assets to UK consumers',
        details: [
          'Risk warnings mandatory',
          'Cooling-off periods',
          'Ban on incentives to invest',
          'Clear and fair communications',
        ],
      },
    ],
    challenges: [
      'Low approval rate for crypto registration',
      'Strict financial promotions regime',
      'No EU passporting post-Brexit',
    ],
    opportunities: [
      'DSS provides regulatory sandbox',
      'Clear regulatory framework',
      'Strong rule of law',
    ],
  },
  {
    code: 'EU',
    name: 'European Union',
    flag: '🇪🇺',
    regulator: 'ESMA / National CAs',
    highlight: 'MiCA Regulation',
    status: 'Full application June 2024',
    regulations: [
      {
        name: 'Markets in Crypto-Assets (MiCA)',
        desc: 'Comprehensive EU-wide crypto asset regulation',
        details: [
          'CASP (Crypto Asset Service Provider) licensing',
          'Asset-Referenced Token (ART) rules',
          'E-Money Token (EMT) requirements',
          'Whitepaper obligations',
        ],
      },
      {
        name: 'DORA',
        desc: 'Digital Operational Resilience Act for financial entities',
        details: [
          'ICT risk management framework',
          'Incident reporting requirements',
          'Third-party risk management',
          'Resilience testing',
        ],
      },
      {
        name: 'Transfer of Funds Regulation',
        desc: 'Travel Rule implementation for crypto transfers',
        details: [
          'Originator and beneficiary information',
          'Applies to CASPs',
          'No de minimis threshold',
          'Effective from December 2024',
        ],
      },
    ],
    challenges: [
      'Complex multi-member state coordination',
      'Varying national interpretations',
      'Significant compliance costs',
    ],
    opportunities: [
      'EU-wide passporting with single license',
      'Clear regulatory certainty',
      '27-country market access',
    ],
  },
  {
    code: 'UAE',
    name: 'United Arab Emirates',
    flag: '🇦🇪',
    regulator: 'VARA / DFSA / FSRA',
    highlight: 'VARA Licensing',
    status: 'Active and growing',
    regulations: [
      {
        name: 'VARA (Virtual Assets Regulatory Authority)',
        desc: 'Dubai\'s dedicated virtual asset regulator',
        details: [
          'Seven activity types licensed',
          'Comprehensive rulebook',
          'Marketing and promotion rules',
          'Custody and exchange requirements',
        ],
      },
      {
        name: 'DFSA (DIFC)',
        desc: 'Dubai International Financial Centre regime',
        details: [
          'Investment Token framework',
          'Recognised Crypto Token regime',
          'Clear classification framework',
          'International standards aligned',
        ],
      },
      {
        name: 'FSRA (ADGM)',
        desc: 'Abu Dhabi Global Market framework',
        details: [
          'Virtual Asset Framework',
          'Spot and derivatives',
          'Custody services',
          'MLT (Multilateral Trading Facility)',
        ],
      },
    ],
    challenges: [
      'Multiple regulators in one country',
      'Evolving requirements',
      'Substance requirements',
    ],
    opportunities: [
      'Most progressive crypto jurisdiction',
      '0% corporate tax',
      'Government support for Web3',
      'Global hub positioning',
    ],
  },
  {
    code: 'USA',
    name: 'United States',
    flag: '🇺🇸',
    regulator: 'SEC / CFTC / FinCEN',
    highlight: 'Multi-Agency Landscape',
    status: 'Complex and evolving',
    regulations: [
      {
        name: 'Securities Laws',
        desc: 'SEC jurisdiction over crypto securities',
        details: [
          'Howey Test for securities classification',
          'Registration or exemption required',
          'Enforcement-driven regulation',
          'Broker-dealer requirements',
        ],
      },
      {
        name: 'Commodities Regulation',
        desc: 'CFTC jurisdiction over crypto commodities',
        details: [
          'Bitcoin and Ether as commodities',
          'Derivatives regulation',
          'DCM and SEF requirements',
          'Anti-fraud authority',
        ],
      },
      {
        name: 'State Money Transmission',
        desc: 'State-by-state licensing requirements',
        details: [
          '48 states with different requirements',
          'BitLicense in New York',
          'Surety bond requirements',
          'Multi-year compliance journey',
        ],
      },
    ],
    challenges: [
      'Regulatory uncertainty',
      'Multi-agency jurisdiction',
      'State-by-state licensing',
      'Enforcement-first approach',
    ],
    opportunities: [
      'Largest market globally',
      'Deep capital markets',
      'Clear SEC/CFTC boundary emerging',
    ],
  },
];

// Services we offer for crypto
const cryptoServices = [
  {
    icon: FileCheck,
    title: 'License Applications',
    description: 'End-to-end support for VARA, MiCA CASP, FCA registration, and other crypto licenses.',
    features: ['Application preparation', 'Documentation review', 'Regulator liaison', 'Post-approval support'],
  },
  {
    icon: Shield,
    title: 'AML/KYC Frameworks',
    description: 'Crypto-specific anti-money laundering programmes meeting regulatory expectations.',
    features: ['Risk assessment', 'Policy development', 'Transaction monitoring', 'SAR filing procedures'],
  },
  {
    icon: Scale,
    title: 'Regulatory Mapping',
    description: 'Understand which regulations apply to your crypto business across jurisdictions.',
    features: ['Token classification', 'Activity mapping', 'Jurisdiction analysis', 'Gap identification'],
  },
  {
    icon: Lock,
    title: 'Custody & Wallet',
    description: 'Secure custody arrangements and wallet management policies for digital assets.',
    features: ['Custody frameworks', 'Key management', 'Insurance requirements', 'Segregation policies'],
  },
  {
    icon: Eye,
    title: 'Travel Rule Compliance',
    description: 'FATF Travel Rule implementation for crypto asset transfers.',
    features: ['VASP identification', 'Data sharing protocols', 'Technology solutions', 'Compliance monitoring'],
  },
  {
    icon: AlertTriangle,
    title: 'Risk Frameworks',
    description: 'Enterprise risk management tailored for crypto operations.',
    features: ['Market risk', 'Counterparty risk', 'Operational risk', 'Smart contract risk'],
  },
];

// Why crypto compliance matters
const whyCompliance = [
  {
    title: 'Market Access',
    description: 'Regulated status opens doors to institutional clients, banking relationships, and larger markets.',
  },
  {
    title: 'Trust & Credibility',
    description: 'Demonstrate commitment to best practices and build trust with users and partners.',
  },
  {
    title: 'Future-Proofing',
    description: 'Get ahead of regulations rather than scrambling to catch up when enforcement increases.',
  },
  {
    title: 'Competitive Advantage',
    description: 'Stand out in a crowded market where many competitors remain unregulated.',
  },
];

export default function CryptoPage() {
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
                <Coins className="h-3.5 w-3.5 mr-2" />
                Crypto Compliance
              </Badge>
            </FadeIn>
            
            <ClipReveal>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Navigate Crypto Regulations with Confidence
              </h1>
            </ClipReveal>
            
            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl text-gray-400 mb-4 max-w-2xl mx-auto">
                From UK DSS to EU MiCA to UAE VARA — expert guidance on crypto asset 
                regulations across key jurisdictions.
              </p>
              <p className="text-base text-gray-500 mb-8 max-w-xl mx-auto">
                The regulatory landscape is evolving rapidly. We help you stay compliant and competitive.
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
                <Link href="/services">
                  <Button variant="outline" size="lg">
                    All Services
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Why Crypto Compliance */}
      <section className="py-24 bg-gray-950">
        <Container>
          <div className="text-center mb-16">
            <Reveal>
              <Badge variant="secondary" className="mb-4">
                <Target className="h-3 w-3 mr-1" />
                Why It Matters
              </Badge>
            </Reveal>
            <ClipReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                The Case for Crypto Compliance
              </h2>
            </ClipReveal>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyCompliance.map((item, index) => (
              <StaggerItem key={index}>
                <Card hover className="h-full text-center">
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Jurisdictions Deep Dive */}
      <section className="py-24 bg-gray-900/50 relative overflow-hidden">
        <BackgroundOrbs />
        <Container className="relative z-10">
          <div className="text-center mb-16">
            <Reveal>
              <Badge variant="primary" className="mb-4">
                <Globe className="h-3 w-3 mr-1" />
                Jurisdictions
              </Badge>
            </Reveal>
            <ClipReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Regulatory Landscape by Jurisdiction
              </h2>
            </ClipReveal>
            <FadeIn delay={0.2}>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Deep expertise in crypto regulations across key financial centres
              </p>
            </FadeIn>
          </div>

          <div className="space-y-12">
            {jurisdictions.map((jurisdiction, index) => (
              <SlideIn key={jurisdiction.code} direction={index % 2 === 0 ? 'left' : 'right'}>
                <GlowCard className="bg-gray-900/80 border border-gray-800 rounded-2xl p-8 md:p-10">
                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-4 mb-8">
                    <span className="text-4xl">{jurisdiction.flag}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{jurisdiction.name}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-amber-500/20 text-amber-400">
                          {jurisdiction.regulator}
                        </span>
                        <span className="text-xs px-2 py-1 rounded-full bg-violet-500/20 text-violet-400">
                          {jurisdiction.highlight}
                        </span>
                        <span className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300">
                          {jurisdiction.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Regulations */}
                  <div className="grid lg:grid-cols-3 gap-6 mb-8">
                    {jurisdiction.regulations.map((reg, rIndex) => (
                      <div key={rIndex} className="p-5 rounded-xl bg-gray-800/50 border border-gray-700/50">
                        <h4 className="font-bold text-white mb-2">{reg.name}</h4>
                        <p className="text-sm text-gray-500 mb-4">{reg.desc}</p>
                        <ul className="space-y-1">
                          {reg.details.map((detail, dIndex) => (
                            <li key={dIndex} className="flex items-start text-xs text-gray-400">
                              <CheckCircle2 className="h-3 w-3 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Challenges & Opportunities */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                      <h5 className="font-semibold text-red-400 mb-3 flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        Challenges
                      </h5>
                      <ul className="space-y-1">
                        {jurisdiction.challenges.map((challenge, cIndex) => (
                          <li key={cIndex} className="text-sm text-gray-400">{challenge}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                      <h5 className="font-semibold text-emerald-400 mb-3 flex items-center">
                        <Zap className="h-4 w-4 mr-2" />
                        Opportunities
                      </h5>
                      <ul className="space-y-1">
                        {jurisdiction.opportunities.map((opp, oIndex) => (
                          <li key={oIndex} className="text-sm text-gray-400">{opp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlowCard>
              </SlideIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Crypto Services */}
      <section className="py-24 bg-gray-950">
        <Container>
          <div className="text-center mb-16">
            <Reveal>
              <Badge variant="secondary" className="mb-4">
                <FileCheck className="h-3 w-3 mr-1" />
                Our Services
              </Badge>
            </Reveal>
            <ClipReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Crypto Compliance Services
              </h2>
            </ClipReveal>
            <FadeIn delay={0.2}>
              <p className="text-lg text-gray-400 max-w-xl mx-auto">
                End-to-end support for your crypto regulatory journey
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cryptoServices.map((service, index) => (
              <StaggerItem key={index}>
                <TiltCard className="h-full">
                  <Card hover className="h-full">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-amber-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                    <ul className="space-y-1">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-xs text-gray-500">
                          <CheckCircle2 className="h-3 w-3 text-amber-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/30 via-gray-950 to-gray-950" />
        <BackgroundOrbs />
        
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Navigate Crypto Regulations?
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Whether you&apos;re applying for a VARA license, preparing for MiCA, or seeking 
                FCA registration — we&apos;re here to help.
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
                <Link href="/governance">
                  <Button variant="secondary" size="lg">
                    Algo Governance
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
