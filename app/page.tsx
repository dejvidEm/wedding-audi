"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LogosSection } from "@/components/logos-section"
import { FeaturesSection } from "@/components/features-section"
import { GallerySection } from "@/components/gallery-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { FaqSection } from "@/components/faq-section"
import { ContactFormSection } from "@/components/contact-form-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }, // Adjust threshold as needed
    )

    // Observe all sections
    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <div className="flex min-h-[100dvh] flex-col pt-16">
      <Header activeSection={activeSection} />
      <main className="flex-1">
        <HeroSection />
        <LogosSection />
        <FeaturesSection />
        <GallerySection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <div className="grid md:grid-cols-2 gap-0">
          <FaqSection />
          <ContactFormSection />
        </div>
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
