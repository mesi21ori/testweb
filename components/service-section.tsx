"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import { PROGRAMS } from "@/lib/data"

interface Program {
  title: string
  description: string
  participants: string
  schedule: string
}

interface ProgramsSectionProps {
  programs?: Program[] // Make programs optional and provide default
}

export function ProgramsSection({ programs = PROGRAMS }: ProgramsSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/15 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-card rounded-full mb-6 shadow-2xl">
            <BookOpen className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-5xl font-bold text-foreground mb-4">የምንሰጣቸው አገልግሎቶች</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>
        {/* Programs Grid / Horizontal Scroll */}
        <div
          className={cn(
            programs.length > 4
              ? "flex flex-nowrap overflow-x-auto space-x-8 pb-4" // Horizontal scroll with spacing and padding for scrollbar
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8", // Original grid layout
          )}
        >
          {programs.map((program, index) => (
            <Card
              key={index}
              className={cn(
                "group bg-card/10 backdrop-blur-lg border border-border hover:bg-card/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer",
                programs.length > 4 && "min-w-[300px]", // Ensure minimum width for cards when scrolling
              )}
            >
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {program.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-center">{program.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{program.participants}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{program.schedule}</span>
                  </div>
                </div>
                <div className="pt-4">
                  <div className="w-full h-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full group-hover:from-primary group-hover:to-secondary transition-all duration-300"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
