"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Church } from "lucide-react"
import { Loader } from "@googlemaps/js-api-loader"
import { useEffect, useRef } from "react"
import { locationInfo } from "@/lib/data" // Import locationInfo
import { useTheme } from "@/components/theme-provider" // Import useTheme

interface LocationInfo {
  latitude: number
  longitude: number
  name: string
  address?: string
}

interface LocationMapProps {
  location?: LocationInfo // Make location optional and provide default
  apiKey: string
}

export function LocationMap({ location = locationInfo, apiKey }: LocationMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const { currentColors } = useTheme()

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: apiKey,
        version: "weekly",
      })
      try {
        const { Map } = await loader.importLibrary("maps")
        const { AdvancedMarkerElement } = await loader.importLibrary("marker")
        const { LatLng } = await loader.importLibrary("core")

        const position = new LatLng(location.latitude, location.longitude)

        // Map options
        const mapOptions = {
          center: position,
          zoom: 15,
          mapId: "DEMO_MAP_ID", // You might want to use a specific map ID from your Google Cloud project
          disableDefaultUI: true,
          gestureHandling: "greedy",
        }

        // Setup the map
        const map = new Map(mapRef.current as HTMLDivElement, mapOptions)

        // Create the marker
        const marker = new AdvancedMarkerElement({
          map: map,
          position: position,
          title: location.name,
        })

        // Add info window if address exists
        if (location.address) {
          const { InfoWindow } = await loader.importLibrary("maps")
          const infoWindow = new InfoWindow({
            content: `
              <div class="p-2 text-foreground bg-card">
                <h3 class="font-bold">${location.name}</h3>
                <p class="text-sm text-muted-foreground">${location.address}</p>
              </div>
            `,
          })
          marker.addListener("click", () => {
            infoWindow.open({
              anchor: marker,
              map,
            })
          })
        }
      } catch (error) {
        console.error("Error loading Google Maps:", error)
      }
    }
    initMap()
  }, [location, apiKey])

  return (
    <section className="space-y-6 m-10 bg-background">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-2">Location</h2>
        <p className="text-xl text-muted-foreground">አካባቢ</p>
      </div>
      <Card className="bg-card text-card-foreground">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Church className="w-5 h-5 text-primary" />
            {location.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg overflow-hidden">
            {/* Map container */}
            <div
              ref={mapRef}
              className="w-full h-96 bg-muted" // Use muted for a placeholder background
              aria-label="Map showing church location"
            >
              {/* Loading fallback */}
              <div
                className="h-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(to bottom right, ${currentColors.background} 0%, ${currentColors.secondary} 100%)`,
                }}
              >
                <div className="text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{
                      background: `linear-gradient(to right, ${currentColors.primary} 0%, ${currentColors.secondary} 100%)`,
                    }}
                  >
                    <Church className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <p className="text-muted-foreground">Loading map...</p>
                </div>
              </div>
            </div>
            {/* Location details */}
            <div className="mt-4 text-center">
              {location.address && <p className="text-muted-foreground mb-2">{location.address}</p>}
              <a
                href={`https://www.google.com/maps?q=${location.latitude},${location.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
