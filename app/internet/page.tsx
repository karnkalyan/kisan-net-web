"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { CheckCircle, X, ArrowRight, Wifi } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GradientBackground from "@/components/gradient-background"
import { Meteors } from "@/components/meteors"
import SubscribeModal from "@/components/subscribe-modal"

export default function InternetPage() {
  const [billingCycle, setBillingCycle] = useState("monthly")
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false)

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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

  const plans = [
    {
      name: "Basic",
      description: "Perfect for small households",
      price: billingCycle === "monthly" ? 1000 : 10000,
      discount: billingCycle === "yearly" ? "Save NPR 2,000" : null,
      features: [
        "10 Mbps download speed",
        "5 Mbps upload speed",
        "Unlimited data",
        "Basic technical support",
        "Single device connection",
        "NPR 6,000 in shares (first year)",
      ],
      notIncluded: ["Static IP address", "Premium technical support"],
      color: "from-blue-500 to-blue-400",
    },
    {
      name: "Standard",
      description: "Ideal for families",
      price: billingCycle === "monthly" ? 1500 : 15000,
      discount: billingCycle === "yearly" ? "Save NPR 3,000" : null,
      popular: true,
      features: [
        "25 Mbps download speed",
        "10 Mbps upload speed",
        "Unlimited data",
        "Priority technical support",
        "Multiple device connection",
        "NPR 9,000 in shares (first year)",
      ],
      notIncluded: ["Static IP address"],
      color: "from-green-600 to-green-500",
    },
    {
      name: "Premium",
      description: "For power users and businesses",
      price: billingCycle === "monthly" ? 2000 : 20000,
      discount: billingCycle === "yearly" ? "Save NPR 4,000" : null,
      features: [
        "50 Mbps download speed",
        "20 Mbps upload speed",
        "Unlimited data",
        "24/7 premium technical support",
        "Multiple device connection",
        "Static IP address",
        "NPR 12,000 in shares (first year)",
      ],
      notIncluded: [],
      color: "from-purple-600 to-purple-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <SubscribeModal isOpen={isSubscribeModalOpen} setIsOpen={setIsSubscribeModalOpen} />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <GradientBackground />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 via-green-700/70 to-green-600/70 z-10" />

        <div className="container relative z-20 px-4 mx-auto text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-3xl font-bold tracking-tight md:text-6xl mb-4">
              High-Speed{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">
                Internet
              </span>
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-emerald-300 mx-auto my-6"></div>
            <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl">
              Reliable, high-speed internet with the added benefit of ownership
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-green-300/20 to-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-green-300/20 to-green-500/20 rounded-full blur-3xl"></div>

        <div className="container px-4 mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">Internet Plans & Pricing</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-green-400 to-green-600"></div>
            <p className="mt-6 text-lg text-gray-600">Choose the perfect plan for your connectivity needs</p>
          </motion.div>

          <motion.div
            className="max-w-md mx-auto mb-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Tabs defaultValue="monthly" className="w-full" onValueChange={(value) => setBillingCycle(value)}>
              <TabsList className="grid w-full grid-cols-2 p-1 bg-gradient-to-r from-green-100 to-green-50 rounded-lg">
                <TabsTrigger
                  value="monthly"
                  className="rounded-md data-[state=active]:bg-white data-[state=active]:text-green-700 data-[state=active]:shadow-sm transition-all"
                >
                  Monthly
                </TabsTrigger>
                <TabsTrigger
                  value="yearly"
                  className="rounded-md data-[state=active]:bg-white data-[state=active]:text-green-700 data-[state=active]:shadow-sm transition-all"
                >
                  Yearly (Save 20%)
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {plans.map((plan, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  className={`h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-none shadow-lg group cursor-pointer ${plan.popular ? "relative z-10 scale-105 md:scale-110" : ""}`}
                >
                  <div className={`h-2 bg-gradient-to-r ${plan.color}`}></div>
                  {plan.popular && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg shadow-md">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <CardHeader className="pb-0">
                    <div className="flex flex-col items-start">
                      <h3 className="text-2xl font-bold">{plan.name}</h3>
                      <p className="text-sm text-gray-500">{plan.description}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="flex items-baseline mb-4">
                      <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-500">
                        NPR {plan.price.toLocaleString()}
                      </span>
                      <span className="ml-1 text-gray-500">/{billingCycle === "monthly" ? "month" : "year"}</span>
                    </div>

                    {plan.discount && (
                      <div className="px-3 py-1 mb-4 text-sm font-medium text-green-800 bg-green-100 rounded-full inline-block">
                        {plan.discount}
                      </div>
                    )}

                    <div className="mt-6 space-y-4">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase">What&apos;s included</h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start group">
                            <div className="p-0.5 rounded-full bg-gradient-to-br from-green-400 to-green-500 text-white mt-0.5 shrink-0 group-hover:scale-110 transition-transform">
                              <CheckCircle className="w-4 h-4" />
                            </div>
                            <span className="ml-2">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {plan.notIncluded.length > 0 && (
                        <>
                          <h4 className="text-sm font-semibold text-gray-500 uppercase">Not included</h4>
                          <ul className="space-y-3">
                            {plan.notIncluded.map((feature, i) => (
                              <li key={i} className="flex items-start text-gray-500">
                                <X className="w-5 h-5 mr-2 text-gray-400 shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className={`w-full bg-gradient-to-r ${plan.color} text-white hover:opacity-90 transition-opacity`}
                      onClick={() => setIsSubscribeModalOpen(true)}
                    >
                      Subscribe Now
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat opacity-5"></div>
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-green-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-green-400/20 rounded-full blur-3xl"></div>
        <Meteors number={15} />

        <div className="container px-4 mx-auto relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">Explore Features</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-green-400 to-green-600"></div>
            <p className="mt-6 text-lg text-gray-600">Discover what makes our internet service stand out</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Fiber Optic Technology",
                description: "Experience lightning-fast speeds with our state-of-the-art fiber optic network",
                icon: (
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
                    className="w-8 h-8"
                  >
                    <path d="M2 12h2" />
                    <path d="M6 12h2" />
                    <path d="M10 12h2" />
                    <path d="M14 12h2" />
                    <path d="M18 12h2" />
                    <path d="M22 12h2" />
                    <path d="M12 2v2" />
                    <path d="M12 6v2" />
                    <path d="M12 10v2" />
                    <path d="M12 14v2" />
                    <path d="M12 18v2" />
                    <path d="M12 22v2" />
                  </svg>
                ),
              },
              {
                title: "Unlimited Data",
                description: "No data caps or throttling - use as much data as you need without restrictions",
                icon: (
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
                    className="w-8 h-8"
                  >
                    <path d="M12 8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v-4h2a2 2 0 0 0 0-4Z" />
                    <path d="M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95Z" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                ),
              },
              {
                title: "99.9% Uptime",
                description: "Reliable connectivity with our guaranteed 99.9% uptime service level agreement",
                icon: (
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
                    className="w-8 h-8"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                ),
              },
              {
                title: "Free Installation",
                description: "Professional installation at no additional cost to get you connected quickly",
                icon: (
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
                    className="w-8 h-8"
                  >
                    <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
                  </svg>
                ),
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock customer support to assist you whenever you need help",
                icon: (
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
                    className="w-8 h-8"
                  >
                    <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
                    <path d="M12 13v8" />
                    <path d="M12 3v3" />
                  </svg>
                ),
              },
              {
                title: "Ownership Benefits",
                description: "Become a part-owner of the ISP and enjoy dividends and voting rights",
                icon: (
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
                    className="w-8 h-8"
                  >
                    <path d="M12 2v20" />
                    <path d="M2 5h20" />
                    <path d="M2 19h20" />
                    <path d="M2 12h20" />
                    <path d="m6 5-4 7 4 7" />
                    <path d="m18 5 4 7-4 7" />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-gradient-to-b from-white to-green-50/50 border-none shadow-md overflow-hidden group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="p-3 mr-4 rounded-full bg-gradient-to-br from-green-100 to-green-200 group-hover:from-green-200 group-hover:to-green-300 transition-colors text-green-600 shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Accessories */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-400/10 rounded-full blur-3xl"></div>

        <div className="container px-4 mx-auto relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">Network Accessories</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-green-400 to-green-600"></div>
            <p className="mt-6 text-lg text-gray-600">Enhance your internet experience with our premium accessories</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Premium Router",
                price: 5000,
                image: "/placeholder.svg?height=200&width=200",
                description: "High-performance router for optimal coverage and speed",
              },
              {
                title: "WiFi Extender",
                price: 3000,
                image: "/placeholder.svg?height=200&width=200",
                description: "Extend your WiFi coverage to eliminate dead zones",
              },
              {
                title: "Network Switch",
                price: 2500,
                image: "/placeholder.svg?height=200&width=200",
                description: "Connect multiple devices with high-speed ethernet",
              },
              {
                title: "Mesh WiFi System",
                price: 8000,
                image: "/placeholder.svg?height=200&width=200",
                description: "Whole-home coverage with seamless roaming",
              },
            ].map((accessory, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href="/accessories">
                  <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-none shadow-lg overflow-hidden group cursor-pointer">
                    <div className="h-48 relative bg-gray-100">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Wifi className="w-16 h-16 text-green-200" />
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold">{accessory.title}</h3>
                        <span className="font-bold text-green-600">NPR {accessory.price}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{accessory.description}</p>
                      <div className="mt-4 text-green-600 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>View details</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              className="bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600 hover:scale-105 transition-all shadow-lg group"
            >
              <Link href="/accessories">
                View All Accessories
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-800 via-green-700 to-green-600"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>
        <Meteors number={10} />

        <div className="container px-4 mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white md:text-5xl">Ready to Get Connected?</h2>
            <div className="w-20 h-1 mx-auto my-6 bg-gradient-to-r from-green-400 to-green-300"></div>
            <p className="text-xl text-green-100 mb-10">
              Subscribe today and experience high-speed internet with the added benefit of ownership
            </p>

            <div className="flex flex-col items-center justify-center gap-4 mt-10 md:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-white text-green-700 hover:bg-green-50 hover:scale-105 transition-all shadow-lg group"
              >
                <Link href="/coverage">Check Coverage</Link>
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-400 text-white hover:from-green-600 hover:to-green-500 hover:scale-105 transition-all shadow-lg group"
                onClick={() => setIsSubscribeModalOpen(true)}
              >
                Subscribe Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
