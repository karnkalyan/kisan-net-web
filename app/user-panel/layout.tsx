"use client"

import { ReactNode, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Bell, Search, ChevronDown, Menu, X, Home, User, Settings, CreditCard, TicketCheck, Wifi, Package, HelpCircle, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { useAuth } from "@/contexts/auth-context"
import ProtectedRoute from "@/components/protected-route"

export default function UserPanelLayout({ children }: { children: ReactNode }) {
  const { user, logout } = useAuth()
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  const navLinks = [
    { href: "/user-panel", label: "Dashboard", icon: Home },
    { href: "/user-panel/profile", label: "My Profile", icon: User },
    { href: "/user-panel/package", label: "My Package", icon: Package },
    { href: "/user-panel/billing", label: "Billing & Payments", icon: CreditCard },
    { href: "/user-panel/support", label: "Support Tickets", icon: TicketCheck },
    { href: "/user-panel/usage", label: "Usage Statistics", icon: Wifi },
    { href: "/user-panel/settings", label: "Settings", icon: Settings },
  ]

  return (
    <ProtectedRoute allowedRoles={["user", "admin"]}>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
              >
                {isMobileSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>

              <Link href="/" className="flex items-center gap-2">
                <div className="relative h-8 w-8">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-04rSlH3Ev2bb8WM6Khs6hBeKIVFrXJ.png"
                    alt="Kisan Net Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="font-semibold text-lg hidden md:block">Kisan Net</div>
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <Input type="text" placeholder="Search..." className="pl-10 w-64" />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>

              {/* Notifications */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                      2
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <div className="flex items-center justify-between p-2">
                    <h3 className="font-medium">Notifications</h3>
                    <Button variant="ghost" size="sm" className="text-xs">
                      Mark all as read
                    </Button>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <div className="text-sm">Payment Reminder - Your next payment is due soon</div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="text-sm">Maintenance Notice - Scheduled maintenance</div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user?.avatar} alt={user?.name} />
                      <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="hidden md:inline">{user?.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem asChild>
                    <Link href="/user-panel/profile">My Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/user-panel/settings">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/">Go to Website</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="text-red-600">
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Main Body */}
        <div className="flex flex-1 min-h-[calc(100vh-64px)]">
          {/* Sidebar Desktop */}
          <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col sticky top-0 h-screen">
            <nav className="flex-1 p-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100"
                >
                  <link.icon className="h-5 w-5" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </nav>
            <div className="p-4 border-t border-gray-200">
              <Button className="w-full bg-green-600 hover:bg-green-700 flex items-center justify-center gap-2">
                <HelpCircle className="h-4 w-4" /> Get Support
              </Button>
            </div>
          </aside>

          {/* Mobile Sidebar */}
          {isMobileSidebarOpen && (
            <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setIsMobileSidebarOpen(false)}>
              <div
                className="w-64 h-full bg-white overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <nav className="p-4 space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100"
                      onClick={() => setIsMobileSidebarOpen(false)}
                    >
                      <link.icon className="h-5 w-5" />
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </nav>
                <div className="p-4 border-t border-gray-200">
                  <Button className="w-full bg-green-600 hover:bg-green-700 flex items-center justify-center gap-2">
                    <HelpCircle className="h-4 w-4" /> Get Support
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Main Content */}
          <main className="flex-1 overflow-auto p-4 md:p-8">{children}</main>
        </div>
      </div>
    </ProtectedRoute>
  )
}
