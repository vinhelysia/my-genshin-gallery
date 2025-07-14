"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useMusic } from "@/context/music-context"

export function UserSelectionModal() {
  const { hasUserSelected, selectUser } = useMusic()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!hasUserSelected) {
      const timer = setTimeout(() => setIsOpen(true), 500) // Smooth pop-up delay
      return () => clearTimeout(timer)
    }
  }, [hasUserSelected])

  const handleSelect = (user: "Vinh" | "STD" | "Vana" | "None") => {
    selectUser(user)
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] transition-all duration-500 ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
        <DialogHeader>
          <DialogTitle>Who are you?</DialogTitle>
          <DialogDescription>Select your name to enjoy a personalized music experience.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button onClick={() => handleSelect("Vinh")}>Vinh</Button>
          <Button onClick={() => handleSelect("STD")}>STD</Button>
          <Button onClick={() => handleSelect("Vana")}>Vana</Button>
          <Button variant="outline" onClick={() => handleSelect("None")}>
            None (No Music)
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
