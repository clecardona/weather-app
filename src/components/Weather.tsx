import { Box } from "@mui/material"

import { useWeather } from "../context/WeatherProvider"
import { Background } from "./Background"
import { CurrentContainer } from "./CurrentContainer"
import { Forecast } from "./Forecast/Forecast"

const Weather = () => {
  const { isLoading, currentWeather } = useWeather()

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      {!isLoading && (
        <Background
          isDay={currentWeather.isDay}
          conditionCode={currentWeather.conditionCode}
        />
      )}

      {/* Current Weather and time */}
      <CurrentContainer />

      {/* Hourly Forecast  Footer */}
      <Forecast title='Weather Today' />
    </Box>
  )
}

export default Weather
