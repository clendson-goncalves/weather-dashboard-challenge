"use client"

import { useEffect, useState } from "react"
import { useWeatherStore } from "@/lib/store"
import WeatherCard from "./weather-card"

export default function WeatherDashboard() {
  const { weatherData, fetchWeatherData, loading, error } = useWeatherStore()
  const [lastUpdated, setLastUpdated] = useState<string | null>(null)

  //set the count of minutes to fetch weather data
  const interval_minutes = 1

  useEffect(() => {
    // Function to fetch data and update timestamp
    const fetchData = async () => {
      await fetchWeatherData()
      setLastUpdated(new Date().toLocaleTimeString())
    }

    // Fetch weather data initially
    fetchData()

    // Set up interval to fetch weather data
    const interval = setInterval(fetchData, interval_minutes * 60 * 1000)

    // Clean up interval on component unmount
    return () => clearInterval(interval)
  }, [fetchWeatherData])

  return (
    <section className="w-full max-w-4xl">
      {loading && weatherData.length === 0 && (
        <div className="text-center mb-6">
          <p className="text-muted-foreground">Loading weather data...</p>
        </div>
      )}

      {error && (
        <div
          className="bg-destructive/10 border border-destructive text-destructive px-4 py-3 rounded-md mb-6"
          role="alert"
        >
          <p>{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {weatherData.map((data) => (
          <WeatherCard key={data.city} data={data} />
        ))}
      </div>

      {lastUpdated && (
        <div className="text-center mt-6 text-sm text-muted-foreground">
          <p>Last updated: {lastUpdated}</p>
          <p>Next update in {loading ? "..." : interval_minutes + " minutes"}</p>
        </div>
      )}
    </section>
  )
}

