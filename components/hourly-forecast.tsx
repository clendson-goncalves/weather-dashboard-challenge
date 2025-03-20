"use client"

import type { WeatherData } from "@/lib/weather-store"
import WeatherIcon from "./weather-icons"

export default function HourlyForecast({ data }: { data: WeatherData }) {
    return (
        <div>
            <div className="p-1">
                <h3 className="text-xs font-semibold" id="hourly-forecast">
                    Hourly Forecast
                </h3>
            </div>
            <div className="grid grid-cols-5 mb-3 py-1" role="region">
                {data.hourlyForecast.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="w-6 h-6 flex items-center justify-center"><WeatherIcon iconCode={item.icon} size={16} /></div>
                        <div className="text-[8px] text-gray-500 mt-0.5">{item.time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</div>
                        <div className="text-xs font-medium">{item.temperature}°</div>
                    </div>
                ))}
            </div>
        </div>
    )
}   