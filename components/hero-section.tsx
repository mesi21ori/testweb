"use client"
import { useEffect, useState, useRef } from "react"
import { Globe, MapPin, Church, Users } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

interface ExperienceProps {
  title: string
  titleAmharic: string
  value: number
}

function Experience({ title, titleAmharic, value }: ExperienceProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  return (
    <section id="experience" className="py-2 md:py-12 relative overflow-hidden " ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute bottom-32 right-20 w-24 h-24 bg-navy/10 rounded-full"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>
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
            <div className="p-4 md:p-6 bg-cream border-4 border-taupe rounded-3xl">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900">
                <AnimatedCounter from={0} to={value} duration={2000} />
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-semibold text-neutral-800">{title}</h3>
              <p className="text-xs md:text-sm text-neutral-600">{titleAmharic}</p>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute -inset-2 border-2 border-navy/30 rounded-3xl"
            />
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            className="h-1 w-24 md:w-32 bg-gradient-to-r from-navy via-taupe to-navy mx-auto rounded-full mb-6 md:mb-8"
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
}

export function HeroSection({ title, titleAmharic, level }: HeroSectionProps) {
  const stats = [
    {
      label: "Dioceses",
      amharicLabel: "ሀገረ ስብከቶች",
      value: 15,
      icon: Globe,
      description: "Geographical administrative regions of the church.",
    },
    {
      label: "Subcities",
      amharicLabel: "ክፍለ ከተሞች",
      value: 45,
      icon: MapPin,
      description: "Urban divisions where churches are located.",
    },
    {
      label: "Churches",
      amharicLabel: "ቤተክርስቲያናት",
      value: 300,
      icon: Church,
      description: "Places of worship and community gathering.",
    },
    {
      label: "Students",
      amharicLabel: "ተማሪዎች",
      value: 500,
      icon: Users,
      description: "Individuals enrolled in Sunday School programs.",
    },
  ]
  return (
    <div className=" mt-10 bg-neutral-50 text-neutral-800 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="text-center mb-4 sm:mb-6 md:mb-8 space-y-2 sm:space-y-3 md:space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900">
          Sunday School Unity Portal
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-700">
          ሰንበት ትምህርት ቤት አንድነት ፖርታል
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
          Ethiopian Orthodox Tewahedo Church - Sunday School Unity Portal
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full max-w-6xl justify-items-center">
        {stats.map((stat, index) => (
          <Experience key={index} title={stat.label} titleAmharic={stat.amharicLabel} value={stat.value} />
        ))}
      </div>
    </div>
  )
}
