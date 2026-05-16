'use client'

import { useEffect, useState } from 'react'

interface Butterfly {
  id: number
  size: number
  duration: number
  delay: number
  startX: number
  endX: number
  midX1: number
  midX2: number
  rotate: number
}

export function ButterflyAnimation() {
  const [butterflies, setButterflies] = useState<Butterfly[]>([])

  useEffect(() => {
    const createButterflies = () => {
      const items: Butterfly[] = []

      for (let i = 0; i < 10; i++) {
        items.push({
          id: i,
          size: 28 + Math.random() * 28,
          duration: 12 + Math.random() * 12,
          delay: Math.random() * 5,
          startX: Math.random() * 100,
          midX1: Math.random() * 100,
          midX2: Math.random() * 100,
          endX: Math.random() * 100,
          rotate: -25 + Math.random() * 50,
        })
      }

      setButterflies(items)
    }

    createButterflies()
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-30">
      {butterflies.map((butterfly) => (
        <div
          key={butterfly.id}
          className="absolute top-[-10%]"
          style={{
            left: `${butterfly.startX}%`,
            animation: `
              butterfly-fly-${butterfly.id} ${butterfly.duration}s linear ${butterfly.delay}s infinite
            `,
            willChange: 'transform, opacity',
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
                'drop-shadow(0 0 10px rgba(231,180,165,0.7)) hue-rotate(-10deg) saturate(1.4)',
              animation: 'wing-flutter 0.6s ease-in-out infinite',
              userSelect: 'none',
            }}
          />
          <style jsx>{`
            @keyframes butterfly-fly-${butterfly.id} {
              0% {
                transform: translate(
                    0vw,
                    0vh
                  )
                  rotate(${butterfly.rotate}deg);
                opacity: 0;
              }

              10% {
                opacity: 1;
              }

              25% {
                transform: translate(
                    ${butterfly.midX1 - butterfly.startX}vw,
                    25vh
                  )
                  rotate(${butterfly.rotate + 20}deg);
              }

              50% {
                transform: translate(
                    ${butterfly.midX2 - butterfly.startX}vw,
                    50vh
                  )
                  rotate(${butterfly.rotate - 15}deg);
              }

              75% {
                transform: translate(
                    ${butterfly.endX - butterfly.startX}vw,
                    75vh
                  )
                  rotate(${butterfly.rotate + 15}deg);
              }

              100% {
                transform: translate(
                    ${Math.random() * 100 - butterfly.startX}vw,
                    120vh
                  )
                  rotate(${butterfly.rotate}deg);
                opacity: 0;
              }
            }
          `}</style>
        </div>
      ))}

      <style jsx>{`
        @keyframes wing-flutter {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
          }

          25% {
            transform: scale(1.08) rotate(2deg);
          }

          50% {
            transform: scale(1.12) rotate(-2deg);
          }

          75% {
            transform: scale(1.05) rotate(1deg);
          }
        }
      `}</style>
    </div>
  )
}