'use client'

import Link from 'next/link'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-hero-buttermilk py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/" className="inline-flex items-center text-hero-orange hover:text-hero-tangerine mb-8 transition-colors font-semibold">
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-anton uppercase text-gray-900 mb-8">Terms & Conditions</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            <strong>Effective Date:</strong> January 1, 2025<br/>
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-anton uppercase text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              These Terms and Conditions (<strong>&quot;Terms&quot;</strong>) constitute a legally binding agreement between you and Pomegranate Planning LLC (<strong>&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;</strong>) governing your use of the Hero Fitness AI mobile application and website at usehero.fit (collectively, the <strong>&quot;Services&quot;</strong>).
            </p>
            <p className="text-gray-700 mb-4">
              By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must not use our Services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-anton uppercase text-gray-900 mb-4">2. Eligibility</h2>
            <p className="text-gray-700 mb-4">
              You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>You are at least 18 years of age</li>
              <li>You have the legal capacity to enter into these Terms</li>
              <li>You are not prohibited from using the Services under applicable law</li>
              <li>Your use of the Services will not violate any applicable law or regulation</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-anton uppercase text-gray-900 mb-4 text-red-600">3. Medical Disclaimer and Assumption of Risk</h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">⚠️ IMPORTANT HEALTH WARNING</h3>
              <p className="text-gray-700 mb-4">
                <strong>HERO FITNESS AI IS NOT A MEDICAL SERVICE AND DOES NOT PROVIDE MEDICAL ADVICE.</strong> The information, guidance, and programs provided through our Services are for informational and educational purposes only and are not intended as a substitute for professional medical advice, diagnosis, or treatment.
              </p>
              <p className="text-gray-700 mb-4 font-semibold">
                ALWAYS CONSULT YOUR PHYSICIAN OR OTHER QUALIFIED HEALTHCARE PROVIDER BEFORE BEGINNING ANY EXERCISE PROGRAM OR MAKING ANY FITNESS-RELATED DECISIONS.
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Stop exercising immediately if you experience pain, dizziness, discomfort, shortness of breath, or any other symptoms</li>
                <li>The Services are not suitable for individuals with certain medical conditions</li>
                <li>Never disregard professional medical advice or delay seeking it because of something you have read or accessed through our Services</li>
                <li>If you think you have a medical emergency, call 911 immediately</li>
              </ul>
              <p className="text-gray-700 font-bold">
                BY USING OUR SERVICES, YOU ACKNOWLEDGE AND AGREE THAT YOU ARE VOLUNTARILY PARTICIPATING IN PHYSICAL ACTIVITIES AT YOUR OWN RISK AND ASSUME ALL RISK OF INJURY, ILLNESS, DAMAGE, OR DEATH THAT MAY RESULT.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-anton uppercase text-gray-900 mb-4">4. Use License</h2>
            <p className="text-gray-700 mb-4">
              Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Download and install the App on devices you own or control</li>
              <li>Access and use the Services for your personal, non-commercial use</li>
            </ul>
            <p className="text-gray-700 mb-4">
              This license does not allow you to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Modify, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any content or services obtained from our Services</li>
              <li>Use the Services for any commercial purpose without our prior written consent</li>
              <li>Reverse engineer, decompile, or disassemble any portion of our Services</li>
              <li>Remove any copyright or proprietary notices from our Services</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-anton uppercase text-gray-900 mb-4">5. Subscription and Payment</h2>
            <p className="text-gray-700 mb-4">
              Hero Fitness AI offers a subscription service with the following terms:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>3-day free trial for new users</li>
              <li>Annual subscription fee of $36 per year</li>
              <li>Automatic renewal unless cancelled</li>
              <li>Payment processed through Apple App Store</li>
            </ul>
            <p className="text-gray-700 mb-4">
              <strong>Billing:</strong> You authorize us to charge your payment method on a recurring basis for the subscription fee. Your subscription will automatically renew unless you cancel it before the renewal date.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Cancellation:</strong> You may cancel your subscription at any time through your iPhone settings. Cancellation will take effect at the end of the current billing period.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Refunds:</strong> All payments are final and non-refundable, except as required by law or as determined by Apple&apos;s App Store policies. We do not provide refunds for partial subscription periods.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-anton uppercase text-gray-900 mb-4">6. User Content and Conduct</h2>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Content Ownership</h3>
            <p className="text-gray-700 mb-4">
              You retain ownership of any content you submit to our Services (<strong>&quot;User Content&quot;</strong>), including photos for AI transformation. However, by submitting User Content, you grant us a worldwide, non-exclusive, royalty-free, perpetual, irrevocable, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform your User Content in connection with providing and improving our Services.
            </p>
            
            <h3 className="text-xl font-bold text-gray-800 mb-3">AI-Transformed Photos</h3>
            <p className="text-gray-700 mb-4">
              AI-transformed photos created by our Services are owned by Pomegranate Planning LLC. You are granted a non-exclusive license to use these transformed photos for personal, non-commercial purposes. You may share these photos publicly, but you may not sell, license, or commercially exploit them without our written permission.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-3">Prohibited Conduct</h3>
            <p className="text-gray-700 mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Use the Services for any illegal or unauthorized purpose</li>
              <li>Upload content that infringes any intellectual property rights</li>
              <li>Upload inappropriate, offensive, or harmful content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the Services</li>
              <li>Create multiple accounts or share account credentials</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-anton uppercase text-gray-900 mb-4">7. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All content, features, and functionality of our Services, including but not limited to text, graphics, logos, icons, images, audio clips, video clips, data compilations, and software, are the exclusive property of Pomegranate Planning LLC or its licensors and are protected by United States and international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-anton uppercase text-gray-900 mb-4">8. Privacy</h2>
            <p className="text-gray-700 mb-4">
              Your use of our Services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy at <a href="/privacy" className="text-hero-orange hover:text-hero-tangerine">usehero.fit/privacy</a>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-anton uppercase text-gray-900 mb-4 text-red-600">9. Disclaimers and Limitation of Liability</h2>
            <div className="bg-gray-100 border-2 border-gray-300 rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">DISCLAIMER OF WARRANTIES</h3>
              <p className="text-gray-700 mb-4">
                THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="text-gray-700 mb-4">
                WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE FROM VIRUSES OR OTHER HARMFUL COMPONENTS. WE DO NOT WARRANT THE ACCURACY, COMPLETENESS, OR USEFULNESS OF ANY INFORMATION PROVIDED THROUGH THE SERVICES.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">LIMITATION OF LIABILITY</h3>
              <p className="text-gray-700 mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL POMEGRANATE PLANNING LLC, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, SUPPLIERS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Your use or inability to use the Services</li>
                <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                <li>Any interruption or cessation of transmission to or from the Services</li>
                <li>Any bugs, viruses, or the like transmitted through the Services</li>
                <li>Any errors or omissions in any content</li>
                <li>Personal injury or property damage resulting from your use of the Services</li>
              </ul>
              <p className="text-gray-700 font-bold">
                IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES, AND CAUSES OF ACTION EXCEED THE AMOUNT PAID BY YOU, IF ANY, FOR ACCESSING OR USING THE SERVICES IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS LESS.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-anton uppercase text-gray-900 mb-4">10. Indemnification</h2>
            <p className="text-gray-700 mb-4">
              You agree to defend, indemnify, and hold harmless Pomegranate Planning LLC, its officers, directors, employees, agents, licensors, and suppliers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising out of or relating to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Your violation of these Terms</li>
              <li>Your use of the Services</li>
              <li>Your User Content</li>
              <li>Your violation of any rights of another party</li>
              <li>Your violation of any applicable law</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-anton uppercase text-gray-900 mb-4 text-red-600">11. Arbitration and Class Action Waiver</h2>
            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">PLEASE READ THIS SECTION CAREFULLY</h3>
              <p className="text-gray-700 mb-4">
                <strong>Binding Arbitration:</strong> Any dispute, claim, or controversy arising out of or relating to these Terms or the Services shall be settled by binding arbitration in accordance with the commercial arbitration rules of the American Arbitration Association. The arbitration shall be conducted in Delaware, and judgment on the arbitration award may be entered into any court having jurisdiction thereof.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Class Action Waiver:</strong> YOU AGREE THAT ANY DISPUTES SHALL BE BROUGHT IN YOUR INDIVIDUAL CAPACITY ONLY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS, COLLECTIVE, OR REPRESENTATIVE PROCEEDING.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Waiver of Jury Trial:</strong> YOU HEREBY WAIVE YOUR RIGHT TO A JURY TRIAL IN ANY PROCEEDING ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES.
              </p>
              <p className="text-gray-700">
                <strong>Exception:</strong> Notwithstanding the above, either party may seek injunctive or other equitable relief in any court of competent jurisdiction.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-anton uppercase text-gray-900 mb-4">12. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions. Any legal action or proceeding not subject to arbitration shall be brought exclusively in the federal or state courts located in Delaware, and you consent to the personal jurisdiction of such courts.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-anton uppercase text-gray-900 mb-4">13. Termination</h2>
            <p className="text-gray-700 mb-4">
              We may terminate or suspend your account and access to the Services immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms. Upon termination, your right to use the Services will immediately cease.
            </p>
            <p className="text-gray-700 mb-4">
              All provisions of these Terms which by their nature should survive termination shall survive, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-anton uppercase text-gray-900 mb-4">14. Severability</h2>
            <p className="text-gray-700 mb-4">
              If any provision of these Terms is held to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid or unenforceable provision shall be replaced with a valid and enforceable provision that most closely matches the intent of the original provision.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-anton uppercase text-gray-900 mb-4">15. Entire Agreement</h2>
            <p className="text-gray-700 mb-4">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Pomegranate Planning LLC regarding the use of the Services and supersede all prior and contemporaneous understandings, agreements, representations, and warranties.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-anton uppercase text-gray-900 mb-4">16. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the new Terms on this page, updating the &quot;Last Updated&quot; date, and sending you an email notification. Your continued use of the Services after such modifications constitutes your acceptance of the updated Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-anton uppercase text-gray-900 mb-4">17. Contact Information</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-2">
                If you have any questions about these Terms, please contact us:
              </p>
              <p className="text-gray-700">
                <strong>Pomegranate Planning LLC</strong><br/>
                Email: <a href="mailto:hello@usehero.fit" className="text-hero-orange hover:text-hero-tangerine">hello@usehero.fit</a><br/>
                Website: <a href="https://usehero.fit" className="text-hero-orange hover:text-hero-tangerine">usehero.fit</a>
              </p>
            </div>
          </section>

          <div className="bg-gray-100 rounded-2xl p-6 mt-12">
            <p className="text-gray-700 text-center font-semibold">
              BY USING HERO FITNESS AI, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS AND CONDITIONS.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
