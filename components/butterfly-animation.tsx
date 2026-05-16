'use client'

import { useMemo } from 'react'

interface Butterfly {
  id: number
  left: number
  top: number
  size: number
  duration: number
  delay: number
}

export function ButterflyAnimation() {
  const butterflies = useMemo<Butterfly[]>(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 30 + Math.random() * 25,
      duration: 10 + Math.random() * 10,
      delay: Math.random() * -20,
    }))
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-20">
      {butterflies.map((butterfly) => (
        <div
          key={butterfly.id}
          className="butterfly absolute"
          style={{
            left: `${butterfly.left}%`,
            top: `${butterfly.top}%`,
            animation: `
              move-${butterfly.id} ${butterfly.duration}s ease-in-out infinite alternate
            `,
            animationDelay: `${butterfly.delay}s`,
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
              opacity: 0.9,
              filter:
                'drop-shadow(0 0 12px rgba(231,180,165,0.7)) hue-rotate(-10deg) saturate(1.3)',
              animation: 'flutter 0.7s ease-in-out infinite',
            }}
          />
        </div>
      ))}

      <style jsx>{`
        .butterfly {
          will-change: transform;
        }

        @keyframes flutter {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
          }

          50% {
            transform: scale(1.1) rotate(4deg);
          }
        }

        ${butterflies
          .map((b) => {
            const x1 = Math.random() * 200 - 100
            const y1 = Math.random() * 200 - 100

            const x2 = Math.random() * 300 - 150
            const y2 = Math.random() * 300 - 150

            const x3 = Math.random() * 200 - 100
            const y3 = Math.random() * 200 - 100

            return `
              @keyframes move-${b.id} {
                0% {
                  transform: translate(0px, 0px) rotate(0deg);
                }

                25% {
                  transform: translate(${x1}px, ${y1}px) rotate(10deg);
                }

                50% {
                  transform: translate(${x2}px, ${y2}px) rotate(-12deg);
                }

                75% {
                  transform: translate(${x3}px, ${y3}px) rotate(8deg);
                }

                100% {
                  transform: translate(0px, 0px) rotate(-5deg);
                }
              }
            `
          })
          .join('\n')}
      `}</style>
    </div>
  )
}