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
  const [butterflies, setButterflies] = useState<Butterfly[]>([
    {
      id: 0,
      left: 10,
      delay: 0,
      duration: 18,
      size: 40,
    },
  ])

  useEffect(() => {
    const newButterflies: Butterfly[] = []

    for (let i = 0; i < 8; i++) {
      newButterflies.push({
        id: i,
        left: Math.random() * 100,
        delay: 0, // removed start delay
        duration: 15 + Math.random() * 8,
        size: 30 + Math.random() * 25,
      })
    }

    setButterflies(newButterflies)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
      {butterflies.map((butterfly) => (
        <div
          key={butterfly.id}
          className="absolute will-change-transform"
          style={{
            left: `${butterfly.left}%`,
            top: '-80px',
            animation: `butterfly-flight ${butterfly.duration}s linear infinite`,
          }}
        >
          <img
            src="butterflies.png"
            alt="butterfly"
            draggable={false}
            style={{
              width: `${butterfly.size}px`,
              height: `${butterfly.size}px`,
              objectFit: 'contain',
              opacity: 0.9, // always visible
              filter:
                'drop-shadow(0 0 12px rgba(231, 180, 165, 0.7)) hue-rotate(-10deg) saturate(1.2)',
              animation: 'wing-flutter 0.7s ease-in-out infinite',
            }}
          />
        </div>
      ))}

      <style jsx>{`
        @keyframes butterfly-flight {
          0% {
            opacity: 0.9;
            transform: translateY(-10vh) translateX(0px) rotate(-8deg);
          }

          25% {
            opacity: 0.95;
            transform: translateY(25vh) translateX(80px) rotate(10deg);
          }

          50% {
            opacity: 0.95;
            transform: translateY(50vh) translateX(-70px) rotate(-10deg);
          }

          75% {
            opacity: 0.95;
            transform: translateY(75vh) translateX(100px) rotate(8deg);
          }

          100% {
            opacity: 0.9; /* no disappearing */
            transform: translateY(110vh) translateX(-50px) rotate(-8deg);
          }
        }

        @keyframes wing-flutter {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
          }

          50% {
            transform: scale(1.1) rotate(2deg);
          }
        }
      `}</style>
    </div>
  )
}