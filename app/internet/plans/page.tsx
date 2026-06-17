"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Check, Star, Users, Building, Zap, Shield, Headphones, Wifi } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function InternetPlansPage() {
  const [isYearly, setIsYearly] = useState(false)

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
         
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-700/70 to-green-600/70"></div>

          {/* Animated elements */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-green-500/20 backdrop-blur-sm"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          <motion.div
            className="absolute bottom-1/3 right-1/3 w-24 h-24 rounded-full bg-green-400/20 backdrop-blur-sm"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 1,
            }}
          />

          <motion.div
            className="absolute top-2/3 right-1/4 w-16 h-16 rounded-full bg-green-300/20 backdrop-blur-sm"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 2,
            }}
          />
        </div>

        <div className="container relative z-10 px-4 mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">Internet Plans</h1>
            <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl">
              Choose the perfect internet plan for your home or business with our high-speed fiber connectivity
            </p>

            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.div
                className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                <span className="text-sm">High-speed fiber</span>
              </motion.div>

              <motion.div
                className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                <span className="text-sm">Unlimited data</span>
              </motion.div>

              <motion.div
                className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                <span className="text-sm">Community owned</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-8 bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-center space-x-4">
            <Label htmlFor="billing-toggle" className="text-sm font-medium">
              Monthly
            </Label>
            <Switch id="billing-toggle" checked={isYearly} onCheckedChange={setIsYearly} />
            <Label htmlFor="billing-toggle" className="text-sm font-medium">
              Yearly <span className="text-green-600 font-semibold">(Save 15%)</span>
            </Label>
          </div>
        </div>
      </section>

      {/* KISAN Package Section */}
      <section className="py-16 bg-gradient-to-b from-white to-green-50">
        <div className="container px-4 mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-center justify-center mb-4">
              <Star className="w-8 h-8 text-yellow-500 mr-2" />
              <h2 className="text-3xl font-bold text-gray-900">KISAN Package</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Exclusive yearly package for small farmers with ownership benefits
            </p>
          </motion.div>

          <motion.div
            className="max-w-md mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Card className="relative overflow-hidden border-2 border-yellow-400 shadow-xl">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500"></div>
              <Badge className="absolute top-3 right-2 text-xs px-2 py-1 sm:top-4 sm:right-4 sm:text-sm sm:px-3 sm:py-1.5 bg-yellow-500 text-yellow-900">Farmer Exclusive</Badge>
              <CardHeader className="text-center pb-4 pt-12">
                <CardTitle className="text-2xl font-bold">KISAN Package</CardTitle>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-green-600">NPR 8,000 <sup className="text-lg">*</sup></div>
                  {/* <div className="text-sm text-gray-500 line-through">NPR 10,000</div> */}
                  <div className="text-sm text-gray-600">per year</div>
                  <div className="text-xs text-gray-500 mt-2 ">Excluding TCS and VAT</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    <span>High-speed fiber internet</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    <span>Unlimited data usage</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    <span>Company share ownership</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    <span>24/7 technical support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    <span>Free installation</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    <span>Community benefits</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white">
                  Subscribe Now
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Home Plans Section */}
      {/* Home Plans Section */}
<section className="py-16 bg-white">
  <div className="container px-4 mx-auto">
    <motion.div
      className="text-center mb-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="flex items-center justify-center mb-4">
        <Users className="w-8 h-8 text-green-600 mr-2" />
        <h2 className="text-3xl font-bold text-gray-900">Home Plans</h2>
      </div>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Perfect internet solutions for households and families
      </p>
    </motion.div>

    <motion.div
      className="grid gap-8 md:grid-cols-3"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {[
        {
          name: "Basic",
          monthlyPrice: 1220,
          yearlyPrice: Math.round(14646 * 0.85),
          originalYearlyPrice: 14646,
          speed: "100 Mbps",
          features: [
            "100 Mbps download speed",
            "Unlimited data",
            "Basic support",
            "Free installation",
            "1 device connection",
          ],
          popular: false,
        },
        {
          name: "Standard",
          monthlyPrice: 1421,
          yearlyPrice: Math.round(17058 * 0.85),
          originalYearlyPrice: 17058,
          speed: "150 Mbps",
          features: [
            "150 Mbps download speed",
            "Unlimited data",
            "Priority support",
            "Free installation",
            "1 device connections",
            "Free router",
          ],
          popular: true,
        },
        {
          name: "Premium",
          monthlyPrice: 1715,
          yearlyPrice: Math.round(20587 * 0.85),
          originalYearlyPrice: 20587,
          speed: "200 Mbps",
          features: [
            "200 Mbps download speed",
            "Unlimited data",
            "24/7 premium support",
            "Free installation",
            "1 device connections",
            "Free router & extender",
            "IPTV included",
          ],
          popular: false,
        },
      ].map((plan, index) => (
        <motion.div key={index} variants={fadeInUp}>
          <Card
            className={`relative h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
              plan.popular ? "border-2 border-green-500 shadow-lg" : "border border-gray-200"
            }`}
          >
            {/* Badge attached to top-right corner */}
            {plan.popular && (
              <Badge className="absolute top-0 right-0 -translate-x-1/4 -translate-y-1/4 text-xs sm:text-sm px-2 py-1 rounded bg-green-500 text-white">
                Most Popular
              </Badge>
            )}

            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>

              {/* Centered pricing */}
              <div className="mt-4 text-center">
                {isYearly ? (
                  <div>
                    <div className="text-3xl font-bold text-green-600">
                      NPR {plan.yearlyPrice.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500 line-through mt-1">
                      NPR {plan.originalYearlyPrice.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">per year</div>
                  </div>
                ) : (
                  <div>
                    <div className="text-3xl font-bold text-green-600">
                      NPR {plan.monthlyPrice.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">per month</div>
                  </div>
                )}
              </div>

              <div className="text-lg font-semibold text-gray-700 mt-2">{plan.speed}</div>
            </CardHeader>

            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3 shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600"
                    : "bg-gray-900 hover:bg-gray-800"
                } text-white`}
              >
                Choose Plan
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>


      {/* Business Plans Section */}
      {/* <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-center justify-center mb-4">
              <Building className="w-8 h-8 text-blue-600 mr-2" />
              <h2 className="text-3xl font-bold text-gray-900">Business Plans</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Scalable internet solutions for businesses of all sizes
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                name: "SME Basic",
                monthlyPrice: 5000,
                yearlyPrice: Math.round(5000 * 12 * 0.85),
                originalYearlyPrice: 5000 * 12,
                speed: "100 Mbps",
                features: [
                  "100 Mbps dedicated speed",
                  "Unlimited data",
                  "Business support",
                  "Free installation",
                  "10 device connections",
                  "Static IP address",
                ],
                popular: false,
              },
              {
                name: "SME Pro",
                monthlyPrice: 8000,
                yearlyPrice: Math.round(8000 * 12 * 0.85),
                originalYearlyPrice: 8000 * 12,
                speed: "200 Mbps",
                features: [
                  "200 Mbps dedicated speed",
                  "Unlimited data",
                  "Priority business support",
                  "Free installation",
                  "25 device connections",
                  "Static IP address",
                  "Free managed router",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                monthlyPrice: 15000,
                yearlyPrice: Math.round(15000 * 12 * 0.85),
                originalYearlyPrice: 15000 * 12,
                speed: "500 Mbps",
                features: [
                  "500 Mbps dedicated speed",
                  "Unlimited data",
                  "24/7 enterprise support",
                  "Free installation",
                  "Unlimited connections",
                  "Multiple static IPs",
                  "Managed network equipment",
                  "SLA guarantee",
                ],
                popular: false,
              },
            ].map((plan, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  className={`relative h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                    plan.popular ? "border-2 border-blue-500 shadow-lg" : "border border-gray-200"
                  }`}
                >
                  {plan.popular && <Badge className="absolute top-4 right-4 bg-blue-500 text-white">Recommended</Badge>}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                    <div className="mt-4">
                      {isYearly ? (
                        <div>
                          <div className="text-3xl font-bold text-blue-600">
                            NPR {plan.yearlyPrice.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-500 line-through">
                            NPR {plan.originalYearlyPrice.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600">per year</div>
                        </div>
                      ) : (
                        <div>
                          <div className="text-3xl font-bold text-blue-600">
                            NPR {plan.monthlyPrice.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600">per month</div>
                        </div>
                      )}
                    </div>
                    <div className="text-lg font-semibold text-gray-700">{plan.speed}</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-blue-600 mr-3 shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
                          : "bg-gray-900 hover:bg-gray-800"
                      } text-white`}
                    > */}
                      {/* Choose Plan
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Internet Plans?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the best internet connectivity with our advanced features and reliable service
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Zap className="w-8 h-8 text-yellow-500" />,
                title: "Lightning Fast",
                description: "High-speed fiber optic technology for seamless browsing and streaming",
              },
              {
                icon: <Shield className="w-8 h-8 text-green-500" />,
                title: "Reliable Connection",
                description: "99.9% uptime guarantee with redundant network infrastructure",
              },
              {
                icon: <Headphones className="w-8 h-8 text-blue-500" />,
                title: "24/7 Support",
                description: "Round-the-clock technical support from our expert team",
              },
              {
                icon: <Wifi className="w-8 h-8 text-purple-500" />,
                title: "Wide Coverage",
                description: "Extensive network coverage across rural and urban areas",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-gray-100">{feature.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-500 text-white">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Get Connected?</h2>
            <p className="text-xl mb-8 opacity-90">
              Choose your perfect internet plan and join thousands of satisfied customers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Check Coverage
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
                
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
