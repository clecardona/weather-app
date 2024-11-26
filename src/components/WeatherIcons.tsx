import { Box } from "@mui/material"

import clearDay from "../assets/icons/clear-day.svg"
import clearNight from "../assets/icons/clear-night.svg"
import { conditions } from "../utils/conditions"

export const WeatherIcon = ({
  condition,
  style,
  ...props
}: {
  condition: number
  style?: object
}) => {
  const weather = conditions[condition]
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
  const condition = conditions[conditionCode]

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
