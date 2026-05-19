'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

export function DoorOpening({
  onClose,
}: {
  onClose: () => void
}) {
  const [isOpening, setIsOpening] = useState(false)
  const [showInvite, setShowInvite] = useState(false)
  const [hideIntro, setHideIntro] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      openInvitation()
    }, 5500)

    return () => clearTimeout(timer)
  }, [])

  const openInvitation = () => {
    if (isOpening) return

    setIsOpening(true)

    setTimeout(() => {
      setShowInvite(true)
    }, 1800)

    setTimeout(() => {
      setHideIntro(true)
      onClose()
    }, 7200)
  }

  const closeIntro = () => {
    setHideIntro(true)
    onClose()
  }

  if (hideIntro) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#f7efe8]">
      {/* Background ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,.9)_0%,transparent_28%),radial-gradient(circle_at_85%_78%,rgba(214,184,157,.45)_0%,transparent_34%),linear-gradient(135deg,#fbf6ef_0%,#f1dfd2_48%,#ead1c4_100%)]" />

      <div className="absolute inset-0 opacity-[0.18] bg-[linear-gradient(90deg,rgba(125,91,76,.35)_1px,transparent_1px),linear-gradient(rgba(125,91,76,.35)_1px,transparent_1px)] bg-[size:34px_34px]" />

      {/* Soft floating details */}
      <div className="absolute left-[8%] top-[18%] h-24 w-24 rounded-full bg-[#d8a6a1]/20 blur-2xl animate-soft-float-one" />
      <div className="absolute right-[10%] bottom-[20%] h-32 w-32 rounded-full bg-[#b7c3a7]/25 blur-2xl animate-soft-float-two" />
      <div className="absolute left-[44%] top-[10%] h-20 w-20 rounded-full bg-[#e5c8a9]/30 blur-2xl animate-soft-float-three" />

      <button
        onClick={closeIntro}
        className="absolute right-4 top-4 z-[80] rounded-full border border-white/50 bg-white/50 p-2 text-[#6f5049] shadow-sm backdrop-blur-md transition hover:bg-white/80"
        aria-label="Close invitation"
      >
        <X size={22} />
      </button>

      <main className="relative flex min-h-screen w-full items-center justify-center">
        {/* Revealed elegant invitation */}
        <section
          className={`absolute inset-x-0 top-1/2 z-10 mx-auto w-full -translate-y-1/2 px-0 transition-all duration-[2200ms] ease-[cubic-bezier(.22,1,.36,1)] ${
            showInvite
              ? 'translate-y-[-55%] scale-100 opacity-100'
              : 'translate-y-[-40%] scale-[0.96] opacity-0'
          }`}
        >
          <div className="relative mx-auto w-full overflow-hidden border-y border-white/70 bg-[#fffaf4] shadow-[0_30px_90px_rgba(85,58,48,.18)] md:w-[92vw] md:max-w-[980px] md:rounded-[2rem] md:border">
            {/* Card floral corners */}
            <div className="absolute left-0 top-0 h-44 w-44 opacity-70">
              <div className="absolute left-[-42px] top-[-42px] h-36 w-36 rounded-full bg-[#b6c5ad]/45 blur-xl" />
              <div className="absolute left-10 top-12 h-12 w-12 rounded-full bg-[#f3d1c9]/70 blur-md" />
              <div className="absolute left-20 top-8 h-10 w-10 rounded-full bg-[#fff0df]/80 blur-md" />
            </div>

            <div className="absolute bottom-0 right-0 h-52 w-52 opacity-70">
              <div className="absolute bottom-[-54px] right-[-48px] h-44 w-44 rounded-full bg-[#9caf97]/40 blur-xl" />
              <div className="absolute bottom-16 right-12 h-12 w-12 rounded-full bg-[#e9aaa0]/50 blur-md" />
              <div className="absolute bottom-24 right-24 h-8 w-8 rounded-full bg-[#fff4df]/70 blur-md" />
            </div>

            <div className="relative px-7 py-12 text-center sm:px-10 md:px-16 md:py-16">
              <p className="mb-5 text-[11px] uppercase tracking-[0.44em] text-[#a47a62]">
                You are warmly invited
              </p>

              <div className="mx-auto mb-7 flex max-w-[720px] items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c7a17d] to-[#c7a17d]" />
                <div className="h-2 w-2 rotate-45 bg-[#b9906d]" />
                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#c7a17d] to-[#c7a17d]" />
              </div>

              <h1 className="font-serif text-[2.7rem] font-light leading-[1.06] tracking-wide text-[#6f4740] sm:text-6xl md:text-7xl">
                Dnyanesh
                <span className="block py-1 text-3xl italic text-[#b9906d] sm:text-4xl">
                  &
                </span>
                Pratiksha
              </h1>

              <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#75645c] sm:text-base">
                With hearts full of joy, we invite you to celebrate the beginning
                of our forever — a day of love, blessings, laughter, and beautiful
                memories.
              </p>

              <div className="mx-auto mt-9 grid max-w-2xl gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-[#eadccc] bg-white/60 px-5 py-4 shadow-sm">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#a47a62]">
                    Celebrate
                  </p>
                  <p className="mt-1 font-serif text-xl text-[#6f4740]">
                    Love
                  </p>
                </div>

                <div className="rounded-2xl border border-[#eadccc] bg-white/60 px-5 py-4 shadow-sm">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#a47a62]">
                    Together
                  </p>
                  <p className="mt-1 font-serif text-xl text-[#6f4740]">
                    Forever
                  </p>
                </div>

                <div className="rounded-2xl border border-[#eadccc] bg-white/60 px-5 py-4 shadow-sm">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#a47a62]">
                    With
                  </p>
                  <p className="mt-1 font-serif text-xl text-[#6f4740]">
                    Blessings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Envelope wrapper - end to end */}
        <section
          className={`relative z-30 flex w-full justify-center transition-all duration-[2400ms] ease-[cubic-bezier(.22,1,.36,1)] ${
            showInvite
              ? 'translate-y-[34vh] scale-[0.94] opacity-0'
              : 'translate-y-0 scale-100 opacity-100'
          }`}
        >
          <div className="relative h-[420px] w-full md:h-[500px]">
            {/* Back shadow card */}
            <div className="absolute inset-x-0 bottom-[72px] mx-auto h-[265px] w-full bg-[#d8dfcf] shadow-[0_35px_100px_rgba(77,61,51,.26)] md:h-[330px] md:w-[92vw] md:max-w-[980px] md:rounded-[2rem]" />

            {/* Envelope body */}
            <div className="absolute inset-x-0 bottom-[72px] mx-auto h-[265px] w-full overflow-hidden bg-[#aebf9f] shadow-[0_28px_80px_rgba(68,54,45,.28)] md:h-[330px] md:w-[92vw] md:max-w-[980px] md:rounded-[2rem]">
              {/* Watercolor floral pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#7e9685_0%,#becab3_43%,#8fa38e_100%)]" />

              <div className="absolute inset-0 opacity-95 bg-[radial-gradient(circle_at_14%_68%,rgba(255,245,222,.85)_0%,transparent_15%),radial-gradient(circle_at_20%_72%,rgba(238,177,164,.7)_0%,transparent_9%),radial-gradient(circle_at_31%_58%,rgba(255,255,255,.6)_0%,transparent_12%),radial-gradient(circle_at_76%_35%,rgba(238,170,151,.58)_0%,transparent_10%),radial-gradient(circle_at_82%_39%,rgba(255,239,218,.72)_0%,transparent_9%),radial-gradient(circle_at_62%_22%,rgba(255,255,255,.28)_0%,transparent_18%)]" />

              <div className="absolute inset-0 opacity-[0.16] mix-blend-soft-light bg-[linear-gradient(110deg,rgba(255,255,255,.75)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.75)_1px,transparent_1px)] bg-[size:22px_22px]" />

              {/* Fold layers */}
              <div className="absolute inset-0">
                <div className="absolute bottom-0 left-0 h-full w-1/2 bg-gradient-to-tr from-[#6d8374]/65 via-[#8fa38e]/20 to-transparent [clip-path:polygon(0_0,100%_50%,0_100%)]" />
                <div className="absolute bottom-0 right-0 h-full w-1/2 bg-gradient-to-tl from-[#6d8374]/65 via-[#8fa38e]/20 to-transparent [clip-path:polygon(100%_0,0_50%,100%_100%)]" />
                <div className="absolute bottom-0 left-0 h-[58%] w-full bg-gradient-to-t from-[#718877]/75 to-transparent [clip-path:polygon(0_100%,50%_0,100%_100%)]" />
              </div>

              <div className="absolute inset-x-0 top-0 h-px bg-white/45" />
            </div>

            {/* Top envelope flap */}
            <div
              className={`absolute inset-x-0 bottom-[260px] z-20 mx-auto h-[215px] w-full origin-bottom overflow-hidden bg-[#9fb49d] shadow-[0_18px_45px_rgba(74,54,43,.18)] transition-transform duration-[2800ms] ease-[cubic-bezier(.19,1,.22,1)] [clip-path:polygon(0_0,100%_0,50%_100%)] md:bottom-[345px] md:h-[255px] md:w-[92vw] md:max-w-[980px] md:rounded-t-[2rem] ${
                isOpening ? 'flap-open' : 'flap-closed'
              }`}
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#7f987f_0%,#c2cdb8_48%,#849983_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_66%,rgba(255,241,222,.8)_0%,transparent_15%),radial-gradient(circle_at_74%_34%,rgba(231,156,145,.52)_0%,transparent_12%),radial-gradient(circle_at_54%_20%,rgba(255,255,255,.32)_0%,transparent_22%)]" />
            </div>

            {/* Realistic wax seal */}
            <button
              onClick={openInvitation}
              disabled={isOpening}
              aria-label="Open invitation"
              className={`absolute left-1/2 top-[205px] z-50 h-[104px] w-[104px] -translate-x-1/2 transition-all duration-[1300ms] ease-[cubic-bezier(.22,1,.36,1)] md:top-[246px] md:h-[122px] md:w-[122px] ${
                isOpening
                  ? 'scale-[0.55] rotate-12 opacity-0'
                  : 'scale-100 rotate-0 opacity-100 hover:scale-[1.04] active:scale-95'
              }`}
            >
              {/* Irregular wax puddle */}
              <span className="absolute inset-0 wax-blob bg-[radial-gradient(circle_at_34%_24%,#f1d088_0%,#c78a37_26%,#a96425_58%,#6f351d_100%)] shadow-[0_18px_28px_rgba(74,38,20,.38),inset_5px_8px_12px_rgba(255,226,158,.48),inset_-9px_-13px_18px_rgba(74,32,16,.48)]" />

              {/* Uneven melted edges */}
              <span className="absolute left-[5%] top-[24%] h-7 w-7 rounded-full bg-[#a45f25] shadow-[inset_3px_4px_8px_rgba(255,220,145,.24),inset_-4px_-5px_8px_rgba(75,35,17,.35)]" />
              <span className="absolute right-[4%] top-[33%] h-8 w-8 rounded-full bg-[#b46b2a] shadow-[inset_2px_3px_8px_rgba(255,220,145,.28),inset_-4px_-5px_8px_rgba(75,35,17,.35)]" />
              <span className="absolute bottom-[2%] left-[35%] h-8 w-9 rounded-full bg-[#8b461f] shadow-[inset_2px_3px_7px_rgba(255,220,145,.18),inset_-4px_-5px_8px_rgba(75,35,17,.42)]" />
              <span className="absolute bottom-[20%] left-[-2%] h-6 w-6 rounded-full bg-[#9a5723]" />

              {/* Inner stamped circle */}
              <span className="absolute inset-[14px] rounded-full border border-[#f7dda5]/55 bg-[radial-gradient(circle_at_30%_22%,#e8bc6b_0%,#bd772f_42%,#7e3b1d_100%)] shadow-[inset_3px_5px_9px_rgba(255,229,171,.42),inset_-6px_-8px_12px_rgba(70,29,14,.5),0_2px_5px_rgba(255,236,179,.22)]" />

              {/* Pressed ring */}
              <span className="absolute inset-[23px] rounded-full border border-[#6e3118]/40 shadow-[inset_0_2px_4px_rgba(60,23,12,.42),0_1px_1px_rgba(255,229,164,.34)]" />

              {/* Highlight */}
              <span className="absolute left-[30%] top-[20%] h-5 w-9 rotate-[-18deg] rounded-full bg-white/22 blur-[5px]" />

              {/* Initials */}
              <span className="absolute inset-0 flex items-center justify-center pt-1 font-serif text-[30px] font-light tracking-wide text-[#ffe8b0] drop-shadow-[0_2px_1px_rgba(72,30,14,.8)] md:text-[36px]">
                D&P
              </span>
            </button>

            {/* Tap hint */}
            <p
              className={`absolute inset-x-0 bottom-8 z-40 text-center text-[11px] uppercase tracking-[0.36em] text-[#79584d] transition-all duration-1000 ${
                isOpening
                  ? 'translate-y-3 opacity-0'
                  : 'translate-y-0 opacity-80'
              }`}
            >
              Tap the wax seal
            </p>
          </div>
        </section>
      </main>

      <style jsx>{`
        .flap-closed {
          transform: perspective(1200px) rotateX(0deg);
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }

        .flap-open {
          transform: perspective(1200px) rotateX(178deg);
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }

        .wax-blob {
          border-radius: 48% 52% 45% 55% / 52% 43% 57% 48%;
        }

        @keyframes soft-float-one {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(22px, 26px, 0);
          }
        }

        @keyframes soft-float-two {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(-26px, -18px, 0);
          }
        }

        @keyframes soft-float-three {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(14px, 28px, 0);
          }
        }

        .animate-soft-float-one {
          animation: soft-float-one 9s ease-in-out infinite;
        }

        .animate-soft-float-two {
          animation: soft-float-two 10s ease-in-out infinite;
        }

        .animate-soft-float-three {
          animation: soft-float-three 11s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
