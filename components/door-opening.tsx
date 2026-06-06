'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import flowers from '@/public/flowers.png'
import sealButton from '@/public/button.png'
import doorImage from '@/public/door.png'

type DoorOpeningProps = {
  onClose: () => void
}

export function DoorOpening({ onClose }: DoorOpeningProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [hideIntro, setHideIntro] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const timer = setTimeout(openDoor, 1800)

    return () => {
      clearTimeout(timer)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const openDoor = () => {
    if (isOpen) return

    setIsOpen(true)

    timeoutRef.current = setTimeout(() => {
      setHideIntro(true)
      onClose()
    }, 7200)
  }

  const closeIntro = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setHideIntro(true)
    onClose()
  }

  if (hideIntro) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#f1c9c2]">
      <div
        className={`absolute inset-0 z-0 flex items-center justify-center overflow-hidden bg-[#f8d5cf] transition-all duration-[4200ms] ease-out ${
          isOpen ? 'scale-100 opacity-100 blur-0' : 'scale-[1.08] opacity-70 blur-sm'
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#fffaf8_0%,#f8ddd8_45%,#efc1b9_100%)]" />

        <div
          className={`relative flex h-[92vh] w-[min(92vw,520px)] items-center justify-center transition-all duration-[4800ms] ease-out ${
            isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          }`}
        >
          <div className="absolute inset-x-4 inset-y-4 z-[1] rounded-t-[12rem] rounded-b-[2.5rem] border border-white/40 bg-white/15 px-6 py-10 text-center shadow-[0_30px_80px_rgba(139,77,70,.12)] backdrop-blur-xl sm:px-8">
            <div className="flex h-full w-full flex-col items-center justify-between">
              <p className="text-[11px] uppercase tracking-[0.48em] text-[#bd7e77]">
                Wedding Invitation
              </p>

              <div>
                <h1 className="font-serif text-[clamp(3rem,6vw,4.2rem)] font-light leading-none text-[#815a55]">
                  Dnyanesh
                </h1>

                <span className="mt-2 block font-serif text-4xl italic leading-none text-[#bd8078]">
                  &
                </span>

                <h1 className="mt-2 font-serif text-[clamp(3rem,6vw,4.2rem)] font-light leading-none text-[#815a55]">
                  Pratiksha
                </h1>
              </div>

              <p className="max-w-[360px] text-[15px] leading-8 text-[#936964]">
                With love, joy, and blessings, we invite you to celebrate the
                beginning of our forever.
              </p>

              <div className="h-px w-52 bg-gradient-to-r from-transparent via-[#dfaaa3] to-transparent" />

              <div>
                <p className="font-serif text-3xl italic text-[#a66f68]">
                  Save the date
                </p>

                <p className="mt-4 text-[11px] uppercase tracking-[0.45em] text-[#b88780]">
                  Saturday
                </p>

                <p className="mt-3 font-serif text-[clamp(1.8rem,4vw,2.6rem)] leading-none text-[#8a625d]">
                  27 June 2026
                </p>
              </div>
            </div>
          </div>

          <Image
            src={flowers}
            alt="Top left floral decoration"
            priority
            className="flower-breathe pointer-events-none absolute -left-16 -top-10 z-[2] h-auto w-[210px] object-contain sm:-left-20 sm:-top-12 sm:w-[260px]"
          />

          <Image
            src={flowers}
            alt="Bottom right floral decoration"
            priority
            className="flower-breathe pointer-events-none absolute -bottom-10 -right-16 z-[2] h-auto w-[210px] rotate-180 object-contain sm:-bottom-12 sm:-right-20 sm:w-[260px]"
          />
        </div>
      </div>

      <div className="absolute inset-0 z-20 cinematic-perspective">
        <div
          className={`absolute left-0 top-0 h-full w-[50.7%] origin-left overflow-hidden ${
            isOpen ? 'door-left-open' : 'door-left-closed'
          }`}
        >
          <PeachDoor side="left" isOpen={isOpen} />
        </div>

        <div
          className={`absolute right-0 top-0 h-full w-[50.7%] origin-right overflow-hidden ${
            isOpen ? 'door-right-open' : 'door-right-closed'
          }`}
        >
          <PeachDoor side="right" isOpen={isOpen} />
        </div>

        <div
          className={`pointer-events-none absolute inset-0 z-40 bg-black transition-opacity duration-[3600ms] ${
            isOpen ? 'opacity-0' : 'opacity-[0.08]'
          }`}
        />

        <button
          onClick={openDoor}
          disabled={isOpen}
          aria-label="Open invitation"
          className={`absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transition-all duration-[1600ms] ease-out ${
            isOpen
              ? 'scale-50 opacity-0 blur-md'
              : 'scale-100 opacity-100 hover:scale-105 active:scale-95'
          }`}
        >
          <Image
            src={sealButton}
            alt="Open invitation"
            priority
            className="seal-float h-44 w-44 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,.25)] sm:h-48 sm:w-48"
          />
        </button>

        <p
          className={`absolute bottom-10 left-1/2 z-50 -translate-x-1/2 text-[10px] uppercase tracking-[0.38em] text-[#9f6c64] transition-all duration-1000 ${
            isOpen ? 'translate-y-5 opacity-0 blur-sm' : 'opacity-80'
          }`}
        >
          Tap seal to open
        </p>

        <button
          onClick={closeIntro}
          className="absolute right-5 top-5 z-[80] rounded-full bg-white/45 p-2 text-[#9b6b63] shadow-sm backdrop-blur-md transition hover:bg-white/70"
          aria-label="Close invitation"
        >
          <X size={22} />
        </button>
      </div>

      <style jsx>{`
        .cinematic-perspective {
          perspective: 2200px;
          perspective-origin: center;
        }

        .door-left-closed,
        .door-right-closed {
          transform: perspective(2200px) rotateY(0deg) translateZ(0);
          transform-style: preserve-3d;
          backface-visibility: hidden;
          transition:
            transform 5200ms cubic-bezier(0.12, 0.72, 0.18, 1),
            filter 5200ms ease,
            opacity 5200ms ease;
        }

        .door-left-open {
          transform: perspective(2200px) rotateY(-122deg) translateX(-2.5vw)
            translateZ(120px);
          transform-style: preserve-3d;
          backface-visibility: hidden;
          filter: brightness(0.92);
          transition:
            transform 5200ms cubic-bezier(0.12, 0.72, 0.18, 1),
            filter 5200ms ease,
            opacity 5200ms ease;
        }

        .door-right-open {
          transform: perspective(2200px) rotateY(122deg) translateX(2.5vw)
            translateZ(120px);
          transform-style: preserve-3d;
          backface-visibility: hidden;
          filter: brightness(0.92);
          transition:
            transform 5200ms cubic-bezier(0.12, 0.72, 0.18, 1),
            filter 5200ms ease,
            opacity 5200ms ease;
        }

        :global(.door-image-zoom) {
          transition: transform 5600ms cubic-bezier(0.12, 0.72, 0.18, 1);
        }

        :global(.flower-breathe) {
          animation: flowerBreathe 7s ease-in-out infinite;
        }

        :global(.seal-float) {
          animation: sealFloat 4s ease-in-out infinite;
        }

        @keyframes flowerBreathe {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.06) translateY(-6px);
          }
        }

        @keyframes sealFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
      `}</style>
    </div>
  )
}

function PeachDoor({
  side,
  isOpen,
}: {
  side: 'left' | 'right'
  isOpen: boolean
}) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#e9a996]">
      <Image
        src={doorImage}
        alt="Wedding door"
        fill
        priority
        sizes="50vw"
        className={`door-image-zoom object-cover ${
          side === 'right' ? 'scale-x-[-1]' : ''
        } ${isOpen ? 'scale-[1.08]' : 'scale-100'}`}
      />

      <div
        className={`absolute inset-y-0 w-24 transition-opacity duration-[4200ms] ${
          isOpen ? 'opacity-100' : 'opacity-60'
        } ${
          side === 'left'
            ? 'right-0 bg-gradient-to-l from-black/20 to-transparent'
            : 'left-0 bg-gradient-to-r from-black/20 to-transparent'
        }`}
      />
    </div>
  )
}
