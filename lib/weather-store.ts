import { create } from "zustand"

/**
 * Represents the hourly weather forecast.
 */
type HourlyForecast = { time: Date; temperature: number; icon: string }

/**
 * Represents the daily weather forecast.
 */
type DailyForecast = { date: Date; minTemp: number; maxTemp: number; icon: string; description: string }

/**
 * Represents the weather data for a specific location.
 */
export type WeatherData = {
  city: string; country: string; temperature: number; minTemp: number; maxTemp: number;
  humidity: number; pressure: number; description: string; icon: string;
  hourlyForecast: HourlyForecast[]; dailyForecast: DailyForecast[]; lastUpdated: Date;
}

/**
 * API response type for current weather data.
 */
type WeatherAPIResponse = {
  main: { temp: number; temp_min: number; temp_max: number; humidity: number; pressure: number };
  weather: { description: string; icon: string }[];
}

/**
 * API response type for weather forecast data.
 */
type ForecastAPIResponse = {
  list: { dt: number; main: { temp: number }; weather: { icon: string }[] }[];
}

/**
 * Zustand store type for managing weather data.
 */
type WeatherStore = { data: WeatherData[]; loading: boolean; error: string | null; fetchWeather: () => Promise<void> }

/**
 * List of predefined cities for fetching weather data.
 */
const CITIES = [
  { name: "Joinville", country: "BR", state: "SC" },
  { name: "San Francisco", country: "US", state: "CA" },
  { name: "Urubici", country: "BR", state: "SC" }
]

/**
 * Zustand store for managing weather state, including fetching data from OpenWeather API.
 */
export const useWeatherStore = create<WeatherStore>((set) => ({
  data: [], loading: false, error: null,
  
  /**
   * Fetches weather data for predefined cities and updates the store.
   */
  fetchWeather: async () => {
    set({ loading: true, error: null })
    try {
      const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY
      
      /**
       * Fetches JSON data from a given URL.
       * @param {string} url - The API endpoint to fetch data from.
       * @returns {Promise<T>} - The parsed JSON response.
       */
      const fetchJson = async <T>(url: string): Promise<T> => (await fetch(url)).json()
      
      const weatherData = await Promise.all(
        CITIES.map(async ({ name, country, state }) => {
          const [current, forecast] = await Promise.all([
            fetchJson<WeatherAPIResponse>(`https://api.openweathermap.org/data/2.5/weather?q=${name},${state},${country}&units=metric&appid=${apiKey}`),
            fetchJson<ForecastAPIResponse>(`https://api.openweathermap.org/data/2.5/forecast?q=${name},${state},${country}&units=metric&appid=${apiKey}`)
          ])

          /**
           * Processes hourly forecast data.
           */
          const hourlyForecast = forecast.list.slice(0, 5).map(({ dt, main, weather }) => ({
            time: new Date(dt * 1000), temperature: Math.round(main.temp), icon: weather[0].icon,
          }))

          /**
           * Maps daily forecast data by grouping temperature and icon data by date.
           */
          const dailyMap = new Map<string, { date: Date; temps: number[]; icons: string[] }>()
          forecast.list.forEach(({ dt, main, weather }) => {
            const dateStr = new Date(dt * 1000).toDateString()
            if (!dailyMap.has(dateStr)) dailyMap.set(dateStr, { date: new Date(dt * 1000), temps: [], icons: [] })
            dailyMap.get(dateStr)?.temps.push(main.temp)
            dailyMap.get(dateStr)?.icons.push(weather[0].icon)
          })

          /**
           * Processes daily forecast data.
           */
          const dailyForecast = Array.from(dailyMap.values()).slice(0, 6).map(({ date, temps, icons }) => ({
            date, minTemp: Math.round(Math.min(...temps)), maxTemp: Math.round(Math.max(...temps)),
            icon: icons[Math.floor(icons.length / 2)], description: current.weather[0].description
          }))

          return {
            city: name, country, temperature: Math.round(current.main.temp),
            minTemp: Math.round(dailyForecast[0]?.minTemp ?? current.main.temp_min),
            maxTemp: Math.round(dailyForecast[0]?.maxTemp ?? current.main.temp_max),
            humidity: current.main.humidity, pressure: current.main.pressure,
            description: current.weather[0].description, icon: current.weather[0].icon,
            hourlyForecast, dailyForecast, lastUpdated: new Date(),
          }
        })
      )
      set({ data: weatherData, loading: false })
    } catch (error) {
      set({ error: (error as Error).message, loading: false })
    }
  },
}))
