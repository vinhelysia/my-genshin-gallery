"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Download } from "lucide-react"

interface ImageItem {
  src: string
  alt: string
}

const images: ImageItem[] = [
  { src: "/images/1.png", alt: "" },
  { src: "/images/2.png", alt: "" },
  { src: "/images/3.png", alt: "" },
  { src: "/images/4.png", alt: "" },
  { src: "/images/5.png", alt: "" },
  { src: "/images/6.png", alt: "" },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleImageClick = (image: ImageItem) => {
    setSelectedImage(image)
    setIsModalOpen(true)
  }

  const handleDownload = async () => {
    if (selectedImage) {
      try {
        const response = await fetch(selectedImage.src)
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = selectedImage.alt.replace(/\s/g, "-").toLowerCase() + ".png"
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        window.URL.revokeObjectURL(url)
      } catch (error) {
        console.error("Failed to download image:", error)
      }
    }
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Koyomi's Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
            onClick={() => handleImageClick(image)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={400}
              height={250}
              className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-semibold">{image.alt}</span>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl w-full p-0 transition-all duration-300 ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
          {selectedImage && (
            <div className="relative">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="w-full h-auto object-contain max-h-[80vh]"
              />
              <div className="absolute bottom-4 right-4">
                <Button onClick={handleDownload} className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
