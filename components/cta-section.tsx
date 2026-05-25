'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Zap } from 'lucide-react'

export default function CTASection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-gradient-to-b from-background to-primary/5 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-white/80 via-white/60 to-white/40 p-12 sm:p-16 text-center shadow-xl hover:shadow-2xl transition duration-500">
          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition duration-300 animate-pulse-interactive">
              <Zap className="h-8 w-8 text-primary" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl mb-4">
            Siap Mengubah Sistem Administrasi Sekolah Anda?
          </h2>

          {/* Description */}
          <p className="text-lg text-foreground/70 mb-8">
            Bergabunglah dengan 500+ sekolah yang telah merasakan manfaat SIPA. Dapatkan uji coba gratis selama 30 hari tanpa perlu kartu kredit.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95 transition duration-300 font-semibold shadow-lg hover:shadow-xl px-8 py-3 btn-interactive btn-glow"
            >
              <span className="flex items-center gap-2">
                Mulai Uji Coba Sekarang
                <ArrowRight className="h-5 w-5" />
              </span>
            </Button>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:translate-x-1 transition duration-300 active:scale-95"
            >
              Hubungi Sales
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 pt-8 border-t border-border/50">
            <p className="text-sm text-foreground/60 mb-4">Dipercaya oleh ribuan institusi pendidikan</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-center">
              {[
                { label: '500+', desc: 'Sekolah' },
                { label: '50,000+', desc: 'Pengguna' },
                { label: '99.9%', desc: 'Uptime' },
              ].map((stat, i) => (
                <div key={i} className="px-4">
                  <p className="text-2xl font-bold text-primary">{stat.label}</p>
                  <p className="text-xs text-foreground/60">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
