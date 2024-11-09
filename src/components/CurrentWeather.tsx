import { Box, Skeleton } from "@mui/material"

import { useWeather } from "../context/WeatherProvider"
import { WeatherIcon } from "./weatherConditions"

export const CurrentWeather = () => {
  const { weatherData, isLoading } = useWeather()
  if (!weatherData || isLoading) return <Loading />

  //   const <Icon/> = getConditionIcon(weatherData.current.condition.code)
  //   getConditionIcon(weatherData.current.condition.code)
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
          "& svg": { width: 150 },
        }}
      >
        <WeatherIcon
          condition={weatherData.current.condition.code}
          style={{ height: 100, color: "white" }}
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
