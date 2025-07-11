// Sample data structure for Ethiopian Orthodox Church Sunday School hierarchy

export const mainChurchData = {
  dioceses: [
    {
      id: "addis-ababa",
      name: "Addis Ababa",
      nameAmharic: "አዲስ አበባ",
      students: 15000,
      teachers: 450,
      area: "Addis Ababa Metropolitan",
      description: "Capital diocese with the largest Sunday school network",
      
    },
    {
      id: "gondar",
      name: "Gondar",
      nameAmharic: "ጎንደር",
      students: 8500,
      teachers: 280,
      area: "Amhara Region",
      description: "Historic diocese with rich Orthodox tradition",
    },
    {
      id: "mekelle",
      name: "Mekelle",
      nameAmharic: "መቀሌ",
      students: 6200,
      teachers: 195,
      area: "Tigray Region",
      description: "Northern diocese serving Tigray communities",
    },
  ],
  stats: {
    dioceses: 15,
    subcities: 85,
    churches: 1250,
    students: 125000,
    teachers: 3800,
    programs: 25,
  },
  news: [
    {
      id: "1",
      title: "Annual Sunday School Teachers Conference 2024",
      titleAmharic: "የ2024 ዓመታዊ የሰንበት ት/ቤት መምህራን ጉባኤ",
            imageUrl: "/images/news1.jpg" ,
      summary:
        "National conference bringing together Sunday school teachers from all dioceses to share best practices and spiritual guidance.",
      date: "2024-01-20",
      category: "Education",
    },
    {
      id: "2",
      title: "Youth Bible Competition Results Announced",
      titleAmharic: "የወጣቶች የመጽሐፍ ቅዱስ ውድድር ውጤት ታወቀ",
       imageUrl: "/images/news1.jpg" ,
      summary:
        "Winners of the national youth Bible knowledge competition representing different dioceses have been announced.",
      date: "2024-01-15",
      category: "Youth Events",
    },
    {
      id: "3",
      title: "New Sunday School Curriculum Launch",
      titleAmharic: "አዲስ የሰንበት ት/ቤት ሥርዓተ ትምህርት ጅምር",
       imageUrl: "/images/news1.jpg" ,
      summary:
        "Enhanced curriculum focusing on Orthodox theology, Ethiopian church history, and moral education launched nationwide.",
      date: "2024-01-10",
      category: "Curriculum",
    },
  ],
  info: {
    history:
      "The Ethiopian Orthodox Tewahedo Church Sunday School Unity was established to coordinate and strengthen Sunday school education across all dioceses. Our rich tradition of religious education dates back centuries, rooted in the ancient monasteries and churches of Ethiopia.",
    vision:
      "To nurture spiritually grounded, morally upright, and academically excellent Orthodox Christian youth who will serve God, church, and country with dedication.",
    mission:
      "To provide comprehensive Orthodox Christian education through coordinated Sunday school programs, fostering spiritual growth, moral development, and cultural preservation among Ethiopian Orthodox youth.",
    values: [
      "Orthodox Faith",
      "Spiritual Growth",
      "Moral Excellence",
      "Cultural Heritage",
      "Unity in Diversity",
      "Service to God",
      "Community Building",
      "Educational Excellence",
    ],
    about:
      "The Ethiopian Orthodox Tewahedo Church Sunday School Unity serves as the coordinating body for Sunday school education across all dioceses, subcities, and individual churches. We are committed to preserving our Orthodox faith while preparing young minds for the challenges of modern life.",
    programs: [
      "Biblical Studies",
      "Orthodox Theology",
      "Church History",
      "Liturgical Music",
      "Moral Education",
      "Cultural Studies",
      "Youth Leadership",
      "Community Service",
      "Spiritual Counseling",
      "Teacher Training",
    ],
  },
  contact: {
    phone: "+251-11-155-5555",
    email: "info@eotc-sundayschool.org.et",
    serviceHours: "Sunday: 9:00 AM - 12:00 PM, Weekdays: 2:00 PM - 5:00 PM",
    address: "Ethiopian Orthodox Tewahedo Church Headquarters, Addis Ababa, Ethiopia",
  },
  location: {
    latitude: 9.032,
    longitude: 38.7469,
    name: "Ethiopian Orthodox Tewahedo Church - Sunday School Unity Headquarters",
  },
}

export function getDioceseData(dioceseId: string) {
  const dioceseDataMap: Record<string, any> = {
    "addis-ababa": {
      name: "Addis Ababa",
      nameAmharic: "አዲስ አበባ",
      subcities: [
        {
          id: "arada",
          name: "Arada",
          nameAmharic: "አራዳ",
          students: 2800,
          teachers: 85,
          area: "Central Addis Ababa",
          description: "Historic subcity with traditional Orthodox churches",
        },
        {
          id: "kirkos",
          name: "Kirkos",
          nameAmharic: "ቂርቆስ",
          students: 3200,
          teachers: 95,
          area: "Commercial District",
          description: "Bustling commercial area with diverse congregation",
        },
        {
          id: "bole",
          name: "Bole",
          nameAmharic: "ቦሌ",
          students: 2500,
          teachers: 75,
          area: "Modern Addis Ababa",
          description: "Modern subcity serving international community",
        },
      ],
      stats: {
        subcities: 10,
        churches: 125,
        students: 15000,
        teachers: 450,
        programs: 12,
      },
      news: [
        {
          id: "1",
          title: "Addis Ababa Diocese Youth Festival 2024",
          titleAmharic: "የአዲስ አበባ ሀገረ ስብከት የወጣቶች በዓል 2024",
          summary:
            "Annual youth festival celebrating Orthodox culture, music, and spiritual growth across all subcities.",
          date: "2024-01-18",
          category: "Youth Events",
        },
      ],
      info: {
        history:
          "The Addis Ababa Diocese has been the spiritual center of Ethiopian Orthodoxy since the founding of the capital. Our Sunday schools have educated generations of faithful Orthodox Christians.",
        vision: "To be the leading diocese in Orthodox Christian education and youth development in Ethiopia.",
        mission:
          "To provide excellent Sunday school education while preserving Orthodox traditions and fostering spiritual growth among urban youth.",
        values: ["Urban Ministry", "Cultural Preservation", "Youth Empowerment", "Spiritual Excellence"],
        about:
          "Addis Ababa Diocese Sunday School Unity coordinates Sunday school activities across the capital, serving diverse communities with Orthodox Christian education.",
        programs: [
          "Urban Youth Ministry",
          "Cultural Heritage Programs",
          "Interfaith Dialogue",
          "Community Outreach",
          "Leadership Development",
          "Music and Arts Ministry",
        ],
      },
      contact: {
        phone: "+251-11-111-2222",
        email: "info@addisababa-diocese.org.et",
        serviceHours: "Sunday: 9:00 AM - 12:00 PM, Wednesday: 3:00 PM - 6:00 PM",
        address: "Addis Ababa Diocese Office, Addis Ababa, Ethiopia",
      },
      location: {
        latitude: 9.032,
        longitude: 38.7469,
        name: "Addis Ababa Diocese",
      },
    },
  }

  return dioceseDataMap[dioceseId]
}

export function getSubcityData(dioceseId: string, subcityId: string) {
  const subcityDataMap: Record<string, any> = {
    arada: {
      name: "Arada",
      nameAmharic: "አራዳ",
      dioceseName: "Addis Ababa",
      churches: [
        {
          id: "holy-trinity",
          name: "Holy Trinity Cathedral",
          nameAmharic: "ቅድስት ሥላሴ ካቴድራል",
          students: 450,
          teachers: 15,
          description: "Historic cathedral with the oldest Sunday school program",
        },
        {
          id: "st-george",
          name: "St. George Church",
          nameAmharic: "ቅዱስ ጊዮርጊስ ቤተክርስቲያን",
          students: 380,
          teachers: 12,
          description: "Traditional church serving the local community",
        },
        {
          id: "st-mary",
          name: "St. Mary Church",
          nameAmharic: "ቅድስት ማርያም ቤተክርስቲያን",
          students: 320,
          teachers: 10,
          description: "Community church with strong youth programs",
        },
      ],
      stats: {
        churches: 8,
        students: 2800,
        teachers: 85,
        programs: 8,
      },
      news: [
        {
          id: "1",
          title: "Arada Subcity Sunday School Art Exhibition",
          titleAmharic: "የአራዳ ክፍለ ከተማ ሰንበት ት/ቤት የሥነ ጥበብ ኤግዚቢሽን",
          summary: "Students showcase religious art and cultural heritage through paintings and crafts.",
          date: "2024-01-12",
          category: "Arts & Culture",
        },
      ],
      info: {
        history:
          "Arada subcity houses some of the oldest Orthodox churches in Addis Ababa, with Sunday school traditions spanning over a century.",
        vision: "To preserve Orthodox heritage while nurturing modern Christian youth in the heart of the capital.",
        mission: "To provide quality Orthodox education that bridges traditional faith with contemporary urban life.",
        values: ["Heritage Preservation", "Urban Ministry", "Youth Development", "Community Service"],
        about: "Arada Subcity Sunday School Unity coordinates eight churches in the historic center of Addis Ababa.",
        programs: [
          "Heritage Education",
          "Urban Youth Ministry",
          "Cultural Arts",
          "Community Service",
          "Spiritual Counseling",
          "Music Ministry",
        ],
      },
      contact: {
        phone: "+251-11-333-4444",
        email: "info@arada-sundayschool.org.et",
        serviceHours: "Sunday: 9:00 AM - 12:00 PM, Saturday: 2:00 PM - 5:00 PM",
        address: "Arada Subcity Sunday School Coordination Office, Addis Ababa",
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

export function getChurchData(dioceseId: string, subcityId: string, churchId: string) {
  const churchDataMap: Record<string, any> = {
    "holy-trinity": {
      name: "Holy Trinity Cathedral",
      nameAmharic: "ቅድስት ሥላሴ ካቴድራል",
      dioceseName: "Addis Ababa",
      subcityName: "Arada",
      stats: {
        students: 450,
        teachers: 15,
        programs: 6,
      },
      news: [
        {
          id: "1",
          title: "Holy Trinity Sunday School Graduation Ceremony",
          titleAmharic: "የቅድስት ሥላሴ ሰንበት ት/ቤት የምረቃ ሥነ ሥርዓት",
          summary:
            "Annual graduation ceremony celebrating students who completed their Orthodox Christian education program.",
          date: "2024-01-08",
          category: "Graduation",
        },
      ],
      info: {
        history:
          "Holy Trinity Cathedral Sunday School was established in 1955 and has been a cornerstone of Orthodox Christian education in Ethiopia.",
        vision:
          "To be a model Sunday school that produces spiritually mature and academically excellent Orthodox Christian youth.",
        mission:
          "To provide comprehensive Orthodox Christian education that nurtures faith, character, and service to God and community.",
        values: ["Spiritual Excellence", "Academic Achievement", "Service to Others", "Orthodox Tradition"],
        about:
          "Holy Trinity Cathedral Sunday School is the flagship program of Orthodox Christian education in Ethiopia, serving as a model for other churches.",
        programs: [
          "Biblical Studies",
          "Orthodox Theology",
          "Liturgical Music",
          "Youth Leadership",
          "Community Service",
          "Spiritual Mentorship",
        ],
      },
      contact: {
        phone: "+251-11-555-6666",
        email: "sundayschool@holytrinitycathedral.org.et",
        serviceHours: "Sunday: 9:00 AM - 12:00 PM",
        address: "Holy Trinity Cathedral, Arada, Addis Ababa, Ethiopia",
      },
      location: {
        latitude: 9.038,
        longitude: 38.759,
        name: "Holy Trinity Cathedral",
      },
    },
  }

  return churchDataMap[churchId]
}
