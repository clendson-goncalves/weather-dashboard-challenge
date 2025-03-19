import { create } from "zustand"
import { fetchWeatherForCity } from "./api"

export type WeatherData = {
  city: string
  country: string
  temperature: number
  humidity: number
  pressure: number
}

type WeatherStore = {
  weatherData: WeatherData[]
  loading: boolean
  error: string | null
  fetchWeatherData: () => Promise<void>
}

// Cities to fetch weather data for
const CITIES = [
  { name: "Joinville", countryCode: "BR" },
  { name: "San Francisco", countryCode: "US" },
  { name: "Urubici", countryCode: "BR" },
]

export const useWeatherStore = create<WeatherStore>((set) => ({
  weatherData: [],
  loading: false,
  error: null,
  fetchWeatherData: async () => {
    set({ loading: true, error: null })

    try {
      const weatherPromises = CITIES.map((city) => fetchWeatherForCity(city.name, city.countryCode))

      const weatherData = await Promise.all(weatherPromises)
      set({ weatherData, loading: false })
    } catch (error) {
      console.error("Error in fetchWeatherData:", error)
      set({
        error: "Failed to fetch weather data. Please try again later.",
        loading: false,
      })
    }
  },
}))

