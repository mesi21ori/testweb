"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { sundaySchoolContent, churchImageUrl } from "@/lib/data"
import { useTheme } from "@/components/theme-provider" // Import useTheme

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { currentColors } = useTheme()

  // Dynamically generate the SVG background with the primary color
  const svgBackground = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='${encodeURIComponent(currentColors.primary)}' fillOpacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-background" ref={ref}>
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: svgBackground,
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-7xl font-black text-foreground">
            ስለ <span className="text-primary"> ሰንበት ት/ቤቱ</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "120px" } : { width: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-2 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8"
          />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ለሁሉም እድሜ ደረጃ እምነት፣ ትምህርት እና አስተባበር ማሳደግ
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-card/60 backdrop-blur-xl p-8 rounded-3xl border border-border shadow-xl">
              <h3 className="text-3xl font-bold text-foreground mb-6">{sundaySchoolContent.title}</h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                {sundaySchoolContent.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-lg">
                    {paragraph}
                  </p>
                ))}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-secondary/10 p-6 rounded-2xl border-l-4 border-primary"
                >
                  <p className="text-lg font-medium text-foreground">{`"${sundaySchoolContent.quote}"`}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center"
          >
            <motion.img
              src={churchImageUrl} // Using imported image URL
              alt="Church Building"
              className="rounded-3xl shadow-xl object-cover w-full h-auto max-w-md lg:max-w-none"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
