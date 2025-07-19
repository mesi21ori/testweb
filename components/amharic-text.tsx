import type React from "react"
import { cn } from "@/lib/utils"

interface AmharicTextProps {
  children: React.ReactNode
  className?: string
  variant?: "title" | "body" | "heading"
}

export function AmharicText({ children, className, variant = "body" }: AmharicTextProps) {
  const baseClasses = "font-ethiopic"

  const variantClasses = {
    title: "text-2xl font-semibold tracking-wide",
    heading: "text-xl font-medium mb-4",
    body: "text-base leading-relaxed",
  }

  return <span className={cn(baseClasses, variantClasses[variant], className)}>{children}</span>
}
