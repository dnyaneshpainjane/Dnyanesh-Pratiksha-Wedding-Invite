'use client'

import { Heart, Mail, Phone } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-16 md:py-24 overflow-hidden">
      {/* Wedding card background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8F5] via-white to-[#FFE8E0]" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-20 w-64 h-64 bg-[#E6D7BE]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-20 w-64 h-64 bg-[#B76E79]/10 rounded-full blur-3xl" />
      
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-[#B76E79]/30 rounded-br-3xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-[#B76E79]/30 rounded-tl-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main wedding card content */}
        <div className="bg-gradient-to-br from-white via-[#FFF8F5] to-[#FFE8E0] rounded-3xl shadow-2xl p-12 md:p-16 border border-[#B76E79]/20 mb-12">
          {/* Top decorative line */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#B76E79]/40" />
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-[#B76E79]" />
              <div className="w-2 h-2 rounded-full bg-[#E6D7BE]" />
              <div className="w-2 h-2 rounded-full bg-[#B76E79]" />
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#B76E79]/40" />
          </div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
            {/* Couple names - Left */}
            <div className="text-center md:text-left space-y-4 flex flex-col justify-center">
              <h3 className="font-serif text-3xl md:text-4xl font-light text-[#B76E79]">
                Dnyanesh
              </h3>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <div className="h-px w-8 bg-[#B76E79]/40" />
                <Heart size={16} className="text-[#B76E79]" />
                <div className="h-px w-8 bg-[#B76E79]/40" />
              </div>
              <p className="text-[#4A4A4A] font-light text-sm italic">
                Together with our families, we joyfully celebrate our union
              </p>
            </div>

            {/* Center message */}
            <div className="text-center space-y-6 flex flex-col justify-center">
              <p className="text-sm font-light text-[#B76E79] uppercase tracking-widest">
                Request the honor of your presence
              </p>
              <p className="font-serif text-2xl font-light text-[#4A4A4A]">
                Wedding Celebration
              </p>
              <p className="text-[#4A4A4A] font-light">
                Jun 27, 2026
              </p>
            </div>

            {/* Bride name - Right */}
            <div className="text-center md:text-right space-y-4 flex flex-col justify-center">
              <h3 className="font-serif text-3xl md:text-4xl font-light text-[#B76E79]">
                Pratiksha
              </h3>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <div className="h-px w-8 bg-[#B76E79]/40" />
                <Heart size={16} className="text-[#B76E79]" />
                <div className="h-px w-8 bg-[#B76E79]/40" />
              </div>
              <p className="text-[#4A4A4A] font-light text-sm italic">
                Your presence and blessings are requested
              </p>
            </div>
          </div>

          {/* Contact info */}
          <div className="border-t border-b border-[#B76E79]/20 py-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
              <a
                href="mailto:dnyanesh.pratiksha@wedding.com"
                className="flex items-center justify-center gap-3 text-[#4A4A4A] font-light hover:text-[#B76E79] transition-colors group"
              >
                <div className="p-2 bg-[#F4C2C2]/30 rounded-full group-hover:bg-[#F4C2C2]/50 transition-colors">
                  <Mail size={18} className="text-[#B76E79]" />
                </div>
                <span className="text-sm">dnyanesh.pratiksha@wedding.com</span>
              </a>
              <a
                href="tel:+15551234567"
                className="flex items-center justify-center gap-3 text-[#4A4A4A] font-light hover:text-[#B76E79] transition-colors group"
              >
                <div className="p-2 bg-[#E6D7BE]/30 rounded-full group-hover:bg-[#E6D7BE]/50 transition-colors">
                  <Phone size={18} className="text-[#B76E79]" />
                </div>
                <span className="text-sm">+91 98342 28332</span>
              </a>
            </div>
          </div>

          {/* Quick navigation */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-center">
            <a
              href="#events"
              className="text-sm font-light text-[#B76E79] hover:text-primary transition-colors relative group"
            >
              Events
              <div className="absolute bottom-0 left-0 h-px w-0 bg-[#B76E79] group-hover:w-full transition-all duration-300" />
            </a>
            <div className="w-px h-4 bg-[#B76E79]/20" />
            <a
              href="#venue"
              className="text-sm font-light text-[#B76E79] hover:text-primary transition-colors relative group"
            >
              Venue
              <div className="absolute bottom-0 left-0 h-px w-0 bg-[#B76E79] group-hover:w-full transition-all duration-300" />
            </a>
            <div className="w-px h-4 bg-[#B76E79]/20" />
            <a
              href="#gallery"
              className="text-sm font-light text-[#B76E79] hover:text-primary transition-colors relative group"
            >
              Gallery
              <div className="absolute bottom-0 left-0 h-px w-0 bg-[#B76E79] group-hover:w-full transition-all duration-300" />
            </a>
            <div className="w-px h-4 bg-[#B76E79]/20" />
            <a
              href="#rsvp"
              className="text-sm font-light text-[#B76E79] hover:text-primary transition-colors relative group"
            >
              RSVP
              <div className="absolute bottom-0 left-0 h-px w-0 bg-[#B76E79] group-hover:w-full transition-all duration-300" />
            </a>
          </div>

          {/* Bottom decorative line */}
          <div className="flex items-center justify-center gap-4 mt-12 pt-8 border-t border-[#B76E79]/20">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#B76E79]/40" />
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-[#E6D7BE]" />
              <div className="w-2 h-2 rounded-full bg-[#B76E79]" />
              <div className="w-2 h-2 rounded-full bg-[#E6D7BE]" />
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#B76E79]/40" />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-[#4A4A4A]/60 text-sm font-light">
            © {currentYear} Dnyanesh & Pratiksha. Made with
            <span className="inline-flex items-center gap-1 mx-1">
              <Heart size={14} className="text-[#B76E79] animate-pulse" />
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
