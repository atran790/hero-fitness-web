'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, Mail, Heart, MessageCircle } from 'lucide-react'

type FAQItem = {
  question: string
  answer: string
  category: string
}

const faqs: FAQItem[] = [
  // Getting Started
  {
    category: "Getting Started",
    question: "How does Hero Fitness AI work?",
    answer: "Hero Fitness AI creates a personalized 52-week fitness journey just for you. After a quick quiz about your goals and experience, you'll take a photo that our AI transforms to show your potential. Then we generate weekly workouts that adapt to your feedback, ensuring you're always challenged but never overwhelmed. It's fitness that grows with you, not against you."
  },
  {
    category: "Getting Started",
    question: "Do I need any equipment to use the app?",
    answer: "Not at all! Every workout includes bodyweight exercises, so you can start immediately without any equipment. During setup, you can optionally select equipment you have access to, and we'll incorporate those into your workouts. But remember - your body is enough. You can build strength and confidence with nothing but yourself."
  },
  {
    category: "Getting Started",
    question: "What happens during the setup quiz?",
    answer: "The quiz helps us understand you better. We'll ask about your fitness goals, current activity level, workout preferences, available equipment, and any physical limitations you might have. Every question helps us create a journey that's truly yours."
  },
  
  // AI Photo Transformation
  {
    category: "AI Transformation",
    question: "How does the AI photo transformation work?",
    answer: "After you take or upload a photo, our AI creates a visualization of your healthiest, strongest self. This isn't about unrealistic standards - it's about showing you what's possible with consistent, gentle progress. The transformation takes about 30 seconds, and you'll see a power meter filling up as it processes. Your transformed image is meant to inspire, not pressure. It's a reminder of your potential, not a demand."
  },
  {
    category: "AI Transformation",
    question: "Is my photo kept private?",
    answer: "Absolutely. Your privacy is paramount to us. Your original and transformed photos are stored securely and are only visible to you. We never share, sell, or use your photos for anything other than your personal fitness journey."
  },
  
  // Journey & Workouts
  {
    category: "Workouts & Journey",
    question: "How are my weekly workouts generated?",
    answer: "Every week, we generate your workouts based on your feedback, progress, and current journey phase. Our smart system considers how you rated last week's difficulty and energy levels, then adjusts accordingly. If workouts were too hard, we reduce intensity. If they were too easy, we gradually increase the challenge. It's like having a personal trainer who truly listens."
  },
  {
    category: "Workouts & Journey",
    question: "What are the journey phases?",
    answer: "Your 52-week journey progresses through four thoughtfully designed phases that build upon each other. You'll start with foundation work, progress to building strength and endurance, develop power, and ultimately reach your hero potential. Each phase duration is tailored to your experience level, ensuring safety while celebrating your progress."
  },
  {
    category: "Workouts & Journey",
    question: "What if I can't complete a workout?",
    answer: "That's completely okay! Life happens, and we understand. You can mark exercises as completed, partial, or skipped. Even completing one exercise counts as progress. If you need to end early, just tap 'Finish Workout Early' - we'll save your progress and adjust next week accordingly. Remember: showing up is the victory, not perfection."
  },
  {
    category: "Workouts & Journey",
    question: "Can I change my workout schedule?",
    answer: "Yes! You can update your workout frequency and session duration anytime in your Goals settings. Changes take effect with your next weekly plan. If you're feeling overwhelmed, reduce your commitment. If you're ready for more, increase it. Your journey should fit your life, not the other way around."
  },
  {
    category: "Workouts & Journey",
    question: "What if I have an injury or limitation?",
    answer: "Your safety is our top priority. During onboarding and in your Preferences settings, you can specify any injuries or physical limitations. Our system completely avoids exercises that could aggravate these areas. If you develop a new limitation, update your preferences immediately - your next week's workouts will adapt. When in doubt, always consult with a healthcare provider."
  },
  {
    category: "Workouts & Journey",
    question: "How do rest days work?",
    answer: "Rest days are celebrated, not discouraged! If you select fewer than 7 workout days, we automatically schedule rest days. If you're feeling exhausted or unwell, take extra rest - your body needs it. We might even prescribe a full rest week if your feedback indicates you need recovery. Rest is when your body actually gets stronger. It's not giving up; it's growing up."
  },
  
  // Subscription & Pricing
  {
    category: "Subscription",
    question: "How much does Hero Fitness AI cost?",
    answer: "$36 per year - that's just $3 per month, less than a single coffee. We chose annual billing to encourage long-term commitment to your wellness (real change takes time), and to keep our price accessible to everyone. Your subscription includes everything: unlimited workouts, AI transformations, progress tracking, and continuous updates."
  },
  {
    category: "Subscription",
    question: "Is there a free trial?",
    answer: "Yes! You get 3 full days to explore everything Hero Fitness AI offers - completely free, no payment required upfront. Take the quiz, see your AI transformation, start your first workouts, and experience our gentle approach to fitness. After 3 days, you'll be prompted to subscribe if you'd like to continue your journey."
  },
  {
    category: "Subscription",
    question: "How do I cancel my subscription?",
    answer: "While we'd be sad to see you go, we make cancellation simple. Go to your iPhone Settings > [Your Name] > Subscriptions > Hero Fitness AI, then tap 'Cancel Subscription'. You'll keep access until your current period ends. Remember, you can always pause your workouts without canceling if you just need a break."
  },
  {
    category: "Subscription",
    question: "What happens if my subscription expires?",
    answer: "If your subscription expires, you'll still have access to view your profile and past progress, but you won't be able to generate new workouts or access premium features. Your data remains safe and waiting for you - whenever you're ready to return, your journey continues right where you left off. We'll be here when you need us."
  },
  
  // Account Management
  {
    category: "Account",
    question: "How do I delete my account?",
    answer: "We respect your right to complete data deletion. In your Profile Settings, you'll find a 'Delete Account' option. This permanently removes all your data: profile, workouts, progress, photos - everything. Once deleted, you cannot sign back in with the same account. Please note this is irreversible, so make sure it's what you want. If you're just taking a break, consider pausing your subscription instead."
  },
  {
    category: "Account",
    question: "Can I change my email address?",
    answer: "Currently, email changes need to be done through support. Contact us at hello@usehero.fit with your current email and desired new email, and we'll help you make the switch while preserving all your progress and data."
  },
  {
    category: "Account",
    question: "What if I forget my password?",
    answer: "No worries! On the login screen, tap 'Forgot Password?' and enter your email. We'll send you a secure link to reset it. Check your spam folder if you don't see it within a few minutes. Your journey is too important to be blocked by a forgotten password."
  },
  
  // Technical Issues
  {
    category: "Technical",
    question: "The app isn't loading or is running slowly. What should I do?",
    answer: "First, try closing the app completely and reopening it. If that doesn't help, check your internet connection and make sure you have the latest version from the App Store. Low storage on your device can also cause issues - the app will alert you if this is the problem. If issues persist, reach out to us at hello@usehero.fit with your device type and iOS version, and we'll help troubleshoot."
  },
  {
    category: "Technical",
    question: "I'm not seeing my workout videos. Help!",
    answer: "Exercise videos require an internet connection to load. Make sure you're connected to WiFi or have cellular data enabled for the app. If videos still won't load, try refreshing the exercise by navigating away and back. All our exercises have video demonstrations to ensure proper form and safety."
  },
  {
    category: "Technical",
    question: "My progress isn't syncing. What's wrong?",
    answer: "Your progress saves automatically when you complete workouts. If you don't see recent updates, pull down to refresh on the Progress screen. Make sure you have an internet connection for syncing. If you're still having issues, don't worry - your data is safe. Contact support and we'll help recover any missing progress."
  },
  
  // Progress & Motivation
  {
    category: "Progress",
    question: "How do I track my progress?",
    answer: "Your Progress tab shows everything: current streak, total workouts completed, weekly workout count, and your transformation photo comparison. We also track your Personal Records for each exercise - every time you increase weight or reps, we celebrate it! Progress isn't just about numbers though - notice how you feel stronger, sleep better, and move with more confidence."
  },
  {
    category: "Progress",
    question: "I'm not seeing results. Should I quit?",
    answer: "Please don&apos;t give up! Real, sustainable change takes time - usually 6-8 weeks to feel different, and 12 weeks for visible changes. Are you sleeping enough? Eating nourishing foods? Managing stress? Fitness is just one piece of wellness. Also, progress isn&apos;t always visible - you might be getting stronger, building endurance, or improving your mental health. Every workout is a victory, even when you can&apos;t see it yet. You&apos;re exactly where you need to be."
  },
  {
    category: "Progress",
    question: "Can I share my progress with others?",
    answer: "Currently, Hero Fitness AI is designed as your personal, private fitness companion. We don&apos;t have social sharing features because we believe your journey is yours alone - free from comparison or judgment. Celebrate your wins with loved ones in person, but remember: you&apos;re not competing with anyone but yesterday&apos;s you."
  }
]

function FAQAccordion({ item, isOpen, onToggle }: { item: FAQItem, isOpen: boolean, onToggle: () => void }) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-start justify-between text-left hover:bg-gray-50 transition-colors px-2 -mx-2 rounded-lg"
      >
        <span className="text-gray-900 font-semibold pr-8 text-lg">{item.question}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-gray-600 leading-relaxed px-2">{item.answer}</p>
      </div>
    </div>
  )
}

export default function Support() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const categories = [...new Set(faqs.map(faq => faq.category))]

  return (
    <div className="min-h-screen bg-[#FDF5EB] py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/" className="inline-flex items-center text-[#F58B44] hover:text-[#F06E1D] mb-8 transition-colors font-semibold">
          ← Back to Home
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-anton uppercase text-gray-900 mb-4">We&apos;re Here to Help</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your wellness journey matters to us. Find answers to common questions below, or reach out directly - we&apos;re real people who genuinely care about your success.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12 mb-16">
          {categories.map((category) => (
            <div key={category} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-anton uppercase text-gray-900 mb-6 flex items-center gap-2">
                <Heart className="w-6 h-6 text-[#F58B44]" />
                {category}
              </h2>
              <div>
                {faqs
                  .filter(faq => faq.category === category)
                  .map((item) => {
                    const globalIndex = faqs.indexOf(item)
                    return (
                      <FAQAccordion
                        key={globalIndex}
                        item={item}
                        isOpen={openIndex === globalIndex}
                        onToggle={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                      />
                    )
                  })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support Card */}
        <div className="bg-gradient-to-br from-[#F58B44] to-[#F06E1D] rounded-3xl p-8 md:p-12 text-white text-center shadow-lg">
          <MessageCircle className="w-16 h-16 mx-auto mb-4 text-white" />
          <h2 className="text-3xl font-anton uppercase mb-4 text-white">Still Need Help?</h2>
          <p className="text-xl mb-8 text-white/95 max-w-md mx-auto">
            We&apos;re real people who understand that fitness journeys aren&apos;t always straightforward. Whatever you&apos;re facing, we&apos;re here to support you.
          </p>
          <a
            href="mailto:hello@usehero.fit"
            className="inline-flex items-center gap-3 bg-white text-[#F58B44] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-md"
          >
            <Mail className="w-5 h-5" />
            Email Support
          </a>
          <p className="mt-6 text-sm text-white/90">
            We typically respond within 24 hours, because your journey can&apos;t wait.
          </p>
        </div>

        {/* Bottom message */}
        <div className="text-center mt-12">
          <p className="text-gray-500 italic">
            Remember: Every question is valid. Every concern matters. You&apos;re not alone in this.
          </p>
        </div>
      </div>
    </div>
  )
}
