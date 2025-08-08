'use client'

import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-hero-buttermilk py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/" className="inline-flex items-center text-hero-orange hover:text-hero-tangerine mb-8 transition-colors font-semibold">
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-anton uppercase text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            <strong>Effective Date:</strong> January 1, 2025<br/>
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-100">
            <p className="text-gray-700 leading-relaxed">
              Pomegranate Planning LLC (<strong>&quot;Hero Fitness AI,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;</strong>) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application Hero Fitness AI (the <strong>&quot;App&quot;</strong>) and our website at <strong>usehero.fit</strong> (collectively, the <strong>&quot;Services&quot;</strong>).
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-anton uppercase text-gray-900 mb-4">1. Age Requirement</h2>
            <p className="text-gray-700 mb-4">
              Our Services are intended for users who are 18 years of age or older. By using our Services, you represent and warrant that you are at least 18 years old. We do not knowingly collect personal information from individuals under 18.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-anton uppercase text-gray-900 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-bold text-gray-800 mb-3">Personal Information You Provide</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Account information (email address, password)</li>
              <li>Profile information (name, date of birth, height, weight)</li>
              <li>Fitness goals and preferences</li>
              <li>Exercise experience and equipment availability</li>
              <li>Photos you upload for AI transformation</li>
              <li>Workout feedback and performance data</li>
              <li>Payment information (processed by Apple App Store)</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-800 mb-3">Information Collected Automatically</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Device information (device type, operating system, unique device identifiers)</li>
              <li>Usage data (workout completion, app features used, session duration)</li>
              <li>Performance metrics (workout streaks, completion rates)</li>
              <li>Error reports and crash data</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-anton uppercase text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Provide and maintain our Services</li>
              <li>Generate personalized workout plans based on your goals and fitness level</li>
              <li>Create AI-transformed visualizations of your fitness potential</li>
              <li>Track your progress and provide performance insights</li>
              <li>Process payments and manage subscriptions</li>
              <li>Send you important updates about your account or our Services</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze usage patterns to improve our Services</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-anton uppercase text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4">We do not sell, trade, or rent your personal information. We may share your information only in the following circumstances:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (Supabase for data storage, RevenueCat for payment processing, OpenAI/Replicate for AI transformations)</li>
              <li><strong>Legal Requirements:</strong> If required by law or in response to valid legal processes</li>
              <li><strong>Protection of Rights:</strong> To protect our rights, privacy, safety, or property, and that of our users</li>
              <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition</li>
              <li><strong>With Your Consent:</strong> When you explicitly agree to share your information</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-anton uppercase text-gray-900 mb-4">5. Data Retention</h2>
            <p className="text-gray-700 mb-4">
              We retain your personal information for as long as your account remains active. Your data, including workout history, AI-transformed photos, and profile information, is retained indefinitely unless you specifically request deletion. This allows you to maintain your complete fitness journey history and return to the app at any time without losing your progress.
            </p>
            <p className="text-gray-700 mb-4">
              To request deletion of your data, contact us at <a href="mailto:hello@usehero.fit" className="text-hero-orange hover:text-hero-tangerine">hello@usehero.fit</a>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-anton uppercase text-gray-900 mb-4">6. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Secure authentication with JWT tokens</li>
              <li>Row-level security policies in our database</li>
              <li>Regular security audits and monitoring</li>
              <li>Limited access to personal information by employees</li>
            </ul>
            <p className="text-gray-700 mb-4">
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-anton uppercase text-gray-900 mb-4">7. Your Rights and Choices</h2>
            <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Opt-out:</strong> Opt-out of marketing communications</li>
            </ul>
            <p className="text-gray-700 mb-4">
              To exercise these rights, contact us at <a href="mailto:hello@usehero.fit" className="text-hero-orange hover:text-hero-tangerine">hello@usehero.fit</a>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-anton uppercase text-gray-900 mb-4">8. Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              Our Services may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any information to them.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-anton uppercase text-gray-900 mb-4">9. California Privacy Rights</h2>
            <p className="text-gray-700 mb-4">
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete your information, and the right to opt-out of the sale of your personal information (which we do not do).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-anton uppercase text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date. We will also notify you via email of any material changes. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-anton uppercase text-gray-900 mb-4">11. Contact Us</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-2">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <p className="text-gray-700">
                <strong>Pomegranate Planning LLC</strong><br/>
                Email: <a href="mailto:hello@usehero.fit" className="text-hero-orange hover:text-hero-tangerine">hello@usehero.fit</a><br/>
                Website: <a href="https://usehero.fit" className="text-hero-orange hover:text-hero-tangerine">usehero.fit</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}