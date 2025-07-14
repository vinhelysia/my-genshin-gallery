"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Settings } from "lucide-react"
import { useMusic } from "@/context/music-context"

export function SettingsDialog() {
  const { isMusicPlaying, toggleMusic, resetUserSelection, currentUser } = useMusic()

  const handleSwitchUser = () => {
    resetUserSelection()
  }

  return (
    <div className="absolute top-4 right-4 z-10">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full bg-transparent">
            <Settings className="h-5 w-5" />
            <span className="sr-only">Open settings</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>Settings</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-center justify-between">
            <Label htmlFor="music-mode">Background Music</Label>
            <Switch
              id="music-mode"
              checked={isMusicPlaying && currentUser !== "None"}
              onCheckedChange={toggleMusic}
              disabled={currentUser === "None"}
            />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button variant="ghost" className="w-full justify-start p-0 h-auto" onClick={handleSwitchUser}>
              Switch User ({currentUser})
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
