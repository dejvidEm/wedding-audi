"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { CalendarIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

export function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isChrome, setIsChrome] = useState(true)

  useEffect(() => {
    setIsChrome(window.chrome !== undefined)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after submission
    e.currentTarget.reset()

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
            Contact Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Plan Your Special Day</h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Ready to start planning your dream wedding? Get in touch with our team of experts.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-4 bg-muted/30 p-6 rounded-xl border border-border/40">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <Input id="name" placeholder="e.g. John & Sarah Smith" required className="bg-background" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <Input id="email" type="email" placeholder="example@email.com" required className="bg-background" />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="bg-background" />
            </div>

            <div>
              <label htmlFor="venue" className="block text-sm font-medium mb-2">
                Wedding Venue
              </label>
              <Input id="venue" placeholder="Venue name or location" className="bg-background" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium mb-2">
                  Wedding Date
                </label>
                <div className="relative">
                  <Input
                    id="date"
                    type="date"
                    className={cn("bg-background pl-10", !isChrome && "appearance-none")}
                  />
                  <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                </div>
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium mb-2">
                  Wedding Time
                </label>
                <div className="relative">
                  <Input id="time" type="time" className="bg-background" />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell us about your wedding plans and how we can help..."
                rows={4}
                className="resize-none bg-background"
              />
            </div>

            <Button
              type="submit"
              className="w-full rounded-full bg-primary hover:bg-primary/90 h-12"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : isSubmitted ? "Message Sent!" : "Send Message"}
            </Button>

            {isSubmitted && (
              <p className="text-sm text-green-600 text-center">
                Thank you for your message! We'll get back to you soon to discuss your special day.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
