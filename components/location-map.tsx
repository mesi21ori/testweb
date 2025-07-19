"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Church } from "lucide-react"
import { Loader } from "@googlemaps/js-api-loader"
import { useEffect, useRef } from "react"

interface LocationInfo {
  latitude: number
  longitude: number
  name: string
  address?: string
}

interface LocationMapProps {
  location: LocationInfo
  apiKey: string
}

export function LocationMap({ location, apiKey }: LocationMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)

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
          mapId: "DEMO_MAP_ID",
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
              <div class="p-2">
                <h3 class="font-bold">${location.name}</h3>
                <p class="text-sm">${location.address}</p>
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
    <section className="space-y-6 m-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Location</h2>
        <p className="text-xl text-gray-600">አካባቢ</p>
      </div>

      <Card className="">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Church className="w-5 h-5 text-yellow-600" />
            {location.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg overflow-hidden">
            {/* Map container */}
            <div 
              ref={mapRef} 
              className="w-full h-96 bg-gray-100"
              aria-label="Map showing church location"
            >
              {/* Loading fallback */}
              <div className="h-full flex items-center justify-center bg-gradient-to-br from-yellow-50 to-red-50">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Church className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-600">Loading map...</p>
                </div>
              </div>
            </div>

            {/* Location details */}
            <div className="mt-4 text-center">
              {location.address && (
                <p className="text-gray-700 mb-2">{location.address}</p>
              )}
              <a
                href={`https://www.google.com/maps?q=${location.latitude},${location.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-yellow-600/80 text-white rounded-md hover:bg-yellow-600 transition-colors text-sm"
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