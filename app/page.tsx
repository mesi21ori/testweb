import "./globals.css"
import { ChurchLayout } from "@/components/church-layout"
import { getMainPageData } from "@/lib/church-structure-data" // Import from new data file

import { ContactSection } from "@/components/contact-section"
import { LocationMap } from "@/components/location-map"
import { About } from "@/components/info-sections"
import { Projects } from "@/components/news-section"
import { ProgramsSection } from "@/components/service-section"
import { MissionVisionPurpose } from "@/components/ValueMission"

export default function Page() {
  const mainPageData = getMainPageData()
  return (
    <ChurchLayout heroSectionData={mainPageData}>
      <Projects />
      <MissionVisionPurpose />
      <About />
      <ProgramsSection />
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
