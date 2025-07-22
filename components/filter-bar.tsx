"use client"

import type React from "react"

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

interface FilterBarProps {
  onSearchChange: (query: string) => void
  onTimeFilterChange: (filter: "all" | "upcoming" | "past") => void
}

export function FilterBar({ onSearchChange, onTimeFilterChange }: FilterBarProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [timeFilter, setTimeFilter] = useState<"all" | "upcoming" | "past">("all")

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    onSearchChange(e.target.value)
  }

  const handleTimeFilter = (filter: "all" | "upcoming" | "past") => {
    setTimeFilter(filter)
    onTimeFilterChange(filter)
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search events..."
          className="pl-9 pr-4 py-2 rounded-md border border-input focus:ring-primary focus:border-primary w-full bg-input text-foreground"
          value={searchQuery}
          onChange={handleSearch}
          aria-label="Search events"
        />
      </div>
      <Select value={timeFilter} onValueChange={handleTimeFilter}>
        <SelectTrigger className="w-full md:w-[180px] bg-card text-foreground border-input">
          <SelectValue placeholder="Filter by time" />
        </SelectTrigger>
        <SelectContent className="bg-popover text-popover-foreground border-border">
          <SelectItem value="all" className="hover:bg-accent hover:text-accent-foreground">
            All Events
          </SelectItem>
          <SelectItem value="upcoming" className="hover:bg-accent hover:text-accent-foreground">
            Upcoming Events
          </SelectItem>
          <SelectItem value="past" className="hover:bg-accent hover:text-accent-foreground">
            Past Events
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
