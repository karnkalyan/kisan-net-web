"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { CheckCircle, Wifi, Shield, Zap, Clock, HeartHandshake } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"

export default function InternetFeaturesPage() {
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
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-green-700 to-green-600">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>
        <div className="container px-4 mx-auto text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">Internet Features</h1>
            <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl">
              Discover the advanced features and benefits of our high-speed fiber internet service
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900">Core Features</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-green-600"></div>
            <p className="mt-6 text-lg text-gray-600">
              Our fiber internet service is designed to provide the best possible online experience
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
                icon: <Wifi className="w-10 h-10 text-green-600" />,
                title: "Fiber-to-the-Home",
                description:
                  "Direct fiber connection to your home ensures the fastest and most reliable internet speeds available.",
              },
              {
                icon: <Zap className="w-10 h-10 text-green-600" />,
                title: "Symmetrical Speeds",
                description:
                  "Equal upload and download speeds make video conferencing, gaming, and file sharing seamless.",
              },
              {
                icon: <Shield className="w-10 h-10 text-green-600" />,
                title: "Enhanced Security",
                description: "Built-in network security features protect your connection from common cyber threats.",
              },
              {
                icon: <Clock className="w-10 h-10 text-green-600" />,
                title: "Low Latency",
                description:
                  "Minimal delay in data transmission provides a smoother experience for online gaming and video calls.",
              },
              {
                icon: <HeartHandshake className="w-10 h-10 text-green-600" />,
                title: "Local Support",
                description:
                  "Our local support team understands your needs and provides quick assistance when you need it.",
              },
              {
                icon: <CheckCircle className="w-10 h-10 text-green-600" />,
                title: "Unlimited Data",
                description:
                  "No data caps or throttling - use as much internet as you need without worrying about extra charges.",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-b from-white to-green-50/50 border-none shadow-lg overflow-hidden">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="p-3 mb-4 rounded-full bg-green-100">{feature.icon}</div>
                    <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-gradient-to-b from-white to-green-50">
        <div className="container px-4 mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Technology</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-green-600"></div>
            <p className="mt-6 text-lg text-gray-600">
              We use cutting-edge fiber optic technology to deliver the fastest and most reliable internet service
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Fiber optic cables and technology"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Fiber Optic Network</h3>
                <p className="text-gray-600">
                  Our network uses fiber optic cables that transmit data using light signals, allowing for much faster
                  speeds than traditional copper cables. This technology enables us to deliver gigabit-capable internet
                  to homes and businesses across Nepal.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">FTTH Architecture</h3>
                <p className="text-gray-600">
                  Fiber-to-the-Home (FTTH) means we bring the fiber optic cable directly to your doorstep, eliminating
                  the bottlenecks found in other types of connections. This direct connection ensures you get the full
                  speed and reliability of fiber technology.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Future-Proof Infrastructure</h3>
                <p className="text-gray-600">
                  Our network is built with scalability in mind. As technology advances and bandwidth demands increase,
                  our infrastructure can be upgraded to support even faster speeds without replacing the physical fiber
                  cables already installed.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900">Benefits for Your Home</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-green-600"></div>
            <p className="mt-6 text-lg text-gray-600">
              Experience the advantages of high-speed fiber internet in every aspect of your digital life
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Seamless Streaming",
                description:
                  "Enjoy 4K and 8K streaming on multiple devices simultaneously without buffering or quality drops.",
                image:
                  "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
              },
              {
                title: "Work From Home",
                description:
                  "Reliable connectivity for video conferencing, cloud applications, and file sharing makes remote work effortless.",
                image:
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
              },
              {
                title: "Online Gaming",
                description:
                  "Low latency and high bandwidth provide a competitive edge with faster response times and smoother gameplay.",
                image:
                  "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
              },
              {
                title: "Smart Home",
                description:
                  "Connect and control multiple smart devices throughout your home with reliable and responsive connectivity.",
                image:
                  "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
              },
            ].map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full overflow-hidden border-none shadow-lg">
                  <div className="relative h-48">
                    <Image
                      src={benefit.image || "/placeholder.svg"}
                      alt={benefit.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold">Experience the Difference</h2>
            <p className="mt-4 text-lg text-green-100 mb-8">
              Join thousands of satisfied customers enjoying high-speed fiber internet across Nepal
            </p>

            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <Button asChild size="lg" className="bg-white text-green-700 hover:bg-green-50">
                <Link href="/internet/plans">View Plans</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-700 bg-transparent"
              >
                <Link href="/coverage">Check Coverage</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
