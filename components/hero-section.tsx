'use client'

import { CountdownTimer } from './countdown-timer'
import { ButterflyAnimation } from './butterfly-animation'
import { Pinyon_Script } from 'next/font/google'

const pinyon = Pinyon_Script({
  subsets: ['latin'],
  weight: '400',
})

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden py-12 md:py-16 lg:py-20"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-background.jpg)' }}
      />

      {/* Soft royal peach overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,247,244,0.94)_0%,rgba(248,226,218,0.93)_45%,rgba(238,194,180,0.94)_100%)]" />

      {/* Elegant radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,rgba(255,239,232,0.45)_42%,rgba(221,154,136,0.28)_100%)]" />

      {/* Decorative soft corner glows */}
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#f8cfc2]/35 blur-3xl" />
      <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[#d99b88]/25 blur-3xl" />

      {/* Ganpati Icon */}
      <div className="relative z-20 mb-6 flex justify-center">
        <img
          src="/ganpati1.png"
          alt="Ganpati"
          className="h-20 w-20 object-contain opacity-95 drop-shadow-lg animate-fade-in md:h-24 md:w-24"
        />
      </div>

      <ButterflyAnimation />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[3rem] border border-white/55 bg-white/20 px-5 py-10 text-center shadow-[0_30px_90px_rgba(135,78,65,0.16)] backdrop-blur-[2px] md:px-12 md:py-14">
          {/* Decorative dots */}
          <div className="mb-8 flex justify-center gap-3 opacity-70 animate-fade-in">
            <div className="h-1.5 w-1.5 rounded-full bg-[#b67564] animate-bounce" />
            <div
              className="h-1.5 w-1.5 rounded-full bg-[#e3b7a8] animate-bounce"
              style={{ animationDelay: '0.2s' }}
            />
            <div
              className="h-1.5 w-1.5 rounded-full bg-[#b67564] animate-bounce"
              style={{ animationDelay: '0.4s' }}
            />
          </div>

          {/* Names */}
          <div className="animate-slide-up">
            <span
              className={`${pinyon.className} block text-7xl leading-[0.95] text-[#70483f] drop-shadow-[0_4px_14px_rgba(112,72,63,0.18)] md:text-8xl lg:text-[8.5rem]`}
            >
              Dnyanesh
            </span>

            <span
              className={`${pinyon.className} my-2 block text-5xl leading-none text-[#b47a6b] md:text-6xl`}
            >
              &
            </span>

            <span
              className={`${pinyon.className} block text-7xl leading-[0.95] text-[#70483f] drop-shadow-[0_4px_14px_rgba(112,72,63,0.18)] md:text-8xl lg:text-[8.5rem]`}
            >
              Pratiksha
            </span>

            <div className="mt-8 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#b67564] md:text-sm">
                Our Story
              </p>

              <p className="text-sm font-light italic text-[#7f5f57] md:text-base">
                Celebrating Love & Unity
              </p>
            </div>
          </div>

          {/* Heart divider */}
          <div className="my-8 flex items-center justify-center gap-4 opacity-80">
            <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#b67564]/60" />

            <div className="relative flex h-9 w-9 items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-[#d79b89]/20 blur-md" />
              <svg
                className="relative h-4 w-4 text-[#b67564] animate-bounce"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>

            <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#b67564]/60" />
          </div>

          {/* Description */}
          <p className="mx-auto max-w-3xl text-sm font-light leading-8 text-[#6f5a54] md:text-base">
            Together with our families, we joyfully invite you to celebrate our
            wedding as we unite in love and commitment. Join us for a memorable
            celebration of life, culture, and happiness that will be etched in
            our hearts forever.
          </p>

          <div className="mt-10 animate-fade-in-up">
            <CountdownTimer />
          </div>
        </div>
      </div>
    </section>
  )
}
