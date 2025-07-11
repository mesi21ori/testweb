"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users , Calendar} from "lucide-react"
interface Program {
  title: string
  description: string
  icon: React.ReactNode
  participants: string
  schedule: string
}

interface ProgramsSectionProps {
  programs: Program[]
}



export function ProgramsSection({ programs }: ProgramsSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-yellow-600/15 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-red-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-green-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full mb-6 shadow-2xl">
            <BookOpen className="w-10 h-10 text-black" />
          </div>
          <h2 className="text-5xl font-bold text-black mb-4">የምንሰጣቸው አገልግሎቶች</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-red-500 mx-auto rounded-full"></div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="group bg-white/10 backdrop-blur-lg border-0 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {program.icon}
                </div>
                <CardTitle className="text-xl font-bold text-black group-hover:text-yellow-300 transition-colors duration-300">
                  {program.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-center">{program.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                    <Users className="w-4 h-4" />
                    <span>{program.participants}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                    <Calendar className="w-4 h-4" />
                    <span>{program.schedule}</span>
                  </div>
                </div>
                <div className="pt-4">
                  <div className="w-full h-1 bg-gradient-to-r from-yellow-500/30 to-red-500/30 rounded-full group-hover:from-yellow-500 group-hover:to-red-500 transition-all duration-300"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
