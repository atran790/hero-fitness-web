import Navigation from '@/components/landing/Navigation'
import Hero from '@/components/landing/Hero'
import AppShowcase from '@/components/landing/AppShowcase'
import WhyChooseHero from '@/components/landing/WhyChooseHero'
import Features from '@/components/landing/Features'
import Footer from '@/components/landing/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <AppShowcase />
        <WhyChooseHero />
        <Features />
      </main>
      <Footer />
    </>
  )
}