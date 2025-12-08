'use client';

import { useState } from 'react';
import { Button, Container, Card, Badge } from '@/components/ui';
import {
  FadeIn,
  SlideIn,
  StaggerContainer,
  StaggerItem,
  Floating,
  Reveal,
  ClipReveal,
  MagneticButton,
} from '@/components/motion';
import {
  Mail,
  Clock,
  Send,
  MessageSquare,
  Calendar,
  Globe,
  CheckCircle2,
  Loader2,
  AlertCircle,
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

// Contact methods
const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'trading@aiquantlabs.com',
    href: 'mailto:trading@aiquantlabs.com',
    description: 'Best for detailed enquiries',
  },
  {
    icon: Calendar,
    title: 'Schedule a Call',
    value: 'Book a meeting',
    href: '#',
    description: 'Free 30-minute consultation',
  },
  {
    icon: Globe,
    title: 'Location',
    value: 'London, UK',
    href: null,
    description: 'Serving clients globally',
  },
];

// What to expect
const expectations = [
  'Free initial consultation to understand your needs',
  'No-obligation proposal with clear scope and pricing',
  'Confidential discussions (NDA available)',
  'Response within 24 hours on business days',
];

// Common enquiry types
const enquiryTypes = [
  { title: 'Crypto Compliance', desc: 'MiCA, VARA, UK DSS readiness' },
  { title: 'Algo Governance', desc: 'MiFID II, DORA, controls' },
  { title: 'Risk Frameworks', desc: 'Design, validation, testing' },
  { title: 'COO Support', desc: 'Operations and compliance' },
  { title: 'Gap Analysis', desc: 'Regulatory gap assessment' },
  { title: 'General Enquiry', desc: 'Other questions' },
];

// Form state type
type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    enquiryType: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          enquiryType: '',
          message: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Failed to send message');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  };

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
                <MessageSquare className="h-3.5 w-3.5 mr-2" />
                Contact Us
              </Badge>
            </FadeIn>
            
            <ClipReveal>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Let&apos;s Discuss Your Needs
              </h1>
            </ClipReveal>
            
            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Whether you&apos;re navigating crypto regulations, building risk frameworks, 
                or need ongoing compliance support — we&apos;re here to help.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-gray-950">
        <Container>
          <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <StaggerItem key={index}>
                <Card hover className="h-full text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 mb-6">
                    <method.icon className="h-7 w-7 text-violet-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{method.title}</h3>
                  {method.href ? (
                    <a
                      href={method.href}
                      className="text-violet-400 hover:text-violet-300 transition-colors"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-gray-300">{method.value}</p>
                  )}
                  <p className="text-sm text-gray-500 mt-2">{method.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - What to Expect */}
            <SlideIn direction="left">
              <div>
                <Badge variant="secondary" className="mb-4">
                  <Clock className="h-3 w-3 mr-1" />
                  What to Expect
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  How We Work
                </h2>
                <div className="space-y-4 mb-8">
                  {expectations.map((item, index) => (
                    <FadeIn key={index} delay={0.1 * index}>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-violet-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    </FadeIn>
                  ))}
                </div>

                <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700/50">
                  <h3 className="font-semibold text-white mb-4">Common Enquiry Types</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {enquiryTypes.map((type, index) => (
                      <div key={index} className="text-sm">
                        <div className="text-gray-300">{type.title}</div>
                        <div className="text-xs text-gray-500">{type.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SlideIn>

            {/* Right - Contact Form */}
            <SlideIn direction="right">
              <Card className="h-fit">
                <h3 className="text-xl font-bold text-white mb-6">Send Us a Message</h3>
                
                {/* Success Message */}
                {status === 'success' && (
                  <div className="mb-6 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                      <div>
                        <p className="font-medium text-emerald-400">Message sent successfully!</p>
                        <p className="text-sm text-gray-400">We&apos;ll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {status === 'error' && (
                  <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                    <div className="flex items-center gap-3">
                      <AlertCircle className="h-5 w-5 text-red-400" />
                      <div>
                        <p className="font-medium text-red-400">Failed to send message</p>
                        <p className="text-sm text-gray-400">{errorMessage}</p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={status === 'submitting'}
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={status === 'submitting'}
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors disabled:opacity-50"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors disabled:opacity-50"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Enquiry Type
                    </label>
                    <select
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors disabled:opacity-50"
                    >
                      <option value="">Select an option</option>
                      {enquiryTypes.map((type, index) => (
                        <option key={index} value={type.title}>
                          {type.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={status === 'submitting'}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors resize-none disabled:opacity-50"
                      placeholder="Tell us about your needs..."
                    />
                  </div>

                  <MagneticButton>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={status === 'submitting'}
                      rightIcon={
                        status === 'submitting' ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Send className="h-4 w-4" />
                        )
                      }
                    >
                      {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </Button>
                  </MagneticButton>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our Privacy Policy.
                  </p>
                </form>
              </Card>
            </SlideIn>
          </div>
        </Container>
      </section>
    </div>
  );
}
