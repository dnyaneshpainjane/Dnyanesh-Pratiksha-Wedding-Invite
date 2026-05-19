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
  const [doorOpen, setDoorOpen] = useState(false)
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
    }, 1700)

    setTimeout(() => {
      setDoorOpen(true)
    }, 2800)

    setTimeout(() => {
      setHideIntro(true)
      onClose()
    }, 8500)
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

      <button
        onClick={closeIntro}
        className="absolute right-4 top-4 z-[90] rounded-full border border-white/50 bg-white/55 p-2 text-[#6f5049] shadow-sm backdrop-blur-md transition hover:bg-white/80"
        aria-label="Close invitation"
      >
        <X size={22} />
      </button>

      <main className="relative flex min-h-screen w-full items-center justify-center">
        {/* Revealed invitation door card */}
        <section
          className={`absolute inset-x-0 top-1/2 z-10 mx-auto w-full -translate-y-1/2 px-0 transition-all duration-[2200ms] ease-[cubic-bezier(.22,1,.36,1)] ${
            showInvite
              ? 'translate-y-[-52%] scale-100 opacity-100'
              : 'translate-y-[-38%] scale-[0.96] opacity-0'
          }`}
        >
          <div className="relative mx-auto h-[72vh] min-h-[560px] w-full overflow-hidden bg-[#dcefe9] shadow-[0_32px_100px_rgba(70,54,45,.24)] md:h-[78vh] md:w-[92vw] md:max-w-[980px] md:rounded-[2rem]">
            {/* Inner glowing pattern background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(188,255,238,.65)_0%,transparent_35%),linear-gradient(180deg,#e6f4ee_0%,#d8ebe4_45%,#d7e9df_100%)]" />

            {/* Floral corners inspired by attached card */}
            <div className="absolute -left-10 -bottom-8 z-20 h-64 w-64 rotate-[-10deg] opacity-90">
              <FloralCluster />
            </div>

            <div className="absolute -right-8 -top-8 z-20 h-56 w-56 rotate-[165deg] opacity-80">
              <FloralCluster />
            </div>

            {/* Gold rope */}
            <div className="absolute left-1/2 top-7 z-30 h-3 w-[76%] -translate-x-1/2 rounded-full bg-[repeating-linear-gradient(115deg,#9b6a18_0_5px,#f4d37a_5px_10px,#b98021_10px_15px)] shadow-[0_3px_6px_rgba(80,45,13,.35)]" />

            {/* Door panel container */}
            <div className="absolute inset-x-5 bottom-5 top-14 z-10 overflow-hidden rounded-[1.2rem] border border-[#b7d1c6] bg-[#e8f5ef] shadow-inner md:inset-x-9 md:bottom-8 md:top-16">
              {/* Hidden final invite behind doors */}
              <div
                className={`absolute inset-0 z-0 flex items-center justify-center px-7 text-center transition-all duration-[1800ms] ${
                  doorOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                }`}
              >
                <div className="relative mx-auto max-w-xl rounded-[2rem] border border-[#ead9bf] bg-[#fffaf2]/90 px-7 py-10 shadow-[0_20px_70px_rgba(89,61,44,.18)] backdrop-blur-sm">
                  <p className="mb-4 text-[11px] uppercase tracking-[0.42em] text-[#a67a4f]">
                    Wedding Celebration
                  </p>

                  <h1 className="font-serif text-5xl font-light leading-[1.05] text-[#5f4436] md:text-7xl">
                    Dnyanesh
                    <span className="block py-2 text-4xl italic text-[#b78a50]">
                      &
                    </span>
                    Pratiksha
                  </h1>

                  <div className="mx-auto my-7 h-px w-36 bg-gradient-to-r from-transparent via-[#b78a50] to-transparent" />

                  <p className="mx-auto max-w-md text-sm leading-7 text-[#6d5f57] md:text-base">
                    With love in our hearts and blessings from our families, we
                    invite you to join us as we begin our forever.
                  </p>
                </div>
              </div>

              {/* Left opening door */}
              <div
                className={`absolute left-0 top-0 z-20 h-full w-1/2 origin-left overflow-hidden border-r border-[#b8cfc5] bg-[#dceee8] transition-transform duration-[2600ms] ease-[cubic-bezier(.19,1,.22,1)] ${
                  doorOpen ? 'door-left-open' : 'door-left-closed'
                }`}
              >
                <DoorPattern side="left" />
              </div>

              {/* Right opening door */}
              <div
                className={`absolute right-0 top-0 z-20 h-full w-1/2 origin-right overflow-hidden border-l border-[#b8cfc5] bg-[#dceee8] transition-transform duration-[2600ms] ease-[cubic-bezier(.19,1,.22,1)] ${
                  doorOpen ? 'door-right-open' : 'door-right-closed'
                }`}
              >
                <DoorPattern side="right" />
              </div>

              {/* Center band */}
              <div
                className={`absolute left-0 right-0 top-1/2 z-40 h-20 -translate-y-1/2 border-y border-[#c9d7cf] bg-[#e7eee7]/95 shadow-[0_8px_18px_rgba(77,69,58,.12)] transition-all duration-[1500ms] ${
                  doorOpen ? 'scale-x-0 opacity-0' : 'scale-x-100 opacity-100'
                }`}
              >
                <div className="h-full bg-[repeating-linear-gradient(45deg,rgba(142,156,135,.18)_0_2px,transparent_2px_10px)]" />
              </div>

              {/* Ornamental medallion */}
              <button
                onClick={() => setDoorOpen(true)}
                disabled={doorOpen}
                className={`absolute left-1/2 top-1/2 z-50 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center transition-all duration-[1500ms] ${
                  doorOpen
                    ? 'scale-50 opacity-0'
                    : 'scale-100 opacity-100 hover:scale-[1.03]'
                }`}
                aria-label="Open wedding card"
              >
                <span className="absolute inset-0 rounded-[42%_58%_44%_56%/55%_42%_58%_45%] bg-[radial-gradient(circle_at_35%_25%,#f9df9b_0%,#a46d26_36%,#4b301c_75%,#24160e_100%)] shadow-[0_18px_32px_rgba(46,31,20,.38),inset_4px_6px_10px_rgba(255,230,160,.35),inset_-7px_-10px_18px_rgba(30,17,9,.58)]" />

                <span className="absolute inset-[10px] rounded-full border border-[#e5c987]/60 bg-[#33261d] shadow-[inset_0_0_18px_rgba(0,0,0,.55)]" />

                <span className="absolute -left-2 top-10 h-8 w-8 rounded-full bg-[#b68034]" />
                <span className="absolute -right-1 bottom-9 h-7 w-7 rounded-full bg-[#8b5a27]" />
                <span className="absolute bottom-0 left-1/2 h-8 w-10 -translate-x-1/2 rounded-full bg-[#6f421f]" />

                <span className="absolute left-4 top-5 h-9 w-9 rounded-full bg-[#eec0c4]" />
                <span className="absolute right-6 top-7 h-7 w-7 rounded-full bg-[#d795a0]" />
                <span className="absolute bottom-7 left-7 h-7 w-7 rounded-full bg-[#f0c7cb]" />
                <span className="absolute bottom-6 right-6 h-8 w-8 rounded-full bg-[#d88d9a]" />

                <span className="relative text-center font-serif text-[15px] font-light uppercase leading-6 tracking-[0.18em] text-[#f4d884]">
                  Dnyanesh
                  <br />
                  weds
                  <br />
                  Pratiksha
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Envelope wrapper - kept same style */}
        <section
          className={`relative z-30 flex w-full justify-center transition-all duration-[2400ms] ease-[cubic-bezier(.22,1,.36,1)] ${
            showInvite
              ? 'translate-y-[34vh] scale-[0.94] opacity-0'
              : 'translate-y-0 scale-100 opacity-100'
          }`}
        >
          <div className="relative h-[420px] w-full md:h-[500px]">
            <div className="absolute inset-x-0 bottom-[72px] mx-auto h-[265px] w-full bg-[#d8dfcf] shadow-[0_35px_100px_rgba(77,61,51,.26)] md:h-[330px] md:w-[92vw] md:max-w-[980px] md:rounded-[2rem]" />

            <div className="absolute inset-x-0 bottom-[72px] mx-auto h-[265px] w-full overflow-hidden bg-[#aebf9f] shadow-[0_28px_80px_rgba(68,54,45,.28)] md:h-[330px] md:w-[92vw] md:max-w-[980px] md:rounded-[2rem]">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#7e9685_0%,#becab3_43%,#8fa38e_100%)]" />
              <div className="absolute inset-0 opacity-95 bg-[radial-gradient(circle_at_14%_68%,rgba(255,245,222,.85)_0%,transparent_15%),radial-gradient(circle_at_20%_72%,rgba(238,177,164,.7)_0%,transparent_9%),radial-gradient(circle_at_31%_58%,rgba(255,255,255,.6)_0%,transparent_12%),radial-gradient(circle_at_76%_35%,rgba(238,170,151,.58)_0%,transparent_10%),radial-gradient(circle_at_82%_39%,rgba(255,239,218,.72)_0%,transparent_9%),radial-gradient(circle_at_62%_22%,rgba(255,255,255,.28)_0%,transparent_18%)]" />

              <div className="absolute inset-0 opacity-[0.16] mix-blend-soft-light bg-[linear-gradient(110deg,rgba(255,255,255,.75)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.75)_1px,transparent_1px)] bg-[size:22px_22px]" />

              <div className="absolute inset-0">
                <div className="absolute bottom-0 left-0 h-full w-1/2 bg-gradient-to-tr from-[#6d8374]/65 via-[#8fa38e]/20 to-transparent [clip-path:polygon(0_0,100%_50%,0_100%)]" />
                <div className="absolute bottom-0 right-0 h-full w-1/2 bg-gradient-to-tl from-[#6d8374]/65 via-[#8fa38e]/20 to-transparent [clip-path:polygon(100%_0,0_50%,100%_100%)]" />
                <div className="absolute bottom-0 left-0 h-[58%] w-full bg-gradient-to-t from-[#718877]/75 to-transparent [clip-path:polygon(0_100%,50%_0,100%_100%)]" />
              </div>
            </div>

            <div
              className={`absolute inset-x-0 bottom-[260px] z-20 mx-auto h-[215px] w-full origin-bottom overflow-hidden bg-[#9fb49d] shadow-[0_18px_45px_rgba(74,54,43,.18)] transition-transform duration-[2800ms] ease-[cubic-bezier(.19,1,.22,1)] [clip-path:polygon(0_0,100%_0,50%_100%)] md:bottom-[345px] md:h-[255px] md:w-[92vw] md:max-w-[980px] md:rounded-t-[2rem] ${
                isOpening ? 'flap-open' : 'flap-closed'
              }`}
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#7f987f_0%,#c2cdb8_48%,#849983_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_66%,rgba(255,241,222,.8)_0%,transparent_15%),radial-gradient(circle_at_74%_34%,rgba(231,156,145,.52)_0%,transparent_12%),radial-gradient(circle_at_54%_20%,rgba(255,255,255,.32)_0%,transparent_22%)]" />
            </div>

            {/* Wax seal */}
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
              <span className="absolute inset-0 wax-blob bg-[radial-gradient(circle_at_34%_24%,#f1d088_0%,#c78a37_26%,#a96425_58%,#6f351d_100%)] shadow-[0_18px_28px_rgba(74,38,20,.38),inset_5px_8px_12px_rgba(255,226,158,.48),inset_-9px_-13px_18px_rgba(74,32,16,.48)]" />
              <span className="absolute left-[5%] top-[24%] h-7 w-7 rounded-full bg-[#a45f25]" />
              <span className="absolute right-[4%] top-[33%] h-8 w-8 rounded-full bg-[#b46b2a]" />
              <span className="absolute bottom-[2%] left-[35%] h-8 w-9 rounded-full bg-[#8b461f]" />
              <span className="absolute inset-[14px] rounded-full border border-[#f7dda5]/55 bg-[radial-gradient(circle_at_30%_22%,#e8bc6b_0%,#bd772f_42%,#7e3b1d_100%)] shadow-[inset_3px_5px_9px_rgba(255,229,171,.42),inset_-6px_-8px_12px_rgba(70,29,14,.5)]" />
              <span className="absolute inset-[23px] rounded-full border border-[#6e3118]/40 shadow-[inset_0_2px_4px_rgba(60,23,12,.42)]" />
              <span className="absolute inset-0 flex items-center justify-center pt-1 font-serif text-[30px] font-light tracking-wide text-[#ffe8b0] drop-shadow-[0_2px_1px_rgba(72,30,14,.8)] md:text-[36px]">
                D&P
              </span>
            </button>

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

        .door-left-closed {
          transform: perspective(1400px) rotateY(0deg);
          transform-style: preserve-3d;
        }

        .door-right-closed {
          transform: perspective(1400px) rotateY(0deg);
          transform-style: preserve-3d;
        }

        .door-left-open {
          transform: perspective(1400px) rotateY(-112deg);
          transform-style: preserve-3d;
        }

        .door-right-open {
          transform: perspective(1400px) rotateY(112deg);
          transform-style: preserve-3d;
        }

        .wax-blob {
          border-radius: 48% 52% 45% 55% / 52% 43% 57% 48%;
        }
      `}</style>
    </div>
  )
}

function DoorPattern({ side }: { side: 'left' | 'right' }) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#e7f5ef_0%,#d6ece5_100%)]" />

      {/* Jali cutout inspired pattern */}
      <div className="absolute inset-x-3 top-6 grid grid-cols-2 gap-4 md:inset-x-6 md:grid-cols-3 md:gap-5">
        {Array.from({ length: 18 }).map((_, index) => (
          <div
            key={index}
            className="relative aspect-[0.78] rounded-t-full bg-[#bdf7e9]/70 shadow-[inset_0_4px_10px_rgba(75,128,113,.26),0_1px_0_rgba(255,255,255,.8)]"
            style={{
              clipPath:
                'polygon(50% 0%, 88% 20%, 92% 62%, 50% 100%, 8% 62%, 12% 20%)',
            }}
          >
            <div className="absolute inset-[6px] bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,.55)_0%,transparent_32%),linear-gradient(135deg,rgba(78,187,164,.25),transparent)]" />
          </div>
        ))}
      </div>

      {/* Door edge shade */}
      <div
        className={`absolute inset-y-0 ${
          side === 'left' ? 'right-0' : 'left-0'
        } w-8 bg-gradient-to-r from-transparent to-black/10`}
      />

      {/* Decorative floral print */}
      <div className="absolute bottom-5 left-4 h-24 w-24 rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(237,165,170,.78)_0%,transparent_18%),radial-gradient(circle_at_56%_45%,rgba(255,224,218,.86)_0%,transparent_16%),radial-gradient(circle_at_48%_62%,rgba(125,153,105,.45)_0%,transparent_22%)] blur-[0.2px]" />
    </div>
  )
}

function FloralCluster() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute left-16 top-20 h-24 w-24 rounded-full bg-[radial-gradient(circle_at_35%_35%,#ffe0df_0%,#d98d96_38%,#8d4b57_72%,transparent_73%)]" />
      <div className="absolute left-8 top-32 h-16 w-16 rounded-full bg-[radial-gradient(circle_at_40%_35%,#fff1e7_0%,#dba29e_46%,#7f4b42_72%,transparent_73%)]" />
      <div className="absolute left-28 top-10 h-12 w-12 rounded-full bg-[radial-gradient(circle_at_40%_35%,#fff5e8_0%,#e8b8b2_46%,#87504d_72%,transparent_73%)]" />

      <div className="absolute left-4 top-20 h-20 w-8 rotate-[-35deg] rounded-full bg-[#5f7651]" />
      <div className="absolute left-28 top-32 h-20 w-8 rotate-[36deg] rounded-full bg-[#6e8058]" />
      <div className="absolute left-44 top-22 h-16 w-7 rotate-[48deg] rounded-full bg-[#4f6848]" />

      <div className="absolute left-20 top-7 h-36 w-px rotate-[38deg] bg-[#6d5b3d]" />
      <div className="absolute left-36 top-20 h-32 w-px rotate-[-28deg] bg-[#6d5b3d]" />
    </div>
  )
}
