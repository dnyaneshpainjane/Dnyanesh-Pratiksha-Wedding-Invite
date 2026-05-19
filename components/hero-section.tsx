'use client'

import { CountdownTimer } from './countdown-timer'
import { ButterflyAnimation } from './butterfly-animation'

export function HeroSection() {
  return (
    <section id="hero" className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-background.jpg)' }}
      />

      {/* Elegant overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8F5]/85 via-[#FFF8F5]/90 to-[#FFF8F5]/95" />

      {/* Animated gradient accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-[#B76E79]/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-[#E6D7BE]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      {/* Butterflies */}
      <ButterflyAnimation />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 md:space-y-8">
          {/* Decorative opening */}
          <div className="flex justify-center gap-3 opacity-60 animate-fade-in">
            <div
              className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"
              style={{ animationDelay: '0s' }}
            />
            <div
              className="w-1.5 h-1.5 rounded-full bg-secondary animate-bounce"
              style={{ animationDelay: '0.2s' }}
            />
            <div
              className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"
              style={{ animationDelay: '0.4s' }}
            />
          </div>

          {/* Main heading */}
          <div className="space-y-4 md:space-y-5 animate-slide-up">
            <h1 className="text-[#8f4e58] drop-shadow-sm">
              <span className="block font-['Brachetto_Script'] text-5xl md:text-6xl lg:text-7xl font-normal leading-none tracking-wide">
                Dnyanesh
              </span>

              <span className="my-1 md:my-2 flex items-center justify-center gap-3 md:gap-4">
                <span className="h-px w-10 md:w-16 bg-gradient-to-r from-transparent to-[#B76E79]/60" />
                <span className="font-['Brachetto_Script'] text-3xl md:text-4xl lg:text-5xl font-normal text-[#B76E79] leading-none">
                  &
                </span>
                <span className="h-px w-10 md:w-16 bg-gradient-to-l from-transparent to-[#B76E79]/60" />
              </span>

              <span className="block font-['Brachetto_Script'] text-5xl md:text-6xl lg:text-7xl font-normal leading-none tracking-wide">
                Pratiksha
              </span>
            </h1>

            <div className="space-y-1.5 md:space-y-2">
              <p className="text-xs md:text-sm text-[#B76E79] font-medium tracking-[0.32em] uppercase text-center">
                Our Love Story
              </p>
              <p className="text-sm md:text-base text-primary/70 font-light italic">
                Celebrating Love & Unity
              </p>
            </div>
          </div>

          {/* Animated divider */}
          <div className="flex justify-center items-center gap-3 opacity-50 py-1">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary" />
            <svg
              className="w-4 h-4 text-primary animate-bounce"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-primary" />
          </div>

          {/* Subheading */}
          <p className="text-sm md:text-base text-foreground/70 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in">
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

          {/* CTA Button */}
          <div className="pt-2 animate-bounce-slow">
            <a
              href="#events"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-3.5 bg-gradient-to-r from-[#B76E79] to-[#D4888F] text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm md:text-base tracking-wide"
            >
              Explore Events
              <svg
                className="w-4 h-4 ml-2 animate-pulse"
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
          <div className="flex justify-center items-center gap-4 opacity-40 pt-5">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
