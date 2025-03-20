"use client"

import type { WeatherData } from "@/lib/weather-store"
import WeatherIcon from "./weather-icons"
import { ArrowUp, ArrowDown } from "lucide-react"
export default function DailyForecast({ data }: { data: WeatherData }) {
    return (
        <div>
            <div className="p-1 mb-2">
                <h3 className="text-xs font-semibold" id="daily-forecast">
                    Daily Forecast
                </h3>
            </div>

            {data.dailyForecast.slice(1).map((item, index) => (
                <div key={index} role="region">
                    <div className="border border-foreground/10 rounded-xl mb-1 py-2 px-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 flex items-center justify-center" aria-hidden="true">
                                <WeatherIcon iconCode={item.icon} size={18} />
                            </div>
                            <div>
                                <div className="text-xs font-medium">{item.date.toLocaleDateString('en-US', { weekday: 'long' })}</div>
                                <div className="text-[9px] text-muted-foreground">{item.description}</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 text-[9px]">
                            <ArrowUp className="w-2 h-2" aria-hidden="true" />
                            <span>{item.maxTemp}°</span>
                            <ArrowDown className="w-2 h-2 ml-1" aria-hidden="true" />
                            <span>{item.minTemp}°</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}