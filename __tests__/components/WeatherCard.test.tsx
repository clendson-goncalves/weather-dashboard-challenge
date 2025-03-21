import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import WeatherCard from "@/components/weather-card";

const baseDate = new Date("2024-03-21T12:00:00");

const mockWeatherData = {
  city: "Joinville",
  country: "BR",
  temperature: 25,
  minTemp: 20,
  maxTemp: 30,
  humidity: 80,
  pressure: 1015,
  description: "Clear sky",
  icon: "01d",
  lastUpdated: baseDate,
  hourlyForecast: Array.from({ length: 5 }, (_, i) => ({
    time: new Date(baseDate.getTime() + i * 3600000), // +i hours
    temperature: 25 - i,
    icon: "01d",
  })),
  dailyForecast: Array.from({ length: 5 }, (_, i) => ({
    date: new Date(baseDate.getTime() + i * 86400000), // +i days
    minTemp: 20 - i,
    maxTemp: 30 - i,
    icon: "01d",
    description: "Clear sky",
  })),
};

describe("WeatherCard", () => {
  test("renders weather information correctly", () => {
    render(<WeatherCard data={mockWeatherData} />);

    // Basic weather info
    expect(screen.getByText("Joinville, BR")).toBeInTheDocument();
    expect(screen.getByText("25")).toBeInTheDocument();
    
    // Temperature range (using aria-label)
    expect(screen.getByLabelText("Temperature range: high 30 degrees, low 20 degrees")).toBeInTheDocument();

    // Hourly temperatures (using getAllByText and checking count)
    const hourlyTemps = mockWeatherData.hourlyForecast.map(f => `${f.temperature}°`);
    hourlyTemps.forEach(temp => {
      expect(screen.getAllByText(temp).length).toBeGreaterThan(0);
    });
  });
});
