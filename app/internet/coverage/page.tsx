"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Check, MapPin, Search, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import GradientBackground from "@/components/gradient-background"
import { Meteors } from "@/components/meteors"
import SubscribeModal from "@/components/subscribe-modal"

export default function CoveragePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchPerformed, setSearchPerformed] = useState(false)
  const [activePin, setActivePin] = useState(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false)

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setMapLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

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

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setSearchPerformed(true)
    }
  }

  // Sample data for coverage areas based on the expansion plan
  const coverageAreas = [
    {
      district: "Jhapa",
      areas: ["Mechinagar", "Birtamod", "Damak"],
      status: "active",
    },
    {
      district: "Morang",
      areas: ["Biratnagar", "Urlabari", "Pathari"],
      status: "active",
    },
    {
      district: "Sunsari",
      areas: ["Dharan", "Itahari", "Inaruwa"],
      status: "active",
    },
    {
      district: "Kathmandu",
      areas: ["Kathmandu Metropolitan", "Kirtipur", "Dakshinkali"],
      status: "active",
    },
    {
      district: "Lalitpur",
      areas: ["Lalitpur Metropolitan", "Godawari", "Mahalaxmi"],
      status: "active",
    },
    {
      district: "Bhaktapur",
      areas: ["Bhaktapur Municipality", "Madhyapur Thimi", "Changunarayan"],
      status: "active",
    },
    {
      district: "Kavre",
      areas: ["Dhulikhel", "Banepa", "Panauti"],
      status: "coming-soon",
    },
    {
      district: "Sindhupalchok",
      areas: ["Chautara", "Melamchi", "Bahrabise"],
      status: "coming-soon",
    },
    {
      district: "Ramechhap",
      areas: ["Manthali", "Ramechhap", "Doramba"],
      status: "planned",
    },
    {
      district: "Okhaldhunga",
      areas: ["Siddhicharan", "Molung", "Sunkoshi"],
      status: "planned",
    },
  ]

  // Map pins data
  const mapPins = [
    { top: "45%", left: "85%", label: "Jhapa", status: "active" },
    { top: "40%", left: "82%", label: "Morang", status: "active" },
    { top: "35%", left: "80%", label: "Sunsari", status: "active" },
    { top: "30%", left: "55%", label: "Kathmandu", status: "active" },
    { top: "32%", left: "57%", label: "Lalitpur", status: "active" },
    { top: "28%", left: "58%", label: "Bhaktapur", status: "active" },
    { top: "35%", left: "60%", label: "Kavre", status: "coming-soon" },
    { top: "25%", left: "62%", label: "Sindhupalchok", status: "coming-soon" },
    { top: "40%", left: "65%", label: "Ramechhap", status: "planned" },
    { top: "35%", left: "70%", label: "Okhaldhunga", status: "planned" },
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
              Coverage{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">Area</span>
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-emerald-300 mx-auto my-6"></div>
            <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl">
              Check if Kisan Net is available in your area or when we&apos;re planning to expand there
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-md mx-auto mt-10"
          >
            <form onSubmit={handleSearch} className="flex gap-2">
              <Input
                type="text"
                placeholder="Enter your district or municipality"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/90 backdrop-blur-sm text-gray-900 border-none shadow-lg focus:ring-2 focus:ring-green-500"
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600 shadow-lg"
              >
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Coverage Map */}
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
            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">Interactive Coverage Map</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-green-400 to-green-600"></div>
            <p className="mt-6 text-lg text-gray-600">
              Explore our current coverage areas and upcoming expansion locations
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-xl border border-green-100"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-50">
              <div className="relative w-full h-full">
                <Image
                  src="imgages/coverage-map.png"
                  alt="Nepal map with Kisan Net coverage"
                  fill
                  className="object-cover"
                />

                {/* Loading animation */}
                <AnimatePresence>
                  {!mapLoaded && (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center bg-white/80"
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
                        <p className="mt-4 text-green-700 font-medium">Loading map...</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Map pins */}
                {mapLoaded &&
                  mapPins.map((pin, index) => (
                    <motion.div
                      key={index}
                      className="absolute cursor-pointer"
                      style={{ top: pin.top, left: pin.left }}
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                      }}
                      onMouseEnter={() => setActivePin(pin.label)}
                      onMouseLeave={() => setActivePin(null)}
                    >
                      <div className="relative">
                        <motion.div
                          animate={{
                            scale: activePin === pin.label ? [1, 1.2, 1] : 1,
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: activePin === pin.label ? Number.POSITIVE_INFINITY : 0,
                            repeatType: "loop",
                          }}
                        >
                          <MapPin
                            className={`w-8 h-8 ${
                              pin.status === "active"
                                ? "text-green-600"
                                : pin.status === "coming-soon"
                                  ? "text-yellow-500"
                                  : "text-gray-400"
                            }`}
                          />
                        </motion.div>

                        {/* Ripple effect for active pins */}
                        {pin.status === "active" && (
                          <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4">
                            <span className="absolute w-12 h-12 rounded-full bg-green-500/20 animate-ping"></span>
                          </div>
                        )}

                        {/* Pin label */}
                        <AnimatePresence>
                          {(activePin === pin.label || pin.status === "active") && (
                            <motion.div
                              className="absolute top-full left-1/2 -translate-x-1/2 whitespace-nowrap mt-1 px-3 py-1.5 text-xs font-medium bg-white rounded-full shadow-lg border border-green-100"
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -5 }}
                            >
                              {pin.label}
                              <div
                                className={`inline-block ml-1.5 w-2 h-2 rounded-full ${
                                  pin.status === "active"
                                    ? "bg-green-500"
                                    : pin.status === "coming-soon"
                                      ? "bg-yellow-500"
                                      : "bg-gray-400"
                                }`}
                              ></div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center gap-6 mt-6">
            {[
              { color: "bg-green-600", label: "Active Coverage" },
              { color: "bg-yellow-500", label: "Coming Soon (3-6 months)" },
              { color: "bg-gray-400", label: "Planned (6-12 months)" },
            ].map((legend, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded-full ${legend.color}`}></div>
                <span className="text-sm">{legend.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Areas List */}
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
            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">Current & Upcoming Coverage</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-green-400 to-green-600"></div>
            <p className="mt-6 text-lg text-gray-600">
              Detailed list of areas where Kisan Net is currently available or expanding to soon
            </p>
          </motion.div>

          {searchPerformed ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <div className="p-8 bg-white rounded-xl shadow-xl border border-green-100">
                <h3 className="mb-4 text-xl font-bold">Search Results for &quot;{searchQuery}&quot;</h3>

                {/* This is a mock result - in a real app, you'd filter actual data */}
                <div className="p-6 border border-green-100 rounded-lg bg-gradient-to-br from-green-50 to-green-100/50">
                  <div className="flex items-start">
                    <div className="p-1 rounded-full bg-gradient-to-br from-green-400 to-green-500 text-white mt-1 shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-lg">Good news! Kisan Net is available in your area.</p>
                      <p className="mt-2 text-gray-600">
                        We currently provide service in parts of {searchQuery}. To confirm exact availability at your
                        location, please contact our team.
                      </p>
                      <div className="mt-6">
                        <Button
                          className="bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600 shadow-md"
                          onClick={() => setIsSubscribeModalOpen(true)}
                        >
                          Subscribe Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {coverageAreas.map((area, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-none shadow-lg group cursor-pointer">
                    <div
                      className={`h-2 ${
                        area.status === "active"
                          ? "bg-gradient-to-r from-green-600 to-green-500"
                          : area.status === "coming-soon"
                            ? "bg-gradient-to-r from-yellow-500 to-yellow-400"
                            : "bg-gradient-to-r from-gray-400 to-gray-300"
                      }`}
                    ></div>
                    <CardContent className="p-6">
                      <h3 className="mb-2 text-xl font-bold">{area.district}</h3>
                      <div
                        className={`inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full ${
                          area.status === "active"
                            ? "bg-green-100 text-green-800"
                            : area.status === "coming-soon"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {area.status === "active"
                          ? "Active"
                          : area.status === "coming-soon"
                            ? "Coming Soon (3-6 months)"
                            : "Planned (6-12 months)"}
                      </div>

                      <div className="space-y-1">
                        <p className="text-sm font-medium text-gray-500">Areas covered:</p>
                        <ul className="pl-5 space-y-2 mt-2">
                          {area.areas.map((location, i) => (
                            <li key={i} className="flex items-center text-gray-600">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></div>
                              {location}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6">
                        {area.status === "active" ? (
                          <Button
                            className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600 shadow-md"
                            onClick={() => setIsSubscribeModalOpen(true)}
                          >
                            Subscribe Now
                          </Button>
                        ) : area.status === "coming-soon" ? (
                          <Button
                            asChild
                            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-white hover:from-yellow-600 hover:to-yellow-500 shadow-md"
                          >
                            <Link href="/contact">Get Notified</Link>
                          </Button>
                        ) : (
                          <Button
                            asChild
                            variant="outline"
                            className="w-full border-gray-300 hover:bg-gray-50 shadow-sm"
                          >
                            <Link href="/contact">Express Interest</Link>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
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
            <h2 className="text-3xl font-bold text-white md:text-5xl">Join the Digital Revolution</h2>
            <div className="w-20 h-1 mx-auto my-6 bg-gradient-to-r from-green-400 to-green-300"></div>
            <p className="text-xl text-green-100 mb-10">
              Whether we&apos;re already in your area or coming soon, be part of Nepal&apos;s first farmer-owned
              internet service
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
