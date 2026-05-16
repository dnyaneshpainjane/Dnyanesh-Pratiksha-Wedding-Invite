'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AudioPlayer } from './audio-player'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#hero' },
    { label: 'Events', href: '#events' },
    { label: 'Venue', href: '#venue' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'RSVP', href: '#rsvp' },
  ]

  return (
    <nav className="sticky top-0 z-40 bg-gradient-to-r from-[#3D2F3A] via-[#4A3A47] to-[#3D2F3A] backdrop-blur border-b border-[#B76E79]/30 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with styling */}
          <div className="flex-shrink-0">
            <a href="#" className="flex flex-col items-center">
              <span className="font-serif text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-[#E6D7BE] to-[#B76E79]">
                D & P
              </span>
              <div className="h-0.5 w-8 bg-gradient-to-r from-[#E6D7BE] to-[#B76E79]" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <div key={item.label} className="flex items-center">
                <a
                  href={item.href}
                  className="px-6 py-3 text-[#E6D7BE] hover:text-white hover:bg-[#B76E79]/20 transition-all duration-300 text-sm tracking-widest font-light rounded-lg relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#B76E79] to-[#E6D7BE] group-hover:w-full transition-all duration-300 rounded-full" />
                </a>
                {index < navItems.length - 1 && (
                  <div className="w-px h-4 bg-[#B76E79]/30" />
                )}
              </div>
            ))}
          </div>

          {/* Audio Player + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <AudioPlayer />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-[#B76E79]/20 text-[#E6D7BE] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-2 border-t border-[#B76E79]/20 pt-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-6 py-3 text-[#E6D7BE] hover:text-white hover:bg-[#B76E79]/20 rounded-lg transition-all duration-300 text-sm tracking-wide font-light"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
