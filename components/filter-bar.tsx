"use client"

import type React from "react"

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"
import { useState } from "react"

interface FilterBarProps {
  onSearchChange: (query: string) => void
  onTimeFilterChange: (filter: "all" | "upcoming" | "past") => void
}

export function FilterBar({ onSearchChange, onTimeFilterChange }: FilterBarProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [timeFilter, setTimeFilter] = useState<"all" | "upcoming" | "past">("all")

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    onSearchChange(query)
  }

  const handleTimeFilter = (value: "all" | "upcoming" | "past") => {
    setTimeFilter(value)
    onTimeFilterChange(value)
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
        <Input
          type="text"
          placeholder="Search events..."
          className="pl-9 pr-4 py-2 rounded-md border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 w-full"
          value={searchQuery}
          onChange={handleSearch}
          aria-label="Search events"
        />
      </div>
      <Select value={timeFilter} onValueChange={handleTimeFilter}>
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder="Filter by time" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Events</SelectItem>
          <SelectItem value="upcoming">Upcoming Events</SelectItem>
          <SelectItem value="past">Past Events</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
