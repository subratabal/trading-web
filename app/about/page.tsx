'use client';

import Link from 'next/link';
import { Button, Container, Card, Badge } from '@/components/ui';
import {
  FadeIn,
  SlideIn,
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
  Users,
  Target,
  Brain,
  Shield,
  Globe,
  Sparkles,
  Building2,
  Lightbulb,
  Heart,
} from 'lucide-react';

// Animated background
function BackgroundOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Floating duration={20} amplitude={30}>
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[100px]" />
      </Floating>
      <Floating duration={25} amplitude={40}>
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px]" />
      </Floating>
    </div>
  );
}

// Core values
const values = [
  {
    icon: Brain,
    title: 'Quant Expertise',
    description: 'We bring deep quantitative finance experience to every engagement. We understand trading because we\'ve built trading systems.',
  },
  {
    icon: Shield,
    title: 'Rigorous Standards',
    description: 'We apply the same rigour to governance that quants apply to models. No shortcuts, no compromises.',
  },
  {
    icon: Sparkles,
    title: 'AI-First Approach',
    description: 'We leverage AI to work smarter — faster analysis, better insights, more efficient delivery.',
  },
  {
    icon: Heart,
    title: 'Client Partnership',
    description: 'We\'re not just advisors. We become an extension of your team, invested in your success.',
  },
];

// What makes us different
const differentiators = [
  'Built by quants who understand trading operations',
  'AI-powered tools for faster, smarter compliance',
  '40+ policy templates ready to customise',
  'Multi-jurisdiction expertise (UK, EU, UAE, USA)',
  'Flexible engagement models to match your needs',
  'Both crypto and traditional finance experience',
];

// Focus areas
const focusAreas = [
  { title: 'Crypto Compliance', desc: 'MiCA, VARA, UK DSS, AML/KYC' },
  { title: 'Algo Governance', desc: 'MiFID II, DORA, controls' },
  { title: 'Risk Management', desc: 'Frameworks, validation, testing' },
  { title: 'COO Support', desc: 'Operations, policy, reporting' },
];

export default function AboutPage() {
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
                <Users className="h-3.5 w-3.5 mr-2" />
                About Us
              </Badge>
            </FadeIn>
            
            <ClipReveal>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                The Quants Who Keep You Compliant
              </h1>
            </ClipReveal>
            
            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                AI & Quant Labs provides risk, governance, and compliance services for 
                trading firms in crypto and traditional markets. We combine deep quant 
                expertise with AI-powered efficiency.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-gray-950">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideIn direction="left">
              <Badge variant="secondary" className="mb-4">
                <Lightbulb className="h-3 w-3 mr-1" />
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                From Trading Floors to Governance
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  AI & Quant Labs was founded with a simple observation: the best governance 
                  professionals are those who truly understand what they&apos;re governing.
                </p>
                <p>
                  Our team brings years of experience in quantitative trading, algorithm 
                  development, and financial technology. We&apos;ve built the systems, managed 
                  the risks, and navigated the regulations ourselves.
                </p>
                <p>
                  Now we help other trading firms do the same — with the added advantage of 
                  AI-powered tools that make compliance faster, smarter, and more cost-effective.
                </p>
              </div>
            </SlideIn>

            <SlideIn direction="right">
              <div className="grid grid-cols-2 gap-4">
                {focusAreas.map((area, index) => (
                  <ScaleIn key={index} delay={0.1 * index}>
                    <Card hover className="text-center">
                      <h3 className="font-bold text-white mb-2">{area.title}</h3>
                      <p className="text-xs text-gray-500">{area.desc}</p>
                    </Card>
                  </ScaleIn>
                ))}
              </div>
            </SlideIn>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-900/50 relative overflow-hidden">
        <BackgroundOrbs />
        <Container className="relative z-10">
          <div className="text-center mb-16">
            <Reveal>
              <Badge variant="primary" className="mb-4">
                <Target className="h-3 w-3 mr-1" />
                Our Values
              </Badge>
            </Reveal>
            <ClipReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What We Stand For
              </h2>
            </ClipReveal>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <Card hover className="h-full text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 mb-6">
                    <value.icon className="h-7 w-7 text-violet-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-950">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Reveal>
                <Badge variant="secondary" className="mb-4">
                  <Building2 className="h-3 w-3 mr-1" />
                  Why AI & Quant Labs
                </Badge>
              </Reveal>
              <ClipReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  What Makes Us Different
                </h2>
              </ClipReveal>
            </div>

            <StaggerContainer className="grid md:grid-cols-2 gap-4">
              {differentiators.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                    <CheckCircle2 className="h-5 w-5 text-violet-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </Container>
      </section>

      {/* Global Coverage */}
      <section className="py-24 bg-gray-900/50">
        <Container>
          <div className="text-center mb-12">
            <Reveal>
              <Badge variant="primary" className="mb-4">
                <Globe className="h-3 w-3 mr-1" />
                Global Reach
              </Badge>
            </Reveal>
            <ClipReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Jurisdictions We Cover
              </h2>
            </ClipReveal>
          </div>

          <FadeIn delay={0.2}>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { flag: '🇬🇧', name: 'United Kingdom' },
                { flag: '🇪🇺', name: 'European Union' },
                { flag: '🇦🇪', name: 'UAE' },
                { flag: '🇺🇸', name: 'United States' },
              ].map((jurisdiction, index) => (
                <ScaleIn key={index} delay={0.1 * index}>
                  <div className="px-6 py-4 rounded-xl bg-gray-800/50 border border-gray-700/50 text-center">
                    <span className="text-3xl block mb-2">{jurisdiction.flag}</span>
                    <span className="text-gray-300 text-sm">{jurisdiction.name}</span>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </FadeIn>
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
                Ready to Work Together?
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Let&apos;s discuss how we can help with your risk, governance, and compliance needs.
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
                    Our Services
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
