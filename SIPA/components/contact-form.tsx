'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Send } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    schoolName: '',
    whatsapp: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setSubmitted(true)
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ schoolName: '', whatsapp: '' })
        setSubmitted(false)
      }, 3000)
    }, 1500)
  }

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-background to-background/80 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-2xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Ajukan Uji Coba Gratis
          </h2>
          <p className="mt-4 text-lg text-foreground/60">
            Isi formulir di bawah dan tim kami akan menghubungi Anda dalam 24 jam
          </p>
        </div>

        {/* Form Card */}
        <Card className="border border-border bg-white/80 p-8 shadow-sm backdrop-blur">
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-4 py-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Send className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Terima kasih!
              </h3>
              <p className="text-center text-sm text-foreground/60">
                Kami akan menghubungi Anda segera. Pastikan nomor WhatsApp Anda aktif.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* School Name Field */}
              <div>
                <label
                  htmlFor="schoolName"
                  className={`block text-sm font-medium mb-2 transition duration-300 ${
                    focusedField === 'schoolName'
                      ? 'text-primary'
                      : 'text-foreground'
                  }`}
                >
                  Nama Sekolah
                </label>
                <Input
                  id="schoolName"
                  name="schoolName"
                  type="text"
                  placeholder="Contoh: SMA Negeri 1 Jakarta"
                  value={formData.schoolName}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('schoolName')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`border-2 bg-background/50 text-foreground placeholder:text-foreground/50 transition duration-300 ${
                    focusedField === 'schoolName'
                      ? 'border-primary/50 bg-white/80'
                      : 'border-border'
                  }`}
                />
              </div>

              {/* WhatsApp Field */}
              <div>
                <label
                  htmlFor="whatsapp"
                  className={`block text-sm font-medium mb-2 transition duration-300 ${
                    focusedField === 'whatsapp'
                      ? 'text-primary'
                      : 'text-foreground'
                  }`}
                >
                  Nomor WhatsApp
                </label>
                <Input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  placeholder="+62 81234567890"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('whatsapp')}
                  onBlur={() => setFocusedField(null)}
                  required
                  pattern="^\+?[0-9]{10,15}$"
                  className={`border-2 bg-background/50 text-foreground placeholder:text-foreground/50 transition duration-300 ${
                    focusedField === 'whatsapp'
                      ? 'border-primary/50 bg-white/80'
                      : 'border-border'
                  }`}
                />
                <p className="mt-1 text-xs text-foreground/50">
                  Kami akan menghubungi Anda melalui WhatsApp
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95 h-11 text-base font-medium transition duration-300 disabled:opacity-50"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                    Mengirim...
                  </span>
                ) : (
                  'Ajukan Uji Coba Gratis'
                )}
              </Button>

              {/* Disclaimer */}
              <p className="text-center text-xs text-foreground/50">
                Kami berkomitmen menjaga privasi Anda. Tidak ada spam, janji kami.
              </p>
            </form>
          )}
        </Card>

        {/* Trust Section */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3 text-center">
          <div>
            <p className="text-2xl font-bold text-primary">500+</p>
            <p className="text-sm text-foreground/60">Sekolah Terdaftar</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary">50,000+</p>
            <p className="text-sm text-foreground/60">Pengguna Aktif</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary">99.9%</p>
            <p className="text-sm text-foreground/60">Uptime</p>
          </div>
        </div>
      </div>
    </section>
  )
}
