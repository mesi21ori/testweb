export interface Event {
  id: string
  title: string
  description: string
  imageUrl: string
  place: string
  startTime: Date
  endTime: Date
  category: string // Added for potential future filtering
}
