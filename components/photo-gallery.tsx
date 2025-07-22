"use client"
import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { galleryData, type PhotoItem } from "@/lib/data"

export function PhotoGallery() {
  const [activeCategory, setActiveCategory] = useState(galleryData[0]?.id || "")
  const [selectedPhotoItem, setSelectedPhotoItem] = useState<PhotoItem | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const currentCategoryPhotoItems = galleryData.find((category) => category.id === activeCategory)?.photoItems || []

  const openDialogWithPhotoItem = (item: PhotoItem) => {
    setSelectedPhotoItem(item)
    setCurrentImageIndex(0) // Always start with the first image when opening a new item
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedPhotoItem) return

    const totalImages = selectedPhotoItem.images.length
    if (direction === "next") {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages)
    } else {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 font-ethiopic text-foreground">የፎቶ ማዕከለ ስዕላት</h2>
      <p className="text-center text-muted-foreground mb-10">Explore our collection of photos by category.</p>

      <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full mb-10">
        <TabsList className="flex flex-wrap sm:grid-cols-3 gap-2 h-auto justify-center sm:justify-start overflow-x-auto pb-2 bg-muted text-muted-foreground">
          {galleryData.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="py-2 px-4 whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm hover:bg-accent hover:text-accent-foreground"
            >
              <span className="font-ethiopic mr-1">{category.name}</span>
              <span className="text-xs text-muted-foreground data-[state=active]:text-primary-foreground/80">
                ({category.nameEnglish})
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value={activeCategory}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {currentCategoryPhotoItems.map((photoItem) => (
                <motion.div
                  key={photoItem.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 bg-card text-card-foreground border-border"
                    onClick={() => openDialogWithPhotoItem(photoItem)}
                  >
                    <div className="relative w-full h-48">
                      <Image
                        src={photoItem.images[0] || "/placeholder.svg"} // Use the first image as thumbnail
                        alt={photoItem.alt}
                        fill
                        style={{ objectFit: "cover" }}
                        className="transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg text-foreground">{photoItem.alt}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                        {photoItem.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </TabsContent>
      </Tabs>

      <AnimatePresence>
        {selectedPhotoItem && (
          <Dialog open={!!selectedPhotoItem} onOpenChange={() => setSelectedPhotoItem(null)}>
            <DialogContent className="sm:max-w-[800px] max-h-[95vh] overflow-y-auto bg-card text-card-foreground border-border">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col h-full w-full"
              >
                {/* IMPORTANT CHANGE: Set a fixed medium height for the image container */}
                <div className="relative w-full h-[450px] flex items-center justify-center bg-background">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Image
                        src={selectedPhotoItem.images[currentImageIndex] || "/placeholder.svg"}
                        alt={`${selectedPhotoItem.alt} - Image ${currentImageIndex + 1}`}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </motion.div>
                  </AnimatePresence>
                  {selectedPhotoItem.images.length > 1 && (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-2 z-10 bg-background/50 hover:bg-background/80 rounded-full text-foreground"
                        onClick={() => navigateImage("prev")}
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 z-10 bg-background/50 hover:bg-background/80 rounded-full text-foreground"
                        onClick={() => navigateImage("next")}
                      >
                        <ChevronRight className="h-6 w-6" />
                      </Button>
                    </>
                  )}
                </div>
                <DialogHeader className="p-6 border-t border-border">
                  <DialogTitle className="text-xl text-foreground">{selectedPhotoItem.alt}</DialogTitle>
                  <DialogDescription className="text-muted-foreground">
                    {selectedPhotoItem.description}
                    {selectedPhotoItem.images.length > 1 && (
                      <span className="ml-2 text-sm text-muted-foreground">
                        ({currentImageIndex + 1} of {selectedPhotoItem.images.length})
                      </span>
                    )}
                  </DialogDescription>
                </DialogHeader>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  )
}
