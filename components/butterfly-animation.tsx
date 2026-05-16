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
          size: 30 + Math.random() * 25,
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
            top: '-80px',
            animation: `butterfly-flight ${butterfly.duration}s ease-in-out ${butterfly.delay}s infinite`,
          }}
        >
          <img
            src="/love.png"
            alt="butterfly"
            draggable={false}
            style={{
              width: `${butterfly.size}px`,
              height: `${butterfly.size}px`,
              objectFit: 'contain',
              filter:
                'drop-shadow(0 0 10px rgba(231, 180, 165, 0.6)) hue-rotate(-10deg) saturate(1.2)',
              animation: 'wing-flutter 0.8s ease-in-out infinite',
            }}
          />
        </div>
      ))}

      <style jsx>{`
        @keyframes butterfly-flight {
          0% {
            opacity: 0;
            transform: translateY(0px) translateX(0px) rotate(-10deg);
          }

          10% {
            opacity: 1;
          }

          25% {
            transform: translateY(20vh) translateX(60px) rotate(10deg);
          }

          50% {
            transform: translateY(50vh) translateX(-80px) rotate(-8deg);
          }

          75% {
            transform: translateY(75vh) translateX(120px) rotate(12deg);
          }

          100% {
            opacity: 0;
            transform: translateY(110vh) translateX(-100px) rotate(-10deg);
          }
        }

        @keyframes wing-flutter {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
          }

          50% {
            transform: scale(1.08) rotate(2deg);
          }
        }
      `}</style>
    </div>
  )
}