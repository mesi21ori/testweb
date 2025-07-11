import { ChurchLayout } from "@/components/church-layout"
import { HierarchicalList } from "@/components/hierarchical-list"
import { StatsDashboard } from "@/components/stats-dashboard"
import { NewsSection } from "@/components/news-section"
import { InfoSections } from "@/components/info-sections"
import { ContactSection } from "@/components/contact-section"
import { LocationMap } from "@/components/location-map"
import { getDioceseData } from "@/lib/church-data"
import { notFound } from "next/navigation"

interface DiocesePageProps {
  params: Promise<{ dioceseId: string }>
}

export default async function DiocesePage({ params }: DiocesePageProps) {
  const { dioceseId } = await params
  const dioceseData = getDioceseData(dioceseId)

  if (!dioceseData) {
    notFound()
  }

  return (
    <ChurchLayout
      level="diocese"
      title={`${dioceseData.name} Diocese Sunday Schools Unity`}
      titleAmharic={`${dioceseData.nameAmharic} ሀገረ ስብከት ሰንበት ት/ቤቶች አንድነት`}
      breadcrumb={[
        { name: "Home", href: "/" },
        { name: `${dioceseData.name} Diocese`, href: `/diocese/${dioceseId}` },
      ]}
    >
      <HierarchicalList
        level="diocese"
        items={dioceseData.subcities}
        title="Subcities"
        titleAmharic="ክፍለ ከተሞች"
        parentPath={`/diocese/${dioceseId}`}
      />
      <StatsDashboard stats={dioceseData.stats} />
      <NewsSection news={dioceseData.news} />
      <InfoSections info={dioceseData.info} />
      <ContactSection contact={dioceseData.contact} />
      <LocationMap location={dioceseData.location} />
    </ChurchLayout>
  )
}
