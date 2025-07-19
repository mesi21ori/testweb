"use client"

import Image from "next/image"
import type { Event } from "@/types/event"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { MapPin, Calendar, Clock } from "lucide-react"
import { motion } from "framer-motion"

interface EventDetailModalProps {
  event: Event | null
  isOpen: boolean
  onClose: () => void
}

export function EventDetailModal({ event, isOpen, onClose }: EventDetailModalProps) {
  if (!event) return null

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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] rounded-lg max-h-[90vh] p-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-white rounded-lg shadow-xl flex flex-col h-full max-h-[90vh]"
        >
          {/* Image section */}
          <div className="relative h-48 w-full flex-shrink-0">
            <Image
              src={event.imageUrl || "/placeholder.svg?height=192&width=600"}
              alt={event.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
              quality={85}
            />
          </div>

          {/* Header section */}
          <DialogHeader className="p-6 pb-4 flex-shrink-0">
            <DialogTitle className="text-3xl font-bold text-navy">{event.title}</DialogTitle>
          </DialogHeader>

          {/* Scrollable content with hidden scrollbar */}
          <div
            className="p-6 pt-0 space-y-4 text-gray-800 overflow-y-auto flex-grow min-h-0"
            style={{
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            <DialogDescription className="text-base text-gray-700 mb-4">
              {event.description}
            </DialogDescription>

            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-yellow-700" />
              <span className="text-lg font-medium">{event.place}</span>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-yellow-700" />
              <span className="text-lg font-medium">{formatDate(event.startTime)}</span>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-yellow-700" />
              <span className="text-lg font-medium">Ends: {formatDate(event.endTime)}</span>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              <p className="font-semibold">
                Category:{" "}
                <span className="capitalize font-normal">{event.category}</span>
              </p>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}
