'use client';

import Link from 'next/link';
import { Container } from '@/components/ui';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
            Privacy Policy
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
                <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                <p>
                  AI & Quant Labs (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you visit our website trading.aiquantlabs.com and use our risk, governance, and 
                  compliance services.
                </p>
                <p className="mt-4">
                  <strong className="text-white">Company Details:</strong><br />
                  AI & Quant Labs<br />
                  61 Redruth House, Grange Road<br />
                  Sutton, SM2 6RU<br />
                  United Kingdom<br />
                  Email: trading@aiquantlabs.com
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold text-white mb-2">Personal Information</h3>
                <p>We may collect personal information that you voluntarily provide to us, including:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Company name and job title</li>
                  <li>Information provided through contact forms and enquiries</li>
                  <li>Account credentials if you create an account</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-2 mt-6">Automatically Collected Information</h3>
                <p>When you visit our website, we may automatically collect:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Device information (browser type, operating system)</li>
                  <li>IP address and approximate location</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Respond to your enquiries and provide customer support</li>
                  <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
                  <li>Analyse website usage to improve user experience</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect against fraudulent or illegal activity</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Legal Basis for Processing (UK GDPR)</h2>
                <p>We process your personal data based on:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong className="text-white">Consent:</strong> Where you have given consent for specific purposes</li>
                  <li><strong className="text-white">Contract:</strong> Where processing is necessary to fulfil a contract with you</li>
                  <li><strong className="text-white">Legitimate Interests:</strong> Where we have a legitimate business interest that does not override your rights</li>
                  <li><strong className="text-white">Legal Obligation:</strong> Where we must comply with legal requirements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Data Sharing and Disclosure</h2>
                <p>We may share your information with:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong className="text-white">Service Providers:</strong> Third parties who perform services on our behalf (e.g., hosting, email services)</li>
                  <li><strong className="text-white">Professional Advisors:</strong> Lawyers, accountants, and other advisors as necessary</li>
                  <li><strong className="text-white">Legal Requirements:</strong> When required by law or to protect our rights</li>
                </ul>
                <p className="mt-4">
                  We do not sell your personal information to third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Data Security</h2>
                <p>
                  We implement appropriate technical and organisational measures to protect your personal 
                  information against unauthorised access, alteration, disclosure, or destruction. However, 
                  no method of transmission over the Internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Data Retention</h2>
                <p>
                  We retain your personal information only for as long as necessary to fulfil the purposes 
                  for which it was collected, or as required by law. When no longer needed, we will securely 
                  delete or anonymise your data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Your Rights</h2>
                <p>Under UK GDPR, you have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong className="text-white">Access:</strong> Request a copy of your personal data</li>
                  <li><strong className="text-white">Rectification:</strong> Request correction of inaccurate data</li>
                  <li><strong className="text-white">Erasure:</strong> Request deletion of your data (&quot;right to be forgotten&quot;)</li>
                  <li><strong className="text-white">Restrict Processing:</strong> Request limitation of processing</li>
                  <li><strong className="text-white">Data Portability:</strong> Request transfer of your data</li>
                  <li><strong className="text-white">Object:</strong> Object to processing based on legitimate interests</li>
                  <li><strong className="text-white">Withdraw Consent:</strong> Withdraw consent at any time</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at trading@aiquantlabs.com.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Cookies</h2>
                <p>
                  We use cookies and similar technologies to enhance your experience on our website. 
                  You can control cookies through your browser settings. Essential cookies are required 
                  for the website to function properly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. International Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries outside the UK. 
                  We ensure appropriate safeguards are in place to protect your data in accordance 
                  with this Privacy Policy and applicable laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">11. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any 
                  significant changes by posting the new policy on this page and updating the 
                  &quot;Last updated&quot; date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">12. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or our data practices, 
                  please contact us at:
                </p>
                <p className="mt-4">
                  AI & Quant Labs<br />
                  61 Redruth House, Grange Road<br />
                  Sutton, SM2 6RU<br />
                  United Kingdom<br />
                  Email: trading@aiquantlabs.com<br />
                  Phone: +44 79510 43459
                </p>
                <p className="mt-4">
                  You also have the right to lodge a complaint with the Information Commissioner&apos;s 
                  Office (ICO) if you believe your data protection rights have been violated.
                </p>
              </section>

            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
