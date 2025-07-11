"use client"

import { useState } from "react"
import { Church, Building2, Landmark } from "lucide-react"
import Link from "next/link"

interface StructureTreeProps {}
const structureData = [
  {
    id: "diocese1",
    name: "ሃገረ ስብከት 1",
    nameAmharic: "ዲዮሴስ 1",
    subcities: [
      {
        id: "subcity1",
        name: "ክፍለ ከተማ 1",
        nameAmharic: "ክፍለ ከተማ 1",
        churches: [
          { id: "church1", name: "ቤተ ክርስቲያን  1", nameAmharic: "ቤተ ክርስቲያን 1" },
        ],
      },
    ],
  },
  {
    id: "diocese2",
    name: "ሃገረ ስብከት 2",
    nameAmharic: "ዲዮሴስ 2",
    subcities: [
      {
        id: "subcity2",
        name: "ክፍለ ከተማ 2",
        nameAmharic: "ክፍለ ከተማ 2",
        churches: [
          { id: "church2", name: "ቤተ ክርስቲያን  2", nameAmharic: "ቤተ ክርስቲያን 2" },
          { id: "church3", name: "ቤተ ክርስቲያን  3", nameAmharic: "ቤተ ክርስቲያን 3" },
        ],
      },
    ],
  },
  {
    id: "diocese3",
    name: "ሃገረ ስብከት 3",
    nameAmharic: "ዲዮሴስ 3",
    subcities: [ {
      id: "subcity3",
      name: "ክፍለ ከተማ 3",
      nameAmharic: "ክፍለ ከተማ 3",
      churches: [
        { id: "church4", name: "ቤተ ክርስቲያን  4", nameAmharic: "ቤተ ክርስቲያን 4" },
        { id: "church5", name: "ቤተ ክርስቲያን  5", nameAmharic: "ቤተ ክርስቲያን 5" },
        { id: "church6", name: "ቤተ ክርስቲያን  6", nameAmharic: "ቤተ ክርስቲያን 6" },
    ],
    }
  ]
  },
];

export function StructureTree({}: StructureTreeProps) {
  const [selectedDiocese, setSelectedDiocese] = useState<string | null>(null)
  const [selectedSubcity, setSelectedSubcity] = useState<string | null>(null)

  const selectedDioceseData = structureData.find((d) => d.id === selectedDiocese)
  const selectedSubcityData = selectedDioceseData?.subcities.find((s) => s.id === selectedSubcity)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-mono">
      {/* Column 1: Dioceses */}
      <div>
        <h4 className="font-bold mb-2 text-gray-700 flex items-center gap-1">
          <Landmark className="w-4 h-4 text-yellow-600" />
          Dioceses
        </h4>
        <ul className="space-y-1">
          {structureData.map((diocese) => (
            <li
              key={diocese.id}
              onMouseEnter={() => setSelectedDiocese(diocese.id)}
              className={`cursor-pointer p-1 rounded hover:bg-yellow-50 ${
                selectedDiocese === diocese.id ? "bg-yellow-100 font-semibold" : ""
              }`}
            >
              {diocese.name} 
            </li>
          ))}
        </ul>
      </div>

      {/* Column 2: Subcities */}
      <div>
        <h4 className="font-bold mb-2 text-gray-700 flex items-center gap-1">
          <Building2 className="w-4 h-4 text-green-600" />
          Subcities
        </h4>
        {selectedDioceseData ? (
          <ul className="space-y-1">
            {selectedDioceseData.subcities.map((subcity) => (
              <li
                key={subcity.id}
                onMouseEnter={() => setSelectedSubcity(subcity.id)}
                className={`cursor-pointer p-1 rounded hover:bg-green-50 ${
                  selectedSubcity === subcity.id ? "bg-green-100 font-semibold" : ""
                }`}
              >
                {subcity.name} 
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 italic">Hover a Diocese to see Subcities</p>
        )}
      </div>

      {/* Column 3: Churches */}
      <div>
        <h4 className="font-bold mb-2 text-gray-700 flex items-center gap-1">
          <Church className="w-4 h-4 text-purple-600" />
          Sunday Schools
        </h4>
        {selectedSubcityData ? (
          <ul className="space-y-1">
            {selectedSubcityData.churches.map((church) => (
              <li key={church.id}>
                <Link
                  href={`/diocese/${selectedDiocese}/subcity/${selectedSubcity}/church/${church.id}`}
                  className="block p-1 rounded hover:bg-purple-50 hover:text-purple-700"
                >
                  {church.name} 
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 italic">Hover a Subcity to see Sunday Schools</p>
        )}
      </div>
    </div>
  )
}
