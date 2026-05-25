'use client'

import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import FeaturesSection from '@/components/features-section'
import BenefitsSection from '@/components/benefits-section'
import TestimonialsSection from '@/components/testimonials-section'
import FAQSection from '@/components/faq-section'
import CTASection from '@/components/cta-section'
import ContactForm from '@/components/contact-form'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
