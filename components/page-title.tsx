"use client"

import { motion } from "framer-motion"

interface PageTitleProps {
  title: string
}

export function PageTitle({ title }: PageTitleProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-5xl font-extrabold text-center text-yellow-900 mb-12"
    >
      {title}
    </motion.h1>
  )
}
