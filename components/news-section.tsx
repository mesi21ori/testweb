"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NEWS_ARTICLES } from "@/lib/data"


// Helper function to truncate text
const truncateText = (text: string, limit: number) => {
  if (text.length <= limit) {
    return text
  }
  return text.substring(0, text.lastIndexOf(" ", limit)) + "..."
}

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextProject = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % NEWS_ARTICLES.length)
  }

  const prevProject = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + NEWS_ARTICLES.length) % NEWS_ARTICLES.length)
  }

  const currentProject = NEWS_ARTICLES[currentIndex]

  return (
    <section id="projects" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-taupe/10 rounded-full"
          animate={{
            scale: [1, 1.5, 1.2, 1],
            rotate: [0, 180, 360],
            borderRadius: ["50%", "30%", "50%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-navy/5"
          animate={{
            rotate: [0, -90, -180, -270, -360],
            scale: [1, 1.3, 0.8, 1.1, 1],
            borderRadius: ["0%", "50%", "25%", "0%"],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-taupe/30 rounded-full"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + i * 5}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, -15, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 180 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block relative mb-0"
          >
            <motion.div
              animate={{
                rotateY: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="p-6 bg-cream border-4 border-taupe rounded-3xl shadow-2xl"
            >
              <h2 className="text-navy font-bold text-6xl"> አዳዲስ መረጃዎች</h2>
            </motion.div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute -inset-8"
            >
              <div className="relative w-full h-full">
                <motion.div className="absolute top-0 left-1/2 w-3 h-3 bg-navy/40 rounded-full transform -translate-x-1/2" />
                <motion.div className="absolute bottom-0 left-1/2 w-3 h-3 bg-taupe/40 rounded-full transform -translate-x-1/2" />
                <motion.div className="absolute left-0 top-1/2 w-3 h-3 bg-navy/40 rounded-full transform -translate-y-1/2" />
                <motion.div className="absolute right-0 top-1/2 w-3 h-3 bg-taupe/40 rounded-full transform -translate-y-1/2" />
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            className="h-2 w-40 bg-gradient-to-r from-navy via-taupe to-navy mx-auto rounded-full mb-8 shadow-lg"
          />
        </motion.div>
        <div className="relative">
          {" "}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{
                opacity: 0,
                x: direction > 0 ? 300 : -300,
                rotateY: direction > 0 ? 45 : -45,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                x: 0,
                rotateY: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                x: direction > 0 ? -300 : 300,
                rotateY: direction > 0 ? -45 : 45,
                scale: 0.8,
              }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              className="relative max-w-4xl mx-auto " 
            >
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                }}
                className="absolute -inset-4 bg-gradient-to-r from-navy/20 via-taupe/20 to-navy/20 rounded-[4rem] blur-xl"
              />
              <div className="relative bg-cream/90 backdrop-blur-xl border-2 border-taupe/40 rounded-[3rem] overflow-hidden shadow-2xl">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-[350px] bg-gradient-to-br from-taupe/20 via-navy/10 to-taupe/30 flex items-center justify-center overflow-hidden">
                    {" "}
                    <motion.div
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, ${"#123458"} 1px, transparent 0)`,
                        backgroundSize: "30px 30px",
                      }}
                    />
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      className="relative w-full h-full"
                    >
                      <motion.img
                        src={currentProject.bgImageUrl}
                        alt={currentProject.title}
                        className="w-full h-full object-cover rounded-2xl shadow-2xl"
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent rounded-2xl" />
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="absolute bottom-6 left-6 right-6"
                      >
                        <h4 className="text-2xl lg:text-3xl font-black text-cream mb-2 drop-shadow-lg">
                          {currentProject.title}
                        </h4>
                        <p className="text-cream/90 text-sm drop-shadow-md">{currentProject.category}</p>
                      </motion.div>
                    </motion.div>
                    <motion.div
                      animate={{
                        y: [-20, 20, -20],
                        x: [-10, 10, -10],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                      className="absolute top-8 right-8 w-16 h-16 bg-cream/20 backdrop-blur-sm rounded-2xl border border-cream/30"
                    />
                    <motion.div
                      animate={{
                        y: [0, -15, 0],
                        rotate: [0, 45, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                      className="absolute top-1/2 left-8 w-8 h-8 bg-cream/30"
                      style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                    />
                    {currentProject.status === "New" && (
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.8, 1, 0.8],
                          boxShadow: [
                            "0 0 0px rgba(245, 242, 237, 0)",
                            "0 0 20px rgba(245, 242, 237, 0.5)",
                            "0 0 0px rgba(245, 242, 237, 0)",
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                        className="absolute top-6 left-6 bg-cream text-navy px-6 py-3 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm"
                      >
                        <motion.span
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                          className="inline-block w-2 h-2 bg-yellow-500 rounded-full mr-2"
                        />
                        {currentProject.status}
                      </motion.div>
                    )}
                  </div>
                  <div className="p-8 lg:p-12 space-y-6 relative">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 15,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                      className="absolute top-4 right-4 w-6 h-6 bg-taupe/20 rounded-full"
                    />
                    <div>
                      <motion.h3
                        animate={{
                          textShadow: [
                            "0 0 0px rgba(18, 52, 88, 0)",
                            "0 0 10px rgba(18, 52, 88, 0.2)",
                            "0 0 0px rgba(18, 52, 88, 0)",
                          ],
                        }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                        className="text-3xl lg:text-4xl font-black text-navy mb-4"
                      >
                        {currentProject.title}
                      </motion.h3>
                    </div>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-navy/80 text-lg leading-relaxed h-[120px] overflow-hidden"
                    >
                      {truncateText(currentProject.description, 250)}
                    </motion.p>
                    <div className="flex gap-4 pt-4">
                      <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                        <a href={currentProject.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Button className="bg-navy hover:bg-navy/90 text-cream px-6 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                            <ExternalLink className="mr-2" size={18} />
                            Read More
                          </Button>
                        </a>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4 flex justify-between items-center z-10 pointer-events-none">
            <motion.button
              onClick={prevProject}
              whileHover={{ scale: 1.15, x: -8, rotateY: -15 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 sm:w-16 sm:h-16 bg-cream/90 backdrop-blur-sm border-2 border-taupe/40 rounded-full flex items-center justify-center text-navy hover:border-navy/60 transition-colors shadow-xl hover:shadow-2xl pointer-events-auto"
            >
              <ChevronLeft size={20} className="sm:size-7" />
            </motion.button>
            <motion.button
              onClick={nextProject}
              whileHover={{ scale: 1.15, x: 8, rotateY: 15 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 sm:w-16 sm:h-16 bg-cream/90 backdrop-blur-sm border-2 border-taupe/40 rounded-full flex items-center justify-center text-navy hover:border-navy/60 transition-colors shadow-xl hover:shadow-2xl pointer-events-auto"
            >
              <ChevronRight size={20} className="sm:size-7" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
