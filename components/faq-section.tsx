'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { ChevronDown, HelpCircle } from 'lucide-react'

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Berapa biaya untuk menggunakan SIPA?',
      answer: 'SIPA menawarkan berbagai paket berdasarkan ukuran sekolah Anda, mulai dari paket starter untuk sekolah kecil hingga enterprise untuk sekolah besar. Hubungi tim sales kami untuk penawaran khusus dan demo gratis.',
    },
    {
      question: 'Apakah data kami aman di cloud SIPA?',
      answer: 'Ya, semua data dienkripsi dengan standar enterprise-grade (AES-256) dan tersimpan di server yang aman. Kami juga mematuhi standar keamanan internasional ISO 27001 dan memiliki backup otomatis harian.',
    },
    {
      question: 'Berapa lama proses implementasi SIPA?',
      answer: 'Rata-rata implementasi memakan waktu 2-4 minggu tergantung ukuran sekolah dan kompleksitas data yang ada. Tim kami akan memandu setiap langkah dan memberikan training lengkap kepada staff.',
    },
    {
      question: 'Bisakah SIPA terintegrasi dengan sistem yang sudah ada?',
      answer: 'SIPA dapat terintegrasi dengan berbagai sistem legacy melalui API atau import/export data. Tim teknis kami siap membantu migrasi data dari sistem lama ke SIPA dengan seamless.',
    },
    {
      question: 'Apakah tersedia mobile app untuk SIPA?',
      answer: 'Ya, SIPA tersedia di iOS dan Android. Guru, admin, dan orang tua bisa mengakses semua fitur melalui mobile app dengan sinkronisasi real-time ke database cloud.',
    },
    {
      question: 'Bagaimana jika saya membutuhkan fitur custom?',
      answer: 'SIPA dilengkapi dengan module builder yang memungkinkan customisasi sesuai kebutuhan sekolah. Untuk kebutuhan khusus, tim development kami dapat membantu membuat custom module.',
    },
  ]

  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <HelpCircle className="h-6 w-6 text-primary" />
            </div>
          </div>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Pertanyaan Umum
          </h2>
          <p className="mt-4 text-lg text-foreground/60">
            Jawaban untuk pertanyaan-pertanyaan yang sering kami terima
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isExpanded = expandedIndex === index

            return (
              <div key={index}>
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="w-full text-left"
                >
                  <Card className="border border-border bg-white/50 p-6 cursor-pointer transition duration-300 hover:border-primary/40 hover:bg-white/70 hover:shadow-md group">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-base font-semibold text-foreground pr-4">
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-primary transition duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </div>

                    {/* Expanded Answer */}
                    {isExpanded && (
                      <div className="mt-4 border-t border-border/50 pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                        <p className="text-sm text-foreground/70 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </Card>
                </button>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-xl border border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10 p-8 text-center">
          <h3 className="mb-2 text-xl font-semibold text-foreground">
            Masih ada pertanyaan?
          </h3>
          <p className="mb-6 text-foreground/60">
            Tim support kami siap membantu Anda 24/7. Hubungi kami sekarang!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-2 font-medium hover:bg-primary/90 transition duration-300 active:scale-95"
            >
              Hubungi Tim Sales
            </a>
            <a
              href="mailto:support@sipa.id"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-white text-foreground px-6 py-2 font-medium hover:bg-foreground/5 transition duration-300 active:scale-95"
            >
              Email Support
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
