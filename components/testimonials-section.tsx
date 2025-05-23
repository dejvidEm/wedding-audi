"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Wedding Audi made our special day absolutely perfect. Their attention to detail and personalized service exceeded all our expectations.",
      author: "Sarah & James",
      role: "Married June 2024",
      rating: 5,
    },
    {
      quote:
        "The venue they recommended was breathtaking, and the coordination on the day was flawless. We couldn't have asked for a better team to help us celebrate our love.",
      author: "Michael & Emily",
      role: "Married April 2024",
      rating: 5,
    },
    {
      quote:
        "From the initial consultation to the last dance, Wedding Audi was there every step of the way. Their expertise made planning our wedding stress-free and enjoyable.",
      author: "David & Sophia",
      role: "Married May 2024",
      rating: 5,
    },
    {
      quote:
        "The decorations were absolutely stunning. Our guests couldn't stop talking about how beautiful everything looked. Worth every penny!",
      author: "Jennifer & Robert",
      role: "Married March 2024",
      rating: 5,
    },
    {
      quote:
        "As a couple planning from overseas, we were worried about the logistics. Wedding Audi handled everything perfectly, even with the time difference.",
      author: "Lisa & Thomas",
      role: "Married February 2024",
      rating: 5,
    },
    {
      quote:
        "The photography team captured moments we didn't even know happened. Looking through our album brings tears to our eyes every time.",
      author: "Emma & William",
      role: "Married January 2024",
      rating: 5,
    },
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Love Stories We've Helped Create</h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Hear from couples who trusted us with their special day.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto px-8 md:px-12">
          {/* Large quotation mark */}
          <div className="absolute -top-16 left-0 md:-left-10 text-primary/10 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-24 h-24 md:w-32 md:h-32"
            >
              <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.077-1.928.904-3.128.824-1.2 1.87-2.314 3.137-3.34l-1.34-1.47C9.165 6.008 7.85 7.17 6.75 8.603c-1.1 1.433-1.72 2.857-1.85 4.272-.13 1.415.09 2.677.67 3.787.58 1.11 1.43 1.94 2.55 2.49 1.12.55 2.3.74 3.57.58 1.26-.16 2.33-.72 3.19-1.67.86-.95 1.29-2.17 1.29-3.67 0-1.03-.21-1.97-.64-2.81-.43-.84-.99-1.5-1.7-1.97-.7-.48-1.45-.77-2.25-.89-.79-.12-1.56.02-2.31.42-.74.4-1.25 1.15-1.51 2.25.1 0 .19.01.27.01.84.01 1.49.22 1.95.62.46.4.69.96.69 1.68zm-3.5 3.138c-.46-.92-.69-1.94-.69-3.07 0-1.12.24-2.14.69-3.07.46-.92 1.05-1.68 1.77-2.28.72-.6 1.48-1.02 2.28-1.26.8-.24 1.56-.3 2.25-.18.69.12 1.28.42 1.77.9.49.48.84 1.25 1.04 2.31-.71-.31-1.56-.5-2.52-.56-.97-.06-1.92.07-2.84.38-.93.32-1.73.81-2.4 1.47-.67.67-1.14 1.54-1.42 2.62-.27 1.08-.2 2.2.22 3.36-.3-.2-.54-.41-.73-.63-.19-.23-.37-.52-.52-.87zm13.5-6.138c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.077-1.928.904-3.128.824-1.2 1.87-2.314 3.137-3.34l-1.34-1.47c-1.17 1.246-2.48 2.408-3.58 3.84-1.1 1.434-1.72 2.858-1.85 4.273-.13 1.415.09 2.677.67 3.787.58 1.11 1.43 1.94 2.55 2.49 1.12.55 2.3.74 3.57.58 1.26-.16 2.33-.72 3.19-1.67.86-.95 1.29-2.17 1.29-3.67 0-1.03-.21-1.97-.64-2.81-.43-.84-.99-1.5-1.7-1.97-.7-.48-1.45-.77-2.25-.89-.79-.12-1.56.02-2.31.42-.74.4-1.25 1.15-1.51 2.25.1 0 .19.01.27.01.84.01 1.49.22 1.95.62.46.4.69.96.69 1.68zm-3.5 3.138c-.46-.92-.69-1.94-.69-3.07 0-1.12.24-2.14.69-3.07.46-.92 1.05-1.68 1.77-2.28.72-.6 1.48-1.02 2.28-1.26.8-.24 1.56-.3 2.25-.18.69.12 1.28.42 1.77.9.49.48.84 1.25 1.04 2.31-.71-.31-1.56-.5-2.52-.56-.97-.06-1.92.07-2.84.38-.93.32-1.73.81-2.4 1.47-.67.67-1.14 1.54-1.42 2.62-.27 1.08-.2 2.2.22 3.36-.3-.2-.54-.41-.73-.63-.19-.23-.37-.52-.52-.87z" />
            </svg>
          </div>

          {/* Testimonial slider */}
          <div className="overflow-visible relative z-0">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, i) => (
                <div key={i} className="min-w-full px-4 py-6">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-b from-background to-muted/5 backdrop-blur p-8 md:p-12 rounded-2xl border border-primary/10 shadow-xl"
                  >
                    <div className="flex justify-center mb-6">
                      {Array(testimonial.rating)
                        .fill(0)
                        .map((_, j) => (
                          <Star key={j} className="size-5 text-primary fill-primary" />
                        ))}
                    </div>
                    <p className="text-xl md:text-2xl text-center font-light italic mb-8 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex flex-col items-center justify-center text-center">
                      <p className="font-semibold text-lg">{testimonial.author}</p>
                      <p className="text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-10 bg-background hover:bg-background text-primary border border-primary/20 rounded-full p-2 shadow-md transition-all"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-10 bg-background hover:bg-background text-primary border border-primary/20 rounded-full p-2 shadow-md transition-all"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-12 gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goToTestimonial(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === currentTestimonial ? "bg-primary w-8" : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
