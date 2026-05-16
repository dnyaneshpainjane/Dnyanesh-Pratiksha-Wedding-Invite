'use client'

import { useEffect, useState } from 'react'

interface Petal {
  id: number
  left: number
  delay: number
  duration: number
  size: number
  swayAmount: number
  color: string
}

export function PetalAnimation() {
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    const colors = ['#F4C2C2', '#E6B8B0', '#D9A39E', '#E8D4D0', '#F0DDD8']
    
    const generatePetals = () => {
      const newPetals: Petal[] = []
      // Generate 40+ petals for continuous coverage
      for (let i = 0; i < 45; i++) {
        newPetals.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 3,
          duration: 8 + Math.random() * 6,
          size: 8 + Math.random() * 24,
          swayAmount: 30 + Math.random() * 50,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }
      setPetals(newPetals)
    }

    generatePetals()

    // Regenerate petals continuously
    const interval = setInterval(generatePetals, 12000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute will-change-transform"
          style={{
            left: `${petal.left}%`,
            top: '-30px',
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            animation: `petal-fall-${petal.swayAmount} ${petal.duration}s linear ${petal.delay}s infinite`,
          }}
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full drop-shadow-sm"
            style={{ color: petal.color }}
            fill={petal.color}
          >
            <path
              d="M50,15 Q75,35 80,65 Q50,75 20,65 Q25,35 50,15 Z"
              opacity="0.9"
            />
            <path
              d="M50,25 Q70,40 72,60 Q50,68 28,60 Q30,40 50,25 Z"
              opacity="0.7"
            />
            <circle cx="50" cy="50" r="4" opacity="0.8" fill="currentColor" />
          </svg>
        </div>
      ))}

      <style jsx>{`
        ${Array.from({ length: 10 }, (_, i) => {
          const swayAmount = 30 + i * 5
          return `
            @keyframes petal-fall-${swayAmount} {
              0% {
                opacity: 1;
                transform: translateY(0px) translateX(0px) rotate(0deg);
              }
              25% {
                opacity: 1;
                transform: translateY(25vh) translateX(${swayAmount}px) rotate(90deg);
              }
              50% {
                opacity: 0.8;
                transform: translateY(50vh) translateX(-${swayAmount / 2}px) rotate(180deg);
              }
              75% {
                opacity: 0.6;
                transform: translateY(75vh) translateX(${swayAmount / 3}px) rotate(270deg);
              }
              100% {
                opacity: 0;
                transform: translateY(100vh) translateX(${swayAmount / 4}px) rotate(360deg);
              }
            }
          `
        }).join('')}
      `}</style>
    </div>
  )
}
