import type React from "react"
import { Header } from "./header"
import { Footer } from "./footer"
import { HeroSection } from "./hero-section"

interface Breadcrumb {
  name: string
  href: string
}

interface AdminLayoutProps {
  children: React.ReactNode
  level: "main" | "city" | "subcity" | "wereda"
  title: string
  titleAmharic: string
  breadcrumb?: Breadcrumb[]
}

export function AdminLayout({ children, level, title, titleAmharic, breadcrumb }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header breadcrumb={breadcrumb} />
      <HeroSection title={title} titleAmharic={titleAmharic} level={level} />
      <main className="container mx-auto px-4 py-8 space-y-12">{children}</main>
      <Footer />
    </div>
  )
}
