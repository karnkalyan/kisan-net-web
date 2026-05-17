"use client"

import { useState } from "react"
import { Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function LanguageSwitcher({ isScrolled = false }) {
  const [language, setLanguage] = useState("en")

  const handleLanguageChange = (lang) => {
    setLanguage(lang)
    // In a real app, this would update the app's locale
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`flex items-center gap-1 text-sm transition-colors ${
            isScrolled ? "text-gray-700 hover:text-green-600" : "text-white hover:text-green-100"
          }`}
        >
          <Globe className="w-4 h-4" />
          <span>{language === "en" ? "EN" : "नेपाली"}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-sm border-green-100">
        <DropdownMenuItem onClick={() => handleLanguageChange("en")} className="hover:bg-green-50 cursor-pointer">
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("np")} className="hover:bg-green-50 cursor-pointer">
          नेपाली
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
