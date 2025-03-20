import {
    Sun,
    Moon,
    Cloud,
    CloudDrizzle,
    CloudRain,
    CloudSnow,
    CloudFog,
    CloudLightning,
    CloudSun,
    CloudMoon
  } from "lucide-react"

export default function WeatherIcon({ 
    iconCode, 
    size = 40, 
    viewBox = "0 0 24 24",
    strokeWidth = 2,
    stroke = "currentColor",
    fill = "none" }: { iconCode: string, size?: number, viewBox?: string, strokeWidth?: number, stroke?: string, fill?: string }) {
  
    const isDay = !iconCode.endsWith("n")
    
    // Check if the dark class is present on the document
    const isDarkTheme = typeof document !== "undefined" && document.documentElement.classList.contains("dark");

    const iconProps = {
        size,
        viewBox,
        strokeWidth,
        stroke,
        fill,
    };

    switch (iconCode.slice(0, 2)) {
      case "01": // clear sky
        return isDay ? <Sun {...iconProps} /> : <Moon {...iconProps} />
  
      case "02": // few clouds
        return isDay ? <CloudSun {...iconProps} /> : <CloudMoon {...iconProps} />
  
      case "03": // scattered clouds
      case "04": // broken clouds
        return <Cloud {...iconProps} />
  
      case "09": // shower rain
        return <CloudDrizzle {...iconProps} />
  
      case "10": // rain
        return <CloudRain {...iconProps} />
  
      case "11": // thunderstorm
        return <CloudLightning {...iconProps} />
  
      case "13": // snow
        return <CloudSnow {...iconProps} />
  
      case "50": // mist
        return <CloudFog {...iconProps} />
  
      default:
        return <Cloud {...iconProps} />
    }
  }
  
  