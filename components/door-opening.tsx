'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

export function DoorOpening({
  onClose,
}: {
  onClose: () => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [showReveal, setShowReveal] = useState(false)
  const [hideIntro, setHideIntro] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      openDoor()
    }, 5500)

    return () => clearTimeout(timer)
  }, [])

  const openDoor = () => {
    if (isOpen) return

    setIsOpen(true)

    setTimeout(() => {
      setShowReveal(true)
    }, 2100)

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
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#d9bf72]">
      {/* Revealed invitation behind the door */}
      <div
        className={`absolute inset-0 z-0 flex items-center justify-center overflow-hidden bg-[#fbf4e6] transition-all duration-[2200ms] ease-[cubic-bezier(.19,1,.22,1)] ${
          showReveal ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.95)_0%,rgba(251,244,230,.96)_38%,rgba(232,207,148,.78)_100%)]" />

        <div className="absolute inset-0 opacity-[0.09] bg-[radial-gradient(circle,#8c6a2e_1px,transparent_1.5px)] bg-[size:20px_20px]" />

        {/* Floral reveal corners */}
        <div className="absolute -left-20 -top-16 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_42%_42%,rgba(190,121,78,.5)_0%,transparent_17%),radial-gradient(circle_at_60%_58%,rgba(225,185,123,.55)_0%,transparent_16%),radial-gradient(circle_at_36%_66%,rgba(113,124,70,.35)_0%,transparent_14%)] blur-[0.3px]" />
        <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_44%_40%,rgba(190,121,78,.42)_0%,transparent_16%),radial-gradient(circle_at_62%_58%,rgba(225,185,123,.5)_0%,transparent_15%),radial-gradient(circle_at_32%_68%,rgba(113,124,70,.32)_0%,transparent_13%)] blur-[0.3px]" />

        <div className="relative mx-5 w-full max-w-4xl rounded-[2.2rem] border border-[#d8bd78]/60 bg-white/55 px-6 py-12 text-center shadow-[0_28px_90px_rgba(95,69,28,.22)] backdrop-blur-md sm:px-10 md:px-16 md:py-16">
          <div className="absolute inset-3 rounded-[1.7rem] border border-[#d2af61]/45" />

          <p className="relative mb-5 text-xs uppercase tracking-[0.46em] text-[#9b742c]">
            Wedding Invitation
          </p>

          <div className="relative mx-auto mb-8 flex max-w-xl items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b88a36] to-[#b88a36]" />
            <div className="h-3 w-3 rotate-45 border border-[#b88a36] bg-[#f8e9c1]" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#b88a36] to-[#b88a36]" />
          </div>

          <h1 className="relative font-serif text-5xl font-light leading-tight text-[#4a3517] sm:text-7xl md:text-8xl">
            Dnyanesh
            <span className="block py-2 text-4xl italic text-[#b88a36] md:text-5xl">
              &
            </span>
            Pratiksha
          </h1>

          <p className="relative mx-auto mt-8 max-w-2xl text-base leading-8 text-[#695536] md:text-lg">
            With love, joy, and blessings from our families, we invite you to
            celebrate the beginning of our forever.
          </p>

          <div className="relative mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#dec489]/70 bg-[#fff9ea]/70 px-5 py-4 shadow-sm">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#9b742c]">
                Celebrate
              </p>
              <p className="mt-1 font-serif text-2xl text-[#4a3517]">
                Love
              </p>
            </div>

            <div className="rounded-2xl border border-[#dec489]/70 bg-[#fff9ea]/70 px-5 py-4 shadow-sm">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#9b742c]">
                Together
              </p>
              <p className="mt-1 font-serif text-2xl text-[#4a3517]">
                Forever
              </p>
            </div>

            <div className="rounded-2xl border border-[#dec489]/70 bg-[#fff9ea]/70 px-5 py-4 shadow-sm">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#9b742c]">
                With
              </p>
              <p className="mt-1 font-serif text-2xl text-[#4a3517]">
                Blessings
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full screen gold door */}
      <div className="absolute inset-0 z-20 perspective-[2200px]">
        {/* Left panel */}
        <div
          className={`absolute left-0 top-0 h-full w-1/2 origin-left overflow-hidden border-r border-[#8f6824]/45 transition-transform duration-[3200ms] ease-[cubic-bezier(.19,1,.22,1)] ${
            isOpen ? 'door-left-open' : 'door-left-closed'
          }`}
        >
          <GoldDoorPanel side="left" />
        </div>

        {/* Right panel */}
        <div
          className={`absolute right-0 top-0 h-full w-1/2 origin-right overflow-hidden border-l border-[#8f6824]/45 transition-transform duration-[3200ms] ease-[cubic-bezier(.19,1,.22,1)] ${
            isOpen ? 'door-right-open' : 'door-right-closed'
          }`}
        >
          <GoldDoorPanel side="right" />
        </div>

        {/* Center vertical split shadow */}
        <div
          className={`absolute left-1/2 top-0 z-30 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#7b571e]/55 to-transparent transition-opacity duration-[1200ms] ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Right name plate */}
        <div
          className={`absolute left-[57%] top-1/2 z-40 -translate-y-1/2 transition-all duration-[1800ms] ease-[cubic-bezier(.19,1,.22,1)] ${
            isOpen
              ? 'translate-x-16 scale-75 opacity-0'
              : 'translate-x-0 scale-100 opacity-100'
          }`}
        >
          <div className="relative hidden sm:block">
            <div className="absolute left-1/2 top-1/2 h-40 w-72 -translate-x-1/2 -translate-y-1/2 opacity-55">
              <Ornament />
            </div>

            <div className="relative border border-[#f7d980] bg-[#fff4bd]/70 px-8 py-3 shadow-[0_8px_20px_rgba(87,59,18,.22),inset_0_1px_2px_rgba(255,255,255,.7)]">
              <p className="font-serif text-lg uppercase tracking-[0.16em] text-[#9a6a17]">
                D&P
              </p>
            </div>
          </div>
        </div>

        {/* Left round emblem */}
        <button
          onClick={openDoor}
          disabled={isOpen}
          aria-label="Open wedding invitation"
          className={`absolute left-[31%] top-1/2 z-50 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-all duration-[1600ms] ease-[cubic-bezier(.19,1,.22,1)] sm:h-48 sm:w-48 ${
            isOpen
              ? '-translate-x-20 scale-60 rotate-12 opacity-0'
              : 'scale-100 rotate-0 opacity-100 hover:scale-[1.04] active:scale-95'
          }`}
        >
          <span className="absolute inset-0 rounded-full border border-[#6e501b]/50 bg-[radial-gradient(circle_at_36%_28%,#ffeaa3_0%,#d9ae4f_34%,#9a6d21_68%,#513612_100%)] shadow-[0_22px_42px_rgba(66,45,13,.42),inset_4px_6px_12px_rgba(255,244,181,.52),inset_-8px_-12px_18px_rgba(65,39,8,.45)]" />

          <span className="absolute inset-[10px] rounded-full border border-[#ffe9a6]/60" />
          <span className="absolute inset-[20px] rounded-full border border-[#7b5619]/45 bg-[radial-gradient(circle,#c79837_0%,#83591a_100%)] shadow-[inset_0_4px_10px_rgba(48,29,8,.55)]" />
          <span className="absolute inset-[34px] rounded-full border border-[#f7df93]/50" />

          <span className="relative font-serif text-4xl font-light text-[#ffeab0] drop-shadow-[0_2px_1px_rgba(45,28,7,.8)] sm:text-5xl">
            D&P
          </span>
        </button>

        <p
          className={`absolute bottom-10 left-1/2 z-50 -translate-x-1/2 text-center text-[11px] uppercase tracking-[0.42em] text-[#76531a] transition-all duration-1000 ${
            isOpen ? 'translate-y-5 opacity-0' : 'translate-y-0 opacity-80'
          }`}
        >
          Tap emblem to open
        </p>

        <button
          onClick={closeIntro}
          className="absolute right-5 top-5 z-[80] rounded-full border border-[#f8dea0]/70 bg-[#fff3c8]/45 p-2 text-[#654718] shadow-sm backdrop-blur-md transition hover:bg-[#fff3c8]/75"
          aria-label="Close invitation"
        >
          <X size={22} />
        </button>
      </div>

      <style jsx>{`
        .door-left-closed {
          transform: perspective(2200px) rotateY(0deg);
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }

        .door-right-closed {
          transform: perspective(2200px) rotateY(0deg);
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }

        .door-left-open {
          transform: perspective(2200px) rotateY(-108deg);
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }

        .door-right-open {
          transform: perspective(2200px) rotateY(108deg);
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  )
}

function GoldDoorPanel({ side }: { side: 'left' | 'right' }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#c59a34]">
      {/* Gold base */}
      <div className="absolute inset-0 bg-[linear-gradient(115deg,#8d641b_0%,#d9b452_22%,#f4df91_45%,#c39532_70%,#8a5d17_100%)]" />

      {/* Embossed quilt pattern */}
      <div className="absolute inset-0 opacity-[0.34] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,.75)_0%,rgba(255,255,255,.2)_28%,transparent_30%),radial-gradient(ellipse_at_center,rgba(86,52,8,.5)_0%,transparent_32%)] bg-[size:32px_24px] bg-[position:0_0,16px_12px]" />

      {/* Fine metallic noise-like lines */}
      <div className="absolute inset-0 opacity-[0.18] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,.55)_0_1px,transparent_1px_7px),repeating-linear-gradient(0deg,rgba(82,48,8,.45)_0_1px,transparent_1px_9px)]" />

      {/* Inner border */}
      <div
        className={`absolute inset-y-7 ${
          side === 'left' ? 'left-6 right-0 rounded-l-[2rem]' : 'left-0 right-6 rounded-r-[2rem]'
        } border-y border-[#ffe7a6]/55`}
      />

      {/* Embossed floral artwork */}
      {side === 'left' ? (
        <>
          <div className="absolute left-5 top-8 h-56 w-44 opacity-55">
            <GoldFlower />
          </div>

          <div className="absolute bottom-[-40px] left-[-38px] h-72 w-72 rounded-full bg-[radial-gradient(circle_at_44%_42%,rgba(112,76,20,.35)_0%,transparent_16%),radial-gradient(circle_at_62%_58%,rgba(255,231,151,.35)_0%,transparent_15%),radial-gradient(circle_at_36%_64%,rgba(92,112,58,.18)_0%,transparent_13%)]" />
        </>
      ) : (
        <>
          <div className="absolute bottom-12 right-4 h-56 w-44 rotate-180 opacity-55">
            <GoldFlower />
          </div>

          <div className="absolute right-[-35px] top-[-30px] h-72 w-72 rounded-full bg-[radial-gradient(circle_at_44%_42%,rgba(112,76,20,.32)_0%,transparent_16%),radial-gradient(circle_at_62%_58%,rgba(255,231,151,.32)_0%,transparent_15%),radial-gradient(circle_at_36%_64%,rgba(92,112,58,.16)_0%,transparent_13%)]" />
        </>
      )}

      {/* Center glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,239,172,.42)_0%,transparent_58%)]" />

      {/* Edge depth */}
      <div
        className={`absolute top-0 h-full w-10 ${
          side === 'left'
            ? 'right-0 bg-gradient-to-l from-[#6f4910]/45 to-transparent'
            : 'left-0 bg-gradient-to-r from-[#6f4910]/45 to-transparent'
        }`}
      />
    </div>
  )
}

function GoldFlower() {
  return (
    <svg viewBox="0 0 180 260" className="h-full w-full">
      <g
        fill="none"
        stroke="#725118"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      >
        <path d="M70 235 C72 180 84 130 116 70" />
        <path d="M86 164 C55 145 38 124 26 96" />
        <path d="M96 138 C124 120 139 94 150 58" />
        <path d="M73 206 C48 196 30 178 18 150" />
        <path d="M107 96 C86 73 79 52 83 24" />

        <path d="M25 94 C44 82 62 85 76 105 C54 113 38 110 25 94Z" />
        <path d="M146 58 C127 49 112 54 100 74 C119 83 135 78 146 58Z" />
        <path d="M18 150 C39 140 56 147 66 169 C45 176 28 170 18 150Z" />
        <path d="M83 24 C103 39 107 58 93 78 C76 62 72 43 83 24Z" />

        <path d="M115 72 C136 64 157 74 164 96 C142 101 124 94 115 72Z" />
      </g>

      <g fill="#f7df92" opacity="0.38">
        <circle cx="26" cy="96" r="8" />
        <circle cx="146" cy="58" r="7" />
        <circle cx="18" cy="150" r="7" />
        <circle cx="83" cy="24" r="6" />
      </g>
    </svg>
  )
}

function Ornament() {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full">
      <g
        fill="none"
        stroke="#8a641e"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.62"
      >
        <path d="M160 18 C150 42 133 48 112 44" />
        <path d="M160 18 C170 42 187 48 208 44" />
        <path d="M112 44 C84 48 68 66 70 92" />
        <path d="M208 44 C236 48 252 66 250 92" />
        <path d="M70 92 C90 72 112 74 128 96" />
        <path d="M250 92 C230 72 208 74 192 96" />
        <path d="M128 96 C142 118 178 118 192 96" />
        <path d="M96 132 C124 146 196 146 224 132" />
        <path d="M130 144 C140 160 180 160 190 144" />
      </g>
    </svg>
  )
}
