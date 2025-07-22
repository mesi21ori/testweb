
import { BookOpen, Users, Calendar } from "lucide-react"
import type React from "react"

import { Eye, Gem, Target } from "lucide-react"
import { ReactNode } from "react"

export const mainCityData = {
  cities: [
    {
      id: "addis-ababa",
      name: "Addis Ababa",
      nameAmharic: "አዲስ አበባ",
      population: 3500000,
      area: "527 km²",
      description: "Capital city and largest urban center of Ethiopia",
    },
    {
      id: "dire-dawa",
      name: "Dire Dawa",
      nameAmharic: "ድሬዳዋ",
      population: 450000,
      area: "1,213 km²",
      description: "Second largest city and important commercial center",
    },
    {
      id: "mekelle",
      name: "Mekelle",
      nameAmharic: "መቀሌ",
      population: 500000,
      area: "30 km²",
      description: "Capital of Tigray region",
    },
  ],
  stats: {
    cities: 3,
    subcities: 25,
    weredas: 150,
    population: 120000000,
  },
  news: [
    {
      id: "1",
      title: "New Infrastructure Development Project Launched",
      titleAmharic: "አዲስ የመሠረተ ልማት ፕሮጀክት ተጀመረ",
      summary: "Major infrastructure development initiative to improve urban connectivity and services.",
      date: "2024-01-15",
      category: "Development",
    },
    {
      id: "2",
      title: "Digital Government Services Expansion",
      titleAmharic: "የዲጂታል መንግስት አገልግሎት መስፋፋት",
      summary: "New online services launched to improve citizen access to government services.",
      date: "2024-01-10",
      category: "Technology",
    },
  ],
  info: {
    history:
      "Ethiopia, officially known as the Federal Democratic Republic of Ethiopia, is a landlocked country in the Horn of Africa. It is one of the oldest nations in the world with a rich history spanning thousands of years.",
    vision: "To become a middle-income country by 2025 through sustainable development and good governance.",
    mission:
      "To serve the Ethiopian people through effective governance, sustainable development, and the promotion of unity in diversity.",
    values: ["Unity", "Democracy", "Development", "Justice", "Equality", "Transparency"],
    about:
      "Ethiopia is a federal parliamentary republic comprising ethnically based regional states. The country has a rich cultural heritage and is known as the birthplace of coffee and humanity.",
    services: [
      "Civil Registration",
      "Business Permits",
      "Land Administration",
      "Tax Services",
      "Health Services",
      "Education Services",
    ],
  },
  contact: {
    phone: "+251-11-123-4567",
    email: "info@ethiopia.gov.et",
    workingHours: "Monday - Friday: 8:00 AM - 5:00 PM",
    address: "Addis Ababa, Ethiopia",
  },
  location: {
    latitude: 9.032,
    longitude: 38.7469,
    name: "Ethiopia",
  },
}

export function getCityData(cityId: string) {
  const cityDataMap: Record<string, any> = {
    "addis-ababa": {
      name: "Addis Ababa",
      nameAmharic: "አዲስ አበባ",
      subcities: [
        {
          id: "arada",
          name: "Arada",
          nameAmharic: "አራዳ",
          population: 225000,
          area: "9.6 km²",
          description: "Central subcity with historical significance",
        },
        {
          id: "kirkos",
          name: "Kirkos",
          nameAmharic: "ቂርቆስ",
          population: 230000,
          area: "14.6 km²",
          description: "Commercial and residential subcity",
        },
      ],
      stats: {
        subcities: 10,
        weredas: 116,
        population: 3500000,
        households: 850000,
      },
      news: [
        {
          id: "1",
          title: "Addis Ababa Light Rail Expansion",
          titleAmharic: "የአዲስ አበባ ቀላል ባቡር መስፋፋት",
          summary: "New light rail lines to connect more areas of the city.",
          date: "2024-01-12",
          category: "Transportation",
        },
      ],
      info: {
        history:
          "Addis Ababa was founded in 1886 by Emperor Menelik II and has served as the capital of Ethiopia since then.",
        vision: "To be a world-class African capital city that provides quality services to its residents.",
        mission: "To provide efficient municipal services and create a conducive environment for economic growth.",
        values: ["Service Excellence", "Innovation", "Sustainability", "Inclusivity"],
        about:
          "Addis Ababa is the capital and largest city of Ethiopia, serving as the political and commercial heart of the country.",
        services: [
          "Urban Planning",
          "Waste Management",
          "Water Supply",
          "Public Transportation",
          "Housing Development",
        ],
      },
      contact: {
        phone: "+251-11-111-1111",
        email: "info@addisababa.gov.et",
        workingHours: "Monday - Friday: 8:00 AM - 5:00 PM",
        address: "Addis Ababa City Administration, Addis Ababa",
      },
      location: {
        latitude: 9.032,
        longitude: 38.7469,
        name: "Addis Ababa",
      },
    },
  }

  return cityDataMap[cityId]
}

export function getSubcityData(cityId: string, subcityId: string) {
  const subcityDataMap: Record<string, any> = {
    arada: {
      name: "Arada",
      nameAmharic: "አራዳ",
      cityName: "Addis Ababa",
      weredas: [
        {
          id: "wereda-01",
          name: "Wereda 01",
          nameAmharic: "ወረዳ 01",
          population: 45000,
          area: "2.1 km²",
          description: "Central business district area",
        },
        {
          id: "wereda-02",
          name: "Wereda 02",
          nameAmharic: "ወረዳ 02",
          population: 38000,
          area: "1.8 km²",
          description: "Residential and commercial mixed area",
        },
      ],
      stats: {
        weredas: 5,
        population: 225000,
        households: 55000,
      },
      news: [
        {
          id: "1",
          title: "Arada Market Renovation Project",
          titleAmharic: "የአራዳ ገበያ ማሻሻያ ፕሮጀክት",
          summary: "Major renovation of the traditional market to improve facilities.",
          date: "2024-01-08",
          category: "Infrastructure",
        },
      ],
      info: {
        history: "Arada is one of the oldest subcities in Addis Ababa with significant historical landmarks.",
        vision: "To preserve historical heritage while promoting modern development.",
        mission: "To provide quality services while maintaining the cultural identity of the area.",
        values: ["Heritage Preservation", "Community Development", "Cultural Diversity"],
        about: "Arada subcity is known for its historical significance and vibrant commercial activities.",
        services: ["Heritage Conservation", "Market Management", "Community Services", "Cultural Programs"],
      },
      contact: {
        phone: "+251-11-222-2222",
        email: "info@arada.addisababa.gov.et",
        workingHours: "Monday - Friday: 8:00 AM - 5:00 PM",
        address: "Arada Subcity Administration, Addis Ababa",
      },
      location: {
        latitude: 9.037,
        longitude: 38.7578,
        name: "Arada Subcity",
      },
    },
  }

  return subcityDataMap[subcityId]
}

export function getWeredaData(cityId: string, subcityId: string, weredaId: string) {
  const weredaDataMap: Record<string, any> = {
    "wereda-01": {
      name: "Wereda 01",
      nameAmharic: "ወረዳ 01",
      cityName: "Addis Ababa",
      subcityName: "Arada",
      stats: {
        population: 45000,
        households: 11000,
      },
      news: [
        {
          id: "1",
          title: "Community Health Center Opening",
          titleAmharic: "የማህበረሰብ ጤና ማዕከል መክፈት",
          summary: "New health center to serve the local community.",
          date: "2024-01-05",
          category: "Health",
        },
      ],
      info: {
        history: "Wereda 01 has been the commercial heart of Arada subcity for decades.",
        vision: "To be a model wereda in service delivery and community development.",
        mission: "To provide accessible and quality services to all residents.",
        values: ["Community Service", "Accessibility", "Quality", "Transparency"],
        about: "Wereda 01 is the central business district of Arada subcity with diverse commercial activities.",
        services: ["Health Services", "Education Support", "Business Licensing", "Community Development"],
      },
      contact: {
        phone: "+251-11-333-3333",
        email: "info@wereda01.arada.addisababa.gov.et",
        workingHours: "Monday - Friday: 8:00 AM - 5:00 PM",
        address: "Wereda 01 Administration Office, Arada, Addis Ababa",
      },
      location: {
        latitude: 9.038,
        longitude: 38.759,
        name: "Wereda 01, Arada",
      },
    },
  }

  return weredaDataMap[weredaId]
}


export const NEWS_ARTICLES = [
  {
    title: "ዓመታዊ የእሁድ ትምህርት ቤት ስብሰባ ተገለጸ",
    description: "ኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን ዓመታዊውን የእሁድ ትምህርት ቤት አንድነት ስብሰባ �ወጋለች። ስብሰባው በመንፈሳዊ እድ�ሳ እና የማህበረሰብ ግንባታ ላይ ያተኮረ ሲሆን ለሁሉም ሲኖዶስ ምዝገባ ተከፍቷል።",
    category: "ፕሮግራሞች",
    highlights: ["ዋና አዋጪ ተናጋሪዎች �ረጋገጡ", "ቅድመ ምዝገባ ተከፍቷል", "በመንፈሳዊ እድገት ላይ የስልጠና ክፍሎች"],
    bgImageUrl: "/placeholder.svg?height=400&width=600",
    liveUrl: "#",
    sourceUrl: "#",
    status: "አዲስ",
  },
  {
    title: "ለጨዋማ ተማሪዎች አዲስ የትምህርት ሥርዓት ተጀመረ",
    description: "ለጨዋማ እሁድ ትምህርት ቤት ተማሪዎች (7-12 ዓመት) የተዘጋጀ አዲስ የትምህርት ሥርዓት ተጀምሯል። �ና �ና የሃይማኖት ጽንሰ ሀሳቦችን በተግባራዊ መንገድ ለማስተማር የተዘጋጀ ነው።",
    category: "ትምህርት",
    highlights: ["ተግባራዊ የሆኑ ክፍሎች", "ለመምህራን የስልጠና ክፍሎች", "በመሠረታዊ የሃይማኖት �ሥጋ ላይ ትኩረት"],
    bgImageUrl: "/placeholder.svg?height=400&width=600",
    liveUrl: "#",
    sourceUrl: "#",
    status: "የታተመ",
  },
  {
    title: "የማህበረሰብ አገልግሎት ፕሮግራም ተሳካ",
    description: "'እጆች ፍቅር' የተሰኘው የማህበረሰብ አገልግሎት ፕሮግራም በተለያዩ ክፍለ ከተሞች ለ500 ቤተሰቦች �ስካሚ እና ድጋፍ ማድረጉን ቤተክርስቲያኑ ለማህበራዊ ደህንነት ያለውን ቁርጠኝነት አሳይቷል።",
    category: "ማህበረሰብ",
    highlights: ["500+ ቤተሰቦች ተረኩ", "የበጎ አድራጎት ጥረቶች", "የወደፊት ፕሮግራሞች ተዘጋጅተዋል"],
    bgImageUrl: "/placeholder.svg?height=400&width=600",
    liveUrl: "#",
    sourceUrl: "#",
    status: "የታተመ",
  },
  {
    title: "የወጣቶች አመራር ስብሰባ ተጠናቀቀ",
    description: "ከ15 ሲኖዶሶች የተውጣጡ ወጣት አመራሮች በሃይማኖት፣ በአመራር እና በዘመናዊ ፈተናዎች �ይን በማድረግ የመጀመሪያው �ዜጣዊ ወጣት አመራር ስብሰባ ተጠናቋል።",
    category: "ወጣቶች",
    highlights: ["የአመራር ስልጠና", "በሲኖዶሶች መካከል የጋራ ጥረት", "የወጣቶች ፕሮግራሞች"],
    bgImageUrl: "/placeholder.svg?height=400&width=600",
    liveUrl: "#",
    sourceUrl: "#",
    status: "የታተመ",
  },
  {
    title: "የዲጂታል ማህደር ፕሮጀክት በመንገድ ላይ",
    description: "የእሁድ ትምህርት ቤት ታሪካዊ የሆኑ ሰነዶችን በዲጂታል መልክ ለማስቀመጥ አዲስ ፕሮጀክት ተጀምሯል። ይህ ፕሮጀክት ባለፉት ዘመናት የተገኘውን ታሪካዊ ቅርስ ለወደፊት ትውልድ ተደራሽ ለማድረግ ያለመ ነው።",
    category: "ቅርስ",
    highlights: ["የቅርስ ጥበቃ", "ለተመራማሪዎች ተደራሽነት", "የበጎ አድራጎት እድሎች"],
    bgImageUrl: "/placeholder.svg?height=400&width=600",
    liveUrl: "#",
    sourceUrl: "#",
    status: "በመንገድ ላይ",
  },
  {
    title: "አዲስ ቤተክርስቲያን በቦሌ ክፍለ ከተማ ተመርቋል",
    description: "አዲስ የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን በቦሌ ክፍለ ከተማ ተመርቋል። ይህ ቤተክርስቲያን �ናውን ቤተክርስቲያን አቅም እና ቦታ በማስፋፋት ረገድ አስፈላጊ እርምጃ ነው። ይህ ቤተክርስቲያን �ናውን ቤተክርስቲያን አቅም እና ቦታ በማስፋፋት ረገድ አስፈላጊ እርምጃ ነው። ይህ ቤተክርስቲያን �ናውን ቤተክርስቲያን አቅም እና ቦታ በማስፋፋት ረገድ አስፈላጊ እርምጃ ነው። ይህ ቤተክርስቲያን �ናውን ቤተክርስቲያን አቅም እና ቦታ በማስፋፋት ረገድ አስፈላጊ እርምጃ ነው። ይህ ቤተክርስቲያን �ናውን ቤተክርስቲያን አቅም እና ቦታ በማስፋፋት ረገድ አስፈላጊ እርምጃ ነው። ይህ ቤተክርስቲያን �ናውን ቤተክርስቲያን አቅም እና ቦታ በማስፋፋት ረገድ አስፈላጊ እርምጃ ነው። ይህ ቤተክርስቲያን �ናውን ቤተክርስቲያን አቅም እና ቦታ በማስፋፋት ረገድ አስፈላጊ እርምጃ ነው። ይህ ቤተክርስቲያን �ናውን ቤተክርስቲያን አቅም እና ቦታ በማስፋፋት ረገድ አስፈላጊ እርምጃ ነው። ይህ ቤተክርስቲያን �ናውን ቤተክርስቲያን አቅም እና ቦታ በማስፋፋት ረገድ አስፈላጊ እርምጃ ነው።",
    category: "ማስፋፋት",
    highlights: ["አቅም ጨመረ", "የማህበረሰብ ማዕከል", "የበረከት ስነ ስርዓት"],
    bgImageUrl: "/placeholder.svg?height=400&width=600",
    liveUrl: "#",
    sourceUrl: "#",
    status: "አዲስ",
  },
]


export interface MissionVisionValue {
  title: string
  description: string
  icon?: React.ElementType // For Lucide icons
}

export const MISSION_VISION_VALUES: MissionVisionValue[] = [
  {
    title: "የእኛ ተልእኮ",
    description:
      "በፍጥነት በሚቀየር ዓለም ውስጥ እድገትን የሚያስተባብሩ እና ዘላቂ እድገትን የሚያጎለብቱ ፈጠራዊ መፍትሄዎችን በመስጠት ግለሰቦችን እና ድርጅቶችን ኃይለኛ ማድረግ።",
    icon: Target // ምሳሌ አዶ፣ በአካል አካፋይ ውስጥ ትክክለኛ ማስገባት ይከናወናል
  },
  {
    title: "የእኛ ራእይ",
    description:
      "አወንታዊ ለውጥ የሚያምጣ አስተባባሪ ሆነን ፣ ከፍተኛ እድሎችን ለመፍጠር ቴክኖሎጂ እና የሰው ልጅ አቅም የሚገናኝበትን የወደፊቱን ራእይ ማሳየት።",
   icon: Eye // ምሳሌ አዶ
  },
  {
    title: "�ላቂ እሴቶቻችን",
    description:
      "አገልግሎታችን የሚመራው በእሴቶቻችን ነው። በጥራት የተሞላ ውጤት ለማምጣት የሚረዱን እሴቶቻችን፦ ቅንነት፣ ፈጠራ፣ ትብብር እና የላቀ አፈጻጸም።",
   icon: Gem // ምሳሌ አዶ
  },
]

export const sundaySchoolContent = {
  title: "አብረን ያለፍነው ጉዞ",
  paragraphs: [
    "የእኛ እሁድ ትምህርት ቤት በማህበረሰባችን ውስጥ መንፈሳዊ እድገትን እና ግንዛቤን ለማሳደግ የተወጀ ነው። ለሁሉም እድሜ �ላላ ሰዎች እምነትን ለማጥናት፣ የመጽሐፍ ቅዱስ መርሆዎችን ለመማር እና ዘላቂ ግንኙነቶችን ለመገንባት ምቹ አካባቢ እናቀርባለን።",
    "በማራኪ ትምህርቶች፣ ተግባራዊ �ለገፎች እና በተግባራዊ ተግባር ላይ በሚደረገው ትኩረት፣ ሰዎች በእምነታቸው ጉዞ ጠንካራ መሠረት እንዲኖራቸው እንሰራለን። ፕሮግራሞቻችን ከትናንሽ ልጆች እስከ አዋቂዎች ድረስ ለተለያዩ የእድሜ ክልሎች ተዘጋጅተው ለሁሉም ተገቢ እና ማጎልበቻ ያለው ተሞክሮ እንዲኖራቸው ይረዳሉ።",
    "በጋራ መማር እና በድጋፍ የተሞላ መምህርነት ኃይል እናምናለን። የሚደገፉ መምህራን እና በፈቃደኝነት የሚሠሩ አጋሮቻችን ጥያቄዎች የሚበረታቱበት እና እምነት የሚያድግበት �ሚ እና መነሳሳት የሚሰጥ አካባቢ ለመፍጠር ቁርጠኞች ናቸው።",
  ],
  quote:
    "ራእያችን ሰዎች የእግዚአብሔርን ቃል የመዘናጋት ፍቅር እንዲያድግ እና እምነታቸውን በምስጢራዊ መንገዶች እንዲኖሩ ማበረታታት ነው።",
}

export const churchImageUrl = "/placeholder.svg?height=500&width=500"


interface Program {
  title: string
  description: string
  participants: string
  schedule: string
}

export const PROGRAMS= [
  {
    title: "የመጽሐፍ ቅዱስ ጥናት",
    description: "ጥልቅ የመጽሐፍ ቅዱስ ትምህርቶችን እና ትንታኔዎችን ያግኙ።",
   
    participants: "ለሁሉም ዕድሜ",
    schedule: "ሰኞ እና ሐሙስ ምሽት",
  },
  {
    title: "የጸሎት እና የአምልኮ ጊዜ",
    description: "በጋራ ጸሎት እና አምልኮ እግዚአብሔርን እናክብር።",
   
    participants: "ሁሉም አማኞች",
    schedule: "እሁድ ጥዋት",
  },
  {
    title: "የወጣቶች ህብረት",
    description: "ወጣቶች እምነታቸውን እንዲያጠናክሩ እና እንዲያድጉ የሚረዳ ፕሮግራም።",
    participants: "ከ15-25 ዓመት",
    schedule: "ቅዳሜ ከሰዓት",
  },
  {
    title: "የልጆች ትምህርት",
    description: "ልጆች በመጽሐፍ ቅዱስ ታሪኮች እና መዝሙሮች እንዲማሩ።",
    participants: "ከ5-12 ዓመት",
    schedule: "እሁድ ጥዋት",
  },
  {
    title: "የቤተሰብ ምክር",
    description: "በቤተሰብ ህይወት ውስጥ ለሚነሱ ጉዳዮች መንፈሳዊ ምክር።",
    participants: "ለቤተሰቦች",
    schedule: "በቀጠሮ",
  },
  {
    title: "የአገልግሎት ስልጠና",
    description: "በቤተክርስቲያን ውስጥ ለማገልገል የሚያስችል ስልጠና።",
    participants: "አገልጋዮች",
    schedule: "አርብ ምሽት",
  },
]

export const contactInfo = {
  phone: "+251 912 345 678",
  email: "info@sundayschool.org",
  serviceHours: "ሰኞ - አርብ: 9:00 AM - 5:00 PM",
  address: "አዲስ አበባ, ኢትዮጵያ",
}


import type { Event } from "@/types/event"

export async function getEvents(): Promise<Event[]> {
  // የኔትወርክ መዘግየትን ለማስመሰል
  await new Promise((resolve) => setTimeout(resolve, 500))

  const now = new Date()
  const oneDay = 24 * 60 * 60 * 1000 // በአንድ ቀን ውስጥ ያሉ ሚሊሴኮንዶች

  return [
    {
      id: "1",
      title: "ዓመታዊ የወጣቶች ስብሰባ",
      description: "ለሁሉም ወጣት አባላት የሃይማኖታዊ ስብሰባ፣ እምነት እና የማህበረሰብ ግንባታ ላይ ያተኮረ።",
      imageUrl: "/placeholder.svg?height=200&width=300",
      place: "ማውንቴን ቪው ካምፕ",
      startTime: new Date(now.getTime() + 7 * oneDay), // ከዛሬ በኋላ 7 ቀናት
      endTime: new Date(now.getTime() + 9 * oneDay), // ከዛሬ በኋላ 9 ቀናት
      category: "ወጣቶች",
    },
    {
      id: "2",
      title: "የማህበረሰብ አገልግሎት ፕሮግራም",
      description: "በአካባቢያችን ማህበረሰብ አገልግሎት ይቀላቀሉን። በፈቃደኝነት የሚሰሩ የሚያስፈልጋሉ!",
      imageUrl: "/placeholder.svg?height=200&width=300",
      place: "የከተማ ፓርክ ፓቪሊዮን",
      startTime: new Date(now.getTime() + 14 * oneDay), // ከዛሬ በኋላ 14 ቀናት
      endTime: new Date(now.getTime() + 14 * oneDay + 2 * 60 * 60 * 1000), // 2 ሰዓታት በኋላ
      category: "አገልግሎት",
    },
    {
      id: "3",
      title: "የመጽሐፍ ቅዱስ ጥናት ተከታታይ፡ የዮሐንስ ወንጌል",
      description: "በዮሐንስ ወንጌል ላይ ጥልቅ ጥናት። ሁሉም እንዲገኝ ተጋብዟል።",
      imageUrl: "/placeholder.svg?height=200&width=300",
      place: "የቤተክርስቲያን ዋና አዳራሽ",
      startTime: new Date(now.getTime() + 2 * oneDay), // ከዛሬ በኋላ 2 ቀናት
      endTime: new Date(now.getTime() + 2 * oneDay + 1.5 * 60 * 60 * 1000),
      category: "ትምህርት",
    },
    {
      id: "4",
      title: "የአባት ጉብኝት እና በረከት",
      description: "ልዑሉ ለልዩ የበረከት አገልግሎት በገዛ ቤተክርስቲያናችን ይገኛሉ።",
      imageUrl: "/placeholder.svg?height=200&width=300",
      place: "ቅድስት ማርያም ቤተክርስቲያን",
      startTime: new Date(now.getTime() - 5 * oneDay), // ከዛሬ በፊት 5 ቀናት
      endTime: new Date(now.getTime() - 5 * oneDay + 3 * 60 * 60 * 1000),
      category: "ሊተርጂ",
    },
    {
      id: "5",
      title: "ዓመታዊ ገንዘብ ማሰባሰብ ጋላ",
      description: "የቤተክርስቲያናችንን ተቋማዊ እንቅስቃሴዎች ይደግፉ። ድንኳን፣ ሽያጭ እና የህብረት ጊዜ።",
      imageUrl: "/placeholder.svg?height=200&width=300",
      place: "ግራንድ ቦልሩም ሆቴል",
      startTime: new Date(now.getFullYear(), now.getMonth() + 1, 10, 18, 0), // በሚቀጥለው ወር
      endTime: new Date(now.getFullYear(), now.getMonth() + 1, 10, 22, 0),
      category: "ገንዘብ ማሰባሰብ",
    },
    {
      id: "6",
      title: "የወጣቶች የስፖርት ቀን",
      description: "ለሁሉም ወጣቶች አስደሳች ጨዋታዎች። የስፖርት መሳሪያዎችዎን ይዘው ይምጡ!",
      imageUrl: "/placeholder.svg?height=200&width=300",
      place: "አካባቢያዊ የስፖርት ኮምፕሌክስ",
      startTime: new Date(now.getTime() + 21 * oneDay), // ከዛሬ በኋላ 3 ሳምንታት
      endTime: new Date(now.getTime() + 21 * oneDay + 4 * 60 * 60 * 1000),
      category: "ወጣቶች",
    },
    {
      id: "7",
      title: "የመዝሙር ክፍል ልምምድ",
      description: "ለቤተክርስቲያን የመዝሙር ክፍል ሳምንታዊ ልምምድ። ለቤተክርስቲያን የመዝሙር ክፍል ሳምንታዊ ልምምድ።ለቤተክርስቲያን የመዝሙር ክፍል ሳምንታዊ ልምምድ።ለቤተክርስቲያን የመዝሙር ክፍል ሳምንታዊ ልምምድ።ለቤተክርስቲያን የመዝሙር ክፍል ሳምንታዊ ልምምድ።ለቤተክርስቲያን የመዝሙር ክፍል ሳምንታዊ ልምምድ።ለቤተክርስቲያን የመዝሙር ክፍል ሳምንታዊ ልምምድ።ለቤተክርስቲያን የመዝሙር ክፍል ሳምንታዊ ልምምድ።ለቤተክርስቲያን የመዝሙር ክፍል ሳምንታዊ ልምምድ።ለቤተክርስቲያን የመዝሙር ክፍል ሳምንታዊ ልምምድ።ለቤተክርስቲያን የመዝሙር ክፍል ሳምንታዊ ልምምድ።ለቤተክርስቲያን የመዝሙር ክፍል ሳምንታዊ ልምምድ።ለቤተክርስቲያን የመዝሙር ክፍል ሳምንታዊ ልምምድ።ለቤተክርስቲያን የመዝሙር ክፍል ሳምንታዊ ልምምድ።ለቤተክርስቲያን የመዝሙር ክፍል ሳምንታዊ ልምምድ። አዲስ አባላት ተጋብዘዋል። ለቤተክርስቲያን የመዝሙር ክፍል ሳምንታዊ ልምምድ። አዲስ አባላት ተጋብዘዋል።ለቤተክርስቲያን የመዝሙር ክፍል ሳምንታዊ ልምምድ። አዲስ አባላት ተጋብዘዋል።ለቤተክርስቲያን የመዝሙር ክፍል ሳምንታዊ ልምምድ። አዲስ አባላት ተጋብዘዋል።ለቤተክርስቲያን የመዝሙር ክፍል ሳምንታዊ ልምምድ። አዲስ አባላት ተጋብዘዋል።ለቤተክርስቲያን የመዝሙር ክፍል ሳምንታዊ ልምምድ። አዲስ አባላት ተጋብዘዋል።ለቤተክርስቲያን የመዝሙር ክፍል ሳምንታዊ ልምምድ። አዲስ አባላት ተጋብዘዋል።",
      imageUrl: "/placeholder.svg?height=200&width=300",
      place: "የቤተክርስቲያን የዘፋኝ ክፍል",
      startTime: new Date(now.getTime() + 1 * oneDay), // ነገ
      endTime: new Date(now.getTime() + 1 * oneDay + 1.5 * 60 * 60 * 1000),
      category: "ሙዚቃ",
    },
    {
      id: "8",
      title: "የቅዱስ ጊዮርጊስ በዓል",
      description: "ለቅዱስ ጊዮርጊስ በዓል ልዩ ሊተርጂ እና በዓል አከባበር።",
      imageUrl: "/placeholder.svg?height=200&width=300",
      place: "ቅዱስ ጊዮርጊስ ቤተክርስቲያን",
      startTime: new Date(now.getTime() - 10 * oneDay), // ከዛሬ በፊት 10 ቀናት
      endTime: new Date(now.getTime() - 10 * oneDay + 4 * 60 * 60 * 1000),
      category: "ሊተርጂ",
    },
  ]
}

export const structureData = [
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
          },{
            id: "church6",
            name: "ቅድስት ማርያም ቤተ ክርስቲያን",
            nameEnglish: "St. Mary Church",
          },{
            id: "church7",
            name: "ቅድስት ማርያም ቤተ ክርስቲያን",
            nameEnglish: "St. Mary Church",
          },{
            id: "church8",
            name: "ቅድስት ማርያም ቤተ ክርስቲያን",
            nameEnglish: "St. Mary Church",
          },{
            id: "church9",
            name: "ቅድስት ማርያም ቤተ ክርስቲያን",
            nameEnglish: "St. Mary Church",
          },{
            id: "church10",
            name: "ቅድስት ማርያም ቤተ ክርስቲያን",
            nameEnglish: "St. Mary Church",
          },{
            id: "church11",
            name: "ቅድስት ማርያም ቤተ ክርስቲያን",
            nameEnglish: "St. Mary Church",
          },{
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

export interface PhotoItem {
  id: string // Unique ID for this group of photos
  images: string[] // Array of image URLs for this item
  alt: string // Main alt text for the group/thumbnail
  description: string // Description for this group of photos
}

export interface Category {
  id: string
  name: string // Amharic category name
  nameEnglish: string // English category name
  photoItems: PhotoItem[] // Array of photo groups
}

// Example Data: In a real application, this would be fetched dynamically from a database
export const galleryData: Category[] = [
  {
    id: "events",
    name: "ዝግጅቶች",
    nameEnglish: "Events",
    photoItems: [
      {
        id: "event1",
        images: [
          "/placeholder.svg?height=400&width=600&text=Event 1 Img 1",
          "/placeholder.svg?height=400&width=600&text=Event 1 Img 2",
          "/placeholder.svg?height=400&width=600&text=Event 1 Img 3",
        ],
        alt: "Church gathering during an event",
        description:
          "A vibrant gathering of the faithful during a special church event, including choir performance and a religious procession. This description can be quite long to test the scrolling behavior within the dialog. We need to ensure that no part of this text is ever cut off, regardless of the screen size. This text will wrap and the dialog should expand vertically or become scrollable.",
      },
      {
        id: "event2",
        images: [
          "/placeholder.svg?height=400&width=600&text=Event 2 Img 1",
          "/placeholder.svg?height=400&width=600&text=Event 2 Img 2",
        ],
        alt: "Community service and baptism",
        description: "Church members engaging in community service and a sacred baptism ceremony.",
      },
    ],
  },
  {
    id: "buildings",
    name: "ህንፃዎች",
    nameEnglish: "Buildings",
    photoItems: [
      {
        id: "building1",
        images: [
          "/placeholder.svg?height=400&width=600&text=Building 1 Img 1",
          "/placeholder.svg?height=400&width=600&text=Building 1 Img 2",
        ],
        alt: "Exterior and interior of church",
        description:
          "The majestic exterior and serene interior of a traditional Ethiopian Orthodox church, focusing on the sacred altar.",
      },
      {
        id: "building2",
        images: [
          "/placeholder.svg?height=400&width=600&text=Building 2 Img 1",
          "/placeholder.svg?height=400&width=600&text=Building 2 Img 2",
          "/placeholder.svg?height=400&width=600&text=Building 2 Img 3",
        ],
        alt: "Ancient monastery and architectural details",
        description:
          "An ancient monastery carved into rock, showcasing intricate architectural details and beautiful frescoes.",
      },
    ],
  },
  {
    id: "icons",
    name: "አይኮኖች",
    nameEnglish: "Icons",
    photoItems: [
      {
        id: "icon1",
        images: [
          "/placeholder.svg?height=400&width=600&text=Icon 1 Img 1",
          "/placeholder.svg?height=400&width=600&text=Icon 1 Img 2",
          "/placeholder.svg?height=400&width=600&text=Icon 1 Img 3",
        ],
        alt: "Collection of religious icons",
        description:
          "A collection of beautifully painted religious icons, including Saint George and the Virgin Mary with Jesus.",
      },
    ],
  },
  {
    id: "ceremonies",
    name: "በዓላት",
    nameEnglish: "Ceremonies",
    photoItems: [
      {
        id: "ceremony1",
        images: [
          "/placeholder.svg?height=400&width=600&text=Ceremony 1 Img 1",
          "/placeholder.svg?height=400&width=600&text=Ceremony 1 Img 2",
        ],
        alt: "Timket and Meskel Festivals",
        description: "Photos from vibrant Timket and Meskel religious festivals.",
      },
    ],
  },
  {
    id: "community",
    name: "ማህበረሰብ",
    nameEnglish: "Community",
    photoItems: [
      {
        id: "community1",
        images: [
          "/placeholder.svg?height=400&width=600&text=Community 1 Img 1",
          "/placeholder.svg?height=400&width=600&text=Community 1 Img 2",
        ],
        alt: "Church Community Life",
        description:
          "Images depicting various aspects of church community life, including youth groups and elderly parishioners.",
      },
    ],
  },
  {
    id: "artifacts",
    name: "ቅርሶች",
    nameEnglish: "Artifacts",
    photoItems: [
      {
        id: "artifact1",
        images: [
          "/placeholder.svg?height=400&width=600&text=Artifact 1 Img 1",
          "/placeholder.svg?height=400&width=600&text=Artifact 1 Img 2",
        ],
        alt: "Historical Church Artifacts",
        description: "Ancient crosses and religious manuscripts preserving the church's rich history.",
      },
    ],
  },

    {
    id: "timket",
    name: "ጥምቀት",
    nameEnglish: "Timket",
    photoItems: [
      {
        id: "timket1",
        images: [
          "/placeholder.svg?height=400&width=600&text=Artifact 1 Img 1",
          "/placeholder.svg?height=400&width=600&text=Artifact 1 Img 2",
        ],
        alt: "Historical Church Artifacts",
        description: "Ancient crosses and religious manuscripts preserving the church's rich history.",
      },
    ],
  },
]

export const locationInfo = {
  latitude: 9.0307, // Example latitude for Addis Ababa
  longitude: 38.7489, // Example longitude for Addis Ababa
  name: "የሰንበት ትምህርት ቤት ማዕከል",
  address: "አዲስ አበባ፣ ኢትዮጵያ",
}
