'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const screens = [
  {
    id: 1,
    title: "PLAN YOUR JOURNEY",
    description: "Build your personalized 52-week transformation with AI-powered guidance",
    image: "/images/2.png",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 2,
    title: "TRACK PROGRESS",
    description: "Follow structured workouts with clear video demonstrations and rep tracking",
    image: "/images/3.png",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 3,
    title: "REST & RECOVER",
    description: "Celebrate rest days as part of your journey to sustainable wellness",
    image: "/images/4.png",
    color: "from-orange-500 to-amber-600",
  }
]

export default function AppShowcase() {
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
    <section ref={sectionRef} className="py-24 bg-[#101340] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-br from-orange-200/10 to-amber-200/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/10 to-purple-200/10 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-anton font-black uppercase text-white mb-4 tracking-tight leading-[0.9]">
            PERSONALIZED WORKOUTS
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent"> BUILT BY AI</span>
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Every workout is uniquely crafted for your body, goals, and progress using advanced AI technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {screens.map((screen, index) => (
            <motion.div
              key={screen.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
                ease: "easeOut"
              }}
              className="group will-change-transform"
            >
              <div className="relative">
                {/* Phone mockup */}
                <div className="relative mx-auto w-[240px] h-[490px] bg-black rounded-[2.5rem] p-1.5 shadow-2xl">
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-black rounded-full"></div>
                  <div className="relative w-full h-full bg-white rounded-[2.2rem] overflow-hidden">
                    <Image
                      src={screen.image}
                      alt={screen.title}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                {/* Content below phone */}
                <div className="mt-8 text-center">
                  <h3 className="text-xl font-anton font-black uppercase text-white mb-2 tracking-tight">{screen.title}</h3>
                  <p className="text-purple-200 px-4">{screen.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}