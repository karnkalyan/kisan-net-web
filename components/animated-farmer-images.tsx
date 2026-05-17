
"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AnimatedFarmerImages() {
  return (
    <div className="absolute inset-0 z-5">
      {/* First image - Top landscape */}
      <motion.div
        className="absolute top-0 left-0 w-full h-2/5"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Rural Nepal landscape with terraced fields"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-900/30"></div>
      </motion.div>

      {/* Second image - Middle right */}
      <motion.div
        className="absolute top-1/4 right-0 w-3/5 h-2/5"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.5, x: 0 }}
        transition={{ duration: 1.4, delay: 0.4 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80"
          alt="Community meeting in rural setting"
          fill
          className="object-cover rounded-l-3xl"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-green-900/20 rounded-l-3xl"></div>
      </motion.div>

      {/* Third image - Bottom with farmer */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1/2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ duration: 1.6, delay: 0.6 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?ixlib=rb-4.0.3&auto=format&fit=crop&w=2127&q=80"
          alt="Farmer working in field with technology"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-900/40 to-transparent"></div>
      </motion.div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-16 h-16 md:w-24 md:h-24"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 0.9, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-green-400/30 to-green-600/30 backdrop-blur-sm border border-white/20 shadow-lg"></div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-1/3 w-12 h-12 md:w-20 md:h-20"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 0.9, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-green-300/30 to-green-500/30 backdrop-blur-sm border border-white/20 shadow-lg"></div>
      </motion.div>

      {/* Animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/10 to-transparent mix-blend-overlay"></div>
    </div>
  )
}
