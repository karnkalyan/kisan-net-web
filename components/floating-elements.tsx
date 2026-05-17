"use client"

import { motion } from "framer-motion"
import { Wifi, Globe, Router, Signal } from 'lucide-react'

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-15">
      {/* WiFi Icons */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`wifi-${i}`}
          className="absolute"
          style={{
            top: `${10 + Math.random() * 80}%`,
            left: `${5 + Math.random() * 90}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 10, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        >
          <Wifi className="w-6 h-6 md:w-8 md:h-8 text-white opacity-30" />
        </motion.div>
      ))}

      {/* Globe Icons */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`globe-${i}`}
          className="absolute"
          style={{
            top: `${15 + Math.random() * 70}%`,
            left: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            y: [0, -25, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 12 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: Math.random() * 4,
          }}
        >
          <Globe className="w-5 h-5 md:w-7 md:h-7 text-white opacity-25" />
        </motion.div>
      ))}

      {/* Floating connection lines */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`connection-${i}`}
          className="absolute bg-white rounded-full opacity-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${30 + Math.random() * 80}px`,
            height: "2px",
            transformOrigin: "left center",
          }}
          animate={{
            scaleX: [1, 2, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Pulsing nodes */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute rounded-full bg-green-400"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${4 + Math.random() * 8}px`,
            height: `${4 + Math.random() * 8}px`,
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}
