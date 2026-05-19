'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

export function DoorOpening({
  onClose,
}: {
  onClose: () => void
}) {
  const [isOpening, setIsOpening] = useState(false)
  const [isRevealed, setIsRevealed] = useState(false)
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      handleOpen()
    }, 5200)

    return () => clearTimeout(timer)
  }, [])

  const handleOpen = () => {
    if (isOpening) return

    setIsOpening(true)

    setTimeout(() => {
      setIsRevealed(true)
    }, 1800)

    setTimeout(() => {
      setShowIntro(false)
      onClose()
    }, 4200)
  }

  if (!showIntro) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#f8efe8]">
      {/* Soft background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ffffff_0%,transparent_34%),radial-gradient(circle_at_bottom_right,#e8d6c9_0%,transparent_32%)]" />

      {/* Floating soft petals */}
      <div className="absolute left-[12%] top-[18%] h-3 w-3 rounded-full bg-[#d7a7a5]/50 blur-[1px] animate-petal-one" />
      <div className="absolute right-[18%] top-[28%] h-2 w-2 rounded-full bg-[#c9b795]/60 blur-[1px] animate-petal-two" />
      <div className="absolute bottom-[22%] left-[24%] h-2.5 w-2.5 rounded-full bg-[#e4c4bd]/70 blur-[1px] animate-petal-three" />

      {/* Close button */}
      <button
        onClick={() => {
          setShowIntro(false)
          onClose()
        }}
        className="absolute right-5 top-5 z-50 rounded-full bg-white/45 p-2 text-[#7e5650] shadow-sm backdrop-blur-md transition hover:bg-white/70"
        aria-label="Close invitation"
      >
        <X size={22} />
      </button>

      <div className="relative flex min-h-screen items-center justify-center px-5">
        {/* Invitation card behind envelope */}
        <div
          className={`absolute z-0 w-[88vw] max-w-[520px] rounded-[2rem] border border-white/70 bg-[#fffaf5] px-8 py-12 text-center shadow-2xl transition-all duration-[1800ms] ease-[cubic-bezier(.22,1,.36,1)] md:px-12 ${
            isRevealed
              ? 'translate-y-[-54px] scale-100 opacity-100'
              : 'translate-y-12 scale-95 opacity-0'
          }`}
        >
          <p className="mb-3 text-xs uppercase tracking-[0.38em] text-[#b88973]">
            Wedding Invitation
          </p>

          <h1 className="font-serif text-4xl font-light leading-tight text-[#7b4d45] md:text-6xl">
            Dnyanesh
            <span className="mx-3 text-[#c49a7c]">&</span>
            Pratiksha
          </h1>

          <div className="mx-auto my-7 h-px w-28 bg-gradient-to-r from-transparent via-[#c49a7c] to-transparent" />

          <p className="mx-auto max-w-sm text-sm leading-7 text-[#6f625c] md:text-base">
            Join us as we celebrate love, togetherness, and the beginning of our
            beautiful journey.
          </p>
        </div>

        {/* Envelope */}
        <div
          className={`relative z-10 h-[330px] w-[88vw] max-w-[560px] transition-all duration-[2000ms] ease-[cubic-bezier(.22,1,.36,1)] ${
            isRevealed
              ? 'translate-y-[150px] scale-90 opacity-0'
              : 'translate-y-0 scale-100 opacity-100'
          }`}
        >
          {/* Envelope body */}
          <div className="absolute inset-x-0 bottom-0 h-[245px] overflow-hidden rounded-[1.6rem] border border-white/40 bg-[#cad2bd] shadow-[0_28px_70px_rgba(104,76,67,0.24)]">
            {/* Floral watercolor texture */}
            <div className="absolute inset-0 opacity-95">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_74%,rgba(255,232,216,.8)_0%,transparent_22%),radial-gradient(circle_at_82%_34%,rgba(239,178,166,.55)_0%,transparent_18%),radial-gradient(circle_at_52%_20%,rgba(255,255,255,.45)_0%,transparent_26%),linear-gradient(135deg,#879f8f,#c7d1be_48%,#8ca08e)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_58%,rgba(255,255,255,.7)_0%,transparent_13%),radial-gradient(circle_at_21%_66%,rgba(244,193,181,.65)_0%,transparent_9%),radial-gradient(circle_at_70%_64%,rgba(238,170,151,.5)_0%,transparent_10%),radial-gradient(circle_at_78%_70%,rgba(255,238,224,.65)_0%,transparent_8%)] blur-[0.3px]" />
            </div>

            {/* Envelope folds */}
            <div className="absolute inset-x-0 bottom-0 h-full">
              <div className="absolute bottom-0 left-0 h-full w-1/2 bg-gradient-to-tr from-[#7f9886]/60 via-transparent to-transparent [clip-path:polygon(0_0,100%_50%,0_100%)]" />
              <div className="absolute bottom-0 right-0 h-full w-1/2 bg-gradient-to-tl from-[#7f9886]/60 via-transparent to-transparent [clip-path:polygon(100%_0,0_50%,100%_100%)]" />
              <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-[#6f8978]/55 to-transparent [clip-path:polygon(0_100%,50%_0,100%_100%)]" />
            </div>

            {/* Subtle paper grain */}
            <div className="absolute inset-0 opacity-[0.14] mix-blend-soft-light bg-[linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px)] bg-[size:18px_18px]" />
          </div>

          {/* Top flap */}
          <div
            className={`absolute left-0 right-0 top-[22px] z-20 mx-auto h-[170px] origin-bottom overflow-hidden rounded-t-[1.5rem] border border-white/30 bg-gradient-to-br from-[#9fb39f] via-[#c6d0bd] to-[#829a88] shadow-xl transition-transform duration-[2200ms] ease-[cubic-bezier(.22,1,.36,1)] [clip-path:polygon(0_0,100%_0,50%_100%)] ${
              isOpening ? 'rotate-x-[178deg]' : 'rotate-x-0'
            }`}
            style={{
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
            }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_70%,rgba(255,232,218,.75)_0%,transparent_18%),radial-gradient(circle_at_74%_36%,rgba(236,168,151,.48)_0%,transparent_16%)]" />
          </div>

          {/* Wax seal button */}
          <button
            onClick={handleOpen}
            disabled={isOpening}
            aria-label="Open invitation"
            className={`absolute left-1/2 top-[155px] z-30 flex h-24 w-24 -translate-x-1/2 items-center justify-center rounded-full transition-all duration-1000 ${
              isOpening
                ? 'scale-75 opacity-0'
                : 'scale-100 opacity-100 hover:scale-105 active:scale-95'
            }`}
          >
            <span className="absolute inset-0 rounded-[44%_56%_48%_52%/54%_42%_58%_46%] bg-[#b88445] shadow-[0_10px_22px_rgba(89,50,28,.35),inset_0_3px_5px_rgba(255,235,180,.45),inset_0_-8px_14px_rgba(100,56,25,.35)]" />
            <span className="absolute inset-[7px] rounded-full border border-[#ead2a1]/70 bg-gradient-to-br from-[#d5a35c] via-[#b9823e] to-[#8a5528] shadow-[inset_0_2px_4px_rgba(255,238,184,.55),inset_0_-5px_10px_rgba(93,52,24,.35)]" />
            <span className="relative font-serif text-3xl font-light tracking-wide text-[#fff3cf] drop-shadow">
              D&P
            </span>
          </button>

          {/* Hint text */}
          <p
            className={`absolute left-1/2 top-[270px] z-40 -translate-x-1/2 text-center text-sm uppercase tracking-[0.28em] text-[#76564d] transition-opacity duration-700 ${
              isOpening ? 'opacity-0' : 'opacity-80'
            }`}
          >
            Tap seal to open
          </p>
        </div>
      </div>

      <style jsx>{`
        .rotate-x-0 {
          transform: perspective(900px) rotateX(0deg);
        }

        .rotate-x-[178deg] {
          transform: perspective(900px) rotateX(178deg);
        }

        @keyframes petal-one {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
            opacity: 0.45;
          }
          50% {
            transform: translate3d(18px, 24px, 0) rotate(18deg);
            opacity: 0.75;
          }
        }

        @keyframes petal-two {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
            opacity: 0.35;
          }
          50% {
            transform: translate3d(-22px, 18px, 0) rotate(-16deg);
            opacity: 0.65;
          }
        }

        @keyframes petal-three {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
            opacity: 0.4;
          }
          50% {
            transform: translate3d(16px, -20px, 0) rotate(12deg);
            opacity: 0.7;
          }
        }

        .animate-petal-one {
          animation: petal-one 7s ease-in-out infinite;
        }

        .animate-petal-two {
          animation: petal-two 8s ease-in-out infinite;
        }

        .animate-petal-three {
          animation: petal-three 9s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
