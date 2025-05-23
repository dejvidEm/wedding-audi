"use client"

import { motion } from "framer-motion"

interface MovingTextProps {
  text: string
}

export function MovingText({ text }: MovingTextProps) {
  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Removed the gradient overlay div */}
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, ease: "linear", duration: 40 }}
      >
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex items-center mx-4">
            <span
              className="text-7xl sm:text-8xl md:text-9xl font-bold text-transparent px-4"
              style={{
                WebkitTextStroke: "1px hsl(36, 60%, 60%)", // Using the primary gold color
              }}
            >
              {text}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
