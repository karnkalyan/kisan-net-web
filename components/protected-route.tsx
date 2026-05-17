"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import type { UserRole } from "@/contexts/auth-context"

interface ProtectedRouteProps {
  children: React.ReactNode
  allowedRoles?: UserRole[]
}

export default function ProtectedRoute({ children, allowedRoles = ["admin", "user"] }: ProtectedRouteProps) {
  const { user, isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login")
    } else if (!isLoading && isAuthenticated && user && allowedRoles.length > 0) {
      // Check if user role is allowed
      if (!allowedRoles.includes(user.role)) {
        if (user.role === "admin") {
          router.push("/admin")
        } else {
          router.push("/user-panel")
        }
      }
    }
  }, [isLoading, isAuthenticated, user, router, allowedRoles])

  // Show loading or nothing while checking authentication
  if (isLoading || !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    )
  }

  // If user is authenticated and has the right role, show the children
  return <>{children}</>
}
