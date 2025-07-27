import type React from "react"
import { Header } from "./header"
import { Footer } from "./footer"
import { HeroSection } from "./hero-section"
import type { StatItem } from "@/lib/church-structure-data" // Import StatItem

interface Breadcrumb {
  name: string
  href: string
}

interface ChurchLayoutProps {
  children: React.ReactNode
  breadcrumb?: Breadcrumb[]
  heroSectionData: {
    title: string
    titleAmharic: string
    level: "main" | "diocese" | "subcity" | "church"
    stats: StatItem[]
  }
}

export function ChurchLayout({ children, breadcrumb, heroSectionData }: ChurchLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header breadcrumb={breadcrumb} />
      <HeroSection
        title={heroSectionData.titleAmharic}
        titleAmharic={heroSectionData.title}
        level={heroSectionData.level}
        stats={heroSectionData.stats} // Pass dynamic stats
      />
      <main className="">{children}</main>
      <Footer />
    </div>
  )
}
