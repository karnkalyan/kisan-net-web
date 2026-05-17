"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Check, Star, Users, Building, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import AnimatedHeroSection from "@/components/animated-hero-section"

export default function InternetPlansPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const kisanPackage = {
    name: "KISAN Package",
    subtitle: "Yearly Exclusive",
    price: "8,500",
    originalPrice: "10,000",
    speed: "50 Mbps",
    features: [
      "Lower price for verified members",
      "Community ownership perks",
      "Annual bonus/incentive",
      "Support from local co-op",
      "Unlimited data",
      "24/7 customer support",
      "Free installation",
      "Share ownership benefits",
    ],
    popular: true,
    memberOnly: true,
  }

  const homePlans = [
    {
      name: "Basic Home",
      price: "1,200",
      speed: "25 Mbps",
      features: [
        "Unlimited data",
        "Suitable for 2-3 devices",
        "Basic streaming quality",
        "Email & web browsing",
        "24/7 support",
      ],
    },
    {
      name: "Standard Home",
      price: "2,000",
      speed: "50 Mbps",
      features: [
        "Unlimited data",
        "Suitable for 4-6 devices",
        "HD streaming",
        "Online gaming",
        "Video conferencing",
        "24/7 support",
      ],
      popular: true,
    },
    {
      name: "Premium Home",
      price: "3,500",
      speed: "100 Mbps",
      features: [
        "Unlimited data",
        "Suitable for 8+ devices",
        "4K streaming",
        "Heavy downloading",
        "Multiple video calls",
        "Priority support",
      ],
    },
  ]

  const businessPlans = [
    {
      name: "SME Basic",
      price: "5,000",
      speed: "100 Mbps",
      features: [
        "Dedicated bandwidth",
        "Static IP address",
        "Business-grade support",
        "99.9% uptime guarantee",
        "Email hosting",
        "Basic security features",
      ],
    },
    {
      name: "SME Pro",
      price: "8,000",
      speed: "200 Mbps",
      features: [
        "Dedicated bandwidth",
        "Multiple static IPs",
        "Priority support",
        "99.9% uptime guarantee",
        "Advanced security",
        "Cloud backup",
        "VPN access",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "15,000",
      speed: "500 Mbps",
      features: [
        "Dedicated fiber line",
        "Customizable bandwidth",
        "24/7 dedicated support",
        "99.99% uptime SLA",
        "Enterprise security suite",
        "Managed services",
        "Custom solutions",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <Navbar />

      {/* Hero Section with Enhanced Animation */}
      <AnimatedHeroSection
        title="Internet Plans & Pricing"
        subtitle="Choose the perfect internet plan for your home or business. Affordable, reliable, and community-owned."
      />

      {/* KISAN Package Section */}
      <section className="py-16 bg-white md:py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">KISAN Package - Yearly Only</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-green-600"></div>
            <p className="mt-6 text-lg text-gray-600">
              Exclusive package for verified KISAN cooperative members with special benefits
            </p>
          </motion.div>

          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="relative overflow-hidden border-2 border-green-500 shadow-2xl">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-green-500 to-green-400"></div>
              <div className="absolute -top-3 -right-3">
                <Badge className="bg-gradient-to-r from-green-500 to-green-400 text-white px-3 py-1 text-sm font-bold">
                  <Star className="w-4 h-4 mr-1" />
                  EXCLUSIVE
                </Badge>
              </div>

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">{kisanPackage.name}</CardTitle>
                <p className="text-green-600 font-medium">{kisanPackage.subtitle}</p>
                <div className="mt-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-3xl font-bold text-gray-900">NPR {kisanPackage.price}</span>
                    <span className="text-lg text-gray-500 line-through">NPR {kisanPackage.originalPrice}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">per month (yearly billing)</p>
                  <p className="text-lg font-semibold text-green-600 mt-2">{kisanPackage.speed} Download/Upload</p>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {kisanPackage.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 space-y-3">
                  <Button className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white">
                    Join a KISAN Cooperative to Get This Plan
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-green-500 text-green-600 hover:bg-green-50 bg-transparent"
                    asChild
                  >
                    <Link href="/contact">Learn More About Cooperatives</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Home Plans Section */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-white md:py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Home Plans</h2>
            </div>
            <div className="w-20 h-1 mx-auto mt-4 bg-green-600"></div>
            <p className="mt-6 text-lg text-gray-600">
              Perfect for families and individuals who need reliable internet at home
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {homePlans.map((plan, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  className={`relative h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer ${
                    plan.popular
                      ? "border-2 border-green-500 shadow-lg"
                      : "border border-gray-200 hover:border-green-300"
                  }`}
                  onClick={() => setSelectedPlan(plan.name)}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-green-500 to-green-400 text-white px-3 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center">
                    <CardTitle className="text-xl font-bold text-gray-900">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-3xl font-bold text-gray-900">NPR {plan.price}</span>
                      <p className="text-sm text-gray-600 mt-1">per month</p>
                      <p className="text-lg font-semibold text-green-600 mt-2">{plan.speed} Download/Upload</p>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white"
                          : "bg-white border border-green-500 text-green-600 hover:bg-green-50"
                      }`}
                      asChild
                    >
                      <Link href="/contact">Choose Plan</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Business Plans Section */}
      <section className="py-16 bg-white md:py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-center justify-center mb-4">
              <Building className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Business Plans</h2>
            </div>
            <div className="w-20 h-1 mx-auto mt-4 bg-green-600"></div>
            <p className="mt-6 text-lg text-gray-600">
              Professional internet solutions for businesses of all sizes with dedicated support
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {businessPlans.map((plan, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  className={`relative h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer ${
                    plan.popular
                      ? "border-2 border-green-500 shadow-lg"
                      : "border border-gray-200 hover:border-green-300"
                  }`}
                  onClick={() => setSelectedPlan(plan.name)}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-green-500 to-green-400 text-white px-3 py-1">
                        <Zap className="w-4 h-4 mr-1" />
                        Recommended
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center">
                    <CardTitle className="text-xl font-bold text-gray-900">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-3xl font-bold text-gray-900">NPR {plan.price}</span>
                      <p className="text-sm text-gray-600 mt-1">per month</p>
                      <p className="text-lg font-semibold text-green-600 mt-2">{plan.speed} Dedicated</p>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white"
                          : "bg-white border border-green-500 text-green-600 hover:bg-green-50"
                      }`}
                      asChild
                    >
                      <Link href="/contact">Get Quote</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-500 md:py-20">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white md:text-4xl">Ready to Get Connected?</h2>
            <p className="mt-6 text-xl text-green-100">
              Join thousands of satisfied customers who trust Kisan Net for their internet needs.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 mt-10 md:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-white text-green-700 hover:bg-green-50 hover:scale-105 transition-all shadow-lg"
              >
                <Link href="/coverage">Check Coverage</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-700 hover:scale-105 transition-all shadow-lg bg-transparent"
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
