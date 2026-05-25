'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <span className="text-sm font-bold">S</span>
          </div>
          <span className="hidden text-lg font-semibold text-foreground sm:inline">SIPA</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <button
            onClick={() => scrollToSection('features')}
            className="text-sm text-foreground/70 transition duration-300 hover:text-primary hover:scale-105 active:scale-95 font-medium"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection('advantages')}
            className="text-sm text-foreground/70 transition duration-300 hover:text-primary hover:scale-105 active:scale-95 font-medium"
          >
            Keuntungan
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm text-foreground/70 transition duration-300 hover:text-primary hover:scale-105 active:scale-95 font-medium"
          >
            Kontak
          </button>
        </div>

        {/* Login Button */}
        <div className="hidden md:block">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition duration-300 active:scale-95 font-medium shadow-md hover:shadow-lg"
          >
            Login Portal
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="space-y-3">
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left text-sm text-foreground/70 transition duration-300 hover:text-primary hover:translate-x-1 active:scale-95 font-medium py-2"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('advantages')}
              className="block w-full text-left text-sm text-foreground/70 transition duration-300 hover:text-primary hover:translate-x-1 active:scale-95 font-medium py-2"
            >
              Keuntungan
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-sm text-foreground/70 transition duration-300 hover:text-primary hover:translate-x-1 active:scale-95 font-medium py-2"
            >
              Kontak
            </button>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition duration-300 active:scale-95 font-medium">Login Portal</Button>
          </div>
        </div>
      )}
    </nav>
  )
}
