import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

 export const getTemperatureColor = (temp: number) => {
    switch (true) {
      case temp <= 5:
        return "bg-gradient-to-b from-sky-500 to-sky-700"
      case temp > 5 && temp <= 25:
        return "bg-gradient-to-b from-orange-500 to-orange-700"
      default:
        return "bg-gradient-to-b from-red-500 to-red-700"
    }
  }

export const formatUpdateTime = (date: Date) => {
  const now = new Date()

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const month = monthNames[date.getMonth()]
  const day = date.getDate()

  const hours = date.getHours()
  const minutes = date.getMinutes().toString().padStart(2, "0")

    return `Today, ${month} ${day} ${hours}:${minutes}`
}

