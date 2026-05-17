"use client"

import { motion } from "framer-motion"
import { Tv } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// Sample IPTV channels data
const channels = [
  { id: 1, name: "Nepal Television", category: "News", language: "Nepali" },
  { id: 2, name: "Kantipur TV", category: "Entertainment", language: "Nepali" },
  { id: 3, name: "Image Channel", category: "Entertainment", language: "Nepali" },
  { id: 4, name: "AP1 HD", category: "Entertainment", language: "Nepali" },
  { id: 5, name: "News24", category: "News", language: "Nepali" },
  { id: 6, name: "Himalaya TV", category: "News", language: "Nepali" },
  { id: 7, name: "Sony Entertainment", category: "Entertainment", language: "Hindi" },
  { id: 8, name: "Star Plus", category: "Entertainment", language: "Hindi" },
  { id: 9, name: "Colors", category: "Entertainment", language: "Hindi" },
  { id: 10, name: "HBO", category: "Movies", language: "English" },
  { id: 11, name: "Discovery", category: "Documentary", language: "English" },
  { id: 12, name: "National Geographic", category: "Documentary", language: "English" },
]

export function IPTVChannelsList() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {channels.map((channel) => (
        <motion.div key={channel.id} variants={fadeInUp}>
          <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-green-100 overflow-hidden group cursor-pointer">
            <CardContent className="flex items-center p-4 relative z-10">
              <div className="p-2 mr-3 rounded-full bg-green-100 text-green-600">
                <Tv className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">{channel.name}</h3>
                <p className="text-xs text-gray-500">
                  {channel.category} • {channel.language}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
