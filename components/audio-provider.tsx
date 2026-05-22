'use client'

import { createContext, useContext, useEffect, useRef, useState } from 'react'

interface AudioContextType {
  isPlaying: boolean
  togglePlay: () => void
  isMuted: boolean
  toggleMute: () => void
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

const TARGET_VOLUME = 0.25
const FADE_DURATION = 2500
const FADE_INTERVAL = 50

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [hasInteracted, setHasInteracted] = useState(false)

  const clearFade = () => {
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current)
      fadeIntervalRef.current = null
    }
  }

  const fadeVolume = (
    from: number,
    to: number,
    onComplete?: () => void
  ) => {
    const audio = audioRef.current
    if (!audio) return

    clearFade()

    const steps = FADE_DURATION / FADE_INTERVAL
    const volumeStep = (to - from) / steps
    let currentStep = 0

    audio.volume = from

    fadeIntervalRef.current = setInterval(() => {
      currentStep += 1

      const nextVolume = from + volumeStep * currentStep
      audio.volume = Math.min(Math.max(nextVolume, 0), TARGET_VOLUME)

      if (currentStep >= steps) {
        clearFade()
        audio.volume = to
        onComplete?.()
      }
    }, FADE_INTERVAL)
  }

  const playSlowly = () => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0
    audio.muted = false

    audio
      .play()
      .then(() => {
        setIsPlaying(true)
        fadeVolume(0, TARGET_VOLUME)
      })
      .catch(() => {
        // Autoplay might be blocked, let user control it
      })
  }

  const stopSlowly = () => {
    const audio = audioRef.current
    if (!audio) return

    fadeVolume(audio.volume, 0, () => {
      audio.muted = true
      setIsPlaying(false)
    })
  }

  // Handle first user interaction to start audio slowly
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true)
        setIsMuted(false)
        playSlowly()
      }
    }

    const events = ['click', 'scroll', 'touchstart', 'keydown']

    events.forEach((event) => {
      document.addEventListener(event, handleFirstInteraction, { once: true })
    })

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, handleFirstInteraction)
      })
    }
  }, [hasInteracted])

  // Autoplay muted on load at 25% max volume
  useEffect(() => {
    const audio = audioRef.current

    if (audio) {
      audio.volume = TARGET_VOLUME
      audio.muted = true

      audio.play().catch(() => {
        // Autoplay failed, will play on first interaction
      })
    }

    return () => {
      clearFade()
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      stopSlowly()
    } else {
      setIsMuted(false)
      playSlowly()
    }
  }

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isMuted) {
      setIsMuted(false)
      playSlowly()
    } else {
      setIsMuted(true)
      stopSlowly()
    }
  }

  return (
    <AudioContext.Provider value={{ isPlaying, togglePlay, isMuted, toggleMute }}>
      <audio
        ref={audioRef}
        loop
        crossOrigin="anonymous"
        src="wedding_music.mp3"
      />
      {children}
    </AudioContext.Provider>
  )
}

export function useAudio() {
  const context = useContext(AudioContext)

  if (context === undefined) {
    throw new Error('useAudio must be used within AudioProvider')
  }

  return context
}
