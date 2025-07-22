"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MISSION_VISION_VALUES } from "@/lib/data" // Assuming MISSION_VISION_VALUES is defined here

// Define the interface for the data structure
interface MissionVisionValue {
  title: string
  description: string
  icon?: React.ElementType
}

export function MissionVisionPurpose() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section id="mission-vision-purpose" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">የእኛ ተልእኮ፣ ራእይ እና ዓላማ</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            በእምነት፣ በርኅራኄ እና በተግባራዊ እርምጃ መንፈሳዊ እድገትን ለማሳደግ፣ ጠንካራ ማህበረሰቦችን ለመገንባት እና ለተፈላጊዎች አገልግሎት ለመስጠት ቆርጠናል::
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {MISSION_VISION_VALUES.map((item, index) => (
            <motion.div
              key={item.title}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: index * 0.2 + 0.3 }}
            >
              <Card className="h-full flex flex-col items-center text-center p-6 border-none shadow-lg rounded-xl hover:shadow-xl transition-all duration-300 ease-in-out bg-card text-card-foreground">
                <CardHeader className="flex flex-col items-center p-0 pb-6">
                  {item.icon && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ delay: index * 0.2 + 0.6, type: "spring", stiffness: 200 }}
                      className="mb-4 p-4 rounded-full bg-primary text-primary-foreground"
                    >
                      <item.icon size={40} />
                    </motion.div>
                  )}
                  <CardTitle className="text-2xl font-bold text-foreground">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-0">
                  <p className="text-muted-foreground text-base leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
