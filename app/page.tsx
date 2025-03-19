import WeatherDashboard from "@/components/weather-dashboard"

export default function Home() {
  return (
    <main className="min-h-screen p-8 flex flex-col items-center justify-center bg-gray-50">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Weather Monitor</h1>
        <p className="text-gray-500 mt-2">Real-time weather data for Joinville, San Francisco, and Urubici</p>
      </header>
      <WeatherDashboard />
      <footer className="mt-12 text-center text-sm text-gray-400">
        <p>Data provided by OpenWeatherMap</p>
      </footer>
    </main>
  )
}

