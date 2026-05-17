"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Building, CheckCircle, Globe, Server, Shield, Wifi } from "lucide-react"
import { Toaster , toast } from "react-hot-toast"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import GradientBackground from "@/components/gradient-background"
import { Meteors } from "@/components/meteors"
import SubscribeModal from "@/components/subscribe-modal"

export default function BusinessPage() {
  
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    businessType: "",
    employees: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

   const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/businessForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        toast.success(result.message || "Inquiry submitted successfully!")
        setFormData({
          businessName: "",
          contactName: "",
          email: "",
          phone: "",
          businessType: "",
          employees: "",
          message: "",
        })
      } else {
        toast.error(result.message || "Failed to submit inquiry.")
      }
    } catch (err) {
      console.error(err)
      toast.error("Server error. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }
  // const businessPlans = [
  //   {
  //     name: "Small Business",
  //     price: 5000,
  //     speed: "100 Mbps",
  //     features: [
  //       "Dedicated business line",
  //       "99.9% uptime guarantee",
  //       "Basic technical support",
  //       "5 static IP addresses",
  //       "Basic network security",
  //     ],
  //     color: "from-blue-600 to-blue-500",
  //   },
  //   {
  //     name: "Medium Business",
  //     price: 10000,
  //     speed: "250 Mbps",
  //     popular: true,
  //     features: [
  //       "Dedicated business line",
  //       "99.9% uptime guarantee",
  //       "Priority technical support",
  //       "10 static IP addresses",
  //       "Advanced network security",
  //       "24/7 monitoring",
  //     ],
  //     color: "from-green-600 to-green-500",
  //   },
  //   {
  //     name: "Enterprise",
  //     price: 25000,
  //     speed: "1 Gbps",
  //     features: [
  //       "Dedicated fiber connection",
  //       "99.99% uptime SLA",
  //       "24/7 premium support",
  //       "20 static IP addresses",
  //       "Enterprise-grade security",
  //       "Network monitoring & management",
  //       "Dedicated account manager",
  //     ],
  //     color: "from-purple-600 to-purple-500",
  //   },
  // ]

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
              Business{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">
                Solutions
              </span>
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-emerald-300 mx-auto my-6"></div>
            <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl">
              Reliable, high-speed connectivity solutions tailored for businesses of all sizes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Business Benefits */}
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
            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">Why Choose Kisan Net for Business</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-green-400 to-green-600"></div>
            <p className="mt-6 text-lg text-gray-600">
              We provide reliable connectivity solutions that help your business thrive
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Wifi className="w-10 h-10 text-green-600" />,
                title: "Reliable Connectivity",
                description: "99.9% uptime guarantee with dedicated business lines and redundant infrastructure",
              },
              {
                icon: <Shield className="w-10 h-10 text-green-600" />,
                title: "Enterprise Security",
                description: "Advanced security features to protect your business data and network",
              },
              {
                icon: <Server className="w-10 h-10 text-green-600" />,
                title: "Scalable Solutions",
                description: "Flexible plans that grow with your business needs and requirements",
              },
              {
                icon: <Globe className="w-10 h-10 text-green-600" />,
                title: "Dedicated Support",
                description: "24/7 technical support and dedicated account managers for enterprise clients",
              },
              {
                icon: <Building className="w-10 h-10 text-green-600" />,
                title: "Local Expertise",
                description: "Deep understanding of local business needs and infrastructure challenges",
              },
              {
                icon: <CheckCircle className="w-10 h-10 text-green-600" />,
                title: "Community Investment",
                description: "Your subscription supports local community development and digital inclusion",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-b from-white to-green-50/50 border-none shadow-lg overflow-hidden group">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="p-4 mb-6 rounded-full bg-gradient-to-br from-green-100 to-green-200 group-hover:from-green-200 group-hover:to-green-300 transition-colors">
                      {benefit.icon}
                    </div>
                    <h3 className="mb-3 text-xl font-bold">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Plans */}
      {/* <section className="py-16 bg-gradient-to-b from-green-50 to-white relative overflow-hidden md:py-24">
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
            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">Business Plans</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-green-400 to-green-600"></div>
            <p className="mt-6 text-lg text-gray-600">Choose the perfect plan for your business needs</p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {businessPlans.map((plan, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  className={`h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-none shadow-lg group cursor-pointer ${plan.popular ? "relative z-10 scale-105 md:scale-110" : ""}`}
                >
                  <div className={`h-2 bg-gradient-to-r ${plan.color}`}></div>
                  {plan.popular && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg shadow-md">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <CardHeader className="pb-0">
                    <div className="flex flex-col items-start">
                      <h3 className="text-2xl font-bold">{plan.name}</h3>
                      <p className="text-sm text-gray-500">For {plan.name.toLowerCase()} operations</p>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="flex items-baseline mb-4">
                      <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-500">
                        NPR {plan.price.toLocaleString()}
                      </span>
                      <span className="ml-1 text-gray-500">/month</span>
                    </div>

                    <div className="px-3 py-1 mb-4 text-sm font-medium text-green-800 bg-green-100 rounded-full inline-block">
                      {plan.speed} Symmetrical
                    </div>

                    <div className="mt-6 space-y-4">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase">What&apos;s included</h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start group">
                            <div className="p-0.5 rounded-full bg-gradient-to-br from-green-400 to-green-500 text-white mt-0.5 shrink-0 group-hover:scale-110 transition-transform">
                              <CheckCircle className="w-4 h-4" />
                            </div>
                            <span className="ml-2">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className={`w-full bg-gradient-to-r ${plan.color} text-white hover:opacity-90 transition-opacity`}
                      onClick={() => setIsSubscribeModalOpen(true)}
                    >
                      Get Started
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-gray-600 mb-6">Need a custom solution for your business?</p>
            <Button
              className="bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600 shadow-md"
              onClick={() => document.getElementById("contact-form").scrollIntoView({ behavior: "smooth" })}
            >
              Contact Us for Custom Solutions
            </Button>
          </motion.div>
        </div>
      </section>
 */}
      {/* Business Solutions */}
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
            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">Specialized Business Solutions</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-green-400 to-green-600"></div>
            <p className="mt-6 text-lg text-gray-600">Tailored connectivity solutions for specific business needs</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Multi-Location Connectivity",
                description: "Connect multiple office locations with secure, reliable networking solutions",
                features: [
                  "Unified network management",
                  "Secure site-to-site connections",
                  "Centralized IT administration",
                  "Consistent performance across locations",
                ],
              },
              {
                title: "Hospitality Solutions",
                description: "Provide guests and customers with fast, reliable WiFi access",
                features: [
                  "Guest WiFi portals",
                  "Bandwidth management",
                  "Content filtering",
                  "Usage analytics and reporting",
                ],
              },
              {
                title: "Remote Workforce Support",
                description: "Enable secure, reliable connectivity for remote and hybrid teams",
                features: [
                  "VPN solutions",
                  "Secure remote access",
                  "Cloud application optimization",
                  "Collaboration tool support",
                ],
              },
              {
                title: "Managed IT Services",
                description: "Comprehensive IT management and support for your business",
                features: [
                  "Network monitoring and management",
                  "Security services",
                  "Backup and disaster recovery",
                  "Help desk and technical support",
                ],
              },
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-b from-white to-green-50/50 border-none shadow-lg overflow-hidden group">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                    <p className="text-gray-600 mb-4">{solution.description}</p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Key Features</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-2 shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        id="contact-form"
        className="py-16 bg-gradient-to-b from-green-50 to-white relative overflow-hidden md:py-24"
      >
        <Toaster position="top-right" reverseOrder={false} />
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
            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">Contact Our Business Team</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-green-400 to-green-600"></div>
            <p className="mt-6 text-lg text-gray-600">
              Get in touch with our business solutions team to discuss your specific needs
            </p>
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
                  <h2 className="text-2xl font-bold text-white">Business Inquiry Form</h2>
                  <p className="mt-2 text-green-100">
                    Fill out the form below and our business team will get back to you
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="businessName">Business Name</Label>
                      <Input
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="Your business name"
                        required
                        className="border-green-200 focus:border-green-500 focus:ring-green-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contactName">Contact Person</Label>
                      <Input
                        id="contactName"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleChange}
                        placeholder="Full name"
                        required
                        className="border-green-200 focus:border-green-500 focus:ring-green-500"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email address"
                        required
                        className="border-green-200 focus:border-green-500 focus:ring-green-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        required
                        className="border-green-200 focus:border-green-500 focus:ring-green-500"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="businessType">Business Type</Label>
                      <Select
                        value={formData.businessType}
                        onValueChange={(value) => handleSelectChange("businessType", value)}
                      >
                        <SelectTrigger id="businessType" className="border-green-200 focus:ring-green-500">
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="hospitality">Hospitality</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="employees">Number of Employees</Label>
                      <Select
                        value={formData.employees}
                        onValueChange={(value) => handleSelectChange("employees", value)}
                      >
                        <SelectTrigger id="employees" className="border-green-200 focus:ring-green-500">
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10</SelectItem>
                          <SelectItem value="11-50">11-50</SelectItem>
                          <SelectItem value="51-200">51-200</SelectItem>
                          <SelectItem value="201-500">201-500</SelectItem>
                          <SelectItem value="500+">500+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Business Requirements</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your business connectivity needs..."
                      rows={5}
                      required
                      className="border-green-200 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600 shadow-md"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2 animate-spin" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Submit Inquiry"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
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
            <h2 className="text-3xl font-bold text-white md:text-5xl">Ready to Transform Your Business?</h2>
            <div className="w-20 h-1 mx-auto my-6 bg-gradient-to-r from-green-400 to-green-300"></div>
            <p className="text-xl text-green-100 mb-10">
              Join hundreds of businesses that trust Kisan Net for their connectivity needs
            </p>

            <div className="flex flex-col items-center justify-center gap-4 mt-10 md:flex-row">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-400 text-white hover:from-green-600 hover:to-green-500 hover:scale-105 transition-all shadow-lg group"
                onClick={() => setIsSubscribeModalOpen(true)}
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white text-green-700 hover:bg-green-50 hover:scale-105 transition-all shadow-lg group"
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
