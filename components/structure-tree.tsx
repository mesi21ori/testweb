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
            id: "church3",
            name: "ቅድስት ማርያም ቤተ ክርስቲያን",
            nameEnglish: "St. Mary Church",
          },
          {
            id: "church4",
            name: "ቅድስት ማርያም ቤተ ክርስቲያን",
            nameEnglish: "St. Mary Church",
          },
          {
            id: "church5",
            name: "ቅድስት ማርያም ቤተ ክርስቲያን",
            nameEnglish: "St. Mary Church",
          },
          {
            id: "church6",
            name: "ቅድስት ማርያም ቤተ ክርስቲያን",
            nameEnglish: "St. Mary Church",
          },
          {
            id: "church7",
            name: "ቅድስት ማርያም ቤተ ክርስቲያን",
            nameEnglish: "St. Mary Church",
          },
          {
            id: "church8",
            name: "ቅድስት ማርያም ቤተ ክርስቲያን",
            nameEnglish: "St. Mary Church",
          },
          {
            id: "church9",
            name: "ቅድስት ማርያም ቤተ ክርስቲያን",
            nameEnglish: "St. Mary Church",
          },
          {
            id: "church10",
            name: "ቅድስት ማርያም ቤተ ክርስቲያን",
            nameEnglish: "St. Mary Church",
          },
          {
            id: "church11",
            name: "ቅድስት ማርያም ቤተ ክርስቲያን",
            nameEnglish: "St. Mary Church",
          },
          {
            id: "church12",
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
    id: "diocese4",
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
    id: "diocese6",
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
    id: "diocese8",
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
    id: "diocese9",
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
    id: "diocese10",
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
    <div className="grid grid-cols-3 gap-4 w-full h-[80vh]">
      {/* Column 1: Dioceses */}
      <div className="border-r border-border pr-4 flex flex-col">
        {/* Sticky header */}
        <div className="bg-background dark:bg-background pb-2 border-b border-border sticky top-0 z-10">
          <div className="flex items-center gap-2 mb-2">
            <Landmark className="w-4 h-4 text-primary" />
            <h4 className="font-medium text-foreground text-sm">ሃገረ ስብከቶች</h4>
            <span className="text-xs text-muted-foreground ml-auto">{structureData.length}</span>
          </div>
        </div>
        {/* Scrollable content */}
        <div className="overflow-y-auto scrollbar-hide flex-1">
          <div className="space-y-1">
            {structureData.map((diocese) => (
              <div
                key={diocese.id}
                onClick={() => {
                  setSelectedDiocese(diocese.id)
                  setSelectedSubcity(null)
                }}
                className={`cursor-pointer px-3 py-2 rounded-md text-sm transition-colors ${
                  selectedDiocese === diocese.id
                    ? "bg-accent text-accent-foreground border-l-2 border-primary"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                <div className="font-ethiopic font-medium">{diocese.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{diocese.nameEnglish}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Column 2: Subcities */}
      <div className="border-r border-border pr-4 overflow-y-auto scrollbar-hide">
        <div className="sticky top-0 bg-background dark:bg-background z-10 pb-2 border-b border-border">
          <div className="flex items-center gap-2 mb-2">
            <Building2 className="w-4 h-4 text-primary" />
            <h4 className="font-medium text-foreground text-sm">ክፍለ ከተሞች</h4>
            {selectedDioceseData && (
              <span className="text-xs text-muted-foreground ml-auto">{selectedDioceseData.subcities.length}</span>
            )}
          </div>
        </div>
        <div className="space-y-1">
          {selectedDioceseData ? (
            selectedDioceseData.subcities.map((subcity) => (
              <div
                key={subcity.id}
                onClick={() => setSelectedSubcity(subcity.id)}
                className={`cursor-pointer px-3 py-2 rounded-md text-sm transition-colors ${
                  selectedSubcity === subcity.id
                    ? "bg-accent text-accent-foreground border-l-2 border-primary"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                <div className="font-ethiopic font-medium">{subcity.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{subcity.nameEnglish}</div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <Building2 className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm font-ethiopic">ሃገረ ስብከት ይምረጡ</p>
              <p className="text-xs">Select a diocese</p>
            </div>
          )}
        </div>
      </div>
      {/* Column 3: Churches */}
      <div className="overflow-y-auto scrollbar-hide">
        <div className="sticky top-0 bg-background dark:bg-background z-10 pb-2 border-b border-border">
          <div className="flex items-center gap-2 mb-2">
            <Church className="w-4 h-4 text-primary" />
            <h4 className="font-medium text-foreground text-sm">ሰንበት ቤተ ክርስቲያኖች</h4>
            {selectedSubcityData && (
              <span className="text-xs text-muted-foreground ml-auto">{selectedSubcityData.churches.length}</span>
            )}
          </div>
        </div>
        <div className="space-y-1">
          {selectedSubcityData ? (
            selectedSubcityData.churches.map((church) => (
              <Link
                key={church.id}
                href={`/diocese/${selectedDiocese}/subcity/${selectedSubcity}/church/${church.id}`}
                className="block px-3 py-2 rounded-md text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-ethiopic font-medium">{church.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{church.nameEnglish}</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center py-8 text-muted-foreground">
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
