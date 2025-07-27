// import { AdminLayout } from "@/components/admin-layout"
// import { StatsDashboard } from "@/components/stats-dashboard"
// import { NewsSection } from "@/components/news-section"
// import { InfoSections } from "@/components/info-sections"
// import { ContactSection } from "@/components/contact-section"
// import { LocationMap } from "@/components/location-map"
// import { getWeredaData } from "@/lib/data"
// import { notFound } from "next/navigation"

// interface WeredaPageProps {
//   params: Promise<{ cityId: string; subcityId: string; weredaId: string }>
// }

// export default async function WeredaPage({ params }: WeredaPageProps) {
//   const { cityId, subcityId, weredaId } = await params
//   const weredaData = getWeredaData(cityId, subcityId, weredaId)

//   if (!weredaData) {
//     notFound()
//   }

//   return (
//     <AdminLayout
//       level="wereda"
//       title={weredaData.name}
//       titleAmharic={weredaData.nameAmharic}
//       breadcrumb={[
//         { name: "Home", href: "/" },
//         { name: weredaData.cityName, href: `/city/${cityId}` },
//         { name: weredaData.subcityName, href: `/city/${cityId}/subcity/${subcityId}` },
//         { name: weredaData.name, href: `/city/${cityId}/subcity/${subcityId}/wereda/${weredaId}` },
//       ]}
//     >
//       <StatsDashboard stats={weredaData.stats} />
//       <NewsSection news={weredaData.news} />
//       <InfoSections info={weredaData.info} />
//       <ContactSection contact={weredaData.contact} />
//       <LocationMap location={weredaData.location} />
//     </AdminLayout>
//   )
// }
