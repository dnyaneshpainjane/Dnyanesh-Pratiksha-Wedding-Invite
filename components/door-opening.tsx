'use client'

import { useEffect, useState } from 'react'
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

  useEffect(() => {
    const timer = setTimeout(openDoor, 1600)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const openDoor = () => {
    if (isOpen) return

    setIsOpen(true)

    setTimeout(() => {
      setHideIntro(true)
      onClose()
    }, 9000)
  }

  const closeIntro = () => {
    setHideIntro(true)
    onClose()
  }

  if (hideIntro) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#f1c9c2]">
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden bg-[#f8d5cf]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#fff7f5_0%,#f8ddd8_48%,#efc1b9_100%)]" />

        <div
          className={`relative flex h-[92vh] w-[min(92vw,520px)] items-center justify-center transition-all duration-[1400ms] ${
            isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-70'
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

      <div className="absolute inset-0 z-20 perspective-[1800px]">
        <div
          className={`absolute left-0 top-0 h-full w-[50.5%] origin-left overflow-hidden transition-transform duration-[2200ms] ease-[cubic-bezier(.2,.9,.2,1)] ${
            isOpen ? 'door-left-open' : 'door-left-closed'
          }`}
        >
          <PeachDoor side="left" />
        </div>

        <div
          className={`absolute right-0 top-0 h-full w-[50.5%] origin-right overflow-hidden transition-transform duration-[2200ms] ease-[cubic-bezier(.2,.9,.2,1)] ${
            isOpen ? 'door-right-open' : 'door-right-closed'
          }`}
        >
          <PeachDoor side="right" />
        </div>

        <button
          onClick={openDoor}
          disabled={isOpen}
          aria-label="Open invitation"
          className={`absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
            isOpen
              ? 'scale-50 opacity-0 blur-sm'
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
          className={`absolute bottom-10 left-1/2 z-50 -translate-x-1/2 text-[10px] uppercase tracking-[0.38em] text-[#9f6c64] transition-all duration-700 ${
            isOpen ? 'translate-y-4 opacity-0' : 'opacity-80'
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
        .perspective-\\[1800px\\] {
          perspective: 1800px;
        }

        .door-left-closed,
        .door-right-closed {
          transform: perspective(1800px) rotateY(0deg);
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }

        .door-left-open {
          transform: perspective(1800px) rotateY(-108deg);
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }

        .door-right-open {
          transform: perspective(1800px) rotateY(108deg);
          transform-style: preserve-3d;
          backface-visibility: hidden;
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

function PeachDoor({ side }: { side: 'left' | 'right' }) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Image
        src={doorImage}
        alt="Wedding door"
        fill
        priority
        sizes="50vw"
        className={`object-cover ${
          side === 'left' ? 'object-left' : 'object-right'
        }`}
      />

      <div
        className={`absolute inset-y-0 w-16 ${
          side === 'left'
            ? 'right-0 bg-gradient-to-l from-black/10 to-transparent'
            : 'left-0 bg-gradient-to-r from-black/10 to-transparent'
        }`}
      />
    </div>
  )
}
