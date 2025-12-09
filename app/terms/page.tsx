'use client';

import Link from 'next/link';
import { Container } from '@/components/ui';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <Container>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-400">
            Last updated: December 2025
          </p>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto prose prose-invert prose-gray">
            <div className="space-y-8 text-gray-300">
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                <p>
                  By accessing and using the AI & Quant Labs website (trading.aiquantlabs.com) and our 
                  risk, governance, and compliance services, you agree to be bound by these Terms of Service. 
                  If you do not agree to these terms, please do not use our services.
                </p>
                <p className="mt-4">
                  <strong className="text-white">Company Details:</strong><br />
                  AI & Quant Labs<br />
                  61 Redruth House, Grange Road<br />
                  Sutton, SM2 6RU<br />
                  United Kingdom
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Description of Services</h2>
                <p>
                  AI & Quant Labs provides regulatory advisory, risk management, governance frameworks, 
                  and compliance services for crypto and algorithmic trading firms. Our services include 
                  but are not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Crypto compliance advisory (MiCA, VARA, UK DSS, AML/KYC)</li>
                  <li>Algorithmic trading governance (MiFID II, DORA)</li>
                  <li>Risk management frameworks and validation</li>
                  <li>COO support and operational consulting</li>
                  <li>Educational resources and training</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Use of Website</h2>
                <p>You agree to use our website and services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Use the website in any way that violates applicable laws or regulations</li>
                  <li>Attempt to gain unauthorised access to our systems or networks</li>
                  <li>Transmit any viruses, malware, or harmful code</li>
                  <li>Collect or harvest personal information from other users</li>
                  <li>Use automated systems to access the website without permission</li>
                  <li>Interfere with the proper functioning of the website</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
                <p>
                  All content on this website, including text, graphics, logos, images, and software, 
                  is the property of AI & Quant Labs or its content suppliers and is protected by 
                  UK and international copyright laws.
                </p>
                <p className="mt-4">
                  You may not reproduce, distribute, modify, or create derivative works from any 
                  content without our express written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Professional Services Disclaimer</h2>
                <p>
                  The information provided on this website and through our services is for general 
                  informational purposes only and does not constitute legal, financial, or regulatory advice.
                </p>
                <p className="mt-4">
                  While we strive to provide accurate and up-to-date information, regulations and 
                  requirements change frequently. You should always consult with qualified legal and 
                  regulatory professionals before making decisions based on our content or recommendations.
                </p>
                <p className="mt-4">
                  Our advisory services are tailored to specific client needs under separate engagement 
                  agreements with their own terms and conditions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, AI & Quant Labs shall not be liable for any 
                  indirect, incidental, special, consequential, or punitive damages arising out of or 
                  relating to your use of our website or services.
                </p>
                <p className="mt-4">
                  Our total liability for any claims arising from your use of our website shall not 
                  exceed the amount you paid us for services in the twelve months preceding the claim.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless AI & Quant Labs, its officers, 
                  directors, employees, and agents from any claims, liabilities, damages, losses, 
                  and expenses arising from your use of our website or violation of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for 
                  the content, privacy policies, or practices of these external sites. Accessing 
                  third-party links is at your own risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. User Accounts</h2>
                <p>
                  If you create an account on our website, you are responsible for maintaining the 
                  confidentiality of your login credentials. You agree to notify us immediately of 
                  any unauthorised use of your account.
                </p>
                <p className="mt-4">
                  We reserve the right to suspend or terminate accounts that violate these Terms 
                  or for any other reason at our discretion.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Modifications to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. Changes will be effective 
                  immediately upon posting to the website. Your continued use of our services after 
                  changes constitutes acceptance of the modified Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of 
                  England and Wales. Any disputes arising from these Terms or your use of our 
                  services shall be subject to the exclusive jurisdiction of the courts of 
                  England and Wales.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">12. Severability</h2>
                <p>
                  If any provision of these Terms is found to be unenforceable or invalid, that 
                  provision shall be limited or eliminated to the minimum extent necessary, and 
                  the remaining provisions shall remain in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">13. Contact Information</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <p className="mt-4">
                  AI & Quant Labs<br />
                  61 Redruth House, Grange Road<br />
                  Sutton, SM2 6RU<br />
                  United Kingdom<br />
                  Email: trading@aiquantlabs.com<br />
                  Phone: +44 79510 43459
                </p>
              </section>

            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
