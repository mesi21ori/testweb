// Sample data structure for Ethiopian administrative divisions

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
