"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import type { StatItem } from "@/lib/church-structure-data"
import * as LucideIcons from "lucide-react" // Import all Lucide icons

// Create a map of icon names to their components
const iconMap: { [key: string]: React.ElementType } = {
  Globe: LucideIcons.Globe,
  MapPin: LucideIcons.MapPin,
  Church: LucideIcons.Church,
  Users: LucideIcons.Users,
  // Add other icons as needed
}

interface ExperienceProps {
  title: string
  titleAmharic: string
  value: number
  iconName: string // Changed to string
}

function Experience({ title, titleAmharic, value, iconName }: ExperienceProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const IconComponent = iconMap[iconName] 
  return (
    <section id="experience" className="py-2 md:py-12 relative overflow-hidden mt-10 " ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block relative mb-4 md:mb-6"
          >
            <div className="p-10 md:p-6 bg-secondary border-2 border-primary rounded-3xl">
              {IconComponent && ( // Render icon if component exists
                <div className="mb-2 flex justify-center">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
              )}
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                <AnimatedCounter from={0} to={value} duration={2000} />
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-semibold text-foreground">{title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{titleAmharic}</p>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute -inset-2 border-2 border-primary/30 rounded-3xl"
            />
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            className="h-1 w-24 md:w-32 bg-gradient-to-r from-foreground via-secondary to-foreground mx-auto rounded-full mb-6 md:mb-8"
          />
        </motion.div>
      </div>
    </section>
  )
}

interface AnimatedCounterProps {
  from: number
  to: number
  duration: number
  suffix?: string
}

const AnimatedCounter = ({ from, to, duration, suffix = "" }: AnimatedCounterProps) => {
  const [count, setCount] = useState(from)
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    let start: DOMHighResTimeStamp | null = null
    const animate = (currentTime: DOMHighResTimeStamp) => {
      if (!start) start = currentTime
      const progress = Math.min((currentTime - start) / duration, 1)
      setCount(Math.floor(progress * (to - from) + from))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [from, to, duration])
  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

interface HeroSectionProps {
  title: string
  titleAmharic: string
  level: "main" | "diocese" | "subcity" | "church"
  stats: StatItem[]
}

export function HeroSection({ title, titleAmharic, level, stats }: HeroSectionProps) {
  return (
    <div className=" mt-10 bg-background text-foreground flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="text-center mb-4 sm:mb-6 md:mb-8 space-y-2 sm:space-y-3 md:space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
          {titleAmharic}
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">{title}</h2>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Ethiopian Orthodox Tewahedo Church - Sunday School Unity Portal
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full max-w-6xl justify-items-center">
        {stats.map((stat, index) => (
          <Experience
            key={index}
            title={stat.label}
            titleAmharic={stat.amharicLabel}
            value={stat.value}
            iconName={stat.icon} // Pass the icon name as a string
          />
        ))}
      </div>
    </div>
  )
}
