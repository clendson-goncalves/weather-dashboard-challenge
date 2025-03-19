type WeatherResponse = {
  city: string
  country: string
  temperature: number
  humidity: number
  pressure: number
}

export async function fetchWeatherForCity(city: string, countryCode: string): Promise<WeatherResponse> {
  const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY

  if (!API_KEY) {
    throw new Error("OpenWeather API key is missing")
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=metric&appid=${API_KEY}`,
    )

    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`)
    }

    const data = await response.json()

    // Format the country display based on the country code
    const countryDisplay = countryCode === "BR" ? "SC (Brazil)" : "CA (USA)"
    
    return {
      city: city,
      country: countryDisplay,
      temperature: Math.round(data.main.temp),
      humidity: data.main.humidity,
      pressure: data.main.pressure,
    }
  } catch (error) {
    console.error("Error fetching weather data:", error)
    throw error
  }
}

