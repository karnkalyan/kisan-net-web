"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>

      <div className="container px-4 py-12 mx-auto md:py-16 relative z-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-2 group">
              {/* <div className="relative w-[180px] h-[90px] "> */}
                <Image
                  src="/Asset 2.png"
                  alt="Kisan Net Logo"
                  height={64}
                  width={160}
                  priority
                  className="object-contain"
                />
              {/* </div> */}
            </div>
            <p className="mb-6 text-gray-400">
              Nepal&apos;s first farmer-owned internet service provider, revolutionizing rural connectivity through
              community ownership.
            </p>

            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Internet", href: "/internet" },
                { name: "IPTV", href: "/iptv" },
                { name: "Business Solutions", href: "/business" },
                { name: "Coverage", href: "/coverage" },
                { name: "Support", href: "/support" },
                { name: "Contact", href: "/contact" },
                { name: "Refer a Friend", href: "/refer" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors group">
                    <span className="inline-block group-hover:translate-x-1 transition-transform">→</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex group">
                <MapPin className="w-5 h-5 mr-3 text-green-500 shrink-0 group-hover:text-green-400 transition-colors" />
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  Kisan Net Headquarters
                  <br />
                  Baluwatar, upahar marg, Kathmandu
                  <br />
                  Nepal
                </span>
              </li>
              <li className="flex group">
                <Phone className="w-5 h-5 mr-3 text-green-500 shrink-0 group-hover:text-green-400 transition-colors" />
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  9705403488 || 01-4546048/49
                </span>
              </li>
              <li className="flex group">
                <Mail className="w-5 h-5 mr-3 text-green-500 shrink-0 group-hover:text-green-400 transition-colors" />
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">info@kisan.net.np</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold">Newsletter</h3>
            <p className="mb-4 text-gray-400">
              Subscribe to our newsletter for updates on coverage expansion and new services.
            </p>

            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-green-500 focus:ring-green-500"
              />
              <Button className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 transition-colors">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-8 mt-12 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Kisan Net. All rights reserved.</p>

            <div className="flex gap-4 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
