'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Sparkles, Calendar, Camera, Clock, Moon, Heart } from 'lucide-react'

const features = [
  {
    title: "GENTLE PROGRESS",
    description: "Build confidence with mindful movement that respects your body's needs and your life's demands",
    icon: Sparkles,
    bgColor: "bg-[#F58B44]", // Headspace orange
    textColor: "text-white",
  },
  {
    title: "52-WEEK JOURNEY",
    description: "A full year of personalized workouts that adapt to your feedback, ensuring you're challenged but never overwhelmed",
    icon: Calendar,
    bgColor: "bg-[#52B6DE]", // Headspace sky blue
    textColor: "text-white",
  },
  {
    title: "AI VISUALIZATION",
    description: "See your healthiest, happiest self—not pressure, but possibility. A gentle reminder of your potential",
    icon: Camera,
    bgColor: "bg-[#4E3BA0]", // Headspace purple
    textColor: "text-white",
  },
  {
    title: "FLEXIBLE SCHEDULE",
    description: "Choose 1-7 days per week. Even one day makes a difference. 20-45 minute sessions that fit into real life",
    icon: Clock,
    bgColor: "bg-[#01A652]", // Headspace green
    textColor: "text-white",
  },
  {
    title: "REST DAY CELEBRATION",
    description: "Recovery is progress too. We encourage rest days because your wellness journey should enhance your life",
    icon: Moon,
    bgColor: "bg-[#FFCE00]", // Headspace yellow
    textColor: "text-gray-900",
  },
  {
    title: "REAL SUPPORT",
    description: "Feeling tired? We'll suggest gentler options. Busy week? Shorter workouts that still count",
    icon: Heart,
    bgColor: "bg-[#F06E1D]", // Headspace tangerine
    textColor: "text-white",
  }
]

export default function Features() {
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group cursor-pointer"
            >
              <div className={`relative ${feature.bgColor} rounded-3xl p-8 h-full transition-all duration-300 hover:shadow-2xl`}>
                <div className="relative z-10">
                  <feature.icon className={`w-12 h-12 mb-4 ${feature.textColor}`} />
                  <h3 className={`text-xl font-anton font-black uppercase mb-3 tracking-tight ${feature.textColor}`}>{feature.title}</h3>
                  <p className={`leading-relaxed ${feature.textColor} opacity-90`}>{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
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
          <Link 
            href="#"
            className="inline-block transform hover:scale-105 transition-transform duration-300"
          >
            <Image
              src="/images/download-on-the-app-store-badge.png"
              alt="Download on the App Store"
              width={180}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}