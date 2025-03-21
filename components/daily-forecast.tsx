"use client";

import type { WeatherData } from "@/lib/weather-store";
import WeatherIcon from "./weather-icons";
import { ArrowUp, ArrowDown } from "lucide-react";

/**
 * Displays the daily weather forecast.
 * 
 * @param {Object} props - Component props.
 * @param {WeatherData} props.data - Weather data including daily forecasts.
 * @returns {JSX.Element} The daily forecast component.
 */
export default function DailyForecast({ data }: { data: WeatherData }) {
  return (
    <div aria-labelledby="daily-forecast-title">
      <h3 id="daily-forecast-title" className="p-1 mb-2 text-xs font-semibold">Daily Forecast</h3>
      <ul role="list">
        {data.dailyForecast.map((item, index) => (
          <li
            key={index}
            className="border border-foreground/10 rounded-xl mb-1 py-2 px-3 flex items-center justify-between"
            role="listitem"
            aria-label={`${item.date.toLocaleDateString('en-US', { weekday: 'long' })}: ${item.description}, max ${item.maxTemp}°, min ${item.minTemp}°`}
          >
            <div className="flex items-center gap-2">
              <WeatherIcon iconCode={item.icon} size={18} aria-hidden="true" />
              <div>
                <div className="text-xs font-medium">{item.date.toLocaleDateString('en-US', { weekday: 'long' })}</div>
                <div className="text-[10px] text-muted-foreground">{item.description}</div>
              </div>
            </div>
            <div className="flex items-center gap-1 text-[10px]" aria-hidden="true">
              <ArrowUp className="w-2 h-2" />
              <span>{item.maxTemp}°</span>
              <ArrowDown className="w-2 h-2 ml-1" />
              <span>{item.minTemp}°</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
