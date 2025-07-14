import { MusicProvider } from "@/context/music-context"
import { UserSelectionModal } from "@/components/user-selection-modal"
import { MusicPlayer } from "@/components/music-player"
import { SettingsDialog } from "@/components/settings-dialog"
import { Gallery } from "@/components/gallery"

export default function Home() {
  return (
    <MusicProvider>
      <div className="relative min-h-screen bg-background text-foreground">
        <SettingsDialog />
        <Gallery />
        <UserSelectionModal />
        <MusicPlayer />
      </div>
    </MusicProvider>
  )
}
