'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Ibu Siti Rahma',
      role: 'Kepala Sekolah',
      school: 'SMA Negeri 5 Jakarta',
      content: 'SIPA telah mengubah cara kami mengelola sekolah. Absensi yang sebelumnya memakan waktu 2 jam per hari sekarang hanya butuh 10 menit. Sangat recommended!',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      name: 'Pak Budi Santoso',
      role: 'Guru Matematika',
      school: 'SMP Negeri 3 Bandung',
      content: 'Sistem input nilai yang terintegrasi ini sangat membantu. Saya bisa fokus pada mengajar daripada memikirkan administrasi. Dan orang tua bisa langsung lihat progres anak mereka.',
      rating: 5,
      avatar: '👨‍🏫',
    },
    {
      name: 'Ibu Dwi Lestari',
      role: 'Admin Sekolah',
      school: 'SD Negeri 2 Surabaya',
      content: 'Interface SIPA sangat user-friendly. Bahkan staff admin kami yang tidak tech-savvy bisa langsung terbiasa. Customer support mereka juga sangat responsif!',
      rating: 5,
      avatar: '👩‍💻',
    },
    {
      name: 'Pak Rudi Hartono',
      role: 'Orang Tua Siswa',
      school: 'Wali Murid SMA Negeri 1 Medan',
      content: 'Sekarang saya bisa pantau progress anak saya real-time. Komunikasi dengan guru jadi lebih lancar. Platform ini benar-benar membuat orang tua lebih engaged dengan pendidikan anak.',
      rating: 5,
      avatar: '👨‍👩‍👧',
    },
  ]

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="bg-gradient-to-b from-background/50 to-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Apa Kata Mereka
          </h2>
          <p className="mt-4 text-lg text-foreground/60">
            Testimoni dari pengguna SIPA di seluruh Indonesia
          </p>
        </div>

        {/* Carousel */}
        <div className="space-y-8">
          {/* Testimonial Card */}
          <Card className="border border-primary/20 bg-gradient-to-br from-white/50 to-white/30 p-8 sm:p-10 shadow-lg">
            {/* Stars */}
            <div className="mb-4 flex gap-1">
              {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Content */}
            <p className="mb-6 text-lg text-foreground leading-relaxed italic">
              "{currentTestimonial.content}"
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl">
                {currentTestimonial.avatar}
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  {currentTestimonial.name}
                </p>
                <p className="text-sm text-foreground/60">
                  {currentTestimonial.role} • {currentTestimonial.school}
                </p>
              </div>
            </div>
          </Card>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between gap-4">
            {/* Previous Button */}
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white hover:bg-primary hover:text-white hover:border-primary transition duration-300 active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-primary'
                      : 'w-2 bg-border hover:bg-foreground/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white hover:bg-primary hover:text-white hover:border-primary transition duration-300 active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Counter */}
          <div className="text-center text-sm text-foreground/60">
            {currentIndex + 1} dari {testimonials.length}
          </div>
        </div>
      </div>
    </section>
  )
}
