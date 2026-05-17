"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Check, CheckCircle, X, Globe, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import GradientBackground from "@/components/gradient-background"
import { Meteors } from "@/components/meteors"

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly")

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
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <GradientBackground />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 via-green-700/70 to-green-600/70 z-10" />

        <div className="container relative z-20 px-4 mx-auto text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-3xl font-bold tracking-tight md:text-6xl mb-4">
              Simple, Transparent{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">
                Pricing
              </span>
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-emerald-300 mx-auto my-6"></div>
            <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl">
              Affordable internet plans designed for rural communities, with the added benefit of ownership
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
                  className={`h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-none shadow-lg group ${plan.popular ? "relative z-10 scale-105 md:scale-110" : ""}`}
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
                      asChild
                      className={`w-full bg-gradient-to-r ${plan.color} text-white hover:opacity-90 transition-opacity`}
                    >
                      <Link href="/coverage">Subscribe Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Unique Proposition Model */}
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
            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">Unique Proposition Model</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-green-400 to-green-600"></div>
            <p className="mt-6 text-lg text-gray-600">How your subscription transforms into ownership over time</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto overflow-x-auto"
          >
            <div className="min-w-[600px]">
              <div className="bg-white rounded-xl overflow-hidden shadow-xl border border-green-100">
                <div className="bg-gradient-to-r from-green-600 to-green-500 text-white py-4 px-6">
                  <h3 className="text-xl font-bold">5-Year Ownership Journey</h3>
                </div>
                <table className="w-full">
                  <thead className="bg-green-50">
                    <tr>
                      <th className="py-4 px-6 text-left font-medium text-green-800">Year</th>
                      <th className="py-4 px-6 text-right font-medium text-green-800">Internet Price (NPR)</th>
                      <th className="py-4 px-6 text-right font-medium text-green-800">Share Transform (NPR)</th>
                      <th className="py-4 px-6 text-left font-medium text-green-800">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-green-100 hover:bg-green-50/50 transition-colors">
                      <td className="py-4 px-6">First Year</td>
                      <td className="py-4 px-6 text-right">10,000</td>
                      <td className="py-4 px-6 text-right font-medium text-green-600">6,000</td>
                      <td className="py-4 px-6" rowSpan={6}>
                        This facility is only for Small Farmers
                      </td>
                    </tr>
                    <tr className="border-b border-green-100 hover:bg-green-50/50 transition-colors">
                      <td className="py-4 px-6">Second Year</td>
                      <td className="py-4 px-6 text-right">8,500</td>
                      <td className="py-4 px-6 text-right font-medium text-green-600">1,000</td>
                    </tr>
                    <tr className="border-b border-green-100 hover:bg-green-50/50 transition-colors">
                      <td className="py-4 px-6">Third Year</td>
                      <td className="py-4 px-6 text-right">8,500</td>
                      <td className="py-4 px-6 text-right font-medium text-green-600">1,000</td>
                    </tr>
                    <tr className="border-b border-green-100 hover:bg-green-50/50 transition-colors">
                      <td className="py-4 px-6">Fourth Year</td>
                      <td className="py-4 px-6 text-right">8,500</td>
                      <td className="py-4 px-6 text-right font-medium text-green-600">1,000</td>
                    </tr>
                    <tr className="border-b border-green-100 hover:bg-green-50/50 transition-colors">
                      <td className="py-4 px-6">Fifth Year</td>
                      <td className="py-4 px-6 text-right">8,500</td>
                      <td className="py-4 px-6 text-right font-medium text-green-600">1,000</td>
                    </tr>
                    <tr className="border-b border-green-100 bg-green-50/50 font-medium">
                      <td className="py-4 px-6">Total Internet fee at 5 Year</td>
                      <td className="py-4 px-6 text-right">44,000</td>
                      <td className="py-4 px-6 text-right text-green-600">10,000</td>
                    </tr>
                    <tr className="border-b border-green-100 hover:bg-green-50/50 transition-colors">
                      <td className="py-4 px-6">Organization's bonus at sixth Year</td>
                      <td className="py-4 px-6 text-right">-</td>
                      <td className="py-4 px-6 text-right font-medium text-green-600">10,000</td>
                      <td className="py-4 px-6"></td>
                    </tr>
                    <tr className="bg-gradient-to-r from-green-50 to-green-100/50 font-medium">
                      <td className="py-4 px-6">Client's profit (If the Share Price reach 500 at stock Market)</td>
                      <td className="py-4 px-6 text-right" colSpan={2}>
                        <span className="text-green-600">20,000 × 5 Times Share Price = NPR 1,00,000</span>
                      </td>
                      <td className="py-4 px-6"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROI for Farmers */}
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
            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">ROI for Farmer-Owners</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-green-400 to-green-600"></div>
            <p className="mt-6 text-lg text-gray-600">
              When you subscribe to Kisan Net, you&apos;re not just a customer - you&apos;re an owner with real returns
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="p-6 bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl shadow-lg border border-green-100">
                <h3 className="mb-4 text-xl font-bold">Initial Investment</h3>
                <p className="mb-2 text-gray-600">
                  Minimum investment: <span className="font-semibold">NPR 0</span>
                </p>
                <p className="mb-2 text-gray-600">
                  Investment through subscription: <span className="font-semibold">NPR 10,000 over 5 years</span>
                </p>
                <p className="text-gray-600">
                  Your internet subscription automatically converts a portion to ownership shares.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl shadow-lg border border-green-100">
                <h3 className="mb-4 text-xl font-bold">Annual Returns</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dividend yield:</span>
                    <span className="font-semibold text-green-600">8-12% annually</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subscription discount:</span>
                    <span className="font-semibold text-green-600">5-15% based on plan</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Community reinvestment:</span>
                    <span className="font-semibold text-green-600">20% of profits</span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl shadow-lg border border-green-100">
                <h3 className="mb-4 text-xl font-bold">Long-term Benefits</h3>
                <ul className="space-y-2">
                  {[
                    "Increasing dividends as network expands",
                    "Voting rights in cooperative decisions",
                    "Potential for capital appreciation",
                    "Digital skills training opportunities",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="p-0.5 rounded-full bg-gradient-to-br from-green-400 to-green-500 text-white mt-0.5 shrink-0 group-hover:scale-110 transition-transform">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="ml-2">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl shadow-lg border border-green-100"
            >
              <h3 className="mb-6 text-xl font-bold text-center">5-Year Return Projection</h3>

              <div className="relative h-[300px]">
                <div className="absolute bottom-0 left-0 w-full h-[250px] flex items-end">
                  {[
                    { year: "Year 1", roi: 1, height: "10%" },
                    { year: "Year 2", roi: 3, height: "30%" },
                    { year: "Year 3", roi: 8, height: "60%" },
                    { year: "Year 4", roi: 12, height: "75%" },
                    { year: "Year 5", roi: 14, height: "90%" },
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center flex-1">
                      <motion.div
                        className="w-full mx-1 bg-gradient-to-t from-green-600 to-green-400 rounded-t-md"
                        style={{ height: item.height }}
                        initial={{ height: 0 }}
                        whileInView={{ height: item.height }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                      >
                        <div className="flex justify-center p-1 text-sm font-medium text-white">{item.roi}%</div>
                      </motion.div>
                      <div className="mt-2 text-xs font-medium">{item.year}</div>
                    </div>
                  ))}
                </div>
                <div className="absolute left-0 bottom-[250px] w-full h-px bg-gray-300"></div>
                <div className="absolute left-0 bottom-[250px] text-xs text-gray-500">ROI %</div>
              </div>

              <div className="p-4 mt-8 text-sm bg-gradient-to-r from-green-100 to-green-50 rounded-lg">
                <p className="font-medium text-green-800">Example: NPR 10,000 in shares</p>
                <p className="mt-2 text-gray-600">
                  Initial investment: <span className="font-semibold">NPR 0</span> (through subscription)
                  <br />
                  Share value after 5 years: <span className="font-semibold">NPR 20,000</span>
                  <br />
                  Year 5 annual return (14%): <span className="font-semibold">NPR 2,800</span>
                  <br />
                  Potential market value (5x): <span className="font-semibold">NPR 100,000</span>
                  <br />
                  Plus subscription discounts and other benefits
                </p>
              </div>
            </motion.div>
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
            <h2 className="text-3xl font-bold text-white md:text-5xl">Ready to Connect?</h2>
            <div className="w-20 h-1 mx-auto my-6 bg-gradient-to-r from-green-400 to-green-300"></div>
            <p className="text-xl text-green-100 mb-10">
              Check if Kisan Net is available in your area and join our growing community of connected farmers
            </p>

            <div className="flex flex-col items-center justify-center gap-4 mt-10 md:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-white text-green-700 hover:bg-green-50 hover:scale-105 transition-all shadow-lg group"
              >
                <Link href="/coverage">
                  Check Coverage
                  <Globe className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-400 text-white hover:from-green-600 hover:to-green-500 hover:scale-105 transition-all shadow-lg group"
              >
                <Link href="/contact">
                  Request Information
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
