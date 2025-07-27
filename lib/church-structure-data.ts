// Removed direct import of Lucide icons here, as they will be strings now
// import { Globe, MapPin, Church, Users } from 'lucide-react'

export interface StatItem {
  label: string
  amharicLabel: string
  value: number
  icon: string // Changed to string
  description: string
}

export interface ChurchNode {
  id: string
  name: string
  nameEnglish: string
  title: string
  titleAmharic: string
  level: "church"
  stats: StatItem[]
}

export interface SubcityNode {
  id: string
  name: string
  nameEnglish: string
  title: string
  titleAmharic: string
  level: "subcity"
  churches: ChurchNode[]
  stats: StatItem[]
}

export interface DioceseNode {
  id: string
  name: string
  nameEnglish: string
  title: string
  titleAmharic: string
  level: "diocese"
  subcities: SubcityNode[]
  stats: StatItem[]
}

export interface ChurchStructureData {
  main: {
    title: string
    titleAmharic: string
    level: "main"
    stats: StatItem[]
  }
  dioceses: DioceseNode[]
}

export const churchStructureData: ChurchStructureData = {
  main: {
    title: "የኢ.ኦ.ተ.ቤ.ክ ሰንበት ት/ቤቶች አንድነት",
    titleAmharic: "EOTC Sunday School Unity",
    level: "main",
    stats: [
      {
        label: "Dioceses",
        amharicLabel: "ሀገረ ስብከቶች",
        value: 15,
        icon: "Globe", // Changed to string
        description: "Geographical administrative regions of the church.",
      },
      {
        label: "Subcities",
        amharicLabel: "ክፍለ ከተሞች",
        value: 45,
        icon: "MapPin", // Changed to string
        description: "Urban divisions where churches are located.",
      },
      {
        label: "Churches",
        amharicLabel: "ቤተክርስቲያናት",
        value: 300,
        icon: "Church", // Changed to string
        description: "Places of worship and community gathering.",
      },
      {
        label: "Students",
        amharicLabel: "ተማሪዎች",
        value: 500,
        icon: "Users", // Changed to string
        description: "Individuals enrolled in Sunday School programs.",
      },
    ],
  },
  dioceses: [
    {
      id: "addis-ababa",
      name: "አዲስ አበባ ሃገረ ስብከት",
      nameEnglish: "Addis Ababa Diocese",
      title: "የአዲስ አበባ ሃገረ ስብከት ሰንበት ት/ቤቶች አንድነት",
      titleAmharic: "Addis Ababa Diocese Sunday Schools Unity",
      level: "diocese",
      stats: [
        {
          label: "Subcities",
          amharicLabel: "ክፍለ ከተሞች",
          value: 10,
          icon: "MapPin", // Changed to string
          description: "Subcities within Addis Ababa Diocese.",
        },
        {
          label: "Churches",
          amharicLabel: "ቤተክርስቲያናት",
          value: 120,
          icon: "Church", // Changed to string
          description: "Churches within Addis Ababa Diocese.",
        },
        {
          label: "Students",
          amharicLabel: "ተማሪዎች",
          value: 20000,
          icon: "Users", // Changed to string
          description: "Students in Addis Ababa Diocese Sunday Schools.",
        },
      ],
      subcities: [
        {
          id: "bole",
          name: "ቦሌ ክፍለ ከተማ",
          nameEnglish: "Bole Sub-city",
          title: "የቦሌ ክፍለ ከተማ ሰንበት ት/ቤቶች አንድነት",
          titleAmharic: "Bole Sub-city Sunday Schools Unity",
          level: "subcity",
          stats: [
            {
              label: "Churches",
              amharicLabel: "ቤተክርስቲያናት",
              value: 12,
              icon: "Church", // Changed to string
              description: "Churches within Bole Sub-city.",
            },
            {
              label: "Students",
              amharicLabel: "ተማሪዎች",
              value: 2500,
              icon: "Users", // Changed to string
              description: "Students in Bole Sub-city Sunday Schools.",
            },
          ],
          churches: [
            {
              id: "st-george",
              name: "ቅዱስ ጊዮርጊስ ቤተ ክርስቲያን",
              nameEnglish: "St. George Church",
              title: "የቅዱስ ጊዮርጊስ ሰንበት ት/ቤት",
              titleAmharic: "St. George Sunday School",
              level: "church",
              stats: [
                {
                  label: "Students",
                  amharicLabel: "ተማሪዎች",
                  value: 300,
                  icon: "Users", // Changed to string
                  description: "Students in St. George Sunday School.",
                },
              ],
            },
            {
              id: "st-mary",
              name: "ቅድስት ማርያም ቤተ ክርስቲያን",
              nameEnglish: "St. Mary Church",
              title: "የቅድስት ማርያም ሰንበት ት/ቤት",
              titleAmharic: "St. Mary Sunday School",
              level: "church",
              stats: [
                {
                  label: "Students",
                  amharicLabel: "ተማሪዎች",
                  value: 250,
                  icon: "Users", // Changed to string
                  description: "Students in St. Mary Sunday School.",
                },
              ],
            },
          ],
        },
        {
          id: "kirkos",
          name: "ኪርኮስ ክፍለ ከተማ",
          nameEnglish: "Kirkos Sub-city",
          title: "የኪርኮስ ክፍለ ከተማ ሰንበት ት/ቤቶች አንድነት",
          titleAmharic: "Kirkos Sub-city Sunday Schools Unity",
          level: "subcity",
          stats: [
            {
              label: "Churches",
              amharicLabel: "ቤተክርስቲያናት",
              value: 8,
              icon: "Church", // Changed to string
              description: "Churches within Kirkos Sub-city.",
            },
            {
              label: "Students",
              amharicLabel: "ተማሪዎች",
              value: 1800,
              icon: "Users", // Changed to string
              description: "Students in Kirkos Sub-city Sunday Schools.",
            },
          ],
          churches: [
            {
              id: "st-michael",
              name: "ቅዱስ ሚካኤል ቤተ ክርስቲያን",
              nameEnglish: "St. Michael Church",
              title: "የቅዱስ ሚካኤል ሰንበት ት/ቤት",
              titleAmharic: "St. Michael Sunday School",
              level: "church",
              stats: [
                {
                  label: "Students",
                  amharicLabel: "ተማሪዎች",
                  value: 200,
                  icon: "Users", // Changed to string
                  description: "Students in St. Michael Sunday School.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "shewa",
      name: "ሸዋ ሃገረ ስብከት",
      nameEnglish: "Shewa Diocese",
      title: "የሸዋ ሃገረ ስብከት ሰንበት ት/ቤቶች አንድነት",
      titleAmharic: "Shewa Diocese Sunday Schools Unity",
      level: "diocese",
      stats: [
        {
          label: "Subcities",
          amharicLabel: "ክፍለ ከተሞች",
          value: 5,
          icon: "MapPin", // Changed to string
          description: "Subcities within Shewa Diocese.",
        },
        {
          label: "Churches",
          amharicLabel: "ቤተክርስቲያናት",
          value: 50,
          icon: "Church", // Changed to string
          description: "Churches within Shewa Diocese.",
        },
        {
          label: "Students",
          amharicLabel: "ተማሪዎች",
          value: 8000,
          icon: "Users", // Changed to string
          description: "Students in Shewa Diocese Sunday Schools.",
        },
      ],
      subcities: [
        {
          id: "debre-birhan",
          name: "ደብረ ብርሃን ክፍለ ከተማ",
          nameEnglish: "Debre Birhan Sub-city",
          title: "የደብረ ብርሃን ክፍለ ከተማ ሰንበት ት/ቤቶች አንድነት",
          titleAmharic: "Debre Birhan Sub-city Sunday Schools Unity",
          level: "subcity",
          stats: [
            {
              label: "Churches",
              amharicLabel: "ቤተክርስቲያናት",
              value: 5,
              icon: "Church", // Changed to string
              description: "Churches within Debre Birhan Sub-city.",
            },
            {
              label: "Students",
              amharicLabel: "ተማሪዎች",
              value: 1000,
              icon: "Users", // Changed to string
              description: "Students in Debre Birhan Sub-city Sunday Schools.",
            },
          ],
          churches: [
            {
              id: "debre-birhan-trinity",
              name: "ደብረ ብርሃን ሥላሴ ቤተ ክርስቲያን",
              nameEnglish: "Debre Birhan Trinity Church",
              title: "የደብረ ብርሃን ሥላሴ ሰንበት ት/ቤት",
              titleAmharic: "Debre Birhan Trinity Sunday School",
              level: "church",
              stats: [
                {
                  label: "Students",
                  amharicLabel: "ተማሪዎች",
                  value: 150,
                  icon: "Users", // Changed to string
                  description: "Students in Debre Birhan Trinity Sunday School.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

export function getDioceseData(dioceseId: string): DioceseNode | undefined {
  return churchStructureData.dioceses.find((d) => d.id === dioceseId)
}

export function getSubcityData(dioceseId: string, subcityId: string): SubcityNode | undefined {
  const diocese = getDioceseData(dioceseId)
  return diocese?.subcities.find((s) => s.id === subcityId)
}

export function getChurchData(dioceseId: string, subcityId: string, churchId: string): ChurchNode | undefined {
  const subcity = getSubcityData(dioceseId, subcityId)
  return subcity?.churches.find((c) => c.id === churchId)
}

// Helper function to get data for the main page
export function getMainPageData() {
  return churchStructureData.main
}

// Structure data for the StructureTree component (simplified for display)
export const structureTreeData = churchStructureData.dioceses.map((diocese) => ({
  id: diocese.id,
  name: diocese.name,
  nameEnglish: diocese.nameEnglish,
  subcities: diocese.subcities.map((subcity) => ({
    id: subcity.id,
    name: subcity.name,
    nameEnglish: subcity.nameEnglish,
    churches: subcity.churches.map((church) => ({
      id: church.id,
      name: church.name,
      nameEnglish: church.nameEnglish,
    })),
  })),
}))
