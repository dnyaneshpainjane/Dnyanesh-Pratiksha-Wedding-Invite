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
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const TimeUnit = ({ label, value }: { label: string; value: number }) => (
    <div className="flex flex-col items-center gap-2">
      <div className="relative">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#b76e79]/15 to-[#e6d7be]/20 blur-md" />

        <div className="relative min-w-[74px] rounded-xl border border-white/70 bg-white/60 px-4 py-3 shadow-md shadow-[#b76e79]/10 backdrop-blur-md md:min-w-[86px]">
          <div className="font-serif text-2xl md:text-3xl lg:text-4xl font-light tabular-nums text-[#8f4e58]">
            {String(value).padStart(2, '0')}
          </div>
        </div>
      </div>

      <span className="text-[10px] md:text-xs font-sans font-light text-[#4a4a4a]/65 uppercase tracking-[0.24em]">
        {label}
      </span>
    </div>
  )

  return (
    <div className="relative w-full overflow-hidden px-5 py-10 md:py-14 bg-[radial-gradient(circle_at_top,#fff8f5_0%,#fffaf8_42%,#f8ebe6_100%)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-14 left-6 h-40 w-40 rounded-full bg-[#f4c2c2]/20 blur-3xl" />
        <div className="absolute bottom-0 right-8 h-44 w-44 rounded-full bg-[#e6d7be]/25 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <p className="mb-3 text-[10px] tracking-[0.24em] uppercase text-[#b76e79] font-sans font-light">
            Countdown
          </p>

          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[#8f4e58] mb-3 text-balance">
            The Big Day Is Coming
          </h3>

          <p className="text-[#4a4a4a]/60 font-sans font-light leading-6 text-xs md:text-sm">
            27 Jun 2026 • 12:42 PM
          </p>

          <div className="relative w-16 h-px bg-[#b76e79]/30 mx-auto mt-6">
            <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#b76e79]/60" />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2.5 md:gap-4">
          <TimeUnit label="Days" value={timeLeft.days} />
          <TimeUnit label="Hours" value={timeLeft.hours} />
          <TimeUnit label="Minutes" value={timeLeft.minutes} />
          <TimeUnit label="Seconds" value={timeLeft.seconds} />
        </div>
      </div>
    </div>
  )
}
