'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function WhyChooseHero() {
  const [isVisible, setIsVisible] = useState(false)
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
    <section ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-anton font-black uppercase text-gray-900 mb-6 tracking-tight leading-[0.9]">
                WHY CHOOSE
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> HERO FITNESS?</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-gray-900">We protect your wellness journey.</strong> Unlike apps that push you to extremes, Hero Fitness AI creates a safe space where progress happens at your pace.
                </p>
                
                <p>
                  <strong className="text-gray-900">Science-backed, heart-centered.</strong> Our AI understands that sustainable fitness comes from consistency, not intensity. Every workout is designed to build you up, never break you down.
                </p>
                
                <p>
                  <strong className="text-gray-900">Your shield against toxic fitness culture.</strong> No shame, no guilt, no impossible standards. Just genuine support for becoming the strongest, happiest version of yourself.
                </p>
                
                <p className="text-xl font-semibold text-gray-900 pt-4">
                  Because you deserve fitness that celebrates you. ✨
                </p>
              </div>
            </motion.div>

            {/* Shield Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:order-1 flex justify-center items-center"
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Large negative space container */}
                <div className="aspect-square flex items-center justify-center p-16">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/shield.png"
                      alt="Hero Fitness Shield - Protection and Support"
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </div>
                </div>
                
                {/* Subtle background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100/30 to-amber-100/30 rounded-full blur-3xl -z-10 scale-150"></div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
