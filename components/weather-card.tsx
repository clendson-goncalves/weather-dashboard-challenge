import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { WeatherData } from "@/lib/weather-store"
import { MapPin, ArrowUp, ArrowDown, ChevronDown } from "lucide-react"
import HourlyForecast from "@/components/hourly-forecast"
import { formatUpdateTime, getTemperatureColor } from "@/lib/utils"
import { getWeatherIcon } from "./weather-icons"

export default function WeatherCard({ data }: { data: WeatherData }) {

  return (
    <Card className="w-full max-w-sm shadow-md hover:shadow-lg transition-shadow duration-300 weather-card">
      <div className={`pt-4 flex flex-col rounded-xl ${getTemperatureColor(data.temperature)}`}>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center py-1">
              <div className="flex items-center gap-1 text-white">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                <span className="text-lg font-semibold">{data.city}, {data.country}</span>
              </div>
            </div>
            <div className="px-2 text-white/70 text-xs">
              <time dateTime="2025-10-18T05:10:00">{formatUpdateTime(data.lastUpdated)}</time>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between px-5 mt-3 gap-14">
            <div className="relative">
              <div className="text-white text-[90px] font-bold leading-none tracking-lighter">
                {data.temperature}<span className="absolute text-4xl top-5 px-2">°C</span>
              </div>
              <div className="flex items-center">
                <div
                  className="bg-white/10 rounded-full px-3 py-0.5 flex items-center gap-1 text-white text-xs"
                  aria-label="Temperature range: high 17 degrees, low 10 degrees"
                >
                  <ArrowUp className="w-3 h-3" aria-hidden="true" />
                  <span>{data.dailyForecast[0].maxTemp}°</span>
                  <ArrowDown className="w-3 h-3" aria-hidden="true" />
                  <span>{data.dailyForecast[0].minTemp}°</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center text-center justify-center text-white">
              <div className="mt-1" aria-hidden="true">{getWeatherIcon(data.icon)}</div>
              <div className="flex flex-col items-center justify-center text-xs font-medium">{data.description}</div>
            </div>
          </div>

          <div
            className="hidden sm:block mt-6 p-3 bg-white/10 backdrop-blur-md rounded-xl text-white"
            role="region"
            aria-label="Current weather conditions"
          >
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col items-center">
                <div className="text-xs text-center">Humidity</div>
                <div className="text-normal font-medium">{data.humidity}%</div>

              </div>
              <div className="flex flex-col items-center border-l border-white/30">
                <div className="text-xs text-center">Pressure</div>
                <div className="text-normal font-medium">{data.pressure} hPa</div>
              </div>
            </div>
          </div>
        </CardContent>

        <div className="w-full bg-white dark:bg-slate-800 rounded-xl p-4 mt-8">

          <HourlyForecast data={data} />


         {/* Daily forecasts - show only tomorrow on xs, show more on sm+, show all on md+ */}
         <div className="space-y-1" role="region" aria-label="Daily weather forecast">
            {/* Tomorrow - always visible */}
            <div
              className="border border-gray-200 rounded-xl py-2 px-3 flex items-center justify-between"
              aria-label="Tomorrow: Light Rain Showers, high 17 degrees, low 10 degrees"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 13v8M8 13v8M12 15v8M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-medium">Tomorrow</div>
                  <div className="text-[9px] text-muted-foreground">Light Rain Showers</div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-[9px]">
                <ArrowUp className="w-2 h-2" aria-hidden="true" />
                <span>17°</span>
                <ArrowDown className="w-2 h-2 ml-1" aria-hidden="true" />
                <span>10°</span>
              </div>
            </div>

            {/* Wednesday and Thursday - visible on sm+ */}
            <div className="hidden sm:block space-y-1">
              <div
                className="border border-gray-200 rounded-xl py-2 px-3 flex items-center justify-between"
                aria-label="Wednesday: Partly Cloudy, high 18 degrees, low 11 degrees"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 flex items-center justify-center" aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-medium">Wednesday</div>
                    <div className="text-[9px] text-muted-foreground">Partly Cloudy</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[9px]">
                  <ArrowUp className="w-2 h-2" aria-hidden="true" />
                  <span>18°</span>
                  <ArrowDown className="w-2 h-2 ml-1" aria-hidden="true" />
                  <span>11°</span>
                </div>
              </div>

              <div
                className="border border-gray-200 rounded-xl py-2 px-3 flex items-center justify-between"
                aria-label="Thursday: Sunny, high 21 degrees, low 12 degrees"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 flex items-center justify-center" aria-hidden="true">
                    <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                  </div>
                  <div>
                    <div className="text-xs font-medium">Thursday</div>
                    <div className="text-[9px] text-muted-foreground">Sunny</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[9px]">
                  <ArrowUp className="w-2 h-2" aria-hidden="true" />
                  <span>21°</span>
                  <ArrowDown className="w-2 h-2 ml-1" aria-hidden="true" />
                  <span>12°</span>
                </div>
              </div>
            </div>

            {/* Friday, Saturday, Sunday - visible on md+ */}
            <div className="hidden md:block space-y-1">
              <div
                className="border border-gray-200 rounded-xl py-2 px-3 flex items-center justify-between"
                aria-label="Friday: Cloudy, high 19 degrees, low 10 degrees"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 flex items-center justify-center" aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-medium">Friday</div>
                    <div className="text-[9px] text-muted-foreground">Cloudy</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[9px]">
                  <ArrowUp className="w-2 h-2" aria-hidden="true" />
                  <span>19°</span>
                  <ArrowDown className="w-2 h-2 ml-1" aria-hidden="true" />
                  <span>10°</span>
                </div>
              </div>

              <div
                className="border border-gray-200 rounded-xl py-2 px-3 flex items-center justify-between"
                aria-label="Saturday: Rain, high 16 degrees, low 9 degrees"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 flex items-center justify-center" aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 13v8M8 13v8M12 15v8M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-medium">Saturday</div>
                    <div className="text-[9px] text-muted-foreground">Rain</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[9px]">
                  <ArrowUp className="w-2 h-2" aria-hidden="true" />
                  <span>16°</span>
                  <ArrowDown className="w-2 h-2 ml-1" aria-hidden="true" />
                  <span>9°</span>
                </div>
              </div>

              <div
                className="border border-gray-200 rounded-xl py-2 px-3 flex items-center justify-between"
                aria-label="Sunday: Partly Cloudy, high 17 degrees, low 10 degrees"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 flex items-center justify-center" aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-medium">Sunday</div>
                    <div className="text-[9px] text-muted-foreground">Partly Cloudy</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[9px]">
                  <ArrowUp className="w-2 h-2" aria-hidden="true" />
                  <span>17°</span>
                  <ArrowDown className="w-2 h-2 ml-1" aria-hidden="true" />
                  <span>10°</span>
                </div>
              </div>
            </div>

            {/* Show more button on xs and sm screens */}
            <div className="sm:hidden text-center mt-2">
              <button className="text-xs text-muted-foreground flex items-center justify-center w-full gap-1">
                <span>Show more</span>
                <ChevronDown className="w-3 h-3" />
              </button>
            </div>

            {/* Show more button on sm screens (for md+ content) */}
            <div className="hidden sm:block md:hidden text-center mt-2">
              <button className="text-xs text-muted-foreground flex items-center justify-center w-full gap-1">
                <span>Show more days</span>
                <ChevronDown className="w-3 h-3" />
              </button>
            </div>
          </div>









        </div>
      </div>

    </Card>
  )
}

