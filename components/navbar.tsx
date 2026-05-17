"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu, X, User, UserPlus, LogOut, Settings, LayoutDashboard } from "lucide-react"
import {Link as ScrollLink} from 'react-scroll'
import { Button } from "@/components/ui/button"
import { useIsMobile as useMobile } from "@/hooks/use-mobile"
import { useAuth } from "@/contexts/auth-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Navbar() {
  const isMobile = useMobile()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { user, logout, isAuthenticated } = useAuth()
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const handleLogout = () => {
    logout()
    setIsOpen(false)
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Internet",
      href: "/internet",
      dropdown: [
        { name: "Plans & Pricing", href: "/internet/plans" },
        { name: "Features", href: "/internet/features" },
        { name: "Accessories", href: "/internet/accessories" },
        { name: "Coverage", href: "/coverage" },
      ],
    },
    { name: "IPTV", href: "/iptv" },
    { name: "Support", href: "/support" },
    { name: "Refer", href: "/refer" },
    { name: "Contact", href: "/contact" },
  ]

  const baseNavClasses = "px-4 py-2 text-white hover:text-green-300 transition-colors inline-flex items-center gap-1 text-base leading-none whitespace-nowrap"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-green-900/95 backdrop-blur-md shadow-md" : "bg-green-900/95 backdrop-blur-sm"}`}
      ref={navRef}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
           <Image
               src="/Asset 2.png"
               alt="Kisan Net Logo"
               width={160}
               height={64}
               className="object-contain"
           />
            
          </Link>

          <nav className="hidden lg:flex items-center">
            <div className="flex space-x-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.dropdown ? (
                    <button
                      className={baseNavClasses}
                      onClick={() => toggleDropdown(link.name)}
                    >
                      {link.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${activeDropdown === link.name ? "rotate-180" : ""}`}
                      />
                    </button>
                  ) : (
                    <Link href={link.href} className={baseNavClasses}>
                      {link.name}
                    </Link>
                  )}

                  {link.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-1 bg-white rounded-lg shadow-xl py-2 z-10 overflow-hidden border border-green-100 min-w-max"
                        >
                          <div className="px-3 py-2 bg-green-50 border-b border-green-100">
                            <h4 className="font-medium text-green-800">Internet Services</h4>
                          </div>
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {item.name === "Plans & Pricing" && (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                </svg>
                              )}
                              {item.name === "Features" && (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                              {item.name === "Accessories" && (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                </svg>
                              )}
                              {item.name === "Coverage" && (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                </svg>
                              )}
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-white hover:text-green-300 flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user?.avatar || "/placeholder.svg"} alt={user?.name} />
                      <AvatarFallback className="bg-green-600 text-white">{user?.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="hidden md:inline text-base">{user?.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {user?.role === "admin" ? (
                    <DropdownMenuItem asChild>
                      
                      <Link href="/admin" className="flex items-center">
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        <span>Admin Dashboard</span>
                      </Link>
                    </DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem asChild>
                      <Link href="/user-panel" className="flex items-center">
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        <span>My Dashboard</span>
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings" className="flex items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="flex items-center text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="ghost" size="sm" className="text-white hover:text-green-300 text-base" asChild>
                  <Link href="/login">
                    <User className="mr-1 h-4 w-4" />
                    <span>Login</span>
                  </Link>
                </Button>
                <Button asChild className="bg-green-500 hover:bg-green-600 text-white text-base">
                  <Link href="/register">
                    <UserPlus className="mr-1 h-4 w-4" />
                    <span>Register</span>
                  </Link>
                </Button>
              </>
            )}
          </div>

          <div className="lg:hidden flex items-center gap-2">
            {isAuthenticated && (
              <Avatar className="h-8 w-8">
                <AvatarImage src={user?.avatar || "/placeholder.svg"} alt={user?.name} />
                <AvatarFallback className="bg-green-600 text-white">{user?.name.charAt(0)}</AvatarFallback>
              </Avatar>
            )}
            <button className="text-white" onClick={toggleMenu}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-green-900/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.dropdown ? (
                      <>
                        <button
                          className="flex items-center justify-between w-full px-4 py-2 text-white hover:text-green-300 transition-colors text-base"
                          onClick={() => toggleDropdown(link.name)}
                        >
                          <span>{link.name}</span>
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${activeDropdown === link.name ? "rotate-180" : ""}`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === link.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-6 space-y-1 mt-2 bg-green-800/50 rounded-md py-2"
                            >
                              {link.dropdown.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="flex items-center px-3 py-2 text-green-100 hover:text-green-300 transition-colors text-base"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className="block px-4 py-2 text-white hover:text-green-300 transition-colors text-base"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}

                <div className="pt-4 border-t border-green-800">
                  {isAuthenticated ? (
                    <>
                      {user?.role === "admin" ? (
                        <Link href="/admin" className="flex items-center px-3 py-2 text-white hover:text-green-300 transition-colors text-base" onClick={() => setIsOpen(false)}>
                          <LayoutDashboard className="mr-2 h-4 w-4" />
                          <span>Admin Dashboard</span>
                        </Link>
                      ) : (
                        <Link href="/user-panel" className="flex items-center px-3 py-2 text-white hover:text-green-300 transition-colors text-base" onClick={() => setIsOpen(false)}>
                          <LayoutDashboard className="mr-2 h-4 w-4" />
                          <span>My Dashboard</span>
                        </Link>
                      )}

                      <Link href="/profile" className="flex items-center px-3 py-2 text-white hover:text-green-300 transition-colors text-base" onClick={() => setIsOpen(false)}>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </Link>

                      <Link href="/settings" className="flex items-center px-3 py-2 text-white hover:text-green-300 transition-colors text-base" onClick={() => setIsOpen(false)}>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </Link>

                      <button className="flex items-center w-full px-3 py-2 text-red-300 hover:text-red-200 transition-colors text-base" onClick={handleLogout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Logout</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <Link href="/login" className="flex items-center px-3 py-2 text-white hover:text-green-300 transition-colors text-base" onClick={() => setIsOpen(false)}>
                        <User className="mr-2 h-4 w-4" />
                        <span>Login</span>
                      </Link>

                      <Link href="/register" className="flex items-center px-3 py-2 text-white hover:text-green-300 transition-colors text-base" onClick={() => setIsOpen(false)}>
                        <UserPlus className="mr-2 h-4 w-4" />
                        <span>Register</span>
                      </Link>
                    </>
                  )}
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
