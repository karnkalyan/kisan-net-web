"use client"

import { ReactNode, createContext, useContext } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { useAuth } from "@/contexts/auth-context"
import { scroller, Element } from "react-scroll"
import { usePathname } from "next/navigation"

// Create a Scroll Context
interface ScrollContextType {
  scrollToSection: (name: string, offset?: number) => void
}

const ScrollContext = createContext<ScrollContextType>({
  scrollToSection: () => {},
})

export const useScroll = () => useContext(ScrollContext)

export default function ClientLayoutWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  // ✅ CORRECTED LOGIC: Check if pathname starts with /admin
  const hideLayout = pathname.startsWith("/user-panel") || pathname.startsWith("/admin")

  // Function to scroll to a section
  const scrollToSection = (name: string, offset = -100) => {
    scroller.scrollTo(name, {
      duration: 800,
      smooth: "easeInOutQuart",
      offset,
    })
  }

  return (
    <ScrollContext.Provider value={{ scrollToSection }}>
      {!hideLayout && <Navbar />}
      <main className={!hideLayout ? "pt-20" : ""}>
        <Element name="top">{children}</Element>
      </main>
      {!hideLayout && <Footer />}
      <ScrollToTop />
    </ScrollContext.Provider>
  )
}