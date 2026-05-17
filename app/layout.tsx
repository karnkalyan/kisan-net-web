
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/contexts/auth-context"
import ClientLayoutWrapper from "./client-layout-wrapper" 

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Kisan Net - Nepal's First Farmer-Owned ISP",
  description:
    "Kisan Net is Nepal's first farmer-owned internet service provider, empowering rural communities through digital connectivity.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
