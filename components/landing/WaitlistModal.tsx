'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, Check, Share2, Users } from 'lucide-react'

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
  platform?: 'ios' | 'android'
}

export default function WaitlistModal({ isOpen, onClose, platform = 'ios' }: WaitlistModalProps) {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [waitlistCount, setWaitlistCount] = useState(2847)
  const [hasShared, setHasShared] = useState(false)
  const [recordId, setRecordId] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSharing, setIsSharing] = useState(false)

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setPhoneNumber('')
        setIsSubmitted(false)
        setError('')
        setHasShared(false)
        setRecordId(null)
        setIsSubmitting(false)
        setIsSharing(false)
      }, 300) // Wait for animation to complete
    }
  }, [isOpen])

  // Simulate growing waitlist
  useEffect(() => {
    const interval = setInterval(() => {
      setWaitlistCount(prev => prev + Math.floor(Math.random() * 3) + 1)
    }, 5000) // Increment every 5 seconds

    return () => clearInterval(interval)
  }, [])

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const phoneNumberDigits = value.replace(/\D/g, '')
    
    // Format as (XXX) XXX-XXXX
    if (phoneNumberDigits.length <= 3) {
      return phoneNumberDigits
    } else if (phoneNumberDigits.length <= 6) {
      return `(${phoneNumberDigits.slice(0, 3)}) ${phoneNumberDigits.slice(3)}`
    } else {
      return `(${phoneNumberDigits.slice(0, 3)}) ${phoneNumberDigits.slice(3, 6)}-${phoneNumberDigits.slice(6, 10)}`
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setPhoneNumber(formatted)
    setError('')
  }

  const validatePhoneNumber = (phone: string) => {
    const digits = phone.replace(/\D/g, '')
    return digits.length === 10
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (isSubmitting) return // Prevent double submission
    
    if (!validatePhoneNumber(phoneNumber)) {
      setError('Please enter a valid 10-digit phone number')
      return
    }

    setIsSubmitting(true)
    setError('')

    try {
      // Send to backend API
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, platform }),
      })

      if (!response.ok) {
        throw new Error('Failed to join waitlist')
      }

      const data = await response.json()
      if (data.recordId) {
        setRecordId(data.recordId)
      }

      // Show success state
      setIsSubmitted(true)
    } catch (err) {
      console.error('Submission error:', err)
      setError('Something went wrong. Please try again.')
      setIsSubmitting(false)
    }
  }

  const handleShare = async () => {
    if (isSharing) return // Prevent double sharing
    
    setIsSharing(true)
    const shareText = "I just joined the Hero Fitness AI waitlist! 💪 Transform yourself with AI-powered fitness. Join me for exclusive early access:"
    const shareUrl = window.location.href
    
    // Track the share in Airtable
    if (recordId) {
      try {
        await fetch('/api/waitlist/track-share', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ recordId }),
        })
      } catch (err) {
        console.error('Failed to track share:', err)
      }
    }
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Hero Fitness AI',
          text: shareText,
          url: shareUrl,
        })
        setHasShared(true)
        // Close after successful share
        setTimeout(() => onClose(), 1500)
      } catch {
        console.log('Share cancelled or failed')
        setIsSharing(false)
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(`${shareText} ${shareUrl}`)
      setHasShared(true)
      setTimeout(() => onClose(), 1500)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-[100]"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-[101] transform-gpu"
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
              
              {/* Content */}
              <div className="p-8 pt-6">
                {!isSubmitted ? (
                  <>
                    {/* Header */}
                    <div className="text-center mb-6">
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
                        className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl mb-4"
                      >
                        <Sparkles className="w-8 h-8 text-orange-500" />
                      </motion.div>
                      
                      <h2 className="text-3xl font-anton font-black uppercase mb-3 text-gray-900 tracking-tight">
                        YOUR JOURNEY STARTS HERE
                      </h2>
                      
                      <p className="text-gray-600 leading-relaxed">
                        We know fitness can feel overwhelming. That&apos;s why we&apos;re building something different—gentle, sustainable, and made for real life.
                      </p>
                    </div>
                    
                    {/* Live Counter Badge - Simplified */}
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl p-5 mb-6 text-center"
                    >
                      <div className="flex items-center justify-center gap-3">
                        <Users className="w-5 h-5 text-white/90" />
                        <motion.p 
                          key={waitlistCount}
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          className="text-lg font-bold"
                        >
                          {waitlistCount.toLocaleString()} people already joined
                        </motion.p>
                      </div>
                      <p className="text-sm mt-1 opacity-90">
                        Limited early access • Early bird gift
                      </p>
                    </motion.div>
                    
                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={phoneNumber}
                          onChange={handlePhoneChange}
                          placeholder="(555) 123-4567"
                          className={`w-full px-4 py-3 rounded-xl border-2 ${
                            error ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-orange-500'
                          } focus:outline-none transition-colors`}
                          required
                        />
                        {error && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm mt-2"
                          >
                            {error}
                          </motion.p>
                        )}
                      </div>
                      
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-4 rounded-xl hover:shadow-lg transform hover:scale-[1.02] transition-transform duration-200 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        {isSubmitting ? 'Joining...' : 'Reserve My Spot Now'}
                      </button>
                      
                      <p className="text-xs text-gray-500 text-center">
                        We&apos;ll text you once when we launch. Your journey to gentle fitness awaits.
                      </p>
                    </form>
                  </>
                ) : (
                  /* Success State */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6"
                  >
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4"
                    >
                      {hasShared ? (
                        <Sparkles className="w-10 h-10 text-green-500" />
                      ) : (
                        <Check className="w-10 h-10 text-green-500" />
                      )}
                    </motion.div>
                    
                    <h3 className="text-2xl font-anton font-black uppercase mb-3 text-gray-900">
                      {hasShared ? "YOU'RE A HERO!" : "YOU'RE IN!"}
                    </h3>
                    
                    <p className="text-gray-600 mb-6">
                      {hasShared 
                        ? "Thanks for spreading the word! You've been moved to the priority list."
                        : "Your spot is secured! But there's a way to skip ahead..."}
                    </p>
                    
                    {!hasShared && (
                      <>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-4 mb-4"
                        >
                          <p className="text-sm font-medium text-purple-900 mb-1">
                            🎯 Skip the line!
                          </p>
                          <p className="text-xs text-purple-700">
                            Share with friends to get priority access on launch day
                          </p>
                        </motion.div>
                        
                        <button
                          onClick={handleShare}
                          disabled={isSharing}
                          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 rounded-xl hover:shadow-lg transform hover:scale-[1.02] transition-transform duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                        >
                          <Share2 className="w-5 h-5" />
                          {isSharing ? 'Sharing...' : 'Share & Jump to Front'}
                        </button>
                        
                        <button
                          onClick={onClose}
                          className="mt-3 text-sm text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
                        >
                          Maybe later
                        </button>
                      </>
                    )}
                    
                    {hasShared && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-sm text-green-600 font-medium"
                      >
                        Closing in a moment...
                      </motion.p>
                    )}
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
