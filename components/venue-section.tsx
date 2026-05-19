'use client'

import { MapPin, Navigation } from 'lucide-react'

export function VenueSection() {
  return (
    <section
      id="venue"
      className="relative overflow-hidden py-14 md:py-20 px-5 bg-gradient-to-b from-[#FFF8F5] via-background to-[#FFE8E0]"
    >
      {/* Decorative background elements */}
      <div className="absolute top-8 right-12 h-52 w-52 rounded-full bg-[#E6D7BE]/10 blur-3xl" />
      <div className="absolute bottom-8 left-12 h-52 w-52 rounded-full bg-[#B76E79]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section heading */}
        <div className="text-center mb-10 md:mb-12 space-y-3 animate-slide-up">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Navigation className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium text-primary uppercase tracking-[0.22em]">
              Join Us
            </span>
            <Navigation className="w-4 h-4 text-primary" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-primary tracking-tight">
            Our Wedding Venue
          </h2>

          <p className="text-foreground/70 font-normal text-sm md:text-base max-w-xl mx-auto leading-7">
            We would be delighted to celebrate our special day with you at this beautiful venue.
          </p>
        </div>

        {/* Single Venue Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          {/* Venue Card */}
          <div
            className="group animate-fade-in-up flex flex-col"
            style={{ animationDelay: '0ms' }}
          >
            <div className="relative flex-1 overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="bg-gradient-to-br from-white to-[#FFF8F5] p-5 md:p-6 space-y-4">
                <div>
                  <div className="inline-flex items-center gap-2 mb-3 bg-[#F4C2C2]/30 px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B76E79]" />
                    <span className="text-[10px] md:text-xs font-medium text-[#B76E79] uppercase tracking-[0.2em]">
                      Engagement & Wedding Ceremony
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl font-medium text-[#4A4A4A]">
                    Jagdamba Lawns
                  </h3>
                </div>

                <p className="text-foreground/70 font-normal leading-6 text-sm md:text-base">
                  A magnificent venue set amidst lush greenery, offering the perfect backdrop for
                  our celebration of love and commitment.
                </p>

                <div className="space-y-3 pt-3 border-t border-[#B76E79]/20">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-[#B76E79] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] text-[#B76E79] mb-1">
                        Address
                      </p>
                      <p className="text-[#4A4A4A] font-normal leading-6 text-sm md:text-base">
                        Kotamgoan, Yeola, Nashik - 423401
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Jagdamba+lawns+Yeola+Nashik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 mt-3 bg-gradient-to-r from-[#B76E79] to-[#D4888F] text-white text-sm md:text-base font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  <Navigation size={17} />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div
            className="group animate-fade-in-up relative overflow-hidden rounded-2xl shadow-lg"
            style={{ animationDelay: '100ms' }}
          >
            <iframe
              title="Wedding Venue Location"
              width="100%"
              height="360"
              frameBorder="0"
              style={{ border: 0, borderRadius: '1rem' }}
              src="https://www.google.com/maps?q=Jagdamba+lawns+Yeola+Nashik&z=15&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl h-[320px] md:h-[360px] lg:h-full min-h-[320px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#B76E79]/10 to-transparent pointer-events-none rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
