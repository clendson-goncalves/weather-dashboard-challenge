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
    ? "from-sky-400 to-sky-600"
    : temp <= 25
      ? "from-orange-400 to-orange-600"
      : "from-red-400 to-red-600"

/**
 * Formats a Date object into a readable update time string.
 *
 * @param {Date} date - The date to format.
 * @returns {string} - Formatted string like "Today, Jan 5 14:30".
 */
export const formatUpdateTime = (date: Date) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  return `${months[date.getMonth()]} ${date.getDate()} ${date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true })}`
}
