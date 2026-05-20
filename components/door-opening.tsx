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
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#d5ad49]">
      {/* Revealed small wedding card */}
      <div
        className={`absolute inset-0 z-0 flex items-center justify-center overflow-hidden bg-[#f6e7bd] transition-all duration-[2200ms] ease-[cubic-bezier(.19,1,.22,1)] ${
          showReveal ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,248,224,.96)_0%,rgba(239,209,133,.82)_52%,rgba(165,118,35,.72)_100%)]" />

        <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle,#7f5719_1px,transparent_1.5px)] bg-[size:22px_22px]" />

        {/* Soft gold floral corners behind card */}
        <div className="absolute left-4 top-4 h-52 w-52 opacity-45 sm:h-72 sm:w-72">
          <GoldFlower />
        </div>

        <div className="absolute bottom-4 right-4 h-52 w-52 rotate-180 opacity-45 sm:h-72 sm:w-72">
          <GoldFlower />
        </div>

        <div className="relative mx-5 w-[88vw] max-w-[520px] rounded-[1.8rem] border border-[#d6ad55]/70 bg-[#fff7dc]/82 px-6 py-9 text-center shadow-[0_28px_80px_rgba(88,59,15,.28)] backdrop-blur-md sm:px-10 sm:py-11">
          <div className="absolute inset-3 rounded-[1.35rem] border border-[#d0a349]/45" />

          <div className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#be8f2d]/60 bg-[radial-gradient(circle_at_34%_24%,#fff1b8,#c99634_55%,#704815)] shadow-[inset_3px_4px_8px_rgba(255,240,179,.48),inset_-5px_-6px_10px_rgba(72,42,9,.38)]">
            <span className="font-serif text-xl text-[#fff1bd] drop-shadow">
              D&P
            </span>
          </div>

          <p className="relative mb-4 text-[10px] uppercase tracking-[0.38em] text-[#9b7024]">
            Wedding Invitation
          </p>

          <div className="relative mx-auto mb-6 flex max-w-xs items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b3832c] to-[#b3832c]" />
            <div className="h-2 w-2 rotate-45 bg-[#b3832c]" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#b3832c] to-[#b3832c]" />
          </div>

          <h1 className="relative font-serif text-4xl font-light leading-tight text-[#4b3314] sm:text-5xl">
            Dnyanesh
            <span className="block py-1 text-3xl italic text-[#b3832c]">
              &
            </span>
            Pratiksha
          </h1>

          <p className="relative mx-auto mt-6 max-w-sm text-sm leading-7 text-[#6d562d]">
            With love, joy, and blessings, we invite you to celebrate the
            beginning of our forever.
          </p>

          <div className="relative mx-auto mt-7 grid max-w-sm grid-cols-3 gap-2">
            <div className="rounded-xl border border-[#dec17a]/70 bg-[#fff9e8]/70 px-3 py-3">
              <p className="text-[9px] uppercase tracking-[0.2em] text-[#9b7024]">
                Love
              </p>
            </div>

            <div className="rounded-xl border border-[#dec17a]/70 bg-[#fff9e8]/70 px-3 py-3">
              <p className="text-[9px] uppercase tracking-[0.2em] text-[#9b7024]">
                Forever
              </p>
            </div>

            <div className="rounded-xl border border-[#dec17a]/70 bg-[#fff9e8]/70 px-3 py-3">
              <p className="text-[9px] uppercase tracking-[0.2em] text-[#9b7024]">
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

        {/* Center split */}
        <div
          className={`absolute left-1/2 top-0 z-30 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#6d4913]/60 to-transparent transition-opacity duration-[1200ms] ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Center stamp only */}
        <button
          onClick={openDoor}
          disabled={isOpen}
          aria-label="Open wedding invitation"
          className={`absolute left-1/2 top-1/2 z-50 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-all duration-[1600ms] ease-[cubic-bezier(.19,1,.22,1)] sm:h-52 sm:w-52 ${
            isOpen
              ? 'scale-50 rotate-12 opacity-0'
              : 'scale-100 rotate-0 opacity-100 hover:scale-[1.04] active:scale-95'
          }`}
        >
          <span className="absolute inset-0 rounded-full border border-[#6e501b]/50 bg-[radial-gradient(circle_at_36%_28%,#ffeaa3_0%,#d9ae4f_34%,#9a6d21_68%,#513612_100%)] shadow-[0_24px_50px_rgba(66,45,13,.46),inset_5px_7px_14px_rgba(255,244,181,.55),inset_-9px_-13px_20px_rgba(65,39,8,.5)]" />

          <span className="absolute inset-[8px] rounded-full border border-[#fff0b0]/70" />
          <span className="absolute inset-[18px] rounded-full border border-[#735016]/50 bg-[radial-gradient(circle_at_35%_25%,#e4bd62,#90621e_58%,#4d310d_100%)] shadow-[inset_0_5px_12px_rgba(46,28,6,.58)]" />
          <span className="absolute inset-[32px] rounded-full border border-[#f9df90]/55" />

          <span className="absolute left-9 top-7 h-9 w-16 -rotate-12 rounded-full bg-white/20 blur-md" />

          <span className="relative text-center font-serif text-[#ffeab0] drop-shadow-[0_2px_1px_rgba(45,28,7,.8)]">
            <span className="block text-[11px] uppercase tracking-[0.28em]">
              Dnyanesh
            </span>
            <span className="my-1 block text-2xl">&</span>
            <span className="block text-[11px] uppercase tracking-[0.28em]">
              Pratiksha
            </span>
          </span>
        </button>

        <p
          className={`absolute bottom-10 left-1/2 z-50 -translate-x-1/2 text-center text-[11px] uppercase tracking-[0.42em] text-[#76531a] transition-all duration-1000 ${
            isOpen ? 'translate-y-5 opacity-0' : 'translate-y-0 opacity-80'
          }`}
        >
          Tap stamp to open
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
    <div className="relative h-full w-full overflow-hidden bg-[#c69a35]">
      {/* Gold metallic base */}
      <div className="absolute inset-0 bg-[linear-gradient(115deg,#8d641b_0%,#d8af4b_22%,#f5dd87_46%,#c2932e_72%,#805613_100%)]" />

      {/* Embossed texture */}
      <div className="absolute inset-0 opacity-[0.34] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,.7)_0%,rgba(255,255,255,.22)_28%,transparent_30%),radial-gradient(ellipse_at_center,rgba(86,52,8,.48)_0%,transparent_32%)] bg-[size:34px_26px] bg-[position:0_0,17px_13px]" />

      {/* Fine gold grain */}
      <div className="absolute inset-0 opacity-[0.16] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,.55)_0_1px,transparent_1px_8px),repeating-linear-gradient(0deg,rgba(82,48,8,.45)_0_1px,transparent_1px_10px)]" />

      {/* Elegant inner border */}
      <div
        className={`absolute inset-y-7 ${
          side === 'left'
            ? 'left-6 right-0 rounded-l-[2rem]'
            : 'left-0 right-6 rounded-r-[2rem]'
        } border-y border-[#ffe7a6]/55`}
      />

      {/* Corner flowers matching gold theme */}
      {side === 'left' ? (
        <>
          <div className="absolute left-3 top-4 h-52 w-40 opacity-60 sm:left-6 sm:top-8 sm:h-64 sm:w-52">
            <GoldFlower />
          </div>

          <div className="absolute bottom-5 left-2 h-44 w-36 -rotate-12 opacity-48 sm:bottom-8 sm:left-5 sm:h-56 sm:w-44">
            <GoldFlower />
          </div>
        </>
      ) : (
        <>
          <div className="absolute right-3 top-4 h-52 w-40 scale-x-[-1] opacity-60 sm:right-6 sm:top-8 sm:h-64 sm:w-52">
            <GoldFlower />
          </div>

          <div className="absolute bottom-5 right-2 h-44 w-36 rotate-[190deg] opacity-48 sm:bottom-8 sm:right-5 sm:h-56 sm:w-44">
            <GoldFlower />
          </div>
        </>
      )}

      {/* Corner glow */}
      <div
        className={`absolute top-0 h-72 w-72 rounded-full bg-[#fff0a9]/16 blur-3xl ${
          side === 'left' ? 'left-[-120px]' : 'right-[-120px]'
        }`}
      />

      <div
        className={`absolute bottom-[-80px] h-72 w-72 rounded-full bg-[#7d5617]/18 blur-3xl ${
          side === 'left' ? 'left-[-80px]' : 'right-[-80px]'
        }`}
      />

      {/* Center glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,238,165,.36)_0%,transparent_58%)]" />

      {/* Edge depth near opening */}
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
        stroke="#6d4b13"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.74"
      >
        <path d="M72 238 C74 178 86 126 116 66" />
        <path d="M86 166 C56 146 38 124 27 94" />
        <path d="M96 139 C126 121 140 92 151 57" />
        <path d="M74 208 C48 197 30 177 18 148" />
        <path d="M108 96 C88 73 80 52 84 24" />

        <path d="M27 94 C45 82 64 85 78 106 C55 114 39 111 27 94Z" />
        <path d="M151 57 C130 48 113 54 101 75 C121 84 138 78 151 57Z" />
        <path d="M18 148 C40 140 58 147 68 170 C46 177 28 170 18 148Z" />
        <path d="M84 24 C104 39 108 59 94 79 C77 62 73 43 84 24Z" />
        <path d="M116 68 C138 63 158 74 165 96 C143 101 125 93 116 68Z" />

        <path d="M55 122 C42 104 43 90 58 78" />
        <path d="M120 118 C139 108 151 94 156 76" />
        <path d="M68 188 C50 180 39 168 34 154" />
      </g>

      <g fill="#f9e59d" opacity="0.42">
        <circle cx="27" cy="94" r="8" />
        <circle cx="151" cy="57" r="7" />
        <circle cx="18" cy="148" r="7" />
        <circle cx="84" cy="24" r="6" />
        <circle cx="165" cy="96" r="6" />
      </g>

      <g fill="#7d5b1d" opacity="0.26">
        <circle cx="58" cy="78" r="5" />
        <circle cx="156" cy="76" r="5" />
        <circle cx="34" cy="154" r="5" />
      </g>
    </svg>
  )
}
