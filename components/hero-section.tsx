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
      className="relative overflow-hidden py-12 md:py-16 lg:py-20"
    >
      {/* Ganpati Icon */}
      <div className="relative z-20 mb-4 flex justify-center">
        <img
          src="/ganpati1.png"
          alt="Ganpati"
          className="h-20 w-20 object-contain opacity-90 drop-shadow-md animate-fade-in md:h-24 md:w-24"
        />
      </div>

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-background.jpg)' }}
      />

      {/* Luxury Peach Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8ebe5]/88 via-[#f4d6cb]/92 to-[#efc1b3]/96" />

      {/* Soft Peach Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-[#d9a18f]/20 blur-3xl md:h-96 md:w-96 animate-pulse" />

        <div
          className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-[#fff1eb]/30 blur-3xl md:h-96 md:w-96 animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <ButterflyAnimation />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 text-center md:space-y-8">
          {/* Decorative dots */}
          <div className="flex justify-center gap-3 opacity-60 animate-fade-in">
            <div
              className="h-1.5 w-1.5 rounded-full bg-[#b87968] animate-bounce"
              style={{ animationDelay: '0s' }}
            />
            <div
              className="h-1.5 w-1.5 rounded-full bg-[#d9b4a8] animate-bounce"
              style={{ animationDelay: '0.2s' }}
            />
            <div
              className="h-1.5 w-1.5 rounded-full bg-[#b87968] animate-bounce"
              style={{ animationDelay: '0.4s' }}
            />
          </div>

          {/* Couple Names */}
          <div className="space-y-4 md:space-y-5 animate-slide-up">
            <div className="mb-3">
              <span
                className={`${pinyon.className} block text-7xl leading-[0.95] text-[#7b5148] drop-shadow-sm md:text-8xl lg:text-[8.5rem]`}
              >
                Dnyanesh
              </span>

              <span
                className={`${pinyon.className} block my-1 text-4xl leading-none text-[#c18d7c] md:my-2 md:text-5xl lg:text-6xl`}
              >
                &
              </span>

              <span
                className={`${pinyon.className} block text-7xl leading-[0.95] text-[#7b5148] drop-shadow-sm md:text-8xl lg:text-[8.5rem]`}
              >
                Pratiksha
              </span>
            </div>

            <div className="space-y-1.5 md:space-y-2">
              <p className="text-center text-xs font-medium uppercase tracking-[0.32em] text-[#b87968] md:text-sm">
                Our Story
              </p>

              <p className="text-sm font-light italic text-[#8f6d65] md:text-base">
                Celebrating Love & Unity
              </p>
            </div>
          </div>

          {/* Heart Divider */}
          <div className="flex items-center justify-center gap-3 py-1 opacity-80">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#b87968]/70" />

            <div className="relative flex h-8 w-8 items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-[#b87968]/10 blur-md" />

              <svg
                className="relative h-4.5 w-4.5 text-[#b87968] animate-bounce"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>

            <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#b87968]/70" />
          </div>

          {/* Description */}
          <p className="mx-auto max-w-3xl text-sm font-light leading-relaxed text-[#7c655d] md:text-base animate-fade-in">
            Together with our families, we joyfully invite you to celebrate our
            wedding as we unite in love and commitment. Join us for a memorable
            celebration of life, culture, and happiness that will be etched in
            our hearts forever.
          </p>

          {/* Countdown */}
          <div
            className="mt-8 md:mt-10 animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            <CountdownTimer />
          </div>
        </div>
      </div>
    </section>
  )
}
