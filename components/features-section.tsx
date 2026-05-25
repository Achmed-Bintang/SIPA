'use client'

import { Card } from '@/components/ui/card'
import { Clock, BarChart3, Users } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: Clock,
      title: 'Modul Absensi Cloud',
      description: 'Kelola absensi siswa secara real-time dengan teknologi cloud. Akses mudah dari mana saja, kapan saja.',
    },
    {
      icon: BarChart3,
      title: 'Rekap Nilai Otomatis',
      description: 'Sistem penilaian otomatis yang akurat dan transparan. Hemat waktu input data hingga 80%.',
    },
    {
      icon: Users,
      title: 'Dashboard Orang Tua',
      description: 'Orang tua dapat memantau perkembangan anak secara langsung. Komunikasi lebih baik dengan sekolah.',
    },
  ]

  return (
    <section
      id="features"
      className="bg-background/50 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Fitur-Fitur Unggulan
          </h2>
          <p className="mt-4 text-lg text-foreground/60">
            Semua yang Anda butuhkan untuk mengelola sekolah dengan lebih efisien
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="border border-border bg-white/50 p-6 transition duration-300 hover:shadow-lg hover:border-primary/50 hover:bg-white/80 hover:scale-105 cursor-pointer group"
              >
                {/* Icon */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <Icon className="h-6 w-6 text-primary transition duration-300 group-hover:scale-110" />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-lg font-semibold text-foreground transition duration-300 group-hover:text-primary">
                  {feature.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
