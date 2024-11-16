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

import { Box } from "@mui/material"

// Import all SVG files
import clearDay from "../assets/icons/clear-day.svg"
import clearNight from "../assets/icons/clear-night.svg"
import cloudy1Day from "../assets/icons/cloudy-1-day.svg"
import cloudy1Night from "../assets/icons/cloudy-1-night.svg"
import cloudy2Day from "../assets/icons/cloudy-2-day.svg"
import cloudy2Night from "../assets/icons/cloudy-2-night.svg"
import cloudy3Day from "../assets/icons/cloudy-3-day.svg"
import cloudy3Night from "../assets/icons/cloudy-3-night.svg"
import fogDay from "../assets/icons/fog-day.svg"
import fogNight from "../assets/icons/fog-night.svg"
import frostDay from "../assets/icons/frost-day.svg"
import frostNight from "../assets/icons/frost-night.svg"
import hailDay from "../assets/icons/hail.svg"
import hazeDay from "../assets/icons/haze-day.svg"
import hazeNight from "../assets/icons/haze-night.svg"
import thunderDay from "../assets/icons/isolated-thunderstorms-day.svg"
import thunderNight from "../assets/icons/isolated-thunderstorms-night.svg"
import rainy1Day from "../assets/icons/rainy-1-day.svg"
import rainy1Night from "../assets/icons/rainy-1-night.svg"
import rainy2Day from "../assets/icons/rainy-2-day.svg"
import rainy2Night from "../assets/icons/rainy-2-night.svg"
import rainy3Day from "../assets/icons/rainy-3-day.svg"
import rainy3Night from "../assets/icons/rainy-3-night.svg"
import sleet from "../assets/icons/snow-and-sleet-mix.svg"
import snowy1Day from "../assets/icons/snowy-1-day.svg"
import snowy1Night from "../assets/icons/snowy-1-night.svg"
import snowy2Day from "../assets/icons/snowy-2-day.svg"
import snowy2Night from "../assets/icons/snowy-2-night.svg"
import snowy3Day from "../assets/icons/snowy-3-day.svg"
import snowy3Night from "../assets/icons/snowy-3-night.svg"

interface WeatherCondition {
  text: string
  simple: string
  icon: LucideIcon
  color: string
  iconAnimated: { day: string; night: string }
}

// eslint-disable-next-line react-refresh/only-export-components
export const weatherConditions: Record<number, WeatherCondition> = {
  1000: {
    text: "Sunny",
    simple: "sunny",
    icon: Sun,
    color: "#EAB308",
    iconAnimated: {
      day: clearDay,
      night: clearNight,
    },
  },
  1003: {
    text: "Partly cloudy",
    simple: "cloudy",
    icon: CloudSun,
    color: "#6B7280",
    iconAnimated: {
      day: cloudy1Day,
      night: cloudy1Night,
    },
  },
  1006: {
    text: "Cloudy",
    simple: "cloudy",
    icon: Cloud,
    color: "#9CA3AF",
    iconAnimated: {
      day: cloudy2Day,
      night: cloudy2Night,
    },
  },
  1009: {
    text: "Overcast",
    simple: "cloudy",
    icon: Cloud,
    color: "#9CA3AF",
    iconAnimated: {
      day: cloudy3Day,
      night: cloudy3Night,
    },
  },
  1030: {
    text: "Mist",
    simple: "rain",
    icon: CloudFog,
    color: "#D1D5DB",
    iconAnimated: {
      day: hazeDay,
      night: hazeNight,
    },
  },
  1063: {
    text: "Patchy rain possible",
    simple: "rain",
    icon: CloudRain,
    color: "#3B82F6",
    iconAnimated: {
      day: rainy1Day,
      night: rainy1Night,
    },
  },
  1066: {
    text: "Patchy snow possible",
    simple: "snow",
    icon: Snowflake,
    color: "#BFDBFE",
    iconAnimated: {
      day: snowy1Day,
      night: snowy1Night,
    },
  },
  1069: {
    text: "Patchy sleet possible",
    simple: "snow",
    icon: Snowflake,
    color: "#BFDBFE",
    iconAnimated: {
      day: sleet,
      night: sleet,
    },
  },
  1072: {
    text: "Patchy freezing drizzle possible",
    simple: "rain",
    icon: CloudRain,
    color: "#3B82F6",
    iconAnimated: {
      day: frostDay,
      night: frostNight,
    },
  },
  1087: {
    text: "Thundery outbreaks possible",
    simple: "rain",
    icon: CloudLightning,
    color: "#FACC15",
    iconAnimated: {
      day: thunderDay,
      night: thunderNight,
    },
  },
  1114: {
    text: "Blowing snow",
    simple: "snow",
    icon: Wind,
    color: "#BFDBFE",
    iconAnimated: {
      day: snowy3Day,
      night: snowy3Night,
    },
  },
  1117: {
    text: "Blizzard",
    simple: "snow",
    icon: AlertCircle,
    color: "#EF4444",
    iconAnimated: {
      day: snowy3Day,
      night: snowy3Night,
    },
  },
  1135: {
    text: "Fog",
    simple: "fog",
    icon: CloudFog,
    color: "#D1D5DB",
    iconAnimated: {
      day: fogDay,
      night: fogNight,
    },
  },
  1147: {
    text: "Freezing fog",
    simple: "fog",
    icon: CloudFog,
    color: "#D1D5DB",
    iconAnimated: {
      day: fogDay,
      night: fogNight,
    },
  },
  1150: {
    text: "Patchy light drizzle",
    simple: "rain",
    icon: CloudRain,
    color: "#3B82F6",
    iconAnimated: {
      day: rainy1Day,
      night: rainy1Night,
    },
  },
  1153: {
    text: "Light drizzle",
    simple: "rain",
    icon: CloudRain,
    color: "#3B82F6",
    iconAnimated: {
      day: rainy1Day,
      night: rainy1Night,
    },
  },
  1168: {
    text: "Freezing drizzle",
    simple: "rain",
    icon: CloudRain,
    color: "#3B82F6",
    iconAnimated: {
      day: rainy1Day,
      night: rainy1Night,
    },
  },
  1171: {
    text: "Heavy freezing drizzle",
    simple: "rain",
    icon: CloudRain,
    color: "#1D4ED8",
    iconAnimated: {
      day: rainy2Day,
      night: rainy2Night,
    },
  },
  1180: {
    text: "Patchy light rain",
    simple: "rain",
    icon: CloudRain,
    color: "#3B82F6",
    iconAnimated: {
      day: rainy1Day,
      night: rainy1Night,
    },
  },
  1183: {
    text: "Light rain",
    simple: "rain",
    icon: CloudRain,
    color: "#3B82F6",
    iconAnimated: {
      day: rainy1Day,
      night: rainy1Night,
    },
  },
  1186: {
    text: "Moderate rain at times",
    simple: "rain",
    icon: CloudRain,
    color: "#2563EB",
    iconAnimated: {
      day: rainy2Day,
      night: rainy2Night,
    },
  },
  1189: {
    text: "Moderate rain",
    simple: "rain",
    icon: CloudRain,
    color: "#2563EB",
    iconAnimated: {
      day: rainy2Day,
      night: rainy2Night,
    },
  },
  1192: {
    text: "Heavy rain at times",
    simple: "rain",
    icon: CloudRain,
    color: "#1D4ED8",
    iconAnimated: {
      day: rainy3Day,
      night: rainy3Night,
    },
  },
  1195: {
    text: "Heavy rain",
    simple: "rain",
    icon: CloudRain,
    color: "#1D4ED8",
    iconAnimated: {
      day: rainy3Day,
      night: rainy3Night,
    },
  },
  1198: {
    text: "Light freezing rain",
    simple: "rain",
    icon: CloudRain,
    color: "#3B82F6",
    iconAnimated: {
      day: rainy1Day,
      night: rainy1Night,
    },
  },
  1201: {
    text: "Moderate or heavy freezing rain",
    simple: "rain",
    icon: CloudRain,
    color: "#1D4ED8",
    iconAnimated: {
      day: rainy3Day,
      night: rainy3Night,
    },
  },
  1204: {
    text: "Light sleet",
    simple: "snow",
    icon: Snowflake,
    color: "#BFDBFE",
    iconAnimated: {
      day: sleet,
      night: sleet,
    },
  },
  1207: {
    text: "Moderate or heavy sleet",
    simple: "snow",
    icon: Snowflake,
    color: "#93C5FD",
    iconAnimated: {
      day: sleet,
      night: sleet,
    },
  },
  1210: {
    text: "Patchy light snow",
    simple: "snow",
    icon: Snowflake,
    color: "#BFDBFE",
    iconAnimated: {
      day: snowy1Day,
      night: snowy1Night,
    },
  },
  1213: {
    text: "Light snow",
    simple: "snow",
    icon: Snowflake,
    color: "#BFDBFE",
    iconAnimated: {
      day: snowy1Day,
      night: snowy1Night,
    },
  },
  1216: {
    text: "Patchy moderate snow",
    simple: "snow",
    icon: Snowflake,
    color: "#93C5FD",
    iconAnimated: {
      day: snowy2Day,
      night: snowy2Night,
    },
  },
  1219: {
    text: "Moderate snow",
    simple: "snow",
    icon: Snowflake,
    color: "#93C5FD",
    iconAnimated: {
      day: snowy2Day,
      night: snowy2Night,
    },
  },
  1222: {
    text: "Patchy heavy snow",
    simple: "snow",
    icon: Snowflake,
    color: "#60A5FA",
    iconAnimated: {
      day: snowy3Day,
      night: snowy3Night,
    },
  },
  1225: {
    text: "Heavy snow",
    simple: "snow",
    icon: Snowflake,
    color: "#60A5FA",
    iconAnimated: {
      day: snowy3Day,
      night: snowy3Night,
    },
  },
  1237: {
    text: "Ice pellets",
    simple: "snow",
    icon: Snowflake,
    color: "#93C5FD",
    iconAnimated: {
      day: hailDay,
      night: hailDay,
    },
  },
  1240: {
    text: "Light rain shower",
    simple: "rain",
    icon: CloudRain,
    color: "#3B82F6",
    iconAnimated: {
      day: rainy1Day,
      night: rainy1Night,
    },
  },
  1243: {
    text: "Moderate or heavy rain shower",
    simple: "rain",
    icon: CloudRain,
    color: "#1D4ED8",
    iconAnimated: {
      day: rainy3Day,
      night: rainy3Night,
    },
  },
  1246: {
    text: "Torrential rain shower",
    simple: "rain",
    icon: CloudRain,
    color: "#1E40AF",
    iconAnimated: {
      day: rainy3Day,
      night: rainy3Night,
    },
  },
  1249: {
    text: "Light sleet showers",
    simple: "snow",
    icon: Snowflake,
    color: "#BFDBFE",
    iconAnimated: {
      day: sleet,
      night: sleet,
    },
  },
  1252: {
    text: "Moderate or heavy sleet showers",
    simple: "snow",
    icon: Snowflake,
    color: "#93C5FD",
    iconAnimated: {
      day: sleet,
      night: sleet,
    },
  },
  1255: {
    text: "Light snow showers",
    simple: "snow",
    icon: Snowflake,
    color: "#BFDBFE",
    iconAnimated: {
      day: snowy1Day,
      night: snowy1Night,
    },
  },
  1258: {
    text: "Moderate or heavy snow showers",
    simple: "snow",
    icon: Snowflake,
    color: "#60A5FA",
    iconAnimated: {
      day: snowy3Day,
      night: snowy3Night,
    },
  },
  1261: {
    text: "Light showers of ice pellets",
    simple: "snow",
    icon: Snowflake,
    color: "#BFDBFE",
    iconAnimated: {
      day: hailDay,
      night: hailDay,
    },
  },
  1264: {
    text: "Moderate or heavy showers of ice pellets",
    simple: "snow",
    icon: Snowflake,
    color: "#93C5FD",
    iconAnimated: {
      day: hailDay,
      night: hailDay,
    },
  },
  1273: {
    text: "Patchy light rain with thunder",
    simple: "rain",
    icon: CloudLightning,
    color: "#FACC15",
    iconAnimated: {
      day: thunderDay,
      night: thunderNight,
    },
  },
  1276: {
    text: "Moderate or heavy rain with thunder",
    simple: "rain",
    icon: CloudLightning,
    color: "#EAB308",
    iconAnimated: {
      day: thunderDay,
      night: thunderNight,
    },
  },
  1279: {
    text: "Patchy light snow with thunder",
    simple: "snow",
    icon: CloudLightning,
    color: "#FACC15",
    iconAnimated: {
      day: thunderDay,
      night: thunderNight,
    },
  },
  1282: {
    text: "Moderate or heavy snow with thunder",
    simple: "snow",
    icon: CloudLightning,
    color: "#EAB308",
    iconAnimated: {
      day: thunderDay,
      night: thunderNight,
    },
  },
}
// eslint-disable-next-line react-refresh/only-export-components
export default weatherConditions

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
interface WeatherIconAnimatedProps {
  conditionCode?: number
  isDay?: boolean
  style?: object
}

export const WeatherIconAnimated = ({
  conditionCode = 1000,
  isDay = true,
  style,
  ...props
}: WeatherIconAnimatedProps) => {
  const condition = weatherConditions[conditionCode]

  if (!condition) {
    console.warn(`Weather condition code ${conditionCode} not found`)
    return (
      <Box style={{ color: "white", ...style }} {...props}>
        <img
          src={isDay ? clearDay : clearNight}
          alt='Weather condition not found'
        />
      </Box>
    )
  }

  const iconSrc = isDay
    ? condition.iconAnimated.day
    : condition.iconAnimated.night

  return (
    <img
      src={iconSrc}
      alt={condition.text}
      title={condition.text}
      style={{ color: condition.color, ...style }}
      {...props}
    />
  )
}
