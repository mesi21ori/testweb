import { ChurchLayout } from "@/components/church-layout"
import { HierarchicalList } from "@/components/hierarchical-list"
import { StatsDashboard } from "@/components/stats-dashboard"
import { NewsSection } from "@/components/news-section"
import { InfoSections } from "@/components/info-sections"
import { ContactSection } from "@/components/contact-section"
import { LocationMap } from "@/components/location-map"
import { getSubcityData } from "@/lib/church-data"
import { notFound } from "next/navigation"

interface SubcityPageProps {
  params: Promise<{ dioceseId: string; subcityId: string }>
}

export default async function SubcityPage({ params }: SubcityPageProps) {
  const { dioceseId, subcityId } = await params
  const subcityData = getSubcityData(dioceseId, subcityId)

  if (!subcityData) {
    notFound()
  }

  return (
    <ChurchLayout
      level="subcity"
      title={`${subcityData.name} Sunday Schools Unity`}
      titleAmharic={`${subcityData.nameAmharic} ሰንበት ት/ቤቶች አንድነት`}
      breadcrumb={[
        { name: "Home", href: "/" },
        { name: `${subcityData.dioceseName} Diocese`, href: `/diocese/${dioceseId}` },
        { name: subcityData.name, href: `/diocese/${dioceseId}/subcity/${subcityId}` },
      ]}
    >
      <HierarchicalList
        level="subcity"
        items={subcityData.churches}
        title="Church Sunday Schools"
        titleAmharic="የቤተክርስቲያን ሰንበት ት/ቤቶች"
        parentPath={`/diocese/${dioceseId}/subcity/${subcityId}`}
      />
      <StatsDashboard stats={subcityData.stats} />
      <NewsSection news={subcityData.news} />
      <InfoSections info={subcityData.info} />
      <ContactSection contact={subcityData.contact} />
      <LocationMap location={subcityData.location} />
    </ChurchLayout>
  )
}
