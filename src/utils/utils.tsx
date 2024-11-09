import { CircleOff } from "lucide-react"
import { Hour } from "types/types"

import { weatherConditions } from "../components/weatherConditions"

export function extractTime(dateString: string) {
  const dateObject = new Date(dateString)
  const hour = dateObject.getHours().toString().padStart(2, "0")
  const minute = dateObject.getMinutes().toString().padStart(2, "0")
  return `${hour}:${minute}`
}
export function getHoursToDisplay(array: Hour[]) {
  return array.filter(
    (hour) =>
      extractTime(hour.time) === "07:00" ||
      extractTime(hour.time) === "10:00" ||
      extractTime(hour.time) === "13:00" ||
      extractTime(hour.time) === "16:00" ||
      extractTime(hour.time) === "19:00" ||
      extractTime(hour.time) === "22:00"
  )
}
export function formatDateTime(dateStr: string): { day: string; time: string } {
  const date = new Date(dateStr)

  // Get month name
  const month = date.toLocaleString("en-US", { month: "short" })

  // Get day with leading zero if needed
  const day = date.getDate().toString().padStart(2, "0")

  // Get time in HH:mm format
  const time = date.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  })

  return {
    day: `${day} ${month}`,
    time,
  }
}

export function getConditionText(conditionCode: number) {
  if (!(conditionCode in weatherConditions)) return ""
  return weatherConditions[conditionCode].simple
}
export function getConditionIcon(conditionCode: number) {
  if (!(conditionCode in weatherConditions)) return <CircleOff />
  const Icon = weatherConditions[conditionCode].icon
  return <Icon />
}
