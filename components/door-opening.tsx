'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

export function DoorOpening({
  onClose,
}: {
  onClose: () => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [showInside, setShowInside] = useState(false)
  const [hideIntro, setHideIntro] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      openCard()
    }, 5500)

    return () => clearTimeout(timer)
  }, [])

  const openCard = () => {
    if (isOpen) return

    setIsOpen(true)

    setTimeout(() => {
      setShowInside(true)
    }, 2300)

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
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#f6f1e8]">
      {/* Inside invitation after doors open */}
      <div
        className={`absolute inset-0 z-0 transition-all duration-[2200ms] ease-[cubic-bezier(.19,1,.22,1)] ${
          showInside ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
        }`}
      >
        <InsideInvitation />
      </div>

      {/* Full screen card doors */}
      <div className="absolute inset-0 z-20 perspective-[1900px]">
        {/* Left door */}
        <div
          className={`absolute left-0 top-0 h-full w-1/2 origin-left overflow-hidden transition-transform duration-[3200ms] ease-[cubic-bezier(.19,1,.22,1)] ${
            isOpen ? 'door-left-open' : 'door-left-closed'
          }`}
        >
          <DoorPanel side="left" />
        </div>

        {/* Right door */}
        <div
          className={`absolute right-0 top-0 h-full w-1/2 origin-right overflow-hidden transition-transform duration-[3200ms] ease-[cubic-bezier(.19,1,.22,1)] ${
            isOpen ? 'door-right-open' : 'door-right-closed'
          }`}
        >
          <DoorPanel side="right" />
        </div>

        {/* Middle closing band */}
        <div
          className={`absolute left-0 top-1/2 z-30 h-28 w-full -translate-y-1/2 border-y border-[#d4b36c]/60 bg-[#f7f1e4]/85 shadow-[0_10px_35px_rgba(88,63,34,.18)] backdrop-blur-sm transition-all duration-[1800ms] ${
            isOpen ? 'scale-x-0 opacity-0' : 'scale-x-100 opacity-100'
          }`}
        >
          <div className="absolute inset-0 opacity-[0.16] bg-[repeating-linear-gradient(45deg,#b58a42_0_1px,transparent_1px_13px)]" />
        </div>

        {/* Center royal seal */}
        <button
          onClick={openCard}
          disabled={isOpen}
          aria-label="Open wedding invitation"
          className={`absolute left-1/2 top-1/2 z-40 h-44 w-44 -translate-x-1/2 -translate-y-1/2 transition-all duration-[1600ms] ease-[cubic-bezier(.19,1,.22,1)] sm:h-56 sm:w-56 ${
            isOpen
              ? 'scale-50 rotate-12 opacity-0'
              : 'scale-100 rotate-0 opacity-100 hover:scale-[1.04] active:scale-95'
          }`}
        >
          <OrnateSeal />
        </button>

        <p
          className={`absolute bottom-8 left-1/2 z-40 -translate-x-1/2 text-center text-[10px] uppercase tracking-[0.45em] text-[#7b603f] transition-all duration-1000 sm:bottom-10 ${
            isOpen ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-80'
          }`}
        >
          Tap to open
        </p>

        <button
          onClick={closeIntro}
          className="absolute right-4 top-4 z-50 rounded-full border border-white/70 bg-white/55 p-2 text-[#6b5135] shadow-sm backdrop-blur-md transition hover:bg-white/85"
          aria-label="Close invitation"
        >
          <X size={22} />
        </button>
      </div>

      <style jsx>{`
        .perspective-[1900px] {
          perspective: 1900px;
        }

        .door-left-closed {
          transform: rotateY(0deg);
        }

        .door-right-closed {
          transform: rotateY(0deg);
        }

        .door-left-open {
          transform: rotateY(-108deg);
        }

        .door-right-open {
          transform: rotateY(108deg);
        }

        @keyframes float-flower {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          50% {
            transform: translate3d(0, -10px, 0) rotate(2deg);
          }
        }

        .flower-float {
          animation: float-flower 6.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

function DoorPanel({ side }: { side: 'left' | 'right' }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#f8f3e9]">
      {/* Soft ivory paper */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,.95)_0%,transparent_32%),radial-gradient(circle_at_78%_80%,rgba(223,203,169,.35)_0%,transparent_38%),linear-gradient(135deg,#fbf7ef_0%,#eee3cf_100%)]" />

      {/* Embossed texture */}
      <div className="absolute inset-0 opacity-[0.16] bg-[radial-gradient(circle,#9c855c_1px,transparent_1.3px)] bg-[size:24px_24px]" />

      {/* Inner border line */}
      <div
        className={`absolute inset-y-5 ${
          side === 'left' ? 'right-4 left-5' : 'left-4 right-5'
        } rounded-[2rem] border border-[#d2ac62]/45 sm:inset-y-8 sm:rounded-[2.5rem]`}
      />

      {/* Tall golden arch line */}
      <div
        className={`absolute top-[13%] h-[72%] w-[82%] border-[#a87533] opacity-80 ${
          side === 'left'
            ? 'right-[-42%] rounded-l-[999px] rounded-r-none border-l-2 border-t-2 border-b-2'
            : 'left-[-42%] rounded-r-[999px] rounded-l-none border-r-2 border-t-2 border-b-2'
        }`}
      />

      {/* Center seam highlight */}
      <div
        className={`absolute top-0 h-full w-px bg-gradient-to-b from-transparent via-[#caa867]/70 to-transparent ${
          side === 'left' ? 'right-0' : 'left-0'
        }`}
      />

      {/* White and gold floral corners */}
      {side === 'left' ? (
        <>
          <div className="flower-float absolute left-[-18px] top-[-8px] scale-[0.92] sm:left-5 sm:top-5 sm:scale-110">
            <FloralCluster />
          </div>

          <div className="absolute bottom-[-38px] left-[-42px] rotate-[18deg] scale-[0.75] opacity-90 sm:bottom-[-18px] sm:left-2 sm:scale-95">
            <WhiteEmbossedLeaves />
          </div>
        </>
      ) : (
        <>
          <div className="flower-float absolute right-[-24px] top-[-10px] scale-[0.8] rotate-[28deg] sm:right-2 sm:top-3 sm:scale-100">
            <SmallFloralBranch />
          </div>

          <div className="absolute bottom-[-10px] right-[-28px] rotate-[-8deg] scale-[0.92] sm:right-8 sm:bottom-8 sm:scale-110">
            <FloralCluster />
          </div>
        </>
      )}

      {/* Subtle raised white flower shapes */}
      <div className="absolute bottom-[18%] left-[8%] h-20 w-20 rounded-full bg-white/35 blur-xl" />
      <div className="absolute right-[12%] top-[18%] h-24 w-24 rounded-full bg-white/30 blur-2xl" />

      {/* Light glare */}
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,.55),transparent_34%,rgba(255,255,255,.2)_64%,transparent)]" />
    </div>
  )
}

function OrnateSeal() {
  return (
    <div className="relative h-full w-full">
      {/* Ornate gold frame */}
      <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_22%,#fff0b8_0%,#cc9a43_22%,#775020_62%,#33210e_100%)] shadow-[0_24px_48px_rgba(52,35,17,.42),inset_6px_8px_12px_rgba(255,232,160,.5),inset_-12px_-14px_22px_rgba(41,24,10,.58)]" />

      <span className="absolute -left-3 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-[#8d6126] shadow-inner" />
      <span className="absolute -right-3 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-[#8d6126] shadow-inner" />
      <span className="absolute left-1/2 -top-2 h-12 w-12 -translate-x-1/2 rounded-full bg-[#b38334] shadow-inner" />
      <span className="absolute bottom-[-8px] left-1/2 h-12 w-12 -translate-x-1/2 rounded-full bg-[#664118] shadow-inner" />

      {/* Tiny flowers around seal */}
      <span className="absolute left-5 top-8 h-7 w-7 rounded-full bg-[radial-gradient(circle,#fff_0_28%,#efd7c5_29%_48%,transparent_50%)]" />
      <span className="absolute right-8 top-7 h-6 w-6 rounded-full bg-[radial-gradient(circle,#fff_0_28%,#efd7c5_29%_48%,transparent_50%)]" />
      <span className="absolute bottom-8 left-8 h-6 w-6 rounded-full bg-[radial-gradient(circle,#fff_0_28%,#efd7c5_29%_48%,transparent_50%)]" />
      <span className="absolute bottom-7 right-6 h-7 w-7 rounded-full bg-[radial-gradient(circle,#fff_0_28%,#efd7c5_29%_48%,transparent_50%)]" />

      {/* Inner black plate */}
      <span className="absolute inset-[22px] rounded-full border border-[#dfbf70]/80 bg-[radial-gradient(circle_at_50%_35%,#5e4b31_0%,#241d15_58%,#0d0b08_100%)] shadow-[inset_0_0_22px_rgba(0,0,0,.72),0_2px_7px_rgba(255,231,172,.25)]" />

      <span className="absolute inset-[36px] rounded-full border border-dashed border-[#d8b15d]/70" />

      <span className="absolute inset-0 flex flex-col items-center justify-center text-center font-serif text-[#efd18b]">
        <span className="text-[10px] uppercase tracking-[0.28em] sm:text-xs">
          Dnyanesh
        </span>
        <span className="my-1 text-2xl italic leading-none sm:text-3xl">
          &
        </span>
        <span className="text-[10px] uppercase tracking-[0.28em] sm:text-xs">
          Pratiksha
        </span>
      </span>
    </div>
  )
}

function InsideInvitation() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#fbf7ef]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(255,255,255,.9)_0%,transparent_34%),radial-gradient(circle_at_86%_82%,rgba(218,194,155,.36)_0%,transparent_36%)]" />

      <div className="absolute left-[-30px] top-[-18px] scale-110">
        <FloralCluster />
      </div>

      <div className="absolute right-[-28px] bottom-[-8px] rotate-180 scale-110">
        <FloralCluster />
      </div>

      <div className="absolute right-2 top-3 rotate-[24deg] scale-90 opacity-90">
        <SmallFloralBranch />
      </div>

      <div className="absolute bottom-6 left-[-20px] rotate-[-16deg] opacity-90">
        <WhiteEmbossedLeaves />
      </div>

      <div className="relative flex h-full w-full items-center justify-center px-6 text-center">
        <div className="relative max-w-3xl">
          {/* Main arch */}
          <div className="absolute left-1/2 top-1/2 h-[620px] w-[82vw] max-w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-t-full border border-[#a87533]/70 border-b-transparent" />

          <p className="relative mb-6 text-[10px] uppercase tracking-[0.42em] text-[#9b7445] sm:text-xs">
            Together with their families
          </p>

          <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[#a87533]/70 bg-white/35 font-serif text-3xl italic text-[#704c28] shadow-sm backdrop-blur">
            D&P
          </div>

          <h1 className="relative font-serif text-5xl font-light leading-tight text-[#5d3d24] sm:text-7xl md:text-8xl">
            Dnyanesh
            <span className="block py-2 text-4xl italic text-[#a87533] md:text-5xl">
              &
            </span>
            Pratiksha
          </h1>

          <p className="relative mx-auto mt-6 max-w-xl text-sm uppercase tracking-[0.18em] text-[#8b6a46] sm:text-base">
            Invite you to their wedding celebration
          </p>

          <div className="relative mx-auto my-8 h-px max-w-sm bg-gradient-to-r from-transparent via-[#b68a48] to-transparent" />

          <p className="relative mx-auto max-w-xl text-sm leading-7 text-[#6f5b47] sm:text-base">
            With hearts full of joy, we request your presence as we celebrate
            love, blessings, and the beginning of our beautiful forever.
          </p>
        </div>
      </div>
    </div>
  )
}

function FloralCluster() {
  return (
    <div className="relative h-56 w-56 sm:h-64 sm:w-64">
      {/* Gold leaves */}
      <span className="absolute left-28 top-9 h-9 w-4 rotate-[38deg] rounded-full bg-[linear-gradient(90deg,#9b6e24,#f1d17b,#9b6e24)]" />
      <span className="absolute left-36 top-20 h-10 w-4 rotate-[68deg] rounded-full bg-[linear-gradient(90deg,#9b6e24,#f1d17b,#9b6e24)]" />
      <span className="absolute left-16 top-34 h-10 w-4 rotate-[-35deg] rounded-full bg-[linear-gradient(90deg,#9b6e24,#f1d17b,#9b6e24)]" />
      <span className="absolute left-42 top-38 h-9 w-4 rotate-[115deg] rounded-full bg-[linear-gradient(90deg,#9b6e24,#f1d17b,#9b6e24)]" />

      {/* Large roses */}
      <Rose className="absolute left-10 top-14 h-24 w-24" />
      <Rose className="absolute left-36 top-32 h-20 w-20" />

      {/* Small white flowers */}
      <Flower className="absolute left-28 top-7 h-10 w-10" />
      <Flower className="absolute left-8 top-120 h-9 w-9" />
      <Flower className="absolute left-98 top-20 h-8 w-8" />

      {/* Fine branches */}
      <span className="absolute left-20 top-26 h-[120px] w-px rotate-[52deg] bg-[#9f7a3a]/55" />
      <span className="absolute left-30 top-34 h-[100px] w-px rotate-[78deg] bg-[#9f7a3a]/45" />
    </div>
  )
}

function SmallFloralBranch() {
  return (
    <div className="relative h-52 w-52">
      <span className="absolute left-24 top-6 h-36 w-px rotate-[32deg] bg-[#9f7a3a]/55" />
      <span className="absolute left-20 top-20 h-28 w-px rotate-[62deg] bg-[#9f7a3a]/45" />

      <Flower className="absolute left-18 top-10 h-10 w-10" />
      <Flower className="absolute left-34 top-26 h-9 w-9" />
      <Flower className="absolute left-8 top-34 h-8 w-8" />

      <span className="absolute left-32 top-10 h-8 w-3 rotate-[54deg] rounded-full bg-[linear-gradient(90deg,#9b6e24,#f2d78c,#9b6e24)]" />
      <span className="absolute left-14 top-26 h-8 w-3 rotate-[-35deg] rounded-full bg-[linear-gradient(90deg,#9b6e24,#f2d78c,#9b6e24)]" />
      <span className="absolute left-42 top-40 h-8 w-3 rotate-[85deg] rounded-full bg-[linear-gradient(90deg,#9b6e24,#f2d78c,#9b6e24)]" />
    </div>
  )
}

function Rose({ className = '' }: { className?: string }) {
  return (
    <span
      className={`${className} rounded-full bg-[radial-gradient(circle_at_50%_50%,#fff_0_8%,#f7efe2_9%_18%,#fff_19%_27%,#e9dcc8_28%_38%,#fff_39%_50%,#d6bd9b_51%_58%,transparent_59%)] shadow-[0_8px_18px_rgba(120,83,45,.16)]`}
    />
  )
}

function Flower({ className = '' }: { className?: string }) {
  return (
    <span
      className={`${className} rounded-full bg-[radial-gradient(circle,#d4a857_0_9%,#fff_10%_24%,transparent_25%),radial-gradient(circle_at_50%_12%,#fff_0_18%,transparent_19%),radial-gradient(circle_at_88%_50%,#fff_0_18%,transparent_19%),radial-gradient(circle_at_50%_88%,#fff_0_18%,transparent_19%),radial-gradient(circle_at_12%_50%,#fff_0_18%,transparent_19%)] drop-shadow-[0_5px_8px_rgba(105,78,45,.16)]`}
    />
  )
}

function WhiteEmbossedLeaves() {
  return (
    <div className="relative h-56 w-48">
      <span className="absolute left-20 top-10 h-36 w-px rotate-[-28deg] bg-white/70 shadow-[0_0_8px_rgba(128,103,72,.18)]" />

      {Array.from({ length: 8 }).map((_, index) => (
        <span
          key={index}
          className="absolute h-14 w-6 rounded-full bg-[linear-gradient(135deg,#fff,#e8dfd2)] opacity-80 shadow-[inset_2px_2px_5px_rgba(255,255,255,.9),0_4px_10px_rgba(100,82,56,.13)]"
          style={{
            left: `${52 + (index % 2) * 34}px`,
            top: `${18 + index * 18}px`,
            transform: `rotate(${index % 2 === 0 ? -48 : 42}deg)`,
          }}
        />
      ))}
    </div>
  )
}
