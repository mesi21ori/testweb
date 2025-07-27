"use client"

import Link from "next/link"
import { ChevronRight, Church, Building2 } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface HierarchicalListItem {
  id: string
  name: string
  nameEnglish: string
  // Add other properties if needed for display, e.g., description, image
}

interface HierarchicalListProps {
  level: "diocese" | "subcity"
  items: HierarchicalListItem[]
  title: string
  titleAmharic: string
  parentPath: string
}

export function HierarchicalList({ level, items, title, titleAmharic, parentPath }: HierarchicalListProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const getIcon = (currentLevel: "diocese" | "subcity") => {
    if (currentLevel === "diocese") {
      return <Building2 className="w-5 h-5 text-primary" />
    } else if (currentLevel === "subcity") {
      return <Church className="w-5 h-5 text-primary" />
    }
    return null
  }

  const getLinkPath = (item: HierarchicalListItem) => {
    if (level === "diocese") {
      return `${parentPath}/subcity/${item.id}`
    } else if (level === "subcity") {
      return `${parentPath}/church/${item.id}`
    }
    return "#" // Fallback
  }

  return (
    <section className="py-12 md:py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{titleAmharic}</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">{title}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={getLinkPath(item)}
                className="block bg-card text-card-foreground border border-border rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {getIcon(level)}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground text-sm">{item.nameEnglish}</p>
                {/* You can add more details here if available in HierarchicalListItem */}
              </Link>
            </motion.div>
          ))}
        </div>
        {items.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-muted-foreground py-12"
          >
            <p className="text-xl font-semibold mb-4">No {title.toLowerCase()} found.</p>
            <p>Please check back later or select a different parent.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
