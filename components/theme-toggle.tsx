"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * A toggle button for switching between light and dark themes.
 * 
 * @returns {JSX.Element} The theme toggle component.
 */
export function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    const isDark = storedTheme === "dark" || (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)

    setDark(isDark)
    document.documentElement.classList.toggle("dark", isDark)
  }, [])

  /**
   * Toggles between light and dark themes.
   */
  const toggleTheme = () => {
    const newDark = !dark
    setDark(newDark)
    document.documentElement.classList.toggle("dark", newDark)
    localStorage.setItem("theme", newDark ? "dark" : "light")
  }

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="icon"
      className="fixed top-4 right-4"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
    >
      {dark ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
    </Button>
  )
}
