'use client'

import { MapPin, Navigation, Sparkles } from 'lucide-react'

export function VenueSection() {
  return (
    <section
      id="venue"
      className="relative overflow-hidden py-14 md:py-20 px-5 bg-gradient-to-b from-[#fff8f5] via-background to-[#ffe8e0]"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 right-6 h-48 w-48 rounded-full bg-[#e6d7be]/25 blur-3xl animate-float" />
        <div className="absolute bottom-10 -left-16 h-52 w-52 rounded-full bg-[#b76e79]/10 blur-3xl animate-float-delayed" />
        <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f4c2c2]/15 blur-3xl animate-pulse-soft" />

        <span className="absolute left-[8%] top-[18%] text-xl text-[#b76e79]/20 animate-twinkle">
          ✦
        </span>
        <span className="absolute right-[10%] top-[28%] text-2xl text-[#b76e79]/15 animate-orbit">
          ✧
        </span>
        <span className="absolute left-[14%] bottom-[18%] text-xl text-[#c9a34e]/25 animate-twinkle">
          ❀
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section heading */}
        <div className="text-center animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-3 rounded-full border border-[#b76e79]/20 bg-white/60 shadow-sm shadow-[#b76e79]/10 backdrop-blur-md">
            <Navigation className="w-3 h-3 text-[#b76e79]" />
            <p className="text-[10px] tracking-[0.24em] uppercase text-[#b76e79] font-sans font-light">
              Join Us
            </p>
            <Sparkles className="w-3 h-3 text-[#b76e79]" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[#8f4e58] mb-3 text-balance">
            Our Wedding Venue
          </h2>

          <p className="max-w-lg mx-auto text-[#4a4a4a]/60 font-sans font-light leading-6 text-xs md:text-sm">
            We would be delighted to celebrate our special day with you at this beautiful venue.
          </p>

          <div className="relative w-16 h-px bg-[#b76e79]/30 mx-auto mt-6 mb-9">
            <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#b76e79]/60" />
          </div>
        </div>

        {/* Venue layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
          {/* Venue Card */}
          <div className="group animate-fade-in-up flex flex-col">
            <div className="relative h-full overflow-hidden rounded-2xl border border-white/70 bg-gradient-to-br from-[#fff1f2] via-[#fde2e4] to-[#f8cfd4] p-[1px] shadow-md shadow-[#b76e79]/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#b76e79]/20">
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

              <div className="relative h-full rounded-[calc(1rem-1px)] bg-white/60 p-4 md:p-5 backdrop-blur-xl">
                <div className="absolute -right-3 -top-5 text-5xl opacity-10 transition-all duration-700 group-hover:scale-110 group-hover:rotate-12">
                  📍
                </div>

                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 mb-3 rounded-full border border-[#b76e79]/15 bg-white/55 px-3 py-1.5 shadow-sm backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#b76e79]" />
                    <span className="text-[9px] tracking-[0.2em] uppercase text-[#b76e79]/80 font-sans font-light">
                      Engagement & Wedding
                    </span>
                  </div>

                  <h3 className="font-serif text-lg md:text-xl font-light text-[#3f3434]">
                    Jagdamba Lawns
                  </h3>
                </div>

                <p className="mb-4 text-[#4a4a4a]/70 font-sans font-light leading-5 text-xs md:text-sm text-pretty">
                  A magnificent venue set amidst lush greenery, offering the perfect backdrop for
                  our celebration of love and commitment.
                </p>

                <div className="mb-5 rounded-xl border border-white/70 bg-white/55 px-3 py-3 shadow-sm backdrop-blur-sm">
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#b76e79]/10 text-[#b76e79]">
                      <MapPin className="w-3.5 h-3.5" />
                    </span>

                    <div>
                      <p className="mb-0.5 text-[9px] tracking-[0.2em] uppercase text-[#b76e79]/75 font-sans font-light">
                        Address
                      </p>
                      <p className="text-xs md:text-sm text-[#3f3434] font-sans font-light leading-5">
                        Kotamgoan, Yeola, Nashik - 423401
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Jagdamba+lawns+Yeola+Nashik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#b76e79] to-[#d4888f] px-4 py-2.5 text-xs md:text-sm font-light text-white shadow-md shadow-[#b76e79]/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>

                <div className="mt-4 flex items-center gap-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b76e79]/25 to-[#b76e79]/10" />
                  <MapPin className="w-3 h-3 text-[#b76e79]/50" />
                  <div className="h-px flex-1 bg-gradient-to-r from-[#b76e79]/10 via-[#b76e79]/25 to-transparent" />
                </div>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div
            className="group animate-fade-in-up relative overflow-hidden rounded-2xl border border-white/70 bg-white/60 p-[1px] shadow-md shadow-[#b76e79]/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#b76e79]/20"
            style={{ animationDelay: '100ms' }}
          >
            <div className="relative h-[280px] md:h-[320px] lg:h-full min-h-[280px] overflow-hidden rounded-[calc(1rem-1px)]">
              <iframe
                title="Wedding Venue Location"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps?q=Jagdamba+lawns+Yeola+Nashik&z=15&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale-[15%] transition-all duration-500 group-hover:scale-[1.02] group-hover:grayscale-0"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#b76e79]/15 via-transparent to-white/5" />

              <div className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/75 px-3 py-1.5 shadow-sm backdrop-blur-md">
                <MapPin className="w-3.5 h-3.5 text-[#b76e79]" />
                <span className="text-[10px] md:text-xs text-[#4a4a4a]/70 font-sans font-light">
                  Jagdamba Lawns, Yeola
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
