"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type User = "Vinh" | "STD" | "Vana" | "None"

interface MusicContextType {
  currentUser: User
  isMusicPlaying: boolean
  hasUserSelected: boolean
  playlist: string[]
  selectUser: (user: User) => void
  toggleMusic: () => void
  resetUserSelection: () => void
}

const MusicContext = createContext<MusicContextType | undefined>(undefined)

const playlists: Record<User, string[]> = {
  Vinh: ["/audio/vinh/1.mp3", "/audio/vinh/2.mp3"],
  STD: ["/audio/std/1.mp3", "/audio/std/2.mp3"],
  Vana: ["/audio/vana/1.mp3", "/audio/vana/2.mp3"],
  None: [],
}

export function MusicProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User>("None")
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const [hasUserSelected, setHasUserSelected] = useState(false)
  const [playlist, setPlaylist] = useState<string[]>([])

  useEffect(() => {
    // Check localStorage for previous user selection
    const storedUser = localStorage.getItem("selectedUser") as User | null
    if (storedUser) {
      setCurrentUser(storedUser)
      setPlaylist(playlists[storedUser])
      setHasUserSelected(true)
      if (storedUser !== "None") {
        setIsMusicPlaying(true) // Auto-play if a user was previously selected and it's not "None"
      }
    }
  }, [])

  const selectUser = (user: User) => {
    setCurrentUser(user)
    setPlaylist(playlists[user])
    setHasUserSelected(true)
    localStorage.setItem("selectedUser", user)
    if (user !== "None") {
      setIsMusicPlaying(true)
    } else {
      setIsMusicPlaying(false)
    }
  }

  const toggleMusic = () => {
    setIsMusicPlaying((prev) => !prev)
  }

  const resetUserSelection = () => {
    localStorage.removeItem("selectedUser")
    setHasUserSelected(false)
    setCurrentUser("None")
    setPlaylist([])
    setIsMusicPlaying(false)
  }

  return (
    <MusicContext.Provider
      value={{
        currentUser,
        isMusicPlaying,
        hasUserSelected,
        playlist,
        selectUser,
        toggleMusic,
        resetUserSelection,
      }}
    >
      {children}
    </MusicContext.Provider>
  )
}

export function useMusic() {
  const context = useContext(MusicContext)
  if (context === undefined) {
    throw new Error("useMusic must be used within a MusicProvider")
  }
  return context
}
