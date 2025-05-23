"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const IMG_PADDING = 12

export function ParallaxFeatures() {
  return (
    <div className="bg-background">
      <TextParallaxContent
        imgUrl="/photos/tretia.webp"
        subheading="Elegance"
        heading="Timeless celebrations."
      >
        <ExampleContent
          title="Crafting unforgettable moments"
          description="Our expert wedding planners create bespoke celebrations that reflect your unique love story. From intimate gatherings to grand affairs, we ensure every detail is perfect for your special day."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="/photos/druha.webp"
        subheading="Luxury"
        heading="Exquisite details."
      >
        <ExampleContent
          title="Attention to every element"
          description="From stunning floral arrangements to gourmet cuisine, we focus on the fine details that transform a wedding into an extraordinary experience. Our commitment to excellence ensures your celebration exceeds expectations."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="/photos/prva.webp"
        subheading="Memories"
        heading="Cherished forever."
      >
        <ExampleContent
          title="Capturing magical moments"
          description="Our professional photographers and videographers artfully document your wedding day, preserving precious memories that you'll treasure for a lifetime. Every smile, tear, and celebration becomes part of your unique love story."
        />
      </TextParallaxContent>
    </div>
  )
}

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: {
  imgUrl: string
  subheading: string
  heading: string
  children: React.ReactNode
}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
        transform: "translateZ(0)",
      }}
      className="relative"
    >
      <div className="relative h-[100vh] md:h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  )
}

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
        willChange: "transform",
        transform: "translateZ(0)",
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/40"
        style={{
          opacity,
          willChange: "opacity",
        }}
      />
    </motion.div>
  )
}

const OverlayCopy = ({ subheading, heading }: { subheading: string; heading: string }) => {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0])

  return (
    <motion.div
      style={{
        y,
        opacity,
        willChange: "transform, opacity",
        transform: "translateZ(0)",
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white px-4"
    >
      <p className="mb-2 text-center text-lg md:mb-4 md:text-3xl">{subheading}</p>
      <p className="text-center text-3xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  )
}

const ExampleContent = ({
  title,
  description,
}: {
  title: string
  description: string
}) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">{title}</h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-8 text-xl text-muted-foreground md:text-2xl">{description}</p>
      <Button size="lg" className="group">
        Learn more{" "}
        <ArrowUpRight className="ml-2 size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Button>
    </div>
  </div>
)
