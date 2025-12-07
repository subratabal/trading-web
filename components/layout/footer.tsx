'use client';

import Link from 'next/link';
import { Container } from '@/components/ui';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Suspense, useState, useEffect } from 'react';

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

const footerLinks: {
  services: FooterLink[];
  company: FooterLink[];
  legal: FooterLink[];
} = {
  services: [
    { label: 'All Services', href: '/services' },
    { label: 'Crypto Compliance', href: '/crypto' },
    { label: 'Algo Governance', href: '/governance' },
    { label: 'Risk Frameworks', href: '/governance#risk' },
    { label: 'COO Support', href: '/services#coo' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'CodeFlow', href: 'https://codeflow.aiquantlabs.com', external: true },
    { label: 'Academy', href: 'https://binapani.com', external: true },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
};

const socialLinks = [
  { icon: Github, href: 'https://github.com/aiquantlabs', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com/aiquantlabs', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/aiquantlabs', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:contact@aiquantlabs.com', label: 'Email' },
];

// Dynamic year component to avoid prerender issues
function CurrentYear() {
  const [year, setYear] = useState<number | null>(null);
  
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  
  return <>{year ?? '2025'}</>;
}

export function Footer() {

  return (
    <footer className="border-t border-gray-800 bg-gray-950">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="inline-block">
                <span className="text-xl font-bold gradient-text">AI & Quant Labs</span>
              </Link>
              <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                AI-powered risk, governance, and compliance for crypto and algorithmic trading operations.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-3 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider">
                Services
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider">
                Legal
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              &copy; <CurrentYear /> AI & Quant Labs. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Built with Next.js 16 & React 19
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
