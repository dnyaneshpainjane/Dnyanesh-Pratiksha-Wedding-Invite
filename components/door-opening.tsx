'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

type DoorOpeningProps = {
  onClose: () => void
}

export function DoorOpening({ onClose }: DoorOpeningProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showReveal, setShowReveal] = useState(false)
  const [hideIntro, setHideIntro] = useState(false)

  useEffect(() => {
    const timer = setTimeout(openDoor, 1800)
    return () => clearTimeout(timer)
  }, [])

  const openDoor = () => {
    if (isOpen) return
    setIsOpen(true)

    setTimeout(() => setShowReveal(true), 900)

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
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#f8ddd7]">
      {/* Revealed invitation */}
      <div
        className={`absolute inset-0 flex items-center justify-center overflow-hidden bg-[#fff7f6] transition-all duration-[1800ms] ease-out ${
          showReveal ? 'scale-100 opacity-100 blur-0' : 'scale-105 opacity-0 blur-sm'
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,#fff_0%,#fff4f2_42%,#f8d8d0_100%)]" />

        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#f5b5aa]/25 blur-3xl" />
        <div className="absolute -right-24 top-28 h-80 w-80 rounded-full bg-[#efc2aa]/30 blur-3xl" />
        <div className="absolute bottom-0 right-6 h-56 w-56 rounded-full bg-[#f3c4bc]/25 blur-3xl" />

        <div className="relative mx-6 flex min-h-[72vh] w-[86vw] max-w-[430px] flex-col items-center justify-center rounded-t-[12rem] rounded-b-[2.2rem] bg-[#fde5e2]/85 px-8 py-12 text-center shadow-[0_30px_90px_rgba(184,114,103,.22)] backdrop-blur">
          <FloralWreath />

          <p className="mb-4 text-[10px] uppercase tracking-[0.42em] text-[#b77a72]">
            Wedding Invitation
          </p>

          <h1 className="font-serif text-5xl font-light leading-tight text-[#8f5e58]">
            Dnyanesh
            <span className="block py-2 text-3xl italic text-[#c58d82]">
              &
            </span>
            Pratiksha
          </h1>

          <p className="mt-7 max-w-xs text-sm leading-7 text-[#9c716b]">
            With love, joy, and blessings, we invite you to celebrate the
            beginning of our forever.
          </p>

          <div className="mt-8 h-px w-36 bg-gradient-to-r from-transparent via-[#d5a098] to-transparent" />

          <p className="mt-5 font-serif text-xl italic text-[#a8736c]">
            Save the Date
          </p>
        </div>
      </div>

      {/* Envelope / door */}
      <div className="absolute inset-0 z-20 perspective-[1800px]">
        <div
          className={`absolute left-0 top-0 h-full w-1/2 origin-left overflow-hidden transition-transform duration-[1900ms] ease-[cubic-bezier(.2,.9,.2,1)] ${
            isOpen ? 'door-left-open' : 'door-left-closed'
          }`}
        >
          <PeachDoor side="left" />
        </div>

        <div
          className={`absolute right-0 top-0 h-full w-1/2 origin-right overflow-hidden transition-transform duration-[1900ms] ease-[cubic-bezier(.2,.9,.2,1)] ${
            isOpen ? 'door-right-open' : 'door-right-closed'
          }`}
        >
          <PeachDoor side="right" />
        </div>

        {/* Rounded center line like video */}
        <div
          className={`absolute left-1/2 top-0 z-30 h-full w-[92px] -translate-x-1/2 transition-opacity duration-700 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="mx-auto h-full w-[2px] bg-white/70 shadow-[0_0_12px_rgba(255,255,255,.55)]" />
          <div className="absolute left-1/2 top-0 h-[120px] w-[92px] -translate-x-1/2 rounded-t-full border-l-2 border-t-2 border-white/70" />
          <div className="absolute bottom-0 left-1/2 h-[120px] w-[92px] -translate-x-1/2 rounded-b-full border-b-2 border-l-2 border-white/70" />
        </div>

        {/* Wax seal */}
        <button
          onClick={openDoor}
          disabled={isOpen}
          aria-label="Open invitation"
          className={`absolute left-1/2 top-[52%] z-50 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-1000 ${
            isOpen ? 'scale-75 opacity-0 blur-sm' : 'scale-100 opacity-100 hover:scale-105'
          }`}
        >
          <span className="absolute inset-0 rounded-full bg-[#c98f82] shadow-[0_12px_30px_rgba(156,91,78,.35),inset_8px_8px_18px_rgba(255,230,225,.45),inset_-8px_-10px_18px_rgba(126,66,57,.28)]" />
          <span className="absolute inset-3 rounded-full border border-[#9b655d]/35" />
          <span className="relative flex h-full items-center justify-center font-serif text-lg italic leading-5 text-[#8a5f59]">
            Save
            <br />
            the date
          </span>
        </button>

        <p
          className={`absolute bottom-10 left-1/2 z-50 -translate-x-1/2 text-[10px] uppercase tracking-[0.38em] text-[#a8766e] transition-all duration-700 ${
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
          transform: perspective(1800px) rotateY(-104deg);
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }

        .door-right-open {
          transform: perspective(1800px) rotateY(104deg);
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  )
}

function PeachDoor({ side }: { side: 'left' | 'right' }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#f3c4bb]">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#f8d6d0_0%,#efb8ad_45%,#f7d8d1_100%)]" />
      <div className="absolute inset-0 opacity-45 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.5),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(210,122,110,.18),transparent_32%)]" />
      <div className="absolute inset-0 opacity-[0.16] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,.5)_0_1px,transparent_1px_8px),repeating-linear-gradient(0deg,rgba(145,89,80,.22)_0_1px,transparent_1px_10px)]" />

      <div
        className={`absolute top-0 h-full w-20 ${
          side === 'left'
            ? 'right-0 bg-gradient-to-l from-[#d7968b]/45 to-transparent'
            : 'left-0 bg-gradient-to-r from-[#d7968b]/45 to-transparent'
        }`}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.25),transparent_55%)]" />
    </div>
  )
}

function FloralWreath() {
  return (
    <svg
      viewBox="0 0 300 170"
      className="pointer-events-none absolute bottom-[18%] left-1/2 h-40 w-[330px] -translate-x-1/2 opacity-75"
    >
      <g fill="none" stroke="#c58d82" strokeWidth="2" strokeLinecap="round">
        <path d="M35 115 C85 70 130 82 150 120 C172 80 220 70 270 115" />
        <path d="M45 130 C92 104 124 108 150 132 C178 108 214 104 260 130" />
      </g>

      <g fill="#d9aaa1" opacity=".8">
        <ellipse cx="78" cy="100" rx="9" ry="18" transform="rotate(-42 78 100)" />
        <ellipse cx="105" cy="88" rx="8" ry="16" transform="rotate(-25 105 88)" />
        <ellipse cx="205" cy="88" rx="8" ry="16" transform="rotate(25 205 88)" />
        <ellipse cx="232" cy="100" rx="9" ry="18" transform="rotate(42 232 100)" />
        <circle cx="150" cy="118" r="8" />
        <circle cx="137" cy="112" r="5" />
        <circle cx="163" cy="112" r="5" />
      </g>

      <g fill="#5f7f72" opacity=".75">
        <ellipse cx="122" cy="104" rx="8" ry="18" transform="rotate(-55 122 104)" />
        <ellipse cx="178" cy="104" rx="8" ry="18" transform="rotate(55 178 104)" />
      </g>
    </svg>
  )
}
