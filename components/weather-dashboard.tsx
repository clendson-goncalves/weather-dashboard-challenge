"use client"

import { useEffect, useState } from "react"
import { useWeatherStore } from "@/lib/store"
import WeatherCard from "./weather-card"

export default function WeatherDashboard() {
  const { weatherData, fetchWeatherData, loading, error } = useWeatherStore()
  const [lastUpdated, setLastUpdated] = useState<string | null>(null)

  useEffect(() => {
    // Function to fetch data and update timestamp
    const fetchData = async () => {
      await fetchWeatherData()
      setLastUpdated(new Date().toLocaleTimeString())
    }

    // Fetch weather data initially
    fetchData()

    // Set up interval to fetch weather data every 10 minutes
    const interval = setInterval(fetchData, 10 * 60 * 1000)

    // Clean up interval on component unmount
    return () => clearInterval(interval)
  }, [fetchWeatherData])

  return (
    <section className="w-full max-w-4xl">
      {loading && weatherData.length === 0 && (
        <div className="text-center mb-6">
          <p className="text-gray-600">Loading weather data...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6" role="alert">
          <p>{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {weatherData.map((data) => (
          <WeatherCard key={data.city} data={data} />
        ))}
      </div>

      {lastUpdated && (
        <div className="text-center mt-6 text-sm text-gray-500">
          <p>Last updated: {lastUpdated}</p>
          <p>Next update in {loading ? "..." : "10 minutes"}</p>
        </div>
      )}
    </section>
  )
}

