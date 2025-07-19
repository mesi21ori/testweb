"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, MapPin, Church, Users } from "lucide-react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Calendar, Building, Briefcase, ArrowRight, Star, Play } from "lucide-react"

interface ExperienceProps {
  title: string
  titleAmharic: string
  value: number
}

function Experience({ title, titleAmharic, value }: ExperienceProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
         
        />
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
        <motion.div
  
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block relative mb-6"
          >
            <div className="p-6 bg-cream border-4 border-taupe rounded-3xl">
              {/* <Briefcase className="text-navy" size={40} /> */}
               <div className="text-4xl sm:text-5xl font-bold text-neutral-900">
                  <AnimatedCounter from={0} to={value} duration={2000} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-800">{title}</h3>
                <p className="text-sm text-neutral-600">{titleAmharic}</p>
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
            className="h-1 w-32 bg-gradient-to-r from-navy via-taupe to-navy mx-auto rounded-full mb-8"
          />
        </motion.div>
      </div>
    </section>
  )
}


// Custom AnimatedCounter component
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
    <div className="min-h-screen bg-neutral-50 text-neutral-800 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="text-center mb-3 space-y-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900">
          Sunday School Unity Portal
        </h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-neutral-700">ሰንበት ትምህርት ቤት አንድነት ፖርታል</h2>
        <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto">
          Ethiopian Orthodox Tewahedo Church - Sunday School Unity Portal
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl justify-items-center">
        {stats.map((stat, index) => {
          const [isMounted, setIsMounted] = useState(false)

          useEffect(() => {
            const timer = setTimeout(() => {
              setIsMounted(true)
            }, index * 150) // Staggered delay for each card
            return () => clearTimeout(timer)
          }, [index])

          return (
            <Experience title={stat.label} titleAmharic={stat.amharicLabel} value={stat.value} />
            // <Card
            //   key={index}
            //   className={`relative overflow-hidden rounded-full shadow-lg hover:shadow-xl transition-all duration-500 ease-out
            //              bg-white border border-neutral-200
            //              transform hover:-translate-y-2 hover:scale-[1.05]
            //              flex items-center justify-center text-center
            //              w-52 h-52 // Fixed size for circular shape
            //              ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            // >
            //   <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-neutral-100 opacity-50 -z-10"></div>
            //   <CardContent className="p-4 flex flex-col items-center justify-center space-y-2">
            //     {/* <div className="p-3 rounded-full bg-neutral-100 text-neutral-600 shadow-md">
            //       <stat.icon className="w-8 h-8 sm:w-10 sm:h-10" />
            //     </div> */}
                // <div className="text-4xl sm:text-5xl font-bold text-neutral-900">
                //   <AnimatedCounter from={0} to={stat.value} duration={2000} />
                // </div>
                // <h3 className="text-lg sm:text-xl font-semibold text-neutral-800">{stat.label}</h3>
                // <p className="text-sm text-neutral-600">{stat.amharicLabel}</p>
            //     {/* <p className="text-xs text-neutral-500 mt-1 max-w-[80%]">{stat.description}</p> */}
            //   </CardContent>
            // </Card>
          )
        })}
      </div>
    </div>
  )
}