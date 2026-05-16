'use client'

import { MapPin, Navigation } from 'lucide-react'

export function VenueSection() {
  return (
    <section id="venue" className="py-16 md:py-28 bg-gradient-to-b from-[#FFF8F5] via-background to-[#FFE8E0] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 right-20 w-72 h-72 bg-[#E6D7BE]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-20 w-72 h-72 bg-[#B76E79]/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-16 md:mb-20 space-y-4 animate-slide-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Navigation className="w-5 h-5 text-primary" />
            <span className="text-sm font-light text-primary uppercase tracking-widest">Join Us</span>
            <Navigation className="w-5 h-5 text-primary" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-primary tracking-tight">
            Our Wedding Venue
          </h2>
          <p className="text-foreground/60 font-light text-lg max-w-2xl mx-auto">
            We would be delighted to celebrate our special day with you at this beautiful venue
          </p>
        </div>

        {/* Single Venue Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Venue Card */}
          <div className="group animate-fade-in-up flex flex-col" style={{ animationDelay: '0ms' }}>
            <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 flex-1">
              {/* Image placeholder with gradient */}
              {/* <div className="bg-gradient-to-br from-[#E6D7BE]/50 to-[#D9A39E]/40 h-80 md:h-96 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#B76E79]/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin size={60} className="text-[#B76E79]/20" />
                </div>
              </div> */}
              
              {/* Content */}
              <div className="bg-gradient-to-br from-white to-[#FFF8F5] p-8 md:p-10 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 mb-3 bg-[#F4C2C2]/30 px-4 py-2 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-[#B76E79]" />
                    <span className="text-sm font-light text-[#B76E79] uppercase tracking-widest">Wedding Ceremony & Reception</span>
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl font-light text-[#4A4A4A]">
                    Jagdamba Lawns
                  </h3>
                </div>

                <p className="text-foreground/70 font-light leading-relaxed text-base">
                  A magnificent venue set amidst lush greenery, offering the perfect backdrop for our celebration of love and commitment.
                </p>

                <div className="space-y-4 pt-4 border-t border-[#B76E79]/20">
                  <div className="flex items-start gap-4">
                    <MapPin size={22} className="text-[#B76E79] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-light uppercase tracking-widest text-[#B76E79] mb-1">Address</p>
                      <p className="text-[#4A4A4A] font-light leading-relaxed">
                        Kotamgoan, Yeola, Nashik - 423401
                      </p>
                    </div>
                  </div>
                </div>

                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Jagdamba+lawns+Yeola+Nashik" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 mt-6 bg-gradient-to-r from-[#B76E79] to-[#D4888F] text-white font-light rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <Navigation size={20} />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="group animate-fade-in-up relative overflow-hidden rounded-2xl shadow-xl" style={{ animationDelay: '100ms' }}>
            <iframe
              title="Wedding Venue Location"
              width="100%"
              height="500"
              frameBorder="0"
              style={{ border: 0, borderRadius: '1rem' }}
              src="https://www.google.com/maps?q=Jagdamba+lawns+Yeola+Nashik&z=15&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-t from-[#B76E79]/10 to-transparent pointer-events-none rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
