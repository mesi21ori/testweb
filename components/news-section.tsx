"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Church, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface NewsItem {
  id: string;
  title: string;
  titleAmharic: string;
  summary: string;
  date: string;
  category: string;
  imageUrl: string;
  linkUrl?: string;
}

interface NewsSectionProps {
  news: NewsItem[];
}

export function NewsSection({ news }: NewsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % news.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + news.length) % news.length);
  };

  return (
    <section className="py-16 relative">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
         አዳዲስ መረጃዎች
        </h2>
        <p className="text-xl text-gray-600">በኦርቶዶክስ ተዋህዶ ቤተክርስቲያን ሰንበት ትምህርትቤቶች አንድነት የሚዘጋጁ አዳዲስ ዝግጅቶችን ከታች ይመልከቱ</p>
      </div>

      {/* Main Card Slider */}
      <div className="relative max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-4">
          {/* Left Arrow */}
          <Button
            onClick={prevSlide}
            className="w-16 h-16 bg-yellow-600/15 rounded-full flex items-center justify-center text-gray-800 shadow-lg hover:bg-gray-50 transition-all"
          >
            <ChevronLeft size={30} />
          </Button>

          {/* Card Content */}
          <div className="flex-1">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{
                  opacity: 0,
                  x: direction > 0 ? 100 : -100,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: direction > 0 ? -100 : 100,
                }}
                transition={{
                  duration: 0.4,
                }}
              >
                <Card className="relative overflow-hidden h-full flex flex-col">
                  {/* Image with gradient overlay */}
                  <div className="relative h-48 md:h-64 w-full">
                    <img
                      src={news[currentIndex].imageUrl}
                      alt={news[currentIndex].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  <div className="flex flex-col flex-grow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Church className="w-3 h-3" />
                          {news[currentIndex].category}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-1" />
                          {news[currentIndex].date}
                        </div>
                      </div>
                      <CardTitle className="text-xl">{news[currentIndex].title}</CardTitle>
                      <p className="text-sm text-gray-600">{news[currentIndex].titleAmharic}</p>
                    </CardHeader>

                    <CardContent className="flex flex-col flex-grow">
                      <p className="text-gray-700 mb-4">{news[currentIndex].summary}</p>
                       <Button 
                              variant="outline" 
                              className="w-24 sm:w-24 flex ml-[300px] bg-yellow-600/15 hover:bg-yellow-50"
                            >
                              የበለጠ መረጃ
                            
                            </Button>
                     
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <Button
            onClick={nextSlide}
            className="w-16 h-16 bg-yellow-600/15 rounded-full flex items-center justify-center text-gray-800 shadow-lg hover:bg-gray-50 transition-all"
          >
            <ChevronRight size={30} />
          </Button>
        </div>

        {/* Dots indicator */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="flex gap-2">
            {news.map((_, index) => (
              <Button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-yellow-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}