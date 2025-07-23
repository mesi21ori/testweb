import type React from "react"
import { Header } from "./header"
import { Footer } from "./footer"
import { HeroSection } from "./hero-section"

interface Breadcrumb {
  name: string
  href: string
}

interface ChurchLayoutProps {
  children: React.ReactNode
  level: "main" | "diocese" | "subcity" | "church"
  title: string
  titleAmharic: string
  breadcrumb?: Breadcrumb[]
}

export function ChurchLayout({ children, level, title, titleAmharic, breadcrumb }: ChurchLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* <Header breadcrumb={breadcrumb} /> */}
      <HeroSection title={title} titleAmharic={titleAmharic} level={level} />
      <main className="">{children}</main>
   
    </div>
  )
}
