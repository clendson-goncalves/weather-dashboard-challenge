"use client";

import type { WeatherData } from "@/lib/weather-store";
import WeatherIcon from "./weather-icons";

/**
 * Displays the hourly weather forecast.
 * 
 * @param {Object} props - Component props.
 * @param {WeatherData} props.data - Weather data including hourly forecasts.
 * @returns {JSX.Element} The hourly forecast component.
 */
export default function HourlyForecast({ data }: { data: WeatherData }) {
  return (
    <div aria-labelledby="hourly-forecast-title">
      <h3 id="hourly-forecast-title" className="p-1 text-mormal lg:text-xs font-semibold">Hourly Forecast</h3>
      <div className="grid grid-cols-5 mb-3 py-1" role="list">
        {data.hourlyForecast.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
            role="listitem"
            aria-label={`${item.time.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}, ${item.temperature}°`}
          >
            <WeatherIcon iconCode={item.icon} aria-hidden="true" className="w-10 h-10 lg:w-5 lg:h-5"/>
            <span className="text-xs lg:text-[8px] text-gray-500 mt-0.5">
              {item.time.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
            </span>
            <span className="font-medium text-xl lg:text-xs">{item.temperature}°</span>
          </div>
        ))}
      </div>
    </div>
  );
}
