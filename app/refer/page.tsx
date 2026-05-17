"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Gift, Mail, Share, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast, Toaster } from "react-hot-toast"
import GradientBackground from "@/components/gradient-background"
import { Meteors } from "@/components/meteors"

export default function ReferPage() {
  const [formData, setFormData] = useState({
    yourName: "",
    yourEmail: "",
    yourPhone: "",
    friendName: "",
    friendEmail: "",
    friendPhone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/sendReferral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.yourName,
          email: formData.yourEmail,
          phone: formData.yourPhone,
          friendName: formData.friendName,
          friendEmail: formData.friendEmail,
          friendPhone: formData.friendPhone,
          message: formData.message,
        }),
      })
      const data = await response.json()

      if (data.success) {
        toast.success("Referral sent! Thank you for referring your friend.")

        // Reset Form
        setFormData({
          yourName: "",
          yourEmail: "",
          yourPhone: "",
          friendName: "",
          friendEmail: "",
          friendPhone: "",
          message: "",
        })
      } else {
        toast.error(data.error || "Failed to send referral.")
      }
    } catch (err) {
      console.error(err)
      toast.error("Something went wrong. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* Toaster for notification */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <GradientBackground />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 via-green-700/70 to-green-600/70 z-10" />

        <div className="container relative z-20 px-4 mx-auto text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-3xl font-bold tracking-tight md:text-6xl mb-4">
              Refer a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">
                Friend
              </span>
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-emerald-300 mx-auto my-6"></div>
            <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl">
              Share the benefits of Kisan Net with your friends and family and earn rewards
            </p>
          </motion.div>
        </div>
      </section>

      {/* Referral Program Section */}
      <section className="py-16 bg-white relative overflow-hidden md:py-24">
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
            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">How It Works</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-green-400 to-green-600"></div>
            <p className="mt-6 text-lg text-gray-600">
              Our referral program is simple - refer your friends and both of you get rewarded
              <p>Referrals are only applicable to <strong>Home Plans</strong></p>
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <Share className="w-10 h-10 text-green-600" />,
                title: "Refer a Friend",
                description: "Fill out the referral form with your friend's details",
              },
              {
                icon: <Users className="w-10 h-10 text-green-600" />,
                title: "Friend Subscribes",
                description: "When your friend subscribes to any of our plans",
              },
              {
                icon: <Gift className="w-10 h-10 text-green-600" />,
                title: "Both Get Rewarded",
                description: "Both you and your friend receive a month of free service",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-b from-white to-green-50/50 border-none shadow-lg overflow-hidden group">
                  <CardContent className="flex flex-col items-center p-8 text-center relative z-10">
                    <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-green-100 to-green-200 group-hover:from-green-200 group-hover:to-green-300 transition-colors">
                      {step.icon}
                    </div>
                    <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Form Section */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-white relative overflow-hidden md:py-24">
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
            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">Refer Now</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-green-400 to-green-600"></div>
            <p className="mt-6 text-lg text-gray-600">Fill out the form below to refer your friend to Kisan Net</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Card className="overflow-hidden border-none shadow-xl">
              <CardContent className="p-0">
                <div className="p-6 bg-gradient-to-r from-green-600 to-green-500">
                  <h2 className="text-2xl font-bold text-white">Referral Form</h2>
                  <p className="mt-2 text-green-100">Share Kisan Net with your friends and family</p>
                </div>

                <form id="referral-form" onSubmit={handleSubmit} className="p-6 space-y-6">
                  {/* Your Info */}
                  <div>
                    <h3 className="text-lg font-bold mb-4">Your Information</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="yourName">Your Name</Label>
                        <Input id="yourName" name="yourName" value={formData.yourName} onChange={handleChange} placeholder="Your full name" required className="border-green-200 focus:border-green-500 focus:ring-green-500" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="yourEmail">Your Email</Label>
                        <Input id="yourEmail" name="yourEmail" type="email" value={formData.yourEmail} onChange={handleChange} placeholder="Your email address" required className="border-green-200 focus:border-green-500 focus:ring-green-500" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="yourPhone">Your Phone Number</Label>
                        <Input id="yourPhone" name="yourPhone" value={formData.yourPhone} onChange={handleChange} placeholder="Your phone number" required className="border-green-200 focus:border-green-500 focus:ring-green-500" />
                      </div>
                    </div>
                  </div>

                  {/* Friend Info */}
                  <div>
                    <h3 className="text-lg font-bold mb-4">Friend's Information</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="friendName">Friend's Name</Label>
                        <Input id="friendName" name="friendName" value={formData.friendName} onChange={handleChange} placeholder="Your friend's full name" required className="border-green-200 focus:border-green-500 focus:ring-green-500" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="friendEmail">Friend's Email</Label>
                        <Input id="friendEmail" name="friendEmail" type="email" value={formData.friendEmail} onChange={handleChange} placeholder="Your friend's email address" required className="border-green-200 focus:border-green-500 focus:ring-green-500" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="friendPhone">Friend's Phone Number</Label>
                        <Input id="friendPhone" name="friendPhone" value={formData.friendPhone} onChange={handleChange} placeholder="Your friend's phone number" required className="border-green-200 focus:border-green-500 focus:ring-green-500" />
                      </div>
                    </div>
                  </div>

                  {/* Personal Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Personal Message (Optional)</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Add a personal message to your friend..." rows={3} className="border-green-200 focus:border-green-500 focus:ring-green-500" />
                  </div>

                  {/* Submit */}
                  <Button type="submit" className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600 shadow-md" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2 animate-spin" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        Send Referral
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="py-16 bg-white relative overflow-hidden md:py-24">
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
            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">Referral Rewards</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-green-400 to-green-600"></div>
            <p className="mt-6 text-lg text-gray-600">The more friends you refer, the more rewards you earn</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <Gift className="w-10 h-10 text-green-600" />,
                title: "Free Month",
                description: "Get a free month of Kisan Net for every friend that subscribes",
              },
              {
                icon: <Users className="w-10 h-10 text-green-600" />,
                title: "Tiered Rewards",
                description: "Refer multiple friends and unlock bigger rewards",
              },
              {
                icon: <Share className="w-10 h-10 text-green-600" />,
                title: "Community Growth",
                description: "Help your community access faster internet and earn perks",
              },
            ].map((reward, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-b from-white to-green-50/50 border-none shadow-lg overflow-hidden group">
                  <CardContent className="flex flex-col items-center p-8 text-center relative z-10">
                    <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-green-100 to-green-200 group-hover:from-green-200 group-hover:to-green-300 transition-colors">
                      {reward.icon}
                    </div>
                    <h3 className="mb-3 text-xl font-bold">{reward.title}</h3>
                    <p className="text-gray-600">{reward.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-500 text-white relative overflow-hidden md:py-24">
        <div className="container px-4 mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl font-bold md:text-5xl">Start Referring Today</h2>
            <p className="mt-4 text-lg md:text-xl">Earn rewards and help your friends get better internet access</p>
            <Button
              onClick={() => document.getElementById("referral-form")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-8 bg-white text-green-600 hover:bg-green-100 hover:text-green-700 shadow-lg"
            >
              Refer a Friend <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
