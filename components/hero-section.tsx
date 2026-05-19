'use client'

import { CountdownTimer } from './countdown-timer'
import { ButterflyAnimation } from './butterfly-animation'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative py-12 md:py-20 lg:py-24 overflow-hidden"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-background.jpg)' }}
      />

      {/* Elegant overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8F5]/85 via-[#FFF8F5]/90 to-[#FFF8F5]/95" />

      {/* Animated gradient accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#B76E79]/[0.08] rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E6D7BE]/[0.08] rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      {/* Butterflies */}
      <ButterflyAnimation />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 md:space-y-10 lg:space-y-12">
          {/* Decorative opening */}
          <div className="flex justify-center gap-3 opacity-60 animate-fade-in">
            <div
              className="w-2 h-2 rounded-full bg-primary animate-bounce"
              style={{ animationDelay: '0s' }}
            />
            <div
              className="w-2 h-2 rounded-full bg-secondary animate-bounce"
              style={{ animationDelay: '0.2s' }}
            />
            <div
              className="w-2 h-2 rounded-full bg-primary animate-bounce"
              style={{ animationDelay: '0.4s' }}
            />
          </div>

          {/* Main heading */}
          <div className="space-y-5 md:space-y-7 animate-slide-up">
            <h1 className="text-primary drop-shadow-sm">
              <span className="block font-serif italic text-5xl md:text-7xl lg:text-8xl font-light tracking-wide leading-tight">
                Dnyanesh
              </span>

              <span className="my-1 md:my-2 flex items-center justify-center gap-4">
                <span className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-[#B76E79]/60" />
                <span className="font-serif italic text-3xl md:text-5xl lg:text-6xl font-light text-[#B76E79]">
                  &
                </span>
                <span className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-[#B76E79]/60" />
              </span>

              <span className="block font-serif italic text-5xl md:text-7xl lg:text-8xl font-light tracking-wide leading-tight">
                Pratiksha
              </span>
            </h1>

            <div className="space-y-2">
              <p className="text-sm md:text-lg text-[#B76E79] font-light tracking-[0.35em] uppercase text-center">
                Our Love Story
              </p>
              <p className="text-base md:text-xl text-primary/70 font-light italic">
                Celebrating Love & Unity
              </p>
            </div>
          </div>

          {/* Animated divider */}
          <div className="flex justify-center items-center gap-4 opacity-50 py-2">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary" />
            <svg
              className="w-5 h-5 text-primary animate-bounce"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-primary" />
          </div>

          {/* Subheading */}
          <p className="text-base md:text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in">
            Together with our families, we joyfully invite you to celebrate our
            wedding as we unite in love and commitment. Join us for a memorable
            celebration of life, culture, and happiness that will be etched in
            our hearts forever.
          </p>

          {/* Countdown Timer */}
          <div
            className="mt-12 md:mt-16 lg:mt-20 animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            <CountdownTimer />
          </div>

          {/* CTA Button */}
          <div className="pt-4 animate-bounce-slow">
            <a
              href="#events"
              className="inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-[#B76E79] to-[#D4888F] text-white font-light rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-base md:text-lg tracking-wide"
            >
              Explore Events
              <svg
                className="w-5 h-5 ml-2 animate-pulse"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 10l5 5 5-5" />
              </svg>
            </a>
          </div>

          {/* Decorative bottom line */}
          <div className="flex justify-center items-center gap-4 opacity-40 pt-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
