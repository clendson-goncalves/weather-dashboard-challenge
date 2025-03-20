import { create } from "zustand"

export type WeatherData = {
  city: string
  country: string
  temperature: number
  minTemp: number
  maxTemp: number
  humidity: number
  pressure: number
  description: string
  icon: string
  hourlyForecast: Array<{
    time: Date
    temperature: number
    icon: string
  }>
  dailyForecast: Array<{
    date: Date
    minTemp: number
    maxTemp: number
    icon: string
  }>
  lastUpdated: Date
}

type WeatherStore = {
  data: WeatherData[]
  loading: boolean
  error: string | null
  fetchWeather: () => Promise<void>
}

const CITIES = [
  { name: "Joinville", country: "BR", state: "SC" },
  { name: "San Francisco", country: "US", state: "CA" },
  { name: "Urubici", country: "BR", state: "SC" },
]

export const useWeatherStore = create<WeatherStore>((set) => ({
  data: [],
  loading: false,
  error: null,
  fetchWeather: async () => {
    set({ loading: true, error: null })

    try {
      const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY

      const weatherData = await Promise.all(
        CITIES.map(async (city) => {
          // Get current weather
          const currentRes = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city.name},${city.state},${city.country}&units=metric&appid=${apiKey}`,
          )

          if (!currentRes.ok) throw new Error(`Error fetching data for ${city.name}`)
          const current = await currentRes.json()

          // Get forecast
          const forecastRes = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city.name},${city.state},${city.country}&units=metric&appid=${apiKey}`,
          )

          if (!forecastRes.ok) throw new Error(`Error fetching forecast for ${city.name}`)
          const forecast = await forecastRes.json()

          // Process hourly forecast (next 18 hours)
          const hourlyForecast = forecast.list.slice(0, 6).map((item: any) => ({
            time: new Date(item.dt * 1000),
            temperature: Math.round(item.main.temp),
            icon: item.weather[0].icon,
          }))

          // Process daily forecast
          const dailyMap = new Map()
          forecast.list.forEach((item: any) => {
            const date = new Date(item.dt * 1000).toDateString()
            if (!dailyMap.has(date)) {
              dailyMap.set(date, {
                date: new Date(item.dt * 1000),
                temps: [item.main.temp],
                icons: [item.weather[0].icon],
              })
            } else {
              const day = dailyMap.get(date)
              day.temps.push(item.main.temp)
              day.icons.push(item.weather[0].icon)
            }
          })

          const dailyForecast = Array.from(dailyMap.values())
            .map((day: any) => ({
              date: day.date,
              minTemp: Math.round(Math.min(...day.temps)),
              maxTemp: Math.round(Math.max(...day.temps)),
              icon: day.icons[Math.floor(day.icons.length / 2)], // middle of the day icon
            }))
            .slice(0, 5) // limit to 5 days

          return {
            city: city.name,
            country: city.country,
            temperature: Math.round(current.main.temp),
            minTemp: Math.round(dailyForecast[0]?.minTemp || current.main.temp_min),
            maxTemp: Math.round(dailyForecast[0]?.maxTemp || current.main.temp_max),
            humidity: current.main.humidity,
            pressure: current.main.pressure,
            description: current.weather[0].description,
            icon: current.weather[0].icon,
            hourlyForecast,
            dailyForecast,
            lastUpdated: new Date(),
          }
        }),
      )

      set({ data: weatherData, loading: false })
    } catch (error) {
      console.error(error)
      set({ error: (error as Error).message, loading: false })
    }
  },
}))

export type DailyForecast = {
  date: Date
  minTemp: number
  maxTemp: number
  icon: string
}

export type HourlyForecast = {
  time: Date
  temperature: number
  icon: string
}

