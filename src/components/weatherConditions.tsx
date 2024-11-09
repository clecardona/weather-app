import type { LucideIcon } from "lucide-react"
import {
  AlertCircle,
  Cloud,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSun,
  Snowflake,
  Sun,
  Wind,
} from "lucide-react"

interface WeatherCondition {
  text: string
  simple: string
  icon: LucideIcon
  color: string
}

// eslint-disable-next-line react-refresh/only-export-components
export const weatherConditions: Record<number, WeatherCondition> = {
  1000: {
    text: "Sunny",
    simple: "sunny",
    icon: Sun,
    color: "#EAB308", // yellow-500
  },
  1003: {
    text: "Partly cloudy",
    simple: "cloudy",
    icon: CloudSun,
    color: "#6B7280", // gray-500
  },
  1006: {
    text: "Cloudy",
    simple: "cloudy",
    icon: Cloud,
    color: "#9CA3AF", // gray-400
  },
  1009: {
    text: "Overcast",
    simple: "cloudy",
    icon: Cloud,
    color: "#9CA3AF", // gray-400
  },
  1030: {
    text: "Mist",
    simple: "rain",
    icon: CloudFog,
    color: "#D1D5DB", // gray-300
  },
  1063: {
    text: "Patchy rain possible",
    simple: "rain",
    icon: CloudRain,
    color: "#3B82F6", // blue-500
  },
  1066: {
    text: "Patchy snow possible",
    simple: "snow",
    icon: Snowflake,
    color: "#BFDBFE", // blue-200
  },
  1069: {
    text: "Patchy sleet possible",
    simple: "snow",
    icon: Snowflake,
    color: "#BFDBFE", // blue-200
  },
  1072: {
    text: "Patchy freezing drizzle possible",
    simple: "rain",
    icon: CloudRain,
    color: "#3B82F6", // blue-500
  },
  1087: {
    text: "Thundery outbreaks possible",
    simple: "rain",
    icon: CloudLightning,
    color: "#FACC15", // yellow-400
  },
  1114: {
    text: "Blowing snow",
    simple: "snow",
    icon: Wind,
    color: "#BFDBFE", // blue-200
  },
  1117: {
    text: "Blizzard",
    simple: "snow",
    icon: AlertCircle,
    color: "#EF4444", // red-500
  },
  1135: {
    text: "Fog",
    simple: "fog",
    icon: CloudFog,
    color: "#D1D5DB", // gray-300
  },
  1147: {
    text: "Freezing fog",
    simple: "fog",
    icon: CloudFog,
    color: "#D1D5DB", // gray-300
  },
  1150: {
    text: "Patchy light drizzle",
    simple: "rain",
    icon: CloudRain,
    color: "#3B82F6", // blue-500
  },
  1153: {
    text: "Light drizzle",
    simple: "rain",
    icon: CloudRain,
    color: "#3B82F6", // blue-500
  },
  1168: {
    text: "Freezing drizzle",
    simple: "rain",
    icon: CloudRain,
    color: "#3B82F6", // blue-500
  },
  1171: {
    text: "Heavy freezing drizzle",
    simple: "rain",
    icon: CloudRain,
    color: "#1D4ED8", // blue-700
  },
  1180: {
    text: "Patchy light rain",
    simple: "rain",
    icon: CloudRain,
    color: "#3B82F6", // blue-500
  },
  1183: {
    text: "Light rain",
    simple: "rain",
    icon: CloudRain,
    color: "#3B82F6", // blue-500
  },
  1186: {
    text: "Moderate rain at times",
    simple: "rain",
    icon: CloudRain,
    color: "#2563EB", // blue-600
  },
  1189: {
    text: "Moderate rain",
    simple: "rain",
    icon: CloudRain,
    color: "#2563EB", // blue-600
  },
  1192: {
    text: "Heavy rain at times",
    simple: "rain",
    icon: CloudRain,
    color: "#1D4ED8", // blue-700
  },
  1195: {
    text: "Heavy rain",
    simple: "rain",
    icon: CloudRain,
    color: "#1D4ED8", // blue-700
  },
  1198: {
    text: "Light freezing rain",
    simple: "rain",
    icon: CloudRain,
    color: "#3B82F6", // blue-500
  },
  1201: {
    text: "Moderate or heavy freezing rain",
    simple: "rain",
    icon: CloudRain,
    color: "#1D4ED8", // blue-700
  },
  1204: {
    text: "Light sleet",
    simple: "snow",
    icon: Snowflake,
    color: "#BFDBFE", // blue-200
  },
  1207: {
    text: "Moderate or heavy sleet",
    simple: "snow",
    icon: Snowflake,
    color: "#93C5FD", // blue-300
  },
  1210: {
    text: "Patchy light snow",
    simple: "snow",
    icon: Snowflake,
    color: "#BFDBFE", // blue-200
  },
  1213: {
    text: "Light snow",
    simple: "snow",
    icon: Snowflake,
    color: "#BFDBFE", // blue-200
  },
  1216: {
    text: "Patchy moderate snow",
    simple: "snow",
    icon: Snowflake,
    color: "#93C5FD", // blue-300
  },
  1219: {
    text: "Moderate snow",
    simple: "snow",
    icon: Snowflake,
    color: "#93C5FD", // blue-300
  },
  1222: {
    text: "Patchy heavy snow",
    simple: "snow",
    icon: Snowflake,
    color: "#60A5FA", // blue-400
  },
  1225: {
    text: "Heavy snow",
    simple: "snow",
    icon: Snowflake,
    color: "#60A5FA", // blue-400
  },
  1237: {
    text: "Ice pellets",
    simple: "snow",
    icon: Snowflake,
    color: "#93C5FD", // blue-300
  },
  1240: {
    text: "Light rain shower",
    simple: "rain",
    icon: CloudRain,
    color: "#3B82F6", // blue-500
  },
  1243: {
    text: "Moderate or heavy rain shower",
    simple: "rain",
    icon: CloudRain,
    color: "#1D4ED8", // blue-700
  },
  1246: {
    text: "Torrential rain shower",
    simple: "rain",
    icon: CloudRain,
    color: "#1E40AF", // blue-800
  },
  1249: {
    text: "Light sleet showers",
    simple: "snow",
    icon: Snowflake,
    color: "#BFDBFE", // blue-200
  },
  1252: {
    text: "Moderate or heavy sleet showers",
    simple: "snow",
    icon: Snowflake,
    color: "#93C5FD", // blue-300
  },
  1255: {
    text: "Light snow showers",
    simple: "snow",
    icon: Snowflake,
    color: "#BFDBFE", // blue-200
  },
  1258: {
    text: "Moderate or heavy snow showers",
    simple: "snow",
    icon: Snowflake,
    color: "#60A5FA", // blue-400
  },
  1261: {
    text: "Light showers of ice pellets",
    simple: "snow",
    icon: Snowflake,
    color: "#BFDBFE", // blue-200
  },
  1264: {
    text: "Moderate or heavy showers of ice pellets",
    simple: "snow",
    icon: Snowflake,
    color: "#93C5FD", // blue-300
  },
  1273: {
    text: "Patchy light rain with thunder",
    simple: "rain",
    icon: CloudLightning,
    color: "#FACC15", // yellow-400
  },
  1276: {
    text: "Moderate or heavy rain with thunder",
    simple: "rain",
    icon: CloudLightning,
    color: "#EAB308", // yellow-500
  },
  1279: {
    text: "Patchy light snow with thunder",
    simple: "snow",
    icon: CloudLightning,
    color: "#FACC15", // yellow-400
  },
  1282: {
    text: "Moderate or heavy snow with thunder",
    simple: "snow",
    icon: CloudLightning,
    color: "#EAB308", // yellow-500
  },
}
export const WeatherIcon = ({
  condition,
  style,
  ...props
}: {
  condition: number
  style?: object
}) => {
  const weather = weatherConditions[condition]
  return <weather.icon style={{ color: weather.color, ...style }} {...props} />
}
