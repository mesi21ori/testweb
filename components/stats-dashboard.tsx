import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Church, Users, GraduationCap, BookOpen, MapPin } from "lucide-react"

interface Stats {
  dioceses?: number
  subcities?: number
  churches?: number
  students: number
  teachers?: number
  programs?: number
}

interface StatsDashboardProps {
  stats: Stats
}

export function StatsDashboard({ stats }: StatsDashboardProps) {
  return (
    <section className="space-y-6 m-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.dioceses && (
          <Card className="border-l-8 border-1-yellow-600 ">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Dioceses</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.dioceses}</div>
              <p className="text-xs text-muted-foreground">ሀገረ ስብከቶች</p>
            </CardContent>
          </Card>
        )}

        {stats.subcities && (
          <Card className="border-l-8 border-1-yellow-600">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Subcities</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.subcities}</div>
              <p className="text-xs text-muted-foreground">ክፍለ ከተሞች</p>
            </CardContent>
          </Card>
        )}

        {stats.churches && (
          <Card className="border-l-8 border-1-yellow-600">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Churches</CardTitle>
              <Church className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.churches}</div>
              <p className="text-xs text-muted-foreground">ቤተክርስቲያናት</p>
            </CardContent>
          </Card>
        )}

        <Card className="border-l-8 border-1-yellow-900">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Students</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.students.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">ተማሪዎች</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
