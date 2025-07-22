"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState, useCallback } from "react"
import { hexToHsl } from "@/lib/utils"
import { ThemeColors, ThemeName, themes } from "@/lib/colors"

interface ThemeContextType {
  theme: ThemeName
  setTheme: (themeName: ThemeName) => void
  currentColors: ThemeColors
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({
  children,
  defaultTheme = "default",
}: { children: React.ReactNode; defaultTheme?: ThemeName }) {
  const [theme, setThemeState] = useState<ThemeName>(() => {
    // Try to get theme from localStorage on initial load
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") as ThemeName
      return storedTheme && themes[storedTheme] ? storedTheme : defaultTheme
    }
    return defaultTheme
  })

  const currentColors = themes[theme] || themes["default"]

  const applyTheme = useCallback((selectedTheme: ThemeName) => {
    const colors = themes[selectedTheme]
    if (!colors) {
      console.warn(`Theme "${selectedTheme}" not found. Falling back to default.`)
      return
    }

    const root = document.documentElement
    for (const [key, hex] of Object.entries(colors)) {
      const cssVarName = `--${key.replace(/([A-Z])/g, "-$1").toLowerCase()}` // Convert camelCase to kebab-case
      root.style.setProperty(cssVarName, hexToHsl(hex))
    }
    localStorage.setItem("theme", selectedTheme)
  }, [])

  useEffect(() => {
    applyTheme(theme)
  }, [theme, applyTheme])

  const setTheme = useCallback(
    (newTheme: ThemeName) => {
      setThemeState(newTheme)
      applyTheme(newTheme)
    },
    [applyTheme],
  )

  return <ThemeContext.Provider value={{ theme, setTheme, currentColors }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
