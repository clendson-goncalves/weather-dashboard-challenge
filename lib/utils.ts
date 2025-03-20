import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merges multiple class names using clsx and resolves Tailwind conflicts with twMerge.
 *
 * @param {...ClassValue[]} inputs - List of class values to merge.
 * @returns {string} - The final merged class string.
 */
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

/**
 * Returns a background gradient class based on the temperature.
 *
 * @param {number} temp - The temperature value.
 * @returns {string} - Corresponding Tailwind background gradient class.
 */
export const getTemperatureColor = (temp: number) =>
  temp <= 5
    ? "bg-gradient-to-b from-sky-500 to-sky-700"
    : temp <= 25
      ? "bg-gradient-to-b from-orange-500 to-orange-700"
      : "bg-gradient-to-b from-red-500 to-red-700"

/**
 * Formats a Date object into a readable update time string.
 *
 * @param {Date} date - The date to format.
 * @returns {string} - Formatted string like "Today, Jan 5 14:30".
 */
export const formatUpdateTime = (date: Date) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  return `Today, ${months[date.getMonth()]} ${date.getDate()} ${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")}`
}
