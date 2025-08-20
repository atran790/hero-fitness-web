'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import WaitlistModal from './WaitlistModal'

const features = [
  {
    title: "GENTLE PROGRESS",
    description: "Build confidence with mindful movement that respects your body's needs and your life's demands",
    image: "/images/gentle-progress.png",
  },
  {
    title: "52-WEEK JOURNEY",
    description: "A full year of personalized workouts that adapt to your feedback, ensuring you're challenged but never overwhelmed",
    image: "/images/week-journey.png",
  },
  {
    title: "AI VISUALIZATION",
    description: "See your healthiest, happiest self—not pressure, but possibility. A gentle reminder of your potential",
    image: "/images/ai-visualization.png",
  },
  {
    title: "FLEXIBLE SCHEDULE",
    description: "Choose 1-7 days per week. Even one day makes a difference. 15-60 minute sessions that fit into real life",
    image: "/images/flexible-schedule.png",
  },
  {
    title: "REST DAY CELEBRATION",
    description: "Recovery is progress too. We encourage rest days because your wellness journey should enhance your life",
    image: "/images/rest-day.png",
  },
  {
    title: "REAL SUPPORT",
    description: "Feeling tired? We'll suggest gentler options. Busy week? Shorter workouts that still count",
    image: "/images/real-support.png",
  }
]

export default function Features() {
  const [isVisible, setIsVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [platform, setPlatform] = useState<'ios' | 'android'>('ios')
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])



  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-anton font-black uppercase text-gray-900 mb-4 tracking-tight leading-[0.9]">
            A KINDER WAY TO
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent"> GET STRONGER</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            This isn&apos;t another app telling you to push harder. It&apos;s your compassionate companion on a sustainable wellness journey.
          </p>
        </motion.div>

        {/* Masonry/Pinterest Style Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            {/* Left Column */}
            <div className="space-y-6">
              {/* GENTLE PROGRESS */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0 * 0.1 }}
                className="group transform-gpu"
                style={{ willChange: 'transform' }}
              >
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-40 transition-shadow duration-200 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex h-full">
                    <div className="relative w-40 h-full flex-shrink-0">
                      <Image
                        src={features[0].image}
                        alt={features[0].title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-center">
                      <h3 className="text-lg font-anton font-black uppercase mb-2 tracking-tight text-gray-900 leading-tight">{features[0].title}</h3>
                      <p className="text-sm leading-relaxed text-gray-700">{features[0].description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* AI VISUALIZATION */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 2 * 0.1 }}
                className="group transform-gpu"
                style={{ willChange: 'transform' }}
              >
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-40 transition-shadow duration-200 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex h-full">
                    <div className="relative w-40 h-full flex-shrink-0">
                      <Image
                        src={features[2].image}
                        alt={features[2].title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-center">
                      <h3 className="text-lg font-anton font-black uppercase mb-2 tracking-tight text-gray-900 leading-tight">{features[2].title}</h3>
                      <p className="text-sm leading-relaxed text-gray-700">{features[2].description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* FLEXIBLE SCHEDULE */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 4 * 0.1 }}
                className="group transform-gpu"
                style={{ willChange: 'transform' }}
              >
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-40 transition-shadow duration-200 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex h-full">
                    <div className="relative w-40 h-full flex-shrink-0">
                      <Image
                        src={features[3].image}
                        alt={features[3].title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-center">
                      <h3 className="text-lg font-anton font-black uppercase mb-2 tracking-tight text-gray-900 leading-tight">{features[3].title}</h3>
                      <p className="text-sm leading-relaxed text-gray-700">{features[3].description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* 52-WEEK JOURNEY */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 * 0.1 }}
                className="group transform-gpu"
                style={{ willChange: 'transform' }}
              >
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-40 transition-shadow duration-200 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex h-full">
                    <div className="relative w-40 h-full flex-shrink-0">
                      <Image
                        src={features[1].image}
                        alt={features[1].title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-center">
                      <h3 className="text-lg font-anton font-black uppercase mb-2 tracking-tight text-gray-900 leading-tight">{features[1].title}</h3>
                      <p className="text-sm leading-relaxed text-gray-700">{features[1].description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* REST DAY CELEBRATION */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 3 * 0.1 }}
                className="group transform-gpu"
                style={{ willChange: 'transform' }}
              >
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-40 transition-shadow duration-200 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex h-full">
                    <div className="relative w-40 h-full flex-shrink-0">
                      <Image
                        src={features[4].image}
                        alt={features[4].title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-center">
                      <h3 className="text-lg font-anton font-black uppercase mb-2 tracking-tight text-gray-900 leading-tight">{features[4].title}</h3>
                      <p className="text-sm leading-relaxed text-gray-700">{features[4].description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* REAL SUPPORT */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 5 * 0.1 }}
                className="group transform-gpu"
                style={{ willChange: 'transform' }}
              >
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden h-40 transition-shadow duration-200 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex h-full">
                    <div className="relative w-40 h-full flex-shrink-0">
                      <Image
                        src={features[5].image}
                        alt={features[5].title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-center">
                      <h3 className="text-lg font-anton font-black uppercase mb-2 tracking-tight text-gray-900 leading-tight">{features[5].title}</h3>
                      <p className="text-sm leading-relaxed text-gray-700">{features[5].description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <p className="text-gray-600 mb-8 text-lg">
            Discover how fitness doesn&apos;t have to be extreme to be effective.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button 
              onClick={() => {
                setPlatform('ios')
                setIsModalOpen(true)
              }}
              className="inline-block cursor-pointer transform hover:scale-105 transition-transform duration-200"
            >
              <Image
                src="/images/download_ios.svg"
                alt="Download on the App Store"
                width={180}
                height={60}
                className="h-14 w-[180px] object-contain flex-shrink-0"
                priority
              />
            </button>
            <button 
              onClick={() => {
                setPlatform('android')
                setIsModalOpen(true)
              }}
              className="inline-block cursor-pointer transform hover:scale-105 transition-transform duration-200"
            >
              <Image
                src="/images/download_android.png"
                alt="Get it on Google Play"
                width={180}
                height={60}
                className="h-14 w-[180px] object-contain flex-shrink-0"
                priority
              />
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Waitlist Modal */}
      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} platform={platform} />
    </section>
  )
}