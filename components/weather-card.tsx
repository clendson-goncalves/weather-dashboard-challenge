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
  console.log("data: ", data);

  return (
    <Card className="w-full max-w-sm shadow-md hover:shadow-lg transition-shadow duration-500 weather-card">
      {/* Container for weather details with dynamic background color based on temperature */}
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
              <time dateTime={data.lastUpdated.toISOString()}>{formatUpdateTime(data.lastUpdated)}</time>
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex justify-between px-4 mt-3 gap-14">
            {/* Display current temperature */}
            <div className="relative">
              <div className="text-white text-[90px] font-bold leading-none tracking-lighter">
                {data.temperature}
                <span className="absolute text-4xl top-5 px-2">°C</span>
              </div>
              {/* Display max and min temperature */}
              <div className="flex items-center">
                <div
                  className="bg-white/10 rounded-full py-0.5 flex items-center gap-3 px-2 text-white text-xs"
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
            <div className="flex flex-col items-center text-center justify-center text-white">
              <div className="mt-1 mb-1" aria-hidden="true">
                <WeatherIcon iconCode={data.icon} stroke="white"/>
              </div>
              <div className="flex flex-col items-center justify-center text-xs font-medium">{data.description}</div>
            </div>
          </div>

          {/* Display additional weather details */}
          <div
            className="hidden sm:block mt-6 p-3 bg-white/10 rounded-xl text-white"
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

        {/* Display hourly and daily forecasts */}
        <div className="w-full bg-white dark:bg-slate-800 rounded-xl p-4 mt-8 hidden md:block">
          <HourlyForecast data={data}/>
          <DailyForecast data={data}/>
        </div>
      </div>
    </Card>
  );
}
