'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import WaitlistModal from './WaitlistModal'

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [platform, setPlatform] = useState<'ios' | 'android'>('ios')
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white via-gray-50/50 to-white pt-32 pb-20 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-orange-100/40 to-amber-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-br from-purple-100/40 to-pink-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 max-w-2xl text-center lg:text-left"
          >
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-anton font-black uppercase text-gray-900 mb-6 leading-[0.9] tracking-tight">
              MEET HERO FITNESS
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-8 leading-tight font-light">
              Transform yourself with just a selfie
            </h2>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
              The AI-powered app for gentle, sustainable fitness. 
              See your future self, get personalized workouts, and celebrate every step of your wellness journey.
            </p>

            {/* CTA Buttons with App Store Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <button 
                onClick={() => {
                  setPlatform('ios')
                  setIsModalOpen(true)
                }}
                className="inline-block transform hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src="/images/download_ios.svg"
                  alt="Download on the App Store"
                  width={180}
                  height={60}
                  className="h-14 w-auto"
                  priority
                />
              </button>
              <button 
                onClick={() => {
                  setPlatform('android')
                  setIsModalOpen(true)
                }}
                className="inline-block transform hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src="/images/download_android.png"
                  alt="Get it on Google Play"
                  width={180}
                  height={60}
                  className="h-14 w-auto"
                  priority
                />
              </button>
            </motion.div>
          </motion.div>

          {/* iPhone Mockups - Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 relative flex justify-center lg:justify-start lg:pl-12 items-center min-h-[600px]"
          >
            <div className="relative">
              {/* Background iPhone - App Screen */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="relative w-[256px] h-[520px] bg-gray-900 rounded-[3rem] p-1.5 shadow-2xl">
                  <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-gray-900 rounded-full"></div>
                  <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    <Image
                      src="/images/1.png"
                      alt="Hero Fitness App - Rest Screen"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                </div>
              </motion.div>

              {/* Foreground iPhone - Transformation/Woman */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute left-32 top-16 z-20"
              >
                <div className="relative w-[256px] h-[520px] bg-gray-900 rounded-[3rem] p-1.5 shadow-2xl transform rotate-12">
                  <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-gray-900 rounded-full"></div>
                  <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    <Image
                      src="/images/model.png"
                      alt="Your transformed self - confident woman in activewear"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -left-10 top-10 w-20 h-20 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full blur-2xl opacity-60"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -right-10 bottom-10 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-2xl opacity-60"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Waitlist Modal */}
      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} platform={platform} />
    </section>
  )
}