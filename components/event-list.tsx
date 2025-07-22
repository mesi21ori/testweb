"use client"
import { useState, useMemo } from "react"
import type { Event } from "@/types/event"
import { EventCard } from "./event-card"
import { FilterBar } from "./filter-bar"
import { motion, AnimatePresence } from "framer-motion"

interface EventListProps {
  initialEvents: Event[]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger the animation of children
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.2 } }, // For exit animation
}

export function EventList({ initialEvents }: EventListProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [timeFilter, setTimeFilter] = useState<"all" | "upcoming" | "past">("all")

  const filteredEvents = useMemo(() => {
    let events = initialEvents
    // Apply search filter
    if (searchQuery) {
      events = events.filter(
        (event) =>
          event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.place.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Apply time filter
    const now = new Date()
    if (timeFilter === "upcoming") {
      events = events.filter((event) => event.startTime > now)
    } else if (timeFilter === "past") {
      events = events.filter((event) => event.startTime <= now)
    }

    // Sort events by start time, upcoming first
    return events.sort((a, b) => a.startTime.getTime() - b.startTime.getTime())
  }, [initialEvents, searchQuery, timeFilter])

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-3xl font-bold text-foreground mb-6 text-center md:text-left"
      >
        All Events
      </motion.h2>
      <FilterBar onSearchChange={setSearchQuery} onTimeFilterChange={setTimeFilter} />
      {filteredEvents.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-muted-foreground py-12"
        >
          <p className="text-xl font-semibold mb-4">No events found matching your criteria.</p>
          <p>Try adjusting your filters or search query.</p>
        </motion.div>
      ) : (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {filteredEvents.map((event) => (
              <motion.div key={event.id} variants={itemVariants} layout>
                <EventCard event={event} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  )
}
