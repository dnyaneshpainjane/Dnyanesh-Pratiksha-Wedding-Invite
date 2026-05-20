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
      <div className="relative z-20 flex justify-center mb-4">
        <img
            src="/ganpati.png"
            alt="Ganpati"
            className="h-28 w-28 md:h-33 md:w-33 object-contain opacity-90 drop-shadow-md animate-fade-in"
        />
      </div>
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-background.jpg)' }}
      />

      {/* Elegant overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8F5]/85 via-[#FFF8F5]/90 to-[#FFF8F5]/95" />

      {/* Animated gradient accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-[#B76E79]/10 blur-3xl md:h-96 md:w-96 animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-[#E6D7BE]/10 blur-3xl md:h-96 md:w-96 animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <ButterflyAnimation />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 text-center md:space-y-8">
          {/* Decorative opening */}
          <div className="flex justify-center gap-3 opacity-60 animate-fade-in">
            <div
              className="h-1.5 w-1.5 rounded-full bg-primary animate-bounce"
              style={{ animationDelay: '0s' }}
            />
            <div
              className="h-1.5 w-1.5 rounded-full bg-secondary animate-bounce"
              style={{ animationDelay: '0.2s' }}
            />
            <div
              className="h-1.5 w-1.5 rounded-full bg-primary animate-bounce"
              style={{ animationDelay: '0.4s' }}
            />
          </div>

          {/* Names */}
          <div className="space-y-4 md:space-y-5 animate-slide-up">
            <div className="mb-3">
              <span
                className={`${pinyon.className} block text-7xl leading-[0.95] text-[#382457] drop-shadow-sm md:text-8xl lg:text-[8.5rem]`}
              >
                Dnyanesh
              </span>

              <span
                className={`${pinyon.className} block my-1 text-4xl leading-none text-[#8a8178] md:my-2 md:text-5xl lg:text-6xl`}
              >
                &
              </span>

              <span
                className={`${pinyon.className} block text-7xl leading-[0.95] text-[#382457] drop-shadow-sm md:text-8xl lg:text-[8.5rem]`}
              >
                Pratiksha
              </span>
            </div>

            <div className="space-y-1.5 md:space-y-2">
              <p className="text-center text-xs font-medium uppercase tracking-[0.32em] text-[#B76E79] md:text-sm">
                Our Story
              </p>

              <p className="text-sm font-light italic text-primary/70 md:text-base">
                Celebrating Love & Unity
              </p>
            </div>
          </div>

          {/* Heart divider */}
          <div className="flex items-center justify-center gap-3 py-1 opacity-70">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#B76E79]/60" />
          
            <div className="relative flex h-8 w-8 items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-[#B76E79]/10 blur-md" />
              <svg
                className="relative h-4.5 w-4.5 text-[#B76E79] animate-bounce"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#B76E79]/60" />
          </div>

          {/* Subheading */}
          <p className="mx-auto max-w-3xl text-sm font-light leading-relaxed text-foreground/70 md:text-base animate-fade-in">
            Together with our families, we joyfully invite you to celebrate our wedding as we unite
            in love and commitment. Join us for a memorable celebration of life, culture, and
            happiness that will be etched in our hearts forever.
          </p>

          {/* Countdown Timer */}
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
