'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

export function DoorOpening({
  onClose,
}: {
  onClose: () => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [showDoor, setShowDoor] = useState(true)
  const [autoOpened, setAutoOpened] = useState(false)

  useEffect(() => {
    // Auto-open after 4 seconds
    const timer = setTimeout(() => {
      setIsOpen(true)
      setAutoOpened(true)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setShowDoor(false)
        onClose()
      }, 1200)
      return () => clearTimeout(timer)
    }
  }, [isOpen, onClose])

  if (!showDoor) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#FFF8F5] via-[#FFE8E0] to-[#FFD4C4] overflow-hidden">
      {/* Decorative corner elements with animations */}
      <div className="absolute top-0 left-0 w-40 h-40 opacity-30 animate-pulse">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#B76E79]">
          <path
            d="M0,0 Q50,20 100,0 Q50,40 0,0"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-40 h-40 opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#B76E79]">
          <path
            d="M100,100 Q50,80 0,100 Q50,60 100,100"
            fill="currentColor"
          />
        </svg>
      </div>
      {/* Floating particles */}
      <div className="absolute top-20 left-20 w-3 h-3 rounded-full bg-[#B76E79] opacity-40 animate-float" />
      <div className="absolute top-1/3 right-16 w-2 h-2 rounded-full bg-[#E6D7BE] opacity-40 animate-float" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-32 left-1/4 w-2 h-2 rounded-full bg-[#F4C2C2] opacity-40 animate-float" style={{ animationDelay: '1s' }} />

      {/* Main door container */}
      <div className="relative w-full h-full flex items-center justify-center perspective">
        {/* Left door */}
        <div
          className={`absolute w-1/2 h-full bg-gradient-to-r from-[#B76E79] via-[#C87C85] to-[#D4888F] shadow-2xl transition-transform duration-1000 origin-right ${
            isOpen ? 'translate-x-full' : 'translate-x-0'
          }`}
          style={{
            perspectiveOrigin: '100% 50%',
            transform: isOpen ? 'rotateY(-90deg)' : 'rotateY(0deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          <div className="w-full h-full flex flex-col items-center justify-center text-white relative overflow-hidden">
            {/* Rose gold embossed stamp */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E6D7BE]/40 to-transparent rounded-full filter blur-xl" />
              <div className="relative w-48 h-48 border-4 border-white/40 rounded-full flex flex-col items-center justify-center backdrop-blur-sm"
                style={{
                  boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.3), 0 4px 12px rgba(0,0,0,0.2)',
                }}
              >
                <p className="text-white/60 text-sm tracking-widest font-light uppercase mb-2">You Are</p>
                <h2 className="font-serif text-3xl font-light text-white">Invited</h2>
                <div className="mt-4 flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                </div>
              </div>
            </div>
            <p className="text-lg mt-12 opacity-80 font-light">
              {!autoOpened ? 'Tap to open' : 'Welcome'}
            </p>
          </div>
        </div>

        {/* Right door */}
        <div
          className={`absolute w-1/2 h-full bg-gradient-to-l from-[#B76E79] via-[#C87C85] to-[#D4888F] shadow-2xl transition-transform duration-1000 origin-left ${
            isOpen ? '-translate-x-full' : 'translate-x-0'
          }`}
          style={{
            perspectiveOrigin: '0% 50%',
            transform: isOpen ? 'rotateY(90deg)' : 'rotateY(0deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          <div className="w-full h-full flex flex-col items-center justify-center text-white relative overflow-hidden">
            {/* Rose gold embossed stamp with D&P */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E6D7BE]/40 to-transparent rounded-full filter blur-xl" />
              <div className="relative w-48 h-48 border-4 border-white/40 rounded-full flex flex-col items-center justify-center backdrop-blur-sm"
                style={{
                  boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.3), 0 4px 12px rgba(0,0,0,0.2)',
                }}
              >
                <h2 className="font-serif text-5xl font-light text-white">D&P</h2>
                <div className="mt-3 flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-white/50" />
                  <div className="w-1 h-1 rounded-full bg-white/50" />
                  <div className="w-1 h-1 rounded-full bg-white/50" />
                </div>
              </div>
            </div>
            <p className="text-lg mt-12 opacity-80 font-light">
              {!autoOpened ? 'Tap to open' : 'Welcome'}
            </p>
          </div>
        </div>

        {/* Center content - visible after doors open */}
        {isOpen && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-[#FFF8F5] via-[#FFE8E0] to-[#FFD4C4] animate-fade-in">
            <div className="text-center space-y-6 px-4 md:px-8">
              <div className="space-y-2">
                <h1 className="font-serif text-5xl md:text-6xl font-light text-[#B76E79] tracking-wide">
                  Dnyanesh & Pratiksha
                </h1>
                <p className="text-lg md:text-xl text-[#4A4A4A] font-light">
                  Together with joy
                </p>
              </div>
              <p className="text-[#4A4A4A] max-w-md mx-auto leading-relaxed">
                Join us as we celebrate the beginning of our beautiful journey together
              </p>
            </div>
          </div>
        )}

        {/* Click overlay to open door */}
        {!isOpen && (
          <div
            className="absolute inset-0 cursor-pointer z-40"
            onClick={() => setIsOpen(true)}
          />
        )}

        {/* Close button for reopening */}
        {autoOpened && !isOpen && (
          <button
            onClick={() => setShowDoor(false)}
            className="absolute top-4 right-4 z-40 text-white hover:opacity-80 transition-opacity"
            aria-label="Close invitation"
          >
            <X size={32} />
          </button>
        )}
      </div>
    </div>
  )
}
