import WeatherDashboard from "@/components/weather-dashboard"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen p-8 flex flex-col items-center justify-center bg-background">
      <ThemeToggle />
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-foreground">Weather Monitor</h1>
        <p className="text-muted-foreground mt-2">Real-time weather data for Joinville, San Francisco, and Urubici</p>
      </header>
      <WeatherDashboard />
      <footer className="mt-12 text-center text-xs text-muted-foreground">
        <p>Data provided by OpenWeatherMap</p>
      </footer>
    </main>
  )
}

