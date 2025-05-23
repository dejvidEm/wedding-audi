"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MovingText } from "@/components/moving-text"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Calculate parallax values
  const videoParallax = scrollY * 0.4 // Adjust the multiplier to control parallax intensity

  return (
    <section className="relative w-full h-screen overflow-hidden -mt-16">
      {/* Left half - white background */}
      <div className="absolute top-0 left-0 w-[40%] h-full bg-white"></div>

      {/* Right half - video background with parallax */}
      <div className="absolute top-0 right-0 w-[60%] h-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            transform: `translateY(${videoParallax}px)`,
            height: `calc(100% + ${videoParallax}px)`,
          }}
        >
          <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-05-19%20at%2019.46.09%20%28online-video-cutter.com%29-WMjMByPq3FUiTCuuja99JB5Iweihgh.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Content overlay */}
      <div className="container relative z-20 h-full flex flex-col justify-center px-4 md:px-6 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
            Your Dream Wedding
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-foreground">Create Your </span>
            <span className="text-black">
              <span className="relative inline-block">
                Perfect
                <span
                  className="absolute -bottom-0 left-0 right-0 h-[8px]"
                  style={{
                    background: "linear-gradient(90deg, hsl(36, 60%, 60%), hsl(36, 60%, 60%) 70%, transparent 100%)",
                    height: "6px",
                    borderRadius: "3px",
                    transform: "rotate(-1deg) translateY(5px)",
                    opacity: 0.9,
                    width: "120%",
                  }}
                ></span>
              </span>{" "}
              Day
            </span>
          </h1>
          <div className="mb-8">
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Let us help you plan the wedding of your dreams. From elegant venues to exquisite catering, we'll make
              your special day truly unforgettable.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="group rounded-full h-12 px-8 text-base">
              Book Consultation
              <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base">
              View Services
            </Button>
          </div>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Check className="size-4 text-primary" />
              <span>Free consultation</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="size-4 text-primary" />
              <span>Personalized planning</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="size-4 text-primary" />
              <span>Flexible packages</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
