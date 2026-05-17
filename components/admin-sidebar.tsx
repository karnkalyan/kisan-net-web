"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  Package,
  Receipt,
  Settings,
  HelpCircle,
  LogOut,
  ChevronDown,
  Menu,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"
import { cn } from "@/lib/utils"
import { useIsMobile as useMobile } from "@/hooks/use-mobile"

interface SidebarItem {
  title: string
  href: string
  icon: React.ReactNode
  submenu?: { title: string; href: string }[]
}

export default function AdminSidebar() {
  const pathname = usePathname()
  const { logout } = useAuth()
  const isMobile = useMobile()
  const [isOpen, setIsOpen] = useState(!isMobile)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const toggleSubmenu = (title: string) => {
    setActiveSubmenu(activeSubmenu === title ? null : title)
  }

  const sidebarItems: SidebarItem[] = [
    {
      title: "Dashboard",
      href: "/admin",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      title: "Users Management",
      href: "/admin/users",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Packages",
      href: "/admin/packages",
      icon: <Package className="h-5 w-5" />,
    },
    {
      title: "Billing",
      href: "/admin/billing",
      icon: <Receipt className="h-5 w-5" />,
      submenu: [
        { title: "Invoices", href: "/admin/billing/invoices" },
        { title: "Payments", href: "/admin/billing/payments" },
        { title: "Reports", href: "/admin/billing/reports" },
      ],
    },
    {
      title: "Settings",
      href: "/admin/settings",
      icon: <Settings className="h-5 w-5" />,
    },
    {
      title: "Help & Support",
      href: "/admin/support",
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
                <div key={item.title}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => toggleSubmenu(item.title)}
                        className={cn(
                          "flex items-center w-full px-3 py-2 text-sm font-medium rounded-md group",
                          pathname === item.href || pathname.startsWith(`${item.href}/`)
                            ? "bg-green-100 text-green-700"
                            : "text-gray-700 hover:bg-gray-100",
                        )}
                      >
                        {item.icon}
                        <span className="ml-3 flex-1">{item.title}</span>
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            activeSubmenu === item.title ? "rotate-180" : "",
                          )}
                        />
                      </button>
                      {activeSubmenu === item.title && (
                        <div className="pl-10 mt-1 space-y-1">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.title}
                              href={subitem.href}
                              className={cn(
                                "flex items-center px-3 py-2 text-sm font-medium rounded-md",
                                pathname === subitem.href
                                  ? "bg-green-50 text-green-700"
                                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-700",
                              )}
                            >
                              {subitem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center px-3 py-2 text-sm font-medium rounded-md group",
                        pathname === item.href ? "bg-green-100 text-green-700" : "text-gray-700 hover:bg-gray-100",
                      )}
                    >
                      {item.icon}
                      <span className="ml-3">{item.title}</span>
                    </Link>
                  )}
                </div>
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
