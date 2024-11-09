import { Box } from "@mui/material"

import dayClear from "../assets/day_clear.jpg"
import dayRain from "../assets/day_rain.jpg"
import nightClear from "../assets/night_clear.jpg"
import nightRain from "../assets/night_rain.jpg"
import { weatherConditions } from "./weatherConditions"

export function Background({
  isDay,
  conditionCode,
}: {
  isDay: boolean
  conditionCode: number
}) {
  function getBackground(isDay: boolean, condition: string) {
    if (condition === "rain") return isDay ? dayRain : nightRain
    return isDay ? dayClear : nightClear
    // 'sunny'
    // 'cloudy'
    // 'rain'
    // 'snow'
    // 'fog'
  }
  function getConditionText(conditionCode: number) {
    if (!(conditionCode in weatherConditions)) return ""
    return weatherConditions[conditionCode].simple
  }
  //1030=rain

  //
  return (
    <Box
      id='weather-background'
      sx={{
        height: "100%",
        width: "100%",
        position: "absolute",

        "& .illu": {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center -60px",
          opacity: 0.5,
          position: "absolute",
          zIndex: -1,
        },
      }}
    >
      <img
        className='illu'
        src={getBackground(isDay, getConditionText(conditionCode))}
        alt='bg-img'
      />
    </Box>
  )
}
