'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { ChevronDown, CheckCircle2, Zap, Shield, Users, Clock, TrendingUp } from 'lucide-react'

export default function BenefitsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const benefits = [
    {
      title: 'Hemat Waktu Administratif',
      icon: Clock,
      description: 'Otomatisasi proses administratif yang memakan waktu',
      details: 'Dengan sistem kami, guru dapat menghemat hingga 20 jam per bulan dari tugas-tugas administratif rutin. Fokuskan waktu Anda pada pembelajaran siswa yang lebih bermakna.',
      stats: '20 jam/bulan',
    },
    {
      title: 'Keamanan Data Terjamin',
      icon: Shield,
      description: 'Enkripsi tingkat enterprise untuk semua data sekolah',
      details: 'Data siswa dan akademik dilindungi dengan enkripsi end-to-end dan compliance terhadap standar keamanan internasional ISO 27001.',
      stats: '99.9% Uptime',
    },
    {
      title: 'Kolaborasi Tim Lebih Baik',
      icon: Users,
      description: 'Komunikasi seamless antara guru, admin, dan orang tua',
      details: 'Platform terpusat memungkinkan kolaborasi real-time, pengurangan email, dan komunikasi yang lebih efisien dengan semua stakeholder.',
      stats: '3x lebih cepat',
    },
    {
      title: 'Analitik Real-time',
      icon: TrendingUp,
      description: 'Dashboard analytics untuk insight mendalam tentang performa',
      details: 'Pantau progress siswa, identifikasi area yang perlu improvement, dan buat keputusan berbasis data dengan visualisasi yang jelas.',
      stats: '500+ reports',
    },
  ]

  return (
    <section
      id="advantages"
      className="bg-gradient-to-b from-background via-background/50 to-background px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Keuntungan SIPA
          </h2>
          <p className="mt-4 text-lg text-foreground/60">
            Lihat bagaimana SIPA mengubah cara sekolah beroperasi
          </p>
        </div>

        {/* Expandable Benefits List */}
        <div className="space-y-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            const isExpanded = expandedIndex === index

            return (
              <div
                key={index}
                className="group"
              >
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="w-full text-left transition-all duration-300"
                >
                  <Card className="border border-border bg-white/50 p-6 cursor-pointer transition duration-300 hover:border-primary/50 hover:shadow-md hover:bg-white/70 group-hover:shadow-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition duration-300 group-hover:bg-primary/20">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">
                            {benefit.title}
                          </h3>
                          <p className="mt-1 text-sm text-foreground/60">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-primary transition duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </div>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <div className="mt-4 border-t border-border/50 pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                        <p className="text-sm text-foreground/70 leading-relaxed mb-3">
                          {benefit.details}
                        </p>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span className="text-sm font-semibold text-primary">
                            {benefit.stats}
                          </span>
                        </div>
                      </div>
                    )}
                  </Card>
                </button>
              </div>
            )
          })}
        </div>

        {/* Quick Stats at Bottom */}
        <div className="mt-12 grid gap-4 sm:grid-cols-4">
          {[
            { label: 'Sekolah Aktif', value: '500+' },
            { label: 'Siswa Tercakup', value: '50K+' },
            { label: 'Peningkatan Efisiensi', value: '80%' },
            { label: 'Kepuasan Pengguna', value: '4.9/5' },
          ].map((stat, index) => (
            <div
              key={index}
              className="rounded-lg border border-border/50 bg-white/30 p-4 text-center hover:bg-white/50 hover:border-primary/30 transition duration-300"
            >
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1 text-xs text-foreground/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
