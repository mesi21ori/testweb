"use client"

import Image from "next/image"
import type { Event } from "@/types/event"
import { motion } from "framer-motion"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import { useState } from "react" // Import useState
import { EventDetailModal } from "./event-detail-modal" // Import the modal component

interface SliderEventCardProps {
  event: Event
  index?: number
}

export function SliderEventCard({ event, index = 0 }: SliderEventCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false) // State for modal

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date)
  }

  const isUpcoming = event.startTime > new Date()

  return (
    <>
      <motion.div className="group w-full max-w-5xl mx-auto">
        <div className="relative">
          <motion.div
            className="absolute inset-0 bg-taupe/10 rounded-[3rem] transform"
            whileHover={{ scale: 1.02, rotate: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <div className="relative bg-cream/80 backdrop-blur-xl border-2 border-taupe/30 rounded-[3rem] p-8 lg:p-12 hover:border-navy/40 transition-all duration-500">
            <motion.div
              animate={{
                y: [-5, 5, -5],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.5,
              }}
              className="absolute top-6 right-6 w-8 h-8 bg-navy/20 rounded-full"
            />

            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-taupe/40"
                >
                  <div className="relative h-40 w-full mb-4 rounded-xl overflow-hidden">
                    <Image
                      src={event.imageUrl || "/placeholder.svg?height=160&width=240"}
                      alt={event.title}
                      layout="fill"
                      objectFit="cover"
                      quality={85}
                    />
                  </div>

                  <h3 className="text-2xl font-black text-navy mb-2 leading-tight">{event.title}</h3>
                  <div className="space-y-2 text-navy/70 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="flex-shrink-0" />
                      <span>{event.place}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="flex-shrink-0" />
                      <span>
                        {formatDate(event.startTime)} - {formatDate(event.endTime)}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-taupe/30">
                  <p className="text-navy/80 leading-relaxed text-base line-clamp-4">{event.description}</p>
                </div>

                <div className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-taupe/30">
                  <h4 className="font-bold text-navy mb-4 flex items-center gap-2">
                    <ArrowRight size={18} />
                    Event Status
                  </h4>
                  <div className="flex justify-between items-center">
                    <span
                      className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${isUpcoming ? "bg-yellow-600" : "bg-gray-500"}`}
                    >
                      {isUpcoming ? "Upcoming" : "Past"}
                    </span>
                    <button
                      onClick={() => setIsModalOpen(true)} // Open modal on click
                      className="text-navy hover:text-taupe transition-colors font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      View Details
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Event Detail Modal */}
      <EventDetailModal event={event} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
