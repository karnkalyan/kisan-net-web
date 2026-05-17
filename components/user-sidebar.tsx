"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, User, CreditCard, FileText, Settings, HelpCircle, LogOut, Wifi, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"
import { cn } from "@/lib/utils"
import { useIsMobile as useMobile } from "@/hooks/use-mobile"

interface SidebarItem {
  title: string
  href: string
  icon: React.ReactNode
}

export default function UserSidebar() {
  const pathname = usePathname()
  const { logout } = useAuth()
  const isMobile = useMobile()
  const [isOpen, setIsOpen] = useState(!isMobile)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const sidebarItems: SidebarItem[] = [
    {
      title: "Dashboard",
      href: "/user-panel",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      title: "My Profile",
      href: "/user-panel/profile",
      icon: <User className="h-5 w-5" />,
    },
    {
      title: "My Subscription",
      href: "/user-panel/subscription",
      icon: <Wifi className="h-5 w-5" />,
    },
    {
      title: "Billing",
      href: "/user-panel/billing",
      icon: <CreditCard className="h-5 w-5" />,
    },
    {
      title: "Invoices",
      href: "/user-panel/invoices",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      title: "Settings",
      href: "/user-panel/settings",
      icon: <Settings className="h-5 w-5" />,
    },
    {
      title: "Help & Support",
      href: "/user-panel/support",
      icon: <HelpCircle className="h-5 w-5" />,
    },
  ]

  return (
    <>
      {/* Mobile Toggle Button */}
      {isMobile && (
        <Button
          variant="outline"
          size="icon"
          className="fixed top-24 left-4 z-40 lg:hidden bg-white"
          onClick={toggleSidebar}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 z-30 h-screen w-64 bg-white shadow-lg transition-transform duration-300 pt-20",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0",
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex-1 py-6 px-4 overflow-y-auto">
            <nav className="space-y-1">
              {sidebarItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 text-sm font-medium rounded-md group",
                    pathname === item.href ? "bg-green-100 text-green-700" : "text-gray-700 hover:bg-gray-100",
                  )}
                >
                  {item.icon}
                  <span className="ml-3">{item.title}</span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="p-4 border-t border-gray-200">
            <button
              onClick={logout}
              className="flex items-center w-full px-3 py-2 text-sm font-medium text-red-600 rounded-md hover:bg-red-50"
            >
              <LogOut className="h-5 w-5" />
              <span className="ml-3">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
