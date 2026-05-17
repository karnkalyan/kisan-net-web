"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, CheckCircle, Globe, Wifi, Tv, ArrowDown, DollarSign, Router, Signal } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import GradientBackground from "@/components/gradient-background"
import { Meteors } from "@/components/meteors"
import SubscribeModal from "@/components/subscribe-modal"
import { IPTVChannelsList } from "@/components/iptv-channels-list"
import {Link as ScrollLink, Element as ScrollElement} from "react-scroll" 


export default function Home() {
  const { scrollY } = useScroll()
  const ref = useRef(null)
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false)

  const y = useTransform(scrollY, [0, 500], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

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
      <SubscribeModal isOpen={isSubscribeModalOpen} setIsOpen={setIsSubscribeModalOpen} />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <GradientBackground />
        <Meteors number={20} />

        {/* Single Hero Background Image */}
        <div className="absolute inset-0 z-5">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.9, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <Image
              src="/images/farmers-in-Nepalese-Mountain-Valley.png"
              alt="Stunning Nepal Himalayan landscape with terraced fields and rural villages"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-green-900/30"></div>
          </motion.div>

          {/* Animated overlay patterns */}
          <motion.div
            className="absolute top-1/5 left-1/5 w-32 h-32 rounded-full bg-green-500/10 backdrop-blur-sm border border-green-400/20"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          <motion.div
            className="absolute bottom-1/4 right-1/5 w-24 h-24 rounded-full bg-green-400/15 backdrop-blur-sm border border-green-300/25"
            animate={{
              y: [0, 25, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 2,
            }}
          />

          <motion.div
            className="absolute top-2/3 right-1/3 w-16 h-16 rounded-full bg-green-300/20 backdrop-blur-sm border border-green-200/30"
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.7, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 4,
            }}
          />
        </div>

        {/* Simplified floating ISP components */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-15">
          {/* Reduced Router icons */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`router-${i}`}
              className="absolute"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: Math.random() * 4,
              }}
            >
              <Router className="w-6 h-6 md:w-7 md:h-7 text-white opacity-20" />
            </motion.div>
          ))}

          {/* Reduced Signal icons */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`signal-${i}`}
              className="absolute"
              style={{
                top: `${25 + Math.random() * 50}%`,
                left: `${15 + Math.random() * 70}%`,
              }}
              animate={{
                y: [0, -12, 0],
                opacity: [0.15, 0.35, 0.15],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: Math.random() * 3,
              }}
            >
              <Signal className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </motion.div>
          ))}

          {/* Simplified floating connection lines */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${30 + Math.random() * 50}px`,
                height: "1px",
                opacity: 0.1,
                transformOrigin: "left center",
              }}
              animate={{
                scaleX: [1, 1.5, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 8 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: Math.random() * 4,
              }}
            />
          ))}

          {/* Reduced pulsing connection nodes */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`node-${i}`}
              className="absolute rounded-full bg-green-400"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${4 + Math.random() * 6}px`,
                height: `${4 + Math.random() * 6}px`,
                opacity: 0.2,
              }}
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 via-green-700/50 to-green-600/60 z-10" />

        <motion.div
          className="container relative z-20 px-4 mx-auto text-center text-white"
          style={{ y, opacity }}
          ref={ref}
        >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 leading-tight text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              Nepal's First{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-emerald-200 to-green-100 font-extrabold">
                Farmer-Owned
              </span>{" "}
              ISP
            </motion.h1>
            <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-green-400 to-emerald-300 mx-auto my-4 sm:my-6"></div>

            {/* Nepali Slogan */}
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl font-bold text-green-200 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              ग्राहक पनि आफै, मालिक पनि आफै
            </motion.p>

            {/* Main Slogan */}
            <motion.p
              className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl font-medium max-w-4xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Connecting Nepal Through Community Ownership
            </motion.p>

            {/* Additional Slogan from Version 25 */}
            <motion.p
              className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-green-200 max-w-3xl mx-auto px-4 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              "Empowering Farmers, Connecting Communities, Building Nepal's Digital Future"
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-10 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-white text-green-700 hover:bg-green-50 hover:scale-105 transition-all shadow-lg group"
            >
              <Link href="/coverage">
                Check Coverage
                <Globe className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600 hover:scale-105 transition-all shadow-lg group"
              onClick={() => setIsSubscribeModalOpen(true)}
            >
              Subscribe Now
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-3 sm:gap-4 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <motion.div
              className="flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base border border-white/20"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span>High-speed fiber</span>
            </motion.div>

            <motion.div
              className="flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base border border-white/20"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span>Unlimited data</span>
            </motion.div>

            <motion.div
              className="flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base border border-white/20"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span>Community owned</span>
            </motion.div>

            <motion.div
              className="flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base border border-white/20"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span>24/7 Support</span>
            </motion.div>

            <motion.div
              className="flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base border border-white/20"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span>Zero upfront cost</span>
            </motion.div>
          </motion.div>

          {/* Scroll to explore */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col items-center cursor-pointer animate-bounce mt-8 sm:mt-12"
          >
            <p className="text-xs sm:text-sm mb-2">Scroll to explore</p>
            <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* Core Concepts Section */}
      {/* <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-green-100 to-transparent"></div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-green-300/20 to-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-green-300/20 to-green-500/20 rounded-full blur-3xl"></div>

        <div className="container px-4 mx-auto">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Core Concepts</h2>
            <div className="w-16 sm:w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-green-400 to-green-600"></div>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              The core concept revolves around empowering farmers to become proprietors of an Internet Broadband company
              WITHOUT the burden of UPFRONT INVESTMENT.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                icon: <DollarSign className="w-8 sm:w-10 h-8 sm:h-10 text-green-600" />,
                title: "Zero Upfront Cost",
                description:
                  "Investment icon representing zero upfront cost for KISAN members - making ownership accessible to all rural farmers.",
              },
              {
                icon: <CheckCircle className="w-8 sm:w-10 h-8 sm:h-10 text-green-600" />,
                title: "Ownership Through Subscription",
                description: "A portion of your monthly internet fee transforms into company shares over time.",
              },
              {
                icon: <Globe className="w-8 sm:w-10 h-8 sm:h-10 text-green-600" />,
                title: "Community Empowerment",
                description:
                  "Collective ownership ensures the benefits of digital connectivity flow back to rural communities.",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-b from-white to-green-50/50 border-none shadow-lg overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-green-300/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardContent className="flex flex-col items-center p-6 sm:p-8 text-center relative z-10">
                    <div className="p-3 sm:p-4 mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-green-100 to-green-200 group-hover:from-green-200 group-hover:to-green-300 transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="mb-3 text-lg sm:text-xl font-bold">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Our Concepts and Vision */}
      {/* <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-400/10 rounded-full blur-3xl"></div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="grid gap-8 sm:gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-green-50 to-green-100/50 p-6 sm:p-8 rounded-xl shadow-lg border border-green-100"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Our Concepts and Vision</h2>
              <div className="w-16 sm:w-20 h-1 mb-4 sm:mb-6 bg-gradient-to-r from-green-400 to-green-600"></div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                To bridge Nepal's digital gap by building a sustainable ISP business network through agricultural
                cooperatives and community ownership.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-green-50 to-green-100/50 p-6 sm:p-8 rounded-xl shadow-lg border border-green-100"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Our Mission</h2>
              <div className="w-16 sm:w-20 h-1 mb-4 sm:mb-6 bg-gradient-to-r from-green-400 to-green-600"></div>
              <ul className="space-y-3 text-sm sm:text-base text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-600 mr-2 mt-0.5 shrink-0" />
                  <span>Empower small farmers and rural households with affordable internet</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-600 mr-2 mt-0.5 shrink-0" />
                  <span>Promote local ownership through cooperative-driven ISP model</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-600 mr-2 mt-0.5 shrink-0" />
                  <span>Create employment and digital equity through sustainable infrastructure</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 sm:mt-12 bg-gradient-to-br from-green-50 to-green-100/50 p-6 sm:p-8 rounded-xl shadow-lg border border-green-100"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Our Goals</h2>
            <div className="w-16 sm:w-20 h-1 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-green-400 to-green-600"></div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mt-1 p-1 rounded-full bg-gradient-to-br from-green-400 to-green-500 text-white shrink-0">
                  <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5" />
                </div>
                <p className="text-sm sm:text-base text-gray-600 ml-4">
                  Establish a scalable ISP network infrastructure with robust connectivity, ensuring reliable and
                  high-quality internet services for customers across all regions.
                </p>
              </li>
              <li className="flex items-start">
                <div className="mt-1 p-1 rounded-full bg-gradient-to-br from-green-400 to-green-500 text-white shrink-0">
                  <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5" />
                </div>
                <p className="text-sm sm:text-base text-gray-600 ml-4">
                  Connect a significant percentage of households and small farmers' cooperatives, enhancing digital
                  literacy, enabling access to online resources, e-commerce platforms, e-learning, telehealth services
                  and improving overall quality of life.
                </p>
              </li>
              <li className="flex items-start">
                <div className="mt-1 p-1 rounded-full bg-gradient-to-br from-green-400 to-green-500 text-white shrink-0">
                  <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5" />
                </div>
                <p className="text-sm sm:text-base text-gray-600 ml-4">
                  Drive local socio-economic development by creating job opportunities, supporting entrepreneurship, and
                  fostering digital innovation, ultimately contributing to the growth and empowerment of communities.
                </p>
              </li>
            </ul>
          </motion.div>
        </div>
      </section> */}

      {/* IPTV Channels Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat opacity-5"></div>
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-green-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-green-400/20 rounded-full blur-3xl"></div>

        <div className="container px-4 mx-auto relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12 sm:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">IPTV Channels</h2>
            <div className="w-16 sm:w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-green-400 to-green-600"></div>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600">
              Enjoy a wide range of local and international channels with our IPTV service
            </p>
          </motion.div>

          <IPTVChannelsList />

          <div className="text-center mt-8 sm:mt-10">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600 hover:scale-105 transition-all shadow-lg group"
            >
              <Link href="/iptv">
                View All Channels
                <Tv className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat opacity-5"></div>
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-green-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-green-400/20 rounded-full blur-3xl"></div>

        <div className="container px-4 mx-auto relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12 sm:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Our Services</h2>
            <div className="w-16 sm:w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-green-400 to-green-600"></div>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600">
              Explore our range of connectivity solutions designed for homes and businesses
            </p>
          </motion.div>

          <motion.div
            className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Internet",
                description: "High-speed fiber internet with unlimited data and reliable connectivity",
                icon: <Wifi className="w-6 sm:w-8 h-6 sm:h-8" />,
                link: "/internet",
              },
              {
                title: "IPTV",
                description: "Stream your favorite channels and content with our IPTV service",
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
                    className="w-6 sm:w-8 h-6 sm:h-8"
                  >
                    <rect width="20" height="15" x="2" y="7" rx="2" ry="2" />
                    <polyline points="17 2 12 7 7 2" />
                    <line x1="2" x2="22" y1="17" y2="17" />
                  </svg>
                ),
                link: "/iptv",
              },
              {
                title: "Business Solutions",
                description: "Tailored connectivity solutions for businesses of all sizes",
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
                    className="w-6 sm:w-8 h-6 sm:h-8"
                  >
                    <path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
                    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                    <path d="M16 6h.01" />
                    <path d="M16 10h.01" />
                    <path d="M16 14h.01" />
                    <path d="M16 18h.01" />
                    <path d="M8 6h.01" />
                    <path d="M8 10h.01" />
                    <path d="M8 14h.01" />
                    <path d="M8 18h.01" />
                  </svg>
                ),
                link: "/business",
              },
              {
                title: "Network Accessories",
                description: "Quality routers, extenders and accessories for optimal connectivity",
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
                    className="w-6 sm:w-8 h-6 sm:h-8"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                    <path d="M8 7h6" />
                    <path d="M8 11h8" />
                    <path d="M8 15h6" />
                    <path d="M8 18h6" />
                  </svg>
                ),
                link: "/accessories",
              },
            ].map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Link href={service.link}>
                  <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-b from-white to-green-50/50 border-none shadow-lg overflow-hidden group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-green-300/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    <CardContent className="flex flex-col items-center p-6 sm:p-8 text-center relative z-10">
                      <div className="p-3 sm:p-4 mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-green-100 to-green-200 group-hover:from-green-200 group-hover:to-green-300 transition-colors text-green-600">
                        {service.icon}
                      </div>
                      <h3 className="mb-3 text-lg sm:text-xl font-bold">{service.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600">{service.description}</p>
                      <div className="mt-4 text-green-600 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Learn more</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Ready to Join the Revolution?
            </h2>
            <div className="w-16 sm:w-20 h-1 mx-auto my-4 sm:my-6 bg-gradient-to-r from-green-400 to-green-300"></div>
            <p className="text-lg sm:text-xl text-green-100 mb-8 sm:mb-10 px-4">
              Become part of Nepal&apos;s first farmer-owned internet service provider and enjoy affordable, reliable
              connectivity.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-10 px-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-white text-green-700 hover:bg-green-50 hover:scale-105 transition-all shadow-lg group"
              >
                <Link href="/coverage">
                  Check Coverage
                  <Globe className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-400 text-white hover:from-green-600 hover:to-green-500 hover:scale-105 transition-all shadow-lg group"
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
