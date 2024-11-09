import { Box } from "@mui/material"

import { useWeather } from "../context/WeatherProvider"
import { Background } from "./Background"
import { CurrentContainer } from "./CurrentContainer"
import { Forecast } from "./Forecast"

// TODO: refactor by extracting components

const Weather = () => {
  const { weatherData, isLoading } = useWeather()

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      {!isLoading && weatherData && (
        <Background
          isDay={Boolean(weatherData.current.is_day)}
          conditionCode={weatherData.current.condition.code}
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
