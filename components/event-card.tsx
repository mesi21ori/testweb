"use client"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, ArrowRight } from "lucide-react"
import type { Event } from "@/types/event"
import { useState } from "react"
import { EventDetailModal } from "./event-detail-modal"

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

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
      <Card
        className={`w-full h-[500px] flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-lg bg-card text-card-foreground ${
          !isUpcoming && "opacity-70"
        }`}
      >
        <div className="relative h-48 w-full flex-shrink-0">
          <Image
            src={event.imageUrl || "/placeholder.svg"}
            alt={event.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
            quality={80}
            priority={true}
          />
        </div>
        <div className="flex-1 flex flex-col justify-between px-4 pb-2">
          <CardHeader className="px-0 pt-4 pb-2">
            <CardTitle className="text-xl font-bold text-foreground">{event.title}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground line-clamp-2">
              {event.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground px-0 pb-2">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="truncate">{event.place}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span className="truncate">
                {formatDate(event.startTime)} - {formatDate(event.endTime)}
              </span>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center text-xs text-muted-foreground px-0">
            <span
              className={`px-2 py-1 rounded-full text-primary-foreground ${
                isUpcoming ? "bg-primary" : "bg-muted-foreground"
              }`}
            >
              {isUpcoming ? "Upcoming" : "Past"}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsModalOpen(true)
              }}
              className="text-foreground hover:text-primary transition-colors font-semibold flex items-center gap-1 cursor-pointer"
            >
              View Details
              <ArrowRight size={16} />
            </button>
          </CardFooter>
        </div>
      </Card>
      <EventDetailModal event={event} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
