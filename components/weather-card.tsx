/**
 * Imports required components and utilities.
 */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { WeatherData } from "@/lib/weather-store";
import { MapPin, ArrowUp, ArrowDown } from "lucide-react";
import HourlyForecast from "@/components/hourly-forecast";
import { formatUpdateTime, getTemperatureColor } from "@/lib/utils";
import WeatherIcon from "@/components/weather-icons";
import DailyForecast from "@/components/daily-forecast";

/**
 * WeatherCard component displays current weather data along with daily and hourly forecasts.
 * @param {Object} props - The component props.
 * @param {WeatherData} props.data - The weather data object.
 * @returns {JSX.Element} The rendered WeatherCard component.
 */
export default function WeatherCard({ data }: { data: WeatherData }) {
  
  return (
    <Card className="w-full shadow-md hover:shadow-lg transition-shadow duration-500 weather-card">
      {/* Container for weather details with dynamic background color based on temperature */}
      <div className={`pt-4 flex flex-col rounded-xl bg-gradient-to-tr ${getTemperatureColor(data.temperature)}`}>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center py-1">
              <div className="flex items-center gap-1 text-white">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                <span className="text-lg font-semibold">{data.city}, {data.country}</span>
              </div>
            </div>
            <div className="px-2 text-white/70 text-xs">
              <time dateTime={data.lastUpdated.toISOString()}>Today, {formatUpdateTime(data.lastUpdated)}</time>
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex justify-between gap-8">
            {/* Display current temperature */}
            <div className="flex flex-col items-center relative w-full">
              <div className="text-white text-9xl sm:text-9xl md:text-9xl lg:text-8xl xl:text-8xl font-bold tracking-lighter">
                {data.temperature}
                <span className="absolute text-4xl top-5 px-2">°C</span>
              </div>
              {/* Display max and min temperature */}
              <div className="flex items-center">
                <div
                  className="bg-white/10 rounded-full py-0.5 flex items-center gap-3 px-4 text-white lg:text-sm"
                  aria-label={`Temperature range: high ${data.dailyForecast[0].maxTemp} degrees, low ${data.dailyForecast[0].minTemp} degrees`}
                >
                  <ArrowUp className="w-3 h-3" aria-hidden="true" />
                  <span>{data.dailyForecast[0].maxTemp}°</span>
                  <ArrowDown className="w-3 h-3" aria-hidden="true" />
                  <span>{data.dailyForecast[0].minTemp}°</span>
                </div>
              </div>
            </div>
            {/* Display weather icon and description */}
            <div className="flex flex-col items-center text-center justify-center text-white w-full px-4">
              <div className="" aria-hidden="true">
                <WeatherIcon iconCode={data.icon} stroke="white" className="w-24 h-24 sm:w-24 sm:h-24 md:w-24 md:h-24 lg:w-10 lg:h-10 xl:w-10 xl:h-10"/>
              </div>
              <div className="font-medium text-4xl sm:text-4xl md:text-4xl lg:text-xs xl:text-xs">{data.description}</div>
            </div>
          </div>

          {/* Display additional weather details */}
          <div
            className="mt-6 p-3 bg-white/10 rounded-xl text-white mb-4 md:mb-0"
            role="region"
            aria-label="Current weather conditions"
          >
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col items-center">
                <div className="lg:text-xs text-center">Humidity</div>
                <div className="text-3xl lg:text-xl font-medium">{data.humidity}%</div>
              </div>
              <div className="flex flex-col items-center border-l border-white/30">
                <div className="lg:text-xs text-center">Pressure</div>
                <div className="text-3xl lg:text-xl font-medium">{data.pressure} hPa</div>
              </div>
            </div>
          </div>
        </CardContent>

        {/* Display hourly and daily forecasts */}
        <div className="w-full gap-2 bg-white dark:bg-slate-800 rounded-xl p-4 mt-8 hidden md:block">
          <HourlyForecast data={data}/>
          <DailyForecast data={data}/>
        </div>
      </div>
    </Card>
  );
}
