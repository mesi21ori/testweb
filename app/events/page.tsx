// This file remains a Server Component

import { getEvents } from "@/lib/data"
import { EventList } from "@/components/event-list"
import { UpcomingEventsSlider } from "@/components/upcoming-events-slider"
import { PageTitle } from "@/components/page-title"

export default async function EventsPage() {
  const allEvents = await getEvents()

  const now = new Date()
  const upcomingEventsForSlider = allEvents
    .filter((event) => event.startTime > now)
    .sort((a, b) => a.startTime.getTime() - b.startTime.getTime())

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <PageTitle title=" Events" /> {/* Use the new client component */}
        {/* Upcoming Events Slider */}
        <UpcomingEventsSlider upcomingEvents={upcomingEventsForSlider} />
        {/* All Events List with Filtering */}
        <EventList initialEvents={allEvents} />
      </div>
    </main>
  )
}
