"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { History, Eye, Target, Heart, Info } from "lucide-react"

interface InfoData {
  history: string
  vision: string
  mission: string
  values: string[]
  about: string
}

interface InfoSectionsProps {
  info: InfoData
}

export function InfoSections({ info }: InfoSectionsProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-900/15 rounded-full mb-4">
            <Info className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3">
           መረጃ 
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r bg-yellow-900/15 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="about" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-white shadow-lg rounded-xl p-2 mb-8">
            <TabsTrigger
              value="about"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-900/15 data-[state=active]:to-red-500/10 data-[state=active]:text-black rounded-lg transition-all duration-300"
            >
              <Info className="w-4 h-4 mr-2" />
              ስለ እኛ
            </TabsTrigger>
            <TabsTrigger
              value="history"
             className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-900/15 data-[state=active]:to-red-500/10 data-[state=active]:text-black rounded-lg transition-all duration-300"
          >
              <History className="w-4 h-4 mr-2" />
              ታሪክ
            </TabsTrigger>
            <TabsTrigger
              value="vision"
             className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-900/15 data-[state=active]:to-red-500/10 data-[state=active]:text-black rounded-lg transition-all duration-300"
           >
              <Eye className="w-4 h-4 mr-2" />
              አላማ
            </TabsTrigger>
            <TabsTrigger
              value="mission"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-900/15 data-[state=active]:to-red-500/10 data-[state=active]:text-black rounded-lg transition-all duration-300"
           >
              <Target className="w-4 h-4 mr-2" />
              ተልዕኮ
            </TabsTrigger>
            <TabsTrigger
              value="values"
             className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-900/15 data-[state=active]:to-red-500/10 data-[state=active]:text-black rounded-lg transition-all duration-300"
           >
              <Heart className="w-4 h-4 mr-2" />
              እሴቶች
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-8">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-yellow-900/15 to-red-50 hover:shadow-3xl transition-all duration-500">
              <CardHeader className="bg-yellow-900 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Info className="w-6 h-6" />
                  </div>
                  About Our Ministry
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed text-lg">{info.about}</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="mt-8">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-yellow-50 to-red-50 hover:shadow-3xl transition-all duration-500">
              <CardHeader className="bg-yellow-900 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <History className="w-6 h-6" />
                  </div>
                  Our Heritage & History
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed text-lg">{info.history}</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="vision" className="mt-8">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-yellow-50 to-red-50 hover:shadow-3xl transition-all duration-500">
              <CardHeader className="bg-yellow-900  text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Eye className="w-6 h-6" />
                  </div>
                  Our Vision for the Future
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed text-lg">{info.vision}</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mission" className="mt-8">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-yellow-50 to-red-50 hover:shadow-3xl transition-all duration-500">
              <CardHeader className="bg-yellow-900 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Target className="w-6 h-6" />
                  </div>
                  Our Sacred Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed text-lg">{info.mission}</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="values" className="mt-8">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-yellow-50 to-red-50 hover:shadow-3xl transition-all duration-500">
              <CardHeader className="bg-yellow-900 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Heart className="w-6 h-6" />
                  </div>
                  Our Core Values
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {info.values.map((value, index) => (
                    <div key={index} className="group relative overflow-hidden">
                      <Badge
                        variant="outline"
                        className="w-full p-4 text-center border-2 border-yellow-900/15 bg-white hover:bg-yellow-900/15 hover:text-black hover:border-transparent transition-all duration-300 cursor-default text-base font-medium"
                      >
                        {value}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
