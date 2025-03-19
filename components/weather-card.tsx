import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { WeatherData } from "@/lib/store"

export default function WeatherCard({ data }: { data: WeatherData }) {
  // Function to determine temperature color based on the requirements
  const getTemperatureColor = (temp: number) => {
    if (temp <= 5) return "text-temp-cold"
    if (temp <= 25 && temp > 5) return "text-temp-moderate"
    return "text-temp-hot"
  }

  // Function to get temperature description
  const getTemperatureDescription = (temp: number) => {
    if (temp <= 5) return "Cold"
    if (temp <= 25 && temp > 5) return "Moderate"
    return "Hot"
  }

  return (
    <Card className="w-full max-w-sm shadow-md hover:shadow-lg transition-shadow duration-300 weather-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">
          {data.city}, {data.country}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-col items-center justify-center py-2">
            <span className={`text-4xl font-bold ${getTemperatureColor(data.temperature)}`}>{data.temperature}°C</span>
            <span className="text-sm text-muted-foreground mt-1">{getTemperatureDescription(data.temperature)}</span>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2 border-t border-border">
            <div>
              <p className="text-muted-foreground text-sm">Humidity</p>
              <p className="text-lg font-medium">{data.humidity}%</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">Pressure</p>
              <p className="text-lg font-medium">{data.pressure} hPa</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

