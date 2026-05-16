'use client'

import { createContext, useContext, useEffect, useRef, useState } from 'react'

interface AudioContextType {
  isPlaying: boolean
  togglePlay: () => void
  isMuted: boolean
  toggleMute: () => void
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [hasInteracted, setHasInteracted] = useState(false)

  // Handle first user interaction to unmute audio
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true)
        setIsMuted(false)
        if (audioRef.current) {
          audioRef.current.muted = false
          audioRef.current.play().catch(() => {
            // Autoplay might be blocked, let user control it
          })
          setIsPlaying(true)
        }
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

  // Autoplay muted on load
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = true
      audioRef.current
        .play()
        .catch(() => {
          // Autoplay failed, will play on first interaction
        })
    }
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
      if (!isMuted && !isPlaying) {
        audioRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  return (
    <AudioContext.Provider value={{ isPlaying, togglePlay, isMuted, toggleMute }}>
      {/* Audio element - using a royalty-free wedding music file */}
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
