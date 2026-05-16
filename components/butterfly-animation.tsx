'use client'

import { useEffect, useState } from 'react'

interface Butterfly {
  id: number
  left: number
  duration: number
  size: number
  delay: number
}

export function ButterflyAnimation() {
  const [butterflies, setButterflies] = useState<Butterfly[]>([])

  useEffect(() => {
    const createBatch = (startId: number) => {
      const items: Butterfly[] = []

      for (let i = 0; i < 8; i++) {
        items.push({
          id: startId + i,
          left: Math.random() * 100,
          duration: 14 + Math.random() * 8,
          size: 28 + Math.random() * 24,
          delay: i * 1.5, // stagger butterflies
        })
      }

      return items
    }

    // initial butterflies
    setButterflies(createBatch(0))

    // repeat new butterflies before previous batch ends
    const interval = setInterval(() => {
      setButterflies((prev) => [
        ...prev.filter((b) => b.id > Date.now() - 60000), // cleanup old
        ...createBatch(Date.now()),
      ])
    }, 9000) // roughly when butterflies reach ~60%

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
      {butterflies.map((butterfly) => (
        <div
          key={butterfly.id}
          className="absolute will-change-transform"
          style={{
            left: `${butterfly.left}%`,
            top: '-100px',
            animation: `
              butterfly-flight ${butterfly.duration}s linear ${butterfly.delay}s forwards
            `,
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
              opacity: 0.95,
              filter:
                'drop-shadow(0 0 12px rgba(231, 180, 165, 0.7)) hue-rotate(-10deg) saturate(1.3)',
              animation: 'wing-flutter 0.7s ease-in-out infinite',
              userSelect: 'none',
            }}
          />
        </div>
      ))}

      <style jsx>{`
        @keyframes butterfly-flight {
          0% {
            opacity: 0;
            transform: translateY(-10vh) translateX(0px) rotate(-8deg);
          }

          10% {
            opacity: 1;
          }

          25% {
            transform: translateY(25vh) translateX(70px) rotate(10deg);
          }

          50% {
            transform: translateY(50vh) translateX(-60px) rotate(-10deg);
          }

          75% {
            transform: translateY(75vh) translateX(90px) rotate(8deg);
          }

          100% {
            opacity: 0;
            transform: translateY(120vh) translateX(-50px) rotate(-8deg);
          }
        }

        @keyframes wing-flutter {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
          }

          50% {
            transform: scale(1.12) rotate(2deg);
          }
        }
      `}</style>
    </div>
  )
}