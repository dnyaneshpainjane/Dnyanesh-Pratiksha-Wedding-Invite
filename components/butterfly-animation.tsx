'use client'

import { useMemo } from 'react'

interface Butterfly {
  id: number
  left: number
  top: number
  duration: number
  delay: number
  size: number
  drift: number
}

export function ButterflyAnimation() {
  const butterflies = useMemo<Butterfly[]>(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 12 + Math.random() * 12,
      delay: Math.random() * -20, // instantly visible
      size: 28 + Math.random() * 30,
      drift: -180 + Math.random() * 360,
    }))
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-20">
      {butterflies.map((butterfly) => (
        <div
          key={butterfly.id}
          className="absolute will-change-transform"
          style={{
            left: `${butterfly.left}%`,
            top: `${butterfly.top}%`,
            animation: `
              butterfly-float-${butterfly.id}
              ${butterfly.duration}s
              ease-in-out
              ${butterfly.delay}s
              infinite alternate
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
              opacity: 0.9,
              filter:
                'drop-shadow(0 0 14px rgba(231,180,165,0.7)) hue-rotate(-8deg) saturate(1.25)',
              animation: 'wing-flutter 0.7s ease-in-out infinite',
            }}
          />
        </div>
      ))}

      <style jsx>{`
        @keyframes wing-flutter {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
          }

          50% {
            transform: scale(1.08) rotate(3deg);
          }
        }

        ${butterflies
          .map(
            (b) => `
          @keyframes butterfly-float-${b.id} {
            0% {
              transform:
                translate(0px, 0px)
                rotate(-8deg);
            }

            25% {
              transform:
                translate(${b.drift * 0.3}px, -80px)
                rotate(10deg);
            }

            50% {
              transform:
                translate(${b.drift}px, 60px)
                rotate(-12deg);
            }

            75% {
              transform:
                translate(${b.drift * 0.5}px, -40px)
                rotate(8deg);
            }

            100% {
              transform:
                translate(${b.drift * -0.3}px, 80px)
                rotate(-6deg);
            }
          }
        `
          )
          .join('\n')}
      `}</style>
    </div>
  )
}