"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle, Film, Tv, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GradientBackground from "@/components/gradient-background"
import { Meteors } from "@/components/meteors"
import SubscribeModal from "@/components/subscribe-modal"

export default function IPTVPage() {
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

  // const plans = [
  //   {
  //     name: "Basic",
  //     description: "Essential channels for everyday viewing",
  //     price: billingCycle === "monthly" ? 500 : 5000,
  //     discount: billingCycle === "yearly" ? "Save NPR 1,000" : null,
  //     features: [
  //       "50+ local channels",
  //       "News and entertainment",
  //       "Watch on 1 device",
  //       "Standard definition",
  //       "7-day catch-up",
  //     ],
  //     notIncluded: ["Premium channels", "HD content", "Multi-device streaming"],
  //     color: "from-blue-500 to-blue-400",
  //   },
  //   {
  //     name: "Standard",
  //     description: "Perfect for families and movie lovers",
  //     price: billingCycle === "monthly" ? 800 : 8000,
  //     discount: billingCycle === "yearly" ? "Save NPR 1,600" : null,
  //     popular: true,
  //     features: [
  //       "100+ local and international channels",
  //       "Movies and sports",
  //       "Watch on 2 devices",
  //       "HD content",
  //       "14-day catch-up",
  //       "Video on demand library",
  //     ],
  //     notIncluded: ["Premium sports channels", "4K content"],
  //     color: "from-green-600 to-green-500",
  //   },
  //   {
  //     name: "Premium",
  //     description: "Ultimate entertainment experience",
  //     price: billingCycle === "monthly" ? 1200 : 12000,
  //     discount: billingCycle === "yearly" ? "Save NPR 2,400" : null,
  //     features: [
  //       "150+ channels including premium",
  //       "Premium sports and movies",
  //       "Watch on 4 devices",
  //       "HD and 4K content",
  //       "30-day catch-up",
  //       "Extensive video on demand library",
  //       "Exclusive content",
  //     ],
  //     notIncluded: [],
  //     color: "from-purple-600 to-purple-500",
  //   },
  // ]

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
              Kisan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">IPTV</span>
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-emerald-300 mx-auto my-6"></div>
            <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl">
              Stream your favorite channels and content with our premium IPTV service
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white relative overflow-hidden md:py-24">
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
            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">Why Choose Kisan IPTV</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-green-400 to-green-600"></div>
            <p className="mt-6 text-lg text-gray-600">
              Experience television like never before with our cutting-edge IPTV service
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Tv className="w-10 h-10 text-green-600" />,
                title: "Live TV Channels",
                description: "Access 150+ local and international channels with crystal clear quality",
              },
              {
                icon: <Film className="w-10 h-10 text-green-600" />,
                title: "On-Demand Content",
                description: "Extensive library of movies, TV shows, and exclusive content",
              },
              {
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
                    className="w-10 h-10 text-green-600"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M12 8v8" />
                    <path d="m8.5 12 7-4" />
                    <path d="m8.5 12 7 4" />
                    <path d="M3 16v6" />
                    <path d="M21 16v6" />
                  </svg>
                ),
                title: "Multi-Device Streaming",
                description: "Watch on your TV, computer, tablet, or smartphone simultaneously",
              },
              {
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
                    className="w-10 h-10 text-green-600"
                  >
                    <path d="M12 2v8" />
                    <path d="m4.93 10.93 1.41 1.41" />
                    <path d="M2 18h2" />
                    <path d="M20 18h2" />
                    <path d="m19.07 10.93-1.41 1.41" />
                    <path d="M22 22H2" />
                    <path d="m8 22 4-10 4 10" />
                    <path d="M12 14v4" />
                  </svg>
                ),
                title: "Catch-Up TV",
                description: "Missed your favorite show? Watch up to 30 days of past programming",
              },
              {
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
                    className="w-10 h-10 text-green-600"
                  >
                    <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="M2 15h10" />
                    <path d="m5 12-3 3 3 3" />
                  </svg>
                ),
                title: "Cloud DVR",
                description: "Record your favorite shows and access them anytime, anywhere",
              },
              {
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
                    className="w-10 h-10 text-green-600"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m14.5 9-5 5" />
                    <path d="m9.5 9 5 5" />
                  </svg>
                ),
                title: "Secure Streaming",
                description: "Advanced encryption and security features to protect your viewing experience",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-b from-white to-green-50/50 border-none shadow-lg overflow-hidden group">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="p-4 mb-6 rounded-full bg-gradient-to-br from-green-100 to-green-200 group-hover:from-green-200 group-hover:to-green-300 transition-colors">
                      {feature.icon}
                    </div>
                    <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section className="py-16 bg-gradient-to-b from-green-50 to-white relative overflow-hidden md:py-24">
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
            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">IPTV Plans & Pricing</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-green-400 to-green-600"></div>
            <p className="mt-6 text-lg text-gray-600">Choose the perfect plan for your entertainment needs</p>
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
      </section> */}

      {/* Channel Showcase */}
      <section className="py-16 bg-white relative overflow-hidden md:py-24">
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
            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">Channel Showcase</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-green-400 to-green-600"></div>
            <p className="mt-6 text-lg text-gray-600">Explore some of the popular channels available in our packages</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[...Array(18)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <div className="relative w-full aspect-video bg-gray-100 rounded flex items-center justify-center">
                  <Tv className="w-8 h-8 text-green-200" />
                  <p className="absolute bottom-1 text-xs font-medium text-gray-500">Channel {index + 1}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              className="bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600 shadow-md"
              onClick={() => setIsSubscribeModalOpen(true)}
            >
              View Full Channel List
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-white relative overflow-hidden md:py-24">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat opacity-5"></div>
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-green-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-green-400/20 rounded-full blur-3xl"></div>

        <div className="container px-4 mx-auto relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">How It Works</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-green-400 to-green-600"></div>
            <p className="mt-6 text-lg text-gray-600">Getting started with Kisan IPTV is quick and easy</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: "1",
                title: "Choose Your Plan",
                description: "Select the plan that best fits your viewing preferences and budget",
              },
              {
                step: "2",
                title: "Subscribe",
                description: "Complete the subscription process and set up your account",
              },
              {
                step: "3",
                title: "Get Your Device",
                description: "Receive your IPTV box or download our app on your preferred device",
              },
              {
                step: "4",
                title: "Start Watching",
                description: "Connect to your internet and start enjoying your favorite content",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-b from-white to-green-50/50 border-none shadow-lg overflow-hidden">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-600 to-green-500 flex items-center justify-center text-white text-xl font-bold mb-6">
                      {step.step}
                    </div>
                    <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>

                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-green-500" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible Devices */}
      <section className="py-16 bg-white relative overflow-hidden md:py-24">
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
            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">Compatible Devices</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-green-400 to-green-600"></div>
            <p className="mt-6 text-lg text-gray-600">Watch Kisan IPTV on your favorite devices</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Smart TVs",
                description: "Samsung, LG, Sony, and other Android TVs",
                icon: <Tv className="w-12 h-12 text-green-600" />,
              },
              {
                title: "Streaming Devices",
                description: "Amazon Fire TV, Roku, Apple TV, Chromecast",
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
                    className="w-12 h-12 text-green-600"
                  >
                    <rect width="20" height="12" x="2" y="6" rx="2" />
                    <path d="M22 8h-4v8h4" />
                    <path d="M18 12h-4" />
                    <path d="M2 18h20" />
                  </svg>
                ),
              },
              {
                title: "Mobile Devices",
                description: "iOS and Android smartphones and tablets",
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
                    className="w-12 h-12 text-green-600"
                  >
                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                    <path d="M12 18h.01" />
                  </svg>
                ),
              },
              {
                title: "Computers",
                description: "Windows, Mac, and Linux via web browser",
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
                    className="w-12 h-12 text-green-600"
                  >
                    <rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
                    <line x1="2" x2="22" y1="20" y2="20" />
                  </svg>
                ),
              },
            ].map((device, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-b from-white to-green-50/50 border-none shadow-lg overflow-hidden">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="p-4 mb-6 rounded-full bg-gradient-to-br from-green-100 to-green-200 group-hover:from-green-200 group-hover:to-green-300 transition-colors">
                      {device.icon}
                    </div>
                    <h3 className="mb-3 text-xl font-bold">{device.title}</h3>
                    <p className="text-gray-600">{device.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            <h2 className="text-3xl font-bold text-white md:text-5xl">Ready to Transform Your TV Experience?</h2>
            <div className="w-20 h-1 mx-auto my-6 bg-gradient-to-r from-green-400 to-green-300"></div>
            <p className="text-xl text-green-100 mb-10">
              Subscribe to Kisan IPTV today and enjoy unlimited entertainment
            </p>

            <div className="flex flex-col items-center justify-center gap-4 mt-10 md:flex-row">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-400 text-white hover:from-green-600 hover:to-green-500 hover:scale-105 transition-all shadow-lg group"
                onClick={() => setIsSubscribeModalOpen(true)}
              >
                Subscribe Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white text-green-700 hover:bg-green-50 hover:scale-105 transition-all shadow-lg group"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
