import { ChurchLayout } from "@/components/church-layout"
import { HierarchicalList } from "@/components/hierarchical-list"
import { getDioceseData } from "@/lib/church-structure-data" // Import from new data file
import { notFound } from "next/navigation"

interface DiocesePageProps {
  params: { dioceseId: string }
}

export default async function DiocesePage({ params }: DiocesePageProps) {
  const { dioceseId } = await params
  const dioceseData = getDioceseData(dioceseId)

  if (!dioceseData) {
    notFound()
  }

  const breadcrumb = [
    { name: "Home", href: "/" },
    { name: dioceseData.nameEnglish, href: `/diocese/${dioceseId}` },
  ]

  return (
    <ChurchLayout heroSectionData={dioceseData} breadcrumb={breadcrumb}>
      <HierarchicalList
        level="diocese"
        items={dioceseData.subcities}
        title="Subcities"
        titleAmharic="ክፍለ ከተሞች"
        parentPath={`/diocese/${dioceseId}`}
      />
    </ChurchLayout>
  )
}
