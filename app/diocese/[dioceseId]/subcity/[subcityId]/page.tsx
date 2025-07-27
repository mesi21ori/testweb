import { ChurchLayout } from "@/components/church-layout"
import { HierarchicalList } from "@/components/hierarchical-list"
import { getSubcityData, getDioceseData } from "@/lib/church-structure-data" 
import { notFound } from "next/navigation"

interface SubcityPageProps {
  params: { dioceseId: string; subcityId: string }
}

export default async function SubcityPage({ params }: SubcityPageProps) {
  const { dioceseId, subcityId } = await params
  const subcityData = getSubcityData(dioceseId, subcityId)

  if (!subcityData) {
    notFound()
  }

  const breadcrumb = [
    { name: "Home", href: "/" },
    { name: getDioceseData(dioceseId)?.nameEnglish || "Diocese", href: `/diocese/${dioceseId}` },
    { name: subcityData.nameEnglish, href: `/diocese/${dioceseId}/subcity/${subcityId}` },
  ]

  return (
    <ChurchLayout heroSectionData={subcityData} breadcrumb={breadcrumb}>
      <HierarchicalList
        level="subcity"
        items={subcityData.churches}
        title="Churches"
        titleAmharic="ቤተ ክርስቲያናት"
        parentPath={`/diocese/${dioceseId}/subcity/${subcityId}`}
      />
    </ChurchLayout>
  )
}
