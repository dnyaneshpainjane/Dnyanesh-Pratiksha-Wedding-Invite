"use client"

import { useEffect, useRef, useState } from "react"
import {
  MapPin,
  Clock,
  Calendar,
  Sparkles,
  Heart,
  Music,
  Flower2,
  Gem,
} from "lucide-react"

const events = [
  {
    icon: Gem,
    emoji: "💍",
    title: "Engagement Ceremony",
    date: "26th Jun 2026",
    time: "6:30 PM",
    location: "Jagdamba Lawns, Yeola",
    address: "Kotamgoan, Yeola, Nashik",
    description:
      "A beautiful beginning to our forever, surrounded by blessings, smiles, and the warmth of family.",
    gradient: "from-[#fff1f2] via-[#fde2e4] to-[#f8cfd4]",
  },
  {
    icon: Music,
    emoji: "💃",
    title: "Sangeet",
    date: "26th Jun 2026",
    time: "8:30 PM",
    location: "Jagdamba Lawns, Yeola",
    address: "Kotamgoan, Yeola, Nashik",
    description:
      "An evening of music, dance, dinner, laughter, and joyful memories with everyone dear to us.",
    gradient: "from-[#fff7ed] via-[#ffe4d6] to-[#f4c2c2]",
  },
  {
    icon: Flower2,
    emoji: "🏵️",
    title: "Haldi Ceremony",
    date: "27th Jun 2026",
    time: "7:30 AM",
    location: "Jagdamba Lawns, Yeola",
    address: "Kotamgoan, Yeola, Nashik",
    description:
      "A sacred turmeric ritual filled with sunshine, blessings, tradition, and colorful celebrations.",
    gradient: "from-[#fffbea] via-[#f8e7b8] to-[#ecd79f]",
  },
  {
    icon: Heart,
    emoji: "❤️",
    title: "Wedding",
    date: "27th Jun 2026",
    time: "12:42 PM",
    location: "Jagdamba Lawns, Yeola",
    address: "Kotamgoan, Yeola, Nashik",
    description:
      "The sacred union of two souls and two families, celebrated with love, vows, and eternal blessings.",
    gradient: "from-[#fff1f2] via-[#f6c8ce] to-[#d9a39e]",
  },
]

export function EventDetails() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.18 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="details"
      ref={sectionRef}
      className="relative overflow-hidden py-24 md:py-32 px-6 bg-[radial-gradient(circle_at_top,#fff8f5_0%,#fffaf8_42%,#f8ebe6_100%)]"
    >
      {/* Soft background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#f4c2c2]/30 blur-3xl animate-float" />
        <div className="absolute top-40 -right-24 h-80 w-80 rounded-full bg-[#e6d7be]/35 blur-3xl animate-float-delayed" />
        <div className="absolute bottom-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#b76e79]/10 blur-3xl animate-pulse-soft" />

        <span className="absolute left-[8%] top-[18%] text-3xl text-[#b76e79]/20 animate-twinkle">
          ✦
        </span>
        <span className="absolute right-[10%] top-[26%] text-4xl text-[#b76e79]/15 animate-orbit">
          ✧
        </span>
        <span className="absolute left-[14%] bottom-[18%] text-3xl text-[#c9a34e]/25 animate-twinkle">
          ❀
        </span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 mb-5 rounded-full border border-[#b76e79]/20 bg-white/60 shadow-lg shadow-[#b76e79]/10 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#b76e79]" />
            <p className="text-xs tracking-[0.35em] uppercase text-[#b76e79] font-sans font-light">
              When & Where
            </p>
            <Sparkles className="w-4 h-4 text-[#b76e79]" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl font-light text-[#8f4e58] mb-6 text-balance">
            Event Details
          </h2>

          <p className="max-w-2xl mx-auto text-[#4a4a4a]/60 font-sans font-light leading-8 text-base md:text-lg">
            Join us for two unforgettable days filled with rituals, music,
            blessings, laughter, and love.
          </p>

          <div className="relative w-28 h-px bg-[#b76e79]/30 mx-auto mt-10 mb-16">
            <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#b76e79]/60" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {events.map((event, index) => (
            <div
              key={event.title}
              className={`group relative transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${180 + index * 150}ms` }}
            >
              <div
                className={`relative h-full overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br ${event.gradient} p-[1px] shadow-xl shadow-[#b76e79]/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#b76e79]/20`}
              >
                {/* Animated shine */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                <div className="relative h-full rounded-[calc(2rem-1px)] bg-white/55 p-7 md:p-9 backdrop-blur-xl">
                  {/* Decorative emoji watermark */}
                  <div className="absolute -right-4 -top-6 text-8xl opacity-10 transition-all duration-700 group-hover:scale-125 group-hover:rotate-12">
                    {event.emoji}
                  </div>

                  {/* Top icon */}
                  <div className="flex items-center gap-4 mb-7">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-[#b76e79]/20 blur-xl transition-all duration-500 group-hover:scale-150" />
                      <div className="relative w-14 h-14 rounded-full bg-white/75 border border-white shadow-lg flex items-center justify-center transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                        <event.icon className="w-6 h-6 text-[#b76e79]" />
                      </div>
                    </div>

                    <div>
                      <p className="text-xs tracking-[0.25em] uppercase text-[#b76e79]/70 font-sans font-light mb-1">
                        Celebration {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="font-serif text-2xl md:text-3xl font-light text-[#3f3434]">
                        {event.title}
                      </h3>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="space-y-4 mb-7">
                    <InfoRow
                      icon={<Calendar className="w-4 h-4" />}
                      label={event.date}
                    />

                    <InfoRow
                      icon={<Clock className="w-4 h-4" />}
                      label={event.time}
                    />

                    <div className="flex items-start gap-3 rounded-2xl bg-white/55 border border-white/70 px-4 py-3 shadow-sm backdrop-blur-sm">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#b76e79]/10 text-[#b76e79]">
                        <MapPin className="w-4 h-4" />
                      </span>
                      <div>
                        <p className="text-[#3f3434] font-sans text-sm md:text-base">
                          {event.location}
                        </p>
                        <p className="text-[#4a4a4a]/55 text-xs md:text-sm font-sans font-light mt-0.5">
                          {event.address}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-[#4a4a4a]/70 font-sans font-light leading-relaxed text-pretty">
                    {event.description}
                  </p>

                  {/* Bottom ornamental line */}
                  <div className="mt-8 flex items-center gap-3">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b76e79]/30 to-[#b76e79]/10" />
                    <Heart className="w-4 h-4 text-[#b76e79]/50 fill-[#b76e79]/20" />
                    <div className="h-px flex-1 bg-gradient-to-r from-[#b76e79]/10 via-[#b76e79]/30 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-7 py-4 rounded-full border border-[#b76e79]/15 bg-white/60 shadow-lg shadow-[#b76e79]/10 backdrop-blur-md">
            <Heart className="w-5 h-5 text-[#b76e79] fill-[#b76e79]/20" />
            <span className="text-sm md:text-base text-[#4a4a4a]/70 font-sans font-light">
              Your presence will make our celebration even more special.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoRow({
  icon,
  label,
}: {
  icon: React.ReactNode
  label: string
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/55 border border-white/70 px-4 py-3 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white/80 hover:translate-x-1">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#b76e79]/10 text-[#b76e79]">
        {icon}
      </span>
      <span className="text-[#3f3434] font-sans text-sm md:text-base">
        {label}
      </span>
    </div>
  )
}
