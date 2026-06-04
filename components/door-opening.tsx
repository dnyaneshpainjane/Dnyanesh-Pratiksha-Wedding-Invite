'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

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
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#f4c9c2]">
      {/* Background content visible while doors open */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden bg-[#fff7f6]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,#fff_0%,#fff4f2_42%,#f5cbc3_100%)]" />
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#efaaa0]/25 blur-3xl" />
        <div className="absolute -right-24 top-28 h-80 w-80 rounded-full bg-[#eebda9]/30 blur-3xl" />

        <div
          className={`relative mx-6 flex min-h-[72vh] w-[86vw] max-w-[430px] flex-col items-center justify-center rounded-t-[12rem] rounded-b-[2.2rem] bg-[#fde5e2]/90 px-8 py-12 text-center shadow-[0_30px_90px_rgba(184,114,103,.28)] transition-all duration-[1200ms] ${
            isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-80'
          }`}
        >
          <FloralWreath />

          <p className="relative z-10 mb-4 text-[10px] uppercase tracking-[0.42em] text-[#b77a72]">
            Wedding Invitation
          </p>

          <h1 className="relative z-10 font-serif text-5xl font-light leading-tight text-[#8f5e58]">
            Dnyanesh
            <span className="block py-2 text-3xl italic text-[#c58d82]">
              &
            </span>
            Pratiksha
          </h1>

          <p className="relative z-10 mt-7 max-w-xs text-sm leading-7 text-[#9c716b]">
            With love, joy, and blessings, we invite you to celebrate the
            beginning of our forever.
          </p>

          <div className="relative z-10 mt-8 h-px w-36 bg-gradient-to-r from-transparent via-[#d5a098] to-transparent" />

          <p className="relative z-10 mt-5 font-serif text-xl italic text-[#a8736c]">
            Save the Date
          </p>
        </div>
      </div>

      {/* Door / envelope layer */}
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

        {/* Center curved seam */}
        <div
          className={`absolute left-1/2 top-0 z-30 h-full w-[94px] -translate-x-1/2 transition-opacity duration-700 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="mx-auto h-full w-[2px] bg-white/80 shadow-[0_0_14px_rgba(255,255,255,.65)]" />
          <div className="absolute left-1/2 top-0 h-[125px] w-[94px] -translate-x-1/2 rounded-t-full border-l-2 border-t-2 border-white/75" />
          <div className="absolute bottom-0 left-1/2 h-[125px] w-[94px] -translate-x-1/2 rounded-b-full border-b-2 border-l-2 border-white/75" />
        </div>

        {/* Wax seal */}
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
          transform: perspective(1800px) rotateY(-105deg);
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }

        .door-right-open {
          transform: perspective(1800px) rotateY(105deg);
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
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#f9d8d2_0%,#efb8ad_45%,#f7d6cf_100%)]" />

      <div className="absolute inset-0 opacity-45 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.55),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(210,122,110,.2),transparent_32%)]" />

      <div className="absolute inset-0 opacity-[0.14] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,.5)_0_1px,transparent_1px_8px),repeating-linear-gradient(0deg,rgba(145,89,80,.22)_0_1px,transparent_1px_10px)]" />

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
            ? 'left-0 bg-gradient-to-r from-white/20 to-transparent'
            : 'right-0 bg-gradient-to-l from-white/20 to-transparent'
        }`}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.28),transparent_55%)]" />
    </div>
  )
}

function FloralWreath() {
  return (
    <svg
      viewBox="0 0 360 240"
      className="pointer-events-none absolute bottom-20 left-1/2 z-0 h-64 w-[390px] -translate-x-1/2 opacity-100"
    >
      <g fill="none" stroke="#8f6f5d" strokeWidth="4" strokeLinecap="round">
        <path d="M35 155 C95 80 145 95 180 165 C215 95 265 80 325 155" />
        <path d="M55 180 C105 135 145 140 180 178 C215 140 255 135 305 180" />
      </g>

      <g fill="#cf8f87">
        <ellipse
          cx="82"
          cy="138"
          rx="15"
          ry="29"
          transform="rotate(-42 82 138)"
        />
        <ellipse
          cx="118"
          cy="105"
          rx="14"
          ry="27"
          transform="rotate(-25 118 105)"
        />
        <ellipse
          cx="242"
          cy="105"
          rx="14"
          ry="27"
          transform="rotate(25 242 105)"
        />
        <ellipse
          cx="278"
          cy="138"
          rx="15"
          ry="29"
          transform="rotate(42 278 138)"
        />

        <circle cx="180" cy="150" r="18" />
        <circle cx="158" cy="140" r="12" />
        <circle cx="202" cy="140" r="12" />
        <circle cx="180" cy="125" r="10" />
      </g>

      <g fill="#6e8c73">
        <ellipse
          cx="135"
          cy="145"
          rx="12"
          ry="30"
          transform="rotate(-58 135 145)"
        />
        <ellipse
          cx="225"
          cy="145"
          rx="12"
          ry="30"
          transform="rotate(58 225 145)"
        />
        <ellipse
          cx="95"
          cy="170"
          rx="10"
          ry="26"
          transform="rotate(-62 95 170)"
        />
        <ellipse
          cx="265"
          cy="170"
          rx="10"
          ry="26"
          transform="rotate(62 265 170)"
        />
      </g>

      <g fill="#b66f68">
        <circle cx="70" cy="160" r="7" />
        <circle cx="110" cy="128" r="6" />
        <circle cx="250" cy="128" r="6" />
        <circle cx="290" cy="160" r="7" />
      </g>
    </svg>
  )
}
