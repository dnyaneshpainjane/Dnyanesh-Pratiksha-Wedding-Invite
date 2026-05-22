'use client'

import { Volume2, VolumeX } from 'lucide-react'
import { useAudio } from './audio-provider'

export function AudioPlayer() {
  const { isMuted, toggleMute } = useAudio()

  return (
    <button
      onClick={toggleMute}
      className="
        p-2.5 rounded-full
        bg-[#B76E79]
        text-white
        shadow-md
        ring-2 ring-[#E6D7BE]/70
        hover:bg-[#A85F6B]
        hover:scale-105
        transition-all duration-300
      "
      aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
      title={isMuted ? 'Unmute' : 'Mute'}
    >
      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
    </button>
  )
}
