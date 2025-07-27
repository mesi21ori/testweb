// import { AdminLayout } from "@/components/admin-layout"
// import { HierarchicalList } from "@/components/hierarchical-list"
// import { StatsDashboard } from "@/components/stats-dashboard"
// import { NewsSection } from "@/components/news-section"
// import { InfoSections } from "@/components/info-sections"
// import { ContactSection } from "@/components/contact-section"
// import { LocationMap } from "@/components/location-map"
// import { getCityData } from "@/lib/data"
// import { notFound } from "next/navigation"

// interface CityPageProps {
//   params: Promise<{ cityId: string }>
// }

// export default async function CityPage({ params }: CityPageProps) {
//   const { cityId } = await params
//   const cityData = getCityData(cityId)

//   if (!cityData) {
//     notFound()
//   }

//   return (
//     <AdminLayout
//       level="city"
//       title={cityData.name}
//       titleAmharic={cityData.nameAmharic}
//       breadcrumb={[
//         { name: "Home", href: "/" },
//         { name: cityData.name, href: `/city/${cityId}` },
//       ]}
//     >
//       <HierarchicalList
//         level="city"
//         items={cityData.subcities}
//         title="Subcities"
//         titleAmharic="ክፍለ ከተሞች"
//         parentPath={`/city/${cityId}`}
//       />
//       <StatsDashboard stats={cityData.stats} />
//       <NewsSection news={cityData.news} />
//       <InfoSections info={cityData.info} />
//       <ContactSection contact={cityData.contact} />
//       <LocationMap location={cityData.location} />
//     </AdminLayout>
//   )
// }
