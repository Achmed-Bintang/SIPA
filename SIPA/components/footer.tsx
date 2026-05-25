'use client'

import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="bg-gradient-to-b from-background to-foreground/5 border-t border-border px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-4 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                S
              </div>
              <span className="text-lg font-semibold text-foreground">SIPA</span>
            </div>
            <p className="text-sm text-foreground/60">
              Platform manajemen sekolah terpadu untuk mengelola administratif dengan mudah dan efisien.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Produk</h4>
            <ul className="space-y-2 text-sm">
              {['Features', 'Pricing', 'Security', 'Integrations'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-foreground/60 transition duration-300 hover:text-primary hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Resources</h4>
            <ul className="space-y-2 text-sm">
              {['Documentation', 'Blog', 'Webinars', 'Support'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-foreground/60 transition duration-300 hover:text-primary hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Kontak</h4>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:support@sipa.id"
                className="flex items-center gap-2 text-foreground/60 transition duration-300 hover:text-primary hover:translate-x-1"
              >
                <Mail className="h-4 w-4" />
                support@sipa.id
              </a>
              <a
                href="tel:+6221123456"
                className="flex items-center gap-2 text-foreground/60 transition duration-300 hover:text-primary hover:translate-x-1"
              >
                <Phone className="h-4 w-4" />
                +62 21 1234 56
              </a>
              <div className="flex items-start gap-2 text-foreground/60">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 py-8">
          {/* Social Links */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white transition duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary active:scale-95"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>

            {/* Bottom Text */}
            <div className="text-center text-sm text-foreground/60 space-y-2">
              <p>
                © {currentYear} SIPA. Semua hak dilindungi.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-xs">
                <a href="#" className="transition duration-300 hover:text-primary hover:underline">
                  Privacy Policy
                </a>
                <a href="#" className="transition duration-300 hover:text-primary hover:underline">
                  Terms of Service
                </a>
                <a href="#" className="transition duration-300 hover:text-primary hover:underline">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
