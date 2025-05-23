"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type GalleryImage = {
  src: string
  alt: string
  width: number
  height: number
  gridSpan?: string
}

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [sliderIndex, setSliderIndex] = useState(0)

  const galleryImages: GalleryImage[] = [
    {
      src: "/placeholder-p4zdy.png",
      alt: "Dashboard analytics visualization",
      width: 800,
      height: 600,
      gridSpan: "col-span-2 row-span-2",
    },
    {
      src: "/team-collaboration.png",
      alt: "Team collaboration feature",
      width: 600,
      height: 400,
    },
    {
      src: "/mobile-app-interface.png",
      alt: "Mobile app interface",
      width: 600,
      height: 400,
    },
    {
      src: "/placeholder-cksas.png",
      alt: "Calendar scheduling tool",
      width: 600,
      height: 400,
      gridSpan: "col-span-2",
    },
    {
      src: "/data-reporting-charts.png",
      alt: "Data reporting charts",
      width: 600,
      height: 400,
    },
    {
      src: "/placeholder-nngiu.png",
      alt: "User profile settings",
      width: 600,
      height: 400,
    },
    {
      src: "/user-activity-feed.png",
      alt: "User activity feed",
      width: 600,
      height: 400,
    },
    {
      src: "/notification-center.png",
      alt: "Notification center interface",
      width: 600,
      height: 400,
    },
  ]

  const sliderImages = [
    {
      src: "/project-management-board.png",
      alt: "Project management board",
      width: 600,
      height: 400,
    },
    {
      src: "/team-chat-interface.png",
      alt: "Team chat interface",
      width: 600,
      height: 400,
    },
    {
      src: "/document-collaboration.png",
      alt: "Document collaboration",
      width: 600,
      height: 400,
    },
    {
      src: "/placeholder-3gfxb.png",
      alt: "Analytics dashboard dark mode",
      width: 600,
      height: 400,
    },
    {
      src: "/task-management-interface.png",
      alt: "Task management interface",
      width: 600,
      height: 400,
    },
    {
      src: "/calendar-with-events.png",
      alt: "Calendar view with events",
      width: 600,
      height: 400,
    },
  ]

  const allImages = [...galleryImages, ...sliderImages]

  const openImagePreview = (index: number, isFromSlider = false) => {
    setSelectedImage(isFromSlider ? galleryImages.length + index : index)
  }

  const closeImagePreview = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: "next" | "prev") => {
    if (selectedImage === null) return

    if (direction === "next") {
      setSelectedImage((selectedImage + 1) % allImages.length)
    } else {
      setSelectedImage((selectedImage - 1 + allImages.length) % allImages.length)
    }
  }

  const handleSliderScroll = (direction: "next" | "prev") => {
    if (direction === "next") {
      setSliderIndex((prevIndex) => (prevIndex + 1) % (sliderImages.length - 2))
    } else {
      setSliderIndex((prevIndex) => (prevIndex - 1 + (sliderImages.length - 2)) % (sliderImages.length - 2))
    }
  }

  return (
    <section id="gallery" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
            Gallery
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">See SaaSify in Action</h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Explore our intuitive interface and powerful features through these screenshots.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative group overflow-hidden rounded-xl border border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur",
                image.gridSpan || "",
              )}
            >
              <div
                className="relative aspect-video w-full h-full overflow-hidden cursor-pointer"
                onClick={() => openImagePreview(index)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="rounded-full bg-background/80 p-2">
                    <Maximize2 className="size-5" />
                    <span className="sr-only">View larger</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Slider */}
        <div className="relative mt-12 mb-4">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">More Screenshots</h3>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full size-8"
                onClick={() => handleSliderScroll("prev")}
              >
                <ChevronLeft className="size-4" />
                <span className="sr-only">Previous</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full size-8"
                onClick={() => handleSliderScroll("next")}
              >
                <ChevronRight className="size-4" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${sliderIndex * 33.33}%)` }}
            >
              {sliderImages.map((image, index) => (
                <div
                  key={index}
                  className="min-w-[33.33%] md:min-w-[33.33%] px-2 transition-opacity duration-300"
                  style={{ opacity: index >= sliderIndex && index < sliderIndex + 3 ? 1 : 0.5 }}
                >
                  <div className="relative group overflow-hidden rounded-xl border border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                    <div
                      className="relative aspect-video w-full overflow-hidden cursor-pointer"
                      onClick={() => openImagePreview(index, true)}
                    >
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="rounded-full bg-background/80 p-2">
                          <Maximize2 className="size-5" />
                          <span className="sr-only">View larger</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Preview Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
              onClick={closeImagePreview}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-5xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src={allImages[selectedImage].src || "/placeholder.svg"}
                    alt={allImages[selectedImage].alt}
                    width={allImages[selectedImage].width * 1.5}
                    height={allImages[selectedImage].height * 1.5}
                    className="object-contain w-full h-full"
                  />
                </div>

                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute top-2 right-2 rounded-full bg-black/50 hover:bg-black/70 text-white"
                  onClick={closeImagePreview}
                >
                  <X className="size-5" />
                  <span className="sr-only">Close</span>
                </Button>

                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70 text-white"
                  onClick={() => navigateImage("prev")}
                >
                  <ChevronLeft className="size-5" />
                  <span className="sr-only">Previous</span>
                </Button>

                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70 text-white"
                  onClick={() => navigateImage("next")}
                >
                  <ChevronRight className="size-5" />
                  <span className="sr-only">Next</span>
                </Button>

                <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black/50 py-2 px-4 mx-auto w-fit rounded-full">
                  <p className="text-sm">{allImages[selectedImage].alt}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
