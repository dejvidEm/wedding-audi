"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function PricingSection() {
  const pricingPlans = {
    monthly: [
      {
        name: "Essential",
        price: "$2,999",
        description: "Perfect for intimate weddings.",
        features: ["Up to 50 guests", "Basic decoration", "5 hours of photography", "Ceremony coordination"],
        cta: "Book Now",
      },
      {
        name: "Premium",
        price: "$5,999",
        description: "Ideal for medium-sized weddings.",
        features: [
          "Up to 100 guests",
          "Premium decorations",
          "8 hours of photography & video",
          "Full-day coordination",
          "Custom floral arrangements",
        ],
        cta: "Book Now",
        popular: true,
      },
      {
        name: "Luxury",
        price: "$9,999",
        description: "For the ultimate wedding experience.",
        features: [
          "Up to 200 guests",
          "Luxury decorations",
          "Full-day photography & video",
          "Complete wedding planning",
          "Premium catering",
          "Live music",
        ],
        cta: "Contact Us",
      },
    ],
    annually: [
      {
        name: "Essential",
        price: "$2,499",
        description: "Perfect for intimate weddings.",
        features: ["Up to 50 guests", "Basic decoration", "5 hours of photography", "Ceremony coordination"],
        cta: "Book Now",
      },
      {
        name: "Premium",
        price: "$4,999",
        description: "Ideal for medium-sized weddings.",
        features: [
          "Up to 100 guests",
          "Premium decorations",
          "8 hours of photography & video",
          "Full-day coordination",
          "Custom floral arrangements",
        ],
        cta: "Book Now",
        popular: true,
      },
      {
        name: "Luxury",
        price: "$8,499",
        description: "For the ultimate wedding experience.",
        features: [
          "Up to 200 guests",
          "Luxury decorations",
          "Full-day photography & video",
          "Complete wedding planning",
          "Premium catering",
          "Live music",
        ],
        cta: "Contact Us",
      },
    ],
  }

  return (
    <section id="pricing" className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
            Wedding Packages
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Elegant, Tailored Packages</h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Choose the perfect package for your special day. All packages include a complimentary consultation.
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <Tabs defaultValue="monthly" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="rounded-full p-1">
                <TabsTrigger value="monthly" className="rounded-full px-6">
                  Standard
                </TabsTrigger>
                <TabsTrigger value="annually" className="rounded-full px-6">
                  Off-Season (Save 15%)
                </TabsTrigger>
              </TabsList>
            </div>

            {["monthly", "annually"].map((interval) => (
              <TabsContent key={interval} value={interval}>
                <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                  {pricingPlans[interval as keyof typeof pricingPlans].map((plan, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <Card
                        className={`relative overflow-hidden h-full ${plan.popular ? "border-primary shadow-lg" : "border-border/40 shadow-md"} bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                      >
                        {plan.popular && (
                          <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                            Most Popular
                          </div>
                        )}
                        <CardContent className="p-6 flex flex-col h-full">
                          <h3 className="text-2xl font-bold">{plan.name}</h3>
                          <div className="flex items-baseline mt-4">
                            <span className="text-4xl font-bold">{plan.price}</span>
                          </div>
                          <p className="text-muted-foreground mt-2">{plan.description}</p>
                          <ul className="space-y-3 my-6 flex-grow">
                            {plan.features.map((feature, j) => (
                              <li key={j} className="flex items-center">
                                <Check className="mr-2 size-4 text-primary" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <Button
                            className={`w-full mt-auto rounded-full ${plan.popular ? "bg-primary hover:bg-primary/90" : "bg-muted hover:bg-muted/80"}`}
                            variant={plan.popular ? "default" : "outline"}
                          >
                            {plan.cta}
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
