"use client"

import { useState } from "react"
import { Church, Building2, Landmark, ChevronRight } from "lucide-react"
import Link from "next/link"

type StructureTreeProps = {}

const structureData = [
  {
    id: "diocese1",
    name: "አዲስ አበባ ሃገረ ስብከት",
    nameEnglish: "Addis Ababa Diocese",
    subcities: [
      {
        id: "subcity1",
        name: "ቦሌ ክፍለ ከተማ",
        nameEnglish: "Bole Sub-city",
        churches: [
          {
            id: "church1",
            name: "ቅዱስ ጊዮርጊስ ቤተ ክርስቲያን",
            nameEnglish: "St. George Church",
          },
          {
            id: "church2",
            name: "ቅድስት ማርያም ቤተ ክርስቲያን",
            nameEnglish: "St. Mary Church",
          },
        ],
      },
      {
        id: "subcity2",
        name: "ኪርኮስ ክፍለ ከተማ",
        nameEnglish: "Kirkos Sub-city",
        churches: [
          {
            id: "church3",
            name: "ቅዱስ ሚካኤል ቤተ ክርስቲያን",
            nameEnglish: "St. Michael Church",
          },
          {
            id: "church4",
            name: "ቅዱስ ገብርኤል ቤተ ክርስቲያን",
            nameEnglish: "St. Gabriel Church",
          },
        ],
      },
    ],
  },
  {
    id: "diocese2",
    name: "ሸዋ ሃገረ ስብከት",
    nameEnglish: "Shewa Diocese",
    subcities: [
      {
        id: "subcity3",
        name: "ደብረ ብርሃን ክፍለ ከተማ",
        nameEnglish: "Debre Birhan Sub-city",
        churches: [
          {
            id: "church5",
            name: "ደብረ ብርሃን ሥላሴ ቤተ ክርስቲያን",
            nameEnglish: "Debre Birhan Trinity Church",
          },
        ],
      },
      {
        id: "subcity4",
        name: "አዳማ ክፍለ ከተማ",
        nameEnglish: "Adama Sub-city",
        churches: [
          {
            id: "church6",
            name: "ቅዱስ ዮሴፍ ቤተ ክርስቲያን",
            nameEnglish: "St. Joseph Church",
          },
        ],
      },
    ],
  },
  {
    id: "diocese3",
    name: "ጎንደር ሃገረ ስብከት",
    nameEnglish: "Gondar Diocese",
    subcities: [
      {
        id: "subcity5",
        name: "ጎንደር ክፍለ ከተማ",
        nameEnglish: "Gondar Sub-city",
        churches: [
          {
            id: "church7",
            name: "ደብረ ብርሃን ሥላሴ ቤተ ክርስቲያን",
            nameEnglish: "Debre Birhan Trinity Church",
          },
          {
            id: "church8",
            name: "ቅዱስ ራፋኤል ቤተ ክርስቲያን",
            nameEnglish: "St. Raphael Church",
          },
        ],
      },
    ],
  },
    {
    id: "diocese1",
    name: "አዲስ አበባ ሃገረ ስብከት",
    nameEnglish: "Addis Ababa Diocese",
    subcities: [
      {
        id: "subcity1",
        name: "ቦሌ ክፍለ ከተማ",
        nameEnglish: "Bole Sub-city",
        churches: [
          {
            id: "church1",
            name: "ቅዱስ ጊዮርጊስ ቤተ ክርስቲያን",
            nameEnglish: "St. George Church",
          },
          {
            id: "church2",
            name: "ቅድስት ማርያም ቤተ ክርስቲያን",
            nameEnglish: "St. Mary Church",
          },
        ],
      },
      {
        id: "subcity2",
        name: "ኪርኮስ ክፍለ ከተማ",
        nameEnglish: "Kirkos Sub-city",
        churches: [
          {
            id: "church3",
            name: "ቅዱስ ሚካኤል ቤተ ክርስቲያን",
            nameEnglish: "St. Michael Church",
          },
          {
            id: "church4",
            name: "ቅዱስ ገብርኤል ቤተ ክርስቲያን",
            nameEnglish: "St. Gabriel Church",
          },
        ],
      },
    ],
  },
   {
    id: "diocese2",
    name: "ሸዋ ሃገረ ስብከት",
    nameEnglish: "Shewa Diocese",
    subcities: [
      {
        id: "subcity3",
        name: "ደብረ ብርሃን ክፍለ ከተማ",
        nameEnglish: "Debre Birhan Sub-city",
        churches: [
          {
            id: "church5",
            name: "ደብረ ብርሃን ሥላሴ ቤተ ክርስቲያን",
            nameEnglish: "Debre Birhan Trinity Church",
          },
        ],
      },
      {
        id: "subcity4",
        name: "አዳማ ክፍለ ከተማ",
        nameEnglish: "Adama Sub-city",
        churches: [
          {
            id: "church6",
            name: "ቅዱስ ዮሴፍ ቤተ ክርስቲያን",
            nameEnglish: "St. Joseph Church",
          },
        ],
      },
    ],
  },

]

export function StructureTree({}: StructureTreeProps) {
  const [selectedDiocese, setSelectedDiocese] = useState<string | null>(null)
  const [selectedSubcity, setSelectedSubcity] = useState<string | null>(null)

  const selectedDioceseData = structureData.find((d) => d.id === selectedDiocese)
  const selectedSubcityData = selectedDioceseData?.subcities.find((s) => s.id === selectedSubcity)

  return (
    <div className="grid grid-cols-3 gap-2- h-100%  overflow-hidden w-100%">
      {/* Column 1: Dioceses */}
      <div className="border-r border-gray-200 pr-4 scroll-smooth max-h-100 overflow-y-auto
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-blue-100
  [&::-webkit-scrollbar-thumb]:bg-blue-300
  dark:[&::-webkit-scrollbar-track]:bg-blue-700
  dark:[&::-webkit-scrollbar-thumb]:bg-blue-500">
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-100">
          <Landmark className="w-4 h-4 text-yellow-600" />
          <h4 className="font-medium text-gray-800 text-sm">ሃገረ ስብከቶች</h4>
          <span className="text-xs text-gray-500 ml-auto">{structureData.length}</span>
        </div>
        <div className="space-y-1 overflow-y-auto max-h-64 ">
          {structureData.map((diocese) => (
            <div
              key={diocese.id}
              onClick={() => {
                setSelectedDiocese(diocese.id)
                setSelectedSubcity(null)
              }}
              className={`overflow-y-auto
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 cursor-pointer px-3 py-2 rounded-md text-sm transition-colors ${
                selectedDiocese === diocese.id
                  ? "bg-yellow-50 text-yellow-800 border-l-2 border-yellow-500"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <div className="font-ethiopic font-medium">{diocese.name}</div>
              <div className="text-xs text-gray-500 mt-0.5">{diocese.nameEnglish}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Column 2: Subcities */}
      <div className="border-r border-gray-200 pr-4 w=[300px]">
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-100">
          <Building2 className="w-4 h-4 text-green-600" />
          <h4 className="font-medium text-gray-800 text-sm">ክፍለ ከተሞች</h4>
          {selectedDioceseData && (
            <span className="text-xs text-gray-500 ml-auto">{selectedDioceseData.subcities.length}</span>
          )}
        </div>
        <div className="space-y-1 overflow-y-auto max-h-64">
          {selectedDioceseData ? (
            selectedDioceseData.subcities.map((subcity) => (
              <div
                key={subcity.id}
                onClick={() => setSelectedSubcity(subcity.id)}
                className={`cursor-pointer px-3 py-2 rounded-md text-sm transition-colors ${
                  selectedSubcity === subcity.id
                    ? "bg-green-50 text-green-800 border-l-2 border-green-500"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <div className="font-ethiopic font-medium">{subcity.name}</div>
                <div className="text-xs text-gray-500 mt-0.5">{subcity.nameEnglish}</div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-400">
              <Building2 className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm font-ethiopic">ሃገረ ስብከት ይምረጡ</p>
              <p className="text-xs">Select a diocese</p>
            </div>
          )}
        </div>
      </div>

      {/* Column 3: Churches */}
      <div>
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-100 w=[300px]">
          <Church className="w-4 h-4 text-purple-600" />
          <h4 className="font-medium text-gray-800 text-sm">ሰንበት ት/ቤቶች</h4>
          {selectedSubcityData && (
            <span className="text-xs text-gray-500 ml-auto">{selectedSubcityData.churches.length}</span>
          )}
        </div>
        <div className="space-y-1 overflow-y-auto max-h-64 ">
          {selectedSubcityData ? (
            selectedSubcityData.churches.map((church) => (
              <Link
                key={church.id}
                href={`/diocese/${selectedDiocese}/subcity/${selectedSubcity}/church/${church.id}`}
                className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-800 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-ethiopic font-medium">{church.name}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{church.nameEnglish}</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors" />
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center py-8 text-gray-400">
              <Church className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm font-ethiopic">ክፍለ ከተማ ይምረጡ</p>
              <p className="text-xs">Select a sub-city</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
