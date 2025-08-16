'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'
import { motion } from 'framer-motion'
import { CheckCircle, XCircle, Lock, AlertCircle } from 'lucide-react'
import Image from 'next/image'

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://qolnxmlwrufqfksxpbpy.supabase.co',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvbG54bWx3cnVmcWZrc3hwYnB5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3MDE2NzksImV4cCI6MjA2NTI3NzY3OX0.DCjWidR8qPx92fNBl89e1-N0TyivJvpCUlSrr588WyQ'
)

function ResetPasswordContent() {
  const searchParams = useSearchParams()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [sessionReady, setSessionReady] = useState(false)
  const [isDevelopment] = useState(() => process.env.NODE_ENV === 'development')

  useEffect(() => {
    // In development mode, allow viewing the page without tokens
    if (isDevelopment && searchParams.get('dev') === 'true') {
      setSessionReady(true)
      return
    }

    // Supabase sends tokens in the hash fragment, not query params
    const hash = window.location.hash
    if (hash) {
      const params = new URLSearchParams(hash.substring(1))
      const accessToken = params.get('access_token')
      const refreshToken = params.get('refresh_token')
      const type = params.get('type')

      if (accessToken && type === 'recovery') {
        // Set the session with the tokens from the email link
        supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken || '',
        }).then(({ error }) => {
          if (error) {
            setError('This reset link has expired or is invalid. Please request a new one.')
          } else {
            setSessionReady(true)
          }
        })
      } else {
        setError('Invalid reset link. Please request a new password reset.')
      }
    } else {
      // Fallback to query params if no hash
      const accessToken = searchParams.get('access_token')
      const refreshToken = searchParams.get('refresh_token')  
      const type = searchParams.get('type')

      if (accessToken && type === 'recovery') {
        supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken || '',
        }).then(({ error }) => {
          if (error) {
            setError('This reset link has expired or is invalid. Please request a new one.')
          } else {
            setSessionReady(true)
          }
        })
      } else {
        setError('Invalid reset link. Please request a new password reset.')
      }
    }
  }, [searchParams, isDevelopment])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setLoading(true)
    setError(null)

    try {
      // In development mode with ?dev=true, just simulate success
      if (isDevelopment && searchParams.get('dev') === 'true') {
        await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API delay
        setSuccess(true)
        return
      }

      const { error } = await supabase.auth.updateUser({
        password: password,
      })

      if (error) throw error

      setSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update password')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-hero-buttermilk flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-hero shadow-2xl p-10 max-w-md w-full"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-hero-green/10 mb-6"
            >
              <CheckCircle className="h-10 w-10 text-hero-green" />
            </motion.div>
            <h2 className="text-3xl font-anton font-black uppercase text-gray-900 mb-3 tracking-tight">PASSWORD UPDATED!</h2>
            <p className="text-gray-600 mb-8 text-lg">Your password has been successfully reset.</p>
            <div className="space-y-4">
              <p className="text-gray-600">You can now open the HERO FITNESS app and sign in with your new password.</p>
              <div className="pt-4">
                <a
                  href="https://apps.apple.com/app/hero-fitness-ai/id6738900681"
                  className="block w-full bg-hero-orange text-white px-6 py-4 rounded-2xl font-bold uppercase tracking-wide hover:bg-hero-tangerine transform hover:scale-105 transition-all duration-200"
                >
                  OPEN IN APP STORE
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  if (!sessionReady && !error) {
    return (
      <div className="min-h-screen bg-hero-buttermilk flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-hero shadow-2xl p-10 max-w-md w-full"
        >
          <div className="text-center">
            <h2 className="text-2xl font-anton font-black uppercase text-gray-900 mb-6 tracking-tight">VERIFYING RESET LINK...</h2>
            <div className="inline-block animate-spin rounded-full h-10 w-10 border-b-2 border-hero-orange"></div>
          </div>
        </motion.div>
      </div>
    )
  }

  if (error && !sessionReady) {
    return (
      <div className="min-h-screen bg-hero-buttermilk flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-hero shadow-2xl p-10 max-w-md w-full"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-red-50 mb-6"
            >
              <XCircle className="h-10 w-10 text-red-500" />
            </motion.div>
            <h2 className="text-2xl font-anton font-black uppercase text-gray-900 mb-3 tracking-tight">INVALID OR EXPIRED LINK</h2>
            <p className="text-gray-600 mb-6 text-lg">{error}</p>
            <p className="text-gray-500">Please request a new password reset link from the HERO FITNESS app.</p>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-hero-buttermilk flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-hero shadow-2xl p-10 max-w-md w-full"
      >
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/icon.png"
              alt="Hero Fitness AI"
              width={60}
              height={60}
              className="rounded-xl"
            />
          </div>
          <h1 className="text-3xl font-anton font-black uppercase text-gray-900 tracking-tight mb-2">HERO FITNESS</h1>
          <p className="text-gray-600 text-lg">Fitness that celebrates you</p>
          <p className="text-gray-500 mt-4">Reset Your Password</p>
          {isDevelopment && searchParams.get('dev') === 'true' && (
            <div className="mt-4 px-3 py-2 bg-hero-yellow/20 border border-hero-yellow rounded-xl">
              <p className="text-xs font-bold text-gray-700 uppercase tracking-wide">Development Mode</p>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <label htmlFor="password" className="block text-sm font-bold uppercase tracking-wide text-gray-700 mb-2">
              New Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-hero-orange focus:border-transparent transition bg-gray-50 hover:bg-white"
                placeholder="Enter new password"
                required
                minLength={6}
              />
            </div>
            <p className="mt-2 text-xs text-gray-500">Minimum 6 characters</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label htmlFor="confirmPassword" className="block text-sm font-bold uppercase tracking-wide text-gray-700 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-hero-orange focus:border-transparent transition bg-gray-50 hover:bg-white"
                placeholder="Confirm new password"
                required
              />
            </div>
          </motion.div>

          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm flex items-center"
            >
              <AlertCircle className="h-4 w-4 mr-2 flex-shrink-0" />
              {error}
            </motion.div>
          )}

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.05 }}
            whileTap={{ scale: loading ? 1 : 0.95 }}
            className="w-full bg-hero-orange text-white px-6 py-4 rounded-2xl font-bold uppercase tracking-wide hover:bg-hero-tangerine transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'UPDATING...' : 'UPDATE PASSWORD'}
          </motion.button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Having trouble?{' '}
            <a href="mailto:hello@usehero.fit" className="text-hero-orange hover:text-hero-tangerine font-bold transition">
              Contact Support
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default function ResetPassword() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-hero-buttermilk flex items-center justify-center p-4">
        <div className="bg-white rounded-hero shadow-2xl p-10 max-w-md w-full">
          <div className="text-center">
            <h2 className="text-2xl font-anton font-black uppercase text-gray-900 mb-6 tracking-tight">LOADING...</h2>
            <div className="inline-block animate-spin rounded-full h-10 w-10 border-b-2 border-hero-orange"></div>
          </div>
        </div>
      </div>
    }>
      <ResetPasswordContent />
    </Suspense>
  )
}
