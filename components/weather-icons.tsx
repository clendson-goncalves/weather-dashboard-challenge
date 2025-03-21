import {
  Sun, Moon, Cloud, CloudDrizzle, CloudRain, CloudSnow,
  CloudFog, CloudLightning, CloudSun, CloudMoon,
  CloudMoonRain,
  CloudSunRain
} from "lucide-react"

/**
 * WeatherIcon component that renders an appropriate weather icon based on the given icon code.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.iconCode - The weather condition code (e.g., "01d" for clear sky during the day).
 * @param {number} [props.size=40] - The size of the icon.
 * @param {string} [props.viewBox="0 0 24 24"] - The viewBox of the icon.
 * @param {number} [props.strokeWidth=2] - The stroke width of the icon.
 * @param {string} [props.stroke="currentColor"] - The stroke color of the icon.
 * @param {string} [props.fill="none"] - The fill color of the icon.
 * @param {string} [props.className=""] - The class name of the icon.
 * @returns {JSX.Element} The corresponding weather icon component.
 */

export default function WeatherIcon({ 
  iconCode, 
  size = undefined, 
  viewBox = "0 0 24 24",
  strokeWidth = 2,
  stroke = "currentColor",
  fill = "none",
  className = ""
}: { iconCode: string, size?: number, viewBox?: string, strokeWidth?: number, stroke?: string, fill?: string, className?: string }) {
  
  const isDay = !iconCode.endsWith("n");

  const iconProps = { size, viewBox, strokeWidth, stroke, fill, className };

  const icons: { [key: string]: JSX.Element } = {
    "01": isDay ? <Sun {...iconProps} /> : <Moon {...iconProps} />,
    "02": isDay ? <CloudSun {...iconProps} /> : <CloudMoon {...iconProps} />,
    "03": isDay ? <Cloud {...iconProps} /> : <CloudMoon {...iconProps} />,
    "04": <CloudSunRain {...iconProps} />,
    "09": <CloudDrizzle {...iconProps} />,
    "10": isDay ? <CloudRain {...iconProps} /> : <CloudMoonRain {...iconProps} />,
    "11": <CloudLightning {...iconProps} />,
    "13": <CloudSnow {...iconProps} />,
    "50": <CloudFog {...iconProps} />
  };

  return icons[iconCode.slice(0, 2)] || <Cloud {...iconProps} />;
}


