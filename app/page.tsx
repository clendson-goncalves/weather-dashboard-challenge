import WeatherDashboard from "@/components/weather-dashboard"
import { ThemeToggle } from "@/components/theme-toggle"

/**
 * Home page component.
 * Displays the weather dashboard and theme toggle.
 */
export default function Home() {
  return (
    <main className="min-h-screen p-8 flex flex-col items-center justify-center bg-background">
      <ThemeToggle />
      <header className="mb-6 text-center">
        <h1 className="text-4xl font-bold text-foreground" role="heading" aria-level={1}>
          Weather Monitor
        </h1>
        <h2 className="text-muted-foreground" role="heading" aria-level={2}>
          Real-time weather data for Joinville / SC (Brazil), San Francisco / CA (USA) and Urubici / SC (Brazil)
        </h2>
      </header>
      <WeatherDashboard />
      <footer className="mt-2 text-center text-xs text-muted-foreground" role="contentinfo">
        <p>Data provided by OpenWeatherMap</p>
      </footer>
    </main>
  )
}
