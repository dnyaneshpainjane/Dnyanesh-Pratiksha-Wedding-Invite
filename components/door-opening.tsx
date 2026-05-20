'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

export function DoorOpening({
  onClose,
}: {
  onClose: () => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [showInvitation, setShowInvitation] = useState(false)
  const [hideIntro, setHideIntro] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      openCard()
    }, 5200)

    return () => clearTimeout(timer)
  }, [])

  const openCard = () => {
    if (isOpen) return

    setIsOpen(true)

    setTimeout(() => {
      setShowInvitation(true)
    }, 2200)

    setTimeout(() => {
      setHideIntro(true)
      onClose()
    }, 8200)
  }

  const closeIntro = () => {
    setHideIntro(true)
    onClose()
  }

  if (hideIntro) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#eaf6ef]">
      {/* Hidden elegant invite after doors open */}
      <div
        className={`absolute inset-0 z-0 flex items-center justify-center bg-[#f9f3ea] transition-all duration-[2200ms] ease-[cubic-bezier(.19,1,.22,1)] ${
          showInvitation ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
        }`}
      >
        <div className="relative h-full w-full overflow-hidden bg-[#fbf6ee]">
          {/* Luxury floral corners */}
          <div className="absolute left-0 top-0 h-72 w-72 opacity-80">
            <div className="absolute left-[-90px] top-[-90px] h-64 w-64 rounded-full bg-[#d9b7a6]/40 blur-3xl" />
            <div className="absolute left-8 top-10 font-serif text-8xl text-[#b78b74]/20">
              ❦
            </div>
          </div>

          <div className="absolute bottom-0 right-0 h-80 w-80 opacity-80">
            <div className="absolute bottom-[-110px] right-[-90px] h-72 w-72 rounded-full bg-[#9fb79d]/40 blur-3xl" />
            <div className="absolute bottom-10 right-10 rotate-180 font-serif text-8xl text-[#b78b74]/20">
              ❦
            </div>
          </div>

          {/* Fine pattern */}
          <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle,#6b7f6e_1px,transparent_1.5px)] bg-[size:22px_22px]" />

          <div className="relative flex h-full w-full items-center justify-center px-6 text-center">
            <div className="max-w-3xl">
              <p className="mb-6 text-xs uppercase tracking-[0.48em] text-[#a98259]">
                Wedding Invitation
              </p>

              <div className="mx-auto mb-8 flex max-w-lg items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b99763] to-[#b99763]" />
                <div className="h-3 w-3 rotate-45 border border-[#b99763]" />
                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#b99763] to-[#b99763]" />
              </div>

              <h1 className="font-serif text-5xl font-light leading-tight text-[#4f3a31] sm:text-7xl md:text-8xl">
                Dnyanesh
                <span className="block py-2 text-4xl italic text-[#b99763] md:text-5xl">
                  &
                </span>
                Pratiksha
              </h1>

              <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-[#6b5c52] md:text-lg">
                With love in our hearts and blessings from our families, we
                invite you to celebrate the beginning of our forever.
              </p>

              <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-[#e3d2bc] bg-white/60 px-6 py-5 shadow-sm backdrop-blur">
                  <p className="text-[10px] uppercase tracking-[0.32em] text-[#a98259]">
                    Celebrate
                  </p>
                  <p className="mt-2 font-serif text-2xl text-[#4f3a31]">
                    Love
                  </p>
                </div>

                <div className="rounded-3xl border border-[#e3d2bc] bg-white/60 px-6 py-5 shadow-sm backdrop-blur">
                  <p className="text-[10px] uppercase tracking-[0.32em] text-[#a98259]">
                    Together
                  </p>
                  <p className="mt-2 font-serif text-2xl text-[#4f3a31]">
                    Forever
                  </p>
                </div>

                <div className="rounded-3xl border border-[#e3d2bc] bg-white/60 px-6 py-5 shadow-sm backdrop-blur">
                  <p className="text-[10px] uppercase tracking-[0.32em] text-[#a98259]">
                    With
                  </p>
                  <p className="mt-2 font-serif text-2xl text-[#4f3a31]">
                    Blessings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full screen door card */}
      <div className="absolute inset-0 z-20 perspective-[1800px]">
        {/* Left door */}
        <div
          className={`absolute left-0 top-0 h-full w-1/2 origin-left overflow-hidden border-r border-[#d7c59d]/50 transition-transform duration-[3000ms] ease-[cubic-bezier(.19,1,.22,1)] ${
            isOpen ? 'door-left-open' : 'door-left-closed'
          }`}
        >
          <DoorPanel side="left" />
        </div>

        {/* Right door */}
        <div
          className={`absolute right-0 top-0 h-full w-1/2 origin-right overflow-hidden border-l border-[#d7c59d]/50 transition-transform duration-[3000ms] ease-[cubic-bezier(.19,1,.22,1)] ${
            isOpen ? 'door-right-open' : 'door-right-closed'
          }`}
        >
          <DoorPanel side="right" />
        </div>

        {/* Center belt */}
        <div
          className={`absolute left-0 top-1/2 z-30 h-24 w-full -translate-y-1/2 border-y border-[#cdbb8b]/70 bg-[#e6efe7]/85 shadow-[0_8px_30px_rgba(66,55,40,.18)] backdrop-blur-sm transition-all duration-[1800ms] ${
            isOpen ? 'scale-x-0 opacity-0' : 'scale-x-100 opacity-100'
          }`}
        >
          <div className="absolute inset-0 opacity-[0.2] bg-[repeating-linear-gradient(45deg,#8aa98f_0_1px,transparent_1px_12px)]" />
        </div>

        {/* Ornate center badge button */}
        <button
          onClick={openCard}
          disabled={isOpen}
          aria-label="Open wedding card"
          className={`absolute left-1/2 top-1/2 z-40 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center transition-all duration-[1600ms] ease-[cubic-bezier(.19,1,.22,1)] sm:h-52 sm:w-52 ${
            isOpen
              ? 'scale-50 rotate-12 opacity-0'
              : 'scale-100 rotate-0 opacity-100 hover:scale-[1.04] active:scale-95'
          }`}
        >
          <span className="absolute inset-0 rounded-[42%_58%_46%_54%/55%_43%_57%_45%] bg-[radial-gradient(circle_at_32%_22%,#ffe4a1_0%,#c89443_23%,#8b5a26_58%,#3b2717_100%)] shadow-[0_22px_45px_rgba(43,31,19,.42),inset_6px_8px_14px_rgba(255,232,164,.42),inset_-10px_-14px_20px_rgba(35,20,12,.5)]" />

          <span className="absolute -left-2 top-10 h-12 w-12 rounded-full bg-[#8c5a27] shadow-inner" />
          <span className="absolute -right-1 top-16 h-10 w-10 rounded-full bg-[#a66d2f] shadow-inner" />
          <span className="absolute bottom-0 left-14 h-12 w-14 rounded-full bg-[#6f411f] shadow-inner" />
          <span className="absolute left-8 top-4 h-8 w-12 -rotate-12 rounded-full bg-white/20 blur-md" />

          <span className="absolute inset-[18px] rounded-full border border-[#ead28d]/70 bg-[radial-gradient(circle_at_34%_22%,#dfb868_0%,#875125_54%,#2e2015_100%)] shadow-[inset_4px_6px_10px_rgba(255,230,165,.38),inset_-8px_-10px_16px_rgba(28,17,10,.55)]" />

          <span className="absolute inset-[34px] rounded-full border border-[#f6d98e]/45 shadow-[inset_0_3px_8px_rgba(21,12,7,.65)]" />

          <span className="relative text-center font-serif text-[#f8ddb0] drop-shadow-[0_2px_1px_rgba(0,0,0,.75)]">
            <span className="block text-[11px] uppercase tracking-[0.28em]">
              Dnyanesh
            </span>
            <span className="my-1 block text-xl">&</span>
            <span className="block text-[11px] uppercase tracking-[0.28em]">
              Pratiksha
            </span>
          </span>
        </button>

        <p
          className={`absolute bottom-10 left-1/2 z-40 -translate-x-1/2 text-center text-[11px] uppercase tracking-[0.42em] text-[#6f5a42] transition-all duration-1000 ${
            isOpen ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-80'
          }`}
        >
          Tap to open
        </p>

        <button
          onClick={closeIntro}
          className="absolute right-5 top-5 z-50 rounded-full border border-white/50 bg-white/45 p-2 text-[#5a4737] shadow-sm backdrop-blur-md transition hover:bg-white/80"
          aria-label="Close invitation"
        >
          <X size={22} />
        </button>
      </div>

      <style jsx>{`
        .door-left-closed {
          transform: perspective(1800px) rotateY(0deg);
        }

        .door-right-closed {
          transform: perspective(1800px) rotateY(0deg);
        }

        .door-left-open {
          transform: perspective(1800px) rotateY(-105deg);
        }

        .door-right-open {
          transform: perspective(1800px) rotateY(105deg);
        }
      `}</style>
    </div>
  )
}

function DoorPanel({ side }: { side: 'left' | 'right' }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#e8f4ed]">
      {/* Reference-image inspired full cover */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-95"
        style={{
          backgroundImage: "url('/images/invite-door-bg.png')",
          backgroundPosition: side === 'left' ? 'left center' : 'right center',
        }}
      />

      {/* Fallback layered design, visible even without image */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(231,246,239,.92),rgba(203,226,215,.88))]" />

      {/* Jaali pattern */}
      <div className="absolute inset-x-4 top-8 bottom-8 rounded-[2rem] border border-[#d4c59b]/35 bg-[#e6f5ee]/30 shadow-[inset_0_0_35px_rgba(91,127,105,.18)] sm:inset-x-8">
        <div className="absolute inset-4 opacity-45 bg-[radial-gradient(circle_at_center,transparent_34%,rgba(105,151,134,.55)_35%,rgba(105,151,134,.55)_38%,transparent_39%)] bg-[size:76px_76px]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.55),transparent,rgba(255,255,255,.35))]" />
      </div>

      {/* Floral decoration */}
      <div className="absolute -left-10 bottom-[-20px] h-72 w-72 rounded-full bg-[radial-gradient(circle_at_38%_42%,rgba(225,142,139,.75)_0%,transparent_18%),radial-gradient(circle_at_55%_52%,rgba(244,204,185,.8)_0%,transparent_16%),radial-gradient(circle_at_68%_34%,rgba(117,139,82,.55)_0%,transparent_14%)] opacity-70 blur-[0.2px]" />

      <div className="absolute -right-12 top-[-28px] h-64 w-64 rounded-full bg-[radial-gradient(circle_at_46%_45%,rgba(225,142,139,.6)_0%,transparent_16%),radial-gradient(circle_at_62%_58%,rgba(244,204,185,.75)_0%,transparent_14%),radial-gradient(circle_at_30%_70%,rgba(117,139,82,.5)_0%,transparent_12%)] opacity-60 blur-[0.2px]" />

      {/* Golden handle strip */}
      <div
        className={`absolute top-7 h-3 w-[72%] rounded-full bg-[linear-gradient(180deg,#ffe8a7,#b48235_55%,#6c461d)] shadow-[0_5px_12px_rgba(75,52,25,.28),inset_0_1px_2px_rgba(255,255,255,.55)] ${
          side === 'left' ? 'right-0 rounded-r-none' : 'left-0 rounded-l-none'
        }`}
      />

      {/* Inner glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.28),transparent_62%)]" />
    </div>
  )
}
