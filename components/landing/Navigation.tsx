'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import WaitlistModal from './WaitlistModal'

export default function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [platform, setPlatform] = useState<'ios' | 'android'>('ios')
  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              <Image
                src="/images/icon.png"
                alt="Hero Fitness AI"
                width={40}
                height={40}
                className="rounded-xl"
              />
              <span className="text-gray-900 font-anton font-black uppercase text-lg tracking-tight">HERO FITNESS AI</span>
            </div>

            {/* CTA Buttons with App Store Badges */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setPlatform('ios')
                  setIsModalOpen(true)
                }}
                className="transform hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src="/images/download_ios.svg"
                  alt="Download on the App Store"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              </button>
              <button
                onClick={() => {
                  setPlatform('android')
                  setIsModalOpen(true)
                }}
                className="transform hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src="/images/download_android.png"
                  alt="Get it on Google Play"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
      
      {/* Waitlist Modal - Outside nav for proper z-index */}
      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} platform={platform} />
    </>
  )
}