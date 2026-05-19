"use client"

import { useEffect, useRef, useState } from "react"
import {
  Clock,
  Calendar,
  Sparkles,
  Heart,
  Music,
  Flower2,
  Gem,
  MapPin,
} from "lucide-react"

const events = [
  {
    icon: Gem,
    emoji: "💍",
    title: "Engagement Ceremony",
    date: "26th Jun 2026",
    time: "6:30 PM",
    description:
      "A beautiful beginning to our forever, surrounded by blessings and family.",
    gradient: "from-[#fff1f2] via-[#fde2e4] to-[#f8cfd4]",
  },
  {
    icon: Music,
    emoji: "💃",
    title: "Sangeet",
    date: "26th Jun 2026",
    time: "8:30 PM",
    description:
      "An evening of music, dance, dinner, laughter, and joyful memories.",
    gradient: "from-[#fff7ed] via-[#ffe4d6] to-[#f4c2c2]",
  },
  {
    icon: Flower2,
    emoji: "🏵️",
    title: "Haldi Ceremony",
    date: "27th Jun 2026",
    time: "7:30 AM",
    description:
      "A sacred turmeric ritual filled with sunshine, blessings, and tradition.",
    gradient: "from-[#fffbea] via-[#f8e7b8] to-[#ecd79f]",
  },
  {
    icon: Heart,
    emoji: "❤️",
    title: "Wedding",
    date: "27th Jun 2026",
    time: "12:42 PM",
    description:
      "The sacred union of two souls and two families, celebrated with love.",
    gradient: "from-[#fff1f2] via-[#f6c8ce] to-[#d9a39e]",
  },
]

export function EventDetails() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.18 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="events"
      ref={sectionRef}
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
        {/* Heading */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full border border-[#b76e79]/20 bg-white/65 shadow-sm shadow-[#b76e79]/10 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#b76e79]" />
            <p className="text-[11px] tracking-[0.24em] uppercase text-[#b76e79] font-sans font-medium">
              When & Where
            </p>
            <Sparkles className="w-3.5 h-3.5 text-[#b76e79]" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-[#8f4e58] mb-4 text-balance">
            Event Details
          </h2>

          <p className="max-w-xl mx-auto text-[#4a4a4a]/70 font-sans font-normal leading-7 text-sm md:text-base">
            Join us for two unforgettable days filled with{" "}
            <span className="font-semibold text-[#8f4e58]">rituals</span>,{" "}
            <span className="font-semibold text-[#8f4e58]">music</span>,{" "}
            <span className="font-semibold text-[#8f4e58]">blessings</span>,
            laughter, and love.
          </p>

          <div className="relative w-20 h-px bg-[#b76e79]/35 mx-auto mt-7 mb-10">
            <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#b76e79]/70" />
          </div>
        </div>

        {/* Shared location */}
        <div
          className={`mb-7 flex justify-center transition-all duration-1000 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#b76e79]/15 bg-white/70 px-5 py-2.5 shadow-sm shadow-[#b76e79]/10 backdrop-blur-md">
            <MapPin className="w-4 h-4 text-[#b76e79]" />
            <span className="text-sm md:text-base text-[#3f3434] font-sans font-semibold">
              Jagdamba Lawns, Yeola
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {events.map((event, index) => (
            <div
              key={event.title}
              className={`group relative transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-7"
              }`}
              style={{ transitionDelay: `${150 + index * 100}ms` }}
            >
              <div
                className={`relative h-full overflow-hidden rounded-3xl border border-white/70 bg-gradient-to-br ${event.gradient} p-[1px] shadow-lg shadow-[#b76e79]/10 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#b76e79]/20`}
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                <div className="relative h-full rounded-[calc(1.5rem-1px)] bg-white/60 p-5 md:p-6 backdrop-blur-xl">
                  <div className="absolute -right-3 -top-5 text-6xl opacity-10 transition-all duration-700 group-hover:scale-110 group-hover:rotate-12">
                    {event.emoji}
                  </div>

                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-[#b76e79]/20 blur-md transition-all duration-500 group-hover:scale-125" />
                      <div className="relative w-11 h-11 rounded-full bg-white/80 border border-white shadow-md flex items-center justify-center transition-all duration-500 group-hover:rotate-6 group-hover:scale-105">
                        <event.icon className="w-5 h-5 text-[#b76e79]" />
                      </div>
                    </div>

                    <div>
                      <p className="text-[10px] tracking-[0.22em] uppercase text-[#b76e79]/75 font-sans font-semibold mb-1">
                        Celebration {String(index + 1).padStart(2, "0")}
                      </p>

                      <h3 className="font-serif text-xl md:text-2xl font-medium text-[#3f3434]">
                        {event.title}
                      </h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 mb-5">
                    <InfoRow
                      icon={<Calendar className="w-4 h-4" />}
                      label={event.date}
                    />
                    <InfoRow
                      icon={<Clock className="w-4 h-4" />}
                      label={event.time}
                    />
                  </div>

                  <p className="text-[#4a4a4a]/75 font-sans font-normal leading-6 text-sm md:text-base text-pretty">
                    {event.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2.5">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b76e79]/30 to-[#b76e79]/10" />
                    <Heart className="w-3.5 h-3.5 text-[#b76e79]/60 fill-[#b76e79]/25" />
                    <div className="h-px flex-1 bg-gradient-to-r from-[#b76e79]/10 via-[#b76e79]/30 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div
          className={`mt-10 text-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
          }`}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-2.5 px-5 py-3 rounded-full border border-[#b76e79]/15 bg-white/65 shadow-sm shadow-[#b76e79]/10 backdrop-blur-md">
            <Heart className="w-4 h-4 text-[#b76e79] fill-[#b76e79]/20" />
            <span className="text-sm text-[#4a4a4a]/75 font-sans font-medium">
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
    <div className="flex items-center gap-2.5 rounded-2xl bg-white/60 border border-white/70 px-3.5 py-2.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white/85 hover:translate-x-0.5">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#b76e79]/10 text-[#b76e79]">
        {icon}
      </span>

      <span className="text-[#3f3434] font-sans text-sm md:text-base font-semibold">
        {label}
      </span>
    </div>
  )
}
