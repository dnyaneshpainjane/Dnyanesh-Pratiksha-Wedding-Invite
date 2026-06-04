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
    const timer = setTimeout(openDoor, 1800)
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
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#f6cfc8]">
      {/* Invitation content */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden bg-[#fff8f7]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,#ffffff_0%,#fff1ef_45%,#f2bdb4_100%)]" />

        <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-[#ecaaa0]/30 blur-3xl" />
        <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-[#f4b9ad]/35 blur-3xl" />

        <div
          className={`relative mx-5 flex min-h-[76vh] w-[88vw] max-w-[450px] flex-col items-center justify-center overflow-hidden rounded-t-[13rem] rounded-b-[2.5rem] border border-white/70 bg-[#fde7e4]/85 px-8 py-12 text-center shadow-[0_35px_100px_rgba(166,91,82,.28)] transition-all duration-[1400ms] ${
            isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-80'
          }`}
        >
          <Image
            src={flowers}
            alt="Floral decoration"
            priority
            className={`flower-float pointer-events-none absolute inset-0 z-0 h-full w-full object-contain opacity-90 transition-all duration-[1800ms] ${
              isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
            }`}
          />

          <div className="relative z-10 rounded-[2rem] bg-[#fff8f6]/55 px-7 py-9 shadow-[0_15px_45px_rgba(160,94,84,.12)] backdrop-blur-sm">
            <p className="mb-4 text-[10px] uppercase tracking-[0.42em] text-[#b47770]">
              Wedding Invitation
            </p>

            <h1 className="font-serif text-5xl font-light leading-tight text-[#875b55]">
              Dnyanesh
              <span className="block py-2 text-3xl italic text-[#c4877d]">
                &
              </span>
              Pratiksha
            </h1>

            <p className="mt-7 max-w-xs text-sm leading-7 text-[#936963]">
              With love, joy, and blessings, we invite you to celebrate the
              beginning of our forever.
            </p>

            <div className="mx-auto mt-8 h-px w-36 bg-gradient-to-r from-transparent via-[#d59b93] to-transparent" />

            <p className="mt-5 font-serif text-xl italic text-[#a86f68]">
              Save the Date
            </p>
          </div>
        </div>
      </div>

      {/* Door layer */}
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

        {/* Center seam */}
        <div
          className={`absolute left-1/2 top-0 z-30 h-full w-[96px] -translate-x-1/2 transition-opacity duration-700 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="mx-auto h-full w-[2px] bg-white/80 shadow-[0_0_16px_rgba(255,255,255,.8)]" />
          <div className="absolute left-1/2 top-0 h-[135px] w-[96px] -translate-x-1/2 rounded-t-full border-l-2 border-t-2 border-white/75" />
          <div className="absolute bottom-0 left-1/2 h-[135px] w-[96px] -translate-x-1/2 rounded-b-full border-b-2 border-l-2 border-white/75" />
        </div>

        {/* Seal */}
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

        :global(.flower-float) {
          animation: flowerFloat 5.5s ease-in-out infinite;
        }

        @keyframes flowerFloat {
          0%,
          100% {
            transform: scale(1) translateY(0);
          }
          50% {
            transform: scale(1.035) translateY(-10px);
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

      <div className="absolute inset-0 opacity-[0.13] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,.5)_0_1px,transparent_1px_8px),repeating-linear-gradient(0deg,rgba(145,89,80,.22)_0_1px,transparent_1px_10px)]" />

      <div
        className={`absolute top-0 h-full w-24 ${
          side === 'left'
            ? 'right-0 bg-gradient-to-l from-[#d7968b]/50 to-transparent'
            : 'left-0 bg-gradient-to-r from-[#d7968b]/50 to-transparent'
        }`}
      />

      <div
        className={`absolute top-0 h-full w-20 ${
          side === 'left'
            ? 'left-0 bg-gradient-to-r from-white/25 to-transparent'
            : 'right-0 bg-gradient-to-l from-white/25 to-transparent'
        }`}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.3),transparent_55%)]" />
    </div>
  )
}
