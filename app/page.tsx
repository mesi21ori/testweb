import { Music, Palette, Heart, Calendar } from "lucide-react"
import { ChurchLayout } from "@/components/church-layout"

import { ContactSection } from "@/components/contact-section"
import { LocationMap } from "@/components/location-map"
import { Projects } from "@/components/news-section"
import { MissionVisionPurpose } from "@/components/ValueMission"
import { About } from "@/components/info-sections"
import { ProgramsSection } from "@/components/service-section"


export default function HomePage() {
 

  return (
    <ChurchLayout
      level="main"
      title="አዲስ አበባ ሀገረ ስብከት ሰንበት ት/ቤቶች አንድነት"
      titleAmharic="Addis Ababa Diocess Sunday Schools Unity"
    >
      <Projects />
      <MissionVisionPurpose/>
      <About/>
        <ProgramsSection/>
      <ContactSection />
      <LocationMap
        location={{
          latitude: 9.0359,
          longitude: 38.7526,
          name: "Meskel Square",
          address: "Meskel Square, Addis Ababa, Ethiopia",
        }}
        apiKey="AIzaSyB90EitOwS5awbbIjAivDbnki9ClQ8C9zY"
      />
    </ChurchLayout>
  )
}
