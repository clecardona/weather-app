import { Hour } from "types/types"

export function extractTime(dateString: string) {
  const dateObject = new Date(dateString)
  const hour = dateObject.getHours().toString().padStart(2, "0")
  const minute = dateObject.getMinutes().toString().padStart(2, "0")
  return `${hour}:${minute}`
}
export function getHoursToDisplay(array: Hour[]) {
  return array.filter(
    (hour) =>
      extractTime(hour.time) === "08:00" ||
      extractTime(hour.time) === "10:00" ||
      extractTime(hour.time) === "12:00" ||
      extractTime(hour.time) === "16:00"
  )
}
