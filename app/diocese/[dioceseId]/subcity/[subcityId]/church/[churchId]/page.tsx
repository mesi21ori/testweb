import { ChurchLayout } from "@/components/church-layout"
import { StatsDashboard } from "@/components/stats-dashboard"
import { NewsSection } from "@/components/news-section"
import { InfoSections } from "@/components/info-sections"
import { ContactSection } from "@/components/contact-section"
import { LocationMap } from "@/components/location-map"
import { getChurchData } from "@/lib/church-data"
import { notFound } from "next/navigation"

interface ChurchPageProps {
  params: Promise<{ dioceseId: string; subcityId: string; churchId: string }>
}

export default async function ChurchPage({ params }: ChurchPageProps) {
  const { dioceseId, subcityId, churchId } = await params
  const churchData = getChurchData(dioceseId, subcityId, churchId)

  if (!churchData) {
    notFound()
  }

  return (
    <ChurchLayout
      level="church"
      title={`${churchData.name} Sunday School`}
      titleAmharic={`${churchData.nameAmharic} ሰንበት ት/ቤት`}
      breadcrumb={[
        { name: "Home", href: "/" },
        { name: `${churchData.dioceseName} Diocese`, href: `/diocese/${dioceseId}` },
        { name: churchData.subcityName, href: `/diocese/${dioceseId}/subcity/${subcityId}` },
        { name: churchData.name, href: `/diocese/${dioceseId}/subcity/${subcityId}/church/${churchId}` },
      ]}
    >
      <StatsDashboard stats={churchData.stats} />
      <NewsSection news={churchData.news} />
      <InfoSections info={churchData.info} />
      <ContactSection contact={churchData.contact} />
      <LocationMap location={churchData.location} />
    </ChurchLayout>
  )
}
