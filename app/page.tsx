import { ChurchLayout } from "@/components/church-layout"
import { StatsDashboard } from "@/components/stats-dashboard"
import { NewsSection } from "@/components/news-section"
import { InfoSections } from "@/components/info-sections"
import { ContactSection } from "@/components/contact-section"
import { LocationMap } from "@/components/location-map"
import { mainChurchData } from "@/lib/church-data"
import { ProgramsSection } from "@/components/service-section"


import { Calendar, Church, Heart, Music, Palette } from "lucide-react"


export default function HomePage() {
  const programs = [

    {
      title: "ስብከተ ወንጌልን ማስፋፋት እና ማጠናከር",
      description: "Traditional Ethiopian Orthodox chanting and music instruction preserving our musical heritage.",
      icon: <Music className="w-8 h-8 text-white" />,
      participants: "Ages 8+",
      schedule: "Fridays 6:00 PM",
    },
    {
      title: "የዝማሬ አገልግሎት መስጠት",
      description: "Creative expression through traditional Orthodox art, iconography, and religious crafts.",
      icon: <Palette className="w-8 h-8 text-white" />,
      participants: "All Ages",
      schedule: "Saturdays 10:00 AM",
    },
    {
      title: "በቤተክርስቲያ የልማት አገልግሎቶች ውስጥ መሳተፍ",
      description: "Service projects and community engagement activities embodying Christian love and compassion.",
      icon: <Heart className="w-8 h-8 text-white" />,
      participants: "All Members",
      schedule: "Monthly Events",
    },
    {
      title: "በጎ አድራጎት አገልግሎቶችን መስጠት",
      description: "Special programs and celebrations for Orthodox holidays and feast days throughout the year.",
      icon: <Calendar className="w-8 h-8 text-white" />,
      participants: "Entire Community",
      schedule: "Seasonal Events",
    },
  ]
  return (
    <ChurchLayout
      level="main"
      title="አዲስ አበባ ሀገረ ስብከት ሰንበት ት/ቤቶች አንድነት"
      titleAmharic="Addis Ababa Diocess Sunday Schools Unity "
    >
      <StatsDashboard stats={mainChurchData.stats} />
      <NewsSection news={mainChurchData.news} />
      <InfoSections info={mainChurchData.info} />
      <ProgramsSection programs={programs} />
      <ContactSection contact={mainChurchData.contact} />
     <LocationMap 
  location={{
    latitude: 9.0359,
    longitude: 38.7526,
    name: "Meskel Square",
    address: "Meskel Square, Addis Ababa, Ethiopia"
  }}
  apiKey="AIzaSyB90EitOwS5awbbIjAivDbnki9ClQ8C9zY"
/>
    </ChurchLayout>
  )
}
