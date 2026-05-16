'use client'

import { useEffect, useState } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Wedding date: May 30, 2025 at 4:00 PM
      const weddingDate = new Date('2026-06-27T12:42:00').getTime()
      const now = new Date().getTime()
      const difference = weddingDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  const TimeUnit = ({ label, value }: { label: string; value: number }) => (
    <div className="flex flex-col items-center gap-2 animate-fade-in">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#B76E79]/20 to-[#E6D7BE]/20 rounded-lg blur-lg" />
        <div className="relative bg-gradient-to-br from-[#F4C2C2] to-[#E8D4D0] rounded-lg px-4 md:px-6 py-3 md:py-4 shadow-lg border border-[#B76E79]/20">
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#B76E79] font-serif tabular-nums">
            {String(value).padStart(2, '0')}
          </div>
        </div>
      </div>
      <span className="text-xs md:text-sm font-light text-foreground/70 uppercase tracking-widest">
        {label}
      </span>
    </div>
  )

  return (
    <div className="w-full py-8 md:py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#B76E79]/5 via-transparent to-[#E6D7BE]/5 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h3 className="font-serif text-2xl md:text-3xl font-light text-primary mb-2">
            The Big Day Is Coming
          </h3>
          <p className="text-foreground/60 font-light text-sm md:text-base">
            May 30, 2025 • 4:00 PM
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
          <TimeUnit label="Days" value={timeLeft.days} />
          <TimeUnit label="Hours" value={timeLeft.hours} />
          <TimeUnit label="Minutes" value={timeLeft.minutes} />
          <TimeUnit label="Seconds" value={timeLeft.seconds} />
        </div>
      </div>
    </div>
  )
}