'use client'

import { useEffect } from 'react'
import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import FeaturesSection from '@/components/features-section'
import BenefitsSection from '@/components/benefits-section'
import FAQSection from '@/components/faq-section'
import CTASection from '@/components/cta-section'
import ContactForm from '@/components/contact-form'
import Footer from '@/components/footer'

export default function Page() {
  // Engine otomatis berburu dan menghapus paksa komponen liar v0
  useEffect(() => {
    const removeWatermark = () => {
      const elements = document.querySelectorAll(
        '[data-v0-badge], div[class*="v0-badge"], a[href*="v0.dev"], #v0-badge-container, .v0-badge'
      )
      elements.forEach(el => el.remove())
    }

    removeWatermark()

    // Amankan berkala setiap 100ms
    const interval = setInterval(removeWatermark, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <FAQSection />
        <CTASection />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
