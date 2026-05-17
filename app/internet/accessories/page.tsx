"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ShoppingCart, Wifi } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import GradientBackground from "@/components/gradient-background"

export default function AccessoriesPage() {
  const { toast } = useToast()
  const [sortBy, setSortBy] = useState("featured")
  const [searchQuery, setSearchQuery] = useState("")

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const handleSearch = (e) => {
    e.preventDefault()
    // In a real app, this would filter the products based on the search query
  }

  const handleAddToCart = (product) => {
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  // Sample products data
  const products = [
    {
      id: 1,
      name: "Premium WiFi Router",
      price: 5000,
      description: "High-performance dual-band router for optimal coverage",
      image: "/placeholder.svg?height=200&width=200",
      category: "routers",
    },
    {
      id: 2,
      name: "WiFi Range Extender",
      price: 3000,
      description: "Extend your WiFi coverage to eliminate dead zones",
      image: "/placeholder.svg?height=200&width=200",
      category: "extenders",
    },
    {
      id: 3,
      name: "Mesh WiFi System (3-Pack)",
      price: 12000,
      description: "Whole-home coverage with seamless roaming",
      image: "/placeholder.svg?height=200&width=200",
      category: "mesh",
    },
    {
      id: 4,
      name: "Network Switch (8-Port)",
      price: 2500,
      description: "Connect multiple devices with high-speed ethernet",
      image: "/placeholder.svg?height=200&width=200",
      category: "switches",
    },
    {
      id: 5,
      name: "Cat6 Ethernet Cable (10m)",
      price: 800,
      description: "High-speed network cable for reliable connections",
      image: "/placeholder.svg?height=200&width=200",
      category: "cables",
    },
    {
      id: 6,
      name: "WiFi Adapter for PC",
      price: 1500,
      description: "USB WiFi adapter for computers without built-in WiFi",
      image: "/placeholder.svg?height=200&width=200",
      category: "adapters",
    },
    {
      id: 7,
      name: "Outdoor WiFi Antenna",
      price: 3500,
      description: "Extend your WiFi range outdoors",
      image: "/placeholder.svg?height=200&width=200",
      category: "antennas",
    },
    {
      id: 8,
      name: "Smart WiFi Plug",
      price: 1200,
      description: "Control your devices remotely with WiFi connectivity",
      image: "/placeholder.svg?height=200&width=200",
      category: "smart-home",
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
              Network{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">
                Accessories
              </span>
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-emerald-300 mx-auto my-6"></div>
            <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl">
              Enhance your internet experience with our premium accessories
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white relative overflow-hidden md:py-24">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-green-300/20 to-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-green-300/20 to-green-500/20 rounded-full blur-3xl"></div>

        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-4">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold text-gray-900">Network Accessories</h2>
              <p className="mt-2 text-gray-600">Quality accessories for optimal connectivity</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <form onSubmit={handleSearch} className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Search accessories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border-green-200 focus:border-green-500 focus:ring-green-500"
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600 shadow-md"
                >
                  Search
                </Button>
              </form>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px] border-green-200 focus:ring-green-500">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-none shadow-lg overflow-hidden group">
                  <div className="h-48 relative bg-gray-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Wifi className="w-16 h-16 text-green-200" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold">{product.name}</h3>
                      <span className="font-bold text-green-600">NPR {product.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    <div className="mt-auto flex justify-between items-center">
                      <Button
                        variant="outline"
                        className="border-green-200 hover:border-green-300 hover:bg-green-50"
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Button
                        variant="ghost"
                        className="text-green-600 hover:text-green-700 hover:bg-green-50 p-2"
                        asChild
                      >
                        <Link href={`/internet/accessories/${product.id}`}>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
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
            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">Shop by Category</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-green-400 to-green-600"></div>
            <p className="mt-6 text-lg text-gray-600">Browse our accessories by category</p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              {
                name: "WiFi Routers",
                icon: <Wifi className="w-10 h-10 text-green-600" />,
                count: 12,
              },
              {
                name: "Range Extenders",
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
                    className="w-10 h-10 text-green-600"
                  >
                    <path d="M2 12h6" />
                    <path d="M22 12h-6" />
                    <path d="M12 2v2" />
                    <path d="M12 8v2" />
                    <path d="M12 14v2" />
                    <path d="M12 20v2" />
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                ),
                count: 8,
              },
              {
                name: "Mesh Systems",
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
                    className="w-10 h-10 text-green-600"
                  >
                    <path d="M4 21v-4a3 3 0 0 1 3-3h5" />
                    <path d="M9 17h6" />
                    <path d="M15 21v-4a3 3 0 0 0-3-3H7" />
                    <path d="M4 8V7a3 3 0 0 1 3-3h5" />
                    <path d="M7 11V7" />
                    <path d="M15 8V7a3 3 0 0 0-3-3H7" />
                    <path d="M20 8v13" />
                    <path d="M20 8a2 2 0 0 0-2-2" />
                    <path d="M20 8a2 2 0 0 1-2-2" />
                  </svg>
                ),
                count: 5,
              },
              {
                name: "Network Switches",
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
                    className="w-10 h-10 text-green-600"
                  >
                    <rect width="20" height="8" x="2" y="2" rx="2" />
                    <rect width="20" height="8" x="2" y="14" rx="2" />
                    <path d="M6 6h.01" />
                    <path d="M6 18h.01" />
                    <path d="m12 6-2 3 2 3" />
                    <path d="m12 18 2-3-2-3" />
                  </svg>
                ),
                count: 10,
              },
              {
                name: "Ethernet Cables",
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
                    className="w-10 h-10 text-green-600"
                  >
                    <path d="M4 9V5a1 1 0 0 1 1-1h4" />
                    <path d="M4 14v4a1 1 0 0 0 1 1h4" />
                    <path d="M20 9V5a1 1 0 0 0-1-1h-4" />
                    <path d="M20 14v4a1 1 0 0 1-1 1h-4" />
                    <path d="M8 8h8" />
                    <path d="M8 16h8" />
                    <path d="M12 8v8" />
                  </svg>
                ),
                count: 15,
              },
              {
                name: "WiFi Adapters",
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
                    className="w-10 h-10 text-green-600"
                  >
                    <path d="M2 13a5 5 0 0 0 5 5 5 5 0 0 0 5-5 5 5 0 0 0-5-5 5 5 0 0 0-5 5Z" />
                    <path d="M17 13a5 5 0 0 0 5 5 5 5 0 0 0 5-5 5 5 0 0 0-5-5 5 5 0 0 0-5 5Z" />
                    <path d="M12 22v-9" />
                  </svg>
                ),
                count: 7,
              },
              {
                name: "Antennas",
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
                    className="w-10 h-10 text-green-600"
                  >
                    <path d="M12 2v20" />
                    <path d="M2 5h20" />
                    <path d="M2 19h20" />
                    <path d="M2 12h20" />
                    <path d="m6 5-4 7 4 7" />
                    <path d="m18 5 4 7-4 7" />
                  </svg>
                ),
                count: 6,
              },
              {
                name: "Smart Home",
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
                    className="w-10 h-10 text-green-600"
                  >
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                ),
                count: 9,
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/internet/accessories?category=${category.name.toLowerCase().replace(/\s+/g, "-")}`}>
                  <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-b from-white to-green-50/50 border-none shadow-lg overflow-hidden group cursor-pointer">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="p-4 mb-4 rounded-full bg-gradient-to-br from-green-100 to-green-200 group-hover:from-green-200 group-hover:to-green-300 transition-colors">
                        {category.icon}
                      </div>
                      <h3 className="text-lg font-bold mb-1">{category.name}</h3>
                      <p className="text-sm text-gray-500">{category.count} products</p>
                      <div className="mt-4 text-green-600 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>View all</span>
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

      {/* Why Choose Our Accessories */}
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
            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">Why Choose Our Accessories</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-green-400 to-green-600"></div>
            <p className="mt-6 text-lg text-gray-600">Quality products that enhance your internet experience</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Quality Assurance",
                description:
                  "All our accessories are carefully selected from trusted brands and undergo rigorous quality testing",
              },
              {
                title: "Expert Installation",
                description: "Our technicians can professionally install your accessories for optimal performance",
              },
              {
                title: "Warranty Protection",
                description: "All products come with manufacturer warranty and our additional service guarantee",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-b from-white to-green-50/50 border-none shadow-lg overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-800 via-green-700 to-green-600 relative overflow-hidden md:py-24">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>

        <div className="container px-4 mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white md:text-5xl">Need Help Choosing?</h2>
            <div className="w-20 h-1 mx-auto my-6 bg-gradient-to-r from-green-400 to-green-300"></div>
            <p className="text-xl text-green-100 mb-10">
              Our experts can recommend the perfect accessories for your specific needs
            </p>

            <Button
              asChild
              size="lg"
              className="bg-white text-green-700 hover:bg-green-50 hover:scale-105 transition-all shadow-lg group"
            >
              <Link href="/contact">
                Contact Our Experts
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
