'use client'

import { MapPin, Navigation, Sparkles } from 'lucide-react'

export function VenueSection() {
  return (
    <section
      id="venue"
      className="relative overflow-hidden py-16 md:py-24 px-5 bg-[radial-gradient(circle_at_top,#fff8f5_0%,#fffaf8_42%,#f8ebe6_100%)]"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-56 w-56 rounded-full bg-[#f4c2c2]/25 blur-3xl animate-float" />
        <div className="absolute top-36 -right-24 h-64 w-64 rounded-full bg-[#e6d7be]/30 blur-3xl animate-float-delayed" />
        <div className="absolute bottom-10 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#b76e79]/10 blur-3xl animate-pulse-soft" />

        <span className="absolute left-[8%] top-[18%] text-2xl text-[#b76e79]/20 animate-twinkle">
          ✦
        </span>
        <span className="absolute right-[10%] top-[26%] text-3xl text-[#b76e79]/15 animate-orbit">
          ✧
        </span>
        <span className="absolute left-[14%] bottom-[18%] text-2xl text-[#c9a34e]/25 animate-twinkle">
          ❀
        </span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section heading */}
        <div className="text-center transition-all duration-1000 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full border border-[#b76e79]/20 bg-white/65 shadow-sm shadow-[#b76e79]/10 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#b76e79]" />
            <p className="text-[11px] tracking-[0.24em] uppercase text-[#b76e79] font-sans font-medium">
              Join Us
            </p>
            <Sparkles className="w-3.5 h-3.5 text-[#b76e79]" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-[#8f4e58] mb-4 text-balance">
            Our Wedding Venue
          </h2>

          <p className="max-w-xl mx-auto text-[#4a4a4a]/70 font-sans font-normal leading-7 text-sm md:text-base">
            We would be delighted to celebrate our special day at Jagdamba Lawns.
          </p>

          <div className="relative w-20 h-px bg-[#b76e79]/35 mx-auto mt-7 mb-10">
            <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#b76e79]/70" />
          </div>
        </div>

        {/* Shared location pill */}
        <div className="mb-7 flex justify-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#b76e79]/15 bg-white/70 px-5 py-2.5 shadow-sm shadow-[#b76e79]/10 backdrop-blur-md">
            <MapPin className="w-4 h-4 text-[#b76e79]" />
            <span className="text-sm md:text-base text-[#3f3434] font-sans font-semibold">
              Kotamgoan, Yeola, Nashik - 423401
            </span>
          </div>
        </div>

        {/* Venue layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          {/* Venue Card */}
          <div className="group animate-fade-in-up flex flex-col">
            <div className="relative h-full overflow-hidden rounded-3xl border border-white/70 bg-gradient-to-br from-[#fff1f2] via-[#fde2e4] to-[#f8cfd4] p-[1px] shadow-lg shadow-[#b76e79]/10 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#b76e79]/20">
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

              <div className="relative h-full rounded-[calc(1.5rem-1px)] bg-white/60 p-5 md:p-6 backdrop-blur-xl">
                <div className="absolute -right-3 -top-5 text-6xl opacity-10 transition-all duration-700 group-hover:scale-110 group-hover:rotate-12">
                  📍
                </div>

                <div className="flex items-center gap-3.5 mb-5">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-[#b76e79]/20 blur-md transition-all duration-500 group-hover:scale-125" />
                    <div className="relative w-11 h-11 rounded-full bg-white/80 border border-white shadow-md flex items-center justify-center transition-all duration-500 group-hover:rotate-6 group-hover:scale-105">
                      <Navigation className="w-5 h-5 text-[#b76e79]" />
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] tracking-[0.22em] uppercase text-[#b76e79]/75 font-sans font-semibold mb-1">
                      Engagement & Wedding
                    </p>
                    <h3 className="font-serif text-xl md:text-2xl font-medium text-[#3f3434]">
                      Jagdamba Lawns
                    </h3>
                  </div>
                </div>

                <p className="text-[#4a4a4a]/75 font-sans font-normal leading-6 text-sm md:text-base text-pretty">
                  A magnificent venue set amidst lush greenery, offering the perfect backdrop for
                  our celebration of <span className="font-semibold text-[#8f4e58]">love</span> and{' '}
                  <span className="font-semibold text-[#8f4e58]">commitment</span>.
                </p>

                <div className="mt-5 rounded-2xl bg-white/60 border border-white/70 px-3.5 py-2.5 shadow-sm backdrop-blur-sm">
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#b76e79]/10 text-[#b76e79]">
                      <MapPin className="w-4 h-4" />
                    </span>
                    <div>
                      <p className="text-[10px] tracking-[0.22em] uppercase text-[#b76e79]/75 font-sans font-semibold mb-1">
                        Address
                      </p>
                      <p className="text-[#3f3434] font-sans text-sm md:text-base font-semibold leading-6">
                        Kotamgoan, Yeola, Nashik - 423401
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Jagdamba+lawns+Yeola+Nashik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#b76e79] to-[#d4888f] px-5 py-3 text-sm md:text-base font-semibold text-white shadow-md shadow-[#b76e79]/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <div className="mt-5 flex items-center gap-2.5">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b76e79]/30 to-[#b76e79]/10" />
                  <MapPin className="w-3.5 h-3.5 text-[#b76e79]/60" />
                  <div className="h-px flex-1 bg-gradient-to-r from-[#b76e79]/10 via-[#b76e79]/30 to-transparent" />
                </div>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div
            className="group animate-fade-in-up relative overflow-hidden rounded-3xl border border-white/70 bg-gradient-to-br from-[#fff1f2] via-[#fde2e4] to-[#f8cfd4] p-[1px] shadow-lg shadow-[#b76e79]/10 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#b76e79]/20"
            style={{ animationDelay: '100ms' }}
          >
            <div className="relative h-[330px] md:h-[380px] lg:h-full min-h-[330px] overflow-hidden rounded-[calc(1.5rem-1px)] bg-white/60 backdrop-blur-xl">
              <iframe
                title="Wedding Venue Location"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps?q=Jagdamba+lawns+Yeola+Nashik&z=15&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale-[10%] transition-all duration-500 group-hover:scale-[1.02] group-hover:grayscale-0"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#b76e79]/15 via-transparent to-white/5" />

              <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2.5 rounded-full border border-white/70 bg-white/75 px-4 py-2 shadow-sm backdrop-blur-md">
                <MapPin className="w-4 h-4 text-[#b76e79]" />
                <span className="text-sm text-[#3f3434] font-sans font-semibold">
                  Jagdamba Lawns
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
