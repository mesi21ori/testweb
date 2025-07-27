import { ChurchLayout } from "@/components/church-layout"
import { ContactSection } from "@/components/contact-section"
import { About } from "@/components/info-sections"
import { LocationMap } from "@/components/location-map"
import { Projects } from "@/components/news-section"
import { ProgramsSection } from "@/components/service-section"
import { MissionVisionPurpose } from "@/components/ValueMission"
import { getChurchData, getDioceseData, getSubcityData } from "@/lib/church-structure-data" // Import from new data file
import { notFound } from "next/navigation"

interface ChurchPageProps {
  params: { dioceseId: string; subcityId: string; churchId: string }
}

export default async function ChurchPage({ params }: ChurchPageProps) {
  const { dioceseId, subcityId, churchId } = await params
  const churchData = getChurchData(dioceseId, subcityId, churchId)

  if (!churchData) {
    notFound()
  }

  const breadcrumb = [
    { name: "Home", href: "/" },
    { name: getDioceseData(dioceseId)?.nameEnglish || "Diocese", href: `/diocese/${dioceseId}` },
    {
      name: getSubcityData(dioceseId, subcityId)?.nameEnglish || "Subcity",
      href: `/diocese/${dioceseId}/subcity/${subcityId}`,
    },
    { name: churchData.nameEnglish, href: `/diocese/${dioceseId}/subcity/${subcityId}/church/${churchId}` },
  ]

  return (
    <ChurchLayout heroSectionData={churchData} breadcrumb={breadcrumb}>
      <Projects />
      <MissionVisionPurpose />
      <About />
      <ProgramsSection />
      <ContactSection />
      <LocationMap
        location={{
          latitude: 9.0359,
          longitude: 38.7526,
          name: "Meskel Square", // Placeholder, ideally this would come from churchData
          address: "Meskel Square, Addis Ababa, Ethiopia", // Placeholder
        }}
        apiKey="AIzaSyB90EitOwS5awbbIjAivDbnki9ClQ8C9zY"
      />
    </ChurchLayout>
  )
}
