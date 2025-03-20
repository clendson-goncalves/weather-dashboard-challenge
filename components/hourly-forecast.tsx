"use client"

import type { WeatherData } from "@/lib/weather-store"
import { Card, CardHeader, CardTitle } from "./ui/card"

export default function HourlyForecast({ data }: { data: WeatherData }) {
    return (
        <div>
            <div className="p-1">
                <h3 className="text-xs font-semibold" id="hourly-forecast">
                    Hourly Forecast
                </h3>
            </div>
            <div className="grid grid-cols-5 gap-0 mb-3" role="region" aria-labelledby="hourly-forecast">
                {[
                    { time: "05:00 AM", temp: "23°", icon: "sun" },
                    { time: "06:00 AM", temp: "20°", icon: "cloud" },
                    { time: "07:00 AM", temp: "17°", icon: "cloud-rain" },
                    { time: "08:00 AM", temp: "16°", icon: "cloud-rain" },
                    { time: "09:00 AM", temp: "14°", icon: "cloud-rain" },

                ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center py-1" aria-label={`${item.time}, ${item.temp}`}>
                        {item.icon === "sun" && (
                            <div
                                className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center"
                                aria-hidden="true"
                            >
                                <div className="w-4 h-4 rounded-full bg-yellow-300"></div>
                            </div>
                        )}
                        {item.icon === "cloud" && (
                            <div className="w-6 h-6 flex items-center justify-center" aria-hidden="true">
                                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                                </svg>
                            </div>
                        )}
                        {item.icon === "cloud-rain" && (
                            <div className="w-6 h-6 flex items-center justify-center" aria-hidden="true">
                                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M16 13v8M8 13v8M12 15v8M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
                                </svg>
                            </div>
                        )}
                        <div className="text-[8px] text-gray-500 mt-0.5">{item.time}</div>
                        <div className="text-xs font-medium">{item.temp}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}   