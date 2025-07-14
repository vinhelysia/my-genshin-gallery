"use client"

import { useEffect, useRef, useState } from "react"
import { useMusic } from "@/context/music-context"

export function MusicPlayer() {
  const { isMusicPlaying, playlist, currentUser } = useMusic()
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)

  useEffect(() => {
    if (audioRef.current) {
      if (isMusicPlaying && playlist.length > 0) {
        audioRef.current.src = playlist[currentTrackIndex]
        audioRef.current.play().catch((e) => console.error("Audio play failed:", e))
      } else {
        audioRef.current.pause()
      }
    }
  }, [isMusicPlaying, playlist, currentTrackIndex, currentUser]) // Re-run when currentUser changes to reset track

  useEffect(() => {
    // Reset track index when playlist changes (e.g., user switches)
    setCurrentTrackIndex(0)
  }, [playlist])

  const handleTrackEnded = () => {
    if (playlist.length > 0) {
      setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % playlist.length)
    }
  }

  return <audio ref={audioRef} onEnded={handleTrackEnded} loop={playlist.length === 1} />
}
