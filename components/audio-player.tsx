'use client'

import { Music, Volume2, VolumeX } from 'lucide-react'
import { useAudio } from './audio-provider'

export function AudioPlayer() {
  const { isPlaying, togglePlay, isMuted, toggleMute } = useAudio()

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={toggleMute}
        className="p-2 rounded-full hover:bg-secondary/20 transition-colors text-primary"
        aria-label={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
      <button
        onClick={togglePlay}
        className="p-2 rounded-full hover:bg-secondary/20 transition-colors text-primary"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        <Music size={20} className={isPlaying ? 'animate-pulse' : ''} />
      </button>
    </div>
  )
}
