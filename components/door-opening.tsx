'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import flowers from '@/public/flowers.png'

type DoorOpeningProps = {
  onClose: () => void
}

export function DoorOpening({ onClose }: DoorOpeningProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [hideIntro, setHideIntro] = useState(false)

  useEffect(() => {
    const timer = setTimeout(openDoor, 1600)
    return () => clearTimeout(timer)
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
          <Image
            src={flowers}
            alt="Floral frame"
            priority
            className="flower-breathe pointer-events-none absolute inset-0 z-0 h-full w-full scale-[1.18] object-contain opacity-95"
          />

          <div className="absolute inset-x-4 inset-y-4 z-[1] rounded-t-[12rem] rounded-b-[2.5rem] border border-white/70 bg-[#f8d8d3]/55 shadow-[0_30px_100px_rgba(139,77,70,.22)]" />

          <div className="relative z-10 m-4 flex h-[calc(100%-32px)] w-[calc(100%-32px)] flex-col items-center justify-center rounded-t-[12rem] rounded-b-[2.5rem] border border-white/30 bg-white/45 px-8 text-center shadow-[0_25px_70px_rgba(119,68,62,.10)] backdrop-blur-3xl">
            <p className="mb-8 text-[11px] uppercase tracking-[0.48em] text-[#bd7e77]">
              Wedding Invitation
            </p>

            <h1 className="font-serif text-[clamp(3rem,8vw,4.6rem)] font-light leading-[1.05] text-[#815a55]">
              Dnyanesh
              <span className="block py-3 text-[clamp(2rem,5vw,2.7rem)] italic text-[#bd8078]">
                &
              </span>
              Pratiksha
            </h1>

            <p className="mt-10 max-w-[330px] text-[15px] leading-8 text-[#936964]">
              With love, joy, and blessings, we invite you to celebrate the
              beginning of our forever.
            </p>

            <div className="mt-10 h-px w-44 bg-gradient-to-r from-transparent via-[#dfaaa3] to-transparent" />

            <p className="mt-8 font-serif text-3xl italic text-[#a66f68]">
              Save the Date
            </p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-20 perspective-[1800px]">
        <div
          className={`absolute left-0 top-0 h-full w-1/2 origin-left overflow-hidden transition-transform duration-[2200ms] ease-[cubic-bezier(.2,.9,.2,1)] ${
            isOpen ? 'door-left-open' : 'door-left-closed'
          }`}
        >
          <PeachDoor side="left" />
        </div>

        <div
          className={`absolute right-0 top-0 h-full w-1/2 origin-right overflow-hidden transition-transform duration-[2200ms] ease-[cubic-bezier(.2,.9,.2,1)] ${
            isOpen ? 'door-right-open' : 'door-right-closed'
          }`}
        >
          <PeachDoor side="right" />
        </div>

        <div
          className={`absolute left-1/2 top-0 z-30 h-full w-[90px] -translate-x-1/2 transition-opacity duration-700 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="mx-auto h-full w-[2px] bg-white/80 shadow-[0_0_16px_rgba(255,255,255,.8)]" />
        </div>

        <button
          onClick={openDoor}
          disabled={isOpen}
          aria-label="Open invitation"
          className={`absolute left-1/2 top-[52%] z-50 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-1000 ${
            isOpen
              ? 'scale-75 opacity-0 blur-sm'
              : 'scale-100 opacity-100 hover:scale-105 active:scale-95'
          }`}
        >
          <span className="absolute inset-0 rounded-full bg-[#c98d82] shadow-[0_14px_35px_rgba(151,83,73,.35),inset_8px_8px_18px_rgba(255,230,225,.45),inset_-8px_-10px_18px_rgba(126,66,57,.28)]" />
          <span className="absolute inset-3 rounded-full border border-[#9b655d]/35" />
          <span className="relative flex h-full items-center justify-center font-serif text-lg italic leading-5 text-[#835852]">
            Save
            <br />
            the date
          </span>
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

        @keyframes flowerBreathe {
          0%,
          100% {
            transform: scale(1.18);
          }
          50% {
            transform: scale(1.23) translateY(-8px);
          }
        }
      `}</style>
    </div>
  )
}

function PeachDoor({ side }: { side: 'left' | 'right' }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#f3c4bb]">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#fbe0db_0%,#efb7ad_45%,#f8d8d2_100%)]" />
      <div className="absolute inset-0 opacity-45 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.6),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(210,122,110,.22),transparent_32%)]" />

      <div
        className={`absolute top-0 h-full w-28 ${
          side === 'left'
            ? 'right-0 bg-gradient-to-l from-[#d7968b]/55 to-transparent'
            : 'left-0 bg-gradient-to-r from-[#d7968b]/55 to-transparent'
        }`}
      />
    </div>
  )
}
