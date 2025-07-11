import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Church, GraduationCap } from "lucide-react"

interface ListItem {
  id: string
  name: string
  nameAmharic: string
  students?: number
  teachers?: number
  area?: string
  description?: string
}

interface HierarchicalListProps {
  level: "main" | "diocese" | "subcity"
  items: ListItem[]
  title: string
  titleAmharic: string
  parentPath?: string
}

export function HierarchicalList({ level, items, title, titleAmharic, parentPath = "" }: HierarchicalListProps) {
  const getItemPath = (itemId: string) => {
    switch (level) {
      case "main":
        return `/diocese/${itemId}`
      case "diocese":
        return `${parentPath}/subcity/${itemId}`
      case "subcity":
        return `${parentPath}/church/${itemId}`
      default:
        return "/"
    }
  }

  return (
    <section className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-xl text-gray-600">{titleAmharic}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Link key={item.id} href={getItemPath(item.id)}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full border-l-4 border-l-yellow-500">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{item.name}</span>
                  <Church className="w-5 h-5 text-yellow-600" />
                </CardTitle>
                <p className="text-sm text-gray-600">{item.nameAmharic}</p>
              </CardHeader>
              <CardContent>
                {item.description && <p className="text-sm text-gray-700 mb-3">{item.description}</p>}
                <div className="flex flex-wrap gap-2">
                  {item.students && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <GraduationCap className="w-3 h-3" />
                      {item.students.toLocaleString()} Students
                    </Badge>
                  )}
                  {item.teachers && (
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {item.teachers} Teachers
                    </Badge>
                  )}
                  {item.area && (
                    <Badge variant="outline" className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {item.area}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
