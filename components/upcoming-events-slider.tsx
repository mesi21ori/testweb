"use client"
import type { Event } from "@/types/event"
import { SliderEventCard } from "./slider-event-card"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { Pagination, Scrollbar, A11y } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface UpcomingEventsSliderProps {
  upcomingEvents: Event[]
}

// Helper component for custom navigation buttons
function CustomNavigation() {
  const swiper = useSwiper()
  return (
    <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4 flex justify-between items-center z-10 pointer-events-none">
      <motion.button
        onClick={() => swiper.slidePrev()}
        whileHover={{ scale: 1.15, x: -8, rotateY: -15 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 sm:w-16 sm:h-16 bg-card/90 backdrop-blur-sm border-2 border-border rounded-full flex items-center justify-center text-foreground hover:border-primary/60 transition-colors shadow-xl hover:shadow-2xl pointer-events-auto"
        aria-label="Previous event"
      >
        <ChevronLeft size={20} className="sm:size-7" />
      </motion.button>
      <motion.button
        onClick={() => swiper.slideNext()}
        whileHover={{ scale: 1.15, x: 8, rotateY: 15 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 sm:w-16 sm:h-16 bg-card/90 backdrop-blur-sm border-2 border-border rounded-full flex items-center justify-center text-foreground hover:border-primary/60 transition-colors shadow-xl hover:shadow-2xl pointer-events-auto"
        aria-label="Next event"
      >
        <ChevronRight size={20} className="sm:size-7" />
      </motion.button>
    </div>
  )
}

export function UpcomingEventsSlider({ upcomingEvents }: UpcomingEventsSliderProps) {
  if (!upcomingEvents || upcomingEvents.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center text-muted-foreground py-8 mb-12"
      >
        <p className="text-xl font-semibold">No upcoming events to display at the moment.</p>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mb-12 relative"
    >
      <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Upcoming Events</h2>
      <Swiper
        modules={[Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={false}
        pagination={{ clickable: true }}
      >
        {upcomingEvents.map((event, index) => (
          <SwiperSlide key={event.id}>
            <SliderEventCard event={event} index={index} />
          </SwiperSlide>
        ))}
        <CustomNavigation />
      </Swiper>
    </motion.div>
  )
}
