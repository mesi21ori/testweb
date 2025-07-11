interface HeroSectionProps {
  title: string
  titleAmharic: string
  level: "main" | "diocese" | "subcity" | "church"
}

export function HeroSection({ title, titleAmharic, level }: HeroSectionProps) {
  const getLevelDescription = () => {
    switch (level) {
      case "main":
        return "Ethiopian Orthodox Tewahedo Church - Sunday School Unity Portal"
      case "diocese":
        return "Diocese Sunday School Administration"
      case "subcity":
        return "Subcity Sunday School Coordination"
      case "church":
        return "Church Sunday School Ministry"
      default:
        return "Sunday School Portal"
    }
  }

  return (
    <section className="bg-gradient-to-r from-yellow-600/15  to-white text-black py-16">
      <div className="container mx-auto px-4 text-center">
        {/* <div className="mb-6">
          <span className="text-6xl">✞</span>
        </div> */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl mb-4 opacity-90">{titleAmharic}</p>
        <p className="text-lg md:text-xl opacity-80">{getLevelDescription()}</p>
      </div>
    </section>
  )
}
