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
    CloudMoon,
    LucideProps
  } from "lucide-react"
  
export const getWeatherIcon = (iconCode: string, props: LucideProps = {}) => {
    const isDay = !iconCode.endsWith("n")
  
    // Default props for all icons
    const iconProps = {
      size: props.size || 40,
      className: props.className || "",
      strokeWidth: props.strokeWidth || 2,
      stroke: props.stroke || "white",
      fill: props.fill || "none",
    }
  
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
  
  