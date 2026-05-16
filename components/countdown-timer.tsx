"use client"

import { useEffect, useState, useRef } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calculateTimeLeft(): TimeLeft {
  const weddingDate = new Date("2026-06-27T12:42:00")
  const difference = weddingDate.getTime() - new Date().getTime()

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  return { days: 0, hours: 0, minutes: 0, seconds: 0 }
}

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setMounted(true)
    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 px-6 bg-primary text-primary-foreground"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm tracking-[0.3em] uppercase opacity-80 mb-4 font-sans font-light">
            Counting Down
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-12 text-balance">
            One step closer to forever
          </h2>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {timeUnits.map((unit) => (
            <div key={unit.label} className="text-center">
              <div className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-2">
                {mounted ? String(unit.value).padStart(2, "0") : "00"}
              </div>
              <p className="text-sm tracking-[0.2em] uppercase opacity-70 font-sans font-light">
                {unit.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
