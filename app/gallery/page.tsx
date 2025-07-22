import { PhotoGallery } from "@/components/photo-gallery"
import { PageTitle } from "@/components/page-title"

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <PageTitle title="Gallery" />
        <PhotoGallery />
      </div>
    </main>
  )
}
