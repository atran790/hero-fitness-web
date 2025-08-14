import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

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
        </div>
      </div>
    </footer>
  )
}