'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [isDevelopment, setIsDevelopment] = useState(false)

  useEffect(() => {
    setIsDevelopment(process.env.NODE_ENV === 'development')
  }, [])

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <Image
              src="/images/icon.png"
              alt="Hero Fitness AI"
              width={44}
              height={44}
              className="rounded-xl"
            />
            <span className="text-gray-900 font-bold text-xl">Hero Fitness AI</span>
          </div>

          {/* Tagline */}
          <p className="text-gray-600 text-center max-w-md text-lg">
            Your strength is already within you. We&apos;re here to help you find it.
          </p>

          {/* Copyright and Legal Links */}
          <div className="text-center text-sm text-gray-500">
            <p className="flex flex-wrap justify-center items-center gap-2">
              © {currentYear} Hero Fitness AI. All rights reserved.
              <span className="text-gray-300">•</span>
              <Link href="/support" className="text-gray-600 hover:text-black transition-colors duration-200">
                Support
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/privacy" className="text-gray-600 hover:text-black transition-colors duration-200">
                Privacy Policy
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/terms" className="text-gray-600 hover:text-black transition-colors duration-200">
                Terms & Conditions
              </Link>
            </p>
          </div>

          {/* Development Links - Only shown in dev mode */}
          {isDevelopment && (
            <div className="mt-4 pt-4 border-t border-gray-200 w-full">
              <div className="text-center">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Development Links</p>
                <div className="flex flex-wrap justify-center gap-3 text-xs">
                  <Link 
                    href="/reset-password?dev=true" 
                    className="px-3 py-1 bg-hero-orange/10 text-hero-orange hover:bg-hero-orange/20 rounded-lg transition font-bold"
                  >
                    Reset Password (Dev)
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}