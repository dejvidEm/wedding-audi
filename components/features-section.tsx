"use client"

import { motion } from "framer-motion"
import { BarChart, Layers, Shield, Star, Users, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ParallaxFeatures } from "@/components/parallax-features"

export function FeaturesSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const features = [
    {
      title: "Elegant Venues",
      description: "Discover our handpicked selection of stunning venues for your perfect wedding day.",
      icon: <Star className="size-5" />,
    },
    {
      title: "Professional Photography",
      description: "Capture every magical moment with our award-winning wedding photographers.",
      icon: <BarChart className="size-5" />,
    },
    {
      title: "Expert Planning",
      description: "Our experienced wedding planners will handle every detail of your special day.",
      icon: <Users className="size-5" />,
    },
    {
      title: "Gourmet Catering",
      description: "Delight your guests with exquisite cuisine prepared by our master chefs.",
      icon: <Shield className="size-5" />,
    },
    {
      title: "Beautiful Decorations",
      description: "Transform your venue with our stunning floral arrangements and decorations.",
      icon: <Layers className="size-5" />,
    },
    {
      title: "24/7 Support",
      description: "Our dedicated team is always available to assist with any questions or concerns.",
      icon: <Zap className="size-5" />,
    },
  ]

  return (
    <section id="features" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Everything for Your Perfect Day</h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            We provide comprehensive wedding services to make your special day truly unforgettable.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-24"
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={item}>
              <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Parallax Features Section */}
        <ParallaxFeatures />
      </div>
    </section>
  )
}
