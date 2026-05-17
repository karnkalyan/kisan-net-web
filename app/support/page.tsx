"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ChevronDown, HelpCircle, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import GradientBackground from "@/components/gradient-background"
import { Meteors } from "@/components/meteors"

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const handleSearch = (e) => {
    e.preventDefault()
    // In a real app, this would filter the FAQs based on the search query
  }

  // FAQ categories and questions
  const faqCategories = [
    {
      title: "Account & Billing",
      faqs: [
        {
          question: "How do I find my Customer ID?",
          answer:
            "Your Customer ID can be found on your monthly invoice, in the welcome email you received when you signed up, or by logging into your account dashboard. You can also contact our customer support team for assistance.",
        },
        {
          question: "How do I pay my bill?",
          answer:
            "You can pay your bill through multiple methods: online through our customer portal, via mobile banking apps (eSewa, Khalti, etc.), by visiting our office, or through automatic bank payments. We send payment reminders via SMS and email before the due date.",
        },
        {
          question: "What happens if I miss a payment?",
          answer:
            "If you miss a payment, you'll receive a reminder notification. A grace period of 7 days is provided, after which a late fee may be applied. If payment remains outstanding for more than 15 days, your service may be temporarily suspended until payment is received.",
        },
        {
          question: "How do I update my contact information?",
          answer:
            "You can update your contact information by logging into your customer dashboard and navigating to the 'Profile' section. Alternatively, you can contact our customer support team who will assist you with updating your information.",
        },
      ],
    },
    {
      title: "Internet Service",
      faqs: [
        {
          question: "What should I do if my internet is slow?",
          answer:
            "If you're experiencing slow internet, try these troubleshooting steps: 1) Restart your router, 2) Check if the issue affects all devices or just one, 3) Run a speed test at different times of day, 4) Ensure no heavy downloads or streaming are happening on your network. If the issue persists, contact our technical support team.",
        },
        {
          question: "How do I set up my WiFi router?",
          answer:
            "When our technicians install your service, they will set up your router. If you need to reset or reconfigure it, you can follow the instructions in the user manual provided during installation. For assistance, you can also call our technical support team who will guide you through the process.",
        },
        {
          question: "What is the difference between 2.4GHz and 5GHz WiFi?",
          answer:
            "2.4GHz WiFi has better range but slower speeds and more interference from other devices. 5GHz WiFi offers faster speeds but shorter range and less interference. Most modern routers support both frequencies. For large homes, we recommend using both: 5GHz for devices near the router and 2.4GHz for devices further away.",
        },
        {
          question: "Why does my connection drop occasionally?",
          answer:
            "Connection drops can be caused by various factors including signal interference, router issues, or network maintenance. Try restarting your router, checking for physical damage to cables, and ensuring your router is placed in an optimal location. If the issue persists, our technical team can perform a line check and resolve any network-related issues.",
        },
      ],
    },
    {
      title: "Ownership Model",
      faqs: [
        {
          question: "How does the ownership model work?",
          answer:
            "Our unique ownership model transforms subscribers into shareholders over time. A portion of your monthly subscription fee is converted into company shares. After 5 years of continuous subscription, you'll own shares worth NPR 10,000, plus an additional NPR 10,000 bonus in the sixth year, potentially valued at NPR 100,000 if share prices increase.",
        },
        {
          question: "How do I track my ownership progress?",
          answer:
            "You can track your ownership progress through your customer dashboard. Log in to your account and navigate to the 'Ownership' section where you'll see a detailed breakdown of your accumulated shares, current value, and projected future value based on your subscription plan.",
        },
        {
          question: "What benefits do I get as an owner?",
          answer:
            "As an owner, you receive several benefits: voting rights in company decisions, annual dividends based on company performance, discounted rates on service upgrades, priority customer support, and the potential for capital appreciation of your shares if the company grows successfully.",
        },
        {
          question: "Can I sell my shares?",
          answer:
            "After a minimum holding period of 3 years, you can sell your shares back to the company or to other interested parties according to our share transfer policy. The value of shares will be determined based on the company's current valuation and market conditions at the time of sale.",
        },
      ],
    },
    {
      title: "Technical Support",
      faqs: [
        {
          question: "How do I troubleshoot connection issues?",
          answer:
            "For connection issues, follow these steps: 1) Restart your router by unplugging it for 30 seconds, 2) Check all cable connections, 3) Try connecting via ethernet cable to rule out WiFi issues, 4) Restart your device. If these steps don't resolve the issue, contact our technical support team for assistance.",
        },
        {
          question: "How do I change my WiFi password?",
          answer:
            "To change your WiFi password: 1) Open a web browser and enter your router's IP address (usually 192.168.0.1 or 192.168.1.1), 2) Log in with your admin credentials (provided during installation), 3) Navigate to wireless or WiFi settings, 4) Update the password, 5) Save changes and reconnect your devices with the new password.",
        },
        {
          question: "What equipment do I need for your service?",
          answer:
            "For our standard service, we provide all necessary equipment including a fiber optic terminal (ONT) and a WiFi router. For premium plans, we offer advanced routers with better coverage. If you have specific requirements or a large property, our technicians can recommend additional equipment like WiFi extenders or mesh systems.",
        },
        {
          question: "How do I optimize my WiFi coverage?",
          answer:
            "To optimize WiFi coverage: 1) Place your router in a central location, 2) Keep it elevated and away from walls and metal objects, 3) Avoid interference from other electronic devices, 4) Consider using WiFi extenders for larger homes, 5) Regularly update your router's firmware. Our technicians can perform a site survey to recommend the optimal setup for your space.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <GradientBackground />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 via-green-700/70 to-green-600/70 z-10" />

        <div className="container relative z-20 px-4 mx-auto text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-3xl font-bold tracking-tight md:text-6xl mb-4">
              Customer{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">
                Support
              </span>
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-emerald-300 mx-auto my-6"></div>
            <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl">
              Find answers to common questions or get in touch with our support team
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
                placeholder="Search for answers..."
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

      {/* Quick Help Cards */}
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
            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">Quick Help</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-green-400 to-green-600"></div>
            <p className="mt-6 text-lg text-gray-600">Common issues and how to resolve them</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Internet Connection Issues",
                description: "Troubleshoot common connection problems",
                link: "#internet-service",
              },
              {
                title: "Billing & Payment",
                description: "Questions about invoices and payment methods",
                link: "#account-billing",
              },
              {
                title: "WiFi Setup & Optimization",
                description: "Get the most out of your WiFi network",
                link: "#technical-support",
              },
              {
                title: "Ownership Model",
                description: "Learn about becoming a part-owner",
                link: "#ownership-model",
              },
              {
                title: "Speed Issues",
                description: "Why your internet might be running slow",
                link: "#internet-service",
              },
              {
                title: "Account Management",
                description: "Update your details and preferences",
                link: "#account-billing",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={card.link}>
                  <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-b from-white to-green-50/50 border-none shadow-lg overflow-hidden group cursor-pointer">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="p-3 mb-4 rounded-full bg-gradient-to-br from-green-100 to-green-200 group-hover:from-green-200 group-hover:to-green-300 transition-colors">
                        <HelpCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                      <p className="text-gray-600 mb-4">{card.description}</p>
                      <div className="mt-auto text-green-600 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Learn more</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">Frequently Asked Questions</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-green-400 to-green-600"></div>
            <p className="mt-6 text-lg text-gray-600">Find answers to our most commonly asked questions</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                id={category.title.toLowerCase().replace(/\s+/g, "-")}
                className="mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
                <Accordion
                  type="single"
                  collapsible
                  className="bg-white rounded-xl shadow-lg border border-green-100 overflow-hidden"
                >
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`item-${categoryIndex}-${faqIndex}`}
                      className="border-b border-green-100 last:border-0"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:bg-green-50 transition-colors text-left">
                        <div className="flex items-start">
                          <ChevronDown className="w-5 h-5 mr-2 shrink-0 text-green-600 transition-transform duration-200" />
                          <span className="font-medium">{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4 bg-green-50/50">
                        <p className="text-gray-600 pl-7">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
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
            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">Still Need Help?</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-green-400 to-green-600"></div>
            <p className="mt-6 text-lg text-gray-600">Our support team is ready to assist you</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Call Us",
                description: "Speak directly with our support team",
                details: "9705403488, 01-4546048/49",

                hours: "Sunday - Friday, 8:00 AM - 6:00 PM",
                buttonText: "Call Now",
                buttonLink: "tel:+977-9705403488",
              },
              {
                title: "Email Support",
                description: "Send us an email and we'll respond promptly",
                details: "support@kisan.net.np",
                hours: "24/7 - Response within 24 hours",
                buttonText: "Email Us",
                buttonLink: "mailto:support@kisan.net.np",
              },
              {
                title: "Live Chat",
                description: "Chat with our support team in real-time",
                details: "Available on our website and app",
                hours: "Sunday - Friday, 8:00 AM - 8:00 PM",
                buttonText: "Start Chat",
                buttonLink: "#",
              },
            ].map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-b from-white to-green-50/50 border-none shadow-lg overflow-hidden">
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                    <p className="text-gray-600 mb-4">{option.description}</p>
                    <div className="bg-green-50 p-4 rounded-lg mb-6">
                      <p className="font-medium text-green-800">{option.details}</p>
                      <p className="text-sm text-green-700 mt-1">{option.hours}</p>
                    </div>
                    <div className="mt-auto">
                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600 shadow-md"
                      >
                        <Link href={option.buttonLink}>{option.buttonText}</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Help Resources */}
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
            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">Self-Help Resources</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-green-400 to-green-600"></div>
            <p className="mt-6 text-lg text-gray-600">
              Guides and tutorials to help you get the most out of your service
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Router Setup Guide",
                description: "Step-by-step instructions for setting up your router",
                link: "#",
              },
              {
                title: "WiFi Optimization Tips",
                description: "Improve your WiFi coverage and speed",
                link: "#",
              },
              {
                title: "Troubleshooting Common Issues",
                description: "Solutions for the most frequent connection problems",
                link: "#",
              },
              {
                title: "Understanding Your Bill",
                description: "A guide to reading and understanding your invoice",
                link: "#",
              },
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={resource.link}>
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white border border-green-100 shadow-md overflow-hidden group cursor-pointer">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-green-600 transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600">{resource.description}</p>
                      <div className="mt-4 text-green-600 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>View guide</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
