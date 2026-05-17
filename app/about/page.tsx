"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { CheckCircle, Heart, Lightbulb, Target, Users } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import AnimatedBackground from "@/components/animated-background"

export default function AboutPage() {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <AnimatedBackground />
        <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-500 opacity-90" />

        <div className="container relative z-10 px-4 py-20 mx-auto text-center text-white md:py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">About Kisan Net</h1>
            <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl">
              Nepal&apos;s first farmer-owned internet service provider, revolutionizing rural connectivity through
              community ownership
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white md:py-24">
        <div className="container px-4 mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Our Story</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-green-600"></div>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="relative rounded-xl overflow-hidden h-[400px]">
                <Image
                  src="/images/farmers-in-Nepalese-Mountain-Valley.png"
                  alt="Rural Nepal landscape with farmers working in terraced fields"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent rounded-xl"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-6 rounded-xl shadow-lg border border-green-100">
                <div className="flex items-start mb-4">
                  <Heart className="w-8 h-8 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Why We Started</h3>
                    <p className="text-gray-600">
                      In the remote villages of Nepal, farmers watched as the digital world passed them by. While cities
                      enjoyed high-speed internet, rural communities remained disconnected, unable to access online
                      markets, education, or healthcare services that could transform their lives.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-6 rounded-xl shadow-lg border border-green-100">
                <div className="flex items-start mb-4">
                  <Lightbulb className="w-8 h-8 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">How We Began</h3>
                    <p className="text-gray-600">
                      A group of visionary farmers came together with a revolutionary idea: what if the community could
                      own their internet infrastructure? Through agricultural cooperatives and local backing, they
                      created a model where farmers become stakeholders in their connectivity solution.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-6 rounded-xl shadow-lg border border-green-100">
                <div className="flex items-start mb-4">
                  <Target className="w-8 h-8 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                    <p className="text-gray-600">
                      We envision a Nepal where every farmer has access to reliable, affordable internet. By creating
                      local jobs, empowering communities, and building an inclusive ISP network, we&apos;re not just
                      connecting homes – we&apos;re connecting dreams to opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-white md:py-24">
        <div className="container px-4 mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Our Mission</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-green-600"></div>
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
                icon: <CheckCircle className="w-10 h-10 text-green-600" />,
                title: "Empower Rural Communities",
                description: "Empower small farmers and rural households with affordable internet access",
              },
              {
                icon: <Users className="w-10 h-10 text-green-600" />,
                title: "Cooperative Ownership",
                description: "Promote local ownership through cooperative-driven ISP model",
              },
              {
                icon: <CheckCircle className="w-10 h-10 text-green-600" />,
                title: "Digital Equity",
                description: "Create employment and digital equity through sustainable infrastructure",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-b from-white to-green-50/50 border-none shadow-lg overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-green-300/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardContent className="flex flex-col items-center p-8 text-center relative z-10">
                    <div className="p-4 mb-6 rounded-full bg-gradient-to-br from-green-100 to-green-200 group-hover:from-green-200 group-hover:to-green-300 transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-16 bg-white md:py-24">
        <div className="container px-4 mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">What Makes Us Different</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-green-600"></div>
            <p className="mt-6 text-lg text-gray-600">
              Our unique approach to internet service delivery sets us apart from traditional ISPs
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Community Ownership",
                description:
                  "Unlike traditional ISPs, our customers become shareholders, ensuring profits flow back to the community.",
              },
              {
                title: "Zero Upfront Investment",
                description:
                  "Farmers can become owners without any initial capital investment - ownership grows through monthly subscriptions.",
              },
              {
                title: "Local Employment",
                description:
                  "We prioritize hiring from local communities, creating jobs and building technical expertise in rural areas.",
              },
              {
                title: "Affordable Pricing",
                description:
                  "Our cooperative model allows us to offer competitive pricing while maintaining high-quality service.",
              },
              {
                title: "Reliable Infrastructure",
                description:
                  "We use fiber-to-the-home (FTTH) technology to ensure fast, stable internet connections for all users.",
              },
              {
                title: "Community Support",
                description:
                  "Local ownership means faster response times and support that truly understands community needs.",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-b from-white to-green-50/50 border-none shadow-lg overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-green-300/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardContent className="p-6 relative z-10">
                    <h3 className="mb-3 text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-500 md:py-24">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white md:text-4xl">Join the Revolution</h2>
            <p className="mt-6 text-xl text-green-100">
              Be part of Nepal&apos;s digital transformation. Connect with us and become a stakeholder in your
              community&apos;s future.
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
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
