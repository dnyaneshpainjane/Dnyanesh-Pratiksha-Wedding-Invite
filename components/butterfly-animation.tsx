'use client'

import { useEffect, useState } from 'react'

interface Butterfly {
  id: number
  left: number
  delay: number
  duration: number
  size: number
}

export function ButterflyAnimation() {
  const [butterflies, setButterflies] = useState<Butterfly[]>([])

  useEffect(() => {
    const generateButterflies = () => {
      const newButterflies: Butterfly[] = []
      for (let i = 0; i < 8; i++) {
        newButterflies.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 4,
          duration: 15 + Math.random() * 8,
          size: 24 + Math.random() * 16,
        })
      }
      setButterflies(newButterflies)
    }

    generateButterflies()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
      {butterflies.map((butterfly) => (
        <div
          key={butterfly.id}
          className="absolute will-change-transform"
          style={{
            left: `${butterfly.left}%`,
            top: '-40px',
            animation: `butterfly-flight ${butterfly.duration}s cubic-bezier(0.34, 1.56, 0.64, 1) ${butterfly.delay}s infinite`,
          }}
        >
          <svg
            width={butterfly.size}
            height={butterfly.size}
            viewBox="0 0 100 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Left wings */}
            <path
              d="M 30 40 Q 10 20 15 5 Q 25 15 30 35 Q 35 45 30 40"
              fill="#E6B8B0"
              opacity="0.85"
            />
            <path
              d="M 28 38 Q 12 25 18 10 Q 24 18 28 35"
              fill="#F4C2C2"
              opacity="0.7"
            />

            {/* Right wings */}
            <path
              d="M 70 40 Q 90 20 85 5 Q 75 15 70 35 Q 65 45 70 40"
              fill="#E6B8B0"
              opacity="0.85"
            />
            <path
              d="M 72 38 Q 88 25 82 10 Q 76 18 72 35"
              fill="#F4C2C2"
              opacity="0.7"
            />

            {/* Body */}
            <ellipse cx="50" cy="40" rx="6" ry="12" fill="#B76E79" opacity="0.9" />
            <circle cx="50" cy="30" r="4" fill="#B76E79" opacity="0.9" />

            {/* Antenna */}
            <line x1="50" y1="28" x2="48" y2="15" stroke="#B76E79" strokeWidth="1.5" opacity="0.8" />
            <line x1="50" y1="28" x2="52" y2="15" stroke="#B76E79" strokeWidth="1.5" opacity="0.8" />

            {/* Wing details */}
            <circle cx="20" cy="18" r="2" fill="#D9A39E" opacity="0.6" />
            <circle cx="80" cy="18" r="2" fill="#D9A39E" opacity="0.6" />
          </svg>
        </div>
      ))}

      <style jsx>{`
        @keyframes butterfly-flight {
          0% {
            opacity: 0;
            transform: translateY(0px) translateX(0px) rotateZ(-15deg);
          }
          10% {
            opacity: 1;
          }
          50% {
            opacity: 1;
            transform: translateY(50vh) translateX(150px) rotateZ(15deg);
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(100vh) translateX(250px) rotateZ(-15deg);
          }
        }
      `}</style>
    </div>
  )
}
