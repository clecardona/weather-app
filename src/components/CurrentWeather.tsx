import { Box, Skeleton } from "@mui/material"

import { useWeather } from "../context/WeatherProvider"
import { WeatherIconAnimated } from "./weatherConditions"

export const CurrentWeather = () => {
  const { weatherData, isLoading } = useWeather()
  if (!weatherData || isLoading) return <Loading />

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 3,
        position: "relative",
      }}
    >
      {/* Current temperature */}
      <Box
        sx={{
          lineHeight: "160px",
          fontSize: "200px",
          position: "relative",
          backgroundImage:
            "-webkit-linear-gradient(#ffffff,#ffffff,#ffffff70, #ffffff00)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        }}
      >
        {Math.round(weatherData.current.temp_c)}°
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          bottom: "-30px",
          width: "100%",
        }}
      >
        <WeatherIconAnimated
          style={{ height: 100, filter: "saturate(0.3)" }}
          conditionCode={weatherData.current.condition.code}
          isDay={Boolean(weatherData.current.is_day)}
        />
      </Box>
    </Box>
  )
}
const Loading = () => {
  return (
    <Box className='text-left mb-8'>
      <Skeleton className='h-20 w-40 mx-auto' />
      <Skeleton className='h-6 w-32 mt-4 mx-auto' />
    </Box>
  )
}
