'use client'

import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react'

export function EventDetails() {
  const events = [
    {
      name: 'Mehndi Ceremony',
      date: 'May 28, 2025',
      time: '6:00 PM - 11:00 PM',
      location: 'Grand Palace Banquet Hall',
      description: 'An evening of henna, music, and celebration with our beloved family',
      color: 'from-[#E8B8B8] to-[#F4C2C2]',
      icon: '🎨',
    },
    {
      name: 'Haldi Ceremony',
      date: 'May 29, 2025',
      time: '5:00 PM - 8:00 PM',
      location: 'Maharaja Heritage Villa',
      description: 'Traditional turmeric ceremony blessing us with happiness and prosperity',
      color: 'from-[#E6D7BE] to-[#F0DDD8]',
      icon: '✨',
    },
    {
      name: 'Wedding Ceremony',
      date: 'May 30, 2025',
      time: '4:00 PM Onwards',
      location: 'Shree Temple Gardens',
      description: 'The sacred union of two souls and families in a divine ceremony',
      color: 'from-[#D9A39E] to-[#E8B8B8]',
      icon: '💍',
    },
    {
      name: 'Reception',
      date: 'May 30, 2025',
      time: '7:00 PM - 11:30 PM',
      location: 'Grand Palace Banquet Hall',
      description: 'Dinner, dancing, and merriment celebrating our love with everyone dear',
      color: 'from-[#F4C2C2] to-[#E8D4D0]',
      icon: '🎉',
    },
  ]

  return (
    <section id="events" className="py-16 md:py-28 bg-gradient-to-b from-background via-[#FFF8F5] to-secondary/10 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-40 h-40 bg-[#B76E79]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#E6D7BE]/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-16 md:mb-20 space-y-4 animate-slide-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-light text-primary uppercase tracking-widest">Wedding Events</span>
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-primary tracking-tight">
            Celebrate With Us
          </h2>
          <p className="text-foreground/60 font-light text-lg max-w-2xl mx-auto">
            Join us for an unforgettable series of celebrations filled with love, joy, and cherished moments
          </p>
        </div>

        {/* Events timeline */}
        <div className="space-y-6 md:space-y-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`relative bg-gradient-to-br ${event.color} rounded-2xl p-8 md:p-10 border border-[#B76E79]/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden group`}>
                {/* Decorative elements with animations */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/30 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/20 rounded-full -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-700" />
                
                {/* Sparkle effects */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-twinkle" />
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-twinkle" style={{ animationDelay: '0.5s' }} />
                
                <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8">
                  {/* Icon with animation */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/60 rounded-full text-3xl md:text-4xl backdrop-blur-sm shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 will-change-transform">
                      <span className="group-hover:animate-bounce inline-block">{event.icon}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl md:text-3xl font-light text-[#4A4A4A] mb-4">
                      {event.name}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-3 bg-white/50 rounded-lg px-4 py-3 backdrop-blur-sm">
                        <Calendar size={18} className="text-[#B76E79] flex-shrink-0" />
                        <span className="text-[#4A4A4A] font-light text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white/50 rounded-lg px-4 py-3 backdrop-blur-sm">
                        <Clock size={18} className="text-[#B76E79] flex-shrink-0" />
                        <span className="text-[#4A4A4A] font-light text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white/50 rounded-lg px-4 py-3 backdrop-blur-sm">
                        <MapPin size={18} className="text-[#B76E79] flex-shrink-0" />
                        <span className="text-[#4A4A4A] font-light text-sm">{event.location}</span>
                      </div>
                    </div>

                    <p className="text-[#4A4A4A] leading-relaxed font-light text-base md:text-lg">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
