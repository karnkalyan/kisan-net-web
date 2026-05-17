"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AnimatedHeroSection({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder-4mrsh.png"
          alt="Rural Nepal Internet Connectivity"
          fill
          className="object-cover"
          priority
        />
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
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">{title}</h1>
          <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl">{subtitle}</p>

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
  )
}
