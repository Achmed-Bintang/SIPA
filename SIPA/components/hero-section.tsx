'use client'

import { Button } from '@/components/ui/button'
import { BarChart3, TrendingUp, PieChart } from 'lucide-react'

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative overflow-hidden bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-balance text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Ubah Beban Administratif Menjadi Efisiensi Digital!
            </h1>

            <p className="text-balance text-lg text-foreground/70">
              Portal akademik terpadu yang menghubungkan kepala sekolah, guru, dan orang tua dalam satu platform powerful. Kelola absensi, nilai, dan komunikasi dengan mudah.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95 transition duration-300 font-semibold shadow-lg hover:shadow-xl"
              >
                Daftar Sesi Demo Gratis
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10 active:scale-95 transition duration-300 font-semibold"
              >
                Pelajari Lebih Lanjut
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6">
              <p className="text-sm text-foreground/60 mb-3">Dipercaya oleh lebih dari 500+ sekolah di Indonesia</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Keamanan Data Terjamin
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Support 24/7
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Dashboard Mockup */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              {/* Dashboard Card */}
              <div className="rounded-2xl border border-border bg-white p-6 shadow-lg">
                {/* Header */}
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-foreground">Dashboard Analytics</h3>
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>

                {/* Charts */}
                <div className="space-y-6">
                  {/* Top Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-lg bg-muted p-3">
                      <div className="h-2 w-6 rounded bg-primary/30 mb-2" />
                      <div className="h-1.5 w-8 rounded bg-primary/20" />
                    </div>
                    <div className="rounded-lg bg-muted p-3">
                      <div className="h-2 w-6 rounded bg-primary/30 mb-2" />
                      <div className="h-1.5 w-8 rounded bg-primary/20" />
                    </div>
                    <div className="rounded-lg bg-muted p-3">
                      <div className="h-2 w-6 rounded bg-primary/30 mb-2" />
                      <div className="h-1.5 w-8 rounded bg-primary/20" />
                    </div>
                  </div>

                  {/* Bar Chart Placeholder */}
                  <div>
                    <div className="mb-3 h-1.5 w-12 rounded bg-foreground/20" />
                    <div className="flex items-end gap-2">
                      <div className="h-16 w-2 rounded-sm bg-primary/40" />
                      <div className="h-20 w-2 rounded-sm bg-primary/60" />
                      <div className="h-14 w-2 rounded-sm bg-primary/40" />
                      <div className="h-24 w-2 rounded-sm bg-primary" />
                      <div className="h-18 w-2 rounded-sm bg-primary/50" />
                    </div>
                  </div>

                  {/* Pie Chart Placeholder */}
                  <div className="flex items-center justify-center">
                    <div className="relative h-24 w-24">
                      <svg
                        viewBox="0 0 100 100"
                        className="h-full w-full"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="8"
                          strokeDasharray="62.8 157"
                          className="text-primary/60"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="8"
                          strokeDasharray="62.8 157"
                          strokeDashoffset="-62.8"
                          className="text-primary"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-semibold text-foreground">78%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent elements */}
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full border-2 border-primary/20 opacity-50" />
              <div className="absolute -top-8 -left-8 h-16 w-16 rounded-full border-2 border-primary/10 opacity-30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
