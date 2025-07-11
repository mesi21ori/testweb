import { AdminLayout } from "@/components/admin-layout"
import { HierarchicalList } from "@/components/hierarchical-list"
import { StatsDashboard } from "@/components/stats-dashboard"
import { NewsSection } from "@/components/news-section"
import { InfoSections } from "@/components/info-sections"
import { ContactSection } from "@/components/contact-section"
import { LocationMap } from "@/components/location-map"
import { getSubcityData } from "@/lib/data"
import { notFound } from "next/navigation"

interface SubcityPageProps {
  params: Promise<{ cityId: string; subcityId: string }>
}

export default async function SubcityPage({ params }: SubcityPageProps) {
  const { cityId, subcityId } = await params
  const subcityData = getSubcityData(cityId, subcityId)

  if (!subcityData) {
    notFound()
  }

  return (
    <AdminLayout
      level="subcity"
      title={subcityData.name}
      titleAmharic={subcityData.nameAmharic}
      breadcrumb={[
        { name: "Home", href: "/" },
        { name: subcityData.cityName, href: `/city/${cityId}` },
        { name: subcityData.name, href: `/city/${cityId}/subcity/${subcityId}` },
      ]}
    >
      <HierarchicalList
        level="subcity"
        items={subcityData.weredas}
        title="Weredas"
        titleAmharic="ወረዳዎች"
        parentPath={`/city/${cityId}/subcity/${subcityId}`}
      />
      <StatsDashboard stats={subcityData.stats} />
      <NewsSection news={subcityData.news} />
      <InfoSections info={subcityData.info} />
      <ContactSection contact={subcityData.contact} />
      <LocationMap location={subcityData.location} />
    </AdminLayout>
  )
}
