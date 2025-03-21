"use client"

import { useEffect } from "react"
import { useWeatherStore } from "@/lib/weather-store"
import WeatherCard from "./weather-card"

/**
 * WeatherDashboard component fetches and displays weather data.
 * Updates weather information at a set interval.
 *
 * @returns {JSX.Element} The weather dashboard component.
 */
export default function WeatherDashboard() {
  const { data, fetchWeather, loading, error } = useWeatherStore()

  /*Update interval in minutes*/
  const minutes = 10

  const updateInterval = minutes * 60 * 1000 

  useEffect(() => {
    /**
     * Fetches weather data initially and sets up an interval for updates.
     */
    const updateWeather = () => fetchWeather()

    updateWeather() 
    const interval = setInterval(updateWeather, updateInterval)

    return () => clearInterval(interval)
  }, [fetchWeather, updateInterval])

  return (
    <section className="w-full max-w-4xl">
      {/* Display loading state */}
      {loading && (!data || data.length === 0) && (
        <p className="text-center text-muted-foreground">Loading weather data...</p>
      )}

      {/* Display error message if there's an issue fetching data */}
      {error && (
        <p className="text-destructive text-center">⚠️ {error}</p>
      )}

      {/* Display weather data if available */}
      {data && data.length > 0 ? (
        <>
          <div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full"
            key={data[0].lastUpdated.getTime()}
          >
            {data.map((item) => (
              <WeatherCard key={item.city} data={item} />
            ))}
          </div>

          {/* Display last update time and next update info */}
          <div className="text-center mt-6 text-sm text-muted-foreground">
            <p>Last updated: {data[0].lastUpdated.toLocaleTimeString()}</p>
            <p>Updated every {minutes} minutes</p>
          </div>
        </>
      ) : (
        !loading && <p className="text-center text-muted-foreground">No weather data available.</p>
      )}
    </section>
  )
}
